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
    if (data && data.token) {
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
    } else {
      this.result.error = "Unknown Error";
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

  updateData(user) {
    this.result.data = user;

    localStorage.setItem(this.session, JSON.stringify(this.result));
  }

  currentSession() {
    return JSON.parse(localStorage.getItem(this.session));
  }








  
  
}

export const Auth = new Authentication();
