import React, { Component } from "react";
import { Helmet } from "react-helmet";
import MainNavBar from "./main-nav-bar";
import Footer from "./footer";
import { AiFillAccountBook} from "react-icons/ai";

export default class Faq extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Sinbad Faq</title>
        </Helmet>
        <MainNavBar props={this.props} />
        {/* FAQ Page Into Search bar */}
        <div className="home-intro">
          <div className="container ">
            <div className="row div-row-padding">
              <div className="container">
                <p
                  className="font-weight-bold h3 mb-4 pb-1 text-center"
                  style={{ margin: "30px 0px" }}
                >
                  What are you looking for?
                </p>
              </div>


              <div className="col-md-2"></div>
            <div className="col-sm-7 ">
              <input
                type="search"
                placeholder="Find Anything?"
                aria-label="Search"
                className="faq-search  h5 font-weight-normal mb-4 pb-1"
              ></input>
            </div>
            <div className="col-md-1 ">
              <button className="faq-search-btn font-weight-bold">
                Search
              </button>
            </div>
          </div>

            </div>
          </div>
        
       
     


        {/* FAQ Page Suppoer */}
        <div className='row-padding'>
        <p className="font-weight-bold h2 mb-4 pb-1 text-center  "
            style={{color:"#002868"}}
                  
                >
                  Sinbad Finance Support
                </p>

        </div>
        <div className="m-auto faq-support-card">
      
       <div className="row justify-content-md-around faq-div-support-margin text-center ">
         
         <div className="col-md-3 " ><AiFillAccountBook size="100px"/><h5>Genaral Question </h5></div>
         <div className="col-md-3" ><AiFillAccountBook size="100px"/><h5>How it works </h5></div>

         <div className="col-md-3" >   <AiFillAccountBook size="100px"/> <h5>Ethical Investing </h5></div>


         </div>
         

         <div className="row justify-content-md-around faq-div-support-margin text-center">
         
         <div className="col-md-3" ><AiFillAccountBook size="100px"/><h5>Invesments and Portfolios </h5></div>
         <div className="col-md-3" ><AiFillAccountBook size="100px"/><h5>Client Portal and Accounts </h5></div>

         <div className="col-md-3" ><AiFillAccountBook size="100px"/><h5>Fees </h5></div>


         </div>
     
         <div className="row justify-content-md-around faq-div-support-margin text-center">
         
         <div className="col-md-3" style={{float:"left"}} ><AiFillAccountBook size="100px"/><h5>Deposits & Withdrawals </h5></div>
         

         </div>
     
         </div>

        


        <div >

        </div>


        <Footer />
      </>
    );
  }
}
