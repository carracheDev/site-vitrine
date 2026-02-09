import type { Metadata } from "next";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  title: "Développeur Full-Stack | Flutter, Next.js & NestJS",
  description: "Je conçois des applications mobiles et web modernes avec Flutter, Next.js et NestJS. Performance, design et scalabilité. "
}

export default function Home() {
  return <HomeContent />;
}
