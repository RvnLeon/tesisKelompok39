import React from "react";
import { FaInstagram } from "react-icons/fa";
import { motion, transform } from "framer-motion";
import ig from "../../assets/Image/Instagram.jpg";
import Profile from "../../assets/Image/Profile.jpg";
import X from "../../assets/Image/X.png";
import Gmail from "../../assets/Image/Gmail.png";

const sosmedBtn = {
  hover: {
    textShadow: "0px 0px 16px rgb(0,0,0)",
    boxShadow: "0px 0px 16px rgb(0,0,0)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      duration: 0.5,
    },
  },
};

const Homepage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-6 p-6">
      <motion.img
        src={Profile}
        className="rounded-3xl h-96 w-96"
        initial={{ transform: "translateY(-100px)" }}
        transition={{
          ease: "easeIn",
          duration: 0.3,
        }}
        whileInView={{ transform: "translateY(0)" }}
        viewport={{ once: false }}
      />

      <div className=" flex justify-center items-center gap-5 flex-col">
        <motion.h1
          className="text-4xl lg:text-6xl text-white font-bold"
          initial={{ transform: "scale(0.25)" }}
          viewport={{ once: false }}
          whileInView={{ transform: "scale(1)" }}
          transition={{ ease: "easeIn", duration: 0.3, delay: 0.1 }}
        >
          🙋🏻‍♂️Hey, Everyone🙋🏻‍♀️
        </motion.h1>
        <motion.h1
          className="text-4xl lg:text-6xl text-white font-bold"
          initial={{ transform: "scale(0.25)" }}
          viewport={{ once: false }}
          whileInView={{ transform: "scale(1)" }}
          transition={{ ease: "easeIn", duration: 0.3, delay: 0.2 }}
        >
          Kelompok 39
        </motion.h1>
      </div>

      <div className="sosmed flex flex-row justify-center items-center h-26 w-72 gap-8">
        <motion.a
          href=""
          className="block size-14 xl:size-16 rounded-xl"
          variants={sosmedBtn}
          whileHover="hover"
          initial={{ transform: "translateX(-100px)" }}
          transition={{ ease: "easeIn", duration: 0.3, delay: 0.2 }}
          whileInView={{ transform: "translateX(0)" }}
          viewport={{ once: false }}
        >
          <img
            src={ig}
            className="object-cover object-center transition-all duration-200 ease-in-out size-full rounded-xl"
          />
        </motion.a>
        <motion.a
          href=""
          className="block size-14 xl:size-16 rounded-xl"
          variants={sosmedBtn}
          whileHover="hover"
          initial={{ transform: "translateY(100px)" }}
          transition={{
            ease: "easeIn",
            duration: 0.3,
            delay: 0.3,
          }}
          whileInView={{ transform: "translateY(0)" }}
          viewport={{ once: false }}
        >
          <img
            src={X}
            className="object-cover object-center transition-all duration-200 ease-in-out size-full rounded-xl"
          />
        </motion.a>
        <motion.a
          href=""
          className="block size-14 xl:size-16 rounded-xl bg-white"
          variants={sosmedBtn}
          whileHover="hover"
          initial={{ transform: "translateX(100px)" }}
          transition={{
            ease: "easeIn",
            duration: 0.3,
            delay: 0.5,
          }}
          whileInView={{ transform: "translateX(0)" }}
          viewport={{ once: false }}
        >
          <img
            src={Gmail}
            className="transition-all duration-200 ease-in-out size-full rounded-xl flex justify-center items-center"
          />
        </motion.a>
      </div>
    </div>
  );
};

export default Homepage;
