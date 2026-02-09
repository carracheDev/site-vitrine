import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact | Développeur Full-Stack",
  description: "Contactez-moi pour discuter de votre projet. Email, téléphone ou formulaire de contact disponibles."
}

export default function ContactPage() {
  return <ContactContent />;
}
