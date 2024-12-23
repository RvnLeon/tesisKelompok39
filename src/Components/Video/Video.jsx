import React from "react";

const Video = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center p-10">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/TadxrBd3WOg?si=rAf_Vkde3Cvms85F"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className=" bg-slate-500 size-full border-blue-100 rounded-xl"
      ></iframe>
    </div>
  );
};

export default Video;
