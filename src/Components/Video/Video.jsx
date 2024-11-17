import React from "react";
import sample from "../../assets/Video/sample.mp4";

const Video = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center p-10">
      <video
        src={sample}
        controls
        className="w-full h-full object-cover object-center border-8  border-blue-100 rounded-xl"
      ></video>
    </div>
  );
};

export default Video;
