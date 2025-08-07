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
        <Navigation title="Work & Projects" showBack={true} />

        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-sky-300">
            My Projects
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Here are some of my recent full-stack projects that showcase my expertise in modern web development, 
            from interactive frontend applications to robust backend systems and everything in between.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <MotionDiv key={`${project.id}-${index}`} delay={index * 0.1}>
              <Card 
                variant="elevated"
                className="group overflow-hidden hover:scale-[1.02] transition-all duration-500"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} - Screenshot showcasing the project interface and design`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 2}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    quality={85}
                    loading={index < 2 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Project overlay with quick actions */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-3">
                      {project.liveDemo && (
                        <Button
                          asChild
                          size="sm"
                          className="bg-emerald-500/90 text-white hover:bg-emerald-500 backdrop-blur-sm"
                        >
                          <a 
                            href={project.liveDemo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label={`View live demo of ${project.title}`}
                          >
                            <CgExternal className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {project.github && (
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="bg-black/50 text-white border-white/20 hover:bg-black/70 backdrop-blur-sm"
                        >
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label={`View source code for ${project.title} on GitHub`}
                          >
                            <BiLogoGithub className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    {project.liveDemo && (
                      <Button
                        asChild
                        size="sm"
                        className="flex-1 bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 border border-emerald-500/30"
                      >
                        <a 
                          href={project.liveDemo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <CgExternal className="w-4 h-4" />
                          View Live
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800/50"
                      >
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <BiLogoGithub className="w-4 h-4" />
                          View Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </MotionDiv>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center space-y-4 pt-8 border-t border-gray-700/30">
          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-sky-300">
            Interested in working together?
          </h3>
          <p className="text-gray-400 max-w-md mx-auto">
            I&apos;m always open to discussing new opportunities and exciting projects.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 border border-emerald-500/30"
          >
            <Link href="/contact" className="inline-flex items-center gap-2">
              Get In Touch
              <BiChevronRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default PageView;
