import { Mail } from "lucide-react";
import Section from "./Section";
import ProfileLinks from "./ProfileLinks";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <>
      <Section id="contact" title="Contact">
        <p className="max-w-[60ch] text-lg">
          I&apos;m looking for my next role in the UK. The quickest way to reach me is by email or LinkedIn.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-6 inline-flex items-center gap-2 font-display text-2xl font-semibold text-accent underline-offset-4 hover:underline sm:text-3xl"
        >
          <Mail size={24} aria-hidden /> {profile.email}
        </a>
        <div className="mt-6">
          <ProfileLinks />
        </div>
      </Section>
      <footer className="border-t border-line py-8 text-sm text-muted">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js and Tailwind CSS.
      </footer>
    </>
  );
}
