import { CircleHelp, CircleCheckBig } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const pairs = [
  {
    q: "Kuidas leida teema, mis on õpilastele jõukohane ja päriselt huvitav?",
    a: "Praktilised näited, digiõpik, õpetajaraamat ja kooli tasandi juhend annavad kindla lähtekoha.",
  },
  {
    q: "Kuidas hoida meeskonnatöö liikumas ka siis, kui ideid on palju ja aega vähe?",
    a: "Agiilne arendus, Kanban ja digitaalsed tööriistad teevad töö käigu nähtavaks nii õpilastele kui ka sulle.",
  },
  {
    q: "Kuidas suunata õpilasi ideest prototüübini, ilma et teeksid töö nende eest ära?",
    a: "Disainmõtlemine ja juhendamisstrateegiad aitavad sul olla juhendaja, mitte lahenduse autor.",
  },
  {
    q: "Kuidas hinnata õiglaselt nii rühma tulemust kui ka iga õpilase panust?",
    a: "Kujundav tagasiside ja läbimõeldud hindamiskriteeriumid toetavad nii õppimist kui ka tulemuse hindamist.",
  },
];

export function ProblemSolution() {
  return (
    <section aria-labelledby="valjakutse-title" className="relative bg-white py-20 sm:py-28">
      <div className="bg-dots absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" aria-hidden="true" />
      <div className="container-page relative">
        <SectionHeading
          id="valjakutse-title"
          eyebrow="Miks see koolitus"
          tone="violet"
          align="center"
          title="Digiloovtöö juhendamine on rohkem kui teema andmine"
          lead="Õpilasmeeskond vajab juhendajat, kes aitab probleemi mõista, tööd korraldada, lahendust katsetada ja oma õppimist märgata. Koolitus annab selleks struktuuri, meetodid ja tööriistad."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {pairs.map((p, i) => (
            <article
              key={p.q}
              className="reveal card overflow-hidden"
              style={{ ["--delay" as string]: `${(i % 2) * 100}ms` }}
            >
              <div className="flex gap-3 border-b border-line bg-paper px-6 py-5">
                <CircleHelp className="mt-0.5 size-5 shrink-0 text-coral-700" aria-hidden="true" />
                <h3 className="font-bold text-navy-900">{p.q}</h3>
              </div>
              <div className="flex gap-3 px-6 py-5">
                <CircleCheckBig className="mt-0.5 size-5 shrink-0 text-teal-700" aria-hidden="true" />
                <p className="leading-relaxed text-muted">{p.a}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
