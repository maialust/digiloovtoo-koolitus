import { BadgeCheck, Sparkles } from "lucide-react";
import { competences } from "../data/course";
import { SectionHeading } from "./SectionHeading";

export function ProfessionalGrowth() {
  return (
    <section aria-labelledby="areng-title" className="py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <SectionHeading
            id="areng-title"
            eyebrow="Professionaalne areng"
            tone="violet"
            title="Toetab õpetaja professionaalset arengut"
            lead="Koolitus on seotud õpetaja kutsestandardi 7. taseme pädevustega ning täiendusõppe läbivate prioriteetidega."
          />

          <div className="reveal mt-8 rounded-3xl bg-violet-50 p-6 ring-1 ring-violet-300/50">
            <p className="flex items-center gap-2 text-sm font-bold text-violet-700">
              <Sparkles className="size-4" aria-hidden="true" />
              Täiendusõppe läbivad prioriteedid
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {competences.priorities.map((p) => (
                <li key={p} className="rounded-full bg-white px-3.5 py-1.5 text-sm font-semibold text-navy-900 ring-1 ring-violet-300/60">
                  {p.charAt(0).toUpperCase() + p.slice(1)}
                </li>
              ))}
            </ul>
          </div>

          <p className="reveal mt-6 text-sm leading-relaxed text-muted">
            Koolitus toetab nende pädevuste arendamist. See ei anna iseenesest kutset ega kutsetaset.
          </p>
        </div>

        <ul className="grid gap-3 self-start">
          {competences.items.map((c, i) => (
            <li
              key={c.title}
              className="reveal card flex items-start gap-4 p-5 sm:p-6"
              style={{ ["--delay" as string]: `${i * 70}ms` }}
            >
              <BadgeCheck className="mt-0.5 size-6 shrink-0 text-violet-700" aria-hidden="true" />
              <div>
                <h3 className="font-extrabold text-navy-900">{c.title}</h3>
                <p className="mt-1 leading-relaxed text-muted">{c.text.charAt(0).toUpperCase() + c.text.slice(1)}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
