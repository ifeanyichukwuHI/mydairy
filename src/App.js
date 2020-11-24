import React, { Component } from 'react';
import './App.css';
import Mygoals from './components/Mygoals/Mygoals';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Home from './components/Home/Home'
import Logs from './components/Logger/Logs';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import 'tachyons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component {

  constructor(props) {
    super();
    this.state = {
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        email: '',
        joined: ''
      }
    };
    this.onRouteChange = this.onRouteChange.bind(this);
  }

  // recieveEmail = (email) => {
  //   this.setState({ email });
  // }

  onRouteChange(route) {
    this.setState({ route: route });
  }

  onLoadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        email: data.email,
        joined: data.joined
      }
    })
  }

  sendEmail = () => {
    return ({
      email: this.state.user.email,
    });
  }

  render() {
    return (
      <Router>
       <div>
        <Header />
        <nav className='nav'>
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link to="/logs">
                Logs
              </Link>
              <span className='pipe'>|</span>
            </li>
            <li className="nav-list-item">
              <Link to="/today">today</Link>
              <span className='pipe'>|</span>
            </li>
            <li className="nav-list-item">
              <Link to="Mygoals">Mygoals</Link>
              <span className='pipe'>|</span>
            </li>
            <li className="nav-list-item">
              <Link to="/signin">Logout</Link>
            </li>
          </ul>
        </nav>


        <Switch>
          <Route path="/logs">
            <Logs />
          </Route>
          <Route path="/today">
            <Home />
          </Route>
          <Route path="/mygoals">
            <Mygoals />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <SignIn />
          </Route>
        </Switch>
      </div>
      <Footer />

      </Router>
 
    )
  }
}


export default App;

