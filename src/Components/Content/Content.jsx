import React from "react";
import { motion } from "framer-motion";

const Content = () => {
  return (
    <div className="h-screen w-screen">
      <div className="h-full w-full flex justify-center p-10 flex-col gap-5">
        <motion.a
          href="https://docs.google.com/document/d/1Z-JGsy2v91F-k2luyEaCJZkk47H7LRUNhaZeQ1x-ZJs/edit?tab=t.0"
          className="h-20 w-full bg-sky-400 border-blue-400 rounded-xl text-2xl text-white flex justify-center items-center font-bold mt-16 p-5"
          target="_blank"
          rel="noopener noreferrer"
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
          transition={{ duration: 0.3, delay: 0.2 }}
          viewport={{ once: false }}
          whileHover={{
            scale: 1.025,
            boxShadow: "0 0 36px rgba(0,0,0,.8)",
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 30,
              duration: 0.5,
            },
          }}
        >
          📃 Our Tesis Paper
        </motion.a>

        <div className="h-full w-full bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100 flex flex-col items-center p-5 gap-5 overflow-scroll">
          <h1 className="text-white text-4xl font-extrabold">PeLaMar</h1>
          <div>
            <p className="text-md xl:text-2xl text-white font-bold">
              Kami sedang merancang penelitian untuk menciptakan solusi
              sederhana dan terjangkau dalam menyediakan air layak minum melalui
              produk bernama PELAMAR (Pengecekan Kelayakan Air Minum Murah
              Meriah). Penelitian ini akan dilakukan di Desa Ciburial, Garut,
              yang memiliki tantangan dalam memastikan kualitas air minum,
              meskipun sumber mata airnya melimpah. Produk PELAMAR dirancang
              untuk menyaring dan menganalisis air dari mata air setempat agar
              dapat dipastikan layak dikonsumsi. Penelitian ini mencakup
              beberapa tahap, yaitu observasi sumber air, pembuatan prototipe
              alat filtrasi, pengujian kualitas air sebelum dan sesudah proses
              filtrasi, serta pelatihan kepada masyarakat tentang penggunaan
              produk dan pentingnya menjaga kebersihan air. Kami berharap
              inovasi ini tidak hanya menjadi solusi praktis bagi masyarakat
              desa dalam mendapatkan akses air minum yang sehat, tetapi juga
              dapat menginspirasi penerapan teknologi serupa di wilayah lain.
              Saat ini kami masih dalam tahap persiapan dan optimis bahwa
              penelitian ini akan membawa dampak positif bagi masyarakat Desa
              Ciburial.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
