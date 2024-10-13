import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import plantbuds from "@/public/plantbuds.png";
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
    title: "Full Stack developer student, Medieinstitutet",
    location: "Stockholm, Sweden",
    description:
      "I am going fullstack!, since I have a great interest in the backend as well as the frontend and I have the time to deep dive. This program has a focus on e-commerce and we will go through courses like system development, system support and integration against third party services and database management. I will be activley looking for a place to do my internships and I am open for job opportunities as well so please contact me below for any openings and ideas.",
    icon: React.createElement(PiStudent),
    date: "Oct 2024 - ongoing",
  },
  {
    title: "Graduated Front-End Developer",
    location: "Stockholm, Sweden",
    description:
      "I graduated after 2 years at Medieinstitutets Front End Developer program.",
    icon: React.createElement(LuGraduationCap),
    date: "June 2024",
  },
  {
    title: "Front End Developer Intern, Oneflow AB",
    location: "Stockholm, Sweden",
    description:
      "I worked independently 8 months (two periods in a row) as a front-end developer intern with React, Redux, TypeScript and Sass. I migrated the flow typed codebase to TypeScript, developed a new feature together with my mentor that immediatly increased revenue which was very exiting.",
    icon: React.createElement(CgWorkAlt),
    date: "oct 2023 - may 2024",
  },
  {
    title: "Front End Developer student, Medieinstitutet",
    location: "Stockholm, Sweden",
    description:
      "From 2020-2021 I pre-studied to secure this spot and studied Math, Web Development and also Business Economics. I got my spot and started the program in 2022.",
    icon: React.createElement(PiStudent),
    date: "2022 - 2024",
  },
  {
    title: "Project Manager/Customer Success Manager, Afound",
    location: "Stockholm, Sweden",
    description:
      "I came to the startup project Afound, a part of H&M New Business to build up the B2B support and prepair to manage the technical support for the brands that were selling their products on the platform.",
    icon: React.createElement(CgWorkAlt),
    date: "2016 - 2020",
  },
] as const;

export const projectsData = [
  {
    title: "Plant Buds",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: plantbuds,
  },
  {
    title: "Moviesearch",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: moviesearch,
  },
  {
    title: "Julprylar",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: christmasshop,
  },
];

export const skillsData = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Redux",
  "Zustand",
  "Tailwind",
  "Framer Motion",
  "Node.js",
  "GraphQL",
  "Apollo",
  "Prisma",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Jest",
  "Cypress",
  "Continuous Integration (CI)",
  "Continuous Deployment (CD)",
  "Version Control (Git)",
] as const;
