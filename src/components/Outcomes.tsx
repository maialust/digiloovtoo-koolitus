import { outcomes } from "../data/course";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";

const tones = [
  { chip: "bg-violet-50 text-violet-700", num: "text-violet-700" },
  { chip: "bg-coral-50 text-coral-700", num: "text-coral-700" },
  { chip: "bg-teal-50 text-teal-700", num: "text-teal-700" },
  { chip: "bg-sun-50 text-sun-700", num: "text-sun-700" },
];

export function Outcomes() {
  return (
    <section id="opivaljundid" aria-labelledby="opivaljundid-title" className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          id="opivaljundid-title"
          eyebrow="Õpiväljundid"
          tone="violet"
          title="Mida sa koolituselt kaasa saad?"
          lead="Pärast koolitust oskad õpilasmeeskonda juhendada digiloovtöö igas etapis — teema valikust kuni kaitsmise ja refleksioonini."
        />

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((o, i) => {
            const t = tones[i % tones.length];
            return (
              <li
                key={o.title}
                className="reveal group relative flex flex-col rounded-3xl border border-line bg-paper p-6 transition duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-white hover:shadow-lift"
                style={{ ["--delay" as string]: `${(i % 4) * 80}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span className={`grid size-11 place-items-center rounded-xl ${t.chip}`}>
                    <Icon name={o.icon} className="size-5" />
                  </span>
                  <span className={`text-sm font-extrabold tabular-nums ${t.num}`} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 text-[1.05rem] leading-snug font-extrabold text-navy-900">{o.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{o.text}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
