export default function PortalTopbar({
  eyebrow,
  title,
  description,
  actions,
}) {
  return (
    <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm md:p-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c45734]">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-3 text-3xl font-semibold leading-tight text-[#111827] md:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
              {description}
            </p>
          ) : null}
        </div>
        {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
      </div>
    </div>
  );
}
