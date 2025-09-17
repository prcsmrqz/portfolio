import { useState, useEffect } from "react";
import { CiMail } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdSubject } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { useForm, ValidationError } from "@formspree/react";
import Swal from "sweetalert2";

const Contact = () => {
  const [state, handleSubmit] = useForm("xgvlbaer");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (state.succeeded) {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");

      Swal.fire({
        title: "Success!",
        text: "Your message was submitted.",
        icon: "success",
        confirmButtonText: "OK",
      });
    }
  }, [state.succeeded]);

  return (
    <>
      <h1
        data-aos="fade-down"
        data-aos-delay="100"
        className="text-5xl sm:text-6xl font-black dark:text-gray-100 mb-10 sm:mb-0 leading-tight"
      >
        Contact
      </h1>
      <hr className="w-36 h-1  mx-auto my-2 bg-[#BFBFBF] border-0 rounded-sm md:my-10 dark:bg-gray-400"></hr>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 md:mt-10">
        <div
          data-aos="fade-right"
          data-aos-delay="100"
          className=" flex flex-col justify-center items-center bg-zinc-200/70 dark:bg-white px-4 md:px-12 py-8 shadow-md rounded-lg "
        >
          <div>
            <h2 className="font-bold text-3xl mb-6 lg:-mt-15">Get In Touch</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:gap-5 lg:gap-10 w-full px-4 sm:px-10">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=prcsmrqz09@gmail.com&su=Hello&body=Send%20me%20a%20message."
              target="_blank"
              className="flex items-center gap-4 cursor-pointer hover:underline"
            >
              <CiMail className="text-4xl sm:text-6xl stroke-1" />
              <div className="flex flex-col justify-start items-start sm:min-w-[200px]">
                <h4 className="text-xs sm:text-sm text-gray-700">
                  Send me an email.
                </h4>
                <h1 className="font-bold text-xs sm:text-base">
                  prcsmrqz09@gmail.com
                </h1>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/prcsmrqz"
              target="_blank"
              className="flex items-center gap-4 cursor-pointer hover:underline"
            >
              <FaLinkedin className="text-4xl sm:text-6xl stroke-1" />
              <div className="flex flex-col justify-start items-start sm:min-w-[200px]">
                <h4 className="text-xs sm:text-sm text-gray-700">
                  My LinkedIn account.
                </h4>
                <h1 className="font-bold text-xs sm:text-base">
                  prcsmrqz09@gmail.com
                </h1>
              </div>
            </a>

            <a
              href="https://github.com/prcsmrqz"
              target="_blank"
              className="flex items-center gap-4 cursor-pointer hover:underline"
            >
              <FaGithub className="text-3xl sm:text-6xl stroke-1" />
              <div className="flex flex-col justify-start items-start sm:min-w-[200px]">
                <h4 className="text-xs sm:text-sm text-gray-700">
                  My Github account.
                </h4>
                <h1 className="font-bold text-xs sm:text-base">
                  github.com/prcsmrqz
                </h1>
              </div>
            </a>

            <a
              href="https://www.facebook.com/prcsmrqz"
              target="_blank"
              className="flex items-center gap-4 cursor-pointer hover:underline"
            >
              <FaFacebookSquare className="text-4xl sm:text-6xl stroke-1" />
              <div className="flex flex-col justify-start items-start sm:min-w-[200px]">
                <h4 className="text-xs sm:text-sm text-gray-700">
                  My Facebook account.
                </h4>
                <h1 className="font-bold text-xs sm:text-base">
                  facebook.com/prcsmrqz
                </h1>
              </div>
            </a>
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-delay="100"
          className="mt-10 sm:mt-0 px-6 md:px-12 py-8 rounded-lg shadow-md bg-white dark:bg-zinc-800/80"
        >
          <h2 className="font-bold text-3xl mb-6 dark:text-white">
            Send a Message
          </h2>
          <form onSubmit={handleSubmit} className="text-start dark:text-white">
            <div className="flex flex-col mb-5">
              <label
                htmlFor="name"
                className="text-gray-800 font-semibold mb-1 text-sm md:text-base dark:text-white"
              >
                Name:
              </label>
              <div className="flex gap-2 px-2 py-2 border border-gray-300 rounded-md dark:bg-zinc-800 dark:border-zinc-600">
                <FaUserLarge className="w-auto h-6" />
                <input
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="text-xs sm:text-base w-full focus:outline-none"
                />
              </div>
              <ValidationError
                prefix="Name"
                field="name"
                className="text-xs text-red-400 px-3 pt-2"
                errors={state.errors}
              />
            </div>

            <div className="flex flex-col mb-5">
              <label
                htmlFor="email"
                className="text-gray-800 font-semibold mb-1 text-sm md:text-base dark:text-white"
              >
                Email:
              </label>
              <div className="flex gap-2 px-2 py-1 border border-gray-300 rounded-md dark:bg-zinc-800 dark:border-zinc-600">
                <MdEmail className="w-auto h-6" />
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-xs sm:text-base w-full focus:outline-none"
                />
              </div>
              <ValidationError
                prefix="Email"
                field="email"
                className="text-xs text-red-400 px-3 pt-2"
                errors={state.errors}
              />
            </div>

            <div className="flex flex-col mb-5">
              <label
                htmlFor="subject"
                className="text-gray-800 font-semibold mb-1 text-sm md:text-base dark:text-white"
              >
                Subject:
              </label>
              <div className="flex gap-2 px-2 py-1 border border-gray-300 rounded-md dark:bg-zinc-800 dark:border-zinc-600">
                <MdSubject className="w-auto h-6" />
                <input
                  id="subject"
                  name="subject"
                  placeholder="Project inquiry, collaboration, etc."
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="text-xs sm:text-base w-full focus:outline-none"
                />
              </div>
              <ValidationError
                prefix="Subject"
                field="subject"
                className="text-xs text-red-400 px-3 pt-2"
                errors={state.errors}
              />
            </div>

            <div className="flex flex-col mb-5">
              <label
                htmlFor="message"
                className="text-gray-800 font-semibold mb-1 text-sm md:text-base dark:text-white"
              >
                Message:
              </label>
              <div className="flex gap-2 px-2 py-1 border border-gray-300 rounded-md dark:bg-zinc-800 dark:border-zinc-600">
                <FaMessage className="w-auto h-6" />
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project, requirements, timeline, budget, etc."
                  rows="3"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="text-xs sm:text-base w-full focus:outline-none "
                ></textarea>
              </div>
              <ValidationError
                prefix="Message"
                field="message"
                className="text-xs text-red-400 px-3 pt-2"
                errors={state.errors}
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="flex justify-center gap-2 cursor-pointer hover:bg-zinc-600 bg-zinc-900 text-white w-full py-3 font-bold rounded-md text-sm md:text-base"
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
