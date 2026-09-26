import { Check, ClipboardList } from "lucide-react";
import { finalResult } from "../data/course";

export function FinalResult() {
  return (
    <section aria-labelledby="tulemus-title" className="overflow-x-clip bg-white py-20 sm:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="reveal">
          <p className="eyebrow text-teal-700">
            <span className="size-2 rounded-full bg-teal-500" aria-hidden="true" />
            Praktiline lõpptulemus
          </p>
          <h2 id="tulemus-title" className="h2 mt-4 text-navy-900">
            Sa ei lahku ainult teadmistega, vaid <span className="text-teal-700">valmis kavaga</span>
          </h2>
          <p className="mt-6 border-l-4 border-coral-400 pl-5 text-xl leading-relaxed font-semibold text-pretty text-navy-900 sm:text-2xl">
            {finalResult.statement}
          </p>
          <p className="lead mt-5">
            Kava koostad koolituse käigus samm-sammult, oma kooli, õpilaste ja õppekava vajadustest lähtudes. Nii on
            sul pärast koolitust selge, kust alustada.
          </p>
        </div>

        <div className="reveal relative" style={{ ["--delay" as string]: "120ms" }}>
          <div className="absolute -inset-4 -z-0 rotate-2 rounded-[2rem] bg-gradient-to-br from-sun-300 via-coral-300 to-violet-300 opacity-70" aria-hidden="true" />
          <div className="relative rounded-3xl bg-navy-900 p-7 text-white shadow-lift sm:p-9">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-xl bg-teal-400 text-navy-950">
                <ClipboardList className="size-5" aria-hidden="true" />
              </span>
              <p className="text-lg font-extrabold">Sinu juhendamise tegevuskava</p>
            </div>
            <ul className="mt-7 space-y-3.5">
              {finalResult.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-teal-400/20 ring-1 ring-teal-400/60">
                    <Check className="size-3.5 text-teal-300" aria-hidden="true" />
                  </span>
                  <span className="leading-relaxed text-navy-100">{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
