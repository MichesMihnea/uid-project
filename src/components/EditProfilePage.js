import { TextField } from 'office-ui-fabric-react'
import React, {Component} from 'react'
import { Button } from 'react-bootstrap';
import '../App.css';

class EditProfilePage extends Component{

    render(){
        return(
            <div>
                <h1>Edit Profile Page</h1>
                    <div className="edit-profile-wrapper">
                        <div className="edit-field">
                            <h4>Name</h4>
                            <TextField></TextField>
                        </div>
                        <div className="edit-field">
                            <h4>Email</h4>
                            <TextField></TextField>
                        </div>
                        <div className="edit-field">
                            <h4>Address</h4>
                            <TextField></TextField>
                        </div>
                        <div className="edit-field">
                            <h4>Phone number</h4>
                            <TextField></TextField>
                        </div>
                        
                        <Button style={{"marginTop": "50px"}}>Finish</Button>
                    </div>
            </div>
        )
    }
}

export default EditProfilePage