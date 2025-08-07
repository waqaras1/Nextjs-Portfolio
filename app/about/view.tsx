"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { BiChevronRight, BiCalendar, BiMapPin } from "react-icons/bi";
import { MdSchool } from "react-icons/md";
import { useEffect, useState } from "react";
import { MotionDiv } from "@/components/motion-div";

const PageView = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const experiences = [
    {
      title: "Full-Stack Software Engineer",
      company: "Aykays",
      period: "June 2025 - Present",
      location: "Karachi, Pakistan",
      description: [
        "Designing and building scalable, secure, and high-performance full-stack applications using React.js, Next.js, TypeScript, Node.js, Express.js, and PostgreSQL",
        "Developing responsive user interfaces and robust backend APIs with microservices architecture for enterprise applications",
        "Collaborating with cross-functional teams to deliver end-to-end software solutions with exceptional user experience",
        "Implementing database optimization, security best practices, cloud-based deployments, and performance optimization across the stack"
      ],
      skills: ["React.js", "Next.js", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "API Development", "Microservices", "Full-Stack Development"]
    },
    {
      title: "Freelance Full-Stack Developer",
      company: "Fiverr",
      period: "2023 - Present",
      location: "Remote",
      description: [
        "Designed and deployed multiple full-stack web applications, integrating custom AI chatbots and modern UI/UX patterns",
        "Built responsive frontends with React.js and Next.js, and robust backends with Node.js and Express.js",
        "Managed projects from concept to completion, ensuring on-time delivery and exceeding client expectations",
        "Specialized in modern web development stack with focus on performance, accessibility, and user experience"
      ],
      skills: ["React", "Next.js", "Node.js", "TypeScript", "AI Integration", "UI/UX Design", "Client Management"]
    },
    {
      title: "Web Development Intern",
      company: "CodeClause",
      period: "2023",
      location: "Remote",
      description: [
        "Developed and deployed multiple frontend web projects using React, JavaScript, HTML, and CSS with modern design principles",
        "Integrated third-party APIs and built responsive user interfaces ensuring optimal performance across devices",
        "Gained hands-on experience with modern frontend frameworks and best practices for web development",
        "Collaborated with team members to deliver high-quality, user-centric web applications"
      ],
      skills: ["React", "JavaScript", "HTML/CSS", "API Integration", "Responsive Design", "UI/UX"]
    }
  ];

  const education = {
    degree: "BS in Computer Science",
    institution: "Shaheed Zulfikar Ali Bhutto Institute of Science and Technology (SZABIST University)",
    period: "2022 - 2026",
    location: "Pakistan"
  };

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

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl space-y-8 p-6 sm:p-10">
        <Navigation title="" showBack={true} />
        
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500">
            About Me
          </h1>
        </div>

        {/* Introduction */}
        <MotionDiv>
          <Card variant="glass" className="p-6 space-y-4">
            <h2 className="text-2xl font-bold text-white">Who I Am</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I&apos;m Waqar Ahmed — a Full-Stack Software Engineer at Aykays based in Karachi, Pakistan. 
                I specialize in building modern, scalable web applications that deliver exceptional user experiences and robust backend systems.
              </p>
              <p>
                Currently working as a Full-Stack Software Engineer at Aykays, where I focus on developing end-to-end solutions using React.js, Next.js, TypeScript for the frontend, and Node.js, Express.js, PostgreSQL for the backend. I excel in creating seamless user interfaces, architecting scalable APIs, and implementing modern development practices to deliver high-performance applications.
              </p>
            </div>
          </Card>
        </MotionDiv>

        {/* Education */}
        <MotionDiv delay={0.1}>
          <Card variant="glass" className="p-6 space-y-6">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold text-white">Education</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/50 to-transparent"></div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg border border-gray-700/30 bg-black/20">
                <div className="p-3 rounded-full bg-emerald-500/20 border border-emerald-500/30">
                  <MdSchool className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-white">{education.degree}</h3>
                    <Badge variant="outline" size="sm">Current</Badge>
                  </div>
                  <p className="text-emerald-400 font-medium">{education.institution}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <BiCalendar className="w-4 h-4" />
                      {education.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <BiMapPin className="w-4 h-4" />
                      {education.location}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </Card>
        </MotionDiv>

        {/* Professional Experience */}
        <MotionDiv delay={0.2}>
          <Card variant="glass" className="p-6 space-y-6">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold text-white">Professional Experience</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/50 to-transparent"></div>
            </div>
            
            <div className="space-y-6">
              {experiences.map((experience, index) => (
                <div 
                  key={experience.title}
                  className="space-y-4 p-4 rounded-lg border border-gray-700/30 bg-black/20 hover:bg-black/40 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-white">{experience.title}</h3>
                      <p className="text-emerald-400 font-medium">{experience.company}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <BiCalendar className="w-4 h-4" />
                          {experience.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <BiMapPin className="w-4 h-4" />
                          {experience.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium text-gray-300">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {experience.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" size="sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </MotionDiv>

        {/* Skills Overview */}
        <MotionDiv delay={0.3}>
          <Card variant="glass" className="p-6 space-y-6">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold text-white">Technical Expertise</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/50 to-transparent"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg border border-gray-700/30 bg-black/20">
                <div className="text-2xl font-bold text-emerald-400">Frontend</div>
                <p className="text-sm text-gray-400 mt-1">React.js, Next.js, TypeScript, Tailwind CSS</p>
              </div>
              <div className="text-center p-4 rounded-lg border border-gray-700/30 bg-black/20">
                <div className="text-2xl font-bold text-sky-400">Backend</div>
                <p className="text-sm text-gray-400 mt-1">Node.js, Express.js, PostgreSQL, MongoDB</p>
              </div>
              <div className="text-center p-4 rounded-lg border border-gray-700/30 bg-black/20">
                <div className="text-2xl font-bold text-blue-400">Full-Stack</div>
                <p className="text-sm text-gray-400 mt-1">API Development, Microservices, DevOps</p>
              </div>
            </div>
          </Card>
        </MotionDiv>

        {/* Call to Action */}
        <div className="text-center space-y-4 pt-8 border-t border-gray-700/30">
          <h2 className="text-2xl font-bold text-white">
            Ready to work together?
          </h2>
          <p className="text-gray-400">
            Let&apos;s discuss your project and see how I can help bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            <Button 
              size="lg" 
              variant="outline"
              className="border-emerald-500/50 text-emerald-400 bg-emerald-500/20 hover:bg-emerald-500/30 hover:border-emerald-500/70 transition-all duration-300"
              asChild
            >
              <Link href="/work" className="flex items-center">
                View My Work
                <BiChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PageView;
