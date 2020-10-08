import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Path } from "../../containers/config";
import Translator from "../../utils/translator";
import i18n from "../../utils/i18n";

import { Nav } from "react-bootstrap";
import OutsideAlerter from "../../utils/outside-alert";
import Select from "react-dropdown-select";


class UserMainNavBar extends Component {
  constructor(props) {
    super(props);
    
    
    this.state = {
      languagebtn:localStorage.getItem('language')=== null ? "English" : localStorage.getItem('language')==='en'?'English':"Bangla",

      navExpand: "navbar-collapse collapse",
      sym:[]
    };
  }
  changeNav = (event) => {
    this.setState({
      navExpand: "navbar-collapse collapse",
    });
  };
  
  componentWillMount(){
   
  }

 
  render() {
    let sym=[];
    if(this.props.comSymbol!==undefined){
    this.props.comSymbol.map((index,i)=>{
      sym.push({
        'value': i, 'label': index.sf_act_symbol
      });
    });
    
  }
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
              <ul className="navbar-nav mr-auto col-md-5">
              
              {/* <input className='nav-search col-md-12'  type="text" name="search" placeholder="Search..">
                  
              </input> */}
              {console.log("sym",this.props.comSymbol)}
              <Select className='nav-search '   type="text" name="search"  placeholder="Search.."  options={sym} onChange={(values) => this.props.handleSearch(values[0].label)}/>               
                
              </ul>

          
                {/* language button Start1*/}
                <ul className="navbar-nav mr-auto col-md-7 nav-end" >
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

                  <li className="nav-item">
                    <Link
                      to={Path.blog} className="nav-link" >
                      <Translator text="mainNavBarBlog.1" />
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                        to={Path.comingSoon} className="nav-link" >
                        Free Stocks
                        <span className="sr-only" />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                        to={Path.portfolio} className="nav-link" >
                        <Translator text="mainNavBarPortfolio.1" />
                        <span className="sr-only" />
                    </Link>
                   </li>
               
            
                
                

                 
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
                    Account
                  </Link>
                  <div
                    className="dropdown-menu account-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <div style={{borderBottom: '1px solid rgb(210 210 210)'}}>
                    <h5 className="dropdown-item"  style={{margin:' 0px',paddingBottom: '14px'}} >
                    {this.props.props.isAuthenticated === true
                      ? this.props.props.user.data[0]['first_name']
                      : null}
                    </h5>
                    </div>
                    <Link className="dropdown-item" to={Path.setting}>
                      Setting
                    </Link>
                    <Link className="dropdown-item" to={Path.comingSoon}>
                      Help Center
                    </Link>
                    <Link className="dropdown-item" to={Path.comingSoon}>
                      Contact Us
                    </Link>
                    <button
                        className="dropdown-item"
                        onClick={this.props.props.handleLogout}
                      >
                        {/* {" Logout"} */}
                        <Translator text="mainNavBarBtn.3" />
                      </button>
                  </div>
                </li>
{/* 
                  <li className="nav-item">
                    <Link
                        to={Path.comingSoon} className="nav-link" >
                        Cash
                        <span className="sr-only" />
                    </Link>
                  </li> */}
                </ul>
                {/* language button end */}

               
         
               

              
            </div>
          </Nav>
        </OutsideAlerter>
      </>
    );
  }
}
export default UserMainNavBar;
