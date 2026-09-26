import { Lightbulb, Presentation, Smartphone, ArrowRight } from "lucide-react";

/**
 * Abstraktne illustratsioon: idee → meeskonnatöö Kanbanis → prototüüp → esitlus.
 * Kõik tekstid on dekoratiivsed (aria-hidden), sisu kirjeldab kõrval olev tekst.
 */
export function HeroIllustration() {
  return (
    <div className="relative mx-auto aspect-[5/4.6] w-full max-w-[34rem]" aria-hidden="true">
      {/* taustakuma */}
      <div className="absolute inset-[8%] rounded-full bg-violet-500/25 blur-3xl" />
      <div className="absolute right-[5%] bottom-[10%] size-40 rounded-full bg-teal-400/20 blur-3xl" />

      {/* teekond */}
      <svg viewBox="0 0 500 460" className="absolute inset-0 size-full" fill="none">
        <path
          className="dash-flow"
          d="M95 110 C 190 110, 180 230, 260 230 S 330 360, 420 360"
          stroke="url(#hero-path)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="6 8"
        />
        <defs>
          <linearGradient id="hero-path" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffc23d" />
            <stop offset="0.5" stopColor="#ff8a73" />
            <stop offset="1" stopColor="#3fd6c6" />
          </linearGradient>
        </defs>
      </svg>

      {/* 1. Idee */}
      <div className="float-slow absolute top-[6%] left-[2%] w-[36%] rotate-[-4deg] rounded-2xl bg-sun-300 p-4 text-navy-950 shadow-lift">
        <div className="mb-3 flex items-center gap-2">
          <span className="bulb-glow grid size-8 place-items-center rounded-lg bg-navy-950/10">
            <Lightbulb className="size-4" />
          </span>
          <span className="text-sm font-extrabold">Idee</span>
        </div>
        <div className="space-y-1.5">
          <div className="h-2 w-full rounded bg-navy-950/20" />
          <div className="h-2 w-4/5 rounded bg-navy-950/20" />
          <div className="h-2 w-3/5 rounded bg-navy-950/20" />
        </div>
      </div>

      {/* 2. Kanban */}
      <div className="absolute top-[30%] left-[30%] w-[52%] rounded-2xl border border-white/15 bg-white/95 p-3.5 text-navy-900 shadow-lift backdrop-blur">
        <div className="mb-2.5 flex items-center justify-between">
          <span className="text-[0.7rem] font-bold tracking-wider text-muted uppercase">Meeskonna tahvel</span>
          <span className="flex -space-x-1.5">
            <span className="size-5 rounded-full border-2 border-white bg-coral-400" />
            <span className="size-5 rounded-full border-2 border-white bg-teal-400" />
            <span className="size-5 rounded-full border-2 border-white bg-violet-400" />
          </span>
        </div>
        <div className="relative grid grid-cols-3 gap-2">
          {[
            { t: "Teha", c: ["bg-coral-50 border-coral-300", "bg-coral-50 border-coral-300"] },
            { t: "Töös", c: ["bg-sun-50 border-sun-300", "bg-violet-50 border-violet-300"] },
            { t: "Valmis", c: ["bg-teal-50 border-teal-300"] },
          ].map((col) => (
            <div key={col.t} className="rounded-lg bg-navy-50 p-1.5">
              <div className="mb-1.5 h-4 text-[0.62rem] leading-4 font-bold text-muted">{col.t}</div>
              <div className="space-y-1.5">
                {/* vaba koht liikuvale kaardile */}
                <div className="h-8 rounded-md border border-dashed border-navy-900/15" />
                {col.c.map((cls, i) => (
                  <div key={i} className={`h-8 rounded-md border-l-[3px] p-1.5 ${cls}`}>
                    <div className="h-1.5 w-full rounded bg-navy-900/15" />
                    <div className="mt-1 h-1.5 w-2/3 rounded bg-navy-900/15" />
                  </div>
                ))}
              </div>
            </div>
          ))}
          {/* liikuv ülesandekaart: teha → töös → valmis */}
          <div className="kanban-move absolute top-[1.75rem] h-8 rounded-md border-l-[3px] border-violet-500 bg-white p-1.5 shadow-lift ring-1 ring-violet-300">
            <div className="h-1.5 w-full rounded bg-violet-400/60" />
            <div className="mt-1 h-1.5 w-1/2 rounded bg-violet-400/40" />
          </div>
        </div>
      </div>

      {/* 3. Prototüüp */}
      <div className="float-slower absolute bottom-[4%] left-[8%] w-[27%] rounded-[1.4rem] border-4 border-navy-950 bg-white p-2 shadow-lift">
        <div className="mb-2 flex items-center gap-1.5 text-navy-900">
          <Smartphone className="size-3.5" />
          <span className="text-[0.65rem] font-extrabold">Prototüüp</span>
        </div>
        <div className="mb-1.5 h-10 rounded-md bg-gradient-to-br from-teal-300 to-violet-300" />
        <div className="space-y-1">
          <div className="h-1.5 w-full rounded bg-navy-900/15" />
          <div className="h-1.5 w-3/4 rounded bg-navy-900/15" />
        </div>
        <div className="tap-ring relative mt-2 h-4 rounded-full bg-coral-400" />
      </div>

      {/* 4. Esitlus */}
      <div className="float-slow absolute right-[0%] bottom-[16%] w-[38%] rounded-2xl bg-navy-800 p-3.5 text-white shadow-lift ring-1 ring-white/15">
        <div className="mb-2.5 flex items-center gap-2">
          <span className="grid size-7 place-items-center rounded-lg bg-teal-400 text-navy-950">
            <Presentation className="size-4" />
          </span>
          <span className="text-sm font-extrabold">Esitlus</span>
        </div>
        <div className="flex h-12 items-end gap-1.5">
          {[45, 70, 55, 90].map((h, i) => (
            <div
              key={i}
              className="bar-grow flex-1 origin-bottom rounded-t bg-gradient-to-t from-violet-500 to-teal-400"
              style={{ height: `${h}%`, animationDelay: `${i * 0.25}s` }}
            />
          ))}
        </div>
      </div>

      {/* sammude silt */}
      <div className="absolute top-[4%] right-[2%] flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-[0.7rem] font-bold text-white ring-1 ring-white/20 backdrop-blur">
        Idee <ArrowRight className="size-3" /> prototüüp <ArrowRight className="size-3" /> esitlus
      </div>
    </div>
  );
}
