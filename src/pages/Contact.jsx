import { CiMail } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdSubject } from "react-icons/md";
import { CiChat2 } from "react-icons/ci";
import { IoIosSend } from "react-icons/io";
import { useForm, ValidationError } from "@formspree/react";
import Swal from "sweetalert2";

const Contact = () => {
  const [state, handleSubmit] = useForm("xgvlbaer");
  if (state.succeeded) {
    Swal.fire({
      title: "Success!",
      text: "Your message was submitted.",
      icon: "success",
      confirmButtonText: "OK",
    });
  }
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div
          data-aos="fade-right"
          data-aos-delay="100"
          className=" flex flex-col justify-center items-center bg-white px-4 md:px-12 py-8 shadow-md rounded-lg"
        >
          <h2 className="font-bold text-3xl mb-6">Get In Touch</h2>
          <div className="grid grid-cols-1 gap-5 md:gap-5 lg:gap-10 w-full px-4 sm:px-10">
            <a
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

        <div
          data-aos="fade-left"
          data-aos-delay="100"
          className="mt-10 sm:mt-0 px-6 md:px-12 py-8 rounded-lg shadow-md bg-white"
        >
          <h2 className="font-bold text-3xl mb-6">Send a Message</h2>
          <form onSubmit={handleSubmit} className="text-start">
            <div className="flex flex-col mb-5">
              <label
                htmlFor="name"
                className="text-gray-800 font-semibold mb-1 text-sm md:text-base"
              >
                Name:
              </label>
              <div className="flex gap-2 px-2 py-1 border border-gray-300 rounded-md ">
                <MdEmail className="w-auto h-6" />
                <input
                  id="name"
                  type="name"
                  name="name"
                  placeholder="Your full name"
                  className="text-xs sm:text-base w-full focus:outline-none"
                />
              </div>
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div className="flex flex-col mb-5">
              <label
                htmlFor="email"
                className="text-gray-800 font-semibold mb-1 text-sm md:text-base"
              >
                Email:
              </label>
              <div className="flex gap-2 px-2 py-1 border border-gray-300 rounded-md ">
                <MdEmail className="w-auto h-6" />
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  className="text-xs sm:text-base w-full focus:outline-none"
                />
              </div>
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="flex flex-col mb-5">
              <label
                htmlFor="subject"
                className="text-gray-800 font-semibold mb-1 text-sm md:text-base"
              >
                Subject:
              </label>
              <div className="flex gap-2 px-2 py-1 border border-gray-300 rounded-md ">
                <MdSubject className="w-auto h-6" />
                <input
                  id="subject"
                  type="subject"
                  name="subject"
                  placeholder="Project inquiry, collaboration, etc."
                  className="text-xs sm:text-base w-full focus:outline-none"
                />
              </div>
              <ValidationError
                prefix="Subject"
                field="subject"
                errors={state.errors}
              />
            </div>
            <div className="flex flex-col mb-5">
              <label
                htmlFor="message"
                className="text-gray-800 font-semibold mb-1 text-sm md:text-base"
              >
                Message:
              </label>
              <div className="flex gap-2 px-2 py-1 border border-gray-300 rounded-md ">
                <CiChat2 className="w-auto h-6" />
                <textarea
                  id="message"
                  type="message"
                  name="message"
                  placeholder="Tell me about your project, requirements, timeline, budget, etc."
                  rows="3"
                  className="text-xs sm:text-base w-full focus:outline-none "
                ></textarea>
              </div>
              <ValidationError
                prefix="message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="flex justify-center gap-2 cursor-pointer hover:bg-zinc-600 bg-zinc-800 text-white w-full py-3 font-bold rounded-md text-sm md:text-base"
            >
              <IoIosSend className="w-auto h-5 md:h-6" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
