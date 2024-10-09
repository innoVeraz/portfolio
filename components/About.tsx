"use client";

import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";

import SectionHeading from "./SectionHeading";

export default function About() {
  const { ref } = useSectionInView("About", 0.9);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        A long time ago, far far away in a land called Jämtland, I began my
        journey as a technical support novis and worked my way up until I felt
        that my technical skills had to (needed to) grow. So I studied hard to
        land a spot at the 2-year long program for{" "}
        <span className="font-medium">
          Front End Development at Medieinstitutet
        </span>{" "}
        and I totally fell stumbling down a rocky road of what the jeebz. But
        here we are, transitioning into a{" "}
        <span className="font-medium">Full Stack Developer</span> with a focus
        on{" "}
        <span className="font-medium">
          React, Next.js and TypeScript. I come with extensive experience in the
          e-commerce business. Loaded with creative ideas and, that I found out,
          a great skill in bug fixing. Which I have heard is basically all you
          need so...{" "}
        </span>
        Currently on the hunt for someone to adopt me, foster me and give me a
        place to grow all my new super-powers and gain a developer that always
        have a &quot;how can I help&quot; attitude.
      </p>
    </motion.section>
  );
}
