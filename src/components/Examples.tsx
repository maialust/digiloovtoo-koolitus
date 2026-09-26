import { useRef } from "react";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { useStepCycle } from "./useStepCycle";
import { digiloovtooIntro, exampleBook, examples } from "../data/course";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";

const tones = [
  { icon: "bg-violet-50 text-violet-700", bar: "from-violet-500 to-violet-300" },
  { icon: "bg-coral-50 text-coral-700", bar: "from-coral-500 to-coral-300" },
  { icon: "bg-teal-50 text-teal-700", bar: "from-teal-500 to-teal-300" },
  { icon: "bg-sun-50 text-sun-700", bar: "from-sun-400 to-sun-300" },
];

const flow = ["Sihtrühm ja vajadused", "Persoonad", "Paberprototüüp", "Interaktiivne prototüüp", "Esitlus"];

export function Examples() {
  const sectionRef = useRef<HTMLElement>(null);
  const cards = useStepCycle(examples.length, sectionRef, 1800);
  const steps = useStepCycle(flow.length, sectionRef, 1400);

  return (
    <section id="naited" ref={sectionRef} aria-labelledby="naited-title" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          id="naited-title"
          eyebrow="Näited"
          tone="coral"
          title="Milline digiloovtöö välja näeb?"
          lead="Digiloovtöö võib olla robot, rakendus, veebileht või virtuaaltuur. Oluline on, et õpilased lahendavad päris probleemi päris kasutajate jaoks."
        />

        {/* Mis on digiloovtöö */}
        <div className="reveal card mt-12 grid gap-8 p-7 sm:p-9 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <h3 className="text-xl font-extrabold text-navy-900">Mis on digiloovtöö?</h3>
            <p className="mt-3 leading-relaxed text-muted">{digiloovtooIntro}</p>
          </div>
          <ol className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center" aria-label="Digiloovtöö etapid">
            {flow.map((step, i) => (
              <li key={step} className="flex items-center gap-2">
                <span
                  className={`inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-bold text-navy-900 transition-all duration-500 ${
                    i === steps.active
                      ? "scale-105 bg-sun-300 shadow-soft ring-2 ring-sun-400"
                      : i < steps.active
                        ? "bg-sun-50 ring-1 ring-sun-300"
                        : "bg-paper ring-1 ring-line"
                  }`}
                >
                  <span className="grid size-5 place-items-center rounded-full bg-navy-900 text-[0.7rem] text-white" aria-hidden="true">
                    {i + 1}
                  </span>
                  {step}
                </span>
                {i < flow.length - 1 && <ChevronRight className="hidden size-4 text-muted sm:block" aria-hidden="true" />}
              </li>
            ))}
          </ol>
        </div>

        {/* Näidisprojektid */}
        <h3 className="reveal mt-14 text-xl font-extrabold text-navy-900">Näidisprojektid digiõpikust</h3>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {examples.map((ex, i) => {
            const t = tones[i % tones.length];
            const on = i === cards.active;
            return (
              <li
                key={ex.title}
                className="reveal"
                style={{ ["--delay" as string]: `${(i % 4) * 70}ms` }}
                onMouseEnter={() => {
                  cards.setActive(i);
                  cards.setPaused(true);
                }}
                onMouseLeave={() => cards.setPaused(false)}
                onFocus={() => {
                  cards.setActive(i);
                  cards.setPaused(true);
                }}
                onBlur={() => cards.setPaused(false)}
              >
                <a
                  href={ex.url}
                  target="_blank"
                  rel="noopener"
                  data-on={on || undefined}
                  className={`group card relative flex h-full flex-col overflow-hidden p-6 transition duration-500 ${
                    on ? "-translate-y-1.5 shadow-lift ring-2 ring-violet-300" : ""
                  }`}
                >
                  <span
                    className={`absolute inset-x-0 top-0 bg-gradient-to-r transition-all duration-500 ${t.bar} ${on ? "h-1.5" : "h-1"}`}
                    aria-hidden="true"
                  />
                  <div className="flex items-start justify-between">
                    <span
                      className={`grid size-12 place-items-center rounded-2xl transition-transform duration-500 ${t.icon} ${on ? "scale-110 -rotate-6" : ""}`}
                    >
                      <Icon name={ex.icon} className="size-6" />
                    </span>
                    <ArrowUpRight
                      className={`size-5 transition-all duration-300 ${on ? "translate-x-0.5 -translate-y-0.5 text-navy-900" : "text-muted"}`}
                      aria-hidden="true"
                    />
                  </div>
                  <h4 className="mt-5 text-[1.05rem] leading-snug font-extrabold text-navy-900">{ex.title}</h4>
                  <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-muted">{ex.text}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tehnoloogiad">
                    {ex.tags.map((tag) => (
                      <li key={tag} className="rounded-full bg-navy-50 px-2.5 py-1 text-xs font-semibold text-navy-800">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <span className="sr-only"> — vaata digiõpikus (avaneb uues aknas)</span>
                </a>
              </li>
            );
          })}
        </ul>

        <p className="reveal mt-6 text-sm leading-relaxed text-muted">
          Näited ja nende täielikud kirjeldused koos juhendamismaterjalidega leiad digiõpikust{" "}
          <a
            href={exampleBook.url}
            target="_blank"
            rel="noopener"
            className="font-semibold text-violet-700 underline underline-offset-4 hover:text-navy-900"
          >
            „{exampleBook.title}“<span className="sr-only"> (avaneb uues aknas)</span>
          </a>{" "}
          ({exampleBook.author}). Koolitusel kasutatakse digiõpikut ja õpetajaraamatut.
        </p>
      </div>
    </section>
  );
}
