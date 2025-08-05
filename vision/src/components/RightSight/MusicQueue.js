import React, { Component } from "react";
import Queuecard from "../cards/Queuecard";

export default class MusicQueue extends Component {
  render() {
    return (
      <div className="mt-8">
        <h1
          className="text-xl text-left      text-white/0 md:text-white/80 hover:text-white/80

mb-2 "
        >
          Next in queue
        </h1>
        <div
          className="h-52 overflow-auto rounded-lg shadow-md"
          style={{
            height: "40vh",
            "--scrollbar-bg": "#ffffff", // Replace with your background color
            "--scrollbar-thumb": "#cccccc", // Replace with your thumb color
            scrollbarWidth: "none", // For Firefox
            msOverflowStyle: "none", // For Internet Explorer and Edge
            "&::-webkit-scrollbar": {
              // For Chrome, Safari, and Opera
              width: "0px",
              background: "var(--scrollbar-bg)",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "var(--scrollbar-thumb)",
            },
          }}
        >
          <Queuecard />
          <Queuecard />
          <Queuecard />
          <Queuecard />
          <Queuecard />
        </div>
      </div>
    );
  }
}
