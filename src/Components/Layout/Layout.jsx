import React from "react";
import Homepage from "../Homepage/Homepage";
import Member from "../Member/Member";
import Video from "../Video/Video";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";
import CountdownTimer from "../Countdown/Countdown";

const Layout = () => {
  return (
    <div className="w-full font-Poppins">
      <div className="max-full mx-auto bg-gradient-to-b from-sky-400 to-white flex flex-col items-center justify-center gap-10 overflow-x-hidden">
        <Homepage />
        <Member />
        <Video />
        <Content />
        <CountdownTimer />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
