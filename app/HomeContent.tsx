'use client';

import { Button } from "@/components/ui/button";
import CodeBlock from "@/components/ui/CodeBlock";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomeContent() {
  const stacks = [
    "Flutter",
    "Next.js",
    "NestJS",
    "Firebase",
    "TypeScript",
    "React",
  ];

  const services = [
    {
      icon: "📱",
      title: "Mobile",
      description: "Applications mobiles Flutter performantes, compatibles Android et iOS, avec une expérience utilisateur fluide."
    },
    {
      icon: "🌐",
      title: "Web",
      description: "Sites web et applications modernes avec Next.js, optimisés pour le SEO et la vitesse."
    },
    {
      icon: "⚙️",
      title: "Backend",
      description: "APIs robustes et scalables avec NestJS, sécurisées et évolutives pour vos projets."
    }
  ];

  const benefits = [
    {
      icon: "✔️",
      title: "Code propre & maintenable",
      description: "J'écris un code clair, structuré et facile à faire évoluer dans le temps"
    },
    {
      icon: "✔️",
      title: "Technologies modernes",
      description: "Flutter, Next.js, NestJS, TypeScript — des stacks modernes et fiables."
    },
    {
      icon: "✔️",
      title: "Approche orientée résultat",
      description: "Chaque fonctionnalité est pensée pour apporter une vraie valeur."
    },
    {
      icon: "✔️",
      title: "Communication claire",
      description: "Je privilégie une collaboration simple, transparente et efficace."
    }
  ];

  return (
    <main className="container mx-auto">
      {/* Hero section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 mx-auto mt-20 gap-16"
      >
        {/* Texte principal */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 lg:px-0 lg:ml-20"
        >
          <h1 className="poppins-black gradient-text text-5xl sm:text-6xl lg:text-8xl mt-10 lg:mt-20 mb-7 font-bold">
            Développeur <br /> Full-Stack
          </h1>

          <p className="poppins-extralight text-2xl mb-7 text-cyan-500">
            // Créateur d'expériences digitales
          </p>

          <p className="mt-4 text-lg text-muted-foreground max-w-xl text-gray-300">
            Spécialisé dans le développement d'applications modernes, rapides
            et scalables pour les startups, entreprises et porteurs de projets.
          </p>

          <div className="flex flex-wrap gap-4 mt-7 mb-20">
            {stacks.map((tech) => (
              <motion.div
                key={tech}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="text-cyan-400 rounded-2xl bg-cyan-950 text-md" variant={"outline"}>
                  {tech}
                </Button>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col gap-6 mt-10 sm:flex-row">
            <motion.div whileHover={{ scale: 1.08 }}>
              <Button className="bg-cyan-500 text-black text-xl p-6 rounded-full poppins-thin shadow-lg shadow-cyan-500/50">
                <Link href="/contact">Me Contactez</Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.08 }}>
              <Button variant={"outline"} className="text-cyan-400 p-6 rounded-full text-xl">
                <Link href="/services">Voir mes services</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Code preview */}
        <motion.div
          className="flex justify-center items-center mt-16 lg:mt-40 px-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <CodeBlock />
        </motion.div>
      </motion.section>

      {/* Ce que je fais section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-32 container mx-auto"
      >
        <h2 className="text-center font-bold text-4xl sm:text-5xl lg:text-6xl mb-4 gradient-text-cyan-purple">
          Ce que je fais
        </h2>
        <p className="text-center text-xl mb-12 text-gray-400">
          Des solutions digitales complètes, pensées pour la performance et l'expérience utilisateur.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="p-6 bg-[#1a1a28] border-[#00f0ff]/20 h-full hover:border-[#00f0ff]/40 transition-colors">
                <CardTitle>
                  <h3 className="text-cyan-400 text-3xl mb-3">{service.icon}</h3>
                  <h4 className="text-2xl text-white">{service.title}</h4>
                </CardTitle>
                <CardDescription>
                  <p className="text-gray-400 text-lg mt-3">{service.description}</p>
                </CardDescription>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Pourquoi me choisir section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-32"
      >
        <h2 className="text-center font-bold text-4xl sm:text-5xl lg:text-6xl mb-12 gradient-text-cyan-purple">
          Pourquoi travailler avec moi ?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-[#1a1a28] p-6 rounded-lg border border-[#00f0ff]/20 h-full hover:border-[#00f0ff]/40 transition-colors">
                <h4 className="font-semibold text-xl mb-3 text-cyan-400">
                  {benefit.icon} {benefit.title}
                </h4>
                <p className="text-lg text-gray-300">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Final CTA section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-32 mb-20 text-center"
      >
        <h2 className="text-center font-bold text-4xl sm:text-5xl lg:text-6xl mb-6 gradient-text-cyan-purple">
          Vous avez un projet ?
        </h2>
        <p className="text-muted-foreground mb-10 text-lg text-gray-400 max-w-2xl mx-auto">
          Discutons ensemble de votre idée et transformons-la en solution digitale.
        </p>

        <motion.div whileHover={{ scale: 1.08 }}>
          <Button className="bg-cyan-400 hover:bg-cyan-500 text-black p-8 rounded-full text-xl transition-colors">
            <Link href="/contact">Démarrer un projet</Link>
          </Button>
        </motion.div>
      </motion.section>
    </main>
  );
}

