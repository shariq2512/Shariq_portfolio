import company1 from "../../public/c1.jpeg";
import company2 from "../../public/c2.jpeg";
import company3 from "../../public/c3.jpeg";
import company4 from "../../public/c4.jpeg";

import bookMyEvents from "../../public/bookMyEvents.png";
import carePulse from "../../public/logo-icon.svg";
import assembly from "../../public/Assemble.png";
import tenzies from "../../public/Tenzies.png";

export const PROFILE = {
  name: "Shariq Khan",
  city: "Bath, UK 🇬🇧",
  greet: "Nice to Meet you!",
};

export const PROJECTS = [
  {
    name: "bookMyEvents",
    image: bookMyEvents,
    url: "https://book-my-events-platform-4lua7dvp9.vercel.app/?vercelToolbarCode=c_6YqBupLl2q2hh",
  },
  {
    name: "CarePulse",
    image: carePulse,
    url: "https://carepulse-platform-1fxb2spzy-shariq-khans-projects-59f6e475.vercel.app/",
  },
  {
    name: "Assembly-Endgame",
    image: assembly,
    url: "https://assembly-endgame-one.vercel.app/",
  },
  {
    name: "Tenzies",
    image: tenzies,
    url: "https://tenzies-sigma-snowy.vercel.app/",
  },
];

export const SKILLS = [
  "HTML, CSS, JavaScript, React",
  "Next.js, Tailwind CSS, TypeScript",
  "Node.js, MongoDB, Appwrite",
  "RESTful APIs, Git, Clerk",
  "Vercel, Netlify, Heroku"
];

export const EXPERIENCES = [
  {
    img: company1,
    year: "2021 - 2023",
    role: "Frontend Developer",
    company: "Qift Solutech Pvt Ltd",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "Tailwind CSS", "JavaScript", "Next.js", "MongoDB"],
  },
  {
    img: company2,
    year: "2019 - 2021",
    role: "MERN Stack Developer",
    company: "Pataran technologies",
    description: `Contributed to the development of web applications using JavaScript, React.js, Express and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["JavaScript", "React.js", "Node.js", "Express", "MongoDB"],
  },
];
