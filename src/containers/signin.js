import React from "react";
import Footer from "./footer";
import MainNavBar from "./main-nav-bar";
import { Link } from "react-router-dom";
import { Path } from "../containers/config";
import { Helmet } from "react-helmet";
import Translator from "../utils/translator";
import InputTranslation from "../utils/input-translation";
import { Auth } from "../api/auth";

class Signin extends React.Component {
  constructor(props) {
    super(props);

    this.alertRef = null;
    this.setAlertRef = (element) => {
      this.alertRef = element;
    };

    this.state = {
      email: "",
      password: "",
      spinner: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      spinner: true,
    });

    Auth.signin(this.state.email, this.state.password).then((response) => {
      this.props.userHasAuthenticated(response[0], response[1]);
      this.setState({
        spinner: false,
      });

      if (response[0]) {
        
        this.props.history.push(Path.home);
      } else {
        // this.alertRef.handleShow(response[1].error, "danger");
        // setTimeout(this.alertRef.handleDismiss, 3000);
      // console.log(response)
      
        this.props.history.push(Path.signin);

      }
    })
  };

  render() {
    return (
      <div className="Signin">
        <Helmet>
          <title> Sign In</title>
        </Helmet>

        {/* <!-- Main menu Navbar --> */}
        <MainNavBar props={this.props} />

        {/* <!-- signin body --> */}
        <div
          className="container shadow"
          style={{ marginTop: "120px", paddingBottom: "50px" }}
        >
          <div className="row row-padding" style={{ textAlign: "center" }}>
            <div className="col-md-12">
              <h2 style={{ fontWeight: "bold" }}>
                {" "}
                <Translator text="signInBlock1R1.1" />{" "}
              </h2>
              <p>
                {" "}
                <Translator text="signInBlock2R1.1" />
                <Link to={Path.signup}>
                  {" "}
                  <Translator text="signInBlock2R2.1" />{" "}
                </Link>
              </p>
            </div>
          </div>
          <div className="row row-padding">
            <div className="col-md-9 log-in-input" >
                <form onSubmit={this.handleSubmit} >

                    <InputTranslation
                      type="mail"
                      text="signInBlock3R1.1"
                      id="email"
                      name='the_address'
                      required
                      onchange={this.handleChange}
                      autoFocus
                    />
                    <InputTranslation
                      type="password"
                      text="signInBlock4R1.1"
                      id="password"
                      required
                      onchange={this.handleChange}
                    />

                    <div>
                      <div style={{ display: "inline-flex" }}>
                        <input type="checkbox" style={{ width: "auto" }} />
                        <p>
                          {" "}
                          <Translator text="signInBlock5R1.1" />{" "}
                        </p>
                      </div>
                      <div style={{ float: "right", marginRight: "50px" }}>
                        <Link to={Path.forgetPassword}>
                          {" "}
                          <Translator text="signInBlock5R2.1" />
                        </Link>
                      </div>
                    </div>
                    <div>
                      <button
                        className="btn btn-outline-primary"
                        type='submit'
                        // onClick={this.handleSubmit}
                      >
                        {" "}
                        <Translator text="signInLogin.1" /> 
                      </button>
                    </div>
                </form>

            </div>
            {/* <!-- social account login options --> */}
            <div className="col-md-3">
              <a
                href="#top"
                className="btn btn-outline-primary btn-lg btn-block social-log"
              >
                <div>
                  <i className="fa fa-facebook"></i>
                </div>
                <p>
                  <Translator text="signInFacebook.1" />
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
                  <Translator text="signInGoogle.1" />
                </p>
              </a>
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
                  <Translator text="signInInstagram.1" />
                </p>
              </a>
            </div>
          </div>
        </div>

        {/* <!-- Website's Footer Design --> */}
        <Footer />
      </div>
    );
  }
}
export default Signin;
