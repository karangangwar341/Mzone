import React, { Component } from 'react'
import { FaPlay } from 'react-icons/fa'

class ResultCard2 extends Component {
  render() {
    const { image, title, artist, album, playSong } = this.props;

    return (
      <div className="w-full flex bg-white/10 hover:bg-white/20 focus:bg-white/30 text-white/80 rounded-md justify-between  mr-2 mb-2 text-xs" onClick={playSong}>
        <img
          src={image ? image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY-lM3ktguFHXGQ1NsoIgFeT8_qVQPT6yw9aiv3JXyvQ&s"}
          alt="album"
          className="h-14 w-14 shadow-xl rounded-md m-1"
        />
        <div className='flex flex-col justify-center px-2'>
          <h2 className="pt-1 font-bold">{title ? title : "Untitled"}</h2>
          <p className="text-xs text-white/70">{artist ? artist : "Unknown Artist"} - {album ? album : "Unknown Album"}</p>
        </div>
      </div>
    )
  }
}

export default ResultCard2;
