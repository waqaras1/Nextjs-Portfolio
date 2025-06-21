"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  BiBuilding,
  BiLogoLinkedin,
  BiChevronRight,
  BiLogoGithub,
  BiLogoInstagram,
} from "react-icons/bi";
import { HiArrowDown } from "react-icons/hi";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    { href: "/about", label: "About", description: "Learn more about me" },
    { href: "/work", label: "Work", description: "View my projects" },
    { href: "/skills", label: "Skills", description: "My technical expertise" },
    { href: "/contact", label: "Contact", description: "Get in touch" },
  ];

  const socialLinks = [
    {
      href: "https://github.com/waqaras1",
      label: "Github",
      icon: BiLogoGithub,
      color: "hover:bg-gray-800/50",
    },
    {
      href: "https://linkedin.com/in/waqaras/",
      label: "LinkedIn",
      icon: BiLogoLinkedin,
      color: "hover:bg-blue-600/20",
    },
    {
      href: "https://instagram.com/waqarr.as",
      label: "Instagram",
      icon: BiLogoInstagram,
      color: "hover:bg-pink-600/20",
    },
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
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl space-y-8 p-6 sm:p-10">
        {/* Header */}
        <div 
          className="flex sm:flex-row sm:justify-between sm:items-center flex-col-reverse items-start gap-4 sm:gap-6"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="flex items-center gap-3 group">
            <div className="p-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 group-hover:bg-emerald-500/30 transition-colors">
              <BiBuilding className="w-4 h-4 text-emerald-400" />
            </div>
            <span className="text-gray-400 text-sm font-medium">Islamabad, Pakistan</span>
          </div>
          
          <Button
            variant="ghost"
            className="group hover:bg-emerald-500/20 duration-300 hover:text-emerald-400 rounded-full border border-emerald-500/30"
          >
            <div className="relative flex text-sm gap-2 items-center">
              <div className="relative flex items-center justify-center h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </div>
              <span className="font-medium">Available For Work</span>
            </div>
          </Button>
        </div>

        {/* Intro Section */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Waqar Ahmed
            </h1>
            <h2 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500">
              Full Stack Web Developer
            </h2>
          </div>
          
          <p className="text-pretty tracking-tight text-neutral-300 leading-relaxed">
            Hi, I&apos;m Waqar — a Computer Science undergrad, MERN Stack developer, and freelancer. 
            I specialize in building modern, responsive web applications with a strong focus on 
            performance, clean design, and user experience. Currently exploring AI-powered solutions 
            and always open to exciting collaborations.
          </p>
          
          <div className="flex items-center gap-2 text-sm">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500 font-semibold opacity-90 hover:opacity-100 transition-opacity"
            >
              Contact Me
            </Link>
            <span className="text-gray-500">for freelance work anytime</span>
          </div>
        </div>

        {/* Menu Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-bold text-emerald-400">Navigation</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/50 to-transparent"></div>
          </div>
          
          <div className="grid gap-3">
            {menuItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative overflow-hidden rounded-lg border border-gray-700/40 bg-black/30 hover:bg-zinc-800/40 transition-all duration-300 hover:border-emerald-500/30"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="p-4 flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="font-medium text-white group-hover:text-emerald-400 transition-colors">
                      {item.label}
                    </span>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                  <BiChevronRight className="text-2xl text-gray-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}
          </div>
        </div>

        {/* Social Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-sky-400 to-blue-400">
              Connect With Me
            </h3>
            <HiArrowDown className="text-2xl text-sky-400 animate-bounce" />
          </div>

          <div className="grid gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group w-full p-4 rounded-lg border border-gray-700/40 bg-black/30 text-gray-300 hover:text-white transition-all duration-300 flex items-center justify-center gap-3 ${social.color}`}
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <social.icon className="w-5 h-5" />
                <span className="font-medium">{social.label}</span>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                  <BiChevronRight className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-gray-700/30">
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-400">4+</div>
            <div className="text-xs text-gray-400">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-sky-400">2+</div>
            <div className="text-xs text-gray-400">Years Exp</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">10+</div>
            <div className="text-xs text-gray-400">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">100%</div>
            <div className="text-xs text-gray-400">Satisfaction</div>
          </div>
        </div>
      </Card>
    </div>
  );
}
