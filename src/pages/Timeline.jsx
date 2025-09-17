import React from "react";
import { IoIosBriefcase } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";
import { TracingBeam } from "@/components/ui/tracing-beam.jsx";

const timelineData = [
  {
    id: 1,
    title: "Junior Software Engineer",
    company: "Adish International Corporation",
    date: "November 2024 - Present",
    description: [
      `I specialize in full-stack development, handling both the frontend and backend 
      of company projects. From designing responsive, intuitive interfaces to implementing 
      efficient server-side functionality, I ensure applications remain stable, scalable, and user-focused.`,
    ],
    techStack: [
      { name: "Ruby on Rails", img: "/rails.png", color: "bg-red-700" },
      { name: "React JS", img: "/react.png", color: "bg-cyan-400" },
      { name: "Laravel", img: "/laravel.png", color: "bg-red-500" },
      { name: "MySQL", img: "/mysql.png", color: "bg-cyan-600" },
      { name: "Github", img: "/github.png", color: "bg-black" },
      { name: "Git", img: "/git.png", color: "bg-orange-600" },
    ],
  },
  {
    id: 2,
    title: "Software Developer Intern",
    company: "HRWeb Inc.",
    date: "March - June 2024",
    description: [
      `Web Developer Intern responsible for transforming older versions of company systems into
       modernized, updated versions. Contributed to frontend and backend development, improving 
       performance, usability, and overall maintainability of applications. Assisted in migrating 
       features, enhancing system design, and ensuring smooth transition to newer technologies.`,
    ],
    techStack: [
      { name: "Code Igniter", img: "/codeigniter.png", color: "bg-orange-600" },
      { name: "Bootstrap", img: "/bootstrap.png", color: "bg-cyan-400" },
      { name: "MySQL", img: "/mysql.png", color: "bg-cyan-600" },
      { name: "Github", img: "/github.png", color: "bg-black" },
      { name: "Git", img: "/git.png", color: "bg-orange-600" },
    ],
  },
  {
    id: 3,
    title: "Bachelor of Science in Information Technology",
    company: "Cavite State University - Imus Campus",
    awards: "Magna Cum Laude",
    date: "2020 - 2024",
    description: [
      "Awarded for Outstanding Research Paper in the Student Research Colloquium",
      "Awarded Best Presenter in the Student Research Colloquium",
      "Built a strong foundation in software development, database management, and web technologies",
    ],
    techStack: [
      { name: "PHP", img: "/php.png", color: "bg-purple-400" },
      { name: "Java", img: "/java.png", color: "bg-orange-500" },
      { name: "C++", img: "/c++.png", color: "bg-blue-400" },
      { name: "JavaScript", img: "/javascript.png", color: "bg-yellow-500" },
      { name: "Bootstrap", img: "/bootstrap.png", color: "bg-purple-600" },
      { name: "MySQL", img: "/mysql.png", color: "bg-cyan-600" },
      { name: "Github", img: "/github.png", color: "bg-black" },
      { name: "Git", img: "/git.png", color: "bg-orange-600" },
      { name: "HTML", img: "/html.png", color: "bg-orange-600" },
      { name: "CSS", img: "/css.png", color: "bg-sky-600" },
    ],
  },
  {
    id: 4,
    title: "TVL - Computer Programming NCIII, Animation NCII",
    company: "AISAT College - Dasmariñas",
    awards: "With Honors",
    date: "2018 - 2020",
    description: [
      "Built a strong foundation in programming and problem-solving using C++.",
      "Explored creativity through animation projects, blending design and technical skills.",
      "Developed applications in VB.NET with MySQL database connectivity for back-end integration.",
      "Combined coding, design, and data management, which fueled my passion for pursuing IT in higher education.",
    ],
    techStack: [
      { name: "C++", img: "/c++.png", color: "bg-blue-400" },
      { name: "VB.NET", img: "/vbnet.png", color: "bg-sky-500" },
      { name: "MySQL", img: "/mysql.png", color: "bg-cyan-600" },
    ],
  },
];

const Timeline = () => {
  return (
    <>
      <div className="mt-20 mb-10">
        <h1 className="font-bold text-4xl dark:text-white">Growth Path</h1>
      </div>

      <TracingBeam className=" px-2 sm:px-4">
        <div className="max-w-7xl md:ml-0 ml-8  mx-auto space-y-12">
          {timelineData.map((item) => (
            <div
              key={item.id}
              className="relative w-full py-5 px-4 rounded-lg shadow-md bg-gray-200 dark:bg-zinc-800 text-black dark:text-white"
            >
              <h3 className="px-2 font-bold text-base md:text-2xl text-start">
                {item.title}
              </h3>

              <div className="mt-2 mb-5 px-2 flex flex-wrap gap-2 justify-between text-start">
                <div className="flex gap-2 items-center">
                  <IoIosBriefcase className="w-4 h-4 text-gray-500 dark:text-white" />
                  <p className="text-xs md:text-sm">{item.company}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <FaRegCalendarAlt className="w-4 h-4 text-gray-500 dark:text-white" />
                  <p className="text-xs md:text-sm">{item.date}</p>
                </div>
              </div>

              <div className="text-start px-4">
                {item.description.length > 1 ? (
                  <ul className="mt-2 list-disc list-outside pl-5 text-left md:text-justify text-xs sm:text-sm leading-relaxed">
                    {item.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="leading-relaxed text-xs sm:text-sm text-left md:text-justify">
                    {item.description[0]}
                  </p>
                )}
              </div>

              <div className="mt-2 px-3 py-1 text-left flex flex-wrap gap-2 sm:gap-3">
                {item.techStack.map((tech) => (
                  <p
                    key={tech.name}
                    title={tech.name}
                    className={`${tech.color} inline-flex items-center px-2 py-1 sm:px-3 sm:py-1.5 text-gray-100 rounded-full text-[10px] md:text-xs font-semibold`}
                  >
                    {tech.name}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </>
  );
};

export default Timeline;
