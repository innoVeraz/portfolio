"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";
import {
  Modal,
  ModalTrigger,
  ModalBody,
  ModalContent,
  ModalFooter,
  useModal,
  ModalProvider,
} from "./AnimatedModal";
import { HiDownload } from "react-icons/hi";

export default function About() {
  const { ref } = useSectionInView("About", 0.9);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p>
        <strong>Hi! Welcome to my portfolio v1.0</strong>
      </p>
      <p>
        <i>
          {" "}
          (!It is a work in progress so you have to visit me often for continued
          updates and new features!)
        </i>
      </p>
      <br />
      <p>
        I am a Front End Developer graduate since June 24. Recently been deep
        diving into Next.js and also going fullstack to broaden my skills.
        Including courses like system development, system support and
        integration against third party services plus database management to put
        that cherry on the stack.
      </p>
      <br />
      <p>
        Looking for a place to work, learn and bring fresh eyes, energy and a
        &quot;how can I help&quot; attitude to your team.
      </p>
    </motion.section>
  );
}
