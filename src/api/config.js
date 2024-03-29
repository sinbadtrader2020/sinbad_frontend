import axios from "axios";
import { Auth } from "./auth";

export class APIConfig {
  static BASE_URL = "https://sinbad.finance/api/v1";
  static AUTH_TOKEN = "";
  static POST_CONTENT_TYPE = "application/json";
  static AUTH_TOKEN_HEADER = "token";
}

export class BlogApiConfig{
  static BASE_URL =  'https://sinbad.finance/admin/api/blogs/';
}

// export class APIConfig {
//   static BASE_URL = "http://43.224.110.47:9002/api/v1";
//   static AUTH_TOKEN = "";
//   static POST_CONTENT_TYPE = "application/json";
//   static AUTH_TOKEN_HEADER = "token";
// }

// export class BlogApiConfig{
//   static BASE_URL =  'http://127.0.0.1:8000/admin/api/blogs/';
// }
export function configureAxios({
  baseURL = APIConfig.BASE_URL,
  authToken = APIConfig.AUTH_TOKEN,
  authCallback = null,
  postContentType = APIConfig.POST_CONTENT_TYPE,
  ...props
} = {}) {
  axios.defaults.baseURL = baseURL;
  if (authToken !== null) {
    axios.defaults.headers.common[APIConfig.AUTH_TOKEN_HEADER] = authToken;
  }
  // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  configureAxios.authCallback = authCallback;
  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
     
      if (401 === error.response.status) {
        if (configureAxios.authCallback) {
          configureAxios.authCallback(error.response);
          
        }
        
      } else {
        return Promise.reject(error);
      }
    }
  );
}



// blog api config

// export class APIBlogConfig {
//   static BASE_URL = "http://127.0.0.1:8000/api/blogs/";
//   static POST_CONTENT_TYPE = "application/json";
//   static AUTH_HEADER= {username: 'admin',password: 'admin'};
// }
// export function configureAxiosBlog({
//   baseURL = APIBlogConfig.BASE_URL,
//   authToken = APIBlogConfig.AUTH_HEADER,
//   authCallback = null,
//   postContentType = APIBlogConfig.POST_CONTENT_TYPE,
//   ...props
// } = {}) {
//   axios.defaults.baseURL = baseURL;
  
//   // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//   APIBlogConfig.authCallback = authCallback;
//   axios.interceptors.response.use(
//     function (response) {
//       return response;
//     },
//     function (error) {
//       if (401 === error.response.status) {
//         if (APIBlogConfig.authCallback) {
//           APIBlogConfig.authCallback(error.response);
//         }
//       } else {
//         return Promise.reject(error);
//       }
//     }
//   );
// }



// end blog  api config

const API_SIGNIN = "/signin";
const API_SIGNUP = "/signup";
const API_SIGNOUT = "/logout";
const API_EDITUSER = '/user';
const API_RESET_PASSWORD ='/resetpassword';
const API_CHANGE_PASSWORD = '/changepassword'
const API_FORGOT_PASSWORD ='/forgetpassword'
const API_COMPANY_OVERVIEW ='/company';
const API_SUBSCRIBE = '/subscribe';
const API_GET_APP = '/get_app_url';
const API_VERIFY_CODE = '/forgetpassword/verifycode'
const API_FORGET_CHANGE_PASSOWRD ='/forgetpassword/changepassword'

export class API {
  static get signin() {
    return API_SIGNIN;
  }

  static get signup() {
    return API_SIGNUP;
  }

  static get signout() {
    return API_SIGNOUT;
  }
  static get editUser() {
    return API_EDITUSER;
  }
  static get resetPassword(){
    return API_RESET_PASSWORD;
  }
  static get forgotPassword(){
    return API_FORGOT_PASSWORD;
  }
  static get verifyCode(){
    return API_VERIFY_CODE;
  }
  static get changePassword(){
    return API_CHANGE_PASSWORD;
  }
  static get forgetChangePassword(){
    return API_FORGET_CHANGE_PASSOWRD;
  }
 // company list
  static get companyOverview(){
    return API_COMPANY_OVERVIEW;
  }
  static get subscribe(){
    return API_SUBSCRIBE;
  }
  static get getApp(){
    return API_GET_APP;
  }
  
}

const MSG_SIGNIN_ERROR = "Unauthorized Access";
const MSG_NO_CONTENT = "No Content";

export class MSG {
  static get signinError() {
    return MSG_SIGNIN_ERROR;
  }

  static get noContent() {
    return MSG_NO_CONTENT;
  }
}



