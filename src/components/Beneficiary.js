import React, { Component} from 'react'
import Sidebar from '../Sidebar/SidebarContainer'

class Beneficiary extends Component{
    constructor(props){
        super(props)
    }

    render(){
        var userData = JSON.parse(localStorage.getItem('UserData'))
        return(
            <div>
                <h1>Beneficiary page</h1>
                <h2>Hello {userData.name}</h2>
                <Sidebar />
            </div>
        )
    }
}

export default Beneficiary