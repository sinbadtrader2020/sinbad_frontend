import React, { Component } from "react";

import Footer from "./footer";
import MainNavBar from "./main-nav-bar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import BecomeAnInvestor from "./become-an-investor";
import Translator from "../utils/translator";

export default class Fees extends Component {
  render() {
    return (
      <>
        <MainNavBar props={this.props} />

        {/* <!-- Fees page design -->
             <!-- Intro design --> */}
        <div className="home-intro">
          <div className="container ">
            <div className="row div-row-padding">
              <div className="col-md-7   ">
                <h1 className="mt-5 font-weight-bold ">   <Translator text="feesIntro.1" /></h1>
                <p className="mt-2 p-size-font">
                <Translator text="feesIntro.2" />
                </p>
              </div>

              <div className="col-md-2 m-auto align-center  ">
                <img
                  className="img-inherit fund-img-padd imgwidth"
                  src={"assets/images/fund-dollar.png"}
                  alt="logo"
                />
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>
        </div>
        {/* end intro */}

        {/* start Annual fees */}

        <div className="container ">
          <div className="row div-row-padding">
            <div className="col-md-12">
              <h1 className=" font-weight-bold h1-blue-center-start">
              <Translator text="feeAnnual.1" />
              </h1>
              <div className="row div-row-padding-only">
                <div className="col-md-3"></div>
                <div className="col-md-3 m-auto">
                  <h4 className="div-h1-blue-end"><Translator text="feeAnnual.2" /></h4>
                </div>
                <div className="col-md-2">
                  <i className="input-before">$</i>
                  <input type="number" className="input-line-style"></input>
                </div>
                <div className="col-md-4 "></div>
              </div>
              <div className="text-center">
                <h4 className="justify-content-lg-center center-start">
                <Translator text="feeAnnual.3" />
                </h4>
              </div>

              {/*  */}

              <div className="row div-padding-only m-auto">
                <div className="col-md-1"></div>

                <div className="col-md-3  ">
                  <div className="deposit-circule m-auto ">
                    <h2 className="font-weight-bold ">100.00%</h2>
                    <p><Translator text="feeAnnual.4" /></p>
                  </div>
                  <p className="p-annual-ammount  m-auto">$100 - $249,999</p>
                </div>
                <div className="col-md-3 ">
                  <div className="deposit-circule-white m-auto ">
                    <h2 className="font-weight-bold">0.49%</h2>
                    <p className="p-gray"><Translator text="feeAnnual.4" /></p>
                  </div>
                  <p className="p-annual-ammount m-auto">$250,000+</p>
                </div>
                <div className="col-md-5">
                  {/*  */}
                  <div className="row div-row-padding-only div-row-margin-check">
                    <div className="col-md-1 div-row-padding-only">
                      <FontAwesomeIcon className="color-icon" icon={faCheck} />
                    </div>
                    <div className="col-md-10 div-row-padding-only">
                      <p className="p-gray p-size-font">
                        {" "}
                        <Translator text="feesAnnualIcon.1" />{" "}
                      </p>
                    </div>
                  </div>

                  <div className="row div-row-padding-only div-row-margin-check">
                    <div className="col-md-1 div-row-padding-only">
                      <FontAwesomeIcon className="color-icon" icon={faCheck} />
                    </div>
                    <div className="col-md-10 div-row-padding-only">
                      <p className="p-gray p-size-font">
                        {" "}
                        <Translator text="feesAnnualIcon.2" />{" "}
                      </p>
                    </div>
                  </div>

                  <div className="row div-row-padding-only div-row-margin-check">
                    <div className="col-md-1 div-row-padding-only">
                      <FontAwesomeIcon className="color-icon" icon={faCheck} />
                    </div>
                    <div className="col-md-10 div-row-padding-only">
                      <p className="p-gray p-size-font">
                        {" "}
                        <Translator text="feesAnnualIcon.3" />{" "}
                      </p>
                    </div>
                  </div>

                  <div className="row div-row-padding-only div-row-margin-check">
                    <div className="col-md-1 div-row-padding-only">
                      <FontAwesomeIcon className="color-icon" icon={faCheck} />
                    </div>
                    <div className="col-md-10 div-row-padding-only">
                      <p className="p-gray p-size-font">
                        {" "}
                        <Translator text="feesAnnualIcon.4" />{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}

              <div className="m-auto text-center">
                <p className="center-start p-gray">
                <Translator text="feeAnnual.5" />{" "}
                </p>
              </div>
            </div>

            {/* <div className="col-md-1"></div> */}
          </div>
        </div>

        {/* Zero Fess */}

        <div className="container footer-no-margin padding-extra">
          <div className="row div-row-padding">
            {/* <div className="col-md-1"></div> */}
            <div className="col-md-5 m-auto ">
              <div>
                <h3 className="div-h4-blue text-start"> <Translator text="feesZero1.1" /></h3>
                <p className="p-gray">
                <Translator text="feesZero1.2" />
                </p>
              </div>

              <div>
                <h3 className="div-h4-blue text-start"> <Translator text="feesZero2.1" /></h3>
                <p className="p-gray">
                <Translator text="feesZero2.2" />
                </p>
              </div>

              <div>
                <h3 className="div-h4-blue text-start">
                <Translator text="feesZero3.1" />
                </h3>
                <p className="p-gray">
                <Translator text="feesZero3.2" />
                </p>
              </div>
            </div>
            <div className="col-md-1"></div>

            <div className="col-md-5 m-auto">
              <img
                className="img-inherit"
                src={"assets/images/zero-fees.png"}
                alt="logo"
              />
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>

        {/* <!-- Become an investor-> */}

          <BecomeAnInvestor/>

        <Footer />
      </>
    );
  }
}
