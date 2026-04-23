"use client"

import { Container } from "@/components/shared/container"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { ProjectCard } from "@/components/shared/project-card"
import { projects } from "@/data/projects"
import Image from "next/image"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useRef } from "react"
import gsap from "@/lib/gsap"
import { useGSAP } from "@gsap/react"

export function Projects() {
  const gridRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!gridRef.current) return

    const cards = gridRef.current.querySelectorAll(".project-card-wrapper")
    
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50, scale: 0.9, filter: "blur(10px)" },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      }
    )
  }, { scope: gridRef })
  return (
    <SectionWrapper id="projects" className="bg-muted/30">
      <Container>
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Selected Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A collection of products I&apos;ve built, ranging from creator platforms to AI-driven enterprise tools.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="project-card-wrapper h-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  )
}
