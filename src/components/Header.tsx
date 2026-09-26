import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { course } from "../data/course";
import { RegisterButton } from "./Buttons";
import { Logo } from "./Logo";

const nav = [
  { href: "#koolitusest", label: "Koolitusest" },
  { href: "#naited", label: "Näited" },
  { href: "#opivaljundid", label: "Õpiväljundid" },
  { href: "#programm", label: "Programm" },
  { href: "#oppekorraldus", label: "Õppekorraldus" },
  { href: "#koolitajad", label: "Koolitajad" },
  { href: "#kkk", label: "KKK" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "border-b border-line/80 bg-white/85 text-navy-900 backdrop-blur-lg"
          : "on-dark bg-transparent text-white"
      }`}
    >
      <div className="container-page flex h-[4.5rem] xl:max-w-7xl items-center justify-between gap-3 xl:gap-6">
        <a href="#top" className="flex min-w-0 items-center gap-3 rounded-lg" aria-label={`${course.name} — avalehele`}>
          <Logo className="size-9 shrink-0" />
          <span className="flex min-w-0 flex-col leading-tight whitespace-nowrap">
            <span className="truncate text-[0.95rem] font-extrabold tracking-tight">Digiloovtöö juhendajale</span>
            <span className={`truncate text-xs font-medium ${solid ? "text-muted" : "text-navy-100"}`}>
              {course.organizer} · täienduskoolitus
            </span>
          </span>
        </a>

        <nav aria-label="Peamenüü" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`rounded-full px-2.5 py-2 text-sm font-semibold transition-colors ${
                    solid ? "hover:bg-navy-50" : "hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden xl:block">
          <RegisterButton label="Registreeru" />
        </div>

        <button
          type="button"
          className={`inline-flex size-11 shrink-0 items-center justify-center rounded-full xl:hidden ${
            solid ? "hover:bg-navy-50" : "hover:bg-white/10"
          }`}
          aria-expanded={open}
          aria-controls="mobiilimenuu"
          aria-label={open ? "Sulge menüü" : "Ava menüü"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <div
        id="mobiilimenuu"
        hidden={!open}
        className="border-t border-line bg-white text-navy-900 xl:hidden"
      >
        <nav aria-label="Mobiilimenüü" className="container-page py-4">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-base font-semibold hover:bg-navy-50"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 border-t border-line pt-4" onClick={() => setOpen(false)}>
            <RegisterButton className="w-full" />
          </div>
        </nav>
      </div>
    </header>
  );
}
