import { useState, useEffect } from "react";
import { FaGitAlt } from "react-icons/fa";
import { SiRubyonrails } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { SiCodeigniter } from "react-icons/si";
import { FaPhp } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { FaGithub } from "react-icons/fa6";
import { SiCanva } from "react-icons/si";
import { FaFigma } from "react-icons/fa6";

import AOS from "aos";

const TechStack = () => {
  const [active, setActive] = useState("all");
  useEffect(() => {
    AOS.refresh();
  }, [active]);
  const techs = [
    {
      logo: SiRubyonrails,
      name: "RUBY ON RAILS",
      color: "text-red-700",
      hoverBgColor: "hover:bg-red-700",
      type: "be",
    },
    {
      logo: FaLaravel,
      color: "text-red-500",
      name: "LARAVEL",
      hoverBgColor: "hover:bg-red-500",
      type: "be",
    },
    {
      logo: SiCodeigniter,
      name: "CODE IGNITER",
      color: "text-orange-600",
      hoverBgColor: "hover:bg-orange-600",
      type: "be",
    },
    {
      logo: FaPhp,
      name: "PHP",
      color: "text-violet-400 dark:text-violet-300",
      hoverBgColor: "hover:bg-purple-400",
      type: "be",
    },
    {
      logo: SiJavascript,
      name: "JAVASCRIPT",
      color: "text-yellow-300",
      hoverBgColor: "hover:bg-yellow-300",
      type: "fe",
    },
    {
      logo: FaReact,
      name: "REACT JS",
      color: "text-cyan-400",
      hoverBgColor: "hover:bg-cyan-300",
      type: "fe",
    },
    {
      logo: SiTailwindcss,
      name: "TAILWIND",
      color: "text-sky-400",
      hoverBgColor: "hover:bg-sky-400",
      type: "fe",
    },
    {
      logo: FaBootstrap,
      name: "BOOTSTRAP",
      color: "text-purple-600",
      hoverBgColor: "hover:bg-purple-600",
      type: "fe",
    },
    {
      logo: FaHtml5,
      name: "HTML",
      color: "text-orange-600",
      hoverBgColor: "hover:bg-orange-600",
      type: "fe",
    },
    {
      logo: FaCss3Alt,
      name: "CSS",
      color: "text-sky-600",
      hoverBgColor: "hover:bg-sky-600",
      type: "fe",
    },
    {
      logo: GrMysql,
      name: "MYSQL",
      color: "text-cyan-600",
      hoverBgColor: "hover:bg-cyan-600",
      type: "be",
    },
    {
      logo: FaGitAlt,
      name: "GIT",
      color: "text-orange-600",
      hoverBgColor: "hover:bg-orange-600",
      type: "tool",
    },
    {
      logo: FaGithub,
      name: "GITHUB",
      color: "text-black dark:text-white",
      hoverBgColor: "hover:bg-neutral-600",
      type: "tool",
    },
    {
      logo: FaFigma,
      name: "FIGMA",
      color: "text-black dark:text-white",
      hoverBgColor: "hover:bg-purple-700",
      type: "tool",
    },
    {
      logo: SiCanva,
      name: "CANVA",
      color: "text-cyan-500",
      hoverBgColor: "hover:bg-cyan-500",
      type: "tool",
    },
  ];
  return (
    <>
      <h1
        data-aos="fade-down"
        data-aos-delay="100"
        className="text-5xl sm:text-6xl font-black dark:text-gray-100 mb-10 sm:mb-5 leading-tight"
      >
        Technology Stack
      </h1>
      <hr className="w-36 h-1 mx-auto my-2 bg-[#BFBFBF] border-0 rounded-sm md:my-10 dark:bg-gray-400" />

      <div className="flex text-white dark:text-gray-100 gap-2 sm:gap-4 mt-5">
        <button
          onClick={() => setActive("all")}
          className={`${
            active === "all"
              ? "bg-zinc-900 dark:bg-zinc-500"
              : "bg-zinc-600 dark:bg-zinc-800"
          }  hover:bg-zinc-900 dark:hover:bg-zinc-700 transition-colors duration-300 px-4 py-2 text-xs sm:text-base rounded-md cursor-pointer`}
        >
          All
        </button>
        <button
          onClick={() => setActive("fe")}
          className={`${
            active === "fe"
              ? "bg-zinc-900 dark:bg-zinc-500"
              : "bg-zinc-600 dark:bg-zinc-800"
          }  hover:bg-zinc-900 dark:hover:bg-zinc-700 transition-colors duration-300 px-4 py-2 text-xs sm:text-base rounded-md cursor-pointer`}
        >
          Frontend
        </button>
        <button
          onClick={() => setActive("be")}
          className={`${
            active === "be"
              ? "bg-zinc-900 dark:bg-zinc-500"
              : "bg-zinc-600 dark:bg-zinc-800"
          }  hover:bg-zinc-900 dark:hover:bg-zinc-700 transition-colors duration-300 px-4 py-2 text-xs sm:text-base rounded-md cursor-pointer`}
        >
          Backend
        </button>
        <button
          onClick={() => setActive("tool")}
          className={`${
            active === "tool"
              ? "bg-zinc-900 dark:bg-zinc-500"
              : "bg-zinc-600 dark:bg-zinc-800"
          }  hover:bg-zinc-900 dark:hover:bg-zinc-700 transition-colors duration-300 px-4 py-2 text-xs sm:text-base rounded-md cursor-pointer`}
        >
          Tools
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-7 mt-10">
        {techs
          .filter((item) => active === "all" || item.type === active)
          .map((item) => {
            const Logo = item.logo;
            return (
              <div
                data-aos="flip-right"
                data-aos-delay="200"
                key={`${item.name}-${active}`}
                className={`group bg-stone-100 dark:bg-stone-800  ${item.hoverBgColor} ${item.color} hover:text-white p-5 rounded-md border-b-2 border-neutral-400/50 dark:border-b-4 dark:border-neutral-500/70 shadow-b shadow-lg flex flex-col items-center transition-transform transition-colors duration-300 ease-in-out transform hover:scale-110 cursor-pointer`}
              >
                <Logo className="h-20 w-20" />
                <p className="font-medium mt-2 text-xs dark:text-white sm:text-base text-center text-black group-hover:text-white ">
                  {item.name}
                </p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default TechStack;
