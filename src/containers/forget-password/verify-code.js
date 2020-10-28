import React, { Component } from 'react'

import Footer from "../footer";
import MainNavBar from "../main-nav-bar";
import { Link } from "react-router-dom";
import { Path } from "../config";
import { Helmet } from "react-helmet";

import InputTranslation from "../../utils/input-translation";
import { Auth } from "../../api/auth";
class VerifyCode extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            email:this.props.location.search.split('='),
            verify_code:'',
            new_password:'',
            confirm_password:'',
            isVerified:false,
        }
    }

    handleChange = (event) => {
        this.setState({
          [event.target.id]: event.target.value,
        });
    };

    handleSubmit = (event) => {
        console.log(this.state.email[this.state.email.length-1])
        Auth.verifyCode(this.state.email[this.state.email.length-1],this.state.verify_code).then((res)=>{
          if(res===undefined||res===null){
             this.setState({
               isVerified:false
             })
          }
          else{
            if(res.status===202){
              this.setState({
                isVerified:true
              })
            }
          }
        })
    }
    handleChangePasswowrd =(event)=>{
      if(this.state.new_password.length>=10){
        if(this.state.new_password===this.state.confirm_password){
          if(this.state.isVerified===true){
            Auth.forgetChangePassword(this.state.email[this.state.email.length-1],this.state.new_password).then((res)=>{
              console.log(res)
              if(res!==undefined){
                if(res.status===202){
                  Auth.signin(this.state.email[this.state.email.length-1],this.state.new_password).then((response) => {
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
                  });
                  alert(res.data.message);
                }
              }
            })

            
          }
        }
        else {
          alert("Password didn't match")
        }
      }
      else {
        alert("Password need to be 10 charecter")
      }
    }
    
    render() {
      if(this.props.location.verified!==true){
        this.props.history.push(Path.signin)
      }
     
        return (
          
          <div className="Signin">
            <Helmet>
              <title> Verify</title>
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
                     {this.state.isVerified?"Enter New Password":'Verify Code '}
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
              {this.state.isVerified===false?
                <div className="row  justify-content-center text-center" style={{paddingTop:'50px'}}>
                <div className="col-md-9 log-in-input">
               
                  <InputTranslation
                  className='text-center'
                    type="text"
                    text="Enter the verification code send in email"
                    id="verify_code"
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
                      Verify 
                    </button>
                  </div>
                
                </div>
    
             
              </div>:null


              
              }
              {/* change */}
              {this.state.isVerified===true?
                <div className="row  justify-content-center text-center " style={{paddingTop:'50px'}}>
             
                 
       
             <div className="form-group col-md-5">
                   <InputTranslation
                     id="new_password"
                     type="password"
                     autocomplete="test" 
                     className="form-control mar"
                     text="New Password"
                     onchange={this.handleChange}
                   />
                
                   <InputTranslation
                     id="confirm_password"
                     type="password"
                     autocomplete="test" 
                     className="form-control mar"
                     text="Confirm Password"
                     onchange={this.handleChange}
                    />
                
   
   
                
                 
                 <div>
                   <button
                     className="btn btn-outline-primary mar"
                     onClick={this.handleChangePasswowrd}
                   >
                     {" "}
                     Submit 
                   </button>
                 </div>
               
               </div>
               
   
            
             </div>:null
              
              }
             
            </div>
    
            {/* <!-- Website's Footer Design --> */}
            <Footer />
          </div>
        );
      }
    }
export default VerifyCode;
