import React, { Component } from "react";

export default class Button1 extends Component {
  render() {
    return (
      <button
        type="button"
        className=" text-gray-900 hover:bg-white/20 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-xs px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        {this.props.buttontext}
      </button>
    );
  }
}
