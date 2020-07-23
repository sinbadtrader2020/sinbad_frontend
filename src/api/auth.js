import axios from "axios"
import {API, configureAxios} from "./config"

class Authentication {
    constructor() {
        this.result = {
            data: null,
            token: null,
            error: null
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
            configureAxios({authToken: data.token, authCallback: this.authCallback});

            return [true, this.result];
        }

        localStorage.removeItem(this.session);

        this.result.data = null;
        this.result.token = null;
        if (error && error.response && error.response.data && error.response.data.message) {
            this.result.error = error.response.data.message;
        }
        else {
            this.result.error = "Unknown Error";
        }

        return [false, this.result];
    }

    setAuthCallback(authCallback) {
        this.authCallback = authCallback;
    }

    signin(email, password) {
        return axios.post(API.signin, {
            username: email,
            password: password
        })
            .then(response => this.onSetResult(response.data))
            .catch(error => this.onSetResult("", error));
    }

    signout(email) {
        localStorage.removeItem(this.session);
        return axios.post(API.signout, {
            username: email
        })
            .then(response => this.onSetResult(response.data))
            .catch(error => this.onSetResult("", error));
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
