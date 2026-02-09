'use client';

import { Button } from "@/components/ui/button"
import { Card, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"

export default function ContactContent() {
  const contactInfo = [
    {
      emoji: "📧",
      label: "Email",
      value: "sodjinoucarrache@gmail.com"
    },
    {
      emoji: "📱",
      label: "Téléphone",
      value: "+229 0141193597"
    },
    {
      emoji: "📍",
      label: "Localisation",
      value: "Parakou, Bénin"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        type: "tween"
      }
    }
  }

  const formVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        type: "tween"
      }
    }
  }

  return (
    <main className="container mx-auto sm:px-6 lg:px-10 py-20 mt-22">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text-cyan-purple">
          Contact
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto text-gray-300">
          Un projet, une idée ou une collaboration ?
          N'hésitez pas à me contacter.
        </p>
      </motion.section>

      <section className="grid md:grid-cols-1 lg:grid-cols-2 gap-12 items-start px-4">
        {/* Informations de contact */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold gradient-text-cyan-purple"
          >
            Travaillons <br /> Ensemble
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="mt-4 text-base sm:text-lg text-gray-300"
          >
            Vous avez un projet en tête? <br />
            Discutons-en! Je suis toujours <br />
            ouvert à de nouvelles opportunités <br />
            et collaborations passionnantes.
          </motion.p>

          <div className="grid md:grid-cols-1 gap-4 mt-5">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <Card className="flex flex-row bg-[#1a1a28] hover:border border-[#00f0ff]/20 hover:border-cyan-500 transition-colors">
                  <CardHeader className="text-2xl">
                    {info.emoji}
                  </CardHeader>
                  <div>
                    <p className="text-md text-gray-400">{info.label}</p>
                    <h2 className="text-lg text-white">{info.value}</h2>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Formulaire de contact */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={formVariants}
          className="mt-7 items-center"
        >
          <Card className="p-8 bg-[#1a1a28] border-[#00f0ff]/20 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <label htmlFor="name" className="text-white text-lg block mb-3 font-semibold">
                Nom complet
              </label>
              <Input
                id="name"
                placeholder="Nom complet"
                className="w-full p-5 bg-[#1a1a28] border border-[#00f0ff]/20 rounded-xl text-base sm:text-lg text-gray-300 transition focus:outline-none focus:border-[#00f0ff] focus:shadow-[0_0_0_3px_rgba(0,240,255,0.1)]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <label htmlFor="email" className="text-white text-lg block mb-3 font-semibold">
                Email
              </label>
              <Input
                id="email"
                placeholder="Votre email"
                className="w-full p-5 bg-[#1a1a28] border border-[#00f0ff]/20 rounded-xl text-base sm:text-lg text-gray-300 transition focus:outline-none focus:border-[#00f0ff] focus:shadow-[0_0_0_3px_rgba(0,240,255,0.1)]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <label htmlFor="sujet" className="text-white text-lg block mb-3 font-semibold">
                Sujet
              </label>
              <Input
                id="sujet"
                placeholder="Votre sujet"
                className="w-full p-5 bg-[#1a1a28] border border-[#00f0ff]/20 rounded-xl text-base sm:text-lg text-gray-300 transition focus:outline-none focus:border-[#00f0ff] focus:shadow-[0_0_0_3px_rgba(0,240,255,0.1)]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <label htmlFor="message" className="text-white text-lg block mb-3 font-semibold">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Votre message..."
                className="w-full min-h-[140px] p-5 bg-[#1a1a28] border border-[#00f0ff]/20 rounded-xl text-base sm:text-lg text-gray-300 transition focus:outline-none focus:border-[#00f0ff] focus:shadow-[0_0_0_3px_rgba(0,240,255,0.1)]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Button
                className="w-full mt-4 bg-cyan-500 hover:bg-cyan-600 text-[#1a1a28] text-lg p-6 rounded-xl transition-colors"
              >
                Envoyer le message
              </Button>
            </motion.div>
          </Card>
        </motion.div>
      </section>
    </main>
  )
}
