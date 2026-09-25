"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import styles from "./page.module.css";

const SERVICE_ID = "service_7sp2v1f";
const TEMPLATE_ID = "template_31rth73";
const PUBLIC_KEY = "CN4db3HoeMcAONo2F";

const serviceOptions = [
  { value: "Design and build", title: "Design & build", description: "A bespoke home, from the first brief through the agreed construction scope." },
  { value: "LSF supply and installation", title: "LSF supply & installation", description: "We supply and install the steel structure for your project team." },
  { value: "LSF supply only", title: "LSF supply only", description: "We supply the structure for installation by your appointed team." },
  { value: "Not sure yet", title: "I need guidance", description: "Tell us what you have in mind and we’ll help define the right scope." },
];

const initialData = {
  service: "",
  location: "",
  landStatus: "",
  floorArea: "",
  budget: "",
  timeline: "",
  projectDetails: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState(initialData);
  const [status, setStatus] = useState("idle");
  const formRef = useRef(null);

  function change(event) {
    const { name, value } = event.target;
    setData((current) => ({ ...current, [name]: value }));
    if (status === "error") setStatus("idle");
  }

  function nextStep() {
    if (!formRef.current?.reportValidity()) return;
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function submit(event) {
    event.preventDefault();
    if (!formRef.current?.reportValidity() || status === "sending") return;
    setStatus("sending");

    // Keep the existing EmailJS template fields populated while adding the new project fields.
    const message = [
      `Service: ${data.service}`,
      `Location: ${data.location}`,
      `Land: ${data.landStatus || "Not provided"}`,
      `Approximate area: ${data.floorArea || "Not provided"}`,
      `Budget: ${data.budget || "Needs guidance"}`,
      `Timing: ${data.timeline || "Not provided"}`,
      `Project: ${data.projectDetails || "Not provided"}`,
    ].join("\n");
    const submissionData = {
      ...data,
      structureType: data.service,
      purpose: data.service,
      capacity: data.floorArea || "Not provided",
      features: message,
      turnkey: data.service,
      landOwned: data.landStatus || "Not provided",
      servicesAvailable: data.projectDetails || "Not provided",
      contact: `${data.firstName} ${data.lastName}, ${data.email}, ${data.phone || "No phone supplied"}`,
      message,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, submissionData, PUBLIC_KEY);
      setStatus("sent");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("Project enquiry could not be sent", error);
      setStatus("error");
    }
  }

  if (status === "sent") {
    return <main className={styles.success}><p className={styles.eyebrow}>Enquiry received</p><h1>Thank you for<br /><em>getting in touch.</em></h1><p>We’ll review your project details and contact you about the next step.</p><Link href="/projects">Explore our work <span aria-hidden="true">↗</span></Link></main>;
  }

  return <main className={styles.page}>
    <div className={styles.layout}>
      <aside className={styles.intro}>
        <p className={styles.eyebrow}>Pequeño / Start a conversation</p>
        <h1>Tell us about<br /><em>your project.</em></h1>
        <p>Whether you’re planning a complete home or need a lightweight steel structure, a few details will help us understand the opportunity.</p>
        <div className={styles.asideNote}><span>01</span><p>Start with what you know. An early brief and an approximate budget are enough for a first conversation.</p></div>
        <div className={styles.asideNote}><span>02</span><p>We’ll review your location, timing and required scope before discussing a suitable next step.</p></div>
        <div className={styles.contact}><span>Prefer to write directly?</span><a href="mailto:info@pequenohome.com">info@pequenohome.com</a></div>
      </aside>

      <section className={styles.formPanel} aria-label="Project enquiry">
        <div className={styles.progress}><span>Step {step} of 2</span><span>{step === 1 ? "The project" : "Your details"}</span></div>
        <div className={styles.progressTrack}><div style={{ width: `${step * 50}%` }} /></div>
        <form ref={formRef} onSubmit={submit}>
          {step === 1 ? <>
            <div className={styles.stepHeading}><p className={styles.eyebrow}>01 / The project</p><h2>What are you<br /><em>planning?</em></h2></div>
            <fieldset className={styles.serviceFieldset}><legend>What would you like help with? <span>*</span></legend><div className={styles.serviceOptions}>{serviceOptions.map((option) => <label key={option.value} className={`${styles.option} ${data.service === option.value ? styles.selected : ""}`}><input type="radio" name="service" value={option.value} checked={data.service === option.value} onChange={change} required /><span className={styles.optionMark} aria-hidden="true" /><span><strong>{option.title}</strong><small>{option.description}</small></span></label>)}</div></fieldset>
            <div className={styles.fields}>
              <label className={styles.full}>Where is the project? <span>*</span><input name="location" value={data.location} onChange={change} required placeholder="Town or area, province" autoComplete="address-level2" /></label>
              <label>What is your land status?<select name="landStatus" value={data.landStatus} onChange={change}><option value="">Select if known</option><option>I own the land</option><option>I am buying land</option><option>I am looking for land</option><option>Not applicable / unsure</option></select></label>
              <label>Approximate floor area<input name="floorArea" value={data.floorArea} onChange={change} placeholder="e.g. 250 m², or still exploring" /></label>
              <label>Budget you have in mind<input name="budget" value={data.budget} onChange={change} placeholder="A range is fine, or say unsure" /><small>For the full project if design-and-build; for the structure if LSF only.</small></label>
              <label>When would you like to begin?<select name="timeline" value={data.timeline} onChange={change}><option value="">Select if known</option><option>As soon as practical</option><option>Within 6 months</option><option>6–12 months</option><option>More than a year away</option><option>Still exploring</option></select></label>
              <label className={styles.full}>Anything else we should know?<textarea name="projectDetails" value={data.projectDetails} onChange={change} rows={4} placeholder="Tell us about the site, design ideas, or questions you have." /></label>
            </div>
            <div className={styles.actions}><button type="button" onClick={nextStep}>Continue <span aria-hidden="true">↗</span></button></div>
          </> : <>
            <div className={styles.stepHeading}><p className={styles.eyebrow}>02 / Your details</p><h2>How can we<br /><em>reach you?</em></h2><p>We’ll use these details to respond to your project enquiry.</p></div>
            <div className={styles.fields}>
              <label>First name <span>*</span><input name="firstName" value={data.firstName} onChange={change} required autoComplete="given-name" /></label>
              <label>Last name <span>*</span><input name="lastName" value={data.lastName} onChange={change} required autoComplete="family-name" /></label>
              <label className={styles.full}>Email address <span>*</span><input type="email" name="email" value={data.email} onChange={change} required autoComplete="email" /></label>
              <label className={styles.full}>Phone number <small>Optional</small><input type="tel" name="phone" value={data.phone} onChange={change} autoComplete="tel" /></label>
            </div>
            <div className={styles.review}><span>Your project</span><p>{data.service} <span aria-hidden="true">·</span> {data.location}</p><button type="button" onClick={() => setStep(1)}>Edit project details</button></div>
            {status === "error" && <p role="alert" className={styles.error}>Your enquiry could not be sent. Please try again, or email us at <a href="mailto:info@pequenohome.com">info@pequenohome.com</a>.</p>}
            <div className={styles.actions}><button type="button" className={styles.back} onClick={() => setStep(1)}>Back</button><button type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send enquiry"} <span aria-hidden="true">↗</span></button></div>
            <p className={styles.disclosure}>Submitting sends your details to Pequeño so we can respond to your enquiry.</p>
          </>}
        </form>
      </section>
    </div>
  </main>;
}
