import React, { Component } from "react";
import MainNavBar from "./main-nav-bar";
import Footer from "./footer";
import Translator from "../utils/translator";
import BecomeAnInvestor from "./become-an-investor";
import { Helmet } from "react-helmet";

export default class About extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Sinbad About</title>
        </Helmet>
        <MainNavBar props={this.props} />

        {/* <!-- About page design -->
             <!-- Intro design --> */}
        <div className="home-intro">
          <div className="container ">
            <div className="row div-row-padding" style={{ textAlign: "start" }}>
              <div className="col-md-7">
                <h1 className="mt-5">
                  {" "}
                  <Translator text="aboutInto.1" />
                  <br /> <Translator text="aboutInto.2" />
                </h1>
                <p className="mt-5 font-weight-bold">
                  {" "}
                  <Translator text="aboutInto.3" />
                </p>
                <p>
                  <Translator text="aboutInto.4" />
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
              <h2 className="div-h1-blue-center">
                {" "}
                <Translator text="aboutWhySinbad.1" />
              </h2>
              <p className="text-center">
                {" "}
                <Translator text="aboutWhySinbad.1" />
              </p>
            </div>
          </div>

          {/* why sinbad finance card view */}
          <div className="m-auto faq-support-card faq-about-card">
            <div className="row justify-content-md-around faq-div-support-margin text-center ">
              <div className="col-md-4">
                <img src={"assets/images/signup.png"} alt="logo" />
                <h2>
                  <Translator text="aboutCard1.1" />
                </h2>
                <p>
                  <Translator text="aboutCard1.2" />
                </p>
              </div>
              <div className="col-md-4">
                <img src={"assets/images/fund.png"} alt="logo" />
                <h2>
                  <Translator text="aboutCard2.1" />
                </h2>
                <p>
                  <Translator text="aboutCard2.2" />
                </p>
              </div>

              <div className="col-md-4">
                <img src={"assets/images/monitor.png"} alt="logo" />
                <h2>
                  {" "}
                  <Translator text="aboutCard3.1" />
                </h2>
                <p>
                  {" "}
                  <Translator text="aboutCard3.2" />
                </p>
              </div>
            </div>

            <div className="row justify-content-md-around faq-div-support-margin text-center">
              <div className="col-md-4">
                <img src={"assets/images/signup.png"} alt="logo" />
                <h2>
                  {" "}
                  <Translator text="aboutCard4.1" />
                </h2>
                <p>
                  {" "}
                  <Translator text="aboutCard4.2" />
                </p>
              </div>
              <div className="col-md-4">
                <img src={"assets/images/fund.png"} alt="logo" />

                <h2>
                  {" "}
                  <Translator text="aboutCard5.1" />
                </h2>

                <p>
                  {" "}
                  <Translator text="aboutCard5.2" />
                </p>
              </div>

              <div className="col-md-4">
                <img src={"assets/images/monitor.png"} alt="logo" />
                <h2>
                  <Translator text="aboutCard6.1" />
                </h2>
                <p>
                  {" "}
                  <Translator text="aboutCard6.2" />
                </p>
              </div>
            </div>
          </div>
          {/*about page  how it works */}
          <div className="container">
            <div className="row div-row-padding">
              <div className="col-md-12">
                <h2 className="div-h1-blue-center">
                  <Translator text="aboutHowItWorks.1" />
                </h2>
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
                        <Translator text="aboutHowItWorks.2" />
                      </h4>
                    </div>
                  </div>
                </div>
                {/* work2  */}

                <div className="row div-row-work-padding">
                  <div className="col-md-7 m-auto">
                    <div className="works-div ">
                      <h4 className="text-center">
                        <Translator text="aboutHowItWorks.3" />
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
                        <Translator text="aboutHowItWorks.4" />
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
                        <Translator text="aboutHowItWorks.5" />
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
              <h2 className="div-h1-blue-center">
                <Translator text="aboutGrow.1" />
              </h2>
              <p className="text-center" style={{ fontSize: "20px" }}>
                {" "}
                <Translator text="aboutGrow.2" />
              </p>
            </div>
          </div>

          {/* why sinbad finance card view */}

          <div className="m-auto faq-support-card padding-zero">
            <div className="row  justify-content-md-around faq-div-support-margin text-center ">
              <div className="col-md-3 ">
                <h4 className="font-weight-bold">
                  {" "}
                  <Translator text="aboutGrowCard1.1" />
                </h4>
                <p>
                  <Translator text="aboutGrowCard1.2" />
                </p>
                <p>
                  <Translator text="aboutGrowCard1.3" />
                </p>
              </div>
              <div className="col-md-3">
                <h4 className="font-weight-bold">
                  {" "}
                  <Translator text="aboutGrowCard2.1" />
                </h4>
                <p>
                  <Translator text="aboutGrowCard2.2" />
                </p>
                <p>
                  <Translator text="aboutGrowCard2.3" />
                </p>
              </div>

              <div className="col-md-3">
                {" "}
                <h4 className="font-weight-bold">
                  {" "}
                  <Translator text="aboutGrowCard3.1" />
                </h4>
                <p>
                  <Translator text="aboutGrowCard3.2" />
                </p>
                <p>
                  <Translator text="aboutGrowCard3.3" />
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team sinbad */}
        <div className="container">
          <div className="row div-row-padding">
            <div className="col-md-12">
              <h2 className="div-h1-blue-center">
                {" "}
                <Translator text="aboutTeam.1" />
              </h2>
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
                <Translator text="aboutTeam.2" />
              </h2>
            </div>

            <div className="col-md-2 ">
              <img
                className="image-height"
                src={"assets/images/avatar.png"}
                alt="logo"
              />
              <h2 className="text-center" style={{ paddingTop: "5px" }}>
                <Translator text="aboutTeam.3" />
              </h2>
            </div>
            <div className="col-md-1 "></div>
          </div>
        </div>

        {/* <!-- Become an investor-> */}

        <BecomeAnInvestor />

        <Footer />
      </>
    );
  }
}
