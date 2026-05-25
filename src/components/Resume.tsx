import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

interface ResumeProps {
  resumeUrl?: string;
}

export function Resume({ resumeUrl }: ResumeProps) {
// Deprecated: resume is now shown as a button in the Hero section.

  const safeUrl = resumeUrl?.trim();

  if (!safeUrl) {
    return (
      <section id="resume" className="section resume">
        <SectionHeading
          index="04"
          title="Resume"
          subtitle="Download my resume"
        />

        <Reveal>
          <div className="resume-empty glass">
            Resume URL not configured.
          </div>
        </Reveal>
      </section>
    );
  }

  return (
    <section id="resume" className="section resume">
      <SectionHeading
        index="04"
        title="Resume"
        subtitle="Download my resume"
      />

      <Reveal>
        <div className="resume-card glass">
          <p className="resume-text">
            Click below to download or open my resume.
          </p>

          <motion.a
            href={safeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary resume-btn"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Download Resume
          </motion.a>
        </div>
      </Reveal>
    </section>
  );
}

