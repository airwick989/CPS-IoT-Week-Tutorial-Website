import { React, Component } from "react";
import { BrowserRouter as Router, Route ,Link, Routes } from "react-router-dom";
import Home from "./components/Home";
import Organizers from "./components/Organizers";
import Systems from "./components/Systems";
import TutorialFormat from "./components/TutorialFormat";
import $ from 'jquery';
import './components/component styles/Navbar.css'

export default class App extends Component {
  jQueryCode = () => {
    $('.nav-link').on('click', function() {
      $('.active-link').removeClass('active-link');
      $(this).addClass('active-link');
    });
  }
  componentDidMount(){
    this.jQueryCode()
  }
  render(){
    return (
      <div className="App">

        <Router>
          <div className="navbar-container">
            <ul>
              <li className="nav-link" id="/">
                <Link to="/cps">Home</Link>
                <div className="underline"></div>
              </li>
              <li className="nav-link" id="/systems">
                <Link to="/cps/systems">Systems</Link>
                <div className="underline"></div>
              </li>
              <li className="nav-link" id="/tutorialformat">
                <Link to="/cps/tutorialformat">Tutorial Format (Half-Day)</Link>
                <div className="underline"></div>
              </li>
              <li className="nav-link" id="/organizers">
                <Link to="/cps/organizers">Organizers</Link>
                <div className="underline"></div>
              </li>
            </ul>
          </div>
  
          <Routes>
            <Route exact path="/cps" element={<Home/>}/>
            <Route path="/cps/systems" element={<Systems/>}/>
            <Route path="/cps/tutorialformat" element={<TutorialFormat/>}/>
            <Route path="/cps/organizers" element={<Organizers/>}/>
          </Routes>
        </Router>



      </div>
    );
  }

}