import { motion, type Variants } from "framer-motion";
import { HiArrowDown, HiOutlineMail } from "react-icons/hi";
import { FiGithub, FiExternalLink, FiDownload } from "react-icons/fi";


interface HeroStat {
  value: string;
  label: string;
}

interface HeroProps {
  name: string;
  role: string;
  tagline: string;
  availability: string;
  stats: HeroStat[];
  githubUrl: string;
  avatar: string;
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero({
  name,
  role,
  tagline,
  availability,
  stats,
  githubUrl,
  avatar,
}: HeroProps) {
  const [first, ...rest] = name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section id="home" className="hero section">
      <div className="hero-layout">
        <motion.figure
          className="hero-photo-wrap"
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-photo-ring" aria-hidden />
          <div className="hero-photo-frame glass">
            <img
              src={avatar}
              alt={`Portrait of ${name}`}
              className="hero-photo"
              width={480}
              height={640}
              sizes="(max-width: 639px) min(85vw, 300px), (max-width: 899px) 240px, 360px"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </motion.figure>

        <motion.div
          className="hero-content"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="hero-eyebrow" variants={item}>
            <span className="pulse-dot" />
            Open to full-time roles and freelance projects
          </motion.p>

          <motion.h1 className="hero-title" variants={item}>
            <span className="hero-greeting">Hi, I'm</span>
            <span className="hero-name">
              <span className="text-gradient">{first}</span>
              {lastName && <span> {lastName}</span>}
            </span>
          </motion.h1>

          <motion.p className="hero-role" variants={item}>
            {role}
            <span className="role-cursor" aria-hidden />
          </motion.p>

          <motion.p className="hero-tagline" variants={item}>
            {tagline}
          </motion.p>

          <motion.div className="hero-actions" variants={item}>
            <a href="#projects" className="btn btn-primary">
              View my work
              <FiExternalLink />
            </a>
            <a
              href="/resume.pdf"
              className="btn btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiDownload />
              Resume
            </a>

            <a
              href={githubUrl}
              className="btn btn-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>

            <a href="#contact" className="btn btn-ghost">
              <HiOutlineMail />
              Get in touch
            </a>

            <a href="#contact" className="btn btn-ghost">
              {availability}
            </a>


          </motion.div>

          <motion.div className="hero-stats" variants={item}>
            {stats.map((stat) => (
              <div key={stat.label} className="stat">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        aria-label="Scroll to about"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <HiArrowDown />
        </motion.span>
      </motion.a>
    </section>
  );
}
