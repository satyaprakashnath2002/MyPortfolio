import { motion } from "framer-motion";
import type { Experience as ExperienceItem } from "../types";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

interface ExperienceProps {
  items: ExperienceItem[];
}

export function Experience({ items }: ExperienceProps) {
  return (
    <section id="experience" className="section experience">
      <SectionHeading
        index="02"
        title="Experience"
        subtitle="Internships and hands-on industry work"
      />

      <div className="timeline">
        {items.map((job, i) => (
          <Reveal key={job.id} delay={i * 0.08}>
            <motion.article
              className="timeline-card glass"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 420, damping: 26 }}
            >
              <div className="timeline-marker" aria-hidden />
              <div className="timeline-head">
                <div className="timeline-company">
                  {job.logo && (
                    <img
                      src={job.logo}
                      alt={`${job.company} logo`}
                      className="timeline-logo"
                      loading="lazy"
                    />
                  )}
                  <div>
                    <h3>{job.company}</h3>
                    {job.subtitle && (
                      <span className="timeline-sub">{job.subtitle}</span>
                    )}
                  </div>
                </div>
                <span className="timeline-period">{job.period}</span>
              </div>

              <p className="timeline-role">
                {job.role} · {job.mode}
              </p>
              <ul className="timeline-bullets">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
