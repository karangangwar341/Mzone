import React from 'react';
import { FaHeart } from 'react-icons/fa';

const RecentCard = ({ image, title, artist, album, id, removeFromQueue }) => {
  return (
    <div className="flex flex-row bg-white/10 hover:bg-white/20 text-white/80 rounded-md justify-between py-1 mr-2 mb-2 text-xs">
      <img
        src={image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY-lM3ktguFHXGQ1NsoIgFeT8_qVQPT6yw9aiv3JXyvQ&s"}
        alt="album"
        className="w-12 h-12 shadow-xl rounded-md ml-1"
      />
      <div className='px-2'>
        <h2 className="pt-1 font-bold">{title || "Untitled"}</h2>
        <p>{artist || "Unknown Artist"}</p>
      </div>
      <p className="py-4">{album || "Unknown Album"}</p>
      <button
        className="text-xs text-white/70 hover:text-white pl-3 pr-3"
        onClick={() => removeFromQueue(id)}
      >
        <FaHeart size="1.3rem" />
      </button>
    </div>
  );
};

export default RecentCard;
