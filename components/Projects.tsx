"use client";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import Section from "./Section";
import { profile } from "@/data/profile";

export default function Projects() {
  const [role, setRole] = useState<string>("all");

  const filtered =
    role === "all" ? profile.projects : profile.projects.filter((p) => p.roles.includes(role));

  return (
    <Section id="projects" title="Projects">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setRole("all")}
          className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
            role === "all"
              ? "border-accent bg-accent text-accent-ink"
              : "border-line text-muted hover:border-accent hover:text-ink"
          }`}
        >
          All
        </button>
        {profile.projectRoles.map((r) => (
          <button
            key={r.id}
            type="button"
            onClick={() => setRole(r.id)}
            className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
              role === r.id
                ? "border-accent bg-accent text-accent-ink"
                : "border-line text-muted hover:border-accent hover:text-ink"
            }`}
          >
            {r.label}
          </button>
        ))}
      </div>

      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {filtered.map((p) => (
          <li key={p.title} className="flex flex-col rounded-xl border border-line bg-surface p-5">
            <h3 className="font-display text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-muted">{p.description}</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm marker:text-accent">
              {p.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="rounded-md bg-accent-soft px-2.5 py-1 text-xs text-ink">
                  {t}
                </span>
              ))}
            </div>
            {(p.repo || p.live) && (
              <div className="mt-4 flex items-center gap-4 text-sm">
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
                  >
                    <Github size={14} aria-hidden /> Code
                  </a>
                )}
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
                  >
                    <ExternalLink size={14} aria-hidden /> Live
                  </a>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
