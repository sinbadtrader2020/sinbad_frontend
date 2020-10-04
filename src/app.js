import React, { Suspense } from "react";
import { Redirect } from "react-router";
import { Switch, withRouter, Route } from "react-router-dom";
import AppliedRoute from "./utils/applied-route";
import { Path } from "./containers/config";
import { Auth } from "./api/auth";
import { configureAxios } from "./api/config";
import Home from "./containers/home/home";
import Signin from "./containers/signin";
import Signup from "./containers/signup";
import NotFound from "./containers/not-found";
import Welcome from "./containers/welcome";

import i18n from "./utils/i18n";
import Faq from "./containers/faq";
import About from "./containers/about";

import Fees from "./containers/fee";
import Blog from "./containers/blog";
import Forum from "./containers/forum";
import Portfolio from "./containers/portfolio";
import ComingSoon from "./containers/coming-soon";
import fullBlog from "./containers/full-blog";
import Setting from "./containers/home/setting";
import ForgetPassword from "./containers/forget-password";






class Index extends React.Component {

  render() {
    return <Redirect to={Path.welcome} />;

  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("languiage",localStorage.getItem('language'))
    localStorage.getItem('language')!==null? i18n.changeLanguage( localStorage.getItem('language')): i18n.changeLanguage("en");
   
    this.state = {
      isAuthenticated: false,
      user: "",
    };

    this.logout = () => {
      Auth.signout();

      this.userHasAuthenticated(false);
      this.props.history.push(Path.welcome);
    };

    this.authCallback = (response) => {
      alert(response.data.message)
    };

    Auth.setAuthCallback(this.authCallback);

    let result = Auth.currentSession();
    configureAxios({
      authToken: result == null ? null : result.token,
      authCallback: this.authCallback,
    });
  }

  componentWillMount() {
 
    try {
      let result = Auth.currentSession();
      if (result) {
        this.userHasAuthenticated(true, result);
      }
    } catch (e) {
      if (e !== "No current user") {
        alert(e);
      }
    }
  }

  userHasAuthenticated = (authenticated, data = "") => {
    this.setState({ isAuthenticated: authenticated, user: data });
  };

  handleLogout = (event) => {
    this.logout();
  };

  render() {
   

    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      user: this.state.user,
      userHasAuthenticated: this.userHasAuthenticated,
      handleLogout: this.handleLogout,
    };

    // // TODO Fix it
    // if (this.state.isAuthenticated===true) {
    //     if (this.props.location.pathname === Path.login) {
    //         return <Redirect to={Path.home}/>;
    //     }
    // }
    // else {
    //     if (this.props.location.pathname !== Path.login) {
    //         return <Redirect to={Path.login}/>;
    //     }
    // }
    console.log(this.state.isAuthenticated)
    if (this.state.isAuthenticated) {
      if (
        this.props.location.pathname === Path.signin ||
        this.props.location.pathname === Path.signup ||
        this.props.location.pathname === Path.welcome
      ) {
        // alert("App1 - " + childProps.isAuthenticated + " " + this.props.location.pathname);
        return <Redirect to={Path.home} />;
      }
    } 
    else {
      if (this.props.location.pathname === Path.home||
        this.props.location.pathname === Path.setting
        ) {
          console.log('pathwelcome')
        return <Redirect to={Path.welcome} />;
      }
    }

    return (
    
      <Suspense
        fallback={
         
          
          <div className="div-center d-flex justify-content-center">
            <div className="loading spinner-border"  role="status"> 
            </div>
            <div className='loading2 loading-img'> 

            </div>
          </div>
          
        }
      >
        <div className="App">
        
       
   
          <Switch>
            <AppliedRoute
              path={Path.index}
              exact
              component={Index}
              props={childProps}
            />

            <AppliedRoute
              path={Path.welcome}
              exact
              component={Welcome}
              props={childProps}
            />
            <AppliedRoute
              path={Path.home}
              exact
              component={Home}
              props={childProps}
            />
            <AppliedRoute
              path={Path.setting}
              exact
              component={Setting}
              props={childProps}
            />
            <AppliedRoute
              path={Path.signin}
              exact
              component={Signin}
              props={childProps}
            />
            <AppliedRoute
              path={Path.signup}
              exact
              component={Signup}
              props={childProps}
            />

             <AppliedRoute
              path={Path.faq}
              exact
              component={Faq}
              props={childProps}
            />
              <AppliedRoute
              path={Path.about}
              exact
              component={About}
              props={childProps}
            />

               <AppliedRoute
              path={Path.fee}
              exact
              component={Fees}
              props={childProps}
            />

            <AppliedRoute
              path={Path.blog}
              exact
              component={Blog}
              props={childProps}
            />


               <AppliedRoute
              path={Path.forum}
              exact
              component={Forum}
              props={childProps}
            />


            <AppliedRoute
              path={Path.portfolio}
              exact
              component={Portfolio}
              props={childProps}
            />

            <AppliedRoute
              path={Path.comingSoon}
              exact
              component={ComingSoon}
              props={childProps}
            />

            <AppliedRoute
              path={Path.fullBlog}
              exact         
              component={fullBlog}
              props={childProps}
            />










            {/* forget password */}
             <AppliedRoute
              path={Path.forgetPassword}
              exact         
              component={ForgetPassword}
              props={childProps}
            />

            


            {/* Finally, catch all unmatched routes */}
            <Route component={NotFound} />
          </Switch>
        </div>
      </Suspense>
    );
  }
}

export default withRouter(App);
