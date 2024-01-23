import React from "react";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <section className="min-h-[100vh] grid bg-violet-radial">
      <div className="text-center h-full flex justify-center items-center text-white">
        <h1 className="[&_span]:inline-block text-6xl">
          <motion.span
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            This is a simple
          </motion.span>
          <br />
          <motion.span
            className="text-7xl"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Framer motion
          </motion.span>
          <br />
          <motion.span
            className="text-5xl"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Showcase
          </motion.span>
        </h1>
      </div>
    </section>
  );
};

export default Intro;
