import Section from "./Section";
import { profile } from "@/data/profile";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <ul className="space-y-8">
        {profile.education.map((ed) => (
          <li key={`${ed.degree}-${ed.institution}`}>
            <p className="text-sm text-muted">
              {ed.start} to {ed.end}
            </p>
            <h3 className="mt-1 font-display text-xl font-semibold">{ed.degree}</h3>
            <p className="text-muted">
              {ed.institution}, {ed.location}
            </p>
            <p className="mt-2">
              <span className="font-medium">Result: </span>
              {ed.result}
            </p>
            {ed.notes && <p className="mt-1 max-w-[65ch] text-muted">{ed.notes}</p>}
          </li>
        ))}
      </ul>
    </Section>
  );
}
