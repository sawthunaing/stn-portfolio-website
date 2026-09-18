import Fuse from "fuse.js";
import { profile } from "@/data/profile";

export type SearchEntry = { section: string; title: string; text: string; href: string };

const entries: SearchEntry[] = [
  { section: "Summary", title: "Professional summary", text: profile.summary, href: "#summary" },
  ...profile.skills.map((s) => ({
    section: "Skills",
    title: s.group,
    text: s.items.join(", "),
    href: "#skills",
  })),
  ...profile.experience.map((e) => ({
    section: "Experience",
    title: `${e.role}, ${e.company}`,
    text: [...e.highlights, e.tech.join(", ")].join(" "),
    href: "#experience",
  })),
  ...profile.achievements.map((a) => ({
    section: "Achievements",
    title: a.title,
    text: `${a.metric} ${a.detail}`,
    href: "#achievements",
  })),
  ...profile.certifications.map((c) => ({
    section: "Certifications",
    title: c.name,
    text: `${c.issuer} ${c.date}`,
    href: "#achievements",
  })),
  ...profile.education.map((ed) => ({
    section: "Education",
    title: `${ed.degree}, ${ed.institution}`,
    text: `${ed.result} ${ed.notes ?? ""}`,
    href: "#education",
  })),
  { section: "Right to work", title: "Right to work", text: `${profile.rightToWork} ${profile.availability}`, href: "#top" },
  ...profile.faq.map((f) => ({
    section: "Q&A",
    title: f.question,
    text: f.answer,
    href: "#top",
  })),
  ...profile.projects.map((p) => ({
    section: "Projects",
    title: p.title,
    text: [p.description, ...p.highlights, p.tech.join(", ")].join(" "),
    href: "#projects",
  })),
];

const fuse = new Fuse(entries, {
  keys: [
    { name: "title", weight: 2 },
    { name: "text", weight: 1 },
    { name: "section", weight: 1 },
  ],
  threshold: 0.4,
  ignoreLocation: true,
});

export function searchProfile(query: string): SearchEntry[] {
  return fuse.search(query).map((r) => r.item);
}
