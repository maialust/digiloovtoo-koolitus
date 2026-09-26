import { useRef } from "react";
import { useStepCycle } from "./useStepCycle";
import { modules } from "../data/course";
import { SectionHeading } from "./SectionHeading";

const palette = [
  { dot: "bg-sun-400", text: "text-sun-300", ring: "ring-sun-400/40", fill: "bg-sun-400", glow: "shadow-[0_0_28px_rgb(255_194_61/0.7)]", cardRing: "ring-sun-400/70" },
  { dot: "bg-coral-400", text: "text-coral-300", ring: "ring-coral-400/40", fill: "bg-coral-400", glow: "shadow-[0_0_28px_rgb(255_138_115/0.7)]", cardRing: "ring-coral-400/70" },
  { dot: "bg-violet-400", text: "text-violet-300", ring: "ring-violet-400/40", fill: "bg-violet-400", glow: "shadow-[0_0_28px_rgb(154_133_255/0.7)]", cardRing: "ring-violet-400/70" },
  { dot: "bg-teal-400", text: "text-teal-300", ring: "ring-teal-400/40", fill: "bg-teal-400", glow: "shadow-[0_0_28px_rgb(63_214_198/0.7)]", cardRing: "ring-teal-400/70" },
  { dot: "bg-coral-400", text: "text-coral-300", ring: "ring-coral-400/40", fill: "bg-coral-400", glow: "shadow-[0_0_28px_rgb(255_138_115/0.7)]", cardRing: "ring-coral-400/70" },
  { dot: "bg-sun-400", text: "text-sun-300", ring: "ring-sun-400/40", fill: "bg-sun-400", glow: "shadow-[0_0_28px_rgb(255_194_61/0.7)]", cardRing: "ring-sun-400/70" },
];

export function Modules() {
  const sectionRef = useRef<HTMLElement>(null);
  const { active, setActive, setPaused } = useStepCycle(modules.length, sectionRef);
  const progress = (active / (modules.length - 1)) * 100;

  const focusStep = (i: number) => {
    setActive(i);
    setPaused(true);
  };
  const release = () => setPaused(false);

  return (
    <section
      id="programm"
      ref={sectionRef}
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
            <div className="absolute inset-x-6 top-1/2 h-[3px] -translate-y-1/2 rounded bg-white/15" />
            <div
              className="absolute left-6 top-1/2 h-[3px] -translate-y-1/2 rounded bg-gradient-to-r from-sun-400 via-coral-400 via-40% to-teal-400 transition-[width] duration-700 ease-out"
              style={{ width: `calc((100% - 3rem) * ${progress / 100})` }}
            />
            {modules.map((m, i) => {
              const on = i === active;
              const done = i < active;
              return (
                <button
                  key={m.phase}
                  type="button"
                  tabIndex={-1}
                  onMouseEnter={() => focusStep(i)}
                  onMouseLeave={release}
                  onClick={() => focusStep(i)}
                  className="relative flex flex-col items-center gap-2"
                >
                  <span
                    className={`grid size-12 place-items-center rounded-full text-sm font-extrabold ring-4 transition-all duration-500 ${
                      on
                        ? `${palette[i].fill} scale-110 text-navy-950 ${palette[i].glow} ${palette[i].ring}`
                        : done
                          ? `bg-navy-800 text-white ${palette[i].ring}`
                          : "bg-navy-900 text-navy-100 ring-white/15"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span
                    className={`absolute top-14 text-xs font-bold tracking-wider whitespace-nowrap uppercase transition-opacity duration-500 ${palette[i].text} ${
                      on || done ? "opacity-100" : "opacity-60"
                    }`}
                  >
                    {m.phase}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <ol className="mt-12 grid gap-5 md:mt-20 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((m, i) => {
            const on = i === active;
            return (
              <li
                key={m.title}
                className="reveal flex"
                style={{ ["--delay" as string]: `${(i % 3) * 90}ms` }}
              >
                {/* Muutuvad klassid on sisemisel kastil, et ilmumisanimatsiooni klass ei kaoks. */}
                <div
                  onMouseEnter={() => focusStep(i)}
                  onMouseLeave={release}
                  onFocus={() => focusStep(i)}
                  onBlur={release}
                  tabIndex={0}
                  className={`flex w-full flex-col rounded-3xl p-7 backdrop-blur transition-all duration-500 ${
                    on
                      ? `bg-white/[0.12] ring-2 ${palette[i].cardRing} -translate-y-1`
                      : "bg-white/[0.06] ring-1 ring-white/12"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`size-2.5 rounded-full ${palette[i].dot} transition-transform duration-500 ${on ? "scale-150" : ""}`}
                      aria-hidden="true"
                    />
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
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
