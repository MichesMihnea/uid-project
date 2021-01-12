import React, { useState } from 'react'
import Registration from './Registration'

function RegistrationContainer() {

    const [role, setRole] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const handleClick = () => {
        let errorMessage = verifyInput()
        setError(errorMessage)

        if(errorMessage.length === 0) {
            setSuccess("Registration successful")
            setUsername("")
            setPassword("")
            setConfirmPassword("")
            setEmail("")
        }
    }

    const verifyInput = () => {
        let errorString = ""

        if(username.length < 3) {
            errorString += "Username requires at least 3 characters.\n"
        }

        if(password.length < 3) {
            errorString += "Password requires at least 3 characters.\n"
        }

        if(password !== confirmPassword) {
            errorString += "Passwords much match.\n"
        }

        if(!email.includes("@") || !email.includes(".") || email.length < 5) {
            errorString += "Email is invalid.\n"
        }

        return errorString
    }

    return (
        <Registration role={role}
            setRole={setRole}
            handleClick={handleClick}
            username={username} setUsername={setUsername}
            password={password} setPassword={setPassword}
            confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword}
            email={email} setEmail={setEmail}
            error={error} setError={setError}
            success={success}
        />
    )
}

export default RegistrationContainer