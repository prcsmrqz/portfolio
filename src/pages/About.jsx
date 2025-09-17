const About = () => {
  return (
    <>
      <h1 className="text-5xl sm:text-6xl font-black dark:text-gray-100 mb-10 sm:mb-0">
        About Me
      </h1>
      <hr className="w-36 h-1 mx-auto my-2 bg-[#BFBFBF] border-0 rounded-sm md:my-10 dark:bg-gray-400"></hr>
      <div
        data-aos="fade-down"
        data-aos-delay="200"
        className="flex flex-col items-center justify-center max-w-5xl sm:text-xl mt-10 sm:mt-5 mx-auto"
      >
        <p className="text-black dark:text-zinc-200 text-justify">
          I’m <b>Precious Marquez</b>, currently a{" "}
          <b>Junior Software Engineer</b> with{" "}
          <b>less than a year of professional experience</b>, but a strong
          passion for <b>learning</b> and <b>growing</b> in the field of
          software development. I enjoy taking on new challenges, solving
          problems, and building efficient, user-friendly applications that have
          a real impact.
        </p>
        <br />
        <p className="text-black dark:text-zinc-200 text-justify">
          As I advance in my career, I’m eager to <b>contribute</b> to
          meaningful projects, <b>expand</b> my technical knowledge, and{" "}
          <b>develop</b> solutions that combine <b>creativity</b>,{" "}
          <b>functionality</b>, and <b>reliability</b>. My goal is to grow into
          a well-rounded software engineer while delivering high-quality work
          every step of the way.
        </p>
      </div>
    </>
  );
};

export default About;
