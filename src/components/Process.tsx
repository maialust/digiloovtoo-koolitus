import { RefreshCw, Trophy, UsersRound } from "lucide-react";
import { course, processSteps } from "../data/course";
import { SectionHeading } from "./SectionHeading";

const colors = [
  "bg-violet-500 text-white",
  "bg-coral-400 text-navy-950",
  "bg-teal-400 text-navy-950",
  "bg-sun-400 text-navy-950",
  "bg-violet-500 text-white",
  "bg-coral-400 text-navy-950",
];

export function Process() {
  const loop = processSteps.slice(0, -1);
  const last = processSteps[processSteps.length - 1];

  return (
    <section aria-labelledby="protsess-title" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          id="protsess-title"
          eyebrow="Õppeprotsess"
          tone="coral"
          title="Õppimine toimub läbi tegemise"
          lead="Iga kontaktpäev käivitab tsükli, mille käigus proovid uut oma koolis, saad tagasisidet ja liigud järgmise etapini."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_20rem]">
          <div className="reveal card relative p-6 sm:p-8">
            <span className="absolute -top-3 left-6 inline-flex items-center gap-1.5 rounded-full bg-navy-900 px-3 py-1 text-xs font-bold text-white">
              <RefreshCw className="size-3.5" aria-hidden="true" />
              Kordub kontaktpäevade vahel
            </span>
            <ol className="grid gap-x-6 gap-y-7 pt-3 sm:grid-cols-2 lg:grid-cols-3">
              {loop.map((s, i) => (
                <li key={s.title} className="relative flex gap-4">
                  <span
                    className={`grid size-10 shrink-0 place-items-center rounded-xl text-sm font-extrabold ${colors[i]}`}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-extrabold text-navy-900">
                      <span className="sr-only">{i + 1}. </span>
                      {s.title}
                    </h3>
                    <p className="mt-1 text-[0.95rem] leading-relaxed text-muted">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="reveal on-dark relative flex flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-violet-700 to-navy-900 p-7 text-white" style={{ ["--delay" as string]: "120ms" }}>
            <div className="absolute -right-10 -bottom-10 size-44 rounded-full bg-sun-400/25 blur-2xl" aria-hidden="true" />
            <span className="grid size-12 place-items-center rounded-2xl bg-sun-400 text-navy-950">
              <Trophy className="size-6" aria-hidden="true" />
            </span>
            <div className="relative mt-8">
              <p className="text-xs font-bold tracking-[0.14em] text-sun-300 uppercase">Lõpuks</p>
              <h3 className="mt-2 text-2xl font-extrabold">
                <span className="sr-only">{processSteps.length}. </span>
                {last.title}
              </h3>
              <p className="mt-2 leading-relaxed text-navy-100">{last.text}</p>
            </div>
          </div>
        </div>

        <div className="reveal mt-6 grid gap-4 md:grid-cols-2">
          <p className="flex gap-3 rounded-2xl bg-white p-5 leading-relaxed ring-1 ring-line">
            <UsersRound className="mt-0.5 size-5 shrink-0 text-teal-700" aria-hidden="true" />
            <span>
              <strong className="text-navy-900">Suurem osa ülesannetest on individuaalsed</strong>, mõned tehakse paaris
              või rühmas. Kõik ülesanded on seotud digiloovtöö juhendamisega koolis.
            </span>
          </p>
          <p className="flex gap-3 rounded-2xl bg-white p-5 leading-relaxed ring-1 ring-line">
            <RefreshCw className="mt-0.5 size-5 shrink-0 text-violet-700" aria-hidden="true" />
            <span>
              <strong className="text-navy-900">Sa ei jää küsimustega üksi.</strong> Praktilisi probleeme arutad koolitajate ja
              teiste osalejatega jooksvalt ({course.tools.community}).
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
