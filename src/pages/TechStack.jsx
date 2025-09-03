import React from "react";
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

const TechStack = () => {
  const techs = [
    {
      logo: SiRubyonrails,
      name: "RUBY ON RAILS",
      color: "text-red-700",
      hoverBgColor: "hover:bg-red-700",
    },
    {
      logo: FaLaravel,
      color: "text-red-500",
      name: "LARAVEL",
      hoverBgColor: "hover:bg-red-500",
    },
    {
      logo: SiCodeigniter,
      name: "CODE IGNITER",
      color: "text-orange-600",
      hoverBgColor: "hover:bg-orange-600",
    },
    {
      logo: FaPhp,
      name: "PHP",
      color: "text-black",
      hoverBgColor: "hover:bg-purple-400",
    },
    {
      logo: SiJavascript,
      name: "JAVASCRIPT",
      color: "text-yellow-300",
      hoverBgColor: "hover:bg-yellow-300",
    },
    {
      logo: FaReact,
      name: "REACT JS",
      color: "text-cyan-300",
      hoverBgColor: "hover:bg-cyan-300",
    },
    {
      logo: SiTailwindcss,
      name: "TAILWIND",
      color: "text-sky-400",
      hoverBgColor: "hover:bg-sky-400",
    },
    {
      logo: FaBootstrap,
      name: "BOOTSTRAP",
      color: "text-purple-600",
      hoverBgColor: "hover:bg-purple-600",
    },
    {
      logo: FaHtml5,
      name: "HTML",
      color: "text-orange-600",
      hoverBgColor: "hover:bg-orange-600",
    },
    {
      logo: FaCss3Alt,
      name: "CSS",
      color: "text-sky-600",
      hoverBgColor: "hover:bg-sky-600",
    },
    {
      logo: GrMysql,
      name: "MYSQL",
      color: "text-cyan-600",
      hoverBgColor: "hover:bg-cyan-600",
    },
    {
      logo: FaGitAlt,
      name: "GIT",
      color: "text-orange-600",
      hoverBgColor: "hover:bg-orange-600",
    },
    {
      logo: FaGithub,
      name: "GITHUB",
      color: "text-black",
      hoverBgColor: "hover:bg-neutral-600",
    },
    {
      logo: SiCanva,
      name: "CANVA",
      color: "text-cyan-500",
      hoverBgColor: "hover:bg-cyan-500",
    },
  ];
  return (
    <>
      <h1 className="text-5xl sm:text-6xl font-black dark:text-gray-100 mb-10 sm:mb-5 leading-tight">
        Technology Stack
      </h1>
      <hr className="w-36 h-1 mx-auto my-2 bg-[#BFBFBF] border-0 rounded-sm md:my-10 dark:bg-gray-400" />

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-7 mt-10">
        {techs.map((item) => {
          const Logo = item.logo;
          return (
            <div
              key={item.name}
              className={`group bg-neutral-100 ${item.hoverBgColor} ${item.color} hover:text-white p-5 rounded-md border-b-2 border-neutral-400/50 dark:border-b-4 dark:border-neutral-500/70 shadow-b shadow-lg flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer`}
            >
              <Logo className="h-20 w-20" />
              <p className="font-medium mt-2 text-xs sm:text-base text-center text-black group-hover:text-white ">
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
