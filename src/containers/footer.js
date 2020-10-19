import React, { Component } from "react";
import Translator from "../utils/translator";
import InputTranslation from "../utils/input-translation";
import { Path } from "./config";
import { Link } from "react-router-dom";
import { Auth } from "../api/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";

class Footer extends Component {

  constructor(props) {
    super();

 

    this.state = {
      user: "",
    
     
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit=()=>{
  
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    let user=this.state.user;
    user = user.trim()
    if(!pattern.test(user)){
      alert('Enter a valid email address')
     
    }
    else{
      
      let data={}
      data={'email':user}
      Auth.subscribeEmail(data);
    }
   
   
  }
  render() {
  

    return (
      <>
        {/* <!-- Website's Footer Design --> */}
        <footer className='foot'>
          <div className="container ">
          

            {/* <!-- Footer Essential links & Company Description --> */}
            <div className="row">
              <div className="col-md-3">
                <Link to={Path.comingSoon} className="nav-link">
                  <Translator text="welFootCol1R1.1" />
                </Link>
                <Link to={Path.comingSoon} className="nav-link">
                  <Translator text="welFootCol1R2.1" />
                </Link>
                <Link to={Path.comingSoon} className="nav-link">
                  <Translator text="welFootCol1R3.1" />
                </Link>
                <Link to={Path.comingSoon} className="nav-link">
                  <Translator text="welFootCol1R4.1" />
                </Link>
              </div>
              <div className="col-md-2">
                <Link to={Path.comingSoon} className="nav-link">
                  <Translator text="welFootCol2R1.1" />
                </Link>
                <Link to={Path.comingSoon} className="nav-link">
                  <Translator text="welFootCol2R2.1" />
                </Link>
         
              </div>
              <div className="col-md-2">
                <Link to={Path.comingSoon} className="nav-link">
                  <Translator text="welFootCol3R1.1" />
                </Link>
                <Link to={Path.comingSoon} className="nav-link">
                  <Translator text="welFootCol3R2.1" />
                </Link>
                <Link to={Path.comingSoon} className="nav-link">
                  <Translator text="welFootCol3R3.1" />
                </Link>
              </div>
              <div className='col-md-1'></div>
              <div className="col-md-4 text-center">
                <Link className="navbar-brand" to={Path.welcome}>
                  {/* <img className='sinbad-log' src={"assets/images/sinbad-logo1.png"} alt="Logo" /> */}
                  <div className='overflow-hidden logo'>
                        <img className='sinbad-logo float-left ' src={"assets/images/sinbad-logo.png"} alt="Logo" />
                        <p className='float-left logo-sinbad-footer' >Sinbad </p>
                        
                        <p className='float-left logo-finance-footer' >Finance</p>
                  </div>
                </Link>
                <p className="footer-p">
                  {" "}
                  <Translator text="welFootCol4R1.1" />
                </p>
              </div>
            </div>

            {/* <!-- Footer Subscribe --> */}
            <div className="row">
              <div className='col-md-3 footer-contact'>
                <p style={{fontWeight:"bold", color:'white'}}>CONTACT US</p>
                
                <div>
                <a className='footer-contact-us' href='mailto:mohsin@sinbad.finance'> <FontAwesomeIcon style={{marginRight:'10px'}} color='white' icon={faEnvelope} />mohsin@sinbad.finance</a>
                </div>
                <div>
                <a className='footer-contact-us' href='mailto:moshiur@sinbad.finance'> <FontAwesomeIcon style={{marginRight:'10px'}} color='white' icon={faEnvelope} />moshiur@sinbad.finance</a>
                </div>
              </div>
              <div className="col-md-9 footer-subscribe">
            
                <div style={{paddingBottom:'10px'}}>
                 
                  <InputTranslation
                    className="form-control"
                    type="search"
                 
                    text="welFootCol4Row1R1.1"
                    aria-label="Search"
                    id="user"
                    onchange={this.handleChange}
                  />
                  

                  <button className="btn btn-danger" style={{backgroundColor:'#BF0A30'}} onClick={this.handleSubmit}>
                    <Translator text="welFootCol4Row1R2.1" />
                  </button>
              
          
                </div>
               
              
                  <ul>
                    <li>
                      <Link to={Path.comingSoon}>
                        <Translator text="welFootCol4Row2R1.1" />
                      </Link>
                    </li>
                    <li>
                      <Link to={Path.comingSoon}>
                        <Translator text="welFootCol4Row3R1.1" />
                      </Link>
                    </li>
                    <li>
                      <Link to={Path.comingSoon}>
                        <Translator text="welFootCol4Row4R1.1" />
                      </Link>
                    </li>
                    <li>
                      <Link to={Path.comingSoon}>
                        <Translator text="welFootCol4Row5R1.1" />{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to={Path.comingSoon}>
                        <Translator text="welFootCol4Row6R1.1" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <!-- Footer Bottom: Company Information--> */}

              <div className="row" style={{ margin: "auto" }}>
                <div className="col-md-12 text-center">
                  <p style={{ fontSize: "13px", color: "wheat" }}>
                    <Translator text="welFootCol4Row7R1.1" />
                  </p>
                </div>
              </div>
          
          
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
