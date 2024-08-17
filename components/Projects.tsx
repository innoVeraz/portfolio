"use client";

import { useEffect, Fragment } from "react";
import { useInView } from "react-intersection-observer";

import { useActiveSectionContext } from "@/context/active-section-context";

import { projectsData } from "@/lib/data";

import SectionHeading from "./SectionHeading";
import Project from "./Project";

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Projects");
    }
  }, [setActiveSection, inView]);

  return (
    <section ref={ref} className="scroll-mt-28" id="projects">
      <SectionHeading> My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Fragment key={index}>
            <Project {...project} />
          </Fragment>
        ))}
      </div>
    </section>
  );
}
