import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services | Développeur Full-Stack",
  description: "Découvrez mes services : développement mobile Flutter, applications web Next.js, APIs NestJS, et bien plus."
}

export default function ServicesPage() {
  return <ServicesContent />;
}
