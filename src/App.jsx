import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Nav from "./pages/Nav";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import TechStack from "./pages/TechStack";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Timeline from "./pages/Timeline";
import { SparklesCore } from "@/components/ui/sparkles.jsx";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [isDarkMode]);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 2000);
    const remove = setTimeout(() => setLoading(false), 2600);

    return () => {
      clearTimeout(timer);
      clearTimeout(remove);
    };
  }, []);

  if (loading) {
    return (
      <div
        className={`flex items-center justify-center min-h-screen bg-gray-100 transition-opacity duration-700 ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        <img
          src="/logo-black.png"
          alt="Logo"
          className="w-20 h-20 animate-spin"
        />
      </div>
    );
  }

  return (
    <>
      <div className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full -z-10">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={50}
            className="w-full h-full"
            particleColor={isDarkMode ? "#FFFFFF" : "#5e5e5eff"}
          />
        </div>

        {/* Foreground */}
        <nav className="fixed top-0 z-50 h-16 w-full flex justify-between items-center border-b border-gray-400 dark:border-gray-500 px-6 lg:px-64 bg-gray-50 dark:bg-neutral-950">
          <Nav isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </nav>

        <main className="min-h-screen overflow-x-hidden scroll-smooth relative z-10">
          <div className="px-6 lg:px-0">
            <div
              id="prcsmrqz"
              className="relative px-2 flex flex-col justify-center items-center text-center mt-50 md:-mt-10 md:min-h-screen scroll-mt-40 md:scroll-mt-20 transition duration-300"
            >
              <LandingPage />
            </div>

            <div
              id="about"
              className="md:min-h-screen mt-64 md:mt-10 scroll-mt-25 transition duration-300"
            >
              <div className="flex flex-col text-center px-6">
                <About />
              </div>
              <div
                data-aos="fade-down"
                data-aos-delay="200"
                className="text-center mb-10"
              >
                <Timeline />
              </div>
            </div>

            <div
              id="technology-stack"
              className="flex flex-col justify-center items-center text-center md:min-h-screen mt-48 lg:mt-0 px-6 scroll-mt-20 md:scroll-mt-5 transition duration-300"
            >
              <TechStack />
            </div>

            <div
              id="project"
              className="flex flex-col justify-center items-center text-center mt-48 lg:mt-32 md:min-h-screen px-6 scroll-mt-30 md:scroll-mt-20 transition duration-300"
            >
              <Project />
            </div>

            <div
              id="contact"
              className="px-2 flex flex-col justify-center items-center text-center mt-48 lg:mt-32 md:min-h-screen px-6 scroll-mt-30 md:scroll-mt-5 transition duration-300"
            >
              <Contact />
            </div>
          </div>
        </main>

        <footer className="w-full bg-gray-200 dark:bg-neutral-800 p-2 sm:p-6 mt-32 sm:mt-64 relative z-10">
          <div className="flex items-center justify-between">
            <h1 className="text-[10px] sm:text-base font-bold text-black dark:text-white">
              Copyright © 2025 - All rights reserved.
            </h1>
            <h1 className="text-[10px] sm:text-base font-bold text-black dark:text-white ml-auto">
              Precious Marquez
            </h1>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
