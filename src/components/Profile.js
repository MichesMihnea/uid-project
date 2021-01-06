import React, { Component} from 'react'

class Profile extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h1>Profile page</h1>
                <h2>Hello {this.props.username}</h2>
            </div>
        )
    }
}

export default Profile