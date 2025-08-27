import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative justify-center items-center
      flex-col overflow-hidden mx-auto
      px-10 md:px-20 lg:px-40"
    >
      <div className="w-full max-w-7xl">
        <Hero />

        <div className="mb-50">Hello</div>
        <div className="mb-50">Hello</div>
        <div className="mb-50">Hello</div>
        <div className="mb-50">Hello</div>
        <div className="mb-50">Hello</div>
        <div className="mb-50">Hello</div>
        <div className="mb-50">Hello</div>
      </div>
    </main>
  );
}
