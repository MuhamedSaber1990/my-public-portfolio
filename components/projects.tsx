"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink, Github, ChevronDown } from "lucide-react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  tags: string[];
  features: string[];
  demoLink: string;
  githubLink: string;
  fullDescription: string;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const projects = [
    {
      id: 1,
      title: "AI-Powered Inventory Management System",
      shortDescription:
        "A full-stack inventory management suite with automated stock tracking and AI features.",
      description:
        "Full-stack inventory management with smart search, auto descriptions, and insights.",
      image: "/Inventory app dashboard.png",
      tags: ["Node.js", "Express", "PostgreSQL", "React", "AI"],
      features: [
        "Automated stock tracking and management",
        "AI-powered smart search functionality",
        "Auto-generated product descriptions",
        "Inventory insights and analytics",
        "User-friendly dashboard interface",
      ],
      demoLink: "https://inventory-management-application-ht9y.onrender.com/",
      githubLink: "https://github.com/MuhamedSaber1990/inventory-management-application",
      fullDescription:
        "A full-stack inventory management suite with automated stock tracking and AI features including smart search, auto descriptions, and insights. Built with Node.js and Express for the backend, PostgreSQL for data storage, and React for the frontend. The application provides a comprehensive solution for businesses to manage their inventory efficiently.",
    },
    {
      id: 2,
      title: "Patent Search Dashboard",
      shortDescription:
        "Node.js + Express app to search patents via the European Patent Office (EPO) OPS API.",
      description:
        "A web application for searching patents with pagination and metadata display.",
      image: "/Patent-search.png",
      tags: ["Node.js", "Express", "EJS", "REST API"],
      features: [
        "Search patents via EPO OPS API",
        "Pagination support for results",
        "Patent metadata display",
        "Clean and intuitive interface",
        "Fast and responsive search",
      ],
      demoLink: "",
      githubLink: "https://github.com/MuhamedSaber1990/patent-search-dashboard",
      fullDescription:
        "A Node.js + Express application that allows users to search patents via the European Patent Office (EPO) OPS API. Features include pagination, patent metadata display, and a clean user interface. The application demonstrates API integration and backend development skills.",
    },
    {
      id: 3,
      title: "Vimeo Video Downloader → Google Drive",
      shortDescription:
        "Enter a Vimeo URL → downloads via FFmpeg → uploads to Google Drive with real-time progress.",
      description:
        "A serverless utility for downloading and uploading videos with WebSocket progress updates.",
      image: "/vimeo-video-downloader.png",
      tags: ["Node.js", "FFmpeg", "WebSockets", "Google Drive API"],
      features: [
        "Vimeo video downloading via FFmpeg",
        "Automatic Google Drive upload",
        "Real-time progress via WebSocket",
        "Clean and simple interface",
        "Secure authentication",
      ],
      demoLink: "",
      githubLink: "https://github.com/MuhamedSaber1990/vimeo-video-downloader",
      fullDescription:
        "A Node.js application that takes a Vimeo URL, downloads the video using FFmpeg, and uploads it to Google Drive. Features real-time progress updates via WebSockets, providing users with immediate feedback during the download and upload process.",
    },
    {
      id: 4,
      title: "QR Generator Lambda",
      shortDescription:
        "AWS Lambda (Node.js) that generates QR codes on demand via API Gateway.",
      description:
        "A lightweight serverless endpoint for QR code generation.",
      image: "/QR generator.png",
      tags: ["AWS Lambda", "Node.js", "Serverless", "API Gateway"],
      features: [
        "On-demand QR code generation",
        "Serverless architecture",
        "API Gateway integration",
        "Lightweight and fast",
        "Easy to deploy and scale",
      ],
      demoLink: "",
      githubLink: "https://github.com/MuhamedSaber1990/qr-generator-lambda",
      fullDescription:
        "An AWS Lambda function written in Node.js that generates QR codes on demand. Can be used with API Gateway as a lightweight endpoint for QR code generation. Demonstrates serverless architecture and cloud computing skills.",
    },
    {
      id: 5,
      title: "Lithuania EV Charging Infrastructure Analysis",
      shortDescription:
        "Data analysis project exploring EV charging infrastructure in Lithuania.",
      description:
        "A data visualization and analysis project for electric vehicle infrastructure.",
      image: "/Lithuania-EV-Charging-Infrastructure.png",
      tags: ["Python", "Data Analysis", "Visualization"],
      features: [
        "Data collection and cleaning",
        "Statistical analysis",
        "Interactive visualizations",
        "Infrastructure insights",
        "Comprehensive documentation",
      ],
      demoLink: "",
      githubLink: "https://github.com/MuhamedSaber1990/Lithuania-EV-Charging-Infrastructure",
      fullDescription:
        "A data analysis project that explores the electric vehicle charging infrastructure in Lithuania. Uses Python for data collection, cleaning, and visualization. Provides insights into the current state and future needs of EV charging infrastructure in the region.",
    },
    {
      id: 6,
      title: "Brute Force Password (WPF + AES)",
      shortDescription:
        "Educational WPF project demonstrating AES encryption and brute-force simulation concepts.",
      description:
        "A desktop application for learning about cryptography and security concepts.",
      image: "/Brute-Force.png",
      tags: ["C#", "WPF", ".NET", "AES", "Cryptography"],
      features: [
        "AES encryption demonstration",
        "Brute-force simulation",
        "Clean WPF interface",
        "Educational purpose",
        "Security concepts visualization",
      ],
      demoLink: "",
      githubLink: "https://github.com/MuhamedSaber1990/BruteForcePassword",
      fullDescription:
        "An educational WPF project demonstrating AES encryption and brute-force simulation concepts. Built with C# and .NET, this application helps users understand cryptographic principles and security vulnerabilities. For educational purposes only.",
    },
    {
      id: 7,
      title: "Azure Function Gemini Facade",
      shortDescription:
        "An Azure Function that provides a facade for Google's Gemini AI API.",
      description:
        "Serverless proxy for Gemini AI integration.",
      image: "/Azure Function Gemini.png",
      tags: ["Python", "Azure Functions", "Serverless", "AI/ML", "Gemini API"],
      features: [
        "Gemini AI API integration",
        "Azure Functions deployment",
        "Serverless architecture",
        "Easy API abstraction",
        "Scalable and cost-effective",
      ],
      demoLink: "",
      githubLink: "https://github.com/MuhamedSaber1990/azure-function-gemini-facade",
      fullDescription:
        "An Azure Function written in Python that acts as a facade for Google's Gemini AI API. Provides a clean abstraction layer for integrating Gemini AI capabilities into applications. Demonstrates serverless computing and AI/ML integration skills.",
    },
    {
      id: 8,
      title: "Simon Game",
      shortDescription:
        "A classic Simon memory game built with JavaScript for practice and fun.",
      description:
        "Interactive memory game with jQuery for practicing front-end development.",
      image: "/Simon Game.png",
      tags: ["JavaScript", "jQuery", "HTML/CSS", "Game Development"],
      features: [
        "Classic Simon game mechanics",
        "Interactive UI",
        "Score tracking",
        "Sound effects",
        "Responsive design",
      ],
      demoLink: "",
      githubLink: "https://github.com/MuhamedSaber1990/Simon-Game",
      fullDescription:
        "A classic Simon memory game built with JavaScript and jQuery. This project was created for practice and demonstrates front-end development skills including DOM manipulation, event handling, and game logic implementation.",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <Card
                className={`group h-full cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  expandedProject === project.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() =>
                  setExpandedProject(
                    expandedProject === project.id ? null : project.id,
                  )
                }
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background/90 to-background/20 p-6 flex flex-col justify-end">
                      <h3 className="text-xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {project.shortDescription}
                      </p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 border-t"
                      >
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                              <Badge key={i} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Key Features:</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                              {project.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex gap-4 pt-2">
                            {project.githubLink && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  window.open(project.githubLink, "_blank");
                                }}
                              >
                                <Github className="h-4 w-4 mr-2" />
                                Code
                              </Button>
                            )}

                            {project.demoLink && (
                              <Button
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  window.open(project.demoLink, "_blank");
                                }}
                              >
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Demo
                              </Button>
                            )}

                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedProject(project);
                              }}
                            >
                              Learn More
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="p-4 text-center">
                    <ChevronDown
                      className={`w-6 h-6 mx-auto transition-transform duration-300 ${
                        expandedProject === project.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <Dialog
          open={!!selectedProject}
          onOpenChange={() => setSelectedProject(null)}
        >
          <DialogContent
            className="
    w-full
    max-w-[95vw]
    sm:max-w-2xl
    md:max-w-3xl
    lg:max-w-4xl
    xl:max-w-5xl
    2xl:max-w-6xl
    max-h-[90vh]
    overflow-y-auto
  "
          >
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription></DialogDescription>
              <div className="flex flex-wrap gap-2 mt-2 mb-4">
                {selectedProject.tags.map((tag: string, i: number) => (
                  <Badge key={i} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </DialogHeader>
            <div className="space-y-4">
              <Image
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                quality={100}
                width={600}
                height={400}
                className="w-full rounded-md object-fill aspect-video"
              />
              <p className="text-muted-foreground whitespace-pre-line">
                {selectedProject.fullDescription}
              </p>
              <div className="space-y-4">
                <h4 className="font-semibold">Key Features:</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {selectedProject.features.map(
                    (feature: string, i: number) => (
                      <li key={i}>{feature}</li>
                    ),
                  )}
                </ul>
              </div>
              <div className="flex justify-end gap-4 mt-4">
                {selectedProject.githubLink && (
                  <Button variant="outline" asChild>
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                )}

                {selectedProject.demoLink && (
                  <Button asChild>
                    <a
                      href={selectedProject.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
