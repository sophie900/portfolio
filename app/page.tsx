import Hero from "@/components/Hero";
import { Tag } from "@/components/Tag";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

export default function Home() {
  return (
    <main className="w-full
      flex flex-col justify-center items-center
      mx-auto overflow-hidden
      px-10 md:px-20 lg:px-30 xl:px-40"
    >
        <Hero />
        <section>
          <h1 className="relative text-2xl font-semibold justify-center">Projects</h1>
          <div className="flex flex-row gap-4">
          <CardContainer className="font-sans">
            <CardBody className="bg-zinc-100 dark:bg-zinc-950/50
              relative group/card
              dark:hover:shadow-2xl dark:hover:shadow-indigo-600/[0.1] dark:border-white/[0.2] border-zinc-900/[0.1]
              w-auto sm:w-[30rem] h-auto rounded-xl p-6 border"
            >
              <CardItem className="w-full">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-lg group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <CardItem
                className="text-xl font-bold text-zinc-600 dark:text-white mt-4"
              >
                picChef
              </CardItem>
              <CardItem
                as="p"
                className="text-zinc-500 text-sm max-w-sm mt-2 dark:text-zinc-300"
              >
                A full-stack recipe identification app powered by Gemini image recognition
              </CardItem>

              <div className="flex flex-wrap gap-2 mt-4">
                <Tag text="React"/>
                <Tag text="TS"/>
                <Tag text="Supabase"/>
                <Tag text="FastAPI"/>
                <Tag text="Gemini API"/>
                <Tag text="BeautifulSoup"/>
              </div>
            </CardBody>
          </CardContainer>
          </div>
        </section>

    </main>
  );
}
