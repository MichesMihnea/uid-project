import React, { Component} from 'react'

class Beneficiary extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h1>Beneficiary page</h1>
                <h2>Hello {localStorage.getItem('Username')}</h2>
            </div>
        )
    }
}

export default Beneficiary