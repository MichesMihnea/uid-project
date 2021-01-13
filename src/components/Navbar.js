import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useParams,
  } from "react-router-dom";
  import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import Login from '../Login/LoginContainer'
import Register from '../Registration/RegistrationContainer'
import Home from '../Home/HomeContainer'
import FirstPage from '../components/FirstPage'
import Provider from './Provider';
import Beneficiary from './Beneficiary';
import ContactPage from './ContactPage';
import ProfilePage from './ProfilePage';
import AddRequestPage from './AddRequestPage';
import SettingsPage from './SettingsPage';
import FaqPage from './FaqPage';
import AboutPage from '../components/AboutPage'
import EditProfilePage from './EditProfilePage'
import AnnouncementsPage from './AnnouncementsPage'
import PasswordRecovery from './PasswordRecovery'
import Feed from './Feed'
import SearchPage from './SearchPage'
import { TextField } from 'office-ui-fabric-react';

const initialState = {
    category: "qwer"
}

class BootstrapNavbar extends React.Component{

    constructor(props){
        super(props)
        this.handleLogout = this.handleLogout.bind(this)
        this.state = initialState;
    }

    handleLogout(){
        localStorage.setItem('LogStatus', 'loggedOut')
        localStorage.removeItem('UserData')
        window.location.href = '/login';
    }

    changeState(e){
        this.state = {
            category: e.target.value
        }
    }

    render(){
        let loginStatus = null
        let loginName = null
        let searchbar = null
        let searchsend = null
        let type = null
        if(localStorage.getItem('LogStatus') == "logged"){
            loginStatus = <button type="button" onClick={() => this.handleLogout()}>Logout</button>
            loginName = JSON.parse(localStorage.getItem('UserData')).name
            if( JSON.parse(localStorage.getItem('UserData')).type === "beneficiary"){
                searchbar = <TextField placeholder="Search by skills" onChange={(e) => {
                                            this.setState({
                                                category: e.target.value
                                            })
                            }}></TextField>                            
                searchsend = <Nav.Link href={"/search/" + this.state.category}>Search</Nav.Link>
                type = "beneficiary"
            }else{
                searchbar = <h1> </h1>
                searchsend = <h1> </h1>
                type = "provider"
            }
        }else{
            loginStatus = <Nav.Link href="/login">Login</Nav.Link>
            loginName = <Nav.Link href="/registration">Register</Nav.Link>
        }

        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                            <Navbar.Brand href="/home">Platform for contracting services</Navbar.Brand>
                                {searchbar}  
                                {searchsend}        
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href={type}>Home</Nav.Link>
                                    <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                                    <Nav.Link href="/about-us">About Us</Nav.Link>
                                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                    </Nav>
                                    <Nav>
                                    {loginStatus}
                                    {loginName}
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                            <Switch>
                                <Route exact path="/">
                                    <Redirect to="/firstPage" />
                                </Route>
                                <Route path="/log-out">
                                    { () => this.handleLogout() }
                                </Route>
                                <Route path="/login">
                                    {<Login></Login>}
                                </Route>
                                <Route path="/registration">
                                    {<Register />}
                                </Route>
                                <Route path="/home">
                                    {<Home />}
                                </Route>
                                <Route path="/feed">
                                    {<Feed />}
                                </Route>
                                <Route path="/firstPage">
                                    {<FirstPage />}
                                </Route>
                                <Route path="/passwordRecovery">
                                    {<PasswordRecovery />}
                                </Route>
                                <Route path="/provider">
                                    {<Provider/>}
                                </Route>
                                <Route path="/beneficiary">
                                    {<Beneficiary/>}
                                </Route>
                                <Route path="/search/:category">
                                    {<SearchPage />}
                                </Route>
                                <Route path="/contact-us">
                                    {<ContactPage />}
                                </Route>
                                <Route path="/about-us">
                                    {<AboutPage />}
                                </Route>
                                <Route path="/my-profile">
                                    {<ProfilePage />}
                                </Route>
                                    <Route path="/see-profile">
                                    {<ProfilePage />}
                                </Route>
                                <Route path="/edit-profile">
                                    {<EditProfilePage />}
                                </Route>
                                <Route path="/add-a-request">
                                    {<AddRequestPage />}
                                </Route>
                                <Route path="/announcements">
                                    {<AnnouncementsPage />}
                                </Route>
                                <Route path="/settings">
                                    {<SettingsPage />}
                                </Route>
                                <Route path="/faq">
                                {<FaqPage />}
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        )  
    }
}

export default BootstrapNavbar;