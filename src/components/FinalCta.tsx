import { CalendarDays, Clock, Mail, MapPin, Phone, UsersRound } from "lucide-react";
import { contact, course, groups, hasContact, hasRegistrationUrl, REGISTRATION_ANCHOR } from "../data/course";
import { RegisterButton } from "./Buttons";

export function FinalCta() {
  const chips = [
    { icon: Clock, label: `${course.volume.total} ak tundi` },
    { icon: MapPin, label: "Tallinna Ülikool + Zoom" },
    { icon: UsersRound, label: `Kuni ${course.maxParticipants} osalejat` },
    { icon: CalendarDays, label: groups.map((g) => g.period).join(" · ") },
  ];

  return (
    <section id={REGISTRATION_ANCHOR} aria-labelledby="registreeru-title" className="px-3 pb-20 sm:px-6 sm:pb-28">
      <div className="on-dark relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-navy-900 px-6 py-16 text-white sm:px-12 sm:py-24">
        <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_75%)]" />
        <div className="absolute -top-32 -left-24 -z-10 size-[30rem] rounded-full bg-violet-500/35 blur-[110px]" aria-hidden="true" />
        <div className="absolute -right-24 -bottom-32 -z-10 size-[30rem] rounded-full bg-coral-500/25 blur-[110px]" aria-hidden="true" />

        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center text-sun-300">
            <span className="pulse-dot size-2 rounded-full bg-sun-400" aria-hidden="true" />
            Registreerimine
          </p>
          <h2 id="registreeru-title" className="mt-5 text-4xl leading-[1.08] font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Järgmine digiloovtöö võib sündida <span className="text-gradient">sinu juhendamisel</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-navy-100">
            Liitu õpetajatega, kes soovivad juhendada õpilasmeeskondi ideest prototüübi ja esitluseni — süsteemselt,
            toetavalt ja õiglaselt hinnates.
          </p>

          <ul className="mt-9 flex flex-wrap justify-center gap-2.5">
            {chips.map(({ icon: I, label }) => (
              <li key={label} className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold ring-1 ring-white/15">
                <I className="size-4 text-teal-300" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            {hasRegistrationUrl ? (
              <RegisterButton size="lg" className="px-9 text-lg" />
            ) : (
              <p className="mx-auto max-w-xl rounded-2xl bg-white/10 px-6 py-5 leading-relaxed ring-1 ring-white/20">
                <strong className="block text-lg text-white">Registreerimislink avaldatakse sellel lehel.</strong>
                <span className="text-navy-100">{course.datesNote}</span>
              </p>
            )}
          </div>

          {hasContact && (
            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-navy-100">
              <span>Küsimuste korral:</span>
              {contact.email && (
                <a className="inline-flex items-center gap-1.5 font-semibold text-white underline-offset-4 hover:underline" href={`mailto:${contact.email}`}>
                  <Mail className="size-4" aria-hidden="true" />
                  {contact.email}
                </a>
              )}
              {contact.phone && (
                <a className="inline-flex items-center gap-1.5 font-semibold text-white underline-offset-4 hover:underline" href={`tel:${contact.phone.replace(/\s/g, "")}`}>
                  <Phone className="size-4" aria-hidden="true" />
                  {contact.phone}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
