import React, {Component} from 'react'

class ContactPage extends Component{

    render(){
        return(
            <div>
                <h1>Contact Page</h1>
                <div style={{"width": "50%", "marginLeft": "25%"}}>
                    <p>Owner: owner@sp.com / 0711111111</p>
                    <p>Developer (for reporting bugs only): dev@sp.com / 0722222222</p>
                    <p>Other issues: issues@sp.com / 0733333333</p>
                </div>
            </div>
        )
    }
}

export default ContactPage