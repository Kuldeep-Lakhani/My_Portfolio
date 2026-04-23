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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {logoCategories.map((category) => (
              <div key={category.category} className="skill-category flex flex-col space-y-6 bg-card border border-border/50 rounded-3xl p-8 shadow-sm transition-all hover:shadow-md hover:border-primary/20">
                <h3 className="text-xl font-bold text-foreground border-l-4 border-primary pl-4">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-4 pt-2">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="skill-badge group flex items-center justify-center p-3 rounded-2xl bg-background/80 border border-border/40 hover:bg-background hover:border-primary/40 hover:shadow-sm transition-all duration-300" title={skill.name}>
                      {skill.icon && (
                        <div 
                          className="w-12 h-12 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full transition-transform duration-300 group-hover:scale-110"
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
          <div className="pt-16 mt-8 border-t border-border/40">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {textCategories.map((category) => (
                <div key={category.category} className="skill-category flex flex-col space-y-5 bg-card/40 border border-border/40 rounded-3xl p-7 hover:bg-card hover:border-primary/20 hover:shadow-md transition-all duration-300">
                  <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(var(--primary),0.8)]"></span>
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2.5 pt-1">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="skill-badge group">
                        <Badge 
                          variant="outline" 
                          className="bg-background/60 border-border/50 hover:bg-primary/10 hover:text-primary hover:border-primary/50 text-foreground/90 font-medium transition-all duration-300 px-3.5 py-1.5 cursor-default hover:-translate-y-1 hover:shadow-sm"
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
