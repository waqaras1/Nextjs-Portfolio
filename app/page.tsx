"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import dynamic from 'next/dynamic';
import { useEffect, useState, Suspense } from "react";
import { CTASection } from "@/components/cta-section";
import { ViewCounter } from "@/components/view-counter";

// Lazy load icons to reduce initial bundle size
const BiBuilding = dynamic(() => import("react-icons/bi").then(mod => ({ default: mod.BiBuilding })), { ssr: false });
const BiLogoLinkedin = dynamic(() => import("react-icons/bi").then(mod => ({ default: mod.BiLogoLinkedin })), { ssr: false });
const BiChevronRight = dynamic(() => import("react-icons/bi").then(mod => ({ default: mod.BiChevronRight })), { ssr: false });
const BiLogoGithub = dynamic(() => import("react-icons/bi").then(mod => ({ default: mod.BiLogoGithub })), { ssr: false });
const BiLogoInstagram = dynamic(() => import("react-icons/bi").then(mod => ({ default: mod.BiLogoInstagram })), { ssr: false });
const BiEnvelope = dynamic(() => import("react-icons/bi").then(mod => ({ default: mod.BiEnvelope })), { ssr: false });

// Tech stack and service icons
const SiReact = dynamic(() => import("react-icons/si").then(mod => ({ default: mod.SiReact })), { ssr: false });
const SiNextdotjs = dynamic(() => import("react-icons/si").then(mod => ({ default: mod.SiNextdotjs })), { ssr: false });
const SiTypescript = dynamic(() => import("react-icons/si").then(mod => ({ default: mod.SiTypescript })), { ssr: false });
const SiNodedotjs = dynamic(() => import("react-icons/si").then(mod => ({ default: mod.SiNodedotjs })), { ssr: false });
const SiPostgresql = dynamic(() => import("react-icons/si").then(mod => ({ default: mod.SiPostgresql })), { ssr: false });
const SiTailwindcss = dynamic(() => import("react-icons/si").then(mod => ({ default: mod.SiTailwindcss })), { ssr: false });
const SiExpress = dynamic(() => import("react-icons/si").then(mod => ({ default: mod.SiExpress })), { ssr: false });
const SiMongodb = dynamic(() => import("react-icons/si").then(mod => ({ default: mod.SiMongodb })), { ssr: false });
const SiFiverr = dynamic(() => import("react-icons/si").then(mod => ({ default: mod.SiFiverr })), { ssr: false });
const SiUpwork = dynamic(() => import("react-icons/si").then(mod => ({ default: mod.SiUpwork })), { ssr: false });
const HiCube = dynamic(() => import("react-icons/hi").then(mod => ({ default: mod.HiCube })), { ssr: false });
const HiCode = dynamic(() => import("react-icons/hi").then(mod => ({ default: mod.HiCode })), { ssr: false });
const HiColorSwatch = dynamic(() => import("react-icons/hi").then(mod => ({ default: mod.HiColorSwatch })), { ssr: false });
const HiLightningBolt = dynamic(() => import("react-icons/hi").then(mod => ({ default: mod.HiLightningBolt })), { ssr: false });
const HiPhone = dynamic(() => import("react-icons/hi").then(mod => ({ default: mod.HiPhone })), { ssr: false });
const HiMail = dynamic(() => import("react-icons/hi").then(mod => ({ default: mod.HiMail })), { ssr: false });
const HiStar = dynamic(() => import("react-icons/hi").then(mod => ({ default: mod.HiStar })), { ssr: false });
const HiClock = dynamic(() => import("react-icons/hi").then(mod => ({ default: mod.HiClock })), { ssr: false });
const HiCalendar = dynamic(() => import("react-icons/hi").then(mod => ({ default: mod.HiCalendar })), { ssr: false });

