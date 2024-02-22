import React, { Component } from "react";
import { FaHeart, FaPlay } from "react-icons/fa";

export default class Popularalbumscard extends Component {
  render() {
    return (
      <div className="rounded-xl bg-white/10 hover:bg-white/20 focus:bg-white/30  m-1 px-2 py-1 just   mr-2 ">
        <img
          src={
            this.props.image
              ? this.props.image
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_1L0wWKY4jt6CEa80TQ2H8ffRP-AAsyOfgR36xjc6ZQ&s"
          }
          className="rounded-lg w-36 h-32 shadow-inner shadow-white/30"
          alt="image"
        />
        <h4 className="text-sm text-left text-white/80 font-medium mt-1 ">
          {this.props.title ? this.props.title : "Untitled"}
        </h4>
        <p className="text-xs text-left text-white/70 font-medium pb-3">
          {this.props.artist ? this.props.artist : "unknown"}
        </p>

        <div className="flex flex-row  justify-evenly">
          <p className="text-xs text-white/60 ">
            {this.props.numberofsongs ? this.props.numberofsongs : "12 "} tracks
          </p>
          <p className="text-xs text-white/70 font-extrabold pb-2 px-1 ">.</p>
          <p className="text-xs flex text-white/60 px-1">
          <div> {this.props.likes ? this.props.likes : "0k "}</div> <div className="p-1"><FaHeart/></div>
          </p>
          <button
            onClick={(e) => this.props.handleClick(e)}
            className="bg-red-500 hover:bg-red-700  text-white font-bold pl-4 pb-1 rounded"
          >
            <FaPlay/>
          </button>
        </div>
      </div>
    );
  }
}
