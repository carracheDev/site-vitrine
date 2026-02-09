"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const menuLinks = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ]

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const menuItemVariants = {
    closed: {
      opacity: 0,
      x: -20
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "tween" }}
      className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur border-b border-[#00f0ff]/20"
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-orbitron flex flex-col text-xl font-black gradient-text-cyan-purple tracking-wider gradient-to-cyan from gradient-to-purple text-transparent"
        >
          <span className="text-base md:text-lg ld:text-lx">&lt;DEV/&gt;</span>
          <Link href="/" className="text-base md:text-xl ld:text-2xl font-bold text-cyan-400">
            Carrache.dev
          </Link>
        </motion.div>

        {/* Menu desktop */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden md:flex gap-8 text-gray-300"
        >
          {menuLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              <Link
                href={link.href}
                className="hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        {/* CTA desktop */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hidden md:block"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-cyan-400 hover:bg-cyan-500 text-black rounded-full transition-colors">
              Démarrer un projet
            </Button>
          </motion.div>
        </motion.div>

        {/* Toggle mobile */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setOpen(!open)}
          className="md:hidden text-cyan-400"
        >
          <motion.div
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </motion.div>
        </motion.button>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden overflow-hidden"
          >
            <nav className="flex flex-col gap-6 px-6 py-6 bg-black border-t border-[#00f0ff]/20">
              {menuLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  variants={menuItemVariants}
                >
                  <Link
                    onClick={() => setOpen(false)}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors block"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                variants={menuItemVariants}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-cyan-400 hover:bg-cyan-500 text-black rounded-full mt-4 w-full transition-colors">
                  Démarrer un projet
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}