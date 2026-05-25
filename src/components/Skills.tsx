import { motion } from "framer-motion";
import type { SkillGroup } from "../types";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

interface SkillsProps {
  skillGroups: SkillGroup[];
}

export function Skills({ skillGroups }: SkillsProps) {
  return (
    <section id="skills" className="section skills">
      <SectionHeading
        index="04"
        title="Skills & tools"
        subtitle="Technologies from my projects and internships"
      />

      <div className="skills-grid">
        {skillGroups.map((group, catIndex) => (
          <Reveal key={group.title} delay={catIndex * 0.06} className="skill-group glass">
            <h3>{group.title}</h3>
            <ul className="skill-tags">
              {group.items.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 + i * 0.03 }}
                  whileHover={{ scale: 1.04 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
