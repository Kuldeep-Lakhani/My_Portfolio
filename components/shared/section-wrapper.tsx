"use client"

import { cn } from "@/lib/utils"
import { useRef } from "react"
import gsap from "@/lib/gsap"
import { useGSAP } from "@gsap/react"

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  id: string
}

export function SectionWrapper({
  children,
  className,
  id,
  ...props
}: SectionWrapperProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.fromTo(
      contentRef.current,
      { 
        opacity: 0, 
        y: 40,
        filter: "blur(8px)"
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end: "top 60%",
          scrub: 1,
        }
      }
    )
  }, { scope: sectionRef })

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={cn("py-20 md:py-32 overflow-hidden", className)}
      {...props}
    >
      <div ref={contentRef}>
        {children}
      </div>
    </section>
  )
}
