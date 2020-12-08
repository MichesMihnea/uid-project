import { PrimaryButton, TextField } from 'office-ui-fabric-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Registration(props) {
    return (
        <div className="login-wrapper">
            <h2>Register</h2>
            {
                props.role === "" &&
                <>
                    <h3>What kind of an account would you like to create?</h3>
                    <div className="field-wrapper">
                        <PrimaryButton className="role-button" onClick={() => {
                            props.setRole("Beneficiary")
                        }}>Beneficiary</PrimaryButton>
                    </div>
                    <div className="field-wrapper">
                        <PrimaryButton className="role-button" onClick={() => {
                            props.setRole("Provider")
                        }}>Provider</PrimaryButton>
                    </div>
                </>
            }
            {
                props.role !== "" &&
                <>
                    <div className="field-wrapper">
                        <h4>{props.role}</h4>
                    </div>
                    <div className="field-wrapper">
                        <TextField placeholder="Username..." type="text" />
                    </div>
                    <div className="field-wrapper">
                        <TextField placeholder="Password..." type="password" />
                    </div>
                    <div className="field-wrapper">
                        <TextField placeholder="Confirm password..." type="password" />
                    </div>
                    <div className="field-wrapper">
                        <TextField placeholder="Email..." type="text" />
                    </div>
                    <div className="field-wrapper">
                        <PrimaryButton className="login-button">Register</PrimaryButton>
                    </div>
                    <div className="link-wrapper">
                        <NavLink to={"/login"}
                            style={{ color: "blue", textDecoration: "none" }}
                        >
                            <p className="link">Already registered? Login!</p>
                        </NavLink>
                    </div>
            </>
            }
        </div>
    )
}

export default Registration