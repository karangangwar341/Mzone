import React, { Component } from 'react';
import Categories from './Categories';
import Home from './Home';
import Player from './Player';
import { audios } from './audios';

export default class Right extends Component {
  render() {
    return (
      <div className="flex flex-col w-3/5 h-fit pt-2 pb-1 pr-1" style={{height: '100vh',  
      '--scrollbar-bg': '#ffffff', // Replace with your background color
      '--scrollbar-thumb': '#cccccc', // Replace with your thumb color
      scrollbarWidth: 'none', // For Firefox
      msOverflowStyle: 'none', // For Internet Explorer and Edge
      '&::-webkit-scrollbar': { // For Chrome, Safari, and Opera
        width: '0px',
        background: 'var(--scrollbar-bg)'
      },
      '&::-webkit-scrollbar-thumb': {
        background: 'var(--scrollbar-thumb)'
      }
    }}>
  <div className=' overflow-auto rounded-lg shadow-md' style={{height: '90vh',  
          '--scrollbar-bg': '#ffffff', // Replace with your background color
          '--scrollbar-thumb': '#cccccc', // Replace with your thumb color
          scrollbarWidth: 'none', // For Firefox
          msOverflowStyle: 'none', // For Internet Explorer and Edge
          '&::-webkit-scrollbar': { // For Chrome, Safari, and Opera
            width: '0px',
            background: 'var(--scrollbar-bg)'
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'var(--scrollbar-thumb)'
          }
        }}>
    <Categories/>
    <Home/>
  </div>
  <Player audios={audios} />
</div>

    );
  }
}