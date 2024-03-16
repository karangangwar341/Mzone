import React, { Component } from 'react'
import { Routes } from 'react-router-dom'
import Sidebar from './Sidebar'
import SidebarR from './RightSight/SidebarR'
import Right from './Centerscreen/Right'
export default class Homee extends Component {
  render() {
    return (
        < >
<Sidebar/>
<Right homecontent={this.props.homecontent}/>
<SidebarR/>

</>
    )
  }
}
