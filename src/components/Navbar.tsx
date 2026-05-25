import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import type { NavLink } from "../types";

interface NavbarProps {
  links: NavLink[];
  name: string;
  activeSection: string;
}

export function Navbar({ links, name, activeSection }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      className="navbar"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <a href="#home" className="logo" onClick={() => setOpen(false)}>
        <span className="logo-mark" />
        <span className="logo-text">{name.split(" ")[0]}</span>
      </a>

      <nav className="nav-desktop" aria-label="Main">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className={activeSection === link.id ? "nav-link active" : "nav-link"}
          >
            {link.label}
            {activeSection === link.id && (
              <motion.span
                className="nav-indicator"
                layoutId="nav-indicator"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </a>
        ))}
      </nav>

      <a href="#contact" className="btn btn-primary nav-cta">
        Let's talk
      </a>

      <button
        type="button"
        className="nav-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <HiX /> : <HiMenuAlt3 />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {links.map((link, i) => (
              <motion.a
                key={link.id}
                href={link.href}
                className={activeSection === link.id ? "active" : ""}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
