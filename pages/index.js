import { useState, useEffect, useRef } from "react";
import {
  Moon,
  Sun,
  Briefcase,
  GraduationCap,
  Trophy,
  MessageSquare,
  Code,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const titles = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Programmer",
  ];
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

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
          setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
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

  const testimonials = [
    {
      quote: "Vatsalya is an exceptional developer with a keen eye for detail.",
      author: "Divyanshu Goswami, Student at SSIPMT, Raipur",
    },
    {
      quote:
        "Really had a great experience while working with Vatsalya. He delivers the perfect and exact product according to the demand",
      author: "Sandeep Singh, Student at SSIPMT, Raipur",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <header className="sticky top-0 z-10 bg-white dark:bg-gray-900 shadow-md">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold font-pacifico">
            Vatsalya Gautam : Pre-Final Yearite
          </h1>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-purple-900 transition-colors duration-300"
          >
            {darkMode ? (
              <Sun className="w-6 h-6" />
            ) : (
              <Moon className="w-6 h-6" />
            )}
          </button>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-12 space-y-24">
        <AnimatedSection>
          <section className="text-center space-y-4">
            <h2 className="text-4xl font-bold animate-fade-in-down">
              <span className="font-merriweather">I am </span>
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
                Secured Global Rank 1175, Codechef Starters 138 among 19k
                participants
              </li>
              <li className="animate-fade-in">
                Maximum Rating on Codechef : 1459 (2*)[vatsalya17]
              </li>
              <li className="animate-fade-in">
                Rated 5*(C++) and 4*(Problem Solving via DSA) on HackerRank
              </li>
              <li className="animate-fade-in">
                Solved 500+ questions across various coding platforms including
                LeetCode, Codechef, Code360, and HackerRank
              </li>
            </ul>
          </Section>
        </AnimatedSection>

        <AnimatedSection>
          <Section icon={<MessageSquare />} title="Testimonials">
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentTestimonial * 100}%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                      <p className="italic mb-4 text-gray-600 dark:text-gray-300">
                        &quot;{testimonial.quote}&quot;
                      </p>
                      <p className="font-semibold text-right">
                        - {testimonial.author}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 dark:bg-gray-700 p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 dark:bg-gray-700 p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </Section>
        </AnimatedSection>
      </main>

      <footer className="bg-gray-200 dark:bg-gray-900 py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; made with ❤️ by VatsalyaGautam. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function AnimatedSection({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
}

function Section({ icon, title, children }) {
  return (
    <section className="space-y-6">
      <div className="flex items-center space-x-2">
        {icon}
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function EducationItem({ degree, school, year }) {
  return (
    <div className="group bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
      <h3 className="font-semibold group-hover:text-purple-500 transition-colors duration-300">
        {degree}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">{school}</p>
      <p className="text-sm text-gray-500 dark:text-gray-500">{year}</p>
    </div>
  );
}

function ExperienceItem({ title, company, period, description }) {
  return (
    <div className="group bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
      <h3 className="font-semibold group-hover:text-purple-500 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">{company}</p>
      <p className="text-sm text-gray-500 dark:text-gray-500">{period}</p>
      <p className="mt-2">{description}</p>
    </div>
  );
}

function SkillCategory({ title, skills }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105">
      <h3 className="font-semibold mb-2 text-purple-500">{title}</h3>
      <ul className="space-y-1">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-600 dark:text-gray-400">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ title, description, link }) {
  return (
    <a
      href={link}
      className="group bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 block"
    >
      <h3 className="font-semibold mb-2 group-hover:text-purple-500 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </a>
  );
}
