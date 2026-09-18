import Section from "./Section";
import { profile } from "@/data/profile";

export default function Summary() {
  return (
    <Section id="summary" title="Summary">
      <p className="max-w-[62ch] text-lg leading-relaxed">{profile.summary}</p>
    </Section>
  );
}
