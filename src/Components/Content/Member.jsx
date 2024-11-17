import React from "react";
import { motion } from "framer-motion";

const Member = () => {
  const biodata = [
    {
      nama: "Alexandria Loveline Islamsyah",
      link: "https://youtube.com",
      role: "leader",
    },
    {
      nama: "Anindita Aulia Zahra",
      link: "https://youtube.com",
      role: "member",
    },
    {
      nama: "Jethro Ibrena Bangun",
      link: "https://youtube.com",
      role: "member",
    },
    {
      nama: "Revan Adi Pratama",
      link: "https://youtube.com",
      role: "member",
    },
    {
      nama: "Shahla Nadine Alamudi",
      link: "https://youtube.com",
      role: "member",
    },
    {
      nama: "Sylvia Febriana Prasetyo",
      link: "https://youtube.com",
      role: "member",
    },
  ];

  // Pisahkan anggota leader dan member
  const leader = biodata.filter((person) => person.role === "leader");
  const members = biodata.filter((person) => person.role === "member");

  return (
    <div className="h-screen w-full flex flex-col">
      <div className="w-full h-full">
        <div className="h-full w-full flex justify-center items-center gap-3">
          <div className="border-2 h-[80vh] w-[80vw] p-10 flex justify-center items-center flex-col rounded-xl gap-5 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border-gray-100">
            {/* Render Leader */}
            <h2 className="text-4xl font-bold text-white">Leader</h2>
            {leader.map(({ nama, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  className="h-64 w-64 flex justify-center items-center rounded-tr-xl rounded-bl-xl transition duration-500 ease-in-out text-center bg-blue-300 hover:bg-blue-700 hover:text-white font-bold p-5"
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
                  <h1>{nama}</h1>
                </motion.div>
              </a>
            ))}
            {/* Judul untuk Member */}
            <h2 className="text-3xl font-bold text-white">Members</h2>
            {/* Render Member */}
            <div className="flex flex-row justify-center items-center gap-3">
              {members.map(({ nama, link }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    className="h-48 w-48 flex justify-center items-center rounded-tr-xl rounded-bl-xl transition duration-500 ease-in-out text-center bg-blue-300 hover:bg-blue-700 hover:text-white font-bold p-5"
                    initial={{ opacity: 0, x: 150 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
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
                    <h1>{nama}</h1>
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
