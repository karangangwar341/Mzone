import React, { Component } from 'react';
import Categories from './Categories';
import Home from './Home';
import Player from './Player';

export default class Right extends Component {
  render() {
    return (
      <div className="flex flex-col w-3/5 h-screen pt-2 pb-1 pr-1">
       <Categories/>
       <Home/>
       <Player/>
      </div>
    );
  }
}
