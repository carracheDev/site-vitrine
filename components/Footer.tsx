"use client"

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const navigationLinks = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: "🐙", href: "#", label: "GitHub" },
    { icon: "💼", href: "#", label: "LinkedIn" },
    { icon: "🐦", href: "#", label: "Twitter" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <footer className="border-t bg-transparent border-[#00f0ff]/20 text-cyan-600 mt-24">
      {/* Contenu principal */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-6 py-16 grid gap-12 md:grid-cols-3 text-center md:text-left"
      >
        {/* Identité */}
        <motion.div variants={itemVariants} transition={{ duration: 0.5 }} className="space-y-6">
          <h3 className="font-semibold text-cyan-500 text-lg">
            Sodjinou Carrache
          </h3>
          <p className="text-gray-400">
            Développeur Full-Stack spécialisé en<br />
            Flutter, Next.js et NestJS.
          </p>
          <p className="text-gray-400">
            Mobile <span className="text-xl">·</span> Web <span className="text-xl">·</span> API
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.div variants={itemVariants} transition={{ duration: 0.5 }}>
          <h4 className="font-semibold mb-4 text-white">Navigation</h4>
          <ul className="space-y-2">
            {navigationLinks.map((link, index) => (
              <motion.li
                key={link.name}
                variants={linkVariants}
                transition={{ duration: 0.3 }}
                whileHover={{ x: 5 }}
              >
                <Link
                  href={link.href}
                  className="text-gray-400 text-lg hover:text-cyan-400 transition inline-block"
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div variants={itemVariants} transition={{ duration: 0.5 }}>
          <h4 className="mb-4 font-semibold text-white">Contact</h4>
          <ul className="space-y-2 text-gray-400">
            <motion.li
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              📧 sodjinoucarrache457@gmail.com
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              📱 +229 01 41 19 35 97
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              📍 Parakou, Bénin
            </motion.li>
          </ul>

          <div className="flex justify-center md:justify-start gap-4 mt-6 text-xl">
            {socialLinks.map((social, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.4 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.2,
                  rotate: 5,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  href={social.href}
                  className="hover:text-cyan-400 transition inline-block"
                  aria-label={social.label}
                >
                  {social.icon}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="border-t py-6 border-[#00f0ff]/20"
      >
        <p className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Sodjinou Carrache. Tous droits réservés.
        </p>
      </motion.div>
    </footer>
  );
}