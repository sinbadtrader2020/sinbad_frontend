import React from "react";
import Footer from "../footer";
import MainNavBar from "../main-nav-bar";
import { Link } from "react-router-dom";
import { Path } from "../config";
import { Helmet } from "react-helmet";

import InputTranslation from "../../utils/input-translation";
import { Auth } from "../../api/auth";


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
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    if(!pattern.test(this.state.email)){  
      alert('Enter a valid email field')
      
    }
    else {
      Auth.forgotPassword(this.state.email).then((res)=>{
        if(res!==undefined){
          if(res.status===202){
            this.props.history.push({
              pathname: Path.verifyCode,
              search: "email=" + this.state.email,
              verified :true
          
            });
            console.log(res)

          }
        }
        
      
    })
     
    }


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
                 Forgot Password{" "}
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
                type="email"
                text="signInBlock3R1.1"
                id="email"
                required
                onchange={this.handleChange}
                
                autoFocus
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
