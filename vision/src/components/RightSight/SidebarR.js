import React, { Component } from "react";
import Search from "../Search";
import Popularartist from "./Popularartist";
import MusicQueue from "./MusicQueue";

export default class SidebarR extends Component {
  render() {
    return (
      <div
        className="justify-items-center mt-1 lg:w-1/4 ml-2 py-1 md:relative absolute right-0 transition-all duration-300 ease-in-out 
        w-1 hover:w-64 md:hover:w-1/4 
        m-1 flex flex-col 
        h-screen
        bg-sidebarc/20 text-center text-white   
        
        text-white/0 md:text-white/80 hover:text-white/80


        backdrop-blur-lg md:backdrop-blur-none 
        pt-6 pb-2  pl-2  bg-black/30 md:bg-black/10 rounded-3xl overflow-hidden"
      >
        <Popularartist />
        <MusicQueue />
      </div>
    );
  }
}
