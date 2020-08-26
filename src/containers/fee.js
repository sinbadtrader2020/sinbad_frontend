import React, { Component } from "react";

import Footer from "./footer";
import MainNavBar from "./main-nav-bar";

export default class Fees extends Component {
  render() {
    return (
      <>
        <MainNavBar props={this.props} />


        {/* <!-- Fees page design -->
             <!-- Intro design --> */}
             <div className="home-intro">
          <div className="container " >
            <div
              className="row div-row-padding"
              style={{ textAlign: "center" }}
            >
              <div className="col-md-7">
                
              </div>
              <div className="col-md-5 intro-img">
                <img src={"assets/images/home-intro.png"} alt="logo" />
              </div>
            </div>
          </div>
        </div>
        {/* end intro */}

   

        {/* Zero Fess */}

        <div className="container footer-no-margin padding-extra">
          <div className="row div-row-padding">
            {/* <div className="col-md-1"></div> */}
            <div className="col-md-5 m-auto ">
              <div>
                <h3 className="div-h4-blue text-start">Zero Trade Fess</h3>
                <p className="p-gray">
                  We don't charge you any transaction fees to buy and sell
                  securitys.
                </p>
              </div>

              <div>
                <h3 className="div-h4-blue text-start">Zero Hidden Fess</h3>
                <p className="p-gray">
                  Gain a peace of mind knowledge that we dont charge any hidden
                  fees.
                </p>
              </div>

              <div>
                <h3 className="div-h4-blue text-start">
                  Zero Reblanceing Fess
                </h3>
                <p className="p-gray">
                  We regularly rebalance your portfolio for no additional
                  advisory fees.
                </p>
              </div>
            </div>
            <div className="col-md-1"></div>

            <div className="col-md-5 m-auto">
              <img className="img-inherit" src={"assets/images/zero-fees.png"} alt="logo" />
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>

        {/* <!-- Become an investor-> */}

        <div className="container footer-no-margin padding-extra">
          <div className="row div-row-padding">
            {/* <div className="col-md-1"></div> */}
            <div className="col-md-7 m-auto">
              <h3 className="div-h4-blue text-start">Become an Investor</h3>
              <p>You will receive an SMS to download the app</p>

              <div className="row  padding-zero">
                <div className="col-md-3 about-padding">
                  <input type="text" id="inputMDEx" class="form-control" />
                </div>
                <div className="col-md-7 about-padding">
                  <input type="text" id="inputMDEx" class="form-control" />
                </div>
              </div>

              <p>
                By clicking on the 'GET THE APP' button above, you confirm that
                you have entered your own phone number and you consent to
                receiving the SMS.
              </p>
            </div>
           <div className='col-md-1'>
        
           </div>
            <div className="col-md-3"
              style={{ maxHeight: "350px", zIndex: " -1" }}
            >
              <img
                src={"assets/images/become-an-investor.png"}
                alt="logo"
                style={{ height: "420px", width: "inherit" }}
              />
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}
