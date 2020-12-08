import { PrimaryButton, TextField } from 'office-ui-fabric-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Login() {
    return (
        <div className="login-wrapper">
            <h2>Login</h2>
            <div className="field-wrapper">
                <TextField placeholder="Username..." type="text" />
            </div>
            <div className="field-wrapper">
                <TextField placeholder="Password..." type="password" />
            </div>
            <div className="field-wrapper">
                <PrimaryButton className="login-button">Login</PrimaryButton>
            </div>
            <div className="link-wrapper">
                <NavLink to={"/registration"}
                    style={{ color: "blue", textDecoration: "none" }}
                >
                    <p className="link">Don't have an account? Register!</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Login