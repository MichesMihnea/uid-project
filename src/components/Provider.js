import React, { Component} from 'react'
import Sidebar from '../Sidebar/SidebarContainer'
import { NavLink } from 'react-router-dom'

class Provider extends Component{
    constructor(props){
        super(props)
    }

    render(){
        var userData = JSON.parse(localStorage.getItem('UserData'))
        return(
            <div>
                <h1>Provider page</h1>
                <h2>Hello {userData.name}</h2>
                <NavLink to="/feed">
                    Check out your feed?
                </NavLink>
                <Sidebar />
            </div>
        )
    }
}

export default Provider