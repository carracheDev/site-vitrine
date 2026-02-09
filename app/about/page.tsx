'use client';

import GradientHero from '@/components/GradientHero';
import { Card} from '@/components/ui/card';
import { motion } from 'framer-motion';
import type { Metadata } from "next";

export const metadata:Metadata={
      title:"À propos | Flutter, Next.js & NestJS",
      description:
      "Je transformer des idées en solutions digitales fiables, bien conçues et faciles à utiliser. "
}
export default function AboutPage() {
  const compétences = [
    'Flutter',
    'Next.js',
    'NestJS',
    'TypeScript',
    'React',
    'Firebase',
    'REST API',
    'Git / GitHub',
  ];

  return (
    <main className="container mx-auto p-10 sm:px-8 lg:px-10 mt-24">

      {/* Section titre principale */}
      <motion.section
        className="text-center mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 gradient-text-cyan-purple">
          À propos de moi
        </h1>
        <p className="text-base sm:text-lg ld:text-lx text-muted-foreground max-w-2xl mx-auto text-gray-400">
          Développeur full-stack passionné par la création d’applications modernes,
          performantes et utiles.
        </p>
      </motion.section>

      {/* Texte + Image */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">

        <motion.div
          className="space-y-8 text-gray-300"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xl">
            Je suis développeur full-stack spécialisé dans le développement
            d’applications <strong className="text-white">mobiles</strong> et <strong className="text-white">web</strong>.
          </p>

          <p className="text-xl">
            J’utilise principalement <strong className="text-white">Flutter</strong> pour le mobile,
            <strong className="text-white"> Next.js</strong> pour le frontend web et
            <strong className="text-white"> NestJS</strong> pour le backend.
          </p>

          <p className="text-xl">
            Mon objectif est de transformer des idées en solutions digitales
            fiables, bien conçues et faciles à utiliser.
          </p>
        </motion.div>

        <motion.div
          className="h-64 sm:h-72 lg:h-80 rounded-xl bg-muted flex items-center justify-center mt-20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <GradientHero />
        </motion.div>

      </section>

      {/* Ma façon de travailler */}
      <motion.section
        className="mb-24 mt-40"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 gradient-text-cyan-purple">
          Ma façon de travailler
        </h2>

        <div className="grid md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              titre: 'Analyse',
              texte: 'Je prends le temps de comprendre le besoin avant d’écrire la moindre ligne de code.',
            },
            {
              titre: 'Développement',
              texte: 'Code propre, structuré et évolutif, avec des technologies modernes.',
            },
            {
              titre: 'Livraison',
              texte: 'Résultat fonctionnel, testé et prêt à être utilisé ou déployé.',
            },
          ].map((etape, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 border-[#00f0ff]/20">
                <h3 className="font-semibold text-xl mb-2 text-cyan-400">{etape.titre}</h3>
                <p className="text-lg text-gray-400">{etape.texte}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Compétences */}
      <motion.section
        className="mb-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 gradient-text-cyan-purple">
          Compétences principales
        </h2>

        <div className="flex flex-wrap gap-4 justify-center">
          {compétences.map((skill, idx) => (
            <motion.span
              key={idx}
              className="px-4 py-2 rounded-full border text-sm sm:text-md bg-cyan-950 p-2 text-cyan-400"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.section>
    </main>
  );
}