import React, {Component} from 'react'
import avatar from './avatar.png'

class ProfilePage extends Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(){
        window.location.href = '/provider'
    }

    render(){
        var userData = JSON.parse(localStorage.getItem('UserData'))
        return(
            <div>
                <h1>Profile Page</h1>
                <img src={avatar} style={{"marginTop": "50px", "height" : "200px", "width": "200px"}}/>
                <h3 style={{"marginTop": "50px"}}>Your name is: {userData.name}</h3>
                <h3 style={{"marginTop": "50px"}}>Your email is: {userData.email}</h3>
                <h3 style={{"marginTop": "50px"}}>Your password is: {userData.phone}</h3>
                <h3 style={{"marginTop": "50px"}}>Your phone number is: {userData.phone}</h3>
                <h3 style={{"marginTop": "50px"}}>Your account type is: {userData.type}</h3>
                <h3 style={{"marginTop": "50px"}}>Your description is: {userData.description}</h3>
                <button type='button' onClick={() => this.handleSubmit()}>Back</button>
            </div>
        )
    }
}

export default ProfilePage