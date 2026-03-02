import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Blogs } from "@/components/sections/Blogs";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-32 pb-32">
        <Projects />
        <Blogs />
        <Services />
        <About />
        <Contact />
      </div>
    </main>
  );
}
