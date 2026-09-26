import { modules } from "../data/course";
import { SectionHeading } from "./SectionHeading";

const palette = [
  { dot: "bg-sun-400", text: "text-sun-300", ring: "ring-sun-400/40" },
  { dot: "bg-coral-400", text: "text-coral-300", ring: "ring-coral-400/40" },
  { dot: "bg-violet-400", text: "text-violet-300", ring: "ring-violet-400/40" },
  { dot: "bg-teal-400", text: "text-teal-300", ring: "ring-teal-400/40" },
  { dot: "bg-coral-400", text: "text-coral-300", ring: "ring-coral-400/40" },
  { dot: "bg-sun-400", text: "text-sun-300", ring: "ring-sun-400/40" },
];

export function Modules() {
  return (
    <section
      id="programm"
      aria-labelledby="programm-title"
      className="on-dark relative isolate overflow-hidden bg-navy-900 py-20 text-white sm:py-28"
    >
      <div className="bg-grid absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
      <div className="absolute top-10 -left-20 -z-10 size-96 rounded-full bg-violet-500/25 blur-[110px]" aria-hidden="true" />
      <div className="absolute -right-20 bottom-0 -z-10 size-96 rounded-full bg-teal-500/15 blur-[110px]" aria-hidden="true" />

      <div className="container-page">
        <SectionHeading
          id="programm-title"
          eyebrow="Programm"
          tone="light"
          dark
          title="Kuus teemaplokki: mõistmisest esitluseni"
          lead="Koolituse teekond järgib sama loogikat, mida õpetad hiljem oma õpilastele: probleemi mõistmine, lahenduse kavandamine, meeskonnatöö, prototüüp ja esitlus."
        />

        {/* teekonna riba */}
        <div className="reveal mt-12 hidden md:block" aria-hidden="true">
          <div className="relative flex items-center justify-between">
            <div className="absolute inset-x-6 top-1/2 h-[3px] -translate-y-1/2 rounded bg-gradient-to-r from-sun-400 via-coral-400 via-40% to-teal-400" />
            {modules.map((m, i) => (
              <div key={m.phase} className="relative flex flex-col items-center gap-2">
                <span
                  className={`grid size-12 place-items-center rounded-full bg-navy-900 text-sm font-extrabold ring-4 ${palette[i].ring}`}
                >
                  {i + 1}
                </span>
                <span className={`absolute top-14 text-xs font-bold tracking-wider whitespace-nowrap uppercase ${palette[i].text}`}>
                  {m.phase}
                </span>
              </div>
            ))}
          </div>
        </div>

        <ol className="mt-12 grid gap-5 md:mt-20 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((m, i) => (
            <li
              key={m.title}
              className="reveal flex flex-col rounded-3xl bg-white/[0.06] p-7 ring-1 ring-white/12 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/[0.09]"
              style={{ ["--delay" as string]: `${(i % 3) * 90}ms` }}
            >
              <div className="flex items-center gap-3">
                <span className={`size-2.5 rounded-full ${palette[i].dot}`} aria-hidden="true" />
                <span className={`text-xs font-bold tracking-[0.14em] uppercase ${palette[i].text}`}>
                  Moodul {i + 1} · {m.phase}
                </span>
              </div>
              <h3 className="mt-4 text-xl leading-snug font-extrabold">{m.title}</h3>
              <ul className="mt-5 space-y-2.5 text-[0.95rem] text-navy-100">
                {m.topics.map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className={`mt-2 size-1.5 shrink-0 rounded-full ${palette[i].dot}`} aria-hidden="true" />
                    <span>{t.charAt(0).toUpperCase() + t.slice(1)}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
