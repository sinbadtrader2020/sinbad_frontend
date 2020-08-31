import React, { Component } from 'react'
import MainNavBar from './main-nav-bar'
import Footer from './footer'
import { Helmet } from 'react-helmet'
import { AiFillAccountBook } from 'react-icons/ai'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faCheck,faPlusCircle,fa} from '@fortawesome/free-solid-svg-icons'
import { Tabs, Tab } from 'react-bootstrap'

export default class Portfolio extends Component {
    render() {
        return (
            <>
            <Helmet>
            <title>Sinbad Portfolio</title>
            </Helmet>
            <MainNavBar props={this.props} />

              {/* Portfolio intro */}
        <div className="home-intro">
          <div className="container ">
            <div className="row div-row-padding">
              <div className="container">
                <p className="pb-head-1">
                 Find the efficient way to invest
                </p>
                <p className="pb-subhead-2">
                 Compelete the portfolios to give you the trust you seek.
                </p>
              </div>

             
            </div>
          </div>
        </div>


        {/* what will you invest in sinbad */}
         
         <div className="container">
          <div className="row div-row-padding">
            <div className="col-md-12">
              <h2 className="div-h1-blue-center">
                What you'll invest in Sinbad Finance.
              </h2>
            </div>
          </div>
          <div className="row div-row-padding-top-b" >
            <div className="col-md-1"></div>
            <div className="col-md-12">
                <div className='row div-margin-no m-auto justify-content-sm-between'>
                <div className='div-bg-color-black '>
             
                <AiFillAccountBook size="50px"  />
                 <p >Global Stocks</p>
               
                </div>
                <div className='div-bg-color-white'>
                <AiFillAccountBook size="50px" />
                 <p className='p-black'>Emerging Marketing Stocks</p>
                </div>
                <div className='div-bg-color-white'>
                <AiFillAccountBook size="50px" />
                 <p className='p-black'>Sukuk</p>
                </div>
                <div className='div-bg-color-white'>
                <AiFillAccountBook size="50px" />
                 <p className='p-black'>Real Estate </p></div>
                <div className='div-bg-color-white'>
                <AiFillAccountBook size="50px"  />
                 <p className='p-black'>Gold</p></div>
                <div className=' div-bg-color-white'>
                <AiFillAccountBook size="50px" />
                 <p className='p-black'>Bit Coin</p>
                </div>


                </div>
            </div>
            <div className="col-md-1"></div>
            
          </div>
          <div className="div-top-padding">
          <div className='col-md-10'>
          <h6 className='div-h4-blue'>Global Stocks</h6>
          <p className='p-gray div-invest-padding'> Global stocks are mainly from the developed markets of the world. These are diversified investments across sectors and geographies and generally follow a large-cap value investment style.</p>
        </div>
          </div>

          <div className="div-top-padding">
          <div className='col-md-10'>
          <h6 className='div-h4-blue'>Reason we chose this Asset Class:</h6>
           <div className='row div-margin-no div-invest-padding'>

           <div className='col-md-1'>
           <FontAwesomeIcon className='color-icon' icon={faCheck} />
           </div>
           <div className='col-md-11'>
           <p className='p-gray '> Direct and diversified investment in US, Uk and other foreign companies in developed markets that complay with islamic investment principles.</p>
           </div>

           <div className='col-md-1'>
           <FontAwesomeIcon className='color-icon' icon={faCheck} />
           </div>
           <div className='col-md-10'>
           <p className='p-gray '> Exposure to developed and mature stock markets</p>
           </div>

           </div>
        </div>
          </div>
        </div>

{/* Our portfolio */}
                <div className="container">
                <div className="row div-row-padding">
                <div className='row padding-zero'>
                <div className='col-md-11 m-auto h1-blue-center-start '>
                 <h2 className='font-weight-bold'>Our Portfolios</h2>
                 </div>
                <div className='col-md-11 m-auto ' >
                <p>You'll be investing in a portfolio that has a healthy mix of different companies and investments from numerous industries.</p>
                </div>
                </div>
 
                </div>


            <div className='row padding-zero justify-content-sm-center m-auto'>
                        
              <ul class="nav nav-pills col-md-6 justify-content-lg-center mb-3" id="pills-tab" role="tablist">
                <li class="nav-item col-md-6">
                  <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Allocation</a>
                </li>
                <li class="nav-item col-md-6">
                  <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Past Performance</a>
                </li>
                
              </ul>
       

            

                </div>

               
              <div class="tab-content" id="pills-tabContent">
           
               <div className='row div-row-padding tab-pane fade show active overflow-hidden ' id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                     <div className='col-md-3 float-left'>
                        <p>Portfolio Types</p>
                        <div class="nav flex-column nav-pills padding-zero " id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a class="portfolio nav-link active" id="v-pills-Very-Aggressive-tab" data-toggle="pill" href="#v-pills-Very-Aggressive" role="tab" aria-controls="v-pills-home" aria-selected="true">Very Aggressive</a>
                        <a class="portfolio nav-link" id="v-pills-Aggressive-tab" data-toggle="pill" href="#v-pills-Aggressive" role="tab" aria-controls="v-pills-profile" aria-selected="false">Aggressive</a>
                        <a class="portfolio nav-link" id="v-pills-Moderately-Aggressive-tab" data-toggle="pill" href="#v-pills-Moderately-Aggressive" role="tab" aria-controls="v-pills-messages" aria-selected="false">Moderately Aggressive</a>
                        <a class="portfolio nav-link" id="v-pills-Moderate-tab" data-toggle="pill" href="#v-pills-Moderate" role="tab" aria-controls="v-pills-settings" aria-selected="false">Moderate</a>
                        <a class="portfolio nav-link" id="v-pills-Moderately-Conservative-tab" data-toggle="pill" href="#v-pills-Moderately-Conservative" role="tab" aria-controls="v-pills-settings" aria-selected="false">Moderately Conservative</a>
                        <a class="portfolio nav-link" id="v-pills-Very-Conservative-tab" data-toggle="pill" href="#v-pills-Very-Conservative" role="tab" aria-controls="v-pills-settings" aria-selected="false">Very Conservative</a>
                      
                         </div>
        
 
                     </div>

                     <div className='col-md-7 float-left'>
                          <div class="tab-content" id="v-pills-tabContent">
                              <div class="tab-pane fade show active" id="v-pills-Very-Aggressive" role="tabpanel" aria-labelledby="v-pills-Very-Aggressive-tab">.Very Aggressive..</div>
                              <div class="tab-pane fade" id="v-pills-Aggressive" role="tabpanel" aria-labelledby="v-pills-Aggressive-tab">..Aggressive.</div>
                              <div class="tab-pane fade" id="v-pills-Moderately-Aggressive" role="tabpanel" aria-labelledby="v-pills-Moderately-Aggressive-tab">..Moderately Aggressive.</div>
                              <div class="tab-pane fade" id="v-pills-Moderate" role="tabpanel" aria-labelledby="v-pills-Moderate-tab">.Moderate..</div>
                            
                              <div class="tab-pane fade" id="v-pills-Moderately-Conservative" role="tabpanel" aria-labelledby="v-pills-Moderately-Conservative-tab">.Moderately Conservative..</div>
                              <div class="tab-pane fade" id="v-pills-Very-Conservative" role="tabpanel" aria-labelledby="v-pills-Very-Conservative-tab">.Very Conservative..</div>


                          </div>
 
                      </div>
                 </div>
            {/*  */}
        
 
{/*  */}
  
                  <div className='row div-row-padding tab-pane fade overflow-hidden ' id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                  <div className='col-md-3 float-left'>
                     <p>Portfolio Types</p>
                     <div class="nav flex-column nav-pills padding-zero " id="v-pills-tab" role="tablist" aria-orientation="vertical">
                     <a class="portfolio nav-link active" id="v-pills-Very-Aggressive-tab" data-toggle="pill" href="#v-pills-Very-Aggressive1" role="tab" aria-controls="v-pills-home" aria-selected="true">Very Aggressive</a>
                     <a class="portfolio nav-link" id="v-pills-Aggressive-tab" data-toggle="pill" href="#v-pills-Aggressive1" role="tab" aria-controls="v-pills-profile" aria-selected="false">Aggressive</a>
                     <a class="portfolio nav-link" id="v-pills-Moderately-Aggressive-tab" data-toggle="pill" href="#v-pills-Moderately-Aggressive1" role="tab" aria-controls="v-pills-messages" aria-selected="false">Moderately Aggressive</a>
                     <a class="portfolio nav-link" id="v-pills-Moderate-tab" data-toggle="pill" href="#v-pills-Moderate1" role="tab" aria-controls="v-pills-settings" aria-selected="false">Moderate</a>
                     <a class="portfolio nav-link" id="v-pills-Moderately-Conservative-tab" data-toggle="pill" href="#v-pills-Moderately-Conservative1" role="tab" aria-controls="v-pills-settings" aria-selected="false">Moderately Conservative</a>
                     <a class="portfolio nav-link" id="v-pills-Very-Conservative-tab" data-toggle="pill" href="#v-pills-Very-Conservative1" role="tab" aria-controls="v-pills-settings" aria-selected="false">Very Conservative</a>
                    
                     </div>
                    
 
 
 
                     </div>
                     <div className='col-md-7 float-left'>
                     <div class="tab-content" id="v-pills-tabContent">
                     <div class="tab-pane fade show active" id="v-pills-Very-Aggressive1" role="tabpanel" aria-labelledby="v-pills-Very-Aggressive-tab">.Very Aggressive..</div>
                     <div class="tab-pane fade" id="v-pills-Aggressive1" role="tabpanel" aria-labelledby="v-pills-Aggressive-tab">..Aggressive.</div>
                     <div class="tab-pane fade" id="v-pills-Moderately-Aggressive1" role="tabpanel" aria-labelledby="v-pills-Moderately-Aggressive-tab">..Moderately Aggressive1.</div>
                     <div class="tab-pane fade" id="v-pills-Moderate1" role="tabpanel" aria-labelledby="v-pills-Moderate-tab">.Moderate..</div>
                   
                     <div class="tab-pane fade" id="v-pills-Moderately-Conservative1" role="tabpanel" aria-labelledby="v-pills-Moderately-Conservative-tab">.Moderately Conservative.1.</div>
                     <div class="tab-pane fade" id="v-pills-Very-Conservative1" role="tabpanel" aria-labelledby="v-pills-Very-Conservative-tab">.Very Conservative1..</div>


                     </div>
 
                      </div>
                 </div>
 {/*  */}
           </div>

                
                </div>













{/* end portfolio */}












        {/* Everything to get you betwer result */}


        <div className="container footer-no-margin padding-extra">
          <div className="row top-padding bg-color-div">
            <div className='col-md-6'>
            <h2 style={{paddingTop:"10px"}}>Everthing to help you get better results</h2>

            <div className='row div-margin-no div-invest-padding'>



                <div className='col-md-1 m-auto '>
                <FontAwesomeIcon className='color-icon-blue' fontSize='20px' icon={faPlusCircle} />
             
                </div>
                <div className='col-md-11'>
                <h3 className='p-gray '> Diversified</h3>
                </div>
                </div>
                <div className='row div-margin-no div-invest-padding'>
                <div className='col-md-1'>

                </div>
                <div className='col-md-11'>
                <p>you'll be invested in hundreds of individual companies ethical bonds, and commodities, ensureing your concentration risk to one security is limited.</p>

                </div>
            </div>

            {/*  */}

 <div className='row div-margin-no div-invest-padding'>



                <div className='col-md-1 m-auto '>
                <FontAwesomeIcon className='color-icon-blue' fontSize='20px' icon={faPlusCircle} />
             
                </div>
                <div className='col-md-11'>
                <h3 className='p-gray '> Low Cost</h3>
                </div>
                </div>
                <div className='row div-margin-no div-invest-padding'>
                <div className='col-md-1'>

                </div>
                <div className='col-md-11'>
                <p>The investment funds we use are efficient and low cost. Every penny you save on expenses can help you achieve higher returns.</p>

                </div>
            </div>
            {/*  */}
             <div className='row div-margin-no div-invest-padding'>



                <div className='col-md-1 m-auto '>
                <FontAwesomeIcon className='color-icon-blue' fontSize='20px' icon={faPlusCircle} />
             
                </div>
                <div className='col-md-11'>
                <h3 className='p-gray '> Optimized</h3>
                </div>
                </div>
                <div className='row div-margin-no div-invest-padding'>

                <div className='col-md-1'>

                </div>
                <div className='col-md-11'>
                <p>Our investment committee uses the modern portfolio theory to build portfolios that seek to maximize your return based on your risk profile.</p>

                </div>
            </div>
            {/*  */}
            </div>
            <div className='col-md-6'>
            <img
                  className="img-inherit"
                  src={"assets/images/about-intro.png"}
                  alt="logo"
                />
                
            </div>
          </div>
        </div>


                {/* <!-- Become an investor-> */}

        <div className="container footer-no-margin padding-extra">
          <div className="row div-row-padding">
            {/* <div className="col-md-1"></div> */}
            <div className="col-md-7 m-auto">
              <h3 className="div-h4-blue text-start">Become an Investor</h3>
              <p>You will receive an SMS to download the app</p>

              <div className="row  padding-zero">
                <div className="col-md-2 about-padding">
                  <input type="number" id="inputMDEx" class=" border-line" />
                </div>
                <div className="col-md-5 about-padding">
                  <input type="number" id="inputMDEx" class="border-line" />
                </div>
                <div className="col-md-3 about-padding">
                <button className='btn btn-primary'> GET THE APP</button>

                </div>
              </div>

              <p>
                By clicking on the 'GET THE APP' button above, you confirm that
                you have entered your own phone number and you consent to
                receiving the SMS.
              </p>
            </div>
           <div className='col-md-1'>
        
           </div>
            <div className="col-md-3"
              style={{ maxHeight: "350px", zIndex: " -1" }}
            >
              <img
                src={"assets/images/become-an-investor.png"}
                alt="logo"
                style={{ height: "420px", width: "inherit" }}
              />
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>


            <Footer />
                
            </>
        )
    }
}
