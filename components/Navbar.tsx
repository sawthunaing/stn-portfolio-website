import ThemeToggle from "./ThemeToggle";
import { profile } from "@/data/profile";

const links = [
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-bg/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8" aria-label="Main">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight">
          {profile.name}
        </a>
        <div className="flex items-center gap-6">
          <ul className="hidden gap-6 text-sm text-muted md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-ink">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
