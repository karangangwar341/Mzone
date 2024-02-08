import React, { Component } from "react";

export default class Popularartistcard extends Component {
  render() {
    return (
      <div className="w-24 p-1">
        <img
          src="https://media.istockphoto.com/id/994318634/photo/young-hipster-african-american-rapper-recording-songs-in-music-recording-studio.jpg?s=612x612&w=0&k=20&c=A2iXa5XXStfOQ9477mTTjMc6ml6cCkrPn4Kr9oqECg8="
          alt=""
          className="rounded-xl shadow-xl h-20 w-20 my-1"
        />
        <h3 className="text-xs text-white/80  font-semi-bold pb-2 text-gray-700">
          {this.props.name ? this.props.name : "Unknown Artist"}
        </h3>
      </div>
    );
  }
}
