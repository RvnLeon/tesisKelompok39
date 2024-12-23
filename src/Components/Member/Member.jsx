import React from "react";
import { motion } from "framer-motion";
import VelineIcon from "../../assets/Image/Veline.jpg";
import ShahlaIcon from "../../assets/Image/Shahla.jpg";
import JethroIcon from "../../assets/Image/Jethro.jpg";
import NindiIcon from "../../assets/Image/Nindi.jpg";
import RevanIcon from "../../assets/Image/Revan.jpg";
import SylviIcon from "../../assets/Image/Sylvi.jpg";

const Member = () => {
  const biodata = [
    {
      nama: "Alexandria Loveline Islamsyah",
      link: "http://velineiyadeh.carrd.co",
      role: "leader",
      icon: VelineIcon,
    },
    {
      nama: "Anindita Aulia Zahra",
      link: "http://nindiedgy.carrd.co",
      role: "member",
      icon: NindiIcon,
    },
    {
      nama: "Jethro Ibrena Bangun",
      link: "http://jetrofanumtax.carrd.co",
      role: "member",
      icon: JethroIcon,
    },
    {
      nama: "Revan Adi Pratama",
      link: "http://revanrizzler.carrd.co",
      role: "member",
      icon: RevanIcon,
    },
    {
      nama: "Shahla Nadine Alamudi",
      link: "http://shahlasigma.carrd.co",
      role: "member",
      icon: ShahlaIcon,
    },
    {
      nama: "Sylvia Febriana Prasetyo",
      link: "http://sylviskibidi.carrd.co",
      role: "member",
      icon: SylviIcon,
    },
  ];

  // Pisahkan anggota leader dan member
  const leader = biodata.filter((person) => person.role === "leader");
  const members = biodata.filter((person) => person.role === "member");

  return (
    <div className="h-screen w-full flex flex-col">
      <div className="w-full h-full">
        <div className="h-full w-full flex justify-center items-center gap-3">
          <div className="border-2 h-[80vh] w-[80vw] p-10 flex justify-center items-center flex-col rounded-xl gap-5 bg-white bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border-gray-100">
            {/* Render Leader */}
            <h2 className="text-4xl font-bold text-white">Leader</h2>
            {leader.map(({ nama, link, icon }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  className="size-32 lg:size-40 xl:size-64 flex justify-center items-center rounded-tr-xl rounded-bl-xl transition duration-500 ease-in-out text-center bg-sky-300 hover:bg-sky-700 hover:text-white font-bold p-5 flex-col gap-2 border-white border-2 text-xl"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 36px rgba(0,0,0,.8)",
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      duration: 0.5,
                    },
                  }}
                  initial={{ opacity: 0, x: -250 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  viewport={{ once: false }}
                >
                  <img src={icon} className="size-16 xl:size-24 rounded-full" />
                  <h1 className="text-sm xl:text-xl">{nama}</h1>
                </motion.div>
              </a>
            ))}
            {/* Judul untuk Member */}
            <h2 className="text-3xl font-bold text-white ">Members</h2>
            {/* Render Member */}
            <div className="flex flex-wrap lg:flex-nowrap lg:flex-row justify-center items-center gap-3">
              {members.map(({ nama, link, icon }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    className="size-32 xl:h-44 xl:w-44 flex justify-center items-center rounded-tr-xl rounded-bl-xl transition duration-500 ease-in-out text-center bg-sky-300 hover:bg-sky-700 hover:text-white font-bold p-5 border-white border-2 flex-col xl:flex-row"
                    initial={{
                      opacity: 0,
                      scale: 0.5,
                      boxShadow: "0 0 36px rgba(0,0,0,.8)",
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      boxShadow: "0 0 0 rgba(0,0,0,.8)",
                    }}
                    transition={{ duration: 0.3, delay: index * 0.2 }}
                    viewport={{ once: false }}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 0 36px rgba(0,0,0,.8)",
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                        duration: 0.5,
                      },
                    }}
                  >
                    <img
                      src={icon}
                      className="size-10 xl:size-20 rounded-full"
                    />
                    <h1 className="text-sm font-bold ">{nama}</h1>
                  </motion.div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
