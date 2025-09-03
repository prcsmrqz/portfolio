import { FaUser } from "react-icons/fa6";
import { BiMessageRoundedDetail } from "react-icons/bi";
import Typewriter from "typewriter-effect";

const LandingPage = () => {
  return (
    <>
      <h1 className="font-bold text-6xl md:text-7xl lg:text-8xl leading-tight text-black dark:text-white mb-5 sm:mb-10">
        Hello, I'm Precious
      </h1>
      <h2 className="text-2xl sm:text-4xl md:text-4xl lg:text-6xl text-neutral-500 dark:text-zinc-400 font-medium mb-8 sm:mb-10">
        <Typewriter
          options={{
            strings: [
              "Junior Software Engineer",
              "Full Stack Developer",
              "Web Developer",
            ],
            autoStart: true,
            loop: true,
            delay: 110,
            deleteSpeed: 60,
            pauseFor: 2000,
            cursor: "|",
          }}
        />
      </h2>
      <p className="max-w-xl text-sm md:text-base lg:text-lg dark:text-zinc-200 tracking-wide mb-10 sm:mb-15">
        I’m passionate about creating efficient, user-friendly solutions and
        continuously improving my skills to deliver high-quality software.
      </p>

      <div id="prcsmrqz" className="flex justify-between gap-5 sm:gap-7">
        <a
          href="#about"
          className="flex gap-3 text-xs md:text-xl px-5 py-4 text-white bg-black dark:bg-white dark:text-black rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
        >
          <FaUser className="text-xl md:text-2xl" />
          About Me
        </a>
        <a
          href="#contact"
          className="flex gap-3 text-xs md:text-xl px-5 py-4 text-black bg-gray-400/20 dark:bg-gray-300/20 dark:text-white rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
        >
          <BiMessageRoundedDetail className="text-xl md:text-3xl" />
          Contact
        </a>
      </div>
    </>
  );
};

export default LandingPage;
