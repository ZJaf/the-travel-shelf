import React from 'react';

const Navbar = () => {
    return (
              <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div classNameName="container">
                  <a classNameName="navbar-brand" href="#">
                    <img src={require('../img/ts-logo.jpg')} width="50" height="40" alt="travel-shelf logo" /><h4 classNameName="d-inline align-middle"> Travel Shelf</h4>
                  </a>
                  <button classNameName="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span classNameName="navbar-toggler-icon"></span>
                  </button>
                  <div classNameName="collapse navbar-collapse" id="navbarResponsive">
                    <ul classNameName="navbar-nav ml-auto">
                      <li className="nav-item">
                      <a href="#home" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                      <a href="#about" className="nav-link">About</a>
                    </li>
                    <li className="nav-item">
                      <a href="#authors" className="nav-link">Book Stores</a>
                    </li>
                    <li className="nav-item">
                      <a href="#contact" className="nav-link">Contact</a>
                    </li>
                    <li className="nav-item">
                      <a href="#sign-up" className="nav-link">Sign Up</a>
                    </li>
                    <li className="nav-item">
                      <a href="#login" className="nav-link">Login</a>
                    </li>
                    </ul>
                  </div>
                </div>
              </nav>
        )
    };

export default Navbar;
