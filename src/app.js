import React from 'react';
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

class Index extends React.Component {

    render() {
        return <Redirect to={Path.home}/>;
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);

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

        return (
            <div className="App">

                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="/#">Sinbad Finance</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Products
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="/#">Action</a>
                                    <a class="dropdown-item" href="/#">Another action</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="/#">Something else here</a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/#">Learn<span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/#">Support</a>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <a href={Path.signin} class="nav-link">Login</a>
                            <a href={Path.signup} class="btn btn-success my-2 my-sm-0" type="submit">Signup</a>
                        </form>
                    </div>
                </nav>

                <Switch>
                    <AppliedRoute path={Path.index} exact component={Index} props={childProps}/>
                    <AppliedRoute path={Path.home} exact component={Home} props={childProps}/>
                    <AppliedRoute path={Path.signin} exact component={Signin} props={childProps}/>
                    <AppliedRoute path={Path.signup} exact component={Signup} props={childProps}/>
                    { /* Finally, catch all unmatched routes */ }
                    <Route component={NotFound}/>
                </Switch>

                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <a href="/#" className="nav-link">Stocks & Funds</a>
                                <a href="/#" className="nav-link">Options</a>
                                <a href="/#" className="nav-link">Cash Management</a>
                                <a href="/#" className="nav-link">Crypto</a>
                            </div>
                            <div className="col-md-3">
                                <a href="/#" className="nav-link">Learn</a>
                                <a href="/#" className="nav-link">Support</a>
                                <a href="/#" className="nav-link">Snacks</a>
                            </div>
                            <div className="col-md-3">
                                <a href="/#" className="nav-link">About Us</a>
                                <a href="/#" className="nav-link">Career</a>
                                <a href="/#" className="nav-link">Company News</a>
                            </div>
                            <div className="col-md-3">
                                <a href="/#" className="nav-link">Logo Here</a>
                                <p> ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12"
                                 style={{'text-align': 'right', 'border-bottom': 'solid 2px white',}}>
                                <div style={{display: 'inline-flex',}}>
                                    <input className="form-control mr-sm-2" type="search"
                                           placeholder="your email address" aria-label="Search"/>
                                    <button className="btn btn-success my-2 my-sm-0" type="submit">Subscribe</button>
                                </div>
                                <ul>
                                    <li><a href="/#">Check the background of the firm on FINRA's Broker Check</a></li>
                                    <li><a href="/#">Brokerage Customer Relationship Summary</a></li>
                                    <li><a href="/#">Sinbad Finance Terms & Conditions</a></li>
                                    <li><a href="/#">Disclosure Library</a></li>
                                    <li><a href="/#">Privacy</a></li>
                                </ul>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <p style={{'font-size': '13px', 'color': 'white',}}>
                                        Securities trading is offered to self-directed customers by Robinhood
                                        Financial,Robinhood Financial is a member of the Financial Industry Regulatory
                                        Authority (FINRA).
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </footer>

            </div>
        );
    }
}

export default withRouter(App);
