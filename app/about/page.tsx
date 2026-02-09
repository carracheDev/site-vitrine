import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "À propos | Flutter, Next.js & NestJS",
  description: "Je transformer des idées en solutions digitales fiables, bien conçues et faciles à utiliser. "
}

export default function AboutPage() {
  return <AboutContent />;
}
