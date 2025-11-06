import company1 from "../../public/c1.jpeg";
import company2 from "../../public/c2.jpeg";

import bookMyEvents from "../../public/bookMyEvents.png";
import carePulse from "../../public/logo-icon.svg";
import assembly from "../../public/Assemble.png";
import tenzies from "../../public/Tenzies.png";

export const PROFILE = {
  name: "Shariq Khan",
  city: "Slough, UK 🇬🇧",
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
  "JavaScript, TypeScript, HTML, CSS",
  "React.js, Next.js, Tailwind CSS",
  "Node.js, Express.js, Mongodb, SQL",
  "Git, GitHub, Vercel, Appwrite, Sentry, Twilio, Clerk",
  "RESTful APIs, Agile, CI/CD, Testing, Version Control"
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
    role: "Resolution Specialist",
    company: "Amazon Development Center Pvt Ltd",
    description: `Provided technical and operational support for customer service associates. Collaborated with internal product teams to resolve escalations and improve workflows. Utilized data analysis tools and internal dashboards to monitor case metrics and performance.`,
    technologies: ["Excel", "SQL", "CRM Tools", "AWS Services", "Data Analysis"],
  },
];
