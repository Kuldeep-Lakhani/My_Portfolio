import { Container } from "@/components/shared/container"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import Image from "next/image"

export function About() {
  return (
    <SectionWrapper id="about">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Engineering with a <span className="text-primary">Product Mindset</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I am a Full-Stack Developer specialized in building scalable, high-performance web applications. My core stack includes <strong>Next.js, React, TypeScript, Node.js, Tailwind CSS, and modern database solutions like MongoDB and PostgreSQL</strong>. I bridge the gap between robust engineering and intuitive product design, focusing on delivering seamless user experiences and measurable business impact.
              </p>
              <p>
                Currently, I am leading development at <strong>Desilo Technologies</strong>, where I architect scalable systems and integrate generative AI capabilities to solve real-world industry challenges.
              </p>
            </div>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-muted border border-border/50 shadow-2xl shadow-primary/5">
            <Image
              src="/portfolio-pic.png"
              alt="Kuldeep Lakhani - Full Stack Engineer"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </Container>
    </SectionWrapper>
  )
}
