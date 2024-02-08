import React, { Component } from 'react'
import Popularartistcard from './Popularartistcard'

export default class Popularartist extends Component {
  render() {
    return (
      <div className='mt-5 '>
        <h1 className='text-xl text-left text-white/80 mb-2'>Popular Artists</h1>
        <div className='flex flex-row justify-evenly'>
            <Popularartistcard/>
            <Popularartistcard/>
            <Popularartistcard/>
        </div>
        <div className='flex flex-row justify-evenly'>
            <Popularartistcard/>
            <Popularartistcard/>
            <Popularartistcard/>
        </div>
      </div>
    )
  }
}
