import React from "react";
import { FaInstagram } from "react-icons/fa";
import { motion, transform } from "framer-motion";

const sosmedBtn = {
  hover: {
    textShadow: "0px 0px 16px rgb(255,255,255)",
    boxShadow: "0px 0px 16px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

const Homepage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-6">
      <motion.img
        src="https://placehold.co/400"
        className="rounded-3xl h-96 w-96"
        initial={{ transform: "translateY(-100px)" }}
        transition={{
          ease: "easeIn",
          duration: 1,
        }}
        animate={{ transform: "translateY(0)" }}
      />

      <motion.h1
        className="text-6xl text-white font-bold"
        initial={{ transform: "scale(0.25)" }}
        transition={{ ease: "easeIn", duration: 1 }}
        animate={{ transform: "scale(1)" }}
      >
        Kelompok 39
      </motion.h1>

      <div className="sosmed flex flex-row h-26 w-72 gap-8">
        <motion.button
          className="bg-gradient-to-tl from-purple-600 bg-amber-400 transition-all duration-200 ease-in-out h-20 w-20 rounded-full flex justify-center items-center"
          variants={sosmedBtn}
          whileHover="hover"
          initial={{ transform: "translateX(-100px)" }}
          transition={{ ease: "easeIn", duration: 1 }}
          animate={{ transform: "translateX(0)" }}
        >
          <FaInstagram className="text-6xl text-white" />
        </motion.button>
        <motion.button
          className="bg-gradient-to-tl from-purple-600 to-amber-400 transition-all duration-200 ease-in-out h-20 w-20 rounded-full flex justify-center items-center"
          variants={sosmedBtn}
          whileHover="hover"
          initial={{ transform: "translateY(100px)" }}
          transition={{
            ease: "easeIn",
            duration: 1,
          }}
          animate={{ transform: "translateY(0)" }}
        >
          <FaInstagram className="text-6xl text-white" />
        </motion.button>
        <motion.button
          className="bg-gradient-to-tl from-purple-600 to-amber-400 transition-all duration-200 ease-in-out h-20 w-20 rounded-full flex justify-center items-center"
          variants={sosmedBtn}
          whileHover="hover"
          initial={{ transform: "translateX(100px)" }}
          transition={{ ease: "easeIn", duration: 1 }}
          animate={{ transform: "translateX(0)" }}
        >
          <FaInstagram className="text-6xl text-white" />
        </motion.button>
      </div>
    </div>
  );
};

export default Homepage;
