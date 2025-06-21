"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface MotionDivProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export const MotionDiv = ({ 
  children, 
  delay = 0.25, 
  duration = 0.5, 
  className,
  once = true 
}: MotionDivProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });
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
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}; 