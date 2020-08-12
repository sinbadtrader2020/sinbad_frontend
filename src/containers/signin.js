import React from "react";
import Footer from "./footer";
import MainNavBar from "./main-nav-bar";
import { Link} from "react-router-dom";
import {Path} from "../containers/config";
import { Helmet } from "react-helmet";

export default class Signin extends React.Component {

    render() {

        return (
            <div className="Signin">
               <Helmet>
               <title>Sign In</title>
        </Helmet>
                
         {/* <!-- Main menu Navbar --> */}
         <MainNavBar/>

	{/* <!-- signin body --> */}
	<div className="container shadow" style={{marginTop: "120px", paddingBottom: "50px"}}>
		<div className="row row-padding" style={{textAlign: "center"}}>
			<div className="col-md-12">
				<h2 style={{fontWeight: "bold"}}>Log In</h2>
				<p>New user? <Link to={Path.signup}>Sign Up</Link></p>
			</div>
		</div>
		<div className="row row-padding">
			<div className="col-md-9 log-in-input">
				<input type="mail" placeholder="Enter e-mail or user name"/>
				<input type="password" placeholder="password"/>
				<div>
					<div style={{display: "inline-flex"}}>
						<input type="checkbox" style={{width: "auto"}}/>
						<p>Remember Me</p>
					</div>
					<div style={{float: "right", marginRight: "50px"}}>
						<a href="top#">Forgot Password?</a>
					</div>
				</div>
				<div>
					<button className="btn btn-outline-primary">Login</button>
				</div>
				
			</div>

			{/* <!-- social account login options --> */}
			<div className="col-md-3">
				<a href="#top" className="btn btn-outline-primary btn-lg btn-block social-log">
					<div>
						<i className="fa fa-facebook"></i>
					</div><p>Continue with facebook</p></a>
				<a href="top#" className="btn btn-outline-primary btn-lg btn-block social-log">
					<div>
						<i className="fa fa-google"></i>
					</div><p>Continue with Google</p></a>
				<a href="top#" className="btn btn-outline-primary btn-lg btn-block social-log">
					<div>
						<i className="fa fa-linkedin"></i>
					</div><p>Continue with LinkedIn</p></a>
				<a href="top#" className="btn btn-outline-primary btn-lg btn-block social-log">
					<div>
						<i className="fa fa-instagram"></i>
					</div><p>Continue with Instagram</p></a>
			</div>
		</div>
	</div>






	{/* <!-- Website's Footer Design --> */}
	<Footer/>

            </div>
        );
    }
}
