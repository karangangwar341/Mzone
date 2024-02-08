
import React, { Component } from 'react'
import Button1 from './Button1'

export default class Categories extends Component {
  render() {
    return (
      <div className='flex-col'>
        <Button1 buttontext="Music"/>
        <Button1 buttontext="Podcasts"/>
        <Button1 buttontext="Bhajans"/>
        
        <Button1 buttontext="Poetries"/>
      </div>
    )
  }
}
