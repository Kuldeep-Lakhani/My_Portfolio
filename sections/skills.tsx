"use client"

import { Container } from "@/components/shared/container"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { skillCategories } from "@/data/skills"
import { Badge } from "@/components/ui/badge"
import { useRef } from "react"
import gsap from "@/lib/gsap"
import { useGSAP } from "@gsap/react"

export function Skills() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    const categories = containerRef.current.querySelectorAll(".skill-category")
    
    categories.forEach((cat) => {
      const badges = cat.querySelectorAll(".skill-badge")
      
      gsap.fromTo(
        badges,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: cat,
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        }
      )
    })
  }, { scope: containerRef })

  const logoCategories = skillCategories.filter(cat => cat.skills.some(s => s.icon))
  const textCategories = skillCategories.filter(cat => !cat.skills.some(s => s.icon))

  return (
    <SectionWrapper id="skills">
      <Container>
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Technical Arsenal
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            My core stack for building modern, high-performance web products.
          </p>
        </div>

        <div ref={containerRef} className="space-y-24">
          {/* Logo-based skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {logoCategories.map((category) => (
              <div key={category.category} className="skill-category space-y-6">
                <h3 className="text-lg font-bold text-foreground border-l-4 border-primary pl-3">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="skill-badge group flex items-center justify-center p-2 rounded-lg" title={skill.name}>
                      {skill.icon && (
                        <div 
                          className="w-14 h-14 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full transition-transform group-hover:scale-110"
                          dangerouslySetInnerHTML={{ __html: skill.icon }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Text-based skills */}
          <div className="pt-12 border-t border-border/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {textCategories.map((category) => (
                <div key={category.category} className="skill-category space-y-6">
                  <h3 className="text-lg font-bold text-foreground/80">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="skill-badge group">
                        <Badge 
                          variant="secondary" 
                          className="bg-secondary/30 hover:bg-primary/20 hover:text-primary border-transparent hover:border-primary/30 text-foreground font-normal transition-all duration-300 px-3 py-1 cursor-default hover:-translate-y-1 hover:scale-105"
                        >
                          {skill.name}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  )
}
