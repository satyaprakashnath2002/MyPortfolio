import { motion } from "framer-motion";

interface FooterProps {
  name: string;
}

export function Footer({ name }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        © {year} {name}.
      </motion.p>
      <a href="#home" className="back-top">
        Back to top ↑
      </a>
    </footer>
  );
}
