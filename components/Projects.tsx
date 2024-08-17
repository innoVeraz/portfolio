import { projectsData } from "@/lib/data";
import { Fragment } from "react";

import SectionHeading from "./SectionHeading";
import Project from "./Project";

export default function Projects() {
  return (
    <section className="scroll-mt-28" id="projects">
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
