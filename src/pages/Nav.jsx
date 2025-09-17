import { useState } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";

function Nav({ isDarkMode, setIsDarkMode }) {
  const [active, setActive] = useState("#prcsmrqz"); // default active

  const links = [
    { href: "#about", label: "About" },
    { href: "#technology-stack", label: "Stack" },
    { href: "#project", label: "Project" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <div className="flex">
        <a
          href="#prcsmrqz"
          onClick={() => setActive("#prcsmrqz")}
          className="text-[12px] sm:text-xs lg:text-xl font-black text-gray-800 dark:text-white hover:-translate-y-1.5 transition-transform transform"
        >
          {"</prcsmrqz>"}
        </a>
      </div>
      <div
        className={`p-2 hover:rounded-md cursor-pointer ${
          isDarkMode
            ? "hover:bg-gray-100/20 hover:text-gray-600"
            : "hover:bg-gray-400/20 hover:text-gray-500"
        }`}
      >
        {isDarkMode ? (
          <MdOutlineDarkMode
            className="text-gray-200 text-xl lg:text-2xl"
            onClick={() => setIsDarkMode(false)}
          />
        ) : (
          <BsSun
            className="text-gray-800 text-xl lg:text-2xl"
            onClick={() => setIsDarkMode(true)}
          />
        )}
      </div>
      <div className="flex items-center gap-2 lg:gap-6">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setActive(link.href)}
            className={`text-[10px] sm:text-xs lg:text-xl transition-transform hover:-translate-y-1.5 ${
              active === link.href
                ? "text-black dark:text-white font-bold underline"
                : "text-gray-800 dark:text-white font-medium"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}

export default Nav;
