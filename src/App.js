import logo from './logo.svg';
import './App.css';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import LoginContainer from './Login/LoginContainer';
import RegistrationContainer from './Registration/RegistrationContainer';
import HomeContainer from './Home/HomeContainer';


function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
            <Route path="/login">
              <LoginContainer />
            </Route>
            <Route path="/registration">
              <RegistrationContainer />
            </Route>
            <Route path="/home">
              <HomeContainer />
            </Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
