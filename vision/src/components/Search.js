import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <div>
        
        
        <div class="flex items-center">
          <input type="text" class="r bg-transparent border-2 border-gray-300 rounded-3xl px-3 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Search..."/>
          <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md ml-2">
            Search
          </button>
        </div>
        
              </div>
    )
  }
}
