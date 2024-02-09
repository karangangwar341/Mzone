import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="h-screen p-2  w-1/5 items-center">
        <aside className="Sidebar m-1 fixed w-1/6 pr-2 h-fit flex flex-col bg-sidebarc/20 text-center text-white pt-6 pb-2 pl-2 rounded-3xl transition-transform ">
          <div className="flex flex-col items-center justify-start flex-grow">
            <h1 className="font-semibold text-3xl text-white/80 mb-16 top-2 hover:scale-110 transition-transform">
              mzone
            </h1>
            <nav className="flex flex-col space-y-2">
              <button className="w-full text-white/80 hover:bg-white/80 hover:text-texthover hover:scale-105 transition-transform rounded-lg p-2">
                Home
              </button>
              <button className="w-full text-white/80 hover:bg-white/80 hover:text-texthover hover:scale-105 transition-transform rounded-lg p-2">
                Search
              </button>
              <button className="w-full text-white/80 hover:bg-white/80 hover:text-texthover hover:scale-105 transition-transform rounded-lg p-2">
                Playlist
              </button>
              <button className="w-full text-white/80 hover:bg-white/80 hover:text-texthover hover:scale-105 transition-transform rounded-lg p-2">
                Notifications
              </button>
              <button className="w-full text-white/80 hover:bg-white/80 hover:text-texthover hover:scale-105 transition-transform rounded-lg p-2">
                Premium content
              </button>
            </nav>
          </div >
          <div className="mt-44">
            <p className="text-xs text-yellow p-2 underline">
              dowmload app now
            </p>
            <div className="profile bg-white bg-opacity-20 w-full p-1  flex items-center rounded-xl text-xs text-white/80 justify-evenly">
              <img className="mr-2 rounded-full h-12 w-12" src="https://www.shutterstock.com/image-photo/close-head-shot-confident-serious-260nw-1481322794.jpg" alt="DP" />
              <p>Karan Gangwar</p>
              <p className="text-xl font-semibold hover:text-white  pt-2 text-white/60">^</p>
            </div>
          </div>
        </aside>
      </div>
    );
  }
}
