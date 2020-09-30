import React from "react";
import Footer from "./footer";
import MainNavBar from "./main-nav-bar";
import { Link } from "react-router-dom";
import { Path } from "../containers/config";
import { Helmet } from "react-helmet";
import Translator from "../utils/translator";
import InputTranslation from "../utils/input-translation";
import { Auth } from "../api/auth";

class ForgetPassword extends React.Component {
  constructor(props) {
    super(props);

    this.alertRef = null;
    this.setAlertRef = (element) => {
      this.alertRef = element;
    };

    this.state = {
      email: null,
     
      spinner: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    Auth.resetPassword(this.state.email).then((res)=>{
        if(res!==undefined){
            alert(res.data.message);
            this.props.history.push(Path.welcome);
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
                 Forget Password{" "}
              </h2>
              <p>
                {" "}
                Back to
                <Link to={Path.signin}>
                  {" "}
                   Log In{" "}
                </Link>
              </p>
            </div>
          </div>
          <div className="row  justify-content-center text-center" style={{paddingTop:'50px'}}>
            <div className="col-md-9 log-in-input">
              <InputTranslation
              className='text-center'
                type="mail"
                text="signInBlock3R1.1"
                id="email"
                onchange={this.handleChange}
              />
             

              <div>
                
               
              </div>
              <div>
                <button
                  className="btn btn-outline-primary"
                  onClick={this.handleSubmit}
                >
                  {" "}
                  Reset 
                </button>
              </div>
            </div>

         
          </div>
        </div>

        {/* <!-- Website's Footer Design --> */}
        <Footer />
      </div>
    );
  }
}
export default ForgetPassword;
