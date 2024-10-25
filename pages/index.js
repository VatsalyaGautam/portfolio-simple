import { useState, useEffect } from "react";
import LeadershipEngagement from "../components/LeadershipEngagement";
import {
  GraduationCap,
  Briefcase,
  Trophy,
  MessageSquare,
  Code,
} from "lucide-react";
import Header from "../components/Header";
import AnimatedSection from "../components/AnimatedSection";
import Section from "../components/Section";
import EducationItem from "../components/EducationItem";
import ExperienceItem from "../components/ExperienceItem";
import SkillCategory from "../components/SkillCategory";
import ProjectCard from "../components/ProjectCard";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import ContactMe from "../components/ContactMe";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Programmer",
  ];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleTyping = () => {
      const fullTitle = titles[currentTitleIndex];
      if (!isDeleting) {
        setCurrentTitle((prev) => fullTitle.substring(0, prev.length + 1));
        if (currentTitle === fullTitle) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentTitle((prev) => fullTitle.substring(0, prev.length - 1));
        if (currentTitle === "") {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    };

    const typingInterval = setInterval(handleTyping, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [currentTitle, isDeleting, typingSpeed, currentTitleIndex, titles]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className="container mx-auto px-6 py-12 space-y-24">
        <AnimatedSection>
          <section className="text-center space-y-4">
            <h2 className="text-4xl font-bold animate-fade-in-down">
              <span className="font-merriweather">I am a </span>
              <span className="font-lobster inline-block">{currentTitle}</span>
              <span className="blinking-cursor"></span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-purple-300 animate-fade-in-up font-playfair">
              Crafting digital experiences with code and creativity
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <Section icon={<GraduationCap />} title="Education">
            <div className="space-y-4">
              <EducationItem
                degree="B.Tech - Information Technology; CPI - 8.0"
                school="SSIPMT, Raipur"
                year="2022 - 2026"
              />
              <EducationItem
                degree="Intermediate/+2; Percentage - 84.2"
                school="SXHS, Bilaspur"
                year="2021"
              />
              <EducationItem
                degree="Matriculate; Percentage - 93.2"
                school="SXHS, Bilaspur"
                year="2019"
              />
            </div>
          </Section>
        </AnimatedSection>

        <AnimatedSection>
          <Section icon={<Briefcase />} title="Experience">
            <div className="space-y-6">
              <ExperienceItem
                title="Junior Web Developer Intern"
                company="Zummit Infolabs"
                period="2024 - Present"
                description="Developed and maintained multiple client projects using various technologies"
              />
              <ExperienceItem
                title="Web Developer"
                company="Thought Applied Creations"
                period="Jul 2024 - Aug 2024"
                description="Learnt and worked on various web development technologies & frameworks"
              />
            </div>
          </Section>
        </AnimatedSection>

        <AnimatedSection>
          <Section icon={<Code />} title="Skills">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <SkillCategory
                title="Programming Languages"
                skills={["C++", "C", "Java", "Python", "LATEX"]}
              />
              <SkillCategory
                title="Frontend"
                skills={[
                  "React.js",
                  "HTML",
                  "CSS",
                  "Tailwind CSS",
                  "Javascript",
                  "Typescript",
                ]}
              />
              <SkillCategory
                title="Backend"
                skills={["Node.js", "Express.js"]}
              />
              <SkillCategory
                title="Databases"
                skills={["MongoDB", "PostgreSQL", "MySQL"]}
              />
              <SkillCategory
                title="UI Frameworks"
                skills={["Aceternity", "ShadCN", "NextUI"]}
              />
              <SkillCategory
                title="Other"
                skills={["Git/Github", "AWS (Cloud)", "RESTful APIs"]}
              />
            </div>
          </Section>
        </AnimatedSection>

        <AnimatedSection>
          <Section icon={<Code />} title="Projects">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Stampify"
                description="Web community for Philatelists"
                link="https://github.com/VatsalyaGautam/stampify"
              />
              <ProjectCard
                title="GrooveBox"
                description="A Personal Music Streaming Platform "
                link="https://github.com/VatsalyaGautam/Spotify"
              />
              <ProjectCard
                title="Task Management App"
                description="A responsive web app for efficient task organization"
                link="#"
              />
            </div>
          </Section>
        </AnimatedSection>

        <AnimatedSection>
          <Section icon={<Trophy />} title="Achievements">
            <ul className="list-disc list-inside space-y-2">
              <li className="animate-fade-in">
                Secured Global Rank <strong>1175</strong>, Codechef Starters 138
                among 19k participants
              </li>
              <li className="animate-fade-in">
                Maximum Rating on Codechef : <strong>1459</strong>{" "}
                (2*)[vatsalya17]
              </li>
              <li className="animate-fade-in">
                Rated <strong>5* (C++)</strong> and{" "}
                <strong>4* (Problem Solving via DSA)</strong> on HackerRank
              </li>
              <li className="animate-fade-in">
                Solved <strong>500+</strong> questions across various coding
                platforms including LeetCode, Codechef, Code360, and HackerRank
              </li>
            </ul>
          </Section>
        </AnimatedSection>
        <AnimatedSection>
          <LeadershipEngagement />
        </AnimatedSection>

        <AnimatedSection>
          <Section icon={<MessageSquare />} title="Testimonials">
            <Testimonials />
          </Section>
        </AnimatedSection>

        <AnimatedSection>
          <ContactMe />
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  );
}
