"use client"

import { Project } from "@/data/projects"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ExternalLink, Code } from "lucide-react"
import Image from "next/image"
import { useRef, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ProjectModal } from "./project-modal"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useGSAP(() => {
    if (!cardRef.current) return

    const card = cardRef.current

    const onMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = card.getBoundingClientRect()
      const x = e.clientX - left
      const y = e.clientY - top
      const xPercent = (x / width - 0.5) * 15
      const yPercent = (y / height - 0.5) * 15

      gsap.to(card, {
        rotateX: -yPercent,
        rotateY: xPercent,
        duration: 0.5,
        ease: "power2.out",
        transformPerspective: 1000,
      })
    }

    const onMouseLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: "power2.out",
      })
    }

    card.addEventListener("mousemove", onMouseMove)
    card.addEventListener("mouseleave", onMouseLeave)

    return () => {
      card.removeEventListener("mousemove", onMouseMove)
      card.removeEventListener("mouseleave", onMouseLeave)
    }
  }, { scope: cardRef })

  return (
    <>
      <div 
        ref={cardRef} 
        className="h-full cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <Card className="h-full flex flex-col overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/20 group/card">
          <div className="relative aspect-video overflow-hidden group">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-foreground text-sm font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                View Project Details <ExternalLink className="h-4 w-4" />
              </span>
            </div>
          </div>
          
          <CardHeader>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.techStack.slice(0, 3).map((tech) => (
                <Badge key={tech} variant="secondary" className="font-normal bg-muted/50">
                  {tech}
                </Badge>
              ))}
              {project.techStack.length > 3 && (
                <Badge variant="secondary" className="font-normal bg-muted/50">
                  +{project.techStack.length - 3}
                </Badge>
              )}
            </div>
            <CardTitle className="text-xl font-bold group-hover/card:text-primary transition-colors">{project.title}</CardTitle>
            <CardDescription className="text-primary font-medium opacity-80">
              {project.tagline}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="flex-grow">
            <p className="text-sm text-muted-foreground line-clamp-3">
              {project.description}
            </p>
          </CardContent>
          
          <CardFooter className="gap-x-3" onClick={(e) => e.stopPropagation()}>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }), 
                  "rounded-full h-8 px-4 transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary"
                )}
              >
                Demo <ExternalLink className="ml-1.5 h-3 w-3" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }), 
                  "rounded-full h-8 w-8 hover:bg-primary/10 hover:text-primary transition-colors"
                )}
              >
                <Code className="h-4 w-4" />
              </a>
            )}
          </CardFooter>
        </Card>
      </div>

      <ProjectModal 
        project={project} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  )
}
