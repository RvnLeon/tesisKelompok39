import React from "react";

const Content = () => {
  return (
    <div className="h-screen w-screen">
      <div className="h-full w-full flex justify-center p-10 flex-col gap-5">
        <a className="h-20 w-full bg-sky-400 border-blue-400 rounded-xl text-2xl text-white flex justify-center items-center font-bold mt-16">
          📃 Our Tesis Paper
        </a>

        <div className="h-full w-full bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100"></div>
      </div>
    </div>
  );
};

export default Content;
