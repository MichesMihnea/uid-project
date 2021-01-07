import React, {Component} from 'react'
import avatar from './avatar.png'

class ProfilePage extends Component{

    render(){
        return(
            <div>
                <h1>Profile Page</h1>
                <img src={avatar} style={{"marginTop": "50px", "height" : "200px", "width": "200px"}}/>
                <h3 style={{"marginTop": "50px"}}>Your name is: </h3>
                <h3 style={{"marginTop": "50px"}}>Your email is: </h3>
                <h3 style={{"marginTop": "50px"}}>Your address is: </h3>
                <h3 style={{"marginTop": "50px"}}>Your phone number is: </h3>
            </div>
        )
    }
}

export default ProfilePage