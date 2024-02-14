import React, { Component } from "react";

export default class Popularartistcard extends Component {
  render() {
    return (
      <div className="w-30 mr-2 p-1 bg-white/10 hover:bg-white/30 rounded-xl my-1">
        <img
          src="https://media.istockphoto.com/id/994318634/photo/young-hipster-african-american-rapper-recording-songs-in-music-recording-studio.jpg?s=612x612&w=0&k=20&c=A2iXa5XXStfOQ9477mTTjMc6ml6cCkrPn4Kr9oqECg8="
          alt=""
          className="rounded-xl shadow-xl w-30 hover:scale-105 hover:shadow-lg hover:shadow-white/30"
        />
        <h3 className="text-xs text-white/80  font-semi-bold pb-2 text-gray-700">
          {this.props.name ? this.props.name : "Unknown Artist"}
        </h3>
      </div>
    );
  }
}
