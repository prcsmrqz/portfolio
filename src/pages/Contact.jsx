import { CiMail } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <h1
        data-aos="fade-down"
        data-aos-delay="100"
        className="text-5xl sm:text-6xl font-black dark:text-gray-100 mb-10 sm:mb-5 leading-tight"
      >
        Contact
      </h1>
      <hr className="w-36 h-1  mx-auto my-2 bg-[#BFBFBF] border-0 rounded-sm md:my-10 dark:bg-gray-400"></hr>

      <div className=" flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-5 md:gap-5 lg:gap-10 w-full px-4 sm:px-10 mt-10">
          <a
            data-aos="fade-right"
            data-aos-delay="100"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=prcsmrqz09@gmail.com&su=Hello&body=Send%20me%20a%20message."
            target="_blank"
            className="flex items-center gap-4 cursor-pointer hover:underline
            dark:text-white"
          >
            <CiMail className="text-4xl sm:text-6xl stroke-1" />
            <div className="flex flex-col justify-start items-start sm:min-w-[200px]">
              <h4 className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                Send me an email.
              </h4>
              <h1 className="font-bold text-sm sm:text-base">
                prcsmrqz09@gmail.com
              </h1>
            </div>
          </a>

          <a
            data-aos="fade-left"
            data-aos-delay="100"
            href="https://www.linkedin.com/in/prcsmrqz"
            target="_blank"
            className="flex items-center gap-4 cursor-pointer hover:underline dark:text-white"
          >
            <FaLinkedin className="text-4xl sm:text-6xl stroke-1" />
            <div className="flex flex-col justify-start items-start sm:min-w-[200px]">
              <h4 className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                My LinkedIn account.
              </h4>
              <h1 className="font-bold text-sm sm:text-base">
                prcsmrqz09@gmail.com
              </h1>
            </div>
          </a>

          <a
            data-aos="fade-right"
            data-aos-delay="100"
            href="https://github.com/prcsmrqz"
            target="_blank"
            className="flex items-center gap-4 cursor-pointer hover:underline dark:text-white"
          >
            <FaGithub className="text-4xl sm:text-6xl stroke-1" />
            <div className="flex flex-col justify-start items-start sm:min-w-[200px]">
              <h4 className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                My Github account.
              </h4>
              <h1 className="font-bold text-sm sm:text-base">
                github.com/prcsmrqz
              </h1>
            </div>
          </a>

          <a
            data-aos="fade-left"
            data-aos-delay="100"
            href="https://www.facebook.com/prcsmrqz"
            target="_blank"
            className="flex items-center gap-4 cursor-pointer hover:underline dark:text-white"
          >
            <FaFacebookSquare className="text-4xl sm:text-6xl stroke-1" />
            <div className="flex flex-col justify-start items-start sm:min-w-[200px]">
              <h4 className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                My Facebook account.
              </h4>
              <h1 className="font-bold text-sm sm:text-base">
                facebook.com/prcsmrqz
              </h1>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
