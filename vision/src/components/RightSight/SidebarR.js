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
        bg-sidebarc/20 text-center text-white  backdrop-blur-lg 
        pt-6 pb-2  px-2 bg-black/30 rounded-3xl overflow-hidden"
      >
        <Popularartist />
        <MusicQueue />
      </div>
    );
  }
}
