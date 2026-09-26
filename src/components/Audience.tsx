import { BookOpenText, Cpu, Info, Palette } from "lucide-react";
import { course } from "../data/course";
import { SectionHeading } from "./SectionHeading";

const personas = [
  {
    icon: Cpu,
    color: "bg-violet-50 text-violet-700",
    title: "Informaatikaõpetajale",
    text: "kes soovib juhendada digiloovtöid süsteemsemalt ja kindlama käega.",
  },
  {
    icon: Palette,
    color: "bg-coral-50 text-coral-700",
    title: "Teiste ainete õpetajale",
    text: "kelle õpilaste idee võib saada veebilehe, roboti, liitreaalsuse lahenduse või muu digilahenduse kuju.",
  },
  {
    icon: BookOpenText,
    color: "bg-teal-50 text-teal-700",
    title: "Loovtöö juhendajale",
    text: "kes soovib oma kogemust laiendada digiprojektidele ja õpilaste meeskonnatööle.",
  },
];

export function Audience() {
  return (
    <section id="koolitusest" aria-labelledby="kellele-title" className="py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            id="kellele-title"
            eyebrow="Kellele"
            tone="coral"
            title="Koolitus on mõeldud kõigi ainete õpetajatele"
            lead={
              <>
                Kõigile, kes juhendavad või plaanivad juhendada <strong className="text-ink">digiloovtöid põhikoolis</strong>.
                Fookuses on III kooliastme õpilasmeeskonnad ja nende teekond ideest valmis lahenduseni.
              </>
            }
          />
          <p className="reveal mt-8 flex max-w-xl gap-3 rounded-2xl bg-sun-50 p-4 text-[0.95rem] leading-relaxed text-ink ring-1 ring-sun-300/60">
            <Info className="mt-0.5 size-5 shrink-0 text-sun-700" aria-hidden="true" />
            {course.prerequisite}
          </p>
        </div>

        <ul className="grid gap-4">
          {personas.map((p, i) => (
            <li
              key={p.title}
              className="reveal card flex gap-5 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lift"
              style={{ ["--delay" as string]: `${i * 90}ms` }}
            >
              <span className={`grid size-12 shrink-0 place-items-center rounded-2xl ${p.color}`}>
                <p.icon className="size-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-lg font-extrabold text-navy-900">{p.title}</h3>
                <p className="mt-1 leading-relaxed text-muted">{p.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
