"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, memo } from "react";

interface MotionDivProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const MotionDivComponent = ({ 
  children, 
  delay = 0.25, 
  duration = 0.5, 
  className,
  once = true 
}: MotionDivProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "0px 0px -100px 0px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { 
          opacity: 0, 
          y: 20,
          filter: "blur(6px)",
        },
        visible: { 
          opacity: 1, 
          y: 0,
          filter: "blur(0px)",
        },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ 
        duration, 
        delay,
        ease: [0.25, 0.25, 0, 1],
        filter: { duration: duration * 0.8 }
      }}
      className={className}
      style={{ willChange: 'transform, opacity, filter' }}
    >
      {children}
    </motion.div>
      );
};

MotionDivComponent.displayName = 'MotionDiv';

export const MotionDiv = memo(MotionDivComponent); 