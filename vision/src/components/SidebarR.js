import React, { Component } from "react";
import Search from "./Search";
import Popularartist from "./Popularartist";
import MusicQueue from "./MusicQueue";


export default class SidebarR extends Component {
  render() {
    return (
        <div className=" justify-items-center mt-1 w-1/4 ml-2 py-1" style={{height: '98vh', }}>
        <Popularartist/>
        <MusicQueue/>
      </div>
    );
  }
}
