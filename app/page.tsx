import type { Metadata } from "next";
import Hero from "@/components/hero";
import About from "@/components/about";
import TechStack from "@/components/tech-stack";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Mohamed Saber | Portfolio",
  description: "Software Engineering Student at Vilnius University | Full-Stack Developer",
  keywords: [
    "Software Engineering Student",
    "Full Stack Developer",
    "Node.js Developer",
    "React Developer",
    "TypeScript",
    "Python",
    "C# Developer",
    "AWS Lambda",
    "Serverless",
    "Web Developer",
    "PostgreSQL",
    "Express.js",
    "Mohamed Saber",
    "Vilnius University",
    "Lithuania Developer",
    "Junior Developer",
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
