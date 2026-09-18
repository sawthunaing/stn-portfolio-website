"use client";
import { Search } from "lucide-react";

export default function AskTrigger() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("open-askme"))}
      className="group flex w-full max-w-xl items-center gap-3 rounded-2xl border border-line bg-surface px-5 py-4 text-left shadow-sm transition-colors hover:border-accent"
    >
      <Search size={18} className="shrink-0 text-accent" aria-hidden />
      <span className="flex-1 text-muted group-hover:text-ink">Ask anything about my skills and experience</span>
      <span className="hidden rounded-md bg-accent-soft px-2 py-1 text-xs font-medium text-accent sm:inline">AI</span>
    </button>
  );
}
