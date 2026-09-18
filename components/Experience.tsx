import Section from "./Section";
import { profile } from "@/data/profile";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="relative border-l border-line">
        {profile.experience.map((job) => (
          <li key={`${job.company}-${job.start}`} className="relative pb-10 pl-7 last:pb-0">
            <span
              className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-bg"
              aria-hidden
            />
            <p className="text-sm text-muted">
              {job.start} to {job.end}
            </p>
            <h3 className="mt-1 font-display text-xl font-semibold">{job.role}</h3>
            <p className="text-muted">
              {job.company}, {job.location}
            </p>
            <ul className="mt-4 max-w-[65ch] list-disc space-y-2 pl-5 marker:text-accent">
              {job.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted">
              <span className="font-medium text-ink">Tools: </span>
              {job.tech.join(", ")}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
