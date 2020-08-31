import React, { Component } from "react";
import MainNavBar from "./main-nav-bar";
import Footer from "./footer";

import { AiFillAccountBook } from "react-icons/ai";
import Translator from "../utils/translator";

export default class About extends Component {
  render() {
    return (
      <>
        <MainNavBar props={this.props} />

        {/* <!-- About page design -->
             <!-- Intro design --> */}
        <div className="home-intro">
          <div className="container ">
            <div className="row div-row-padding" style={{ textAlign: "start" }}>
              <div className="col-md-7">
                <h1 className="mt-5">
                  {" "}
                  Sinbad Finance
                  <br /> Ethical Stock Finder Tools
                </h1>
                <p className="mt-5 font-weight-bold">About</p>
                <p>
                  Sinbad Finance is a stock screening tool designed for making
                  ethical invesment easier. Now you can know which stock is
                  ethical and which one is not. Whether you are looking to
                  invest ethical or you would like to check if your current
                  invesment is ethical, Sinbad Finance is here to help.
                </p>
              </div>
              <div className="col-md-5 ">
                <img
                  className="img-inherit"
                  src={"assets/images/about-intro.png"}
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- How it Work --> */}

        <div className="container">
          <div className="row div-row-padding">
            <div className="col-md-12">
              <h2 className="div-h1-blue-center">Why Sinbad Finance?</h2>
              <p className="text-center">Easy investing for you</p>
            </div>
          </div>

          {/* why sinbad finance card view */}
          <div className="m-auto faq-support-card faq-about-card">
            <div className="row justify-content-md-around faq-div-support-margin text-center ">
              <div className="col-md-4">
                <img src={"assets/images/signup.png"} alt="logo" />
                <h2>No Lock-in</h2>
                <p>
                  You can place a withdrawal or deposit request at any time.
                </p>
              </div>
              <div className="col-md-4">
                <img src={"assets/images/fund.png"} alt="logo" />
                <h2>No Minimum</h2>
                <p>
                  We don't want to leave a single ethical investor without
                  access to a diversified portfolio.
                </p>
              </div>

              <div className="col-md-4">
                <img src={"assets/images/monitor.png"} alt="logo" />
                <h2>Lower Fees</h2>
                <p>Monitor performance and view your holdings at any time.</p>
              </div>
            </div>

            <div className="row justify-content-md-around faq-div-support-margin text-center">
              <div className="col-md-4">
                <img src={"assets/images/signup.png"} alt="logo" />
                <h2>Monitor your Portfolio</h2>
                <p>Add stock to your portfolio</p>
              </div>
              <div className="col-md-4">
                <img src={"assets/images/fund.png"} alt="logo" />
                <h2>Stay Vigilant</h2>
                <p>Alert if stock turn out of halal universe</p>
              </div>

              <div className="col-md-4">
                <img src={"assets/images/monitor.png"} alt="logo" />
                <h2>Custom filters</h2>
                <p>Search with your own filters</p>
              </div>
            </div>
          </div>
          {/*about page  how it works */}
          <div className="container">
            <div className="row div-row-padding">
              <div className="col-md-12">
                <h2 className="div-h1-blue-center">How it works?</h2>
              </div>
            </div>
            <div className="row" style={{ paddingBottom: "50px" }}>
              <div className="row-padding ">
                {/* work1 */}
                <div className="row div-row-work-padding">
                  <div className="col-md-4 " style={{ textAlign: "center" }}>
                    <img
                      className="img-screen-size"
                      src={"assets/images/work1.png"}
                      alt="logo"
                    />
                  </div>
                  <div className="col-md-1"></div>

                  <div className="col-md-7 m-auto">
                    <div className="works-div ">
                      <h4 className="text-center">
                        Search by company name or ticker and you should find out
                        whether or not your stock is ethical
                      </h4>
                    </div>
                  </div>
                </div>
                {/* work2  */}

                <div className="row div-row-work-padding">
                  <div className="col-md-7 m-auto">
                    <div className="works-div ">
                      <h4 className="text-center">
                        Get results based on ethical investment method adopted
                        by AAOIFI. More ESG stocks screening methodologies
                        (DowJones, FTSE, Standard & Poors and MSCI) coming soon.
                      </h4>
                    </div>
                  </div>
                  <div className="col-md-1"></div>

                  <div className="col-md-4 " style={{ textAlign: "center" }}>
                    <img
                      className="img-screen-size"
                      src={"assets/images/work2.png"}
                      alt="logo"
                    />
                  </div>
                </div>
                {/* 3rd */}
                <div className="row div-row-work-padding">
                  <div className="col m-auto">
                    <div className="works-div ">
                      <p className="text-center">
                        Don’t have a stock on mind… No problem! Use our advanced
                        search option, to find out ethical stocks based on your
                        own criteria
                      </p>
                    </div>
                  </div>
                </div>
                {/* work 3 */}

                <div className="row div-row-work-padding">
                  <div className="col-md-4 " style={{ textAlign: "center" }}>
                    <img
                      className="img-screen-size"
                      src={"assets/images/work3.png"}
                      alt="logo"
                    />
                  </div>
                  <div className="col-md-1"></div>

                  <div className="col-md-7 m-auto">
                    <div className="works-div ">
                      <h4 className="text-center">
                        Start trading ethical right away. To make your life
                        easier, you can connect with one of our third party
                        broker, depending on your country, and you can start
                        trading with peace of mind.
                      </h4>
                    </div>
                  </div>
                </div>
                {/* work 3 end */}
              </div>
            </div>
          </div>
        </div>
        {/* how it works end */}

        {/*about page  Grow your wealth */}
        <div className="container">
          <div className="row div-row-padding">
            <div className="col-md-5 m-auto">
              <h2 className="div-h1-blue-center">Grow your wealth faster!</h2>
              <p className="text-center" style={{ fontSize: "20px" }}>
                {" "}
                Getting started with Sinbad Finance is easy with Ethical
                Investment
              </p>
            </div>
          </div>

          {/* why sinbad finance card view */}

          <div className="m-auto faq-support-card padding-zero">
            <div className="row  justify-content-md-around faq-div-support-margin text-center ">
              <div className="col-md-3 ">
                <h4 className="font-weight-bold">Investment Account</h4>
                <p>Your excess savings don't need to sit in a bank account.</p>
                <p>
                  Become a ethical investor with Sinbad Finance in minutes by
                  opening an individual account.
                </p>
              </div>
              <div className="col-md-3">
                <h4>Savings</h4>
                <p>Earn modest returns while staying away from interest.</p>
                <p>A low risk investment to keep your cash in.</p>
              </div>

              <div className="col-md-3">
                {" "}
                <h4>Custom</h4>
                <p>For more experienced investors.</p>
                <p>
                  Customize your portfolio allocation as you wish across the
                  different asset classes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team sinbad */}
        <div className="container">
          <div className="row div-row-padding">
            <div className="col-md-12">
              <h2 className="div-h1-blue-center">Team Sinbad Finance</h2>
            </div>
          </div>
          <div
            className="row justify-content-md-around row-padding"
            style={{ paddingBottom: "50px" }}
          >
            <div className="col-md-1"></div>
            <div className="col-md-2 ">
              <img
                className="image-height"
                src={"assets/images/avatar.png"}
                alt="logo"
              />

              <h2 className="text-center" style={{ paddingTop: "5px" }}>
                Mohoshin
              </h2>
            </div>

            <div className="col-md-2 ">
              <img
                className="image-height"
                src={"assets/images/avatar.png"}
                alt="logo"
              />
              <h2 className="text-center" style={{ paddingTop: "5px" }}>
                Moshiur
              </h2>
            </div>
            <div className="col-md-1 "></div>
          </div>
        </div>



                {/* <!-- Become an investor-> */}

                <div className="container footer-no-margin padding-extra ">
          <div className="row div-row-padding">
            {/* <div className="col-md-1"></div> */}
            <div className="col-md-7 m-auto">
              <h3 className="div-h4-blue text-start">Become an Investor</h3>
              <p>You will receive an SMS to download the app</p>

              <div className="row  padding-zero">
                <div className="col-md-2 about-padding">
                  <input type="number" id="inputMDEx" class=" border-line" />
                </div>
                <div className="col-md-5 about-padding">
                  <input type="number" id="inputMDEx" class="border-line" />
                </div>
                <div className="col-md-3 about-padding">
                <button className='btn btn-primary'> GET THE APP</button>

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
