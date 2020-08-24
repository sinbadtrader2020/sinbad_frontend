import React, { Component } from "react";
import MainNavBar from "./main-nav-bar";
import Footer from "./footer";

export default class Forum extends Component {
  render() {
    return (
      <>
        <MainNavBar props={this.props} />
        {/* <!-- Forum Page Design -->
             <!-- Intro design --> */}
        <div className="home-intro">
          <div className="container ">
            <div className="row div-row-padding">
              <div className="col-md-4 justify-content-lg-center m-auto">
                <h2
                  className="text-center font-weight-bold"
                  style={{ margin: "30px 0px" }}
                >
                  Sinbad Finance Forum
                </h2>
                <p className="text-center forum-intro-p">
                  The place to discuss anything about Ethical investing or
                  Sinbad Finance
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* feature request start from here*/}
        <div className="container">
          <div className="row row-padding justify-content-md-center ">
            <div className="col-sm-3 justify-content-md-around forum-div overflow-hidden table table-md-4 border forum-border-color">
              <h5 className="text-center forum-m15 font-weight-bold   ">
                Feature Request
              </h5>
              <p className="text-center forum-f13 font-weight-normal ">
                {" "}
                Do you have any feedback or ideas to improve Sinbad Finance?
                Share them here and vote for the ideas{" "}
              </p>
            </div>
            <div className="col-md-1 justify-content-md-around "></div>
            <div className="col-sm-3 justify-content-md-around forum-div overflow-hidden table table-md-4 border forum-border-color">
              {" "}
              <h5 className=" text-center forum-m15 font-weight-bold    ">
                Genaral Discussion
              </h5>
              <p className=" text-center forum-f13 font-weight-normal    ">
                Do you have thoughts that you'd like to share with the
                community? Create anew post here.{" "}
              </p>
            </div>
          </div>

          <div className="row justify-content-md-center ">
            <div className="col-sm-3 justify-content-md-around forum-div overflow-hidden table table-md-4 border forum-border-color">
              {" "}
              <h5 className=" text-center forum-m15 font-weight-bold    ">
                Ethical Finance
              </h5>
              <p className=" text-center forum-f13 font-weight-normal    ">
                Are you interested in sharing your knowledge, or asking
                questions about Ethical finance? This page is for you
              </p>
            </div>
            <div className="col-md-1 justify-content-md-around "></div>
            <div className="col-sm-3 justify-content-md-around forum-div overflow-hidden table table-md-4 border forum-border-color">
              {" "}
              <h5 className=" text-center forum-m15 font-weight-bold   ">
                Key Investing Terms
              </h5>
              <p className=" text-center forum-f13 font-weight-normal    ">
                Are you new to investing? Visit this page to learn more about
                the different terms and become a smarter investor.{" "}
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}
