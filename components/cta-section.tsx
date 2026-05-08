"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { BiCalendar, BiEnvelope, BiRocket } from "react-icons/bi";
import { MotionDiv } from "./motion-div";

export function CTASection() {
  return (
    <MotionDiv delay={0.4}>
      <Card className="relative overflow-hidden border-2 border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 via-sky-500/10 to-blue-500/10">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
        
        <div className="relative p-8 sm:p-12 text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30">
            <BiRocket className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium text-emerald-400">Ready to Start Your Project?</span>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Let&apos;s Build Something Amazing Together
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              I&apos;m available for freelance projects, full-time opportunities, and consulting. 
              Let&apos;s discuss how I can help bring your ideas to life.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 py-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400">300+</div>
              <div className="text-sm text-gray-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-400">15,938</div>
              <div className="text-sm text-gray-400">Contributions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">2 Hours</div>
              <div className="text-sm text-gray-400">Response Time</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              asChild
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-8 h-12 text-base group"
            >
              <a
                href="https://calendly.com/waqaras1/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <BiCalendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Schedule a Free Call
              </a>
            </Button>
            
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-emerald-500/50 text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 hover:border-emerald-500/70 px-8 h-12 text-base group"
            >
              <Link href="/contact" className="flex items-center gap-2">
                <BiEnvelope className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Send a Message
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-6 border-t border-gray-700/30">
            <p className="text-sm text-gray-400 mb-3">Trusted by clients from</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <span className="text-base">🇺🇸</span> United States
              </span>
              <span className="flex items-center gap-2">
                <span className="text-base">🇬🇧</span> United Kingdom
              </span>
              <span className="flex items-center gap-2">
                <span className="text-base">🇨🇦</span> Canada
              </span>
              <span className="flex items-center gap-2">
                <span className="text-base">🇦🇺</span> Australia
              </span>
            </div>
          </div>
        </div>
      </Card>
    </MotionDiv>
  );
}
