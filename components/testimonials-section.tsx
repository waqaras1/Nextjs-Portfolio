"use client";

import { Card } from "./ui/card";
import { BiStar } from "react-icons/bi";
import testimonialsData from "@/app/data/testimonials.json";
import { MotionDiv } from "./motion-div";

export function TestimonialsSection() {
  const { testimonials } = testimonialsData;

  return (
    <MotionDiv delay={0.4}>
      <Card variant="glass" className="p-6 space-y-6">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-bold text-white">What Clients Say</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/50 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <MotionDiv key={testimonial.id} delay={0.4 + index * 0.1}>
              <Card 
                variant="elevated" 
                className="p-5 space-y-4 h-full hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <BiStar key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed italic">
                  &quot;{testimonial.content}&quot;
                </p>
                
                <div className="pt-3 border-t border-gray-700/30">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-xs text-gray-400">{testimonial.role}</p>
                  <p className="text-xs text-emerald-400 mt-1">{testimonial.project}</p>
                </div>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </Card>
    </MotionDiv>
  );
}
