"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";
import skills from "../data/skills.json";
import { useEffect, useState } from "react";

const Page = () => {
  const [mounted, setMounted] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<{[key: string]: number}>({});

  useEffect(() => {
    setMounted(true);
    
    // Animate skill bars
    const timer = setTimeout(() => {
      const skillLevels: {[key: string]: number} = {};
      skills.categories.forEach(category => {
        category.skills.forEach(skill => {
          skillLevels[skill.name] = 0;
        });
      });
      setAnimatedSkills(skillLevels);
      
      // Animate each skill bar
      skills.categories.forEach(category => {
        category.skills.forEach((skill, index) => {
          setTimeout(() => {
            setAnimatedSkills(prev => ({
              ...prev,
              [skill.name]: skill.level
            }));
          }, index * 100);
        });
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse space-y-4">
          <div className="w-64 h-8 bg-black/20 rounded"></div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-full h-32 bg-black/20 rounded-xl border border-gray-700/50"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const getSkillColor = (level: number) => {
    if (level >= 90) return "from-emerald-400 to-emerald-600";
    if (level >= 80) return "from-sky-400 to-sky-600";
    if (level >= 70) return "from-blue-400 to-blue-600";
    return "from-gray-400 to-gray-600";
  };

  const getSkillLevel = (skillName: string) => {
    return animatedSkills[skillName] || 0;
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl space-y-8 p-6 sm:p-10">
        <Navigation title="Technical Skills" />
        
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500">
            Technical Expertise
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My technical skills span across frontend, backend, and various tools & technologies. 
            Here's a breakdown of my proficiency levels in different areas.
          </p>
        </div>

        <div className="space-y-8">
          {skills.categories.map((category, categoryIndex) => (
            <Card key={category.name} variant="glass" className="p-6 space-y-6">
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-bold text-white">{category.name}</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/50 to-transparent"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => {
                  const currentLevel = getSkillLevel(skill.name);
                  const colorClass = getSkillColor(skill.level);
                  
                  return (
                    <div 
                      key={skill.name} 
                      className="space-y-3 p-4 rounded-lg border border-gray-700/30 bg-black/20 hover:bg-black/40 transition-all duration-300"
                      style={{ animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms` }}
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-white">{skill.name}</h3>
                        <Badge variant="outline" size="sm">
                          {currentLevel}%
                        </Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                          <div
                            className={`h-3 rounded-full bg-gradient-to-r ${colorClass} transition-all duration-1000 ease-out`}
                            style={{ width: `${currentLevel}%` }}
                          ></div>
                        </div>
                        
                        <div className="flex justify-between text-xs text-gray-400">
                          <span>Beginner</span>
                          <span>Intermediate</span>
                          <span>Advanced</span>
                          <span>Expert</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills Section */}
        <Card variant="glass" className="p-6 space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-white">Additional Skills</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/50 to-transparent"></div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {[
              "REST APIs", "GraphQL", "JWT", "OAuth", "Docker", "AWS", 
              "Responsive Design", "Progressive Web Apps", "SEO", "Testing",
              "Agile/Scrum", "UI/UX Design", "Performance Optimization"
            ].map((skill, index) => (
              <Badge 
                key={skill} 
                variant="gradient" 
                size="md"
                className="cursor-default"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </Card>

        {/* Call to Action */}
        <div className="text-center space-y-4 pt-8 border-t border-gray-700/30">
          <h2 className="text-2xl font-bold text-white">
            Ready to collaborate on your next project?
          </h2>
          <p className="text-gray-400">
            Let's discuss how my skills can help bring your vision to life.
          </p>
          <Button 
            size="lg" 
            className="bg-emerald-500 hover:bg-emerald-600 text-black font-medium"
            asChild
          >
            <Link href="/contact" className="flex items-center">
              Start a Project
              <BiChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Page;
