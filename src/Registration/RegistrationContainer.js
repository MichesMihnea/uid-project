import React, { useState } from 'react'
import Registration from './Registration'

function RegistrationContainer() {

    const [role, setRole] = useState("")

    return (
        <Registration role={role}
            setRole={setRole}
        />
    )
}

export default RegistrationContainer