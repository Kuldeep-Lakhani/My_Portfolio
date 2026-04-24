"use client"

import { useState, useEffect } from "react"
import { Container } from "@/components/shared/container"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X, Download } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border py-3"
          : "bg-transparent py-5"
      )}
    >
      <Container className="flex items-center justify-between">
        <a href="#" className="group relative flex items-center gap-1.5 transition-transform duration-300 hover:scale-105">
          <Image
            src="/pic-logo.png"
            alt="Logo"
            width={144}
            height={144}
            quality={100}
            className="rounded-xl shadow-md shadow-primary/20 object-cover h-9 w-9"
          />
          <span className="text-2xl font-black tracking-wide text-foreground">
            Lakhani
          </span>
          <span className="text-primary text-3xl leading-none font-bold -ml-1">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full cursor-pointer"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <a href="/CV.pdf" download="Kuldeep_Lakhani_CV.pdf">
            <Button className="rounded-full font-medium px-6 cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200 hover:shadow-lg hover:shadow-primary/20 flex items-center gap-2">
              <Download className="w-4 h-4" />
              Resume
            </Button>
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full cursor-pointer"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="/CV.pdf" download="Kuldeep_Lakhani_CV.pdf" className="w-full" onClick={() => setMobileMenuOpen(false)}>
            <Button className="w-full rounded-xl py-6 text-lg cursor-pointer hover:scale-[1.02] active:scale-95 transition-all duration-200 hover:shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Resume
            </Button>
          </a>
        </div>
      )}
    </header>
  )
}
