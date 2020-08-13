import React, { Component } from "react";
import { Link} from "react-router-dom";
import {Path} from "../containers/config";

class MainNavBar extends Component {
  render() {
    return (
      <>
        {/* <!-- Main menu Navbar --> */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky">
          <a className="navbar-brand" href="#index.html">
            Sinbad <span>Finance</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="top#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  About
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="top#">
                    Action
                  </a>
                  <a className="dropdown-item" href="top#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="top#">
                    Another action
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="top#">
                  Portfolio
                  <span className="sr-only" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="top#">
                  ETF
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="top#">
                  Pricing
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="top#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Learn
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="top#">
                    Action
                  </a>
                  <a className="dropdown-item" href="top#">
                    Another action
                  </a>
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
            <Link to={Path.signin} className="nav-link">Login</Link>
            <Link to={Path.signup} className="nav-link">SignUp</Link>
            
            </form>
          </div>
        </nav>
      </>
    );
  }
}
export default MainNavBar;