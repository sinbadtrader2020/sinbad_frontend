import React, { Component } from "react";
import MainNavBar from "./main-nav-bar";
import Footer from "./footer";
import Translator from "../utils/translator";
import { Helmet } from "react-helmet";
import UserMainNavBar from "./home/user-main-nav-bar";

export default class Forum extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Sinbad Forum</title>
        </Helmet>
        {this.props.isAuthenticated === false ||this.props.isAuthenticated === undefined?<MainNavBar props={this.props} />:<UserMainNavBar props={this.props}/>}

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
                   <Translator text="forumInto.1" />
                </h2>
                <p className="text-center forum-intro-p">
                <Translator text="forumInto.2" />
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
              <Translator text="forumIntoCard1.1" />
              </h5>
              <p className="text-center forum-f13 font-weight-normal ">
                {" "}
                <Translator text="forumIntoCard1.2" />
              </p>
            </div>
            <div className="col-md-1 justify-content-md-around "></div>
            <div className="col-sm-3 justify-content-md-around forum-div overflow-hidden table table-md-4 border forum-border-color">
              {" "}
              <h5 className=" text-center forum-m15 font-weight-bold    ">
              <Translator text="forumIntoCard2.1" />

              </h5>
              <p className=" text-center forum-f13 font-weight-normal    ">
              <Translator text="forumIntoCard2.2" />
              {" "}
              </p>
            </div>
          </div>

          <div className="row justify-content-md-center ">
            <div className="col-sm-3 justify-content-md-around forum-div overflow-hidden table table-md-4 border forum-border-color">
              {" "}
              <h5 className=" text-center forum-m15 font-weight-bold    ">
              <Translator text="forumIntoCard3.1" />

              </h5>
              <p className=" text-center forum-f13 font-weight-normal    ">
              <Translator text="forumIntoCard3.2" />

              </p>
            </div>
            <div className="col-md-1 justify-content-md-around "></div>
            <div className="col-sm-3 justify-content-md-around forum-div overflow-hidden table table-md-4 border forum-border-color">
              {" "}
              <h5 className=" text-center forum-m15 font-weight-bold   ">
              <Translator text="forumIntoCard4.1" />

              </h5>
              <p className=" text-center forum-f13 font-weight-normal    ">
              <Translator text="forumIntoCard4.2" />

              </p>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}
