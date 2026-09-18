import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { profile } from "@/data/profile";
import "./globals.css";

const heading = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-heading", display: "swap" });
const body = Instrument_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: `${profile.name}, ${profile.title}`,
  description: profile.summary,
  openGraph: {
    title: `${profile.name}, ${profile.title}`,
    description: profile.summary,
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" suppressHydrationWarning className={`${heading.variable} ${body.variable}`}>
      <body className="bg-bg font-sans text-ink antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
