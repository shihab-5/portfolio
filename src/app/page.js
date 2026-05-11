"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import Stack from "@/components/Stack";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <SmoothScroll>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      
      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <Sidebar />
        <main className="lg:ml-64 pt-32 pb-16">
          <div className="max-w-[1280px] mx-auto px-6">
            <Hero />
            <Stack />
            <Skills />
            <Education />
            <Projects />
            <Contact />
          </div>
        </main>
        <Footer />
        
        {/* Mobile FAB */}
        <button className="fixed bottom-6 right-6 bg-secondary-container text-on-secondary-container p-4 rounded-full shadow-[0_0_20px_rgba(0,241,253,0.4)] z-50 hover:scale-110 active:scale-95 transition-all md:hidden">
          <span className="material-symbols-outlined">message</span>
        </button>
      </div>
    </SmoothScroll>
  );
}
