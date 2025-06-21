"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import {
  BiBuilding,
  BiLogoLinkedin,
  BiChevronRight,
  BiLogoGithub,
  BiLogoInstagram,
  BiMapPin,
  BiPhone,
  BiCheckCircle,
  BiErrorCircle,
  BiCalendar,
} from "react-icons/bi";
import { MdMail, MdSchool } from "react-icons/md";
import { HiArrowDown } from "react-icons/hi";
import projectsData from "./data/projects.json";
import skillsData from "./data/skills.json";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");
  const [responseType, setResponseType] = useState<"success" | "error" | "">("");
  const [animatedSkills, setAnimatedSkills] = useState<{[key: string]: number}>({});

  useEffect(() => {
    setMounted(true);
    
    // Animate skill bars
    const timer = setTimeout(() => {
      const skillLevels: {[key: string]: number} = {};
      skillsData.categories.forEach(category => {
        category.skills.forEach(skill => {
          skillLevels[skill.name] = 0;
        });
      });
      setAnimatedSkills(skillLevels);
      
      skillsData.categories.forEach(category => {
        category.skills.forEach((skill, index) => {
          setTimeout(() => {
            setAnimatedSkills(prev => ({
              ...prev,
              [skill.name]: skill.level
            }));
          }, index * 100);
        });
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "work", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
    
    if (errors[id]) {
      setErrors({ ...errors, [id]: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    setResponseMsg("");
    setResponseType("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      
      if (data.success) {
        setResponseType("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setResponseType("error");
      }
      
      setResponseMsg(data.message);
    } catch (error) {
      setResponseType("error");
      setResponseMsg("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  const getSkillColor = (level: number) => {
    if (level >= 90) return "from-emerald-400 to-emerald-600";
    if (level >= 80) return "from-sky-400 to-sky-600";
    if (level >= 70) return "from-blue-400 to-blue-600";
    return "from-gray-400 to-gray-600";
  };

  const getSkillLevel = (skillName: string) => {
    return animatedSkills[skillName] || 0;
  };

  const contactInfo = [
    {
      icon: MdMail,
      title: "Email",
      value: "waqaras.dev@gmail.com",
      href: "mailto:waqaras.dev@gmail.com",
      color: "text-emerald-400"
    },
    {
      icon: BiPhone,
      title: "Phone",
      value: "+92 326 6704738",
      href: "tel:+923266704738",
      color: "text-sky-400"
    },
    {
      icon: BiMapPin,
      title: "Location",
      value: "Islamabad, Pakistan",
      href: "#",
      color: "text-blue-400"
    }
  ];

  const experiences = [
    {
      title: "Freelance Full Stack Developer",
      company: "Fiverr",
      period: "2023 - Present",
      location: "Remote",
      skills: ["React", "Next.js", "Node.js", "AI Integration", "Client Management"]
    },
    {
      title: "Web Development Intern",
      company: "CodeClause",
      period: "2023",
      location: "Remote",
      skills: ["React", "JavaScript", "HTML/CSS", "API Integration", "Responsive Design"]
    }
  ];

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">
          <div className="w-64 h-96 bg-black/20 rounded-xl border border-gray-700/50"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-sky-300">
                Waqar Ahmed
              </h1>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "skills", label: "Skills" },
                { id: "work", label: "Work" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-emerald-400"
                      : "text-gray-300 hover:text-emerald-400"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-emerald-500 hover:bg-emerald-600 text-black font-medium"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-2 rounded-full bg-emerald-500/20 border border-emerald-500/30">
                <BiBuilding className="w-4 h-4 text-emerald-400" />
              </div>
              <span className="text-gray-400 text-sm font-medium">Islamabad, Pakistan</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
              Waqar Ahmed
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500">
              Full Stack Web Developer
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Hi, I'm Waqar — a Computer Science undergraduate, MERN Stack developer, and freelancer. 
              I specialize in building modern, responsive web applications with a strong focus on 
              performance, clean design, and user experience.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("work")}
              className="bg-emerald-500 hover:bg-emerald-600 text-black font-medium"
            >
              View My Work
              <BiChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-gray-700/50 text-gray-300 hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:text-emerald-400"
            >
              Get In Touch
              <BiChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => scrollToSection("about")}
              className="animate-bounce p-2 rounded-full bg-emerald-500/20 border border-emerald-500/30"
            >
              <HiArrowDown className="w-6 h-6 text-emerald-400" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500 mb-6">
              About Me
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              I'm a passionate Computer Science undergraduate and Full Stack Web Developer with a focus on the MERN Stack. 
              I enjoy building fast, scalable web applications that prioritize clean code, modern design, and great user experience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education */}
            <Card variant="glass" className="p-8 space-y-6">
              <div className="flex items-center gap-3">
                <h3 className="text-2xl font-bold text-white">Education</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/50 to-transparent"></div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg border border-gray-700/30 bg-black/20">
                <div className="p-3 rounded-full bg-emerald-500/20 border border-emerald-500/30">
                  <MdSchool className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <h4 className="text-lg font-semibold text-white">BS in Computer Science</h4>
                    <Badge variant="outline" size="sm">Current</Badge>
                  </div>
                  <p className="text-emerald-400 font-medium">Shaheed Zulfikar Ali Bhutto Institute of Science and Technology (SZABIST University)</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <BiCalendar className="w-4 h-4" />
                      2022 - 2026
                    </div>
                    <div className="flex items-center gap-1">
                      <BiMapPin className="w-4 h-4" />
                      Islamabad, Pakistan
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Experience */}
            <Card variant="glass" className="p-8 space-y-6">
              <div className="flex items-center gap-3">
                <h3 className="text-2xl font-bold text-white">Experience</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/50 to-transparent"></div>
              </div>
              
              <div className="space-y-4">
                {experiences.map((experience, index) => (
                  <div key={experience.title} className="space-y-3 p-4 rounded-lg border border-gray-700/30 bg-black/20">
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-white">{experience.title}</h4>
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
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center py-20 bg-black/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500 mb-6">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              My technical skills span across frontend, backend, and various tools & technologies. 
              Here's a breakdown of my proficiency levels in different areas.
            </p>
          </div>

          <div className="space-y-12">
            {skillsData.categories.map((category, categoryIndex) => (
              <Card key={category.name} variant="glass" className="p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/50 to-transparent"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIndex) => {
                    const currentLevel = getSkillLevel(skill.name);
                    const colorClass = getSkillColor(skill.level);
                    
                    return (
                      <div 
                        key={skill.name} 
                        className="space-y-3 p-4 rounded-lg border border-gray-700/30 bg-black/20"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-white">{skill.name}</h4>
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
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Skills */}
          <Card variant="glass" className="p-8 mt-12">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-2xl font-bold text-white">Additional Skills</h3>
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
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="min-h-screen flex items-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills in full-stack development, 
              modern web technologies, and creative problem-solving.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projectsData.projects.map((project, index) => (
              <Card 
                key={`${project.id}-${index}`} 
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
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-3">
                      <Button 
                        size="sm" 
                        className="bg-emerald-500 hover:bg-emerald-600 text-black font-medium"
                        asChild
                      >
                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                          Live Demo
                        </a>
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-white/30 text-white hover:bg-white/10"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
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
                      className="flex-1 border-gray-700/50 text-gray-300 hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:text-emerald-400 transition-all duration-300"
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
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center py-20 bg-black/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500 mb-6">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. 
              Feel free to reach out through any of the following channels.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white">Contact Information</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div 
                    key={info.title}
                    className="flex items-center gap-4 p-4 rounded-lg border border-gray-700/30 bg-black/20 hover:bg-black/40 transition-all duration-300 group"
                  >
                    <div className={`p-3 rounded-full bg-black/40 border border-gray-700/30 group-hover:border-emerald-500/30 transition-colors ${info.color}`}>
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-white">{info.title}</h4>
                      <a 
                        href={info.href} 
                        className="text-gray-400 hover:text-emerald-400 transition-colors"
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Follow Me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/waqaras1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-black/40 border border-gray-700/30 hover:border-emerald-500/30 hover:bg-emerald-500/20 transition-all duration-300"
                  >
                    <BiLogoGithub className="w-5 h-5 text-gray-300 hover:text-emerald-400" />
                  </a>
                  <a
                    href="https://linkedin.com/in/waqaras/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-black/40 border border-gray-700/30 hover:border-emerald-500/30 hover:bg-emerald-500/20 transition-all duration-300"
                  >
                    <BiLogoLinkedin className="w-5 h-5 text-gray-300 hover:text-emerald-400" />
                  </a>
                  <a
                    href="https://instagram.com/waqarr.as"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-black/40 border border-gray-700/30 hover:border-emerald-500/30 hover:bg-emerald-500/20 transition-all duration-300"
                  >
                    <BiLogoInstagram className="w-5 h-5 text-gray-300 hover:text-emerald-400" />
                  </a>
                </div>
              </div>

              {/* Quick Stats */}
              <Card variant="glass" className="p-6 space-y-4">
                <h4 className="text-lg font-semibold text-white">Quick Facts</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400">24h</div>
                    <div className="text-xs text-gray-400">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-sky-400">100%</div>
                    <div className="text-xs text-gray-400">Client Satisfaction</div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  id="name"
                  label="Name"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                  error={errors.name}
                  required
                />

                <Input
                  id="email"
                  label="Email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                  required
                />

                <Textarea
                  id="message"
                  label="Message"
                  placeholder="Tell me about your project or how I can help..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  error={errors.message}
                  required
                />

                <Button 
                  type="submit" 
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-medium h-12"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                      Sending Message...
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </Button>

                {responseMsg && (
                  <div className={`flex items-center gap-2 p-3 rounded-lg ${
                    responseType === "success" 
                      ? "bg-emerald-500/20 border border-emerald-500/30 text-emerald-400" 
                      : "bg-red-500/20 border border-red-500/30 text-red-400"
                  }`}>
                    {responseType === "success" ? (
                      <BiCheckCircle className="w-5 h-5" />
                    ) : (
                      <BiErrorCircle className="w-5 h-5" />
                    )}
                    <span className="text-sm">{responseMsg}</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-700/30 bg-black/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Waqar Ahmed. Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
