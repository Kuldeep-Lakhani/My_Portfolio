"use client"

import { Container } from "@/components/shared/container"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const glow1Ref = useRef<HTMLDivElement>(null)
  const glow2Ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline()

    tl.fromTo(
      [badgeRef.current, titleRef.current, descriptionRef.current, ctaRef.current],
      { opacity: 0, y: 30, filter: "blur(10px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.8,
        stagger: 0.15,
        ease: "power4.out",
        delay: 0.2
      }
    )

    // Mouse follow effect
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const xPos = (clientX / window.innerWidth - 0.5) * 40
      const yPos = (clientY / window.innerHeight - 0.5) * 40

      gsap.to(glow1Ref.current, {
        x: xPos,
        y: yPos,
        duration: 2,
        ease: "power2.out"
      })

      gsap.to(glow2Ref.current, {
        x: -xPos,
        y: -yPos,
        duration: 2,
        ease: "power2.out"
      })
    }

    // Scroll parallax for glows
    gsap.to(glow1Ref.current, {
      y: -100,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    })

    gsap.to(glow2Ref.current, {
      y: 100,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    })

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32 h-[100dvh]">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          ref={glow1Ref}
          className="absolute -top-[20%] -left-[10%] h-[140%] w-[120%] opacity-20 [background:radial-gradient(circle_at_center,var(--color-primary)_0,transparent_50%)]"
        />
        <div
          ref={glow2Ref}
          className="absolute top-[20%] -right-[10%] h-[140%] w-[120%] opacity-10 [background:radial-gradient(circle_at_center,var(--color-primary)_0,transparent_50%)]"
        />
      </div>

      <Container>
        <div className="flex flex-col items-center text-center">
          <div ref={badgeRef}>
            <Badge variant="secondary" className="mb-6 px-4 py-3 text-sm font-medium">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for Full-Time & Freelance Roles
            </Badge>
          </div>

          <h1
            ref={titleRef}
            className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl max-w-5xl"
          >
            Hi, I&apos;m <span className="text-primary">Kuldeep</span><br />
            Building <span className="text-primary">scalable</span>, AI-powered products.
          </h1>

          <p
            ref={descriptionRef}
            className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl"
          >
            Full-Stack Developer specializing in scalable web development. I build end-to-end solutions that bridge the gap between robust engineering and intuitive product design.
          </p>

          <div
            ref={ctaRef}
            className="mt-10 flex items-center justify-center 2sm:gap-x-6 gap-x-4"
          >
            <a
              href="#projects"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "rounded-full px-8 group transition-all hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-primary/20"
              )}
            >
              View Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-full px-8 transition-all hover:scale-105 active:scale-95 border border-border/50 hover:border-primary/50 hover:bg-primary/5 hover:text-primary"
              )}
            >
              Contact Me
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
