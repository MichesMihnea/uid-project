import React, {Component} from 'react'
import services from './services.jpg'

class FirstPage extends Component{

    render(){
        return(
            <>
            <div className="login-wrapper">
                <img src={services} style={{"marginTop": "50px", "height" : "500px", "width": "600px", "marginLeft": "-180px"}}/>
            </div>
        </>
        )
    }
}

export default FirstPage