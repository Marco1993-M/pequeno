"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  inspectionTemplates,
  inspections as seedInspections,
  projectFiles as seedProjectFiles,
  projects as seedProjects,
} from "@/data/portalMvp";

const STORAGE_KEY = "pequeno-portal-mvp";
const COMPLETE_DECISIONS = ["Accepted", "Accepted with minor corrections"];

const PortalContext = createContext(null);

function normalizeProject(project) {
  return {
    ...project,
    stageOverrides: project.stageOverrides || {},
  };
}

function buildInitialState() {
  return {
    projects: seedProjects.map(normalizeProject),
    inspections: seedInspections,
    projectFiles: seedProjectFiles,
  };
}

function buildInspectionDraft(
  projectId,
  stageKey,
  currentProjects,
  currentInspections,
) {
  const template = inspectionTemplates.find((item) => item.stageKey === stageKey);
  if (!template) return null;

  const today = new Date().toISOString().slice(0, 10);
  const projectCode =
    currentProjects.find((project) => project.id === projectId)?.projectNumber ||
    "PK";
  const sameStageCount = currentInspections.filter(
    (item) => item.projectId === projectId && item.stageKey === stageKey,
  ).length;
  const nextIndex = String(sameStageCount + 1).padStart(3, "0");

  return {
    id: `insp-${projectId}-${stageKey}-${Date.now()}`,
    projectId,
    stageKey,
    inspectionRequestNo: `${projectCode}-${stageKey.toUpperCase()}-${nextIndex}`,
    inspectionDate: today,
    area: "Main inspection zone",
    drawingRevision: "Latest issued",
    weather: "To be confirmed on site",
    inspectorName: "Site inspector",
    overallOutcome: "Draft inspection created. Update after site review.",
    releaseDecision: "Draft in progress",
    summaryNotes: "Use this draft to record the inspection findings on site.",
    items: template.items.map((item) => ({
      label: typeof item === "string" ? item : item.label,
      acceptanceCriteria:
        typeof item === "string"
          ? `Check ${item.toLowerCase()} against the issued stage requirements.`
          : item.acceptanceCriteria,
      status: "N/A",
      comments: "",
    })),
    correctiveActions: [],
    photos: [],
  };
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function getLatestInspectionForStage(inspections, projectId, stageKey) {
  return (
    inspections.find(
      (inspection) =>
        inspection.projectId === projectId && inspection.stageKey === stageKey,
    ) || null
  );
}

function getOpenCorrectiveActionsCount(inspection) {
  return inspection.correctiveActions.filter((item) => item.status !== "Closed")
    .length;
}

function getInspectionWorkflowStatus(inspection) {
  if (!inspection) return null;
  if (inspection.releaseDecision === "Draft in progress") return "In progress";
  if (inspection.releaseDecision === "Partial release") return "Blocked";
  if (inspection.releaseDecision === "Reinspection required") return "Blocked";
  if (
    inspection.releaseDecision === "Accepted with minor corrections" &&
    getOpenCorrectiveActionsCount(inspection) > 0
  ) {
    return "Blocked";
  }
  if (COMPLETE_DECISIONS.includes(inspection.releaseDecision)) return "Completed";
  return "In progress";
}

export function PortalProvider({ children }) {
  const [state, setState] = useState(buildInitialState);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return;

    try {
      const parsed = JSON.parse(stored);
      setState({
        projects: (parsed.projects || seedProjects).map(normalizeProject),
        inspections: parsed.inspections || seedInspections,
        projectFiles: parsed.projectFiles || seedProjectFiles,
      });
    } catch {
      setState(buildInitialState());
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const value = useMemo(() => {
    const getProjectById = (projectId) =>
      state.projects.find((project) => project.id === projectId) || null;

    const getInspectionsByProjectId = (projectId) =>
      state.inspections.filter((inspection) => inspection.projectId === projectId);

    const getInspectionById = (inspectionId) =>
      state.inspections.find((inspection) => inspection.id === inspectionId) || null;

    const getTemplateByStage = (stageKey) =>
      inspectionTemplates.find((template) => template.stageKey === stageKey) ||
      null;

    const getLatestInspectionForProjectStage = (projectId, stageKey) =>
      getLatestInspectionForStage(state.inspections, projectId, stageKey);

    const getFilesByProjectId = (projectId) =>
      state.projectFiles.filter((file) => file.projectId === projectId);

    const getProjectStagePlan = (projectId) => {
      const project = getProjectById(projectId);
      if (!project) return [];

      let priorActiveStageCompleted = true;

      return inspectionTemplates.map((template) => {
        const scopeState =
          project.stageOverrides?.[template.stageKey] === "not_applicable"
            ? "Not applicable"
            : "In scope";
        const latestInspection = getLatestInspectionForProjectStage(
          projectId,
          template.stageKey,
        );

        let workflowStatus = "Locked";

        if (scopeState === "Not applicable") {
          workflowStatus = "Not applicable";
        } else if (latestInspection) {
          workflowStatus = getInspectionWorkflowStatus(latestInspection);
        } else if (priorActiveStageCompleted) {
          workflowStatus = "Ready";
        }

        if (scopeState === "In scope") {
          priorActiveStageCompleted = workflowStatus === "Completed";
        }

        return {
          ...template,
          scopeState,
          workflowStatus,
          latestInspection,
          openCorrectiveActions: latestInspection
            ? getOpenCorrectiveActionsCount(latestInspection)
            : 0,
          isActionable: ["Ready", "In progress", "Blocked"].includes(
            workflowStatus,
          ),
        };
      });
    };

    const getProjectNextAction = (projectId) => {
      const stagePlan = getProjectStagePlan(projectId);
      return (
        stagePlan.find((stage) =>
          ["Ready", "In progress", "Blocked"].includes(stage.workflowStatus),
        ) || null
      );
    };

    const getPortalStats = () => {
      const openCorrectiveActions = state.inspections.reduce(
        (count, inspection) =>
          count +
          inspection.correctiveActions.filter((item) => item.status !== "Closed")
            .length,
        0,
      );

      return {
        projects: state.projects.length,
        activeProjects: state.projects.filter(
          (project) => project.status !== "Completed",
        ).length,
        inspections: state.inspections.length,
        openCorrectiveActions,
      };
    };

    const createInspectionDraft = (projectId, stageKey) => {
      const stagePlan = getProjectStagePlan(projectId);
      const stage = stagePlan.find((item) => item.stageKey === stageKey);

      if (
        !stage ||
        stage.workflowStatus === "Locked" ||
        stage.workflowStatus === "Not applicable"
      ) {
        return null;
      }

      const draft = buildInspectionDraft(
        projectId,
        stageKey,
        state.projects,
        state.inspections,
      );
      if (!draft) return null;

      setState((current) => ({
        ...current,
        inspections: [draft, ...current.inspections],
      }));

      return draft;
    };

    const addProject = (project) => {
      const nextProject = {
        id: `${slugify(project.name || "project")}-${Date.now()}`,
        name: project.name,
        projectNumber: project.projectNumber,
        address: project.address,
        clientName: project.clientName,
        projectType: project.projectType,
        status: project.status || "Pre-construction",
        siteManager: project.siteManager,
        createdAt: new Date().toISOString().slice(0, 10),
        stageOverrides: {},
      };

      setState((current) => ({
        ...current,
        projects: [nextProject, ...current.projects],
      }));

      return nextProject;
    };

    const updateInspection = (inspectionId, updater) => {
      setState((current) => ({
        ...current,
        inspections: current.inspections.map((inspection) =>
          inspection.id === inspectionId ? updater(inspection) : inspection,
        ),
      }));
    };

    const updateInspectionItem = (inspectionId, itemIndex, patch) => {
      updateInspection(inspectionId, (inspection) => ({
        ...inspection,
        items: inspection.items.map((item, index) =>
          index === itemIndex ? { ...item, ...patch } : item,
        ),
      }));
    };

    const updateInspectionField = (inspectionId, patch) => {
      updateInspection(inspectionId, (inspection) => ({
        ...inspection,
        ...patch,
      }));
    };

    const addCorrectiveAction = (inspectionId, payload) => {
      updateInspection(inspectionId, (inspection) => ({
        ...inspection,
        correctiveActions: [
          ...inspection.correctiveActions,
          {
            id: `ca-${Date.now()}`,
            title: payload.title,
            owner: payload.owner,
            dueDate: payload.dueDate,
            status: "Open",
          },
        ],
      }));
    };

    const addPhotoPlaceholder = (inspectionId, payload) => {
      updateInspection(inspectionId, (inspection) => ({
        ...inspection,
        photos: [
          ...inspection.photos,
          {
            id: `photo-${Date.now()}`,
            caption: payload.caption,
          },
        ],
      }));
    };

    const addProjectFile = (projectId, payload) => {
      setState((current) => ({
        ...current,
        projectFiles: [
          {
            id: `file-${Date.now()}`,
            projectId,
            category: payload.category,
            fileName: payload.fileName,
            uploadedBy: payload.uploadedBy,
            uploadedAt: new Date().toISOString().slice(0, 10),
          },
          ...current.projectFiles,
        ],
      }));
    };

    const setProjectStageScope = (projectId, stageKey, nextScopeState) => {
      setState((current) => ({
        ...current,
        projects: current.projects.map((project) => {
          if (project.id !== projectId) return project;

          const nextOverrides = { ...(project.stageOverrides || {}) };

          if (nextScopeState === "not_applicable") {
            nextOverrides[stageKey] = "not_applicable";
          } else {
            delete nextOverrides[stageKey];
          }

          return {
            ...project,
            stageOverrides: nextOverrides,
          };
        }),
      }));
    };

    return {
      projects: state.projects,
      inspections: state.inspections,
      projectFiles: state.projectFiles,
      inspectionTemplates,
      getProjectById,
      getInspectionsByProjectId,
      getInspectionById,
      getTemplateByStage,
      getLatestInspectionForProjectStage,
      getFilesByProjectId,
      getProjectStagePlan,
      getProjectNextAction,
      getPortalStats,
      addProject,
      createInspectionDraft,
      addCorrectiveAction,
      addPhotoPlaceholder,
      addProjectFile,
      setProjectStageScope,
      updateInspectionItem,
      updateInspectionField,
    };
  }, [state]);

  return (
    <PortalContext.Provider value={value}>{children}</PortalContext.Provider>
  );
}

export function usePortal() {
  const context = useContext(PortalContext);
  if (!context) {
    throw new Error("usePortal must be used within PortalProvider");
  }
  return context;
}
