import Hero from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectTag } from "@/components/ProjectTag";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

export default function Home() {
  return (
    <main className="w-full
      flex flex-col justify-center items-center
      mx-auto overflow-hidden
      px-10 md:px-20 lg:px-30 xl:px-40"
    >
        <Hero />
        <section className="mb-10">
          <h1 className="relative text-2xl font-semibold text-center">Projects</h1>
          <div className="flex flex-row flex-wrap justify-center items-start gap-8 font-sans mt-10 mb-10">
            <ProjectCard
              projectName="picChef"
              description="A full-stack recipe identification app powered by Gemini image recognition."
              link="https://google.com"
              imagePath="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              tags={["React", "FastAPI", "Supabase", "Gemini API", "BeautifulSoup"]}
            />

            <ProjectCard
              projectName="Portfolio Website"
              description="My personal coding & art portfolio. You're looking at it right now :)"
              link="/"
              imagePath="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              tags={["Next.js", "Typescript", "Tailwind CSS", "Aceternity UI"]}
            />

            <ProjectCard
              projectName="Direct Messaging Chat"
              description="A direct messaging system between users. Stores all messages on user's local file system."
              link="https://google.com"
              imagePath="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              tags={["Python", "tkinter", "pathlib"]}
            />

            <ProjectCard
              projectName="Irvindle"
              description="A UCI-themed Wordle spinoff game. Integrates real GPA data & made in a team of 4."
              link="https://irvindle.pages.dev"
              imagePath="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              tags={["HTML", "CSS", "JavaScript", "Anteater API"]}
            />
          </div>
        </section>

    </main>
  );
}
