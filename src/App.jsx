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

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement; // html
    if (isDarkMode) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [isDarkMode]);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  return (
    <>
      <main className="min-h-screen ">
        <div className=" mx-auto px-6 lg:px-0">
          <nav
            data-aos="fade-down"
            className="sticky top-0 z-50 flex justify-between items-center border-b border-gray-400 dark:border-gray-500 pb-3 pt-3 lg:px-64 bg-gray-50 dark:bg-neutral-950"
          >
            <Nav isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          </nav>

          <div
            id="prcsmrqz"
            className="relative px-2 flex flex-col justify-center items-center text-center mt-10 sm:-mt-10 sm:min-h-[calc(100vh-64px)] scroll-mt-20 overflow-hidden"
          >
            <LandingPage />
          </div>

          <div
            data-aos="fade-down"
            data-aos-delay="200"
            id="about"
            className="px-2 flex flex-col justify-center items-center text-center mt-30 sm:mt-15 px-6 scroll-mt-25"
          >
            <About />
          </div>
          <div
            id="technology-stack"
            className="px-2 flex flex-col justify-center items-center text-center mt-30 sm:mt-60 px-6 scroll-mt-20"
          >
            <TechStack />
          </div>
          <div
            id="project"
            className="px-2 flex flex-col justify-center items-center text-center mt-30 sm:mt-60 px-6 scroll-mt-20"
          >
            <Project />
          </div>
          <div
            id="contact"
            className="px-2 flex flex-col justify-center items-center text-center mt-30 sm:mt-60 px-6 scroll-mt-20"
          >
            <Contact />
          </div>
        </div>
      </main>
      <footer className="w-full bg-gray-200 dark:bg-neutral-800 p-2 sm:p-6 mt-30 sm:mt-60">
        <div className="flex items-center justify-start justify-between">
          <h1 className="text-[10px] sm:text-base font-bold text-black dark:text-white">
            Copyright © 2025 - All rights reserved.
          </h1>
          <h1 className="text-[10px] sm:text-base font-bold text-black dark:text-white ml-auto">
            Precious Marquez
          </h1>
        </div>
      </footer>
    </>
  );
}

export default App;
