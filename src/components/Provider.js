import React, { Component} from 'react'
import Sidebar from '../Sidebar/SidebarContainer'
import { NavLink } from 'react-router-dom'

class Provider extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h1>Provider page</h1>
                <h2>Hello {localStorage.getItem('Username')}</h2>
                <NavLink to="/feed">
                    Check out your feed?
                </NavLink>
                <Sidebar />
            </div>
        )
    }
}

export default Provider