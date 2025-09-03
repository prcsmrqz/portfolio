import { FaGithub } from "react-icons/fa";
const Project = () => {
  return (
    <>
      <h1 className="text-5xl sm:text-6xl font-black dark:text-gray-100 mb-10 sm:mb-5 leading-tight">
        Project
      </h1>
      <hr className="w-36 h-1 mx-auto my-2 bg-[#BFBFBF] border-0 rounded-sm md:my-10 dark:bg-gray-400"></hr>

      {[
        {
          name: "MONEY TRACKER",
          type: "SIDE PROJECT",
          description: `Money Tracker is a simple and intuitive personal finance app that 
                helps users track their income, expenses, and savings. It provides a clear 
                overview of your financial activity, making it easy to monitor cash flow, 
                stay organized, and understand where your money goes.`,
          source: "https://github.com/prcsmrqz/Money-Tracker",
          image: "/money_tracker.png",
          bg: "bg-blue-200/80",
          darkBg: "dark:bg-blue-50",
          techStack: [
            { name: "Laravel", img: "/laravel.png" },
            { name: "Tailwind", img: "/tailwind.png" },
            { name: "MySQL", img: "/mysql.png" },
          ],
        },
        {
          name: "BLOG APPLICATION",
          type: "SIDE PROJECT",
          description: `This Blog Application allows users to send requests, create 
                and add posts, and maintain a personal reading list. It’s designed to 
                provide a simple and intuitive way to share content, organize articles, 
                and keep track of posts you want to read, making it easy to stay engaged 
                with your favorite topics.`,
          source: "https://github.com/prcsmrqz/ReactAsset",
          image: "/money_tracker.png",
          bg: "bg-pink-200/80",
          darkBg: "dark:bg-pink-100",
          techStack: [
            { name: "Ruby on Rails", img: "/rails.png" },
            { name: "React JS", img: "/react.png" },
            { name: "Tailwind", img: "/tailwind.png" },
            { name: "MySQL", img: "/mysql.png" },
          ],
        },
        {
          name: "DOOR ACCESS SYSTEM FOR CVSU - IMUS",
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
            { name: "PHP", img: "/php.png" },
            { name: "JavaScript", img: "/javascript.png" },
            { name: "Bootstrap", img: "/bootstrap.png" },
            { name: "C++", img: "/tailwind.png" },
            { name: "MySQL", img: "/mysql.png" },
          ],
        },
        {
          name: "MUSIC RESERVATION",
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
            { name: "Java", img: "/java.png" },
            { name: "MySQL", img: "/mysql.png" },
          ],
        },
      ].map((item) => (
        <div
          key={item.name}
          className={`${item.bg} ${item.darkBg} flex flex-col sm:flex-row mb-5 max-w-4xl p-6 border-t-4 border-neutral-400/50 dark:border-neutral-500/60 shadow-b shadow-md w-full rounded-md mt-10 sm:mt-5 transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer`}
        >
          <div className="flex-shrink-0 w-full sm:w-64 h-48 sm:h-auto flex items-center justify-center mb-4 sm:mb-0">
            <img
              src="/money_tracker.png"
              className="w-full h-full object-cover rounded-lg"
              alt={`${item.name} logo`}
            />
          </div>

          <div className="flex flex-col text-center sm:text-start sm:ml-5 flex-1">
            <h1 className="text-black font-black text-2xl">{item.name}</h1>
            <hr className="h-1 bg-[#BFBFBF] border-0 rounded-sm dark:bg-gray-400 w-40 mx-auto sm:mx-0" />
            <h1 className="text-black text-base mb-2 mt-1">{item.type}</h1>

            <p className="text-justify mb-3 text-sm">{item.description}</p>

            <div className="flex items-center">
              <a
                href={item.source}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 bg-gray-50 p-2 sm:p-3 rounded-lg font-bold cursor-pointer hover:bg-neutral-300 transition"
              >
                <h5 className="text-[10px] sm:text-sm">SOURCE CODE</h5>
                <FaGithub className="text-xs sm:text-lg" />
              </a>

              <div className="ml-auto flex items-center gap-2 hidden sm:flex">
                {item.techStack.map((tech) => (
                  <div
                    key={tech.name}
                    title={tech.name}
                    className="bg-gray-50 p-2 rounded-full flex items-center justify-center hover:bg-neutral-200 transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
                  >
                    <img
                      src={tech.img}
                      className="h-4 w-4 sm:h-6 sm:w-6 object-contains"
                      alt={tech.name}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Project;
