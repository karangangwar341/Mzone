
import React, { Component } from 'react'
import Button1 from '../Button1'

export default class Categories extends Component {
  render() {
    return (
      <div className='flex-col overflow-scroll'
      style={{
        
        "--scrollbar-bg": "#ffffff",
        "--scrollbar-thumb": "#cccccc",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        "&::-webkit-scrollbar": {
          width: "0px",
          background: "var(--scrollbar-bg)",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "var(--scrollbar-thumb)",
          
        },
      }}>
        <Button1 buttontext="Music"/>
        <Button1 buttontext="Podcasts"/>
        <Button1 buttontext="Bhajans"/>
        
        <Button1 buttontext="Poetries"/>
      </div>
    )
  }
}
