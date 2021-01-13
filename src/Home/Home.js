import { PrimaryButton, TextField } from 'office-ui-fabric-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import services from './services.jpg'

function Home() {
    return (
        <><div className="login-wrapper">
            <img src={services} style={{"marginTop": "50px", "height" : "500px", "width": "600px", "marginLeft": "-180px"}}/>
            </div>
        </>
    )
}

export default Home