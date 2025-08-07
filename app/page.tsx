"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import dynamic from 'next/dynamic';
import { useEffect, useState, Suspense } from "react";

// Lazy load icons to reduce initial bundle size
const BiBuilding = dynamic(() => import("react-icons/bi").then(mod => ({ default: mod.BiBuilding })), { ssr: false });
const BiLogoLinkedin = dynamic(() => import("react-icons/bi").then(mod => ({ default: mod.BiLogoLinkedin })), { ssr: false });
const BiChevronRight = dynamic(() => import("react-icons/bi").then(mod => ({ default: mod.BiChevronRight })), { ssr: false });
const BiLogoGithub = dynamic(() => import("react-icons/bi").then(mod => ({ default: mod.BiLogoGithub })), { ssr: false });
const BiLogoInstagram = dynamic(() => import("react-icons/bi").then(mod => ({ default: mod.BiLogoInstagram })), { ssr: false });
const BiEnvelope = dynamic(() => import("react-icons/bi").then(mod => ({ default: mod.BiEnvelope })), { ssr: false });
const HiArrowDown = dynamic(() => import("react-icons/hi").then(mod => ({ default: mod.HiArrowDown })), { ssr: false });

// Icon fallback component
const IconFallback = () => <div className="w-4 h-4 bg-gray-400 rounded animate-pulse" />;

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    { href: "/about", label: "About", description: "Learn more about me", prefetch: true },
    { href: "/work", label: "Work", description: "View my projects", prefetch: true },
    { href: "/skills", label: "Skills", description: "My technical expertise", prefetch: false },
    { href: "/contact", label: "Contact", description: "Get in touch", prefetch: true },
  ];

  const socialLinks = [
    {
      href: "https://github.com/waqaras1",
      label: "Github",
      icon: BiLogoGithub,
      color: "hover:bg-gray-800/50",
      external: true,
    },
    {
      href: "https://linkedin.com/in/waqaras/",
      label: "LinkedIn",
      icon: BiLogoLinkedin,
      color: "hover:bg-blue-600/20",
      external: true,
    },
    {
      href: "https://instagram.com/waqarr.as",
      label: "Instagram",
      icon: BiLogoInstagram,
      color: "hover:bg-pink-600/20",
      external: true,
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
              <Suspense fallback={<IconFallback />}>
                <BiBuilding className="w-4 h-4 text-emerald-400" />
              </Suspense>
            </div>
            <span className="text-gray-400 text-sm font-medium">Karachi, Pakistan</span>
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
              Full-Stack Software Engineer
            </h2>
          </div>
          
          <Card variant="glass" className="p-6">
            <p className="text-pretty tracking-tight text-gray-300 leading-relaxed">
              Hi, I&apos;m Waqar — a Full-Stack Software Engineer at Aykays specializing in building modern, scalable web applications. I excel in both frontend and backend development, creating seamless user experiences with React.js, Next.js, and TypeScript, while architecting robust backend systems using Node.js, Express.js, and PostgreSQL. Based in Karachi, Pakistan, I&apos;m passionate about crafting end-to-end solutions that solve real-world problems with clean code and exceptional performance.
            </p>
          </Card>
          
          <div className="pt-4">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full group border-emerald-500/30 bg-emerald-500/10 text-gray-300 hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:text-white transition-all"
            >
              <Link href="/contact" className="inline-flex items-center justify-center gap-2">
                <Suspense fallback={<IconFallback />}>
                  <BiEnvelope className="h-5 w-5 text-emerald-400 transition-transform duration-300 group-hover:scale-110" />
                </Suspense>
                <span>Have a project in mind? Let&apos;s talk!</span>
              </Link>
            </Button>
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
                prefetch={item.prefetch}
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
                  <Suspense fallback={<IconFallback />}>
                    <BiChevronRight className="text-2xl text-gray-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </Suspense>
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
            <Suspense fallback={<IconFallback />}>
              <HiArrowDown className="text-2xl text-sky-400 animate-bounce" />
            </Suspense>
          </div>

          <div className="grid gap-3">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.href}
                  href={social.href}
                  target={social.external ? "_blank" : undefined}
                  rel={social.external ? "noopener noreferrer" : undefined}
                  className={`group w-full p-4 rounded-lg border border-gray-700/40 bg-black/30 text-gray-300 hover:text-white transition-all duration-300 flex items-center justify-center gap-3 ${social.color}`}
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <Suspense fallback={<IconFallback />}>
                    <IconComponent className="w-5 h-5" />
                  </Suspense>
                  <span className="font-medium">{social.label}</span>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <Suspense fallback={<IconFallback />}>
                      <BiChevronRight className="w-4 h-4" />
                    </Suspense>
                  </div>
                </a>
              );
            })}
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
