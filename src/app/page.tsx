import Navbar from "@/components/Navbar";
import BackgroundEffects from "@/components/BackgroundEffects";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden min-h-screen text-slate-400 antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
      <BackgroundEffects />
      <Navbar />
      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Footer />
      </main>
    </div>
  );
}
