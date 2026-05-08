"use client";

import Link from "next/link";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { BiCalendar, BiTime, BiChevronRight } from "react-icons/bi";
import articlesData from "@/app/data/articles.json";
import { MotionDiv } from "./motion-div";

export function ArticlesSection() {
  const { articles } = articlesData;
  const publishedArticles = articles.filter(article => article.published);

  if (publishedArticles.length === 0) {
    return null;
  }

  return (
    <MotionDiv delay={0.5}>
      <Card variant="glass" className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-white">Latest Articles</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/50 to-transparent"></div>
          </div>
          <Link 
            href="/blog" 
            className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1"
          >
            View All
            <BiChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {publishedArticles.slice(0, 3).map((article, index) => (
            <MotionDiv key={article.id} delay={0.5 + index * 0.1}>
              <Link href={`/blog/${article.slug}`}>
                <Card 
                  variant="elevated" 
                  className="p-5 space-y-3 h-full hover:scale-[1.02] transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <BiCalendar className="w-3 h-3" />
                      {new Date(article.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <BiTime className="w-3 h-3" />
                      {article.readTime}
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-sm text-gray-400 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {article.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </Link>
            </MotionDiv>
          ))}
        </div>
      </Card>
    </MotionDiv>
  );
}
