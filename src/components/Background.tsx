import { motion } from "framer-motion";

export function Background() {
  return (
    <div className="bg-effects" aria-hidden>
      <motion.div
        className="orb orb-1"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="orb orb-2"
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 40, -25, 0],
          scale: [1, 0.92, 1.1, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="orb orb-3"
        animate={{
          x: [0, 25, -35, 0],
          y: [0, -20, 35, 0],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="grid-overlay" />
      <div className="noise-overlay" />
    </div>
  );
}
