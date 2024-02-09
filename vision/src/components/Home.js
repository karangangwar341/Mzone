import React, { Component } from 'react'
import Popularalbums from './Popularalbums'
import Recents from './Recents'

export default class Home extends Component {
  render() {
    return (
      <div className='px-2 mt-2 mx-1'>
        <Popularalbums/>
        <Recents/>
      </div>
    )
  }
}
