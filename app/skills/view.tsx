"use client";

import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/navigation";
import skillsData from "../data/skills.json";
import { useEffect, useState } from "react";
import { MotionDiv } from "@/components/motion-div";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiJavascript, 
  SiHtml5, 
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGithub,
  SiVercel,
  SiDocker,
  SiFirebase,
  SiGitlab,
  SiIcloud,
  SiCoder,
  SiSemver,
  SiPrisma
} from "react-icons/si";
import { FaServer, FaDatabase, FaLayerGroup, FaProjectDiagram } from "react-icons/fa";
import { IconType } from "react-icons";

const PageView = () => {
  const { skills } = skillsData;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Icon mapping
  const iconMap: { [key: string]: IconType } = {
    react: SiReact,
    nextjs: SiNextdotjs,
    typescript: SiTypescript,
    tailwind: SiTailwindcss,
    javascript: SiJavascript,
    html5: SiHtml5,
    css3: SiCss3,
    nodejs: SiNodedotjs,
    express: SiExpress,
    mongodb: SiMongodb,
    postgresql: SiPostgresql,
    github: SiGithub,
    vercel: SiVercel,
    docker: SiDocker,
    firebase: SiFirebase,
    cicd: SiGitlab,
    aws: SiIcloud,
    api: SiCoder,
    microservices: SiSemver,
    prisma: SiPrisma,
    saas: FaLayerGroup,
    system: FaProjectDiagram,
    database: FaDatabase
  };

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse space-y-4 w-full max-w-4xl mx-auto">
          <div className="w-64 h-8 bg-black/20 rounded mx-auto"></div>
          <div className="w-full h-16 bg-black/20 rounded"></div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-full h-40 bg-black/20 rounded-xl border border-gray-700/50"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl space-y-8 p-6 sm:p-10">
        <Navigation title="" showBack={true} />
        
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-sky-300">
            My Technical Skills
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I&apos;m proficient in a comprehensive range of modern web technologies, from frontend frameworks and UI/UX design to backend systems, databases, and DevOps practices. 
            Here&apos;s a detailed breakdown of my full-stack expertise.
          </p>
        </div>

        <div className="space-y-10">
          {skills.map((category, categoryIndex) => (
            <MotionDiv key={category.category} delay={categoryIndex * 0.15}>
              <Card variant="glass" className="p-6 space-y-6">
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-sky-400">
                    {category.category}
                  </h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/50 to-transparent"></div>
                </div>
                
                <div className="space-y-4">
                  {category.technologies.map((tech, techIndex) => {
                    const IconComponent = iconMap[tech.icon];
                    return (
                      <MotionDiv key={tech.name} delay={categoryIndex * 0.15 + techIndex * 0.05}>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className={`text-2xl transition-colors ${tech.color || 'text-gray-300'}`}>
                                {IconComponent ? <IconComponent /> : <div className="w-6 h-6 bg-gray-600 rounded"></div>}
                              </div>
                              <div>
                                <p className="font-medium text-white">{tech.name}</p>
                                <p className="text-xs text-gray-400">{tech.level}</p>
                              </div>
                            </div>
                            <span className="text-sm font-semibold text-emerald-400">{tech.proficiency}%</span>
                          </div>
                          <div className="w-full bg-gray-800/50 rounded-full h-2 overflow-hidden">
                            <div 
                              className={`h-full rounded-full transition-all duration-1000 ease-out bg-gradient-to-r from-emerald-500 to-sky-500`}
                              style={{ 
                                width: `${tech.proficiency}%`,
                                animationDelay: `${categoryIndex * 150 + techIndex * 50}ms`
                              }}
                            ></div>
                          </div>
                        </div>
                      </MotionDiv>
                    );
                  })}
                </div>
              </Card>
            </MotionDiv>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-4 pt-8 border-t border-gray-700/30">
          <h2 className="text-2xl font-bold text-white">
            Have a project in mind?
          </h2>
          <p className="text-gray-400">
            Let&apos;s build something amazing together.
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
