import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-10 md:pt-28 px-6 md:px-24 absolute bg-gradient-to-r from-black text-white">
      <h1 className="text-3xl md:text-6xl font-bold text-white ">{title}</h1>
      <p className="hidden md:inline-block py-2 text-lg w-1/3 text-white">
        {overview}
      </p>
      <div className="my-4 md:m-0">
        <button className="bg-white text-black py-2 md:py-2 px-6 md:px-8 text-lg rounded-lg hover:bg-opacity-80">
          ▶️play
        </button>
        <button className="hidden md:inline-block mx-2 bg-gray-500 text-white py-2 px-8 text-lg bg-opacity-20 rounded-lg hover:bg-opacity-80">
          ☺️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
