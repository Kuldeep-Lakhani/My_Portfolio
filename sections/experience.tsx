"use client"

import { Container } from "@/components/shared/container"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { useRef } from "react"
import gsap from "@/lib/gsap"
import { useGSAP } from "@gsap/react"

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    company: "Desilo Technologies Pvt. Ltd.",
    role: "Full Stack Developer",
    period: "2023 - Present",
    description: [
      "Developed and maintained scalable web applications using React.js and Next.js while collaborating with backend services built with Node.js and MongoDB.",
      "Built reusable and modular UI components, improving code maintainability and accelerating development across multiple projects.",
      "Collaborated with backend teams to integrate REST APIs and deliver seamless user experiences across web platforms.",
      "Implemented secure token-based authentication (JWT) including Login, Registration, and Password Recovery workflows with protected routes and secure session handling.",
      "Implemented responsive UI designs ensuring compatibility across multiple devices and browsers while improving overall frontend performance through efficient state management, debugging, and code refactoring.",
      "Followed modern UI/UX practices, clean coding standards, and Git-based version control while leveraging AI-assisted development tools and agentic workflows to enhance development productivity.",
    ],
  },
];

export function Experience() {
  const listRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!listRef.current) return

    const items = listRef.current.querySelectorAll(".experience-item")
    
    items.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            toggleActions: "play none none reverse",
          }
        }
      )
    })
  }, { scope: listRef })

  return (
    <SectionWrapper id="experience" className="bg-muted/30">
      <Container>
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Professional Journey
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Building impact through engineering and product innovation.
          </p>
        </div>

        <div ref={listRef} className="max-w-3xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="experience-item relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-border"
            >
              <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-primary" />
              
              <div className="mb-1 flex sm:flex-row flex-col sm:items-center items-start sm:justify-between gap-2">
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full border border-border">
                  {exp.period}
                </span>
              </div>
              <p className="text-primary font-medium mb-4">{exp.company}</p>
              
              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-muted-foreground flex gap-3">
                    <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/40 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  )
}
