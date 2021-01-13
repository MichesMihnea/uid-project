import React, {Component} from 'react'

class EditProfilePage extends Component{
    constructor(props){
        super(props)
        var userData = JSON.parse(localStorage.getItem('UserData'))
        this.state = {
            name: userData.name,
            password: userData.password,
            email: userData.email,
            phone: userData.phone,
            description: userData.description,
            type: userData.type
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleValueChange = this.handleValueChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(){
        window.location.href = '/provider'
    }

    handleChange(){
        var userEdit = {name: document.getElementById("nameEdit").value,
                    password: document.getElementById("passwordEdit").value,
                    email: document.getElementById("emailEdit").value,
                    phone: document.getElementById("phoneEdit").value,
                    description: document.getElementById("descriptionEdit").value,
                    type: document.getElementById("typeEdit").value}
        localStorage.removeItem("UserData")
        localStorage.setItem("UserData", JSON.stringify(userEdit))
    }

    handleValueChange(e){
        this.setState({[e.target.name] : e.target.value})
    }

    render(){
        return(
            <div>
                <h1>Edit Profile Page</h1>
                <form>
                    <label>Name</label> 
                    <input id="nameEdit" name="name" type="text" value={this.state.name} onChange={this.handleValueChange}></input>
                    <label>Password</label> 
                    <input id="passwordEdit" name="passwword" type="text" value={this.state.password} onChange={this.handleValueChange}></input>
                    <label>Email</label>
                    <input id="emailEdit" name="email" type="text" value={this.state.email} onChange={this.handleValueChange}></input>
                    <label>Phone</label>
                    <input id="phoneEdit" name="phone" type="text" value={this.state.phone} onChange={this.handleValueChange}></input>
                    <label>Description</label>
                    <input id="descriptionEdit" name="description" type="text" value={this.state.description} onChange={this.handleValueChange}></input>
                    <input id="typeEdit" type="hidden" value={this.state.type}></input>
                    <button type="button" onClick={() => this.handleChange()}>Edit</button>
                </form>
                <button type='button' onClick={() => this.handleSubmit()}>Back</button>
            </div>
        )
    }
}

export default EditProfilePage