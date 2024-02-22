import React, { Component } from 'react'
import { FaSearch } from 'react-icons/fa'

export default class Search extends Component {
  render() {
    return (
      <div>
        
        
        <div class="flex justify-items-end border-2 rounded-xl pr-3 border-white/60 focus:border-white mr-1">
          <input type="text" class="w-full border-0 bg-white/0 border-gray-300 rounded-lg px-3 py-1 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Search..."/>
          <button class="bg-blue-500 hover:bg-blue-600 text-white hover:scale-105 font-semi-bold p-2 rounded-md ml-2">
            <FaSearch/>
          </button>
        </div>
        
              </div>
    )
  }
}
