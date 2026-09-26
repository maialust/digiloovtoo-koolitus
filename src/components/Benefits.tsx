import { benefits } from "../data/course";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";
import { RegisterButton } from "./Buttons";

const accents = [
  "bg-coral-50 text-coral-700",
  "bg-teal-50 text-teal-700",
  "bg-violet-50 text-violet-700",
  "bg-sun-50 text-sun-700",
  "bg-teal-50 text-teal-700",
  "bg-coral-50 text-coral-700",
];

export function Benefits() {
  return (
    <section aria-labelledby="eelised-title" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          id="eelised-title"
          eyebrow="Peamised eelised"
          tone="teal"
          title="Õpid tehes, koos teistega ja oma kooli jaoks"
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <li
              key={b.title}
              className="reveal card group p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lift"
              style={{ ["--delay" as string]: `${(i % 3) * 90}ms` }}
            >
              <span
                className={`grid size-12 place-items-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${accents[i % accents.length]}`}
              >
                <Icon name={b.icon} className="size-6" />
              </span>
              <h3 className="mt-5 text-lg font-extrabold text-navy-900">{b.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{b.text}</p>
            </li>
          ))}
        </ul>

        {/* CTA pärast eeliseid */}
        <div className="reveal on-dark relative mt-12 overflow-hidden rounded-3xl bg-navy-900 px-7 py-9 text-white sm:px-10">
          <div className="absolute -top-20 -right-10 size-64 rounded-full bg-coral-500/30 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-24 left-10 size-64 rounded-full bg-teal-500/20 blur-3xl" aria-hidden="true" />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-2xl font-extrabold tracking-tight">Valmis juhendama digiloovtööd enesekindlamalt?</p>
              <p className="mt-2 text-navy-100">Hübriidõpe Tallinna Ülikoolis, kuni 24 osalejat grupis.</p>
            </div>
            <RegisterButton size="lg" className="shrink-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
