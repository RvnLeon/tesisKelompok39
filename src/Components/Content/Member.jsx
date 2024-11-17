import React from "react";
import { useInView } from "framer-motion";

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

  return (
    <div className="h-screen w-full flex flex-col">
      <div className="w-full h-full flex justify-center items-center flex-col">
        <div className="w-full">
          <div className="border-2 p-10 h-full w-full flex justify-center itmes-center gap-3">
            {biodata.map(({ nama, link, role }, index) => {
              return (
                <a href={link}>
                  <div
                    key={index}
                    className="h-48 w-28 flex justify-center items-center rounded-tr-xl rounded-bl-xl transition duration-500 ease-in-out text-center bg-blue-300 hover:bg-blue-700 hover:text-white font-bold"
                  >
                    <h1>{nama}</h1>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
