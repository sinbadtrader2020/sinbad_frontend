import React, { Component } from "react";
import Translator from "./translator";

class Footer extends Component {
  render() {
    return (
      <>
        {/* <!-- Website's Footer Design --> */}
        <footer>
        
          <div className="container">
            {/* <!-- Footer Essential links & Company Description --> */}
            <div className="row">
              <div className="col-md-3">
                <a href="top#" className="nav-link">
                <Translator text='welFootCol1R1.1'/>Stocks & Funds
                </a>
                <a href="top#" className="nav-link">
                <Translator text='welFootCol1R2.1'/>Options
                </a>
                <a href="top#" className="nav-link">
                <Translator text='welFootCol1R3.1'/>
                </a>
                <a href="top#" className="nav-link">
                <Translator text='welFootCol1R4.1'/> 
                </a>
              </div>
              <div className="col-md-3">
                <a href="top#" className="nav-link">
                <Translator text='welFootCol2R1.1'/> 
                </a>
                <a href="top#" className="nav-link">
                <Translator text='welFootCol2R2.1'/>  
                </a>
                <a href="top#" className="nav-link">
                <Translator text='welFootCol2R3.1'/> 
                </a>
              </div>
              <div className="col-md-3">
                <a href="top#" className="nav-link">
                <Translator text='welFootCol3R1.1'/>  
                </a>
                <a href="top#" className="nav-link">
                <Translator text='welFootCol3R2.1'/>   
                </a>
                <a href="top#" className="nav-link">
                <Translator text='welFootCol3R3.1'/>
                </a>
              </div>
              <div className="col-md-3">
                <a href="top#" className="nav-link">
                  Logo Here
                </a>
                <p>
                  {" "}
                  <Translator text='welFootCol4R1.1'/> 
                </p>
              </div>
            </div>

            {/* <!-- Footer Subscribe --> */}
            <div className="row">
              <div className="col-md-12 footer-subscribe">
                <div>
                  <input
                    className="form-control"
                    type="search"
                    placeholder= {<Translator text='welFootCol4Row1R1.1'/>}
                    aria-label="Search"
                  />
                  <button className="btn btn-success" type="submit">
                  <Translator text='welFootCol4Row1R2.1'/>  
                  </button>
                </div>
                <ul>
                  <li>
                    <a href="top#">
                    <Translator text='welFootCol4Row2R1.1'/>   
                    </a>
                  </li>
                  <li>
                    <a href="toptop#">
                    <Translator text='welFootCol4Row3R1.1'/> 
                    </a>
                  </li>
                  <li>
                    <a href="toptop#"><Translator text='welFootCol4Row4R1.1'/></a>
                  </li>
                  <li>
                    <a href="toptop#"><Translator text='welFootCol4Row5R1.1'/> </a>
                  </li>
                  <li>
                    <a href="toptop#"><Translator text='welFootCol4Row6R1.1'/></a>
                  </li>
                </ul>
              </div>

              {/* <!-- Footer Bottom: Company Information--> */}
              <div className="row">
                <div className="col-md-12">
                  <p style={{ fontSize: "13px", color: "white" }}>
                  <Translator text='welFootCol4Row7R1.1'/> 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
