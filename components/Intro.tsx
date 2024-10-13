"use client";

import { motion } from "framer-motion";

import Image from "next/image";
import vera from "@/public/vera2.jpg";

import Link from "next/link";

import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref, setActiveSection, setTimeOfLastClick, timeOfLastClick } =
    useSectionInView("Home", 0.5);

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
              className="w-52 h-52 object-cover rounded-full "
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p>Veronica Bergström</p>
        <p>
          <strong>Front End Developer</strong>
        </p>
        <p>
          {" "}
          <u>React and Next.js</u>
        </p>
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
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me!
        </Link>

        <a
          className="group text-lg px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-[#5580A0] text-[#314b5f] bg-transparent dark:text-white dark:border-white"
          href="/VB.resume.pdf"
          download
        >
          Download CV <HiDownload className="opacity-60 transition" />
        </a>

        <div className="flex gap-4">
          <a
            className=" hover:text-gray-950 text-[35px] flex items-center gap-2  focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:text-white/60"
            href="https://www.linkedin.com/in/veronica-b-a863b567/"
            target="_blank"
          >
            <BsLinkedin color="#0a66c2" />
          </a>

          <a
            className="flex items-center gap-2  text-[38px] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:text-white"
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
