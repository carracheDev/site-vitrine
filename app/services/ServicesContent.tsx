'use client';

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function ServicesContent() {
  const technologies = [
    "Flutter",
    "Next.js",
    "NestJS",
    "TypeScript",
    "React",
    "Firebase",
    "Tailwind CSS",
  ]

  const services = [
    {
      emoji: "📱",
      title: "Applications mobiles",
      description: "Développement d'applications mobiles cross-platform avec Flutter, performantes et fluides."
    },
    {
      emoji: "🌐",
      title: "Applications web",
      description: "Création de sites et applications web modernes avec Next.js, rapides et optimisées SEO."
    },
    {
      emoji: "⚙️",
      title: "Backend & API",
      description: "Conception d'APIs robustes avec NestJS, sécurisées et évolutives."
    },
    {
      emoji: "☁️",
      title: "Firebase & Cloud",
      description: "Authentification, base de données temps réel et déploiement cloud."
    },
    {
      emoji: "🎨",
      title: "UI / UX",
      description: "Interfaces modernes, claires et centrées sur l'expérience utilisateur."
    },
    {
      emoji: "🚀",
      title: "Accompagnement",
      description: "Conseil technique, amélioration de projets et accompagnement d'équipes."
    }
  ]

  // Variants pour les animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "tween"
      }
    }
  }

  return (
    <main className="container m-auto px-4 sm:px-8 lg:px-10 mt-24">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text-cyan-purple">
          Mes services
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto text-gray-400">
          Des solutions digitales complètes pour créer des applications modernes,
          performantes et évolutives.
        </p>
      </motion.section>

      {/* Services cards */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Card className="p-6 space-y-4 bg-[#1a1a28] border-[#00f0ff]/20 h-full hover:border-[#00f0ff]/40 transition-colors">
              <div className="text-3xl sm:text-4xl">{service.emoji}</div>
              <h3 className="text-lg sm:text-xl font-semibold gradient-text-cyan-purple">
                {service.title}
              </h3>
              <p className="text-base sm:text-lg text-gray-400">
                {service.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </motion.section>

      {/* Technologies utilisées */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-24"
      >
        <h2 className="text-3xl font-bold mb-8 gradient-text-cyan-purple">
          Technologies utilisées
        </h2>

        <div className="flex flex-wrap gap-4 justify-center">
          {technologies.map((tech, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.1 
              }}
              whileHover={{ 
                scale: 1.1,
                borderColor: "#00f0ff"
              }}
              viewport={{ once: true }}
              className="px-4 py-2 border rounded-full text-sm sm:text-md text-cyan-400 cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.section>
    </main>
  )
}
