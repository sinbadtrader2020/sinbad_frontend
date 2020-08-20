import React from "react";
import MainNavBar from "./main-nav-bar";
import { Auth } from "../api/auth";
import { Redirect } from "react-router";
import { Path } from "./config";


export default class Home extends React.Component {
    

    render() {
     
   

        return (
            
            <div className="Home" >
            <MainNavBar />
         
            </div>
        );
    }
}
