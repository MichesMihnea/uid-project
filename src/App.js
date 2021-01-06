import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import SidebarContainer from './Sidebar/SidebarContainer'
import Login from './Login/LoginContainer'
import Register from './Registration/RegistrationContainer'
import Home from './Home/HomeContainer'
import FirstPage from './components/FirstPage'
import ContactPage from './components/ContactPage'
import AboutPage from './components/AboutPage'
import ProfilePage from './components/ProfilePage'
import EditProfilePage from './components/EditProfilePage'
import AddRequestPage from './components/AddRequestPage'
import AnnouncementsPage from './components/AnnouncementsPage'
import SettingsPage from './components/SettingsPage'
import FaqPage from './components/FaqPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Navbar />
        <SidebarContainer />
        <Router forceRefresh>
          <Switch>
            <Route exact path="/">
                <Redirect to="/firstPage" />
            </Route>
            <Route path="/login">
                {<Login />}
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
  );
}

export default App;
