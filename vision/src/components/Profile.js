import React, { Component } from "react";
import Button1 from "./Button1";

export default class Profile extends Component {
  render() {
    return (
      <div className="w-screen h-screen flex justify-center items-start text-white p-4">
        <div className="m-16 rounded-3xl bg-white/10 shadow-lg shadow-white/20 p-6">
          <form className="flex flex-col">
            <label>Name</label>
            <input
              className="rounded-xl p-1 text-black/80  "
              placeholder="your full name"
              type="text"
              required
            />
            <label>Phone no </label>
            <input
              className="rounded-xl p-1 text-black/80 "
              placeholder="your mobile no"
              type="number"
            />
            <label>choose your profile pic</label>
            <input type="file" className="bg-white/20 rounded-xl  m-2 p-1" />
            <label>Your favourite genere</label>
            <select
              name="fav_genre"
              id=""
              className="rounded-xl px-4 py-2 text-black/70"
            >
              <option value="">Pop</option>
              <option value="">Rock</option>
              <option value="">Jazz</option>
              <option value="">Country</option>
              <option value="">Hip Hop / R&B</option>
              <option value="">Classical</option>
              <option value="">Electronic</option>
            </select>
            <label className="m-2 mt-3"> Describe what you like</label>
            <textarea className="text-black rounded-xl p-2 mb-5">
              like wahat you like to hear or what type of emotions are you into
            </textarea>
            <button
              type="button"
              className=" text-gray-900 hover:bg-white/20 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-xs px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
            Ready to go
            </button>
          </form>
        </div>
      </div>
    );
  }
}
