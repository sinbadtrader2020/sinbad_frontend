import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Footer from "./footer";
import MainNavBar from "./main-nav-bar";

import Translator from "./translator";

class Welcome extends Component {

  render() {
    return (
      <div className="Welcome">
        <Helmet>
          <title>Sinbad Finance</title>
        </Helmet>
        

         {/* <!-- Main menu Navbar --> */}
         <MainNavBar/>

        {/* <!-- Home page design -->
             <!-- Intro design --> */}
        <div className="home-intro">
          <div className="container ">
            <div
              className="row div-row-padding"
              style={{ textAlign: "center" }}
            >
              <div className="col-md-7">
                <h1 className="mt-5"> <Translator text='welBlock1R1.1'/></h1>
                <h3 className="mt-2"> <Translator text='welBlock1R2.1'/></h3>
                <p className="mt-5">
                <Translator text='welBlock1R3.1'/>
                </p>
                <button className="btn btn-danger"><Translator text='welBlock1R4.1'/></button>
              </div>
              <div className="col-md-5 intro-img">
                <img src={"assets/images/home-intro.png"} alt="logo" />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- How it Work --> */}
        <div className="container">
          <div className="row div-row-padding">
            <div className="col-md-12">
              <h2 className="div-h1-red-center"><Translator text='welBlock2R1.1'/></h2>
            </div>
          </div>
          <div className="row" style={{ paddingBottom: "50px" }}>
            <div className="col-md-1"></div>
            <div
              className="col-md-4 row-padding"
              style={{ textAlign: "center" }}
            >
              <img
                src={"assets/images/home-intro.png"}
                style={{ height: "400px" }}
                alt="logo"
              />
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6 row-padding">
              <div className="works-div">
                <div>
                  <img src={"assets/images/signup.png"} alt="logo" />
                </div>
                <div>
                  <h2><Translator text='welBlock2R2.1'/></h2>
                  <p>
                  <Translator text='welBlock2R3.1'/>
                   
                  </p>
                </div>
              </div>
              <div className="works-div">
                <div className="a">
                  <img src={"assets/images/fund.png"} alt="logo" />
                </div>
                <div>
                  <h2><Translator text='welBlock2R4.1'/></h2>
                  <p>

                  <Translator text='welBlock2R5.1'/>
                   
                  </p>
                </div>
              </div>
              <div className="works-div">
                <div className="a">
                  <img src={"assets/images/monitor.png"} alt="logo" />
                </div>
                <div>
                  <h2>  <Translator text='welBlock2R6.1'/></h2>
                  <p>  <Translator text='welBlock2R7.1'/></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Homepage feature slider --> */}
        <div className="home-intro">
          <div className="container">
            <div className="row h-100 row-padding">
              <div className="col-md-3 my-auto btn-white slider-btn">
                <div>
                  <button className="btn"><Translator text='welBlock3L1R.1'/>Learn</button>
                </div>
                <div>
                  <button className="btn"><Translator text='welBlock3L2R.1'/>Manage</button>
                </div>
                <div>
                  <button className="btn"><Translator text='welBlock3L3R.1'/>Customize</button>
                </div>
              </div>
              <div className="col-md-9 my-auto">
                <div className="container">
                  <div className="row txt-img-mob-center">
                    <div className="col-md-5 my-auto">
                      <img src={"assets/images/home-intro.png"} alt="logo" />
                    </div>
                    <div className="col-md-7 my-auto">
                      <h3>Learn As You Grow</h3>
                      <p className="mt-4">
                        Our goal is to make investing in financial markets more
                        affordable, more intuitive, and more fun, no matter how
                        much experience you have (or don’t have).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Homepage search feature design --> */}
        <div className="container">
          <div className="row div-row-padding">
            <div className="col-md-12">
              <h2 className="div-h1-red-center"><Translator text='welBlock4R1.1'/></h2>
            </div>
          </div>
          <div className="row txt-img-mob-center">
            <div className="col-md-1"></div>
            <div className="col-md-4 search-div">
              <h3 className="mt-5"><Translator text='welBlock4R2.1'/></h3>
              <p><Translator text='welBlock4R3.1'/></p>

              <p className="mt-4 mb-4">
              <Translator text='welBlock4R4.1'/> 
              </p>

              <h3><Translator text='welBlock4R5.1'/></h3>
              <p><Translator text='welBlock4R6.1'/></p>
            </div>
            <div
              className="col-md-6"
              style={{ maxHeight: "350px", zIndex: " -1" }}
            >
              <img
                src={"assets/images/search.png"}
                alt="logo"
                style={{ overflow: "hidden", height: "600px" }}
              />
            </div>
          </div>
        </div>

      <Footer/>
      </div>
    );
  }
}

export default Welcome;
