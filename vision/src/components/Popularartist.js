import React, { useState, Component } from "react";
import Popularartistcard from "./Popularartistcard";
const Popularartist = () => {
  const [popularArtists, setPopularArtists] = useState([]);
  return (
    <div className="mt-2 ">
      <h1 className="text-xl text-left text-white/80 ">Popular Artists</h1>
      <div
        className="flex flex-wrap justify-start overflow-y-scroll"
        style={{
          height: "55vh",
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
        <Popularartistcard  />
        <Popularartistcard />
        <Popularartistcard />

        <Popularartistcard />
        <Popularartistcard />
        <Popularartistcard />
        <Popularartistcard />
        <Popularartistcard />
        <Popularartistcard />

        <Popularartistcard />
        <Popularartistcard />
        <Popularartistcard />
      </div>
    </div>
  );
};
export default Popularartist;
