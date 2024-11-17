import React from "react";
import Homepage from "../Homepage/Homepage";
import Member from "../Member/Member";
import Video from "../Video/Video";
import Content from "../Content/Content";

const Layout = () => {
  return (
    <div className="w-full font-Poppins">
      <div className="max-full mx-auto bg-gradient-to-tr from-indigo-700 to-sky-400 flex flex-col items-center justify-center gap-10 overflow-x-hidden">
        <Homepage />
        <Member />
        <Video />
        <Content />
      </div>
    </div>
  );
};

export default Layout;
