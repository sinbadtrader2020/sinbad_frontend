import React, { Component } from "react";
import Translator from "../utils/translator";
import InputTranslation from "../utils/input-translation";
import { Path } from "./config";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <>
        {/* <!-- Website's Footer Design --> */}
        <footer>
          <div className="container">
            {/* <!-- Footer Essential links & Company Description --> */}
            <div className="row">
              <div className="col-md-3">
                <Link to={Path.comingSoon} className="nav-link">
                  <Translator text="welFootCol1R1.1" />
                </Link>
                <Link to={Path.comingSoon} className="nav-link">
                  <Translator text="welFootCol1R2.1" />
                </Link>
                <Link to={Path.comingSoon} className="nav-link">
                  <Translator text="welFootCol1R3.1" />
                </Link>
                <Link to={Path.comingSoon} className="nav-link">
                  <Translator text="welFootCol1R4.1" />
                </Link>
              </div>
              <div className="col-md-3">
                <Link to={Path.comingSoon} className="nav-link">
                  <Translator text="welFootCol2R1.1" />
                </Link>
                <Link to={Path.comingSoon} className="nav-link">
                  <Translator text="welFootCol2R2.1" />
                </Link>
                <Link to={Path.comingSoon} className="nav-link">
                  <Translator text="welFootCol2R3.1" />
                </Link>
              </div>
              <div className="col-md-3">
                <Link to={Path.comingSoon} className="nav-link">
                  <Translator text="welFootCol3R1.1" />
                </Link>
                <Link to={Path.comingSoon} className="nav-link">
                  <Translator text="welFootCol3R2.1" />
                </Link>
                <Link to={Path.comingSoon} className="nav-link">
                  <Translator text="welFootCol3R3.1" />
                </Link>
              </div>
              <div className="col-md-3">
                <Link className="navbar-brand" to={Path.welcome}>
                  <img className='sinbad-log' src={"assets/images/sinbad-logo1.png"} alt="Logo" />
                </Link>
                <p className="footer-p">
                  {" "}
                  <Translator text="welFootCol4R1.1" />
                </p>
              </div>
            </div>

            {/* <!-- Footer Subscribe --> */}
            <div className="row">
              <div className="col-md-12 footer-subscribe">
                <div>
                  <InputTranslation
                    className="form-control"
                    type="search"
                    id="user"
                    text="welFootCol4Row1R1.1"
                    aria-label="Search"
                  />

                  <button className="btn btn-success" type="submit">
                    <Translator text="welFootCol4Row1R2.1" />
                  </button>
                </div>
                <ul>
                  <li>
                    <Link to={Path.comingSoon}>
                      <Translator text="welFootCol4Row2R1.1" />
                    </Link>
                  </li>
                  <li>
                    <Link to={Path.comingSoon}>
                      <Translator text="welFootCol4Row3R1.1" />
                    </Link>
                  </li>
                  <li>
                    <Link to={Path.comingSoon}>
                      <Translator text="welFootCol4Row4R1.1" />
                    </Link>
                  </li>
                  <li>
                    <Link to={Path.comingSoon}>
                      <Translator text="welFootCol4Row5R1.1" />{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to={Path.comingSoon}>
                      <Translator text="welFootCol4Row6R1.1" />
                    </Link>
                  </li>
                </ul>
              </div>

              {/* <!-- Footer Bottom: Company Information--> */}

              <div className="row" style={{ margin: "auto" }}>
                <div className="col-md-12">
                  <p style={{ fontSize: "13px", color: "white" }}>
                    <Translator text="welFootCol4Row7R1.1" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
