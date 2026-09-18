import { Award, Code2, Github, Linkedin } from "lucide-react";
import { profile } from "@/data/profile";

export default function ProfileLinks() {
  const items = [
    { href: profile.links.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: profile.links.credly, label: "Credly badges", Icon: Award },
    { href: profile.links.hackerrank, label: "HackerRank", Icon: Code2 },
    ...(profile.links.github ? [{ href: profile.links.github, label: "GitHub", Icon: Github }] : []),
  ];
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map(({ href, label, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm transition-colors hover:border-accent hover:text-accent"
          >
            <Icon size={16} aria-hidden />
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}
