import { completion, course } from "../data/course";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";

export function Completion() {
  return (
    <section aria-labelledby="lopetamine-title" className="bg-white py-20 sm:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <div>
          <SectionHeading
            id="lopetamine-title"
            eyebrow="Lõpetamine"
            tone="teal"
            title="Selged tingimused, arusaadav tulemus"
            lead="Koolituse lõpetamiseks on vaja osaleda, teha läbi praktilised ülesanded ja tuua oma töö kokku portfoolioks."
          />
          <ol className="mt-10 grid gap-4 sm:grid-cols-2">
            {completion.map((c, i) => (
              <li
                key={c.title}
                className="reveal rounded-3xl border border-line bg-paper p-6"
                style={{ ["--delay" as string]: `${(i % 2) * 90}ms` }}
              >
                <span className="grid size-11 place-items-center rounded-xl bg-teal-50 text-teal-700 ring-1 ring-teal-300/50">
                  <Icon name={c.icon} className="size-5" />
                </span>
                <h3 className="mt-4 font-extrabold text-navy-900">{c.title}</h3>
                <p className="mt-1 leading-relaxed text-muted">{c.text}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* abstraktne tunnistus (ei ole ametliku dokumendi kujutis) */}
        <figure className="reveal" style={{ ["--delay" as string]: "120ms" }}>
          <div className="relative mx-auto max-w-sm rotate-[-2deg] rounded-3xl bg-paper p-3 shadow-lift ring-1 ring-line">
            <div className="rounded-2xl border-2 border-dashed border-navy-900/15 bg-white px-7 py-10 text-center">
              <div className="mx-auto grid size-16 place-items-center rounded-full bg-gradient-to-br from-sun-300 to-coral-400 text-navy-950 shadow-soft">
                <Icon name="award" className="size-8" />
              </div>
              <p className="mt-6 text-xs font-bold tracking-[0.16em] text-muted uppercase">Täiendusõppe tunnistus</p>
              <p className="mt-2 text-xl font-extrabold text-navy-900">{course.name}</p>
              <div className="mx-auto mt-6 h-px w-2/3 bg-line" />
              <p className="mt-3 text-sm font-semibold text-muted">
                {course.organizer} · {course.volume.total} ak tundi
              </p>
            </div>
          </div>
          <figcaption className="mt-8 text-center leading-relaxed text-muted">
            Edukalt lõpetanud osaleja saab <strong className="text-navy-900">{course.certificate}</strong>.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
