import React, { Component } from 'react'
import { FaPlay } from 'react-icons/fa'

 

class Resultcard extends Component {
  render() {
    const { id, image, title, artist, album, playSong } = this.props;
    
 const playSongss = () => {
  localStorage.setItem("currentIndex1", id);
};

    return (
      <div className="bg-white/10 hover:bg-white/20 focus:bg-white/30 text-white/80 w-44 rounded-md justify-between pb-2 mr-2 mb-2 text-xs" onClick={playSongss}>
        <img
          src={image ? image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY-lM3ktguFHXGQ1NsoIgFeT8_qVQPT6yw9aiv3JXyvQ&s"}
          alt="album"
          className="h-28 shadow-xl rounded-md mb-2 w-full"
        />
        <div className='flex flex-col justify-center px-2'>
          <h2 className="pt-1 font-bold">{title ? title : "Untitled"}</h2>
          <p className="text-xs text-white/70">{artist ? artist : "Unknown Artist"} - {album ? album : "Unknown Album"}</p>
        </div>
      </div>
    )
  }
}

export default Resultcard;
