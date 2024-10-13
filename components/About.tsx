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
      <p>Hi! Welcome to my portfolio.</p>

      <p>I would love to get a job</p>

      <p>
        I bring extensive experience in e-commerce, paired with a creative
        mindset and, as I&#39;ve discovered, a knack for bug fixing—which
        I&#39;ve been told is basically all you need.
      </p>

      <p>Please hire me!</p>
    </motion.section>
  );
}
