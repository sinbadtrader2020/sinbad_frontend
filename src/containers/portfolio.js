import React, { Component } from 'react'
import MainNavBar from './main-nav-bar'
import Footer from './footer'
import { Helmet } from 'react-helmet'
import { AiFillAccountBook } from 'react-icons/ai'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck,faPlusCircle,faMinusCircle} from '@fortawesome/free-solid-svg-icons'

import Graph from '../utils/past-performance-graph'
import BecomeAnInvestor from './become-an-investor'
import Translator from '../utils/translator'
import AllocatoinChart from '../test/allocation-chart'

export default class Portfolio extends Component {
  constructor(){
    super()

    this.state={
      divExpand:"Diversified",
      bg_color:"#002868",
    }
  }
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
                <Translator text="portfolioIntro.1" />
                </p>
                <p className="pb-subhead-2">
                <Translator text="portfolioIntro.2" />
                
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
               <Translator text="portfolioWhatInvest.1" />
              </h2>
            </div>
          </div>
          <div className="row div-row-padding-top-b" >
            <div className="col-md-1"></div>
            <div className="col-md-12">
                <div className='row div-margin-no m-auto justify-content-sm-between'>
                <div className='div-bg-color-black '>
             
                <AiFillAccountBook size="50px"  />
                 <p >Global Stocks </p>
               
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
                        
              <ul className="nav nav-pills col-md-6 justify-content-lg-center mb-3" id="pills-tab" role="tablist">
                <li className="nav-item col-md-6">
                  <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Allocation</a>
                </li>
                <li className="nav-item col-md-6">
                  <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Past Performance</a>
                </li>
                
              </ul>
       

            

                </div>

               
              <div className="tab-content" id="pills-tabContent">
           
               <div className='row  tab-pane fade show active overflow-hidden ' id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                     <div className='col-md-3 float-left'>
                        <p>Portfolio Types</p>
                        <div className="nav flex-column nav-pills padding-zero " id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a className="portfolio nav-link active" id="v-pills-Very-Aggressive-tab" data-toggle="pill" href="#v-pills-Very-Aggressive" role="tab" aria-controls="v-pills-home" aria-selected="true">Very Aggressive</a>
                        <a className="portfolio nav-link" id="v-pills-Aggressive-tab" data-toggle="pill" href="#v-pills-Aggressive" role="tab" aria-controls="v-pills-profile" aria-selected="false">Aggressive</a>
                        <a className="portfolio nav-link" id="v-pills-Moderately-Aggressive-tab" data-toggle="pill" href="#v-pills-Moderately-Aggressive" role="tab" aria-controls="v-pills-messages" aria-selected="false">Moderately Aggressive</a>
                        <a className="portfolio nav-link" id="v-pills-Moderate-tab" data-toggle="pill" href="#v-pills-Moderate" role="tab" aria-controls="v-pills-settings" aria-selected="false">Moderate</a>
                        <a className="portfolio nav-link" id="v-pills-Moderately-Conservative-tab" data-toggle="pill" href="#v-pills-Moderately-Conservative" role="tab" aria-controls="v-pills-settings" aria-selected="false">Moderately Conservative</a>
                        <a className="portfolio nav-link" id="v-pills-Very-Conservative-tab" data-toggle="pill" href="#v-pills-Very-Conservative" role="tab" aria-controls="v-pills-settings" aria-selected="false">Very Conservative</a>
                      
                         </div>
        
 
                     </div>

                     <div className='col-md-3 float-left allocation-graph-padding '>
                          <AllocatoinChart/>
 
                      </div>
                 </div>
            {/*  */}
        
 
{/*  */}
  
