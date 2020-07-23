import axios from "axios"

export class APIConfig {

    static BASE_URL          = "";
    static AUTH_TOKEN        = "";
    static POST_CONTENT_TYPE = "";
    static AUTH_TOKEN_HEADER = "X-Authorization";
}

export function configureAxios({baseURL = APIConfig.BASE_URL, authToken = APIConfig.AUTH_TOKEN, authCallback = null,
    postContentType = APIConfig.POST_CONTENT_TYPE, ...props} = {}) {
    axios.defaults.baseURL = baseURL;
    if (authToken !== null) {
        axios.defaults.headers.common[APIConfig.AUTH_TOKEN_HEADER] = authToken;
    }
    // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    configureAxios.authCallback = authCallback;
    axios.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        if (401 === error.response.status) {
            if (configureAxios.authCallback) {
                configureAxios.authCallback(error.response);
            }

        } else {
            return Promise.reject(error);
        }
    })
}


const API_SIGNIN            = "/signin";
const API_SIGNUP            = "/signup";
const API_SIGNOUT           = "/signout";

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
}


const MSG_SIGNIN_ERROR       = "Unauthorized Access";
const MSG_NO_CONTENT        = "No Content";

export class MSG {
    static get signinError() {
        return MSG_SIGNIN_ERROR;
    }

    static get noContent() {
        return MSG_NO_CONTENT;
    }
}