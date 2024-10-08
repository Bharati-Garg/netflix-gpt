import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-36 px-24 absolute bg-gradient-to-r from-black text-white">
      <h1 className="text-6xl font-bold text-white">{title}</h1>
      <p className="py-2 text-lg w-1/3 text-white">{overview}</p>
      <div className="">
        <button className="bg-white text-black py-2 px-8 text-lg rounded-lg hover:bg-opacity-80">
          ▶️play
        </button>
        <button className=" mx-2 bg-gray-500 text-white py-2 px-8 text-lg bg-opacity-20 rounded-lg hover:bg-opacity-80">
          ☺️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
