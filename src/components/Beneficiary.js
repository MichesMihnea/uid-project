import React, { Component} from 'react'
import Sidebar from '../Sidebar/SidebarContainer'

class Beneficiary extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h1>Beneficiary page</h1>
                <h2>Hello {localStorage.getItem('Username')}</h2>
                <Sidebar />
            </div>
        )
    }
}

export default Beneficiary