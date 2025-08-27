import Hero from "@/components/Hero";
import { Navbar, NavBody, NavItems, MobileNav, MobileNavHeader, MobileNavMenu, MobileNavToggle, NavbarButton } from "@/components/ui/resizable-navbar";

export default function Home() {
  return (
    <main className="relative justify-center items-center
      flex-col overflow-hidden mx-auto
      px-10 md:px-30 lg:px-40"
    >
      <div className="w-full">
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
