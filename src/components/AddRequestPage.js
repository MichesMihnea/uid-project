import { PrimaryButton, TextField } from 'office-ui-fabric-react'
import React, {Component} from 'react'
import '../App.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class AddRequestPage extends Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(){
        let request = {type: document.getElementById('requestType').value,
                       description: document.getElementById('requestDescription').value,
                       title: document.getElementById('requestTitle').value}
        var requests = JSON.parse(localStorage.getItem('Requests'))
        if(requests == null){
            requests = []
        }
        requests.push(request)
        localStorage.setItem('Requests', JSON.stringify(requests))
    }

    render(){
        return(
            <div>
                <h1>Add a Request</h1>
                <h4>Tell us what's wrong and we'll try to find someone to help you out.</h4>
                <div className="add-request">
                    <div className="add-request-field">
                        <h4>Describe your situation</h4>
                        <TextField id="requestTitle" placeholder="Title"></TextField>
                    </div>
                    <div className="add-request-options">
                        <label>Type:</label>
                        <input id="requestType" type="text" placeholder="Enter request type"></input>
                    </div>
                    <div className="add-request-field">
                        <TextField id="requestDescription" placeholder="Description" multiline rows={15}></TextField>
                    </div>   
                    <div className="add-request-field">
                        <FormControlLabel
                            control={<Checkbox color="primary" />}
                            label={<h3 style={{"color": "red"}}>Emergency</h3>}
                            labelPlacement="start"
                        />
                    </div>   
                    <div style={{"display": "inline", "float": "right", "margin-right": "10%"}}>
                        <PrimaryButton onClick={()=>this.handleSubmit()}>Submit</PrimaryButton>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddRequestPage