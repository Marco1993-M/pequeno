const toneMap = {
  Construction: "bg-[#fff3ed] text-[#b14a2f]",
  Finishing: "bg-[#fef6df] text-[#8b6700]",
  "Pre-construction": "bg-[#eef4ff] text-[#35589a]",
  Completed: "bg-[#eaf8ef] text-[#2f7a4b]",
  Pass: "bg-[#eaf8ef] text-[#2f7a4b]",
  Corrections: "bg-[#fff3ed] text-[#b14a2f]",
  "Accepted with minor corrections": "bg-[#fff3ed] text-[#b14a2f]",
  Accepted: "bg-[#eaf8ef] text-[#2f7a4b]",
  "Draft in progress": "bg-[#eef4ff] text-[#35589a]",
  "Partial release": "bg-[#fef6df] text-[#8b6700]",
  "Reinspection required": "bg-[#feeceb] text-[#9d3030]",
  Ready: "bg-[#eef4ff] text-[#35589a]",
  "In progress": "bg-[#eef4ff] text-[#35589a]",
  Blocked: "bg-[#feeceb] text-[#9d3030]",
  Completed: "bg-[#eaf8ef] text-[#2f7a4b]",
  Locked: "bg-[#f3f4f6] text-gray-500",
  "Not applicable": "bg-[#f8f4ef] text-[#7a6252]",
  "In scope": "bg-[#eef4ff] text-[#35589a]",
  Open: "bg-[#feeceb] text-[#9d3030]",
  Closed: "bg-[#eaf8ef] text-[#2f7a4b]",
  "Safety file": "bg-[#eef4ff] text-[#35589a]",
  Drawings: "bg-[#f4f0ff] text-[#6544a5]",
  Certificates: "bg-[#f0f8ef] text-[#34714a]",
};

export default function StatusPill({ value }) {
  const tone = toneMap[value] || "bg-[#f3f4f6] text-gray-700";

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold tracking-[0.05em] ${tone}`}
    >
      {value}
    </span>
  );
}
