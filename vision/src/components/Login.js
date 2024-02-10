import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="w-72 h-72  bg-white/10 rounded-2xl  shadow-xl shadow-white/30">
          {/* Content of the second div */}
          <h2 className="text-xl font-bold text-white/80">Login</h2>
          <form className="w-full p-4">
            <input
              className="w-full rounded-lg px-3 py-1 m-1 text-sm "
              placeholder="your email"
            />
            <input
              className="w-full rounded-lg px-3 py-1 m-1 text-sm "
              placeholder="Password"
              type="password"
            />
            <button className="text-white/60 hover:text-white hover:scale-110">login</button>
          </form>
          <div className="w-full  my-3 p-1 rounded">
            <button className="bg-white/40 text-white px-8 my-1 rounded-xl text-sm py-1 hover:bg-texthover/40 border-1 hover:scale-105 transition-transform">continue with google</button>
            <button className="bg-white/40 text-white px-8 rounded-xl text-sm py-1 hover:bg-texthover/40 border-1 hover:scale-105 transition-transform">continue with facebook</button>
        
          </div>
        </div>
      </div>
    );
  }
}
