import React, {Component} from 'react'

class AboutPage extends Component{

    render(){
        return(
            <div>
                <h1>About Page</h1>
                <div style={{"width": "50%", "marginLeft": "25%"}}>
                    <p>
                    Correctly identifying the required skills in solving a specific problem, particularly in household-related or personal issues, such as a power blackout at home
                    or repairing a broken pipe, repair the stove etc., may be a major challenge
                    to many people. This project aims to recommend solutions by addressing the
                    problems faced by both the provider of services/skills and the beneficiary
                    </p>
                </div>
            </div>
        )
    }
}

export default AboutPage