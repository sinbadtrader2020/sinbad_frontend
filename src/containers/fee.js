import React, { Component } from "react";

import Footer from "./footer";
import MainNavBar from "./main-nav-bar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faCheck } from '@fortawesome/free-solid-svg-icons'

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
              
            >
           
            <div className='col-md-7   '>
             <h1 className='mt-5 font-weight-bold '> Pricing</h1> 
             <p className='mt-2 p-size-font'>No trading fess, no commisions, no hidden fees. Simple and clear.</p>
            </div>
             
              <div className='col-md-2 m-auto align-center  '>
              <img className='img-inherit fund-img-padd imgwidth' src={"assets/images/fund-dollar.png"} alt="logo" />

              </div>
              <div className="col-md-2"></div>

            </div>
          </div>
        </div>
        {/* end intro */}

        {/* start Annual fees */}

        <div className="container ">
        <div className="row div-row-padding" >

          <div className="col-md-12">
              <h1 className=' font-weight-bold h1-blue-center-start'>
               Just one, clear, annual fee 
              </h1>
              <div className='row div-row-padding-only'>
              <div className='col-md-3'></div>
                <div className='col-md-3 m-auto'>
                  <h4 className="div-h1-blue-end">
                  Starting deposit
                  </h4>

                </div>
                <div className='col-md-2'>
                <i className="input-before">$</i>
                <input type='number' className="input-line-style" ></input>
               
                </div>
                <div className='col-md-4 '></div>
              </div>
              <div className='text-center'>
              <h4 className="justify-content-lg-center center-start">What will i be charged?</h4>
              </div>

              {/*  */}

              <div className='row div-row-padding-only m-auto'>
              <div className='col-md-1'></div>

              <div className="col-md-3  ">
              <div className="deposit-circule m-auto " >
              <h2 className='font-weight-bold'>100.00%</h2>
              <p>per year</p>


              </div>
              <p className='p-annual-ammount  m-auto'>$100 - $249,999</p>

              </div>
              <div className='col-md-3 '>
              <div className="deposit-circule-white m-auto ">
              <h2 className='font-weight-bold'>0.49%</h2>
              <p className='p-gray'>per year</p>

              </div>
              <p className='p-annual-ammount m-auto'>$250,000+</p>

              </div>
              <div className='col-md-5'>
              {/*  */}
              <div className='row div-row-padding-only div-row-margin-check'>
                  <div className="col-md-1 div-row-padding-only">
                  <FontAwesomeIcon className='color-icon' icon={faCheck} />

                  </div>
                  <div className='col-md-10 div-row-padding-only'>
                    <p className='p-gray p-size-font'> Unlimited deposits and withdrawl. </p>
                  </div>

              </div>

              <div className='row div-row-padding-only div-row-margin-check'>
                  <div className="col-md-1 div-row-padding-only">
                  <FontAwesomeIcon className='color-icon' icon={faCheck} />

                  </div>
                  <div className='col-md-10 div-row-padding-only'>
                    <p className='p-gray p-size-font'> Free portfolio recomendation. </p>
                  </div>

              </div>

              <div className='row div-row-padding-only div-row-margin-check'>
                  <div className="col-md-1 div-row-padding-only">
                  <FontAwesomeIcon className='color-icon' icon={faCheck} />

                  </div>
                  <div className='col-md-10 div-row-padding-only'>
                    <p className='p-gray p-size-font'> Portfolio reblanceing. </p>
                  </div>

              </div>

              <div className='row div-row-padding-only div-row-margin-check'>
                  <div className="col-md-1 div-row-padding-only">
                  <FontAwesomeIcon className='color-icon' icon={faCheck} />

                  </div>
                  <div className='col-md-10 div-row-padding-only'>
                    <p className='p-gray p-size-font'> Relable client support </p>
                  </div>

              </div>
             

              </div>
              </div>
              {/*  */}

              <div className="m-auto text-center"><p className="center-start p-gray" >The investment funds we use may have their own fees, this is not charged by Sinbad Finance </p></div>
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
