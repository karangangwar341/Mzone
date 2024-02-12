import React, { Component } from 'react'
import Recentcard from './Recentcard'

export default class Recents extends Component {
  render() {
    return (
        <div className='mt-6 mb-2'>
        <h1 className='text-xl text-left text-white/80 mb-2 '>Recents</h1>
        <div className=' overflow-auto rounded-lg shadow-md' style={{height: '30vh', 
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
         <Recentcard/>
         <Recentcard/>
         <Recentcard/>
         <Recentcard/>
         <Recentcard/>
         <Recentcard/>
         <Recentcard/>
         <Recentcard/>
        </div>
      </div>
    )
  }
}
