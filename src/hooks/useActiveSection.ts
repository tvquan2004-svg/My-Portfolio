import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "about");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!sections.length) {
      return undefined;
    }

    const updateActiveSection = () => {
      const activationOffset = 140;
      let nextActive = sections[0]?.id ?? "about";

      for (const section of sections) {
        const top = section.getBoundingClientRect().top;

        if (top - activationOffset <= 0) {
          nextActive = section.id;
        }
      }

      const nearBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;

      if (nearBottom) {
        nextActive = sections[sections.length - 1]?.id ?? nextActive;
      }

      setActiveSection((current) => (current === nextActive ? current : nextActive));
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [sectionIds]);

  return activeSection;
}
