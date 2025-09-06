import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold"><span className="text-primary">s</span>yedfaysel | Portfolio</h3>
            <p className="text-sm text-muted-foreground">
              A showcase of my work, skills, and experience as a full-stack developer.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-foreground">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>sfa.rajo20@gmail.com</li>
              <li>Dhaka, Bangladesh</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Connect</h3>
            <div className="flex gap-4">
              <Link
                href="https://github.com/syedfaysel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/syedfaysel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://x.com/syedfaysel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:sfa.rajo20@gmail.com"
                className="text-muted-foreground hover:text-foreground"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Syed Faysel Ahammad Rajo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
