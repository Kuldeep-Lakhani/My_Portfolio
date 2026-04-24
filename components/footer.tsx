"use client"

import { Container } from "@/components/shared/container"
import { cn } from "@/lib/utils"

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kuldeep-lakhani-b00618245/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
  },
  {
    name: "Email",
    href: "mailto:kuldiplakhani1303@gmail.com",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`,
  },
]

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-muted/30">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Branding Column */}
          <div className="space-y-4">
            <a href="#" className="text-2xl font-bold tracking-wider text-primary inline-block">
              KL
            </a>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                Full-Stack Developer. Passionate about creating scalable, high-performance web applications using Next.js, React, Node.js, and modern databases to transform complex ideas into seamless digital experiences.
              </p>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-4 flex flex-col md:items-center">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Navigation</h4>
            <nav className="flex flex-col items-start gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Socials Column */}
          <div className="space-y-4 md:text-right md:items-end flex flex-col">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full border border-border/50 bg-background/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all"
                  title={social.name}
                >
                  <div
                    className="h-5 w-5 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full"
                    dangerouslySetInnerHTML={{ __html: social.icon }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Kuldeep Lakhani. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
