import React, { Component} from 'react'
import Sidebar from '../Sidebar/SidebarContainer'

class Provider extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h1>Provider page</h1>
                <h2>Hello {localStorage.getItem('Username')}</h2>
                <Sidebar />
            </div>
        )
    }
}

export default Provider