"use client";

import { Button } from "@/components/ui/button";
import CodeBlock from "@/components/ui/CodeBlock";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Metadata } from "next";

export const metadata:Metadata={
      title:"Dévéloppeur Full-Stack | Flutter, Next.js & NestJS",
      description:
      "Je conçois des applications mobiles et web modernes avec Flutter, Next.js et NestJS. Performance, design et scalabilité. "
}

export default function Home() {
  const stacks = [
    "flutter",
    "Next.js",
    "Nest.js",
    "Firebase",
    "TypeScript",
    "React",
  ];

  return (
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="container m-auto"
    >
      {/* Hero section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 mx-auto mt-20 gap-16">
        {/* Texte principal */}
        <div className="container mx-auto px-4 lg:px-0 lg:ml-20">
          <motion.h1
            className="poppins-black gradient-text text-5xl sm:text-6xl lg:text-8xl mt-10 lg:mt-20 mb-7 font-bold"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Développeur <br /> Full-Stack
          </motion.h1>

          <motion.p
            className="poppins-extralight text-2xl mb-7 text-cyan-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            // Créateur d'expériences digitales
          </motion.p>

          <p className="mt-4 text-lg text-muted-foreground max-w-xl text-gray-300">
            Spécialisé dans le développement d’applications modernes, rapides
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
              <Button variant={"outline"} className=" text-cyan-400 p-6 rounded-full text-xl">
                <Link href="/services">Voir mes services</Link>
              </Button>
            </motion.div>
          </div>
        </div>

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
      </section>

      {/* Sections suivantes — tu peux aussi ajouter motion si tu veux plus d'animations */}
    </motion.main>
  );
}