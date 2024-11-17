import React from "react";
import Homepage from "../Hero/Homepage";
import Member from "../Content/Member";

const Layout = () => {
  return (
    <div className="w-full font-Poppins">
      <div className="max-full mx-auto bg-gradient-to-tr from-indigo-700 to-sky-400 flex flex-col items-center justify-center gap-10">
        <Homepage />
        <Member />
      </div>
    </div>
  );
};

export default Layout;
