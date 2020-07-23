import React from "react";

export default class Signin extends React.Component {

    render() {

        return (
            <div className="Signin">
                <div className="container shadow" style={{'margin-top': '50px', 'padding-bottom': '50px',}}>
                    <div className="row main-row" style={{'text-align': 'center',}}>
                        <div className="col-md-12">
                            <h2 style={{'font-weight': 'bold',}}>Log In</h2>
                            <p>New user? <a href="signup.html">Sign Up</a></p>
                        </div>
                    </div>
                    <div className="row main-row">
                        <div className="col-md-9 log-in-input">
                            <input type="mail" placeholder="Enter e-mail or user name"/>
                            <input type="password" placeholder="password"/>
                            <div style={{'display': 'inline-flex', 'float': 'left',}}>
                                <input type="checkbox" style={{'width': 'auto',}}/>
                                <p>Remember Me</p>
                            </div>
                            <div style={{'float': 'right', 'margin-right': '50px',}}>
                                <a href="/#">Forgot Password?</a>
                            </div>

                            <button className="btn btn-outline-success btn-block">Login</button>

                        </div>

                        <div className="col-md-3">
                            <a href="/" className="btn btn-primary btn-lg btn-block" style={{'font-size': '15px',}}><i
                                className="fa fa-facebook"></i>Continue with facebook</a>
                            <a href="/" className="btn btn-success btn-lg btn-block" style={{'font-size': '15px',}}><i
                                className="fa fa-google-plus"></i>Continue with Google</a>
                            <a href="/" className="btn btn-primary btn-lg btn-block" style={{'font-size': '15px',}}><i
                                className="fa fa-linkedin"></i>Continue with LinkedIn</a>
                            <a href="/" className="btn btn-success btn-lg btn-block" style={{'font-size': '15px',}}><i
                                className="fa fa-instagram"></i>Continue with Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
