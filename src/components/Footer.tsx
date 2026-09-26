import { Globe, Mail, Phone } from "lucide-react";
import { contact, course, hasContact } from "../data/course";
import { Logo } from "./Logo";

const links = [
  { href: "#koolitusest", label: "Koolitusest" },
  { href: "#naited", label: "Näited" },
  { href: "#opivaljundid", label: "Õpiväljundid" },
  { href: "#programm", label: "Programm" },
  { href: "#oppekorraldus", label: "Õppekorraldus" },
  { href: "#koolitajad", label: "Koolitajad" },
  { href: "#kkk", label: "KKK" },
];

export function Footer() {
  return (
    <footer id="kontakt" className="border-t border-line bg-white pt-14 pb-28 lg:pb-14">
      <div className="container-page grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Logo className="size-10" />
            <p className="text-lg font-extrabold tracking-tight text-navy-900">{course.name}</p>
          </div>
          <p className="mt-4 max-w-sm leading-relaxed text-muted">
            Täienduskoolitus kõigi ainete õpetajatele, kes juhendavad või plaanivad juhendada digiloovtöid põhikoolis.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-wider text-navy-900 uppercase">Korraldaja</h2>
          {/* Tallinna Ülikooli logo; failil on valged ääred, kast näitab ainult logo osa. */}
          <span className="mt-4 block aspect-[680/147] h-12 overflow-hidden">
            <img
              src={`${import.meta.env.BASE_URL}TLU-logo-pilt-vrv-suur.jpg`}
              alt={course.organizer}
              width={840}
              height={323}
              loading="lazy"
              className="block h-auto max-w-none mix-blend-multiply"
              style={{ width: "123.53%", marginLeft: "-11.76%", marginTop: "-11.91%" }}
            />
          </span>
          {contact.name && <p className="mt-1 text-muted">{contact.name}</p>}
          {hasContact && (
            <ul className="mt-3 space-y-2 text-muted">
              {contact.email && (
                <li>
                  <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 hover:text-navy-900 hover:underline">
                    <Mail className="size-4" aria-hidden="true" />
                    {contact.email}
                  </a>
                </li>
              )}
              {contact.phone && (
                <li>
                  <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 hover:text-navy-900 hover:underline">
                    <Phone className="size-4" aria-hidden="true" />
                    {contact.phone}
                  </a>
                </li>
              )}
              {contact.web && (
                <li>
                  <a href={contact.web} rel="noopener" className="inline-flex items-center gap-2 hover:text-navy-900 hover:underline">
                    <Globe className="size-4" aria-hidden="true" />
                    Koolituse ametlik leht
                  </a>
                </li>
              )}
            </ul>
          )}
        </div>

        <nav aria-label="Jaluse menüü">
          <h2 className="text-sm font-bold tracking-wider text-navy-900 uppercase">Lehel</h2>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-muted">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-navy-900 hover:underline">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="container-page mt-12 border-t border-line pt-6 text-sm text-muted">
        See leht ei kogu isikuandmeid ega kasuta küpsiseid ega jälgimisvahendeid.
      </div>
    </footer>
  );
}
