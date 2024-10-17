import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import wipsign from "@/public/wipsign.png";
import moviesearch from "@/public/moviesearch.png";
import christmasshop from "@/public/julprylar.png";
import React from "react";
import { PiStudent } from "react-icons/pi";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full Stack Developer student, Medieinstitutet",
    location: "Stockholm, Sweden",
    description:
      "We will go through courses like system development, system support and integration against third party services and database management. I will be activley looking for a place to do my internships/work so if you are looking for a developer, please reach out.",
    icon: React.createElement(PiStudent),
    date: "Oct 2024 - ongoing",
  },
  {
    title: "Graduated Front End Developer",
    location: "Stockholm, Sweden",
    description:
      "Graduated after 2 years at Medieinstitutets Front End Developer program.",
    icon: React.createElement(LuGraduationCap),
    date: "June 2024",
  },
  {
    title: "Front End Developer Intern, Oneflow AB",
    location: "Stockholm, Sweden",
    description:
      "Did two LIA periods, a total of 8 months as front end developer. React, Redux, TypeScript and Sass.",
    icon: React.createElement(CgWorkAlt),
    date: "oct 2023 - may 2024",
  },
  {
    title: "Project Manager/Customer Success Manager, Afound",
    location: "Stockholm, Sweden",
    description:
      "I came to the startup project Afound, a part of H&M New Business to build up the B2B support and prepair to manage the technical support.",
    icon: React.createElement(CgWorkAlt),
    date: "2016 - 2020",
  },
] as const;

export const projectsData = [
  {
    title: "Coming soon...",
    description:
      "I am currently working to fine tune and finalize some projects that I will add here as soon as they are worthy. In the meantime, please check out my GitHub for code review.",
    tags: ["Some cool tech"],
    imageUrl: wipsign,
  },
  // {
  //   title: "Moviesearch",
  //   description:
  //     "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
  //   tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
  //   imageUrl: moviesearch,
  // },
  // {
  //   title: "Julprylar",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: christmasshop,
  // },
];

export const skillsData = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind",
  "Node.js",
  "SQL/NoSQL",
  "Prisma",
  "Docker",
  "Git",
  "Figma",
  "Jira",
] as const;
