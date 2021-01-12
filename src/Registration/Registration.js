import { PrimaryButton, TextField } from 'office-ui-fabric-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Registration(props) {

    const onUsernameChange = (e) => {
        props.setUsername(e.target.value)
    }

    const onPasswordChange = (e) => {
        props.setPassword(e.target.value)
    }

    const onConfirmPasswordChange = (e) => {
        props.setConfirmPassword(e.target.value)
    }

    const onEmailChange = (e) => {
        props.setEmail(e.target.value)
    }

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
                    {
                        props.error.length > 0 &&
                        <p style={{"color": "red"}}>{props.error}</p>
                    }
                    {
                        props.success.length > 0 &&
                        <div>
                            <p style={{"color": "green"}}>{props.success}</p>
                            <NavLink to={"/login"}
                                    style={{ color: "blue", textDecoration: "none" }}
                                >
                                    <p className="link">Back to login.</p>
                            </NavLink>
                        </div>
                    }
                    {
                        props.success.length === 0 &&
                        <>
                            <div className="field-wrapper">
                                <TextField placeholder="Username..." type="text" onChange={onUsernameChange} />
                            </div>
                            <div className="field-wrapper">
                                <TextField placeholder="Password..." type="password" onChange={onPasswordChange} />
                            </div>
                            <div className="field-wrapper">
                                <TextField placeholder="Confirm password..." type="password" onChange={onConfirmPasswordChange} />
                            </div>
                            <div className="field-wrapper">
                                <TextField placeholder="Email..." type="text" onChange={onEmailChange} />
                            </div>
                            <div className="field-wrapper">
                                <PrimaryButton className="login-button" onClick={props.handleClick}>Register</PrimaryButton>
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
            </>
            }
        </div>
    )
}

export default Registration