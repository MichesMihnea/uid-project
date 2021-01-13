import { PrimaryButton, TextField } from 'office-ui-fabric-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import services from './services.jpg'
import Sidebar from '../Sidebar/SidebarContainer'

function Home() {
    return (
        <div style={{"marginTop": "5%"}}>
        <Sidebar />
        </div>
    )
}

export default Home