import React, { Component } from 'react'
import { FaHeart } from 'react-icons/fa'

export default class Recentcard extends Component {
  render() {
    return (
      <div className=" flex flex-row bg-white/10 hover:bg-white/20 focus:bg-white/30 text-white/80 rounded-md justify-between py-1 mr-2 mb-2 text-xs">
        <img
          src={
            this.props.image
              ? this.props.image
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY-lM3ktguFHXGQ1NsoIgFeT8_qVQPT6yw9aiv3JXyvQ&s"
          }
          alt="album"
          className="w-12 h-12 shadow-xl rounded-md ml-1"
        />
        <div className=' px-2'>
        <h2 className="pt-1"><b>{this.props.title ? this.props.title : "Untitled"}</b></h2>
        <p className="">{this.props.artist ? this.props.artist : "Unknown Artist"} - </p>
        </div>
        <p className="py-4">{this.props.album ? this.props.album : "Unknown Album"}</p>
        <button
          className="text-xs  text-white/70 hover:text-white pl-3 pr-3"
          onClick={() => this.props.removeFromQueue(this.props.id)}
        >
          <FaHeart size='1.3rem'/>
        </button>
      </div>
    )
  }
}
