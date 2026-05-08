"use client";

import { Card } from "./ui/card";
import { BiGitRepoForked, BiStar, BiGitCommit, BiCodeAlt } from "react-icons/bi";
import { MotionDiv } from "./motion-div";
import Image from "next/image";

export function GitHubStats() {
  const username = "waqaras1";
  
  // These would typically come from GitHub API
  // For now, using static data
  const stats = [
    {
      icon: BiGitRepoForked,
      label: "Public Repos",
      value: "15+",
      color: "text-blue-400"
    },
    {
      icon: BiStar,
      label: "Total Stars",
      value: "50+",
      color: "text-yellow-400"
    },
    {
      icon: BiGitCommit,
      label: "Contributions",
      value: "15,938",
      color: "text-green-400"
    },
    {
      icon: BiCodeAlt,
      label: "Languages",
      value: "10+",
      color: "text-purple-400"
    }
  ];

  return (
    <MotionDiv delay={0.3}>
      <Card variant="glass" className="p-6 space-y-6">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-bold text-white">GitHub Activity</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/50 to-transparent"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <MotionDiv key={stat.label} delay={0.3 + index * 0.05}>
                <Card 
                  variant="elevated" 
                  className="p-4 text-center space-y-2 hover:scale-105 transition-transform duration-300"
                >
                  <IconComponent className={`w-8 h-8 mx-auto ${stat.color}`} />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </Card>
              </MotionDiv>
            );
          })}
        </div>

        {/* GitHub Contribution Graph */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Contribution Activity</h3>
          <div className="rounded-lg overflow-hidden border border-gray-700/30 bg-black/40 p-3">
            <Image
              src={`https://ghchart.rshah.org/1db954/${username}`}
              alt="GitHub Contribution Graph"
              width={800}
              height={120}
              className="w-full h-auto"
              unoptimized
            />
          </div>
        </div>

        {/* Compact Stats Row */}
        <div className="grid grid-cols-1 gap-3">
          {/* GitHub Streak - Compact */}
          <div className="rounded-lg overflow-hidden border border-gray-700/30 bg-black/40 p-2">
            <Image
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=dark&background=00000000&hide_border=true&ring=1db954&fire=1db954&currStreakLabel=1db954&date_format=M%20j%5B%2C%20Y%5D`}
              alt="GitHub Streak"
              width={600}
              height={150}
              className="w-full h-auto max-h-[150px] object-contain"
              unoptimized
            />
          </div>
        </div>

        <div className="pt-2">
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors flex items-center justify-center gap-2"
          >
            View Full GitHub Profile →
          </a>
        </div>
      </Card>
    </MotionDiv>
  );
}
