import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Path } from "../containers/config";
import Translator from "../utils/translator";
import i18n from "../utils/i18n";
import { Auth } from "../api/auth";


import { Nav } from "react-bootstrap";
import OutsideAlerter from "../utils/outside-alert";

class MainNavBar extends Component {
  
  constructor(props) {
    super(props);
   

    this.state = {
      languagebtn:localStorage.getItem('language')=== null ? "English" : localStorage.getItem('language')==='en'?'English':"Bangla",


      navExpand: "navbar-collapse collapse",
    };
  }
  changeNav = (event) => {
    this.setState({
      navExpand: "navbar-collapse collapse",
    });
  };

  handleLogout = (event) => {
    event.preventDefault();
    Auth.signout().then((response) => {
      this.setState({
        showLogin: null,
      });
      this.props.history.push(Path.welcome);
    });
  };

  render() {
    return (
      <>
        {/* <!-- Main menu Navbar --> */}
        <OutsideAlerter onchangeNav={this.changeNav}>
          <Nav className="navbar navbar-expand-lg navbar-light bg-light sticky main-nav-shadow">
            <Link
              className="navbar-brand"
              onClick={this.changeNav}
              to={Path.welcome}
            >
              <img className='sinbad-log' src={"assets/images/sinbad-logo1.png"} alt="Logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => {
                this.setState({
                  navExpand: "navbar-collapse collapse show",
                });
              }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className={this.state.navExpand} id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to={Path.comingSoon}
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <Translator text="mainNavBarAbout.1" />
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link className="dropdown-item" to={Path.about}>
                      <Translator text="mainNavBarAbout.2" />
                    </Link>
                    <Link className="dropdown-item" to={Path.comingSoon}>
                      <Translator text="mainNavBarAbout.3" />
                    </Link>
                    <Link className="dropdown-item" to={Path.comingSoon}>
                      <Translator text="mainNavBarAbout.4" />
                    </Link>
                  </div>
                </li>
                <li className="nav-item">
                  <Link
                    to={Path.portfolio} className="nav-link" >
                    <Translator text="mainNavBarPortfolio.1" />
                    <span className="sr-only" />
                  </Link>
                </li>
               {/* fees disable */}
                {/* <li className="nav-item">
                  <Link
                    to={Path.fee} className="nav-link" >
                    <Translator text="mainNavBarFees.1" />
                  </Link>
                </li> */}
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to={Path.comingSoon}
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <Translator text="mainNavBarLearn.1" />
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link
                    to={Path.forum} className="dropdown-item" >
                      <Translator text="mainNavBarLearn.2" />
                    </Link>
                    <Link
                    to={Path.faq} className="dropdown-item" >
                      <Translator text="mainNavBarLearn.3" />
                    </Link>
                  </div>
                </li>

                <li className="nav-item">
                  <Link
                    to={Path.blog} className="nav-link" >
                    <Translator text="mainNavBarBlog.1" />
                  </Link>
                </li>
              </ul>

              <div className="form-inline my-2 my-lg-0">
                {/* language button Start1*/}
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="top"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {this.state.languagebtn}
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <button
                        className="dropdown-item"
                        onClick={() => {
                          i18n.changeLanguage("en");
                          localStorage.setItem('language', "en");

                          this.setState({
                            languagebtn: "English",
                            navExpand: "navbar-collapse collapse",
                          });
                        }}
                      >
                        English
                      </button>
                      <button
                        className="dropdown-item"
                        onClick={() => {
                          i18n.changeLanguage("bn");
                          localStorage.setItem('language', "bn");
                          this.setState({
                            languagebtn: "Bangla",
                            navExpand: "navbar-collapse collapse",
                          });
                        }}
                      >
                        Bangla
                      </button>
                    </div>
                  </li>
                </ul>
                {/* language button end */}

               
              </div>
               {/* <h5 style={{padding:"0 5px 0 0px",margin:"1px"}}>
                  {this.props.props.isAuthenticated === true
                    ? this.props.props.user.data[0]['first_name']
                    : null}
                </h5> */}

              {this.props.props.isAuthenticated === false ||this.props.props.isAuthenticated === undefined? (
                <>
                  <Link
                    to={Path.signin}
                    onClick={this.changeNav}
                    className="nav-link"
                    style={{padding:"0px 10px 0px 0px"}}
                    
                  >
                    {" "}
                    <Translator text="mainNavBarBtn.1" />
                  </Link>
                  <Link
                    to={Path.signup} 
                    onClick={this.changeNav}
                    className="btn btn-outline-danger my-2 my-sm-0"
                  
                  >
                    {" "}
                    <Translator text="mainNavBarBtn.2" />
                  </Link>
                </>
              ) : (
                <button
                  className="btn btn-outline-danger my-2 my-sm-0"
                  onClick={this.props.props.handleLogout}
                >
                  {" "}
                  <Translator text="mainNavBarBtn.3" />
                </button>
              )}
            </div>
          </Nav>
        </OutsideAlerter>
      </>
    );
  }
}
export default MainNavBar;