                  <div className='row div-padding-graph tab-pane fade overflow-hidden ' id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                  <div className='col-md-3 float-left'>
                     <p>Portfolio Types</p>
                     <div className="nav flex-column nav-pills padding-zero " id="v-pills-tab" role="tablist" aria-orientation="vertical">
                     <a className="portfolio nav-link active" id="v-pills-Very-Aggressive-tab" data-toggle="pill" href="#v-pills-Very-Aggressive1" role="tab" aria-controls="v-pills-home" aria-selected="true">Very Aggressive</a>
                     <a className="portfolio nav-link" id="v-pills-Aggressive-tab" data-toggle="pill" href="#v-pills-Aggressive1" role="tab" aria-controls="v-pills-profile" aria-selected="false">Aggressive</a>
                     <a className="portfolio nav-link" id="v-pills-Moderately-Aggressive-tab" data-toggle="pill" href="#v-pills-Moderately-Aggressive1" role="tab" aria-controls="v-pills-messages" aria-selected="false">Moderately Aggressive</a>
                     <a className="portfolio nav-link" id="v-pills-Moderate-tab" data-toggle="pill" href="#v-pills-Moderate1" role="tab" aria-controls="v-pills-settings" aria-selected="false">Moderate</a>
                     <a className="portfolio nav-link" id="v-pills-Moderately-Conservative-tab" data-toggle="pill" href="#v-pills-Moderately-Conservative1" role="tab" aria-controls="v-pills-settings" aria-selected="false">Moderately Conservative</a>
                     <a className="portfolio nav-link" id="v-pills-Very-Conservative-tab" data-toggle="pill" href="#v-pills-Very-Conservative1" role="tab" aria-controls="v-pills-settings" aria-selected="false">Very Conservative</a>
                    
                     </div>
                    
 
 
 
                     </div>
                     <div className='col-md-9 float-left div-padding-inherit'>
                      <Graph></Graph>
 
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
            <h2 style={{paddingTop:"10px"}}><Translator text="portfolioGetBetterTittle.1" /></h2>

            <div className='row div-margin-no div-invest-padding cursor ' onClick={()=>{this.setState({divExpand:'Diversified'})}}>



                <div className='col-md-1 m-auto '>
                <i><FontAwesomeIcon className={this.state.divExpand==='Diversified'?"color-icon-blue":"p-gray"} fontSize='20px' icon={this.state.divExpand==='Diversified'?faMinusCircle:faPlusCircle} /></i>
             
                </div>
                <div className='col-md-11'>
                <h3 className='p-gray  '  style={this.state.divExpand==='Diversified'?{color: this.state.bg_color}:null}> <Translator text="portfolioGetBetter1.1" /></h3>
                </div>
                </div>
                <div className='row div-margin-no div-invest-padding'>
                <div className='col-md-1'>

                </div>
                {this.state.divExpand==='Diversified'?<div className='col-md-11'>
                <p><Translator text="portfolioGetBetter1.2" /></p>

                </div>:null}
            </div>

            {/*  */}

                <div className='row div-margin-no div-invest-padding cursor' onClick={()=>{this.setState({divExpand:'LowCost'})}}>



                  <div className='col-md-1 m-auto '>
                  <FontAwesomeIcon className={this.state.divExpand==='LowCost'?"color-icon-blue":"p-gray"} fontSize='20px' icon={this.state.divExpand==='LowCost'?faMinusCircle:faPlusCircle} />
              
                  </div>
                  <div className='col-md-11' >
                  <h3 className='p-gray ' style={this.state.divExpand==='LowCost'?{color: this.state.bg_color}:null}> <Translator text="portfolioGetBetter2.1" /></h3>
                  </div>
                </div>
                <div className='row div-margin-no div-invest-padding'>
                    <div className='col-md-1'>

                    </div>
                   {this.state.divExpand==='LowCost'? <div className='col-md-11'>
                    <p><Translator text="portfolioGetBetter2.2" /></p>

                    </div>:null}
                 </div>
            {/*  */}
             <div className='row div-margin-no div-invest-padding cursor' onClick={()=>{this.setState({divExpand:'Optimized'})}}>



                <div className='col-md-1 m-auto '>
                <FontAwesomeIcon className={this.state.divExpand==='Optimized'?"color-icon-blue":"p-gray"} fontSize='20px' icon={this.state.divExpand==='Optimized'?faMinusCircle:faPlusCircle}/>
             
                </div>
                <div className='col-md-11'>
                <h3 className='p-gray ' style={this.state.divExpand==='Optimized'?{color: this.state.bg_color}:null}><Translator text="portfolioGetBetter3.1" /></h3>
                </div>
                </div>
                <div className='row div-margin-no div-invest-padding'>

                <div className='col-md-1'>

                </div>
                {this.state.divExpand==='Optimized'?<div className='col-md-11'>
                <p><Translator text="portfolioGetBetter3.2" /></p>

                </div>:null}
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

                <BecomeAnInvestor/>

            <Footer />
                
            </>
        )
    }
}
