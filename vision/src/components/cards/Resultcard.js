import React from 'react';
import { FaPlay } from 'react-icons/fa';

const Resultcard = ({ id, image, title, artist, album, playSong }) => {
  const handleClick = () => {
    localStorage.setItem("currentIndex1", id);
    if (playSong) playSong(id); // optional callback to trigger song play
  };

  return (
    <div
      className="bg-white/10 hover:bg-white/20 focus:bg-white/30 text-white/80 w-44 rounded-md justify-between pb-2 mr-2 mb-2 text-xs cursor-pointer"
      onClick={handleClick}
    >
      <img
        src={
          image
            ? image
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY-lM3ktguFHXGQ1NsoIgFeT8_qVQPT6yw9aiv3JXyvQ&s"
        }
        alt={title || "album cover"}
        className="h-28 shadow-xl rounded-md mb-2 w-full object-cover"
      />
      <div className="flex flex-col justify-center px-2">
        <h2 className="pt-1 font-bold truncate">{title || "Untitled"}</h2>
        <p className="text-xs text-white/70 truncate">
          {artist || "Unknown Artist"} - {album || "Unknown Album"}
        </p>
      </div>
    </div>
  );
};

export default Resultcard;
