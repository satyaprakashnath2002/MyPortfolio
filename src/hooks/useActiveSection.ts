import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[], offset = 120) {
  const [active, setActive] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const onScroll = () => {
      let current = sectionIds[0] ?? "";
      for (const section of sections) {
        const top = section.getBoundingClientRect().top;
        if (top <= offset) current = section.id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds, offset]);

  return active;
}
