import { ExternalLink } from "lucide-react";
import Section from "./Section";
import { profile } from "@/data/profile";

export default function Achievements() {
  return (
    <Section id="achievements" title="Achievements">
      <ul className="grid gap-4 sm:grid-cols-3">
        {profile.achievements.map((a) => (
          <li key={a.title} className="rounded-xl border border-line bg-surface p-5">
            <p className="font-display text-4xl font-bold tracking-tight text-accent">{a.metric}</p>
            <p className="mt-2 font-medium">{a.title}</p>
            <p className="mt-1 text-sm text-muted">{a.detail}</p>
          </li>
        ))}
      </ul>

      <h3 className="mt-12 font-display text-lg font-semibold">Certifications</h3>
      <ul className="mt-4 divide-y divide-line border-y border-line">
        {profile.certifications.map((c) => (
          <li key={c.name}>
            <a
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 py-4 transition-colors hover:text-accent"
            >
              <span>
                <span className="block font-medium">{c.name}</span>
                <span className="block text-sm text-muted">
                  {c.issuer}, {c.date}
                </span>
              </span>
              <span className="inline-flex shrink-0 items-center gap-1 text-sm">
                Verify on Credly <ExternalLink size={14} aria-hidden />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
