import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kuldeep Lakhani – Full Stack Developer | AI SaaS Builder",
  description: "Building scalable, AI-powered web products with exceptional UX. Specialist in Next.js, TypeScript, and Full-Stack Engineering.",
  keywords: ["Next.js", "React", "TypeScript", "AI SaaS", "Full Stack Developer", "Tailwind CSS", "SaaS Builder", "Software Engineer"],
  authors: [{ name: "Kuldeep Lakhani" }],
  openGraph: {
    title: "Kuldeep Lakhani – Full Stack Developer | AI SaaS Builder",
    description: "Building scalable, AI-powered web products with exceptional UX.",
    type: "website",
    locale: "en_US",
    url: "https://kuldeeplakhani.vercel.app/",
    siteName: "Kuldeep Lakhani Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kuldeep Lakhani – Full Stack Developer | AI SaaS Builder",
    description: "Building scalable, AI-powered web products with exceptional UX.",
    creator: "@kuldeeplakhani", // Placeholder handle
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <body 
        className="min-h-screen antialiased font-sans bg-background text-foreground"
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          enableColorScheme={false}
        >
          <SmoothScroll>
            {children}
          </SmoothScroll>
          <Toaster position="bottom-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
