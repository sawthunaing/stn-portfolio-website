import Section from "./Section";
import { profile } from "@/data/profile";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="divide-y divide-line">
        {profile.skills.map((s) => (
          <div key={s.group} className="grid gap-3 py-4 first:pt-0 sm:grid-cols-[160px_1fr]">
            <dt className="text-sm font-medium text-muted">{s.group}</dt>
            <dd className="flex flex-wrap gap-2">
              {s.items.map((item) => (
                <span key={item} className="rounded-md bg-accent-soft px-2.5 py-1 text-sm text-ink">
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
