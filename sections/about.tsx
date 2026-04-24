import { Container } from "@/components/shared/container"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { Code2, Brain, Rocket, Database } from "lucide-react"

export function About() {
  return (
    <SectionWrapper id="about">
      <Container>
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Full-Stack Developer & <span className="text-primary">AI Enthusiast</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I am deeply passionate about building the next generation of intelligent web applications, blending robust web infrastructure with cutting-edge artificial intelligence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                My technical foundation lies in modern ecosystems, specializing in <strong className="text-foreground">Next.js, React, TypeScript, Node.js, Tailwind CSS</strong>, and robust databases like <strong className="text-foreground">MongoDB and PostgreSQL</strong>. I excel at bridging the gap between scalable backend engineering and intuitive, dynamic frontend design.
              </p>
              <p>
                Currently, I am leading development at <strong className="text-foreground">Desilo Technologies</strong>, where I architect high-performance systems and embed advanced AI capabilities directly into our core products to solve intricate industry challenges. I thrive on pushing the boundaries of software.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-3xl bg-muted/30 border border-border/50 space-y-4 hover:bg-muted/50 hover:border-primary/30 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">Frontend</h3>
                  <p className="text-sm text-muted-foreground">Crafting intuitive, dynamic, and accessible user experiences.</p>
                </div>
              </div>
              
              <div className="p-6 rounded-3xl bg-muted/30 border border-border/50 space-y-4 hover:bg-muted/50 hover:border-primary/30 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  <Database className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">Backend</h3>
                  <p className="text-sm text-muted-foreground">Building scalable, secure, and high-performance infrastructure.</p>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-muted/30 border border-border/50 space-y-4 hover:bg-muted/50 hover:border-primary/30 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">AI Integration</h3>
                  <p className="text-sm text-muted-foreground">Embedding advanced AI capabilities to solve complex problems.</p>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-muted/30 border border-border/50 space-y-4 hover:bg-muted/50 hover:border-primary/30 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">Leadership</h3>
                  <p className="text-sm text-muted-foreground">Leading development and architecting technical solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  )
}
