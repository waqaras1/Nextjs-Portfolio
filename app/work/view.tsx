"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { BiLogoGithub } from "react-icons/bi";
import { CgExternal } from "react-icons/cg";
import { BiChevronRight } from "react-icons/bi";
import projectsData from "../data/projects.json";
import { useEffect, useState } from "react";
import { MotionDiv } from "@/components/motion-div";

const PageView = () => {
  const { projects } = projectsData;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse space-y-4">
          <div className="w-64 h-8 bg-black/20 rounded"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-full h-80 bg-black/20 rounded-xl border border-gray-700/50"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-6xl space-y-8 p-6 sm:p-10">
        <Navigation title="My Work" showBack={true} />
        
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-sky-300">
            Featured Projects
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            modern web technologies, and creative problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <MotionDiv key={`${project.id}-${index}`} delay={index * 0.1}>
              <Card 
                variant="elevated"
                className="group overflow-hidden hover:scale-[1.02] transition-all duration-500"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Project overlay with quick actions */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-3">
                      <Button 
                        size="sm" 
                        className="bg-emerald-500 hover:bg-emerald-600 text-black font-medium"
                        asChild
                      >
                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                          <CgExternal className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-emerald-500/60 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-500/80"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <BiLogoGithub className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" size="sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button 
                      variant="outline" 
                      className="flex-1 border-emerald-500/80 text-emerald-400 bg-transparent hover:bg-emerald-500/20 hover:border-emerald-500 hover:text-emerald-300 hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                        <BiLogoGithub className="h-4 w-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                    <Button 
                      className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-black font-medium transition-all duration-300"
                      asChild
                    >
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                        <CgExternal className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </MotionDiv>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-4 pt-8 border-t border-gray-700/30">
          <h2 className="text-2xl font-bold text-white">
            Interested in working together?
          </h2>
          <p className="text-gray-400">
            Let&apos;s discuss your next project and bring your ideas to life.
          </p>
          <Button 
            size="lg" 
            className="bg-emerald-500 hover:bg-emerald-600 text-black font-medium"
            asChild
          >
            <Link href="/contact" className="flex items-center">
              Get In Touch
              <BiChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default PageView;
