import { PrimaryButton, TextField } from 'office-ui-fabric-react'
import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import Beneficiary from '../components/Beneficiary'
import Provider from '../components/Provider'
import { Link } from 'react-router-dom';

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            success: -1,
            type: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        var username = document.getElementById("username").value
        var password = document.getElementById("password").value
        if(username == "Andrei" && password == "pass"){
            this.setState({success: 1, type: "provider"})
            localStorage.setItem('LogStatus', "logged")
            localStorage.setItem('Username', username)
            localStorage.setItem('Type', "provider")
        }else if(username == "Mihnea" && password == "pass"){
            this.setState({success: 1, type: "beneficiary"})
            localStorage.setItem('LogStatus', "logged")
            localStorage.setItem('Username', username)
            localStorage.setItem('Type', "beneficiary")
        }
        else{
            this.setState({success: 0})
        }
    }

    render(){
        let renderProfile = 
            <div className="login-wrapper">
                <h2>Login</h2>
                <div className="field-wrapper">
                    <TextField id="username" placeholder="Username..." type="text" />
                </div>
                <div className="field-wrapper">
                    <TextField id="password" placeholder="Password..." type="password" />
                </div>
                <div className="field-wrapper">
                    <PrimaryButton className="login-button" onClick={() => this.handleSubmit()}>Login</PrimaryButton>
                </div>
                <div className="link-wrapper">
                    <NavLink to={"/registration"}
                        style={{ color: "blue", textDecoration: "none" }}
                    >
                        <p className="link">Don't have an account? Register!</p>
                    </NavLink>
                </div>
            </div>  
        if(this.state.success == 0){
            renderProfile = 
            <div className="login-wrapper">
                <h2>Login</h2>
                <div className="field-wrapper">
                    <TextField id="username" placeholder="Username..." type="text" />
                </div>
                <div className="field-wrapper">
                    <TextField id="password" placeholder="Password..." type="password" />
                </div>
                <div className="field-wrapper">
                    <PrimaryButton className="login-button" onClick={() => this.handleSubmit()}>Login</PrimaryButton>
                </div>
                <div className="link-wrapper">
                    <NavLink to={"/registration"}
                        style={{ color: "blue", textDecoration: "none" }}
                    >
                        <p className="link">Don't have an account? Register!</p>
                    </NavLink>
                </div>
                <h2>Wrong credentials, try again</h2>
            </div> 
        }else if(this.state.success == 1){
            if(this.state.type == "provider"){
                renderProfile = window.location.href = '/provider'
            }else if(this.state.type == "beneficiary"){
                renderProfile = window.location.href = '/beneficiary'
            }else{
                alert("Type error")
            }
        }

        return(
            <div>             
                {renderProfile}
            </div>           
        )
    }
}

export default Login