import React from "react";
import { Helmet } from "react-helmet";
import MainNavBar from "./main-nav-bar";
import Footer from "./footer";

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
              <h2>Make Your Money Move</h2>
              <p>
                Halal Trading lets you invest in companies you love,
                commission-free.
              </p>

              {/* <!-- Signup Form --> */}
              <form>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="*First Name"
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="*Last Name"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="*E-mail"
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="*Mobile Number"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="*Password (min,10 characters)"
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="*Confirm Password (min,10 characters)"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Street Address"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <select id="" className="form-control">
                      <option selected>Country</option>
                      <option>Argentina</option>
                      <option>Brazil</option>
                      <option>Bangladesh</option>
                      <option>Denmark</option>
                    </select>
                  </div>
                  <div className="form-group col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City / State"
                    />
                  </div>
                  <div className="form-group col-md-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="ZIP"
                    />
                  </div>
                </div>

                <div className="form row">
                  <div className="col-sm-10">
                    <button type="submit" className="btn btn-primary">
                      Sign Up
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
                <p>Continue with facebook</p>
              </a>
              <a
                href="top#"
                className="btn btn-outline-primary btn-lg btn-block social-log"
              >
                <div>
                  <i className="fa fa-google"></i>
                </div>
                <p>Continue with Google</p>
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
                <p>Continue with LinkedIn</p>
              </a>
              <a
                href="top#"
                className="btn btn-outline-primary btn-lg btn-block social-log"
              >
                <div>
                  <i className="fa fa-instagram"></i>
                </div>
                <p>Continue with Instagram</p>
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
