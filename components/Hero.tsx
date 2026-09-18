import { Download, MapPin, BadgeCheck } from "lucide-react";
import { profile } from "@/data/profile";
import ProfileLinks from "./ProfileLinks";
import AskTrigger from "./AskTrigger";

export default function Hero() {
  return (
    <section className="py-16 sm:py-24">
      <p className="text-lg text-muted">{profile.title}</p>
      <h1 className="mt-2 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl">
        {profile.name}
      </h1>

      <div className="mt-6 flex flex-col gap-2 text-sm text-muted sm:flex-row sm:gap-6">
        <span className="inline-flex items-center gap-2">
          <MapPin size={16} aria-hidden /> {profile.location}
        </span>
        <span className="inline-flex items-center gap-2">
          <BadgeCheck size={16} className="text-accent" aria-hidden /> {profile.rightToWork}
        </span>
      </div>
      <p className="mt-2 max-w-2xl text-sm text-muted">{profile.availability}</p>

      <div className="mt-10">
        <AskTrigger />
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href={profile.cvUrl}
          download
          className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-medium text-accent-ink transition-opacity hover:opacity-90"
        >
          <Download size={16} aria-hidden /> Download CV
        </a>
        <ProfileLinks />
      </div>
    </section>
  );
}
