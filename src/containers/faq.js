import React, { Component } from "react";
import { Helmet } from "react-helmet";
import MainNavBar from "./main-nav-bar";
import Footer from "./footer";

import Translator from "../utils/translator";
import InputTranslation from "../utils/input-translation";
import UserMainNavBar from "./home/user-main-nav-bar";

export default class Faq extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Sinbad Faq</title>
        </Helmet>
        {this.props.isAuthenticated === false ||this.props.isAuthenticated === undefined?<MainNavBar props={this.props} />:<UserMainNavBar props={this.props}/>}

        {/* FAQ Page Into Search bar */}
        <div className="home-intro">
          <div className="container ">
            <div className="row div-row-padding">
              <div className="container">
                <p
                  className="font-weight-bold h3 mb-4 pb-1 text-center"
                  style={{ margin: "30px 0px" }}
                >
                  <Translator text="faqIntro.1" />
                </p>
              </div>

              <div className="col-md-2"></div>
              <div className="col-sm-7 ">
                <InputTranslation
                  type="search"
                  text="faqIntro.2"
                  aria-label="Search"
                  className="faq-search  h5 font-weight-normal mb-4 pb-1"
                 />
              </div>
              <div className="col-md-1 ">
                <button className="faq-search-btn font-weight-bold">
                <Translator text="faqIntro.3" />
                
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Page Suppoer */}
        <div className="row-padding">
          <p
            className="div-h4-blue h2 mb-4 pb-1 text-center  "
       
          >
            <Translator text="faqSupport.1" />
          </p>
        </div>
        <div className="m-auto faq-support-card ">
          <div className="row justify-content-md-around faq-div-support-margin text-center ">
            <div className="col-md-3 ">
            <img className='faq-img-p-s' src={"assets/icon/faq/question.png"} alt="logo" />
              <h5><Translator text="faqSupportCard.1" /> </h5>
            </div>
            <div className="col-md-3">
            <img className='faq-img-p-s' src={"assets/icon/faq/works.png"} alt="logo" />
              <h5><Translator text="faqSupportCard.2" /> </h5>
            </div>

            <div className="col-md-3">
              {" "}
              <img className='faq-img-p-s' src={"assets/icon/faq/ethical.png"} alt="logo" /> 
              <h5><Translator text="faqSupportCard.3" /> </h5>
            </div>
          </div>

          <div className="row justify-content-md-around faq-div-support-margin text-center">
            <div className="col-md-3">
            <img className='faq-img-p-s' src={"assets/icon/faq/investment.png"} alt="logo" />
              <h5><Translator text="faqSupportCard.4" /> </h5>
            </div>
            <div className="col-md-3">
            <img className='faq-img-p-s' src={"assets/icon/faq/clint-portal.png"} alt="logo" />
              <h5><Translator text="faqSupportCard.5" /> </h5>
            </div>

            <div className="col-md-3">
            <img className='faq-img-p-s' src={"assets/icon/faq/fund.png"} alt="logo" />
            
              <h5><Translator text="faqSupportCard.6" /> </h5>
            </div>
          </div>

          <div className="row justify-content-md-around faq-div-support-margin text-center">
            <div className="col-md-3" style={{ float: "left" }}>
            <img className='faq-img-p-s' src={"assets/icon/faq/diposit.png"} alt="logo" />
              <h5><Translator text="faqSupportCard.7" /> </h5>
            </div>
          </div>
        </div>

        <div></div>

        <Footer />
      </>
    );
  }
}
