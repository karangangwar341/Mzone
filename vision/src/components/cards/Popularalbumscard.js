import React, { Component } from "react";
import { FaHeart, FaPlay } from "react-icons/fa";

export default class Popularalbumscard extends Component {
  handleClick = (e) => {
    e.preventDefault();
    const { id, playSong } = this.props;
    localStorage.setItem("currentIndex1", id);
    if (playSong) playSong(id);
  };

  render() {
    const { image, title, artist, numberofsongs, likes } = this.props;

    return (
      <div className="rounded-xl bg-white/10 hover:bg-white/20 focus:bg-white/30 m-1 px-2 py-1 mr-2">
        <img
          src={
            image
              ? image
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_1L0wWKY4jt6CEa80TQ2H8ffRP-AAsyOfgR36xjc6ZQ&s"
          }
          className="rounded-lg w-36 h-32 shadow-inner shadow-white/30"
          alt="album cover"
        />
        <h4 className="text-sm text-left text-white/80 font-medium mt-1">
          {title || "Untitled"}
        </h4>
        <p className="text-xs text-left text-white/70 font-medium pb-3">
          {artist || "Unknown Artist"}
        </p>

        <div className="flex flex-row justify-evenly items-center">
          <p className="text-xs text-white/60">
            {numberofsongs || "12"} tracks
          </p>
          <span className="text-xs text-white/70 font-extrabold pb-2 px-1">•</span>
          <div className="flex items-center text-xs text-white/60 px-1">
            <span>{likes || "0k"}</span>
            <FaHeart className="ml-1" />
          </div>
          <button
            onClick={this.handleClick}
            className="bg-red-500 hover:bg-red-700 text-white font-bold p-1 rounded-full"
          >
            <FaPlay />
          </button>
        </div>
      </div>
    );
  }
}
