import React from 'react'
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


class BootstrapNavbar extends React.Component{
    constructor(props){
        super(props)
        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogout(){
        localStorage.setItem('LogStatus', 'loggedOut')
        localStorage.removeItem('Username')
        localStorage.removeItem('Type')
        window.location.href = '/login';
    }

    render(){
        let loginStatus = null
        let loginName = null
        if(localStorage.getItem('LogStatus') == "logged"){
            loginStatus = <button type="button" onClick={() => this.handleLogout()}>Logout</button>
            loginName = localStorage.getItem('Username')
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
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href={localStorage.getItem("Type")}>Home</Nav.Link>
                                    <Nav.Link href="/about-us">Contact Us</Nav.Link>
                                    <Nav.Link href="/contact-us">About Us</Nav.Link>
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
                                    { () => this.handleLogout()}
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
                                <Route path="/firstPage">
                                    {<FirstPage />}
                                </Route>
                                <Route path="/provider">
                                    {<Provider/>}
                                </Route>
                                <Route path="/beneficiary">
                                    {<Beneficiary/>}
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