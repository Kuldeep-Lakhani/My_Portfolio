"use client"

import { Project } from "@/data/projects"
import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink, Code, CheckCircle2, AlertCircle, Lightbulb } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!mounted || !project) return null

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/90 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden bg-card border border-border rounded-2xl md:rounded-3xl shadow-2xl flex flex-col z-[10000]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute cursor-pointer top-4 right-4 md:top-6 md:right-6 z-[10001] p-2 rounded-full bg-background/50 backdrop-blur-md border border-border hover:bg-accent transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Scrollable Content */}
            <div 
              className="overflow-y-auto overflow-x-hidden flex-1 scroll-smooth overscroll-contain scrollbar-hide"
              data-lenis-prevent
            >
              {/* Header Image */}
              <div className="relative w-full aspect-video md:aspect-[21/9]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
              </div>

              {/* Content Wrapper */}
              <div className="px-6 pb-12 md:px-12 -mt-8 md:-mt-12 relative z-10">
                <div className="flex flex-col gap-6 md:gap-10">
                  {/* Title Section */}
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight mb-2">{project.title}</h2>
                    <p className="text-lg text-primary font-medium">{project.tagline}</p>
                  </div>

                  {/* Links Row */}
                  <div className="flex flex-wrap gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(buttonVariants({ variant: "default", size: "lg" }), "rounded-full px-6 md:px-8")}
                      >
                        Visit Live Project <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full px-6 md:px-8")}
                      >
                        View Source <Code className="ml-2 h-4 w-4" />
                      </a>
                    )}
                  </div>

                  {/* Narrative Sections */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
                    {/* Left Column: Narrative */}
                    <div className="lg:col-span-8 space-y-12">
                      <section>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2.5 rounded-xl bg-destructive/10 text-destructive">
                            <AlertCircle className="h-5 w-5" />
                          </div>
                          <h3 className="font-bold uppercase tracking-[0.2em] text-muted-foreground/80 text-xs">The Challenge</h3>
                        </div>
                        <p className="text-lg leading-relaxed text-foreground/90">{project.problem}</p>
                      </section>

                      <section>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                            <Lightbulb className="h-5 w-5" />
                          </div>
                          <h3 className="font-bold uppercase tracking-[0.2em] text-muted-foreground/80 text-xs">The Solution</h3>
                        </div>
                        <p className="text-lg leading-relaxed text-foreground/90">{project.solution}</p>
                      </section>

                      <section>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500">
                            <CheckCircle2 className="h-5 w-5" />
                          </div>
                          <h3 className="font-bold uppercase tracking-[0.2em] text-muted-foreground/80 text-xs">Final Outcome</h3>
                        </div>
                        <p className="text-lg leading-relaxed text-foreground/90">{project.outcome}</p>
                      </section>
                    </div>

                    {/* Right Column: Meta */}
                    <div className="lg:col-span-4 space-y-8">
                      <section className="p-6 rounded-3xl bg-muted/30 border border-border/50">
                        <h3 className="font-bold mb-6 uppercase tracking-widest text-[10px] text-muted-foreground">Technical Stack</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <Badge key={tech} variant="secondary" className="px-3 py-1.5 text-xs rounded-lg bg-background/50 border-border/50 font-medium">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </section>

                      <section className="p-6 rounded-3xl bg-primary/[0.03] border border-primary/10">
                        <h3 className="font-bold mb-3 uppercase tracking-widest text-[10px] text-primary">Overview</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed italic">
                          "{project.description}"
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )

  return createPortal(modalContent, document.body)
}
