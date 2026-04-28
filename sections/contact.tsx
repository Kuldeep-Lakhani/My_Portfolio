"use client"

import { Container } from "@/components/shared/container"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Code, Globe, Mail, Send } from "lucide-react"
import { toast } from "sonner"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactValues = z.infer<typeof contactSchema>

const email = process.env.NEXT_PUBLIC_EMAIL_ADDRESS;

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactValues) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Message Sent!", {
          description: "Thank you! I'll get back to you as soon as possible.",
        });
        reset();
      } else {
        const errorMessage = typeof result.error === 'object' && result.error?.message 
          ? result.error.message 
          : (typeof result.error === 'string' ? result.error : "Something went wrong. Please try again.");

        toast.error("Failed to send", {
          description: errorMessage,
        });
      }
    } catch (err) {
      console.error("Form Error:", err);
      toast.error("Network Error", {
        description: "Could not connect to the server. Please check your connection.",
      });
    }
  }

  return (
    <SectionWrapper id="contact">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Let&apos;s build something <span className="text-primary">impactful</span>
            </h2>
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Whether you have a clear project in mind, a complex technical challenge to solve, or simply want to explore how AI and modern full-stack development can elevate your business, I’m here to help.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I focus on transforming ambitious ideas into scalable, high-performance digital products. My approach blends deep technical expertise with a strong emphasis on user experience, performance, and measurable business impact.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed font-medium text-primary/90">
                I’m currently open to new projects and consulting engagements. Let’s connect and build something meaningful together.
              </p>
            </div>
          </div>

          <div className="bg-card border border-border/50 rounded-3xl 2sm:p-8 p-6 shadow-sm">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your Name"
                  className="rounded-[14px] border-border/50 bg-background/50"
                  {...register("name")}
                />
                {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="rounded-[14px] border-border/50 bg-background/50"
                  {...register("email")}
                />
                {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="How can I help you?"
                  className="min-h-[150px] rounded-[14px] border-border/50 bg-background/50"
                  {...register("message")}
                />
                {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
              </div>

              <Button type="submit" size="lg" className="w-full rounded-xl cursor-pointer group" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : (
                  <>
                    Send Message <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  )
}
