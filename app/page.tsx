import Hero from "@/components/hero-banner";
import { ProjectCard } from "@/components/ui/project-card";
import Link from "next/link";

export default function Home() {
  return (
    <>
        <Hero />
        <section id="projects" className="mt-10 mb-10">
          <h1 className="relative text-4xl font-semibold text-center text-zinc-800 dark:text-zinc-200">
            Projects
          </h1>

          <div className="flex flex-row flex-wrap justify-center items-start gap-[2vw] font-sans mt-10 mb-10">
            <ProjectCard
              projectName="picChef"
              description="A full-stack recipe identification app powered by Gemini image recognition."
              link="https://github.com/sophie900/picChef"
              imagePath="/picChef.png"
              tags={["React", "FastAPI", "Supabase", "Gemini API", "BeautifulSoup"]}
            />

            <ProjectCard
              projectName="Portfolio Website"
              description="My personal coding & art portfolio. You're looking at it right now :)"
              link="/"
              imagePath="/Portfolio_light.png"
              tags={["Next.js", "Typescript", "Tailwind CSS", "Shadcn", "Aceternity UI"]}
            />

            <ProjectCard
              projectName="Direct Messaging Chat"
              description="A direct messaging system between users. Stores all messages on user's local file system."
              link="https://sophierong.com"  // TODO: replace link
              imagePath="/DM_Chat.png"
              tags={["Python", "tkinter", "pathlib"]}
            />

            <ProjectCard
              projectName="Irvindle"
              description="A UCI-themed Wordle spinoff game. Integrates real GPA data & made in a team of 4."
              link="https://irvindle.pages.dev"
              imagePath="/Irvindle.png"
              tags={["HTML", "CSS", "JavaScript", "Anteater API"]}
            />
          </div>
        </section>

        <section id="contact" className="mt-10 mb-10">
          <h1 className="relative text-4xl font-semibold text-center text-zinc-800 dark:text-zinc-200">
            Skills
          </h1>

          <p className="paragraph p-4 w-full">
            Languages: Python, JavaScript, TypeScript, HTML/CSS, SQL, LaTeX
            <br />
            Frameworks: React, Next, FastAPI, Tailwind CSS
            <br />
            Software: Git, Adobe Creative Suite (Illustrator, Photoshop, Premiere Pro), Figma
          </p>
        </section>

        <section id="contact" className="mt-10 mb-10">
          <h1 className="relative text-4xl font-semibold text-center text-zinc-800 dark:text-zinc-200">Let&apos;s get in touch!</h1>
          <p className="paragraph p-4">
            Contact me at <Link
              href="mailto:sophie.rong@gmail.com"
              className="underline transition-all duration-200 ease-in-out
                text-indigo-500 dark:text-indigo-400
                hover:text-indigo-600 dark:hover:text-indigo-300"
            >
              sophie.rong@gmail.com
            </Link>
          </p>
        </section>
    </>
  );
}
