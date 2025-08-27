import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative justify-center items-center
      flex-col overflow-hidden mx-auto
      px-10 md:px-30 lg:px-40"
    >
      <div className="max-w-7xl w-full">
        <Hero />
      </div>
    </main>
  );
}
