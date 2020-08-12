/**
 * Path definition to route between JavaScript pages.
 * Paths can be accessed through Path's static
 * members, e.g., Path.index etc.
 * @type {string}
 */
const INDEX                 = "/";
const HOME                  = "/home";
const SIGNIN                = "/signin";
const SIGNUP                = "/signup";

const WELCOME               = "/welcome";


export class Path {
    static get index() {
        return INDEX;
    }

    static get home() {
        return HOME;
    }

    static get signin() {
        return SIGNIN;
    }

    static get signup() {
        return SIGNUP;
    }

    static get welcome() {
        return WELCOME;
    }
    
}