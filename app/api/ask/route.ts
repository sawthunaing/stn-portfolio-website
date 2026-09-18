import { NextResponse } from "next/server";
import { profile } from "@/data/profile";
import { buildSystemPrompt } from "@/lib/prompt";

const SYSTEM_PROMPT = buildSystemPrompt(profile);
const MAX_QUESTION_LENGTH = 500;
const LIMIT_PER_HOUR = 10;

// Simple per-visitor limit to protect your free AI quota.
// It resets when Vercel restarts the function, which is fine for a portfolio.
const hits = new Map<string, number[]>();
function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 60 * 60 * 1000);
  if (recent.length >= LIMIT_PER_HOUR) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

async function askGemini(question: string): Promise<string> {
  const key = process.env.GEMINI_API_KEY;
  if (!key) throw new Error("Gemini key missing");
  const model = process.env.GEMINI_MODEL || "gemini-3.6-flash";
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-goog-api-key": key },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents: [{ role: "user", parts: [{ text: question }] }],
        generationConfig: { temperature: 0.3, maxOutputTokens: 2048 },
      }),
    }
  );
  if (!res.ok) throw new Error(`Gemini error ${res.status}: ${await res.text()}`);
  const data = await res.json();
  const parts: { text?: string }[] = data?.candidates?.[0]?.content?.parts ?? [];
  const text = parts.map((p) => p.text ?? "").join("").trim();
  if (!text) throw new Error("Gemini returned an empty answer");
  return text;
}

async function askGroq(question: string): Promise<string> {
  const key = process.env.GROQ_API_KEY;
  if (!key) throw new Error("Groq key missing");
  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
    body: JSON.stringify({
      model: process.env.GROQ_MODEL || "llama-3.1-8b-instant",
      temperature: 0.3,
      max_tokens: 500,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: question },
      ],
    }),
  });
  if (!res.ok) throw new Error(`Groq error ${res.status}: ${await res.text()}`);
  const data = await res.json();
  const text: string = data?.choices?.[0]?.message?.content?.trim() ?? "";
  if (!text) throw new Error("Groq returned an empty answer");
  return text;
}

export async function POST(req: Request) {
  let question = "";
  try {
    const body = await req.json();
    question = typeof body?.question === "string" ? body.question.trim() : "";
  } catch {
    return NextResponse.json({ error: "Send a question as JSON." }, { status: 400 });
  }

  if (!question) return NextResponse.json({ error: "Type a question first." }, { status: 400 });
  if (question.length > MAX_QUESTION_LENGTH) {
    return NextResponse.json({ error: "Keep your question under 500 characters." }, { status: 400 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "anonymous";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: `You've reached the question limit for now. Email ${profile.email} for anything else.` },
      { status: 429 }
    );
  }

  const providers = [
    process.env.GEMINI_API_KEY ? askGemini : null,
    process.env.GROQ_API_KEY ? askGroq : null,
  ].filter(Boolean) as ((q: string) => Promise<string>)[];

  if (providers.length === 0) {
    return NextResponse.json(
      { error: "The AI assistant isn't set up yet. Use the search results above, or get in touch on LinkedIn." },
      { status: 503 }
    );
  }

  for (const ask of providers) {
    try {
      const answer = await ask(question);
      return NextResponse.json({ answer });
    } catch (err) {
      console.error(err);
    }
  }

  return NextResponse.json(
    { error: `The assistant can't answer right now. Use the search results above, or email ${profile.email}.` },
    { status: 502 }
  );
}
