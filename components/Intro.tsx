"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import { useActiveSectionContext } from "@/context/active-section-context";

import Image from "next/image";
import vera from "@/public/vera.jpg";

import Link from "next/link";

import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";

export default function Intro() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Home");
    }
  }, [setActiveSection, inView]);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={vera}
              alt="profile pic"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.2rem] border-white shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, my name is Veronica.</span> I&apos;m
        a <span className="font-bold">Full Stack Developer</span> with{" "}
        <span className="font-bold">e-commerce</span> experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-[#5580A0] text-white text-lg px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-[#344e61] active:scale-105 transition"
          //   onClick={() => {
          //     setActiveSection("Contact");
          //     setTimeOfLastClick(Date.now());
          //   }}
        >
          Contact me!
        </Link>

        <a
          className="group text-lg px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/cv-veronica.pdf"
          download
        >
          Download CV <HiDownload className="opacity-60 transition" />
        </a>

        <div className="flex gap-4">
          <a
            className=" hover:text-gray-950 text-[24px] flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/veronica-b-a863b567/"
            target="_blank"
          >
            <BsLinkedin color="#0a66c2" />
          </a>

          <a
            className="flex items-center gap-2 rounded-full text-[26px] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/innoVeraz"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
