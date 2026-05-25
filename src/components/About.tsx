import { motion } from "framer-motion";
import type { Education } from "../types";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

interface AboutProps {
  paragraphs: string[];
  location: string;
  email: string;
  phone: string;
  shortName: string;
  highlights: string[];
  education: Education;
}

export function About({
  paragraphs,
  location,
  email,
 phone,
  shortName,
  highlights,
  education,
}: AboutProps) {
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <section id="about" className="section about">
      <SectionHeading
        index="01"
        title="About me"
        subtitle="Who I am and what I do"
      />

      <div className="about-grid">
        <Reveal className="about-card glass">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <div className="about-meta">
            <div>
              <span className="meta-label">Location</span>
              <span>{location}</span>
            </div>

            <div>
              <span className="meta-label">Email</span>
              <a href={`mailto:${email}`}>{email}</a>
            </div>

            <div>
              <span className="meta-label">Phone</span>
              <a href={`tel:${phone.replace(/\s/g, "")}`}>
                {phone}
              </a>
            </div>
          </div>

          <div className="education-inline">
            <span className="meta-label">Education</span>

            <p className="education-degree">
              {education.degree}
            </p>

            <p className="education-school">
              {education.school}
            </p>

            <p className="education-detail">
              {education.period} · {education.detail}
            </p>
          </div>
        </Reveal>

        <Reveal className="about-visual" delay={0.03}>
          <motion.div
            className="code-window glass"
            whileHover={!isMobile ? { y: -2 } : undefined}
            transition={{ duration: 0.2 }}
          >
            <div className="window-bar">
              <span />
              <span />
              <span />
            </div>

            <pre>
              <code>{`const developer = {
  name: "${shortName}",
  focus: ["Full-Stack", "AI", "QA"],
  stack: ["Python", "React", "MERN"],
  status: "learning & building",
};

export default developer;`}</code>
            </pre>
          </motion.div>

          <div className="about-badges">
            {highlights.map((badge, i) => (
              <motion.span
                key={badge}
                className="badge"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.03,
                  duration: 0.25,
                }}
                whileHover={
                  !isMobile ? { y: -1 } : undefined
                }
              >
                {badge}
              </motion.span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}