import React from "react";
import { useInView } from "framer-motion";

const Member = () => {
  const biodata = [
    {
      nama: "Alexandria Loveline Islamsyah",
      link: "https://youtube.com",
    },
    {
      nama: "Anindita Aulia Zahra",
      link: "https://youtube.com",
    },
    {
      nama: "Jethro Ibrena Bangun",
      link: "https://youtube.com",
    },
    {
      nama: "Revan Adi Pratama",
      link: "https://youtube.com",
    },
    {
      nama: "Shahla Nadine Alamudi",
      link: "https://youtube.com",
    },
    {
      nama: "Sylvia Febriana Prasetyo",
      link: "https://youtube.com",
    },
  ];

  return (
    <div className="h-screen w-full flex flex-col">
      <div className="w-full h-full flex justify-center items-center flex-col">
        <div className="w-full">
          <div className="border-2 p-10 h-full w-full  flex flex-col gap-3">
            {biodata.map(({ nama, link }, index) => {
              return (
                <a href={link}>
                  <div
                    key={index}
                    className="h-8 bg-blue-300 flex justify-center items-center rounded-tr-xl rounded-bl-xl transition duration-500 ease-in-out  hover:bg-blue-700 hover:text-white font-bold"
                  >
                    <h1>{nama}</h1>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
        <div className="border-2 p-10 w-full h-64">
          <iframe
            className="h-full w-full rounded-br-2xl rounded-tl-2xl"
            src="https://youtu.be/POETazMpykQ?si=ygZVVwt4p2XmMH2x"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Member;
