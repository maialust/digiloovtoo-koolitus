import { GraduationCap } from "lucide-react";
import { trainers } from "../data/course";
import { SectionHeading } from "./SectionHeading";

const gradients = [
  "from-coral-400 via-sun-400 to-sun-300",
  "from-violet-500 via-violet-400 to-teal-400",
];

export function Trainers() {
  return (
    <section id="koolitajad" aria-labelledby="koolitajad-title" className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          id="koolitajad-title"
          eyebrow="Koolitajad"
          tone="coral"
          title="Kes koolitust läbi viivad?"
          lead="Koolitajad juhendavad sind kontaktpäevadel, veebikohtumistel ja portfoolio koostamisel."
        />

        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {trainers.map((t, i) => (
            <li
              key={t.name}
              className="reveal card flex flex-col gap-6 p-7 sm:flex-row sm:items-center"
              style={{ ["--delay" as string]: `${i * 100}ms` }}
            >
              {t.photo ? (
                <img
                  src={`${import.meta.env.BASE_URL}koolitajad/${t.photo}`}
                  alt={`Koolitaja ${t.name}`}
                  width={112}
                  height={112}
                  loading="lazy"
                  className="size-28 shrink-0 rounded-3xl object-cover"
                />
              ) : (
                <span
                  className={`grid size-28 shrink-0 place-items-center rounded-3xl bg-gradient-to-br text-navy-950 ${gradients[i % gradients.length]}`}
                  aria-hidden="true"
                >
                  <GraduationCap className="size-11" strokeWidth={1.6} />
                </span>
              )}
              <div>
                <h3 className="text-2xl font-extrabold tracking-tight text-navy-900">{t.name}</h3>
                {t.role && <p className="mt-1 font-semibold text-teal-700">{t.role}</p>}
                {t.bio && <p className="mt-3 leading-relaxed text-muted">{t.bio}</p>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
