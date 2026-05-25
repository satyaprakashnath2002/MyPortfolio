import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "li";
}

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: RevealProps) {
  const Component = motion[as];

  return (
    <Component
      className={className}
      variants={defaultVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20px" }}
      transition={{ delay }}
    >
      {children}
    </Component>
  );
}
