

import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import MainNavBar from "./main-nav-bar";
import Footer from './footer';

export default class Faq extends Component {
    render() {
        return (
            <>
            <Helmet>
             <title>Sinbad Faq</title>
            </Helmet>
            <MainNavBar props={this.props} />

            <div className="home-intro">
            <div class="container ">
            <div class="row div-row-padding" >
            <div class="col" >
         
             <h3  style={{textAlign: "center"}}>What are you Looking for ?  
            </h3>
            </div>
          </div>
          </div>
            </div>



           
            <Footer/>
                
            </>
        )
    }
}
