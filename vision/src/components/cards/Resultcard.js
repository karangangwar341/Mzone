import React from "react";
import { FaPlay } from "react-icons/fa";

const Resultcard = ({ id, image, title, artist, album, playSong }) => {
  const handleClick = () => {
    localStorage.setItem("currentIndex1", id);
    if (playSong) playSong(id); // optional callback to trigger song play
  };

  return (
    <div
      className="bg-white/10 flex md:flex-col hover:bg-white/20 md:m-1 focus:bg-white/30 text-white/80 md:w-44 h-16 md:h-44 w-full rounded-md justify-between p-1 md:p-2  mb-2 text-xs cursor-pointer"
      onClick={handleClick}
    >
      <img
        src={
          image
            ? image
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY-lM3ktguFHXGQ1NsoIgFeT8_qVQPT6yw9aiv3JXyvQ&s"
        }
        alt={title || "album cover"}
        className="h-full md:h-28 shadow-xl rounded-md  aspect-square object-cover"
      />
      <div className=" w-full flex flex-col justify-center px-2 ">
        <h2 className="pt-1 font-bold truncate">{title || "Untitled"}</h2>
        <p className="text-xs text-white/70 truncate">
          {artist || "Unknown Artist"} - {album || "Unknown Album"}
        </p>
      </div>
    </div>
  );
};

export default Resultcard;
