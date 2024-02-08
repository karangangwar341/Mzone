import React, { Component } from 'react';
import Categories from './Categories';

export default class Right extends Component {
  render() {
    return (
      <div className="flex flex-col w-3/5 h-screen bg-white/10 p-3">
       <Categories/>
      </div>
    );
  }
}
