"use client"

import { Container } from "@/components/shared/container"
import { cn } from "@/lib/utils"
import Image from "next/image"

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
  {
    name: "WhatsApp",
    href: "https://wa.me/919427809689?text=Hii,%20Kuldeep%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
    icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>`,
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
            <a href="#" className="group relative flex items-center gap-1.5 transition-transform duration-300 hover:scale-105">
              <Image
                src="/pic-logo.png"
                alt="Logo"
                width={144}
                height={144}
                quality={100}
                className="rounded-xl shadow-md shadow-primary/20 object-cover h-9 w-9"
              />
              <span className="text-2xl font-bold tracking-wide text-foreground">
                Lakhani
              </span>
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
