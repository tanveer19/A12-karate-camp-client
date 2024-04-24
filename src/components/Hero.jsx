import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const variants = {
  hidden: { opacity: 0, x: -200 },
  visible: { opacity: 1, x: 0 },
};
const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });
  return (
    <div ref={ref}>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/images/hero.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content font-sans">
          <div className="max-w-md">
            <motion.h3
              className="text-4xl font-bold mx-auto w-fit m-8 border-y-8 border-cyan-500 border-x-0"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              KARATE INFO
            </motion.h3>
            <motion.p
              className="mb-5"
              initial={{ opacity: 0, x: 200 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              Karate is a traditional Japanese martial art that has gained
              worldwide recognition and popularity for its focus on discipline,
              self-defense, and physical fitness. The word "karate" itself means
              "empty hand" in Japanese, emphasizing the art's primary philosophy
              of unarmed combat.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
