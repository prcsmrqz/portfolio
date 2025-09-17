import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
const Project = () => {
  return (
    <>
      <h1
        data-aos="fade-down"
        data-aos-delay="100"
        className="text-5xl sm:text-6xl font-black dark:text-gray-100 mb-10 sm:mb-0 leading-tight"
      >
        Project
      </h1>
      <hr className="w-36 h-1 mx-auto my-2 bg-[#BFBFBF] border-0 rounded-sm md:my-10 dark:bg-gray-400"></hr>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
        {[
          {
            name: "Money Tracker",
            type: "SIDE PROJECT",
            description: `Money Tracker is a simple and intuitive personal finance app that 
                helps users track their income, expenses, and savings. It provides a clear 
                overview of your financial activity, making it easy to monitor cash flow, 
                stay organized, and understand where your money goes.`,
            source: "https://github.com/prcsmrqz/Money-Tracker",
            demo_link: "https://moneytracker.page.gd",
            image: "/money_tracker.png",
            bg: "bg-blue-200/80",
            darkBg: "dark:bg-blue-50",
            techStack: [
              { name: "Laravel", img: "/laravel.png", color: "bg-red-500" },
              {
                name: "Tailwind",
                img: "/tailwind.png",
                color: "bg-sky-400",
              },
              { name: "MySQL", img: "/mysql.png", color: "bg-cyan-600" },
            ],
          },
          {
            name: "Blog Application",
            type: "SIDE PROJECT",
            description: `This Blog Application allows users to send requests, create 
                and add posts, and maintain a personal reading list. It’s designed to 
                provide a simple and intuitive way to share content, organize articles, 
                and keep track of posts you want to read, making it easy to stay engaged 
                with your favorite topics.`,
            source: "https://github.com/prcsmrqz/ReactAsset",
            image: "/blog.png",
            bg: "bg-pink-200/80",
            darkBg: "dark:bg-pink-100",
            techStack: [
              {
                name: "Ruby on Rails",
                img: "/rails.png",
                color: "bg-red-700",
              },
              { name: "React JS", img: "/react.png", color: "bg-cyan-400" },
              {
                name: "Tailwind",
                img: "/tailwind.png",
                color: "bg-sky-400",
              },
              { name: "MySQL", img: "/mysql.png", color: "bg-cyan-600" },
            ],
          },
          {
            name: "Door Access System for CVSU - IMUS",
            type: "CAPSTONE PROJECT",
            description: `Our capstone project focuses on developing an RFID-based 
                door access system integrated with a comprehensive attendance 
                management solution. This system aims to enhance security and 
                streamline attendance tracking using RFID technology.`,
            source: "https://github.com/prcsmrqz/doorlocksystems",
            image: "/money_tracker.png",
            bg: "bg-green-200/80",
            darkBg: "dark:bg-green-100",
            techStack: [
              { name: "PHP", img: "/php.png", color: "bg-purple-400" },
              {
                name: "JavaScript",
                img: "/javascript.png",
                color: "bg-yellow-500",
              },
              {
                name: "Bootstrap",
                img: "/bootstrap.png",
                color: "bg-purple-600",
              },
              { name: "C++", img: "/tailwind.png", color: "bg-blue-400" },
              { name: "MySQL", img: "/mysql.png", color: "bg-cyan-600" },
            ],
          },
          {
            name: "Music Reservation",
            type: "JAVA PROJECT",
            description: `Our project is a music reservation system developed in
                Java with database integration. It allows users to reserve music 
                practice rooms or equipment, manage reservations, and view 
                availability in real-time. The system stores and retrieves data 
                from a database, ensuring efficient scheduling and conflict resolution.`,
            source: "https://github.com/prcsmrqz/musicreservations",
            image: "/money_tracker.png",
            bg: "bg-rose-200/80",
            darkBg: "dark:bg-rose-100",
            techStack: [
              { name: "Java", img: "/java.png", color: "bg-orange-500" },
              { name: "MySQL", img: "/mysql.png", color: "bg-cyan-600" },
            ],
          },
        ].map((item) => (
          <div
            key={item.name}
            data-aos="zoom-in"
            className="group max-w-lg bg-white rounded-lg shadow-sm overflow-hidden dark:bg-stone-800 cursor-pointer flex flex-col h-full"
          >
            <a href="#">
              <img
                className="h-64 w-full object-cover rounded-t-lg transform transition-transform duration-500 group-hover:scale-110"
                src={item.image}
                alt=""
              />
            </a>

            {/* flex-grow ensures content expands evenly */}
            <div className="flex flex-col flex-grow">
              <div className="px-5 pt-5">
                <h5 className="mb-2 text-start text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.name}
                </h5>
              </div>

              <div className="px-5 py-1 text-left flex flex-wrap gap-2 sm:gap-3">
                {item.techStack.map((tech) => (
                  <p
                    key={tech.name}
                    title={tech.name}
                    className={`${tech.color} inline-flex items-center px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 text-gray-100 rounded-full text-[10px] sm:text-xs md:text-sm font-semibold`}
                  >
                    {tech.name}
                  </p>
                ))}
              </div>

              {/* description pushes buttons to bottom */}
              <div className="px-7 flex-grow mt-3">
                <p className="mb-3 text-left md:text-justify text-sm text-gray-700 dark:text-gray-100">
                  {item.description}
                </p>
              </div>

              {/* buttons always aligned bottom */}
              <div className="flex gap-2 px-5 py-3 mb-3 text-left mt-auto">
                {item.demo_link && (
                  <a
                    href={item.demo_link}
                    target="_blank"
                    className="inline-flex gap-1 bg-zinc-200 px-2 md:px-4 py-2 rounded-lg font-bold cursor-pointer hover:bg-neutral-300 transition"
                  >
                    <h5 className="text-[10px] md:text-sm">LIVE DEMO</h5>
                    <GoArrowUpRight className="text-sm md:text-xl stroke-1" />
                  </a>
                )}

                <a
                  href={item.source}
                  target="_blank"
                  className="inline-flex gap-2 bg-zinc-200 px-2 md:px-4 py-2 rounded-lg font-bold cursor-pointer hover:bg-neutral-300 transition"
                >
                  <h5 className="text-[10px] sm:text-sm">SOURCE CODE</h5>
                  <FaGithub className="text-sm md:text-lg" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Project;
