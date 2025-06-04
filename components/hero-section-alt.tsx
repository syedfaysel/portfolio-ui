"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export default function HeroSectionAlt() {
  const isMobile = useMobile()
  const constraintsRef = useRef(null)

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-b from-background to-background/80 px-4 py-20">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-1/4 -top-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto grid max-w-6xl gap-12 pt-12 md:grid-cols-12 md:gap-8 md:pt-20">
        {/* Social links - vertical on desktop */}
        <motion.div
          className="hidden md:col-span-1 md:flex md:flex-col md:items-center md:gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="h-20 w-px bg-border" />
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5" />
          </Link>
          <Link
            href="mailto:your.email@example.com"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </Link>
          <div className="h-20 w-px bg-border" />
        </motion.div>

        {/* Main content */}
        <div className="md:col-span-6">
          <div className="flex flex-col gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Full Stack Developer
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Creating digital experiences that <span className="text-primary">matter</span>
            </motion.h1>

            <motion.p
              className="max-w-md text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I'm a passionate developer focused on building modern, accessible, and high-performance web applications
              that solve real-world problems.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button asChild size="lg" className="group">
                <Link href="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="mt-8 grid grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="rounded-lg border bg-card p-4 text-center">
                <h3 className="text-3xl font-bold text-primary">5+</h3>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="rounded-lg border bg-card p-4 text-center">
                <h3 className="text-3xl font-bold text-primary">20+</h3>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <div className="rounded-lg border bg-card p-4 text-center">
                <h3 className="text-3xl font-bold text-primary">15+</h3>
                <p className="text-sm text-muted-foreground">Technologies</p>
              </div>
            </motion.div>

            {/* Social links - horizontal on mobile */}
            <motion.div
              className="mt-8 flex items-center gap-6 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:your.email@example.com"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Visual element */}
        <motion.div
          className="relative md:col-span-5"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          ref={constraintsRef}
        >
          <div className="relative h-[400px] w-full overflow-hidden rounded-2xl border bg-card/50 backdrop-blur-sm">
            {/* Floating elements */}
            <motion.div
              className="absolute left-[10%] top-[20%] h-16 w-16 rounded-xl bg-primary/80 backdrop-blur-md"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              drag={!isMobile}
              dragConstraints={constraintsRef}
            />
            <motion.div
              className="absolute right-[15%] top-[60%] h-20 w-20 rounded-full bg-primary/20 backdrop-blur-md"
              animate={{
                y: [0, 30, 0],
                x: [0, -20, 0],
              }}
              transition={{
                duration: 7,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              drag={!isMobile}
              dragConstraints={constraintsRef}
            />
            <motion.div
              className="absolute right-[25%] top-[15%] h-24 w-24 rounded-full border border-primary/20 bg-transparent"
              animate={{
                y: [0, 15, 0],
                x: [0, 15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              drag={!isMobile}
              dragConstraints={constraintsRef}
            />
            <motion.div
              className="absolute left-[20%] top-[50%] h-12 w-12 rounded-lg border border-primary/30 bg-transparent"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              drag={!isMobile}
              dragConstraints={constraintsRef}
            />

            {/* Profile image */}
            <motion.div
              className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-4 border-background shadow-lg md:h-48 md:w-48"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
              drag={!isMobile}
              dragConstraints={constraintsRef}
            >
              <Image src="/placeholder.svg?height=200&width=200" alt="Profile" fill className="object-cover" />
            </motion.div>

            {/* Tech stack icons */}
            <motion.div
              className="absolute bottom-6 left-0 right-0 mx-auto flex max-w-[80%] justify-center gap-4 rounded-xl border bg-card/80 p-3 backdrop-blur-md"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {["React", "Next.js", "TypeScript", "Node.js", "Tailwind"].map((tech, index) => (
                <motion.div
                  key={tech}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary"
                  whileHover={{ y: -5, scale: 1.1 }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  {tech.charAt(0)}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground">Scroll Down</span>
          <div className="h-6 w-px bg-muted-foreground/50" />
        </div>
      </motion.div>
    </section>
  )
}
