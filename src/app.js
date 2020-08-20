import React, {Suspense} from 'react';
import {Redirect} from "react-router"
import {Switch, withRouter, Route} from "react-router-dom";
import AppliedRoute from "./utils/applied-route";
import {Path} from "./containers/config";
import {Auth} from "./api/auth"
import {configureAxios} from "./api/config";
import Home from "./containers/home";
import Signin from "./containers/signin";
import Signup from "./containers/signup";
import NotFound from "./containers/not-found";
import Welcome from './containers/welcome';

import i18n from './utils/i18n';


class Index extends React.Component {

    render() {
        return <Redirect to={Path.welcome}/>;
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);

        i18n.changeLanguage('en');
        this.state = {
            isAuthenticated: false,
            user: ""
        };

        this.logout = () => {
            Auth.signout();

            this.userHasAuthenticated(false);
            this.props.history.push(Path.login);
        };

        this.authCallback = (response) => {
            this.logout();
        };

        Auth.setAuthCallback(this.authCallback);

        let result = Auth.currentSession();
        configureAxios({authToken: (result == null ? null : result.token), authCallback: this.authCallback});
    }

    componentWillMount() {
        try {
            let result = Auth.currentSession();
            if (result) {
                this.userHasAuthenticated(true, result);
            }
        }
        catch (e) {
            if (e !== 'No current user') {
                alert(e);
            }
        }
    }

    userHasAuthenticated = (authenticated, data = "") => {
        this.setState({isAuthenticated: authenticated, user: data});
    };

    handleLogout = event => {
        this.logout();
    };

    render() {
        const childProps = {
            isAuthenticated: this.state.isAuthenticated,
            user: this.state.user,
            userHasAuthenticated: this.userHasAuthenticated,
            handleLogout: this.handleLogout
        };

        // TODO Fix it
        // if (this.state.isAuthenticated) {
        //     if (this.props.location.pathname === Path.login) {
        //         return <Redirect to={Path.home}/>;
        //     }
        // }
        // else {
        //     if (this.props.location.pathname !== Path.login) {
        //         return <Redirect to={Path.login}/>;
        //     }
        // }

         
        // if (this.state.isAuthenticated) {
        //     if (this.props.location.pathname === Path.signin) {
        //         // alert("App1 - " + childProps.isAuthenticated + " " + this.props.location.pathname);
        //         return <Redirect to={Path.home}/>;
        //     }
        // }
        // else {
        //     if (this.props.location.pathname !== Path.signin) {
        //         // alert("App2 - " + childProps.isAuthenticated + " " + this.props.location.pathname);
        //         return <Redirect to={Path.this.props.location.pathname}/>;
        //     }
        // }


        return (
            <Suspense fallback={
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>}>

                <div className="App">

                    <Switch>
                        <AppliedRoute path={Path.index} exact component={Index} props={childProps}/>
                        
                        <AppliedRoute path={Path.welcome} exact component={Welcome} props={childProps}/>
                        <AppliedRoute path={Path.home} exact component={Home} props={childProps}/>
                        <AppliedRoute path={Path.signin} exact component={Signin} props={childProps}/>
                        <AppliedRoute path={Path.signup} exact component={Signup} props={childProps}/>
                        { /* Finally, catch all unmatched routes */ }
                        <Route component={NotFound}/>
                    </Switch>
                </div>


            </Suspense>
        );
    }
}

export default withRouter(App);
