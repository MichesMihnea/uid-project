import React, {Component, useState} from 'react'
import { PrimaryButton, TextField } from 'office-ui-fabric-react'
import { NavLink } from 'react-router-dom'

function PasswordRecovery() {

    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleClick = () => {
        let errorMessage = verifyEmail()
        setError(errorMessage)

        if(errorMessage.length === 0){
            setSuccess("If the provided email address corresponds to an account, an email has been sent to begin password recovery.")
        }
    }

    const verifyEmail = () => {

        let errorString = ""

        if(!email.includes("@") || !email.includes(".") || email.length < 5) {
            errorString += "Email is invalid.\n"
        }

        return errorString
    }

    return(
        <div className="login-wrapper">
            <h2>Password Recovery</h2>
            {
                error.length > 0 &&
                <p style={{"color": "red"}}>{error}</p>
            }
            {
                success.length === 0 &&
                <>
                    <div className="field-wrapper" style={{"marginTop": "30px"}}>
                        <TextField placeholder="Email..." type="text" onChange={onEmailChange} />
                    </div>
                    <div className="field-wrapper">
                        <PrimaryButton className="login-button" onClick={handleClick}>Send recovery email</PrimaryButton>
                    </div>
                </>
            }
            {
                success.length > 0 &&
                <>
                    <p style={{"color": "green"}}>{success}</p>
                    <NavLink to={"/login"}
                        style={{ color: "blue", textDecoration: "none" }}
                    >
                        <p className="link">Back to login</p>
                    </NavLink>
                </>
            }
        </div>
    )
}

export default PasswordRecovery