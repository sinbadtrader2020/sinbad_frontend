
/**
 * Path definition to route between JavaScript pages.
 * Paths can be accessed through Path's static
 * members, e.g., Path.index etc.
 * @type {string}
 */
const INDEX = "/";
const HOME = "/home";
const SETTING = "/setting"
const SIGNIN = "/signin";
const SIGNUP = "/signup";

const WELCOME = "/welcome";
const FAQ = "/faq";
const ABOUT = '/about'
const FEE = '/fees'
const BLOG ='/blog'
const FORUM ='/forum'
const PORTFOLIO ='/products'
const COMINGSOON ='/top'
const FULLBLOG ='/fullblog'
const FORGETPASSWORD ='/forgetpassword'
const VERIFYCODE ='/verifycode'



export class Path {
  static get index() {
    return INDEX;
  }

  static get home() {
    return HOME;
  }
  static get setting(){
    return SETTING;
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
  static get faq(){
    return FAQ;
  }
  static get about(){
    return ABOUT;
  }
  static get fee(){
    return FEE;
  }
  static get blog(){
    return BLOG;
  }
  static get forum(){
    return FORUM;
  }
  static get portfolio(){
    return PORTFOLIO;
  }
  static get comingSoon(){
    return COMINGSOON;
  }
  static get fullBlog(){
    return FULLBLOG;
  }

  static get forgetPassword(){
    return FORGETPASSWORD;
  }

  static get verifyCode(){
    return VERIFYCODE;
  }





//test perpose
  // static get graphapi(){
  //   return  '/test'
  // }
  
 
}
