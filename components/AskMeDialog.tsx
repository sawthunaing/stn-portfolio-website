"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { Loader2, MessageCircle, Search, Sparkles, X } from "lucide-react";
import { profile } from "@/data/profile";
import { searchProfile } from "@/lib/search";

const SEEN_KEY = "askme-seen";

export default function AskMeDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [askedQuestion, setAskedQuestion] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const results = useMemo(
    () => (query.trim().length > 1 ? searchProfile(query.trim()).slice(0, 4) : []),
    [query]
  );

  function openDialog() {
    const d = dialogRef.current;
    if (d && !d.open) {
      d.showModal();
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }

  function closeDialog() {
    dialogRef.current?.close();
  }

  useEffect(() => {
    const onOpen = () => openDialog();
    window.addEventListener("open-askme", onOpen);

    // Open once per visit, 2.5 seconds after the page loads.
    let timer: ReturnType<typeof setTimeout> | undefined;
    try {
      if (!sessionStorage.getItem(SEEN_KEY)) {
        timer = setTimeout(() => {
          openDialog();
          sessionStorage.setItem(SEEN_KEY, "1");
        }, 2500);
      }
    } catch {
      /* storage unavailable: skip auto-open */
    }

    return () => {
      window.removeEventListener("open-askme", onOpen);
      if (timer) clearTimeout(timer);
    };
  }, []);

  async function ask(text?: string) {
    const question = (text ?? query).trim();
    if (!question || loading) return;
    setQuery(question);
    setAskedQuestion(question);
    setAnswer(null);
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error ?? "The assistant can't answer right now.");
      setAnswer(data.answer);
    } catch (e) {
      setError(e instanceof Error ? e.message : "The assistant can't answer right now.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={openDialog}
        aria-label="Ask about me"
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-medium text-accent-ink shadow-lg transition-opacity hover:opacity-90"
      >
        <MessageCircle size={18} aria-hidden />
        <span className="hidden sm:inline">Ask about me</span>
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby="askme-title"
        onClick={(e) => {
          if (e.target === dialogRef.current) closeDialog();
        }}
        className="m-auto w-[min(640px,calc(100%-2rem))] rounded-2xl border border-line bg-surface p-0 text-ink shadow-2xl"
      >
        <div className="p-6 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 id="askme-title" className="font-display text-2xl font-semibold tracking-tight">
                What would you like to know about me?
              </h2>
              <p className="mt-1 text-sm text-muted">
                Search my profile, or press Enter to get an AI answer based on my CV.
              </p>
            </div>
            <button
              type="button"
              onClick={closeDialog}
              aria-label="Close"
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-muted transition-colors hover:bg-accent-soft hover:text-ink"
            >
              <X size={18} />
            </button>
          </div>

          <form
            className="mt-5 flex items-center gap-2 rounded-xl border border-line bg-bg px-4 focus-within:border-accent"
            onSubmit={(e) => {
              e.preventDefault();
              ask();
            }}
          >
            <Search size={18} className="shrink-0 text-muted" aria-hidden />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              maxLength={500}
              placeholder="e.g. Do you have cloud experience?"
              aria-label="Your question"
              className="h-12 flex-1 bg-transparent text-base outline-none placeholder:text-muted focus-visible:outline-none"
            />
            <button
              type="submit"
              disabled={loading || !query.trim()}
              className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-1.5 text-sm font-medium text-accent-ink disabled:opacity-40"
            >
              <Sparkles size={14} aria-hidden /> Ask
            </button>
          </form>

          {!query && (
            <div className="mt-4 flex flex-wrap gap-2">
              {profile.suggestedQuestions.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => ask(q)}
                  className="rounded-full border border-line px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent hover:text-ink"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {results.length > 0 && (
            <div className="mt-5">
              <p className="text-sm font-medium text-muted">Matches on this page</p>
              <ul className="mt-2 divide-y divide-line rounded-xl border border-line">
                {results.map((r) => (
                  <li key={`${r.section}-${r.title}`}>
                    <a
                      href={r.href}
                      onClick={closeDialog}
                      className="block px-4 py-3 transition-colors hover:bg-accent-soft"
                    >
                      <span className="block text-sm font-medium">{r.title}</span>
                      <span className="block text-xs text-muted">{r.section}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div aria-live="polite">
            {loading && (
              <p className="mt-5 inline-flex items-center gap-2 text-sm text-muted">
                <Loader2 size={16} className="animate-spin" aria-hidden /> Writing an answer…
              </p>
            )}
            {answer && (
              <div className="mt-5 rounded-xl bg-accent-soft p-4">
                <p className="text-xs font-medium text-muted">AI answer to “{askedQuestion}”</p>
                <p className="mt-2 whitespace-pre-line leading-relaxed">{answer}</p>
              </div>
            )}
            {error && <p className="mt-5 rounded-xl border border-line p-4 text-sm text-muted">{error}</p>}
          </div>
        </div>
      </dialog>
    </>
  );
}
