import { Background } from "./components/Background";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

import { site, profile } from "./data/content";

import { useActiveSection } from "./hooks/useActiveSection";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = `${profile.name} | Portfolio`;
  }, []);
  const sectionIds = site.nav.map((n) => n.id);
  const activeSection = useActiveSection(sectionIds);

  return (
    <>
      <Background />
      <Navbar links={site.nav} name={site.name} activeSection={activeSection} />
      <main>
        <Hero
          name={site.name}
          role={site.role}
          tagline={site.tagline}
          availability={profile.availability}
          stats={profile.stats}
          githubUrl={profile.socials.github}
          avatar={profile.avatar}
        />
        <About
          paragraphs={site.about}
          location={site.location}
          email={site.email}
          phone={site.phone}
          shortName={profile.shortName}
          highlights={profile.highlights}
          education={site.education}
        />
        <Experience items={site.experience} />
        <Projects projects={site.projects} />
        <Skills skillGroups={site.skillGroups} />
        <Contact


          email={site.email}
          phone={site.phone}
          location={site.location}
          socials={site.socials}
          recipientName={site.name}
        />
      </main>
      <Footer name={site.name} />
    </>
  );
}

export default App;
