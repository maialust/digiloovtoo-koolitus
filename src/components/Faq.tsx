import { Plus } from "lucide-react";
import { faq, hasContact } from "../data/course";
import { SectionHeading } from "./SectionHeading";

export function Faq() {
  return (
    <section id="kkk" aria-labelledby="kkk-title" className="py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="kkk-title"
            eyebrow="KKK"
            tone="sun"
            title="Korduma kippuvad küsimused"
            lead={
              hasContact
                ? "Kui sinu küsimusele siin vastust ei ole, leiad kontaktandmed lehe lõpust."
                : "Vastused põhinevad koolituse õppekaval."
            }
          />
        </div>

        <div className="reveal divide-y divide-line overflow-hidden rounded-3xl border border-line bg-white shadow-soft">
          {faq.map((item) => (
            <details key={item.q} className="group">
              <summary className="flex cursor-pointer items-center justify-between gap-6 px-6 py-5 text-left font-bold text-navy-900 transition-colors hover:bg-navy-50/60 sm:px-7">
                <span>{item.q}</span>
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-navy-50 text-navy-900 transition-transform duration-300 group-open:rotate-45 group-open:bg-coral-400">
                  <Plus className="size-4" aria-hidden="true" />
                </span>
              </summary>
              <p className="px-6 pb-6 leading-relaxed text-muted sm:px-7">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