// Icon fallback component
const IconFallback = () => <div className="w-4 h-4 bg-gray-400 rounded animate-pulse" />;

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    setMounted(true);
    
    // Update local time every minute
    const updateTime = () => {
      const now = new Date();
      const pktTime = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      }).format(now);
      setCurrentTime(pktTime);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute
    
    return () => clearInterval(interval);
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
      <div className="w-full max-w-7xl grid lg:grid-cols-[350px_1fr] gap-6">
        {/* Left Sidebar - Profile Card */}
        <Card className="lg:sticky lg:top-6 h-fit space-y-6 p-6 sm:p-8">
          {/* Profile Header */}
          <div className="text-center space-y-4">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-emerald-500 to-sky-500 p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/profile-photo.png"
                  alt="Waqar Ahmed - Senior Software Engineer"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <h1 className="text-2xl font-bold tracking-tight text-white">
                Waqar Ahmed
              </h1>
              <p className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500">
                Senior Software Engineer
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                <Suspense fallback={<IconFallback />}>
                  <BiBuilding className="w-4 h-4 text-emerald-400" />
                </Suspense>
                <span>OneUpAI</span>
                <span className="text-gray-600">•</span>
                <span className="flex items-center gap-1">
                  <span className="text-base">🇵🇰</span>
                  <span>Islamabad, Pakistan</span>
                </span>
              </div>
              
              {/* Local Time Display */}
              <div className="flex items-center justify-center gap-2 text-xs text-gray-400 bg-black/30 rounded-full px-3 py-1.5 border border-gray-700/30">
                <Suspense fallback={<IconFallback />}>
                  <HiClock className="w-4 h-4 text-sky-400" />
                </Suspense>
                <span className="font-medium text-gray-300">
                  {currentTime || 'Loading...'}
                </span>
                <span className="text-gray-500">PKT (UTC+5)</span>
              </div>
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="group hover:bg-emerald-500/20 duration-300 hover:text-emerald-400 rounded-full border border-emerald-500/30"
            >
              <div className="relative flex text-xs gap-2 items-center">
                <div className="relative flex items-center justify-center h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </div>
                <span className="font-medium">Open to Opportunities</span>
              </div>
            </Button>
          </div>

          {/* Bio */}
          <Card variant="glass" className="p-4">
            <p className="text-sm text-gray-300 leading-relaxed">
              Senior Software Engineer specializing in multi-tenant SaaS platforms, system architecture, and full-stack development. Trusted by 300+ international clients with fast response times across all time zones.
            </p>
          </Card>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center p-3 rounded-lg border border-gray-700/30 bg-black/20">
              <div className="text-xl font-bold text-emerald-400">300+</div>
              <div className="text-xs text-gray-400">Happy Clients</div>
            </div>
            <div className="text-center p-3 rounded-lg border border-gray-700/30 bg-black/20">
              <div className="text-xl font-bold text-sky-400">3+</div>
              <div className="text-xs text-gray-400">Years Exp.</div>
            </div>
            <div className="text-center p-3 rounded-lg border border-gray-700/30 bg-black/20">
              <div className="text-xl font-bold text-blue-400">20+</div>
              <div className="text-xs text-gray-400">Projects</div>
            </div>
            <div className="text-center p-3 rounded-lg border border-gray-700/30 bg-black/20">
              <div className="text-xl font-bold text-purple-400">Level 2</div>
              <div className="text-xs text-gray-400">Fiverr Seller</div>
            </div>
          </div>

          {/* International Client Benefits */}
          <Card variant="glass" className="p-4 space-y-3">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Why International Clients Choose Me</h3>
            <div className="space-y-2 text-xs text-gray-300">
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>Fluent English communication</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>Fast response (usually within 2 hours)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>Flexible with US/EU time zones</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>Secure payments via Fiverr/Upwork</span>
              </div>
            </div>
          </Card>

          {/* Social Links */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Connect</h3>
            <div className="flex gap-2">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target={social.external ? "_blank" : undefined}
                    rel={social.external ? "noopener noreferrer" : undefined}
                    className={`flex-1 p-3 rounded-lg border border-gray-700/40 bg-black/30 text-gray-300 hover:text-white transition-all duration-300 flex items-center justify-center ${social.color}`}
                    aria-label={social.label}
                  >
                    <Suspense fallback={<IconFallback />}>
                      <IconComponent className="w-5 h-5" />
                    </Suspense>
                  </a>
                );
              })}
            </div>
          </div>

          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-medium"
          >
            <Link href="/contact" className="inline-flex items-center justify-center gap-2">
              <Suspense fallback={<IconFallback />}>
                <BiEnvelope className="h-5 w-5" />
              </Suspense>
              <span>Let&apos;s Talk</span>
            </Link>
          </Button>
        </Card>

        {/* Right Content Area */}
        <div className="space-y-6">
          {/* Welcome Card */}
          <Card className="p-6 sm:p-8 space-y-6 relative">
            {/* Availability Badge - Top Right */}
            <div className="absolute top-6 right-6 flex flex-col items-end gap-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-sm">
                <div className="relative flex items-center justify-center h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </div>
                <span className="text-xs font-medium text-emerald-400">Open to Opportunities</span>
              </div>
              <ViewCounter />
            </div>

            <div className="space-y-4 pr-32">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  Welcome! 👋
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  I&apos;m a Senior Software Engineer at OneUpAI specializing in building modern, scalable web applications and multi-tenant SaaS platforms for clients worldwide. With 300+ satisfied international clients, I deliver enterprise-grade solutions using React.js, Next.js, TypeScript, Node.js, and PostgreSQL.
                </p>
              </div>
              
              <Card variant="glass" className="p-4">
                <p className="text-sm text-gray-300 leading-relaxed">
                  💡 Trusted by US & European clients for reliable, high-quality development with clear communication and on-time delivery. Available for both short-term projects and long-term partnerships.
                </p>
              </Card>
            </div>
          </Card>

          {/* Get In Touch */}
          <Card className="p-6 space-y-4 border-2 border-emerald-500/40 bg-black/70 backdrop-blur-md shadow-2xl shadow-emerald-500/20">
            <div className="text-center space-y-2">
              <h3 className="text-xl font-bold text-white">Ready to Work Together?</h3>
              <p className="text-sm text-gray-300">Let&apos;s discuss your project and bring your ideas to life</p>
            </div>

            {/* Schedule Meeting CTA */}
            <a
              href="https://calendly.com/waqaras1/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 p-4 rounded-lg border-2 border-emerald-500/50 bg-gradient-to-r from-emerald-500/20 to-sky-500/20 hover:from-emerald-500/30 hover:to-sky-500/30 hover:border-emerald-500/70 hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 group"
            >
              <Suspense fallback={<IconFallback />}>
                <HiCalendar className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
              </Suspense>
              <div className="text-center">
                <div className="text-base font-bold text-white">Schedule a Free 30-Min Call</div>
                <div className="text-xs text-gray-300">Pick a time that works for you</div>
              </div>
            </a>

            {/* Freelance Platforms */}
            <div className="grid sm:grid-cols-2 gap-3">
              <a
                href="https://www.fiverr.com/waqaristic"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center gap-3 p-4 rounded-lg border-2 border-green-500/50 bg-black/80 hover:bg-green-500/20 hover:border-green-500/70 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 group"
              >
                <div className="absolute top-3 right-3 flex flex-col items-end gap-1">
                  <span className="px-2 py-1 rounded-md bg-emerald-500/30 text-emerald-300 border border-emerald-400/50 font-medium text-xs whitespace-nowrap shadow-sm">
                    Level 2 Seller
                  </span>
                  <div className="flex items-center gap-1 text-xs text-yellow-400">
                    <Suspense fallback={<IconFallback />}>
                      <HiStar className="w-3 h-3" />
                    </Suspense>
                    <span className="text-gray-200 font-medium whitespace-nowrap">300+ Reviews</span>
                  </div>
                </div>
                <Suspense fallback={<IconFallback />}>
                  <SiFiverr className="w-6 h-6 text-green-400 group-hover:scale-110 transition-transform flex-shrink-0" />
                </Suspense>
                <div className="text-left pr-24">
                  <div className="text-sm font-semibold text-white">Hire on Fiverr</div>
                  <div className="text-xs text-gray-300">@waqaristic</div>
                </div>
              </a>
              <a
                href="https://www.upwork.com/freelancers/waqaras"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg border-2 border-green-500/50 bg-black/80 hover:bg-green-500/20 hover:border-green-500/70 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 group"
              >
                <Suspense fallback={<IconFallback />}>
                  <SiUpwork className="w-6 h-6 text-green-400 group-hover:scale-110 transition-transform" />
                </Suspense>
                <div className="text-left">
                  <div className="text-sm font-semibold text-white">Hire on Upwork</div>
                  <div className="text-xs text-gray-300">@waqaras</div>
                </div>
              </a>
            </div>

            {/* Direct Contact */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-600/50 bg-black/60 backdrop-blur-sm">
                <Suspense fallback={<IconFallback />}>
                  <HiPhone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                </Suspense>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-gray-300">Call or WhatsApp</div>
                  <a 
                    href="tel:+923353015026" 
                    className="text-sm font-medium text-white hover:text-emerald-400 transition-colors"
                  >
                    +92 335 3015026
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-600/50 bg-black/60 backdrop-blur-sm">
                <Suspense fallback={<IconFallback />}>
                  <HiMail className="w-5 h-5 text-sky-400 flex-shrink-0" />
                </Suspense>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-gray-300">Email me at</div>
                  <a 
                    href="mailto:waqaras.dev@gmail.com" 
                    className="text-sm font-medium text-white hover:text-sky-400 transition-colors break-all"
                  >
                    waqaras.dev@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </Card>

          {/* Navigation Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {menuItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch={item.prefetch}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <Card className="p-6 h-full hover:scale-[1.02] transition-all duration-300 group cursor-pointer">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {item.label}
                      </h3>
                      <Suspense fallback={<IconFallback />}>
                        <BiChevronRight className="text-2xl text-gray-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      </Suspense>
                    </div>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {/* Featured Project */}
          <Card className="p-6 sm:p-8 space-y-4 border-emerald-500/20">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">Featured Project</h3>
              <Link href="/work" className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
                View All →
              </Link>
            </div>
            <div className="space-y-4">
              <div className="aspect-video rounded-lg overflow-hidden border border-gray-700/30">
                <Image
                  src="/paklance.png"
                  alt="Paklance - Freelance Marketplace Platform"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-white">Paklance - Freelance Marketplace Platform</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  A modern freelance marketplace platform connecting Pakistani freelancers with clients worldwide. Features comprehensive job posting, secure payment integration, real-time messaging, and project tracking.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "TypeScript", "Marketplace", "Payment Integration", "Real-time Chat"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="https://paklance90.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-sky-400 hover:text-sky-300 transition-colors"
                >
                  Visit Live Site →
                </a>
              </div>
            </div>
          </Card>

          {/* Tech Stack Highlight */}
          <Card variant="glass" className="p-6 space-y-4">
            <h3 className="text-lg font-bold text-white">Tech Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="text-center p-3 rounded-lg border border-gray-700/30 bg-black/20 hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 group">
                <Suspense fallback={<IconFallback />}>
                  <SiReact className="w-6 h-6 mx-auto mb-2 text-cyan-400 group-hover:scale-110 transition-transform" />
                </Suspense>
                <div className="text-xs font-medium text-gray-300">React.js</div>
              </div>
              <div className="text-center p-3 rounded-lg border border-gray-700/30 bg-black/20 hover:bg-white/10 hover:border-white/30 transition-all duration-300 group">
                <Suspense fallback={<IconFallback />}>
                  <SiNextdotjs className="w-6 h-6 mx-auto mb-2 text-white group-hover:scale-110 transition-transform" />
                </Suspense>
                <div className="text-xs font-medium text-gray-300">Next.js</div>
              </div>
              <div className="text-center p-3 rounded-lg border border-gray-700/30 bg-black/20 hover:bg-blue-500/10 hover:border-blue-500/30 transition-all duration-300 group">
                <Suspense fallback={<IconFallback />}>
                  <SiTypescript className="w-6 h-6 mx-auto mb-2 text-blue-400 group-hover:scale-110 transition-transform" />
                </Suspense>
                <div className="text-xs font-medium text-gray-300">TypeScript</div>
              </div>
              <div className="text-center p-3 rounded-lg border border-gray-700/30 bg-black/20 hover:bg-green-500/10 hover:border-green-500/30 transition-all duration-300 group">
                <Suspense fallback={<IconFallback />}>
                  <SiNodedotjs className="w-6 h-6 mx-auto mb-2 text-green-400 group-hover:scale-110 transition-transform" />
                </Suspense>
                <div className="text-xs font-medium text-gray-300">Node.js</div>
              </div>
              <div className="text-center p-3 rounded-lg border border-gray-700/30 bg-black/20 hover:bg-blue-500/10 hover:border-blue-500/30 transition-all duration-300 group">
                <Suspense fallback={<IconFallback />}>
                  <SiPostgresql className="w-6 h-6 mx-auto mb-2 text-blue-300 group-hover:scale-110 transition-transform" />
                </Suspense>
                <div className="text-xs font-medium text-gray-300">PostgreSQL</div>
              </div>
              <div className="text-center p-3 rounded-lg border border-gray-700/30 bg-black/20 hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 group">
                <Suspense fallback={<IconFallback />}>
                  <SiTailwindcss className="w-6 h-6 mx-auto mb-2 text-cyan-400 group-hover:scale-110 transition-transform" />
                </Suspense>
                <div className="text-xs font-medium text-gray-300">Tailwind</div>
              </div>
              <div className="text-center p-3 rounded-lg border border-gray-700/30 bg-black/20 hover:bg-gray-500/10 hover:border-gray-500/30 transition-all duration-300 group">
                <Suspense fallback={<IconFallback />}>
                  <SiExpress className="w-6 h-6 mx-auto mb-2 text-gray-300 group-hover:scale-110 transition-transform" />
                </Suspense>
                <div className="text-xs font-medium text-gray-300">Express.js</div>
              </div>
              <div className="text-center p-3 rounded-lg border border-gray-700/30 bg-black/20 hover:bg-green-500/10 hover:border-green-500/30 transition-all duration-300 group">
                <Suspense fallback={<IconFallback />}>
                  <SiMongodb className="w-6 h-6 mx-auto mb-2 text-green-400 group-hover:scale-110 transition-transform" />
                </Suspense>
                <div className="text-xs font-medium text-gray-300">MongoDB</div>
              </div>
            </div>
          </Card>

          {/* What I Do */}
          <Card className="p-6 space-y-4">
            <h3 className="text-lg font-bold text-white">What I Do</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2 p-4 rounded-lg border border-gray-700/30 bg-black/20 hover:bg-emerald-500/5 hover:border-emerald-500/30 transition-all duration-300 group">
                <Suspense fallback={<IconFallback />}>
                  <HiCube className="w-8 h-8 text-emerald-400 group-hover:scale-110 transition-transform" />
                </Suspense>
                <h4 className="font-semibold text-white">System Architecture</h4>
                <p className="text-sm text-gray-400">Designing scalable multi-tenant SaaS platforms with microservices architecture</p>
              </div>
              <div className="space-y-2 p-4 rounded-lg border border-gray-700/30 bg-black/20 hover:bg-sky-500/5 hover:border-sky-500/30 transition-all duration-300 group">
                <Suspense fallback={<IconFallback />}>
                  <HiCode className="w-8 h-8 text-sky-400 group-hover:scale-110 transition-transform" />
                </Suspense>
                <h4 className="font-semibold text-white">Full-Stack Development</h4>
                <p className="text-sm text-gray-400">Building end-to-end solutions with React, Next.js, Node.js, and PostgreSQL</p>
              </div>
              <div className="space-y-2 p-4 rounded-lg border border-gray-700/30 bg-black/20 hover:bg-purple-500/5 hover:border-purple-500/30 transition-all duration-300 group">
                <Suspense fallback={<IconFallback />}>
                  <HiColorSwatch className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform" />
                </Suspense>
                <h4 className="font-semibold text-white">UI/UX Design</h4>
                <p className="text-sm text-gray-400">Creating beautiful, responsive interfaces with modern design principles</p>
              </div>
              <div className="space-y-2 p-4 rounded-lg border border-gray-700/30 bg-black/20 hover:bg-blue-500/5 hover:border-blue-500/30 transition-all duration-300 group">
                <Suspense fallback={<IconFallback />}>
                  <HiLightningBolt className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />
                </Suspense>
                <h4 className="font-semibold text-white">Performance Optimization</h4>
                <p className="text-sm text-gray-400">Optimizing applications for speed, scalability, and exceptional user experience</p>
              </div>
            </div>
          </Card>

          {/* Strong CTA Section */}
          <CTASection />
        </div>
      </div>
    </div>
  );
}
