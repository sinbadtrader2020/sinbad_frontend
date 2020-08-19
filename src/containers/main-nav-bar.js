import React, { Component } from "react";
import { Link, Redirect} from "react-router-dom";
import {Path} from "../containers/config";
import Translator from "../utils/translator";
import i18n from '../utils/i18n';
import { Auth } from "../api/auth";
import app from "../app";


class MainNavBar extends Component {
 
  
  constructor(props){
    super(props);

    this.state={
      languagebtn: (i18n.language==="en" )?"English":"Bangla"
    }
  }



  handleLogout = event => {
    event.preventDefault();
    Auth.signout();

   
    
};





  render() {
    if(Auth.result.token===false){
      return <Redirect to="/"/>
      
    }
    
    return (
      <>
        {/* <!-- Main menu Navbar --> */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky">
          <Link className="navbar-brand" to={Path.welcome}>
          <img src={"assets/images/sinbad-logo.png"} alt="Logo" />

          </Link>
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
                  <Translator text="mainNavBarAbout.1"/>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="top#">
                  <Translator text="mainNavBarAbout.2"/>

                  </a>
                  <a className="dropdown-item" href="top#">
                  <Translator text="mainNavBarAbout.3"/>

                  </a>
                  <a className="dropdown-item" href="top#">
                  <Translator text="mainNavBarAbout.4"/>
                  
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="top#">
                   <Translator text="mainNavBarPortfolio.1"/>
                  <span className="sr-only" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="top#">
                   <Translator text="mainNavBarEtf.1"/>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="top#">
                   <Translator text="mainNavBarPricing.1"/>
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
                  <Translator text="mainNavBarLearn.1"/>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="top#">
                     <Translator text="mainNavBarLearn.2"/>
                  </a>
                  <a className="dropdown-item" href="top#">
                    <Translator text="mainNavBarLearn.3"/>
                  </a>
                </div>
              </li>
            </ul>
           
           <div className="form-inline my-2 my-lg-0">
                   {/* language button Start1*/}
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
                                {this.state.languagebtn}
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                  
                                  <button  className="dropdown-item" 

                                  
                                  
                                  onClick={()=>{i18n.changeLanguage('en');
                                  this.setState({
                                  languagebtn:'English'
                                  });
                                 
                                  }}>
                                  English

                                  </button>
                                  <button className="dropdown-item" onClick={()=>{i18n.changeLanguage('bn');
                                  this.setState({
                                  languagebtn:'Bangla'
                                  });
                                  
                                  }}>
                                  Bangla

                                  </button>
                                
                                </div>
                              </li>

                     </ul>
                {/* language button end */}

                <h1>{Auth.result.data&&Auth.result.data[0]['first_name']}</h1>

           </div>
           <button onClick={()=>console.log(Auth.result.data[0])}>asd</button>
           
    
          <form className="form-inline my-2 my-lg-0">
           
        {  !Auth.result.token?
            <><Link to={Path.signin} className="nav-link">  <Translator text="mainNavBarBtn.1"/></Link>
            <Link to={Path.signup} className="nav-link">  <Translator text="mainNavBarBtn.2"/></Link></>
           :<button  className="nav-link" onClick={this.handleLogout}>  <Translator text="mainNavBarBtn.3"/></button> }
            </form>
          </div>
        </nav>
      </>
    );
  }
}
export default MainNavBar;