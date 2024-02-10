import React, { Component } from 'react'
import { Routes } from 'react-router-dom'
import Sidebar from './Sidebar'
import SidebarR from './SidebarR'
import Right from './Right'
export default class Homee extends Component {
  render() {
    return (
        <div className="App flex flex-row justify-center">
<Sidebar/>
<Right/>
<SidebarR/>

</div>
    )
  }
}
