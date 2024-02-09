import React, { Component } from "react";
import Popularalbumscard from "./Popularalbumscard";

export default class Popularalbums extends Component {
  render() {
    return (
        <div>

<h1 className='text-xl text-left text-white/80 mb-2 px-1 '>Popular Albums</h1>
        <div  className="flex flex-wrap justify-start">

        <Popularalbumscard />
        <Popularalbumscard />
        <Popularalbumscard />
        <Popularalbumscard />
      </div>
      </div>
    );
  }
}
