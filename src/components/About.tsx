import { motion } from "framer-motion";
import { GridBackground } from "./ui/grid-background";

export default function About() {
  return (
    <div>
      <div className="about-section relative py-8 px-6 flex flex-col items-center justify-center text-center bg-muted/50">
      <GridBackground />
        <motion.h2
          className="text-4xl font-bold mb-12 fonrob"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <motion.div
            className="image-section md:w-1/2 flex justify-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://chedo.in/wp-content/uploads/2022/07/front-image-min-1-min.png"
              alt="About Me"
              className="about-image w-3/4 h-auto rounded-lg transform hover:scale-105 transition-all duration-300"
            />
          </motion.div>
          <motion.div
            className="text-section md:w-1/2 text-center md:text-left border-t-4 border-l-4 border-blue-300 pt-6 pl-6 rounded-xl"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="font-semibold text-4xl md:text-6xl text-blue-300">
              <span className="text-primary">I'm Akshat</span>, a Web developer
            </span>
            <p className="about-description md:text-lg text-base mt-6 md:pr-[20%]">
              I'm a <span className="font-semibold">Web Developer</span> with a
              passion for creating dynamic and responsive web applications. I
              specialize in the <span className="font-semibold">MERN</span>{" "}
              stack, and I love building innovative and scalable solutions. My
              focus is always on delivering high-quality user experiences
              through code that is clean, maintainable, and efficient.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
