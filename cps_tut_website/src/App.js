import React, { Component } from "react";
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Systems from "./components/Systems";
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
              <li className="nav-link active-link">
                <Link to="/">Home</Link>
                <div className="underline"></div>
              </li>
              <li className="nav-link">
                <Link to="/systems">Systems</Link>
                <div className="underline"></div>
              </li>
              <li className="nav-link">
                <Link to="/about">About</Link>
                <div className="underline"></div>
              </li>
            </ul>
          </div>
  
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/systems" element={<Systems/>}/>
          </Routes>
        </Router>



      </div>
    );
  }

}