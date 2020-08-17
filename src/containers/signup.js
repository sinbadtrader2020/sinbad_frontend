import React from "react";
import { Helmet } from "react-helmet";
import MainNavBar from "./main-nav-bar";
import Footer from "./footer";
import Translator from "../utils/translator";
import InputTranslation from "../utils/input-translation";

import OptionTranslation from "../utils/option-translation";

export default class Signup extends React.Component {
  render() {
    return (
      <div className="Signup">
        <Helmet>
          <title>Sign Up Page</title>
        </Helmet>
        {/* <!-- Main menu Navbar --> */}
        {/* <!-- Main menu Navbar --> */}
        <MainNavBar />

        {/* <!-- Signup body --> */}
        <div className="container">
          <div className="row row-padding">
            <div className="col-md-12">
              <h2><Translator text='signUpBlock1R1.1'/></h2>
              <p>
              <Translator text='signUpBlock2R1.1'/>
              </p>

              {/* <!-- Signup Form --> */}
              <form>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <InputTranslation
                      type="text"
                      className="form-control"
                      text='signUpBlock3R1.1'
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <InputTranslation
                      type="text"
                      className="form-control"
                      text='signUpBlock3R2.1'
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <InputTranslation
                      type="email"
                      className="form-control"
                      text='signUpBlock4R1.1'
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <InputTranslation
                      type="text"
                      className="form-control"
                      text='signUpBlock4R2.1'
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <InputTranslation
                      type="password"
                      className="form-control"
                      text='signUpBlock5R1.1'
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <InputTranslation
                      type="password"
                      className="form-control"
                      text='signUpBlock5R2.1'
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-12">
                    <InputTranslation
                      type="text"
                      className="form-control"
                      text='signUpBlock6R1.1'
                    />
                    
                  </div>
                </div>
                

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <select id="" className="form-control">
                      <OptionTranslation deafult="true" text='signUpBlock7R1.1'/>
                      <OptionTranslation text='signUpBlock7R1.2'/>
                      <OptionTranslation text='signUpBlock7R1.3'/>
                      <OptionTranslation text='signUpBlock7R1.4'/>
                      <OptionTranslation text='signUpBlock7R1.5' />
                    
                    </select>
                  </div>
                  <div className="form-group col-md-4">
                    <InputTranslation
                      type="text"
                      className="form-control"
                      text='signUpBlock7R2.1'
                    />
                  </div>
                  <div className="form-group col-md-2">
                    <InputTranslation
                      type="text"
                      className="form-control"
                      text='signUpBlock7R2.2'
                    />
                  </div>
                </div>

                <div className="form row">
                  <div className="col-sm-10">
                    <button type="submit" className="btn btn-primary">
                    <Translator text='signUpBlock8R2.1'/> 
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* <!-- social account login options --> */}
          <div className="row row-padding">
            <div className="col-md-3"></div>
            <div className="col-md-3 social-log-pad">
              <a
                href="top#"
                className="btn btn-outline-primary btn-lg btn-block social-log"
              >
                <div>
                  <i className="fa fa-facebook"></i>
                </div>
                <p><Translator text='signInFacebook.1'/>  </p>
              </a>
              <a
                href="top#"
                className="btn btn-outline-primary btn-lg btn-block social-log"
              >
                <div>
                  <i className="fa fa-google"></i>
                </div>
                <p><Translator text='signInGoogle.1'/>  </p>
              </a>
            </div>
            <div className="col-md-3 social-log-pad">
              <a
                href="top#"
                className="btn btn-outline-primary btn-lg btn-block social-log"
              >
                <div>
                  <i className="fa fa-linkedin"></i>
                </div>
                <p><Translator text='signInLinkdln.1'/></p>
              </a>
              <a
                href="top#"
                className="btn btn-outline-primary btn-lg btn-block social-log"
              >
                <div>
                  <i className="fa fa-instagram"></i>
                </div>
                <p><Translator text='signInInstagram.1'/> </p>
              </a>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>

        {/* <!-- Website's Footer Design --> */}
        <Footer />
      </div>
    );
  }
}
