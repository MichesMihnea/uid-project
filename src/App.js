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
      </div>
  );
}

export default App;
