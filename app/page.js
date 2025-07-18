import Image from "next/image";
import ProfileOverview from "./components/ProfileOverview";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Articles from "./components/Articles";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <>
      <ProfileOverview />
      <Projects />
      <Skills />
      <WorkExperience />
      <Articles />
      <ContactForm />
    </>
  );
}
