import React from "react";
import { Helmet } from "react-helmet";
import MainNavBar from "./main-nav-bar";
import Footer from "./footer";
import Translator from "../utils/translator";
import InputTranslation from "../utils/input-translation";

import OptionTranslation from "../utils/option-translation";
import { Auth } from "../api/auth";
import { Path } from "./config";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.alertRef = null;
    this.setAlertRef = (element) => {
      this.alertRef = element;
    };
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      mobile_number: "",
      password: "",
      confirmpassword: "",
      street_address: "",
      city: "",
      country: "",
      zip: "",
      spinner: false,
    };
  }

  handleChange = (event) => {
    console.log("id---->", event.target.id, " value---->", event.target.value);

    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  //registration api event handler
  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      spinner: true,
    });
   if(this.state.password.length>=10){
    if(this.state.password===this.state.confirmpassword){
      Auth.register(
        this.state.first_name,
        this.state.last_name,
        this.state.email,
        this.state.mobile_number,
        this.state.password,
        this.state.confirmpassword,
        this.state.street_address,
        this.state.city,
        this.state.country,
        this.state.zip
      ).then((response) => {
        this.props.userHasAuthenticated(response[0], response[1]);
        this.setState({
          spinner: false,
        });
  
        if (response[0]) {
          this.props.history.push(Path.home);
        } else {
          // this.alertRef.handleShow(response[1].error, "danger");
          // setTimeout(this.alertRef.handleDismiss, 3000);
          alert(response[1].error);
         // console.log(response[1])
        }
      });
    }
    else {
      alert("password didn't match")
    }
   }
   else{
     alert("password need to be 10 charecter")
   }

 
    
  };

  render() {
    return (
      <div className="Signup">
        <Helmet>
          <title>Sign Up Page</title>
        </Helmet>
        {/* <!-- Main menu Navbar --> */}
        {/* <!-- Main menu Navbar --> */}
        <MainNavBar props={this.props} />

        {/* <!-- Signup body --> */}
        <div className="container">
          <div className="row row-padding">
            <div className="col-md-12">
              <h2>
                <Translator text="signUpBlock1R1.1" />
              </h2>
              <p>
                <Translator text="signUpBlock2R1.1" />
              </p>

              {/* <!-- Signup Form --> */}
              <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <InputTranslation
                      id="first_name"
                      type="text"
                      className="form-control"
                      text="signUpBlock3R1.1"
                      required
                      onchange={this.handleChange}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <InputTranslation
                      id="last_name"
                      type="text"
                      className="form-control"
                      text="signUpBlock3R2.1"
                      required
                      onchange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <InputTranslation
                      id="email"
                      type="email"
                      className="form-control"
                      text="signUpBlock4R1.1"
                      required
                      onchange={this.handleChange}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <InputTranslation
                      id="mobile_number"
                      type="text"
                      className="form-control"
                      text="signUpBlock4R2.1"
                      required
                      onchange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <InputTranslation
                      id="password"
                      type="password"
                      className="form-control"
                      text="signUpBlock5R1.1"
                      required
                      onchange={this.handleChange}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <InputTranslation
                      id="confirmpassword"
                      type="password"
                      className="form-control"
                      text="signUpBlock5R2.1"
                      required
                      onchange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-12">
                    <InputTranslation
                      id="street_address"
                      type="text"
                      className="form-control"
                      text="signUpBlock6R1.1"
                      onchange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <select
                      id="country"
                      onChange={this.handleChange}
                      className="form-control"
                    >
                      <OptionTranslation
                        deafult="true"
                        text="signUpBlock7R1.1"
                      />
                      <OptionTranslation text="signUpBlock7R1.2" />
                      <OptionTranslation text="signUpBlock7R1.3" />
                      <OptionTranslation text="signUpBlock7R1.4" />
                      <OptionTranslation text="signUpBlock7R1.5" />
                    </select>
                  </div>
                  <div className="form-group col-md-4">
                    <InputTranslation
                      id="city"
                      type="text"
                      className="form-control"
                      text="signUpBlock7R2.1"
                      onchange={this.handleChange}
                    />
                  </div>
                  <div className="form-group col-md-2">
                    <InputTranslation
                      id="zip"
                      type="text"
                      className="form-control"
                      text="signUpBlock7R2.2"
                      onchange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="form row">
                  <div className="col-sm-10">
                    <button
                      type="submit"
                      className="btn btn-primary"
                     
                    >
                      <Translator text="signUpBlock8R2.1" /> 
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
                <p>
                  <Translator text="signInFacebook.1" />{" "}
                </p>
              </a>
              <a
                href="top#"
                className="btn btn-outline-primary btn-lg btn-block social-log"
              >
                <div>
                  <i className="fa fa-google"></i>
                </div>
                <p>
                  <Translator text="signInGoogle.1" />{" "}
                </p>
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
                <p>
                  <Translator text="signInLinkdln.1" />
                </p>
              </a>
              <a
                href="top#"
                className="btn btn-outline-primary btn-lg btn-block social-log"
              >
                <div>
                  <i className="fa fa-instagram"></i>
                </div>
                <p>
                  <Translator text="signInInstagram.1" />{" "}
                </p>
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
