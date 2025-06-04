"use client"

import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import { Download } from "lucide-react";

export default function HeroSection() {

  return (
    <section className="relative min-h-[90vh] overflow-hidden px-4 py-20">
    {/* Background elements */}
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -right-1/4 -top-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-1/4 -left-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 4,
        }}
      />
    </div>

    <div className="container relative z-10 mx-auto grid max-w-6xl gap-12 pt-12 md:grid-cols-2 md:items-center md:pt-20">
      {/* Content */}
      <div className="flex flex-col gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Badge variant="secondary" className="mb-4 w-fit">
            👋 Welcome to my portfolio
          </Badge>
        </motion.div>

        <motion.h1
          className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Software Engineer
          </span>
        </motion.h1>

        <motion.h2
          className="text-2xl font-medium text-muted-foreground md:text-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          And a Business Entrepreneur
        </motion.h2>

        <motion.p
          className="max-w-md text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          I create exceptional digital experiences with modern technologies. Passionate about building scalable, user-friendly applications that make a difference. Where Code Meets Creativity – A Software Engineer & Polymath's Journey.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button asChild size="lg" className="group">
            <Link href="/projects">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a 
              href="/Syed Faysel CV.pdf" 
              download="Syed Faysel CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="mr-2 h-4 w-4" /> Download CV
            </a>
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <span className="text-sm text-muted-foreground">Connect with me:</span>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:your.email@example.com">
                <Mail className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Profile Image */}
      <motion.div
        className="relative flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="relative">
          <motion.div
            className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 blur-2xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-background shadow-2xl">
            <Image
              src="/my-image.png?height=420&width=420"
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </motion.div>
    </div>
  </section>
  )
}