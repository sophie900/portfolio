import Hero from "@/components/Hero";

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
        </section>

        <div className="mb-10">Hello</div>
        <div className="mb-10">Hello</div>
        <div className="mb-10">Hello</div>
        <div className="mb-10">Hello</div>
        <div className="mb-10">Hello</div>
        <div className="mb-10">Hello</div>

    </main>
  );
}
