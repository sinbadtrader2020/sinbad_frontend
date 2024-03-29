import axios from "axios";

import { API, configureAxios } from "./config";

class Authentication {
  constructor() {
    this.result = {
      data: null,
      token: null,
      error: null,
    };
    

    this.session = "tirzok-session";
    this.authCallback = null;
  }

  onSetResult(data = "", error = "") {
  
   console.log(error)
   
    if (data && data.token) {
      console.log(data.data[0]['id'])
      this.result.data = data.data;
      this.result.token = data.token;
      this.result.error = null;

      localStorage.setItem(this.session, JSON.stringify(this.result));
      configureAxios({
        authToken: data.token,
        authCallback: this.authCallback,
      });

      return [true, this.result];
    }

    localStorage.removeItem(this.session);

    this.result.data = null;
    this.result.token = null;
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.message
    ) {
      this.result.error = error.response.data.message;
    }
    //    modification by zameer
    if (data && !data.token) {
      localStorage.removeItem(this.session);

      this.result.data = data.data;

      this.result.token = null;
      return [false, this.result];
    }
    

    return [false, this.result];
  }

  setAuthCallback(authCallback) {
    this.authCallback = authCallback;
  }

  signin(email, password) {
    return axios
      .post(API.signin, {
        email: email,
        password: password,
      })
      .then((response) => this.onSetResult(response.data))
      .catch((error) => this.onSetResult("", error));

  }
  // TO DO Registration sinbad Api connection
  register(
    first_name,
    last_name,
    email,
    mobile_number,
    password,
    confirmpassword,
    street_address,
    city,
    country,
    zip
  ) {
    return axios
      .post(API.signup, {
        first_name: first_name,
        last_name: last_name,
        email: email,
        mobile_number: mobile_number,
        password: password,
        // confirmpassword: confirmpassword ,
        street_address: street_address,
        city: city,
        country: country,
        zip_code: zip,
      })
      .then((response) => this.onSetResult(response.data))
      .catch((error) => this.onSetResult("", error));
  }

  async signout() {
    localStorage.removeItem(this.session);
    return axios
      .post(API.signout)
      .then((response) => this.onSetResult(response.data))
     .catch((error) => this.onSetResult("", error));

  }

  updateUser(user,userID) {
    // console.log()
    
    
    return axios
    .post(API.editUser+"/"+userID,user)
    
    
    
    // // this.result.data = user;

    // localStorage.setItem(this.session, JSON.stringify(this.result));
  }
  updateData(userID,token){
    return  axios.get(API.editUser+"/"+userID)
    .then((response) => {this.result.token=token;this.result.data = response.data.data;localStorage.setItem(this.session, JSON.stringify(this.result));})
  }

  currentSession() {
    return JSON.parse(localStorage.getItem(this.session));
  }



  resetPassword(email){
    return axios
    .post(API.resetPassword, {
      email: email,
      
    }) 
    .catch(error => alert(error.response.data.message))
    

  }
  forgotPassword(email){
    return axios
    .post(API.forgotPassword, {
      email: email,
      
    }) 
    .catch(error => alert(error.response.data.message))
    

  }
  verifyCode(email,verifycode){
    return axios
    .post(API.verifyCode, {
      email: email,
      verifycode :verifycode
      
    }) 
    .catch(error => alert(error.response.data.message))
    

  }

  changePassword(email,password,new_password){
    return axios
    .post(API.changePassword,{
      email:email,
      password:password,
      new_password:new_password
    })
    .then((response) => alert(response.data.message))
    .catch(error => alert(error.response.data.message))

  }

  forgetChangePassword(email,password){
    return axios
    .post(API.forgetChangePassword,{
      email:email,
      password:password,
    
    })
   
    .catch(error => alert(error.response.data.message))

  }


  subscribeEmail(data){
    console.log(data)
    return axios
    .post(API.subscribe, data)
    .then(res=>alert(res.data.message))
    .catch(error => alert(error.response.data.message))

  }


  getApp(number){
    console.log(number)
    
    return axios
    .post(API.getApp, {'mobile_number':number})
    .then(res=>alert('Coming soon, you will be notified'))
    .catch(error => alert(error.response.data.message))

  }







  
  
}

export const Auth = new Authentication();
