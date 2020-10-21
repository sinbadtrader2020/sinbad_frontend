import React, { Component } from "react";
import { Auth } from "../api/auth";
import Translator from "../utils/translator";

export default class BecomeAnInvestor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      code: "",
      number: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };
  handleSubmit = () => {
    let phonenumber = "";
    phonenumber = this.state.code.concat(this.state.number);

    if (phonenumber !== "") {
      Auth.getApp(phonenumber);
    } else {
      alert("Enter a mobile number");
    }
  };
  render() {
    return (
      <div className="container  padding-extra padding-be-invest">
        <div className="row div-row-padding">
          {/* <div className="col-md-1"></div> */}
          <div className="col-md-7 m-auto">
            <h3 className="div-h4-blue text-start">
              {" "}
              <Translator text="becomeAnInvestor.1" />
            </h3>
            <p>
              {" "}
              <Translator text="becomeAnInvestor.2" />
            </p>

            <div className="overflow-hidden  padding-zero ">
              <div className="float-left about-padding pad-zero m-auto">
                <input
                  type="number"
                  id="code"
                  className=" border-line1 "
                  placeholder="+1"
                  onChange={this.handleChange}
                />
              </div>
              <div className="float-left  about-padding pad-zero">
                <input
                  type="number"
                  id="number"
                  className="border-line"
                  placeholder="1xxxxxxxxx"
                  onChange={this.handleChange}
                />
              </div>
              <div className="float-left  about-padding pad-zero">
                <button className="btn btn-primary" onClick={this.handleSubmit}>
                  {" "}
                  <Translator text="becomeAnInvestor.3" />
                </button>
              </div>
            </div>

            <p>
              <Translator text="becomeAnInvestor.4" />
            </p>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-3 text-center">
            <img
              className="img-responsive"
              src={"assets/images/become-an-investor.png"}
              alt="logo"
            />
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    );
  }
}
