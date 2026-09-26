import { Award, CalendarDays, Clock, Languages, MapPin, MonitorSmartphone, UsersRound, Video } from "lucide-react";
import { course, groups } from "../data/course";
import { SectionHeading } from "./SectionHeading";
import { RegisterButton } from "./Buttons";

export function Format() {
  const { total, contact, independent } = course.volume;
  const contactPct = Math.round((contact / total) * 100);

  const facts = [
    { icon: MonitorSmartphone, label: "Õppevorm", value: course.format, note: "Kontaktpäevad, veebikohtumised ja iseseisev töö" },
    {
      icon: MapPin,
      label: "Kontaktpäevad",
      value: `${course.contactDays.count} päeva Tallinna Ülikoolis`,
      note: `Igaüks ${course.contactDays.hoursEach} akadeemilist tundi`,
    },
    { icon: Video, label: "Veebis", value: "Zoom", note: course.onlineNote },
    { icon: UsersRound, label: "Grupi suurus", value: `Kuni ${course.maxParticipants} osalejat`, note: "Ruumi aruteluks ja tagasisideks" },
    { icon: Languages, label: "Õppekeel", value: "Eesti keel", note: `Õppekeskkond: ${course.tools.learning}` },
    { icon: Award, label: "Lõpetamisel", value: "Tunnistus", note: course.certificate },
  ];

  return (
    <section id="oppekorraldus" aria-labelledby="oppekorraldus-title" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          id="oppekorraldus-title"
          eyebrow="Õppekorraldus"
          tone="teal"
          title="Formaat ja põhiandmed"
          lead="Hübriidõpe ühendab kontaktpäevade koostöö Tallinna Ülikoolis paindliku veebitoe ja praktiliste ülesannetega oma koolis."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.35fr_1fr]">
          {/* maht */}
          <div className="reveal card p-7 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-xl bg-violet-50 text-violet-700">
                <Clock className="size-5" aria-hidden="true" />
              </span>
              <p className="font-bold text-muted">Koolituse maht</p>
            </div>
            <p className="mt-5 flex items-baseline gap-3">
              <span className="text-6xl font-extrabold tracking-tight text-navy-900 tabular-nums">{total}</span>
              <span className="text-lg font-bold text-navy-900">akadeemilist tundi</span>
            </p>

            <div className="mt-7 flex h-4 overflow-hidden rounded-full bg-navy-50" role="img" aria-label={`${contact} tundi kontakt- ja veebiõpet, ${independent} tundi iseseisvat tööd`}>
              <div className="h-full bg-gradient-to-r from-violet-500 to-coral-400" style={{ width: `${contactPct}%` }} />
              <div className="h-full flex-1 bg-teal-400" />
            </div>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              <li className="flex gap-3">
                <span className="mt-1.5 size-3 shrink-0 rounded-full bg-gradient-to-r from-violet-500 to-coral-400" aria-hidden="true" />
                <div>
                  <p className="text-sm text-muted">Kontakt- ja veebiõpe</p>
                  <p className="text-xl font-extrabold text-navy-900">{contact} ak tundi</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 size-3 shrink-0 rounded-full bg-teal-400" aria-hidden="true" />
                <div>
                  <p className="text-sm text-muted">Iseseisev töö</p>
                  <p className="text-xl font-extrabold text-navy-900">{independent} ak tundi</p>
                </div>
              </li>
            </ul>
          </div>

          {/* grupid + CTA */}
          <div className="reveal on-dark relative flex flex-col overflow-hidden rounded-3xl bg-navy-900 p-7 text-white sm:p-8" style={{ ["--delay" as string]: "100ms" }}>
            <div className="absolute -top-16 -right-16 size-56 rounded-full bg-coral-500/30 blur-3xl" aria-hidden="true" />
            <div className="relative flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-xl bg-coral-400 text-navy-950">
                <CalendarDays className="size-5" aria-hidden="true" />
              </span>
              <h3 className="font-bold text-navy-100">Õppegrupid</h3>
            </div>
            <ul className="relative mt-6 space-y-3">
              {groups.map((g) => (
                <li key={g.period} className="rounded-2xl bg-white/[0.07] px-5 py-4 ring-1 ring-white/12">
                  <p className="text-xs font-bold tracking-wider text-sun-300 uppercase">{g.label}</p>
                  <p className="mt-1 text-lg font-extrabold">{g.period}</p>
                  {g.note && <p className="mt-1 text-sm text-navy-100">{g.note}</p>}
                </li>
              ))}
            </ul>
            <p className="relative mt-4 text-sm leading-relaxed text-navy-100">{course.datesNote}</p>
            <div className="relative mt-auto pt-6">
              <RegisterButton className="w-full" />
            </div>
          </div>
        </div>

        <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {facts.map((f, i) => (
            <li
              key={f.label}
              className="reveal card flex gap-4 p-6"
              style={{ ["--delay" as string]: `${(i % 3) * 80}ms` }}
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-teal-50 text-teal-700">
                <f.icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold text-muted">{f.label}</p>
                <p className="mt-0.5 text-lg font-extrabold text-navy-900">{f.value}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{f.note}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
