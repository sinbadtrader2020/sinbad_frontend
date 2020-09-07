import React, { Component } from 'react'
import MainNavBar from './main-nav-bar'
import Footer from './footer'
import { Helmet } from 'react-helmet'
import { AiFillAccountBook,AiOutlineGold,AiOutlineStock } from 'react-icons/ai'
import { FaRegMoneyBillAlt,FaBitcoin ,FaRegBuilding,FaChartBar} from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck,faPlusCircle,faMinusCircle, faCashRegister} from '@fortawesome/free-solid-svg-icons'

import Graph from '../utils/past-performance-graph'
import BecomeAnInvestor from './become-an-investor'
import Translator from '../utils/translator'
import AllocatoinChart from '../utils/allocation-chart'
import { ProgressBar } from 'react-bootstrap'
import { text } from '@fortawesome/fontawesome-svg-core'


export default class Portfolio extends Component {
  constructor(){
    super()

    this.state={
      divExpandAllocation:"",
      divExpand:"Diversified",
      bg_color:"#002868",
      divInvestSinbad:"GlobalStocks",
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
               
                <div className={this.state.divInvestSinbad==='GlobalStocks'?'div-bg-color-black':'div-bg-color-white'} onClick={()=>{this.setState({divInvestSinbad:"GlobalStocks"})}}>
                <FaChartBar size="50px"  />
                 <p  className='p-black'><Translator text='portfolioCard1.1' /></p>
                </div>

                <div className={this.state.divInvestSinbad==='EmergingMarketingStocks'?'div-bg-color-black':'div-bg-color-white'}  onClick={()=>{this.setState({divInvestSinbad:"EmergingMarketingStocks"})}}>
                <AiOutlineStock size="50px" />
                 <p className='p-black'><Translator text='portfolioCard2.1' /></p>
                </div>

                <div className={this.state.divInvestSinbad==='Sukuk'?'div-bg-color-black':'div-bg-color-white'}  onClick={()=>{this.setState({divInvestSinbad:"Sukuk"})}}>
                <FaRegMoneyBillAlt size="50px" />
                 <p className='p-black'><Translator text='portfolioCard3.1' /></p>
                </div>

                <div className={this.state.divInvestSinbad==='RealEstate'?'div-bg-color-black':'div-bg-color-white'}  onClick={()=>{this.setState({divInvestSinbad:"RealEstate"})}}>
                <FaRegBuilding size="50px" />
                 <p className='p-black'><Translator text='portfolioCard4.1' /></p>
                 </div>

                <div className={this.state.divInvestSinbad==='Gold'?'div-bg-color-black':'div-bg-color-white'}  onClick={()=>{this.setState({divInvestSinbad:"Gold"})}}>
                <AiOutlineGold size="50px"  />
                 <p className='p-black'><Translator text='portfolioCard5.1' /></p>
                 </div>

                <div className={this.state.divInvestSinbad==='BitCoin'?'div-bg-color-black':'div-bg-color-white'}  onClick={()=>{this.setState({divInvestSinbad:"BitCoin"})}}>
                <FaBitcoin size="50px" />
                 <p className='p-black'><Translator text='portfolioCard6.1' /></p>
                </div>


                </div>
            </div>
            <div className="col-md-1"></div>
            
          </div>
          {/* card content are here */}
             
             {/* globalStocks */}
           {this.state.divInvestSinbad==='GlobalStocks'? <div>
              <div className="div-top-padding">
                <div className='col-md-10'>
                  <h6 className='div-h4-blue'><Translator text='portfolioCard1.1'/></h6>
                  <p className='p-gray div-invest-padding'> <Translator text='portfolioCard1.2'/></p>
                </div>
              </div>

              <div className="div-top-padding">
                <div className='col-md-10'>
                <h6 className='div-h4-blue'><Translator text='portfolioCard1.3'/></h6>
                  <div className='row div-margin-no div-invest-padding'>

                  <div className='col-md-1'>
                  <FontAwesomeIcon className='color-icon' icon={faCheck} />
                  </div>
                  <div className='col-md-11'>
                  <p className='p-gray '> <Translator text='portfolioCard1.4'/></p>
                  </div>

                  <div className='col-md-1'>
                  <FontAwesomeIcon className='color-icon' icon={faCheck} />
                  </div>
                  <div className='col-md-10'>
                  <p className='p-gray '> <Translator text='portfolioCard1.5'/></p>
                  </div>

                  </div>
                </div>
              </div>
            </div>:null}
            
            {/* EmergingMarketingStocks */}
            {this.state.divInvestSinbad==='EmergingMarketingStocks'? <div>
              <div className="div-top-padding">
                <div className='col-md-10'>
                  <h6 className='div-h4-blue'><Translator text='portfolioCard2.1'/></h6>
                  <p className='p-gray div-invest-padding'> <Translator text='portfolioCard2.2'/></p>
                </div>
              </div>

              <div className="div-top-padding">
                <div className='col-md-10'>
                <h6 className='div-h4-blue'><Translator text='portfolioCard2.3'/></h6>
                  <div className='row div-margin-no div-invest-padding'>

                  <div className='col-md-1'>
                  <FontAwesomeIcon className='color-icon' icon={faCheck} />
                  </div>
                  <div className='col-md-11'>
                  <p className='p-gray '> <Translator text='portfolioCard2.4'/></p>
                  </div>

                  <div className='col-md-1'>
                  <FontAwesomeIcon className='color-icon' icon={faCheck} />
                  </div>
                  <div className='col-md-10'>
                  <p className='p-gray '> <Translator text='portfolioCard2.5'/></p>
                  </div>

                  </div>
                </div>
              </div>
            </div>:null}
            {/* Sukuk */}
            {this.state.divInvestSinbad==='Sukuk'? <div>
              <div className="div-top-padding">
                <div className='col-md-10'>
                  <h6 className='div-h4-blue'><Translator text='portfolioCard3.1'/></h6>
                  <p className='p-gray div-invest-padding'> <Translator text='portfolioCard3.2'/></p>
                </div>
              </div>

              <div className="div-top-padding">
                <div className='col-md-10'>
                <h6 className='div-h4-blue'><Translator text='portfolioCard3.3'/></h6>
                  <div className='row div-margin-no div-invest-padding'>

                  <div className='col-md-1'>
                  <FontAwesomeIcon className='color-icon' icon={faCheck} />
                  </div>
                  <div className='col-md-11'>
                  <p className='p-gray '><Translator text='portfolioCard3.4'/></p>
                  </div>

                  <div className='col-md-1'>
                  <FontAwesomeIcon className='color-icon' icon={faCheck} />
                  </div>
                  <div className='col-md-10'>
                  <p className='p-gray '> <Translator text='portfolioCard3.5'/></p>
                  </div>

                  </div>
                </div>
              </div>
            </div>:null}
            {/* Real Estate */}
            {this.state.divInvestSinbad==='RealEstate'? <div>
              <div className="div-top-padding">
                <div className='col-md-10'>
                  <h6 className='div-h4-blue'><Translator text='portfolioCard4.1'/></h6>
                  <p className='p-gray div-invest-padding'> <Translator text='portfolioCard4.2'/></p>
                </div>
              </div>

              <div className="div-top-padding">
                <div className='col-md-10'>
                <h6 className='div-h4-blue'><Translator text='portfolioCard4.3'/></h6>
                  <div className='row div-margin-no div-invest-padding'>

                  <div className='col-md-1'>
                  <FontAwesomeIcon className='color-icon' icon={faCheck} />
                  </div>
                  <div className='col-md-11'>
                  <p className='p-gray '> <Translator text='portfolioCard4.4'/></p>
                  </div>

                  <div className='col-md-1'>
                  <FontAwesomeIcon className='color-icon' icon={faCheck} />
                  </div>
                  <div className='col-md-10'>
                  <p className='p-gray '> <Translator text='portfolioCard4.5'/></p>
                  </div>

                  </div>
                </div>
              </div>
            </div>:null}

            {/* Gold */}
            {this.state.divInvestSinbad==='Gold'? <div>
              <div className="div-top-padding">
                <div className='col-md-10'>
                  <h6 className='div-h4-blue'><Translator text='portfolioCard5.1'/></h6>
                  <p className='p-gray div-invest-padding'> <Translator text='portfolioCard5.2'/></p>
                </div>
              </div>

              <div className="div-top-padding">
                <div className='col-md-10'>
                <h6 className='div-h4-blue'><Translator text='portfolioCard5.3'/></h6>
                  <div className='row div-margin-no div-invest-padding'>

                  <div className='col-md-1'>
                  <FontAwesomeIcon className='color-icon' icon={faCheck} />
                  </div>
                  <div className='col-md-11'>
                  <p className='p-gray '> <Translator text='portfolioCard5.4'/></p>
                  </div>

                  <div className='col-md-1'>
                  <FontAwesomeIcon className='color-icon' icon={faCheck} />
                  </div>
                  <div className='col-md-10'>
                  <p className='p-gray '> <Translator text='portfolioCard5.5'/></p>
                  </div>

                  </div>
                </div>
              </div>
            </div>:null}

            {/* BitCoin */}
            {this.state.divInvestSinbad==='BitCoin'? <div>
              <div className="div-top-padding">
                <div className='col-md-10'>
                  <h6 className='div-h4-blue'><Translator text='portfolioCard6.1'/></h6>
                  <p className='p-gray div-invest-padding'> <Translator text='portfolioCard6.2'/></p>
                </div>
              </div>

              <div className="div-top-padding">
                <div className='col-md-10'>
                <h6 className='div-h4-blue'><Translator text='portfolioCard6.3'/></h6>
                  <div className='row div-margin-no div-invest-padding'>

                  <div className='col-md-1'>
                  <FontAwesomeIcon className='color-icon' icon={faCheck} />
                  </div>
                  <div className='col-md-11'>
                  <p className='p-gray '> <Translator text='portfolioCard6.4'/></p>
                  </div>

                  <div className='col-md-1'>
                  <FontAwesomeIcon className='color-icon' icon={faCheck} />
                  </div>
                  <div className='col-md-10'>
                  <p className='p-gray '> <Translator text='portfolioCard6.5'/></p>
                  </div>

                  </div>
                </div>
              </div>
            </div>:null}

            {/*card content end here  */}
        </div>

  


{/* Our portfolio */}
                <div className="container">
                <div className="row div-row-padding m-auto">
                <div className='row padding-zero'>
                <div className='col-md-11 m-auto h1-blue-center-start '>
                 <h2 className='font-weight-bold'><Translator text='portfolioOurGraph.1'/></h2>
                 </div>
                <div className='col-md-11 m-auto ' >
                <p className='p-center-start' ><Translator text='portfolioOurGraph.2'/></p>
                </div>
                </div>
 
                </div>


            <div className='row div-tab-pad-top justify-content-sm-center m-auto'>
                        
              <ul className="nav nav-pills col-md-6 justify-content-lg-center mb-3" id="pills-tab" role="tablist">
                <li className="nav-item col-md-6">
                  <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true"><Translator text='portfolioOurGraph.3'/></a>
                </li>
                <li className="nav-item col-md-6">
                  <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false"><Translator text='portfolioOurGraph.4'/></a>
                </li>
                
              </ul>
       

            

                </div>

               
              <div className="tab-content" id="pills-tabContent">
           
               <div className='row div-padding-graph justify-content-lg-center tab-pane fade show active overflow-hidden ' id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                     <div className='col-md-3 float-left'>
                        <p><Translator text='portfolioTypes.0'/></p>
                        <div className="nav flex-column nav-pills padding-zero " id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a className="portfolio nav-link active" id="v-pills-Very-Aggressive-tab" data-toggle="pill" href="#v-pills-Very-Aggressive" role="tab" aria-controls="v-pills-home" aria-selected="true"><Translator text="portfolioTypes.1"/></a>
                        <a className="portfolio nav-link" id="v-pills-Aggressive-tab" data-toggle="pill" href="#v-pills-Aggressive" role="tab" aria-controls="v-pills-profile" aria-selected="false"><Translator text="portfolioTypes.2"/></a>
                        <a className="portfolio nav-link" id="v-pills-Moderately-Aggressive-tab" data-toggle="pill" href="#v-pills-Moderately-Aggressive" role="tab" aria-controls="v-pills-messages" aria-selected="false"><Translator text="portfolioTypes.3"/></a>
                        <a className="portfolio nav-link" id="v-pills-Moderate-tab" data-toggle="pill" href="#v-pills-Moderate" role="tab" aria-controls="v-pills-settings" aria-selected="false"><Translator text="portfolioTypes.4"/></a>
                        <a className="portfolio nav-link" id="v-pills-Moderately-Conservative-tab" data-toggle="pill" href="#v-pills-Moderately-Conservative" role="tab" aria-controls="v-pills-settings" aria-selected="false"><Translator text="portfolioTypes.5"/></a>
                        <a className="portfolio nav-link" id="v-pills-Very-Conservative-tab" data-toggle="pill" href="#v-pills-Very-Conservative" role="tab" aria-controls="v-pills-settings" aria-selected="false"><Translator text="portfolioTypes.6"/></a>
                      
                         </div>
        
 
                     </div>

                     <div className='col-md-4 float-left allocation-graph-padding '>
                         <AllocatoinChart/>
 
                      </div>
                      
                      <div className='col-md-5 float-left' >
                      {/*  */}
                         <div className="div-pad-allocation">
                            <div className='div-margin-alocation cursor' onClick={()=>{this.state.divExpandAllocation==="GlobalStocks"?this.setState({divExpandAllocation:''}):this.setState({divExpandAllocation:'GlobalStocks'})}}>
                                <div className='row div-margin-no justify-content-md-between' >
                                    <p className="p-allocation"><Translator text="portfolioAllocationGlobal.1"/></p>
                                    <p className='float-right font-weight-bold'>75%</p>
                            

                                </div>
                                  <div className='progress-div'>
                                  <ProgressBar  className='progress-height' now={70} />
                                  </div>
                                  {this.state.divExpandAllocation==='GlobalStocks'?<div>
                                    <p className="p-gray" ><Translator text="portfolioAllocationGlobal.2"/></p>
                                    <h6><Translator text="portfolioAllocationGlobal.3"/></h6>
                                    <p className="p-gray"><Translator text="portfolioAllocationGlobal.4"/></p>
                                    <p className="p-gray"><Translator text="portfolioAllocationGlobal.5"/></p>
                                  </div>:null}
                              </div>



                              <div className='div-margin-alocation cursor  ' onClick={()=>{this.state.divExpandAllocation==="EmergingMarketStocks"?this.setState({divExpandAllocation:''}):this.setState({divExpandAllocation:'EmergingMarketStocks'})}} >
                                <div className='row div-margin-no justify-content-md-between' >
                                    <p className="p-allocation"><Translator text="portfolioAllocationEmergingMarketStocks.1"/></p>
                                    <p className='float-right font-weight-bold'>10%</p>
                            

                                </div>
                                  <div className='progress-div'>
                                  <ProgressBar className='progress-height' now={70} />
                                  </div>
                                  {this.state.divExpandAllocation==='EmergingMarketStocks'? <div>
                                    <p className="p-gray" ><Translator text="portfolioAllocationEmergingMarketStocks.2"/></p>
                                    <h6><Translator text="portfolioAllocationEmergingMarketStocks.3"/></h6>
                                    <p className="p-gray"><Translator text="portfolioAllocationEmergingMarketStocks.4"/></p>
                                    
                                  </div>:null}
                                 
                              </div>



                              <div className='div-margin-alocation cursor' onClick={()=>{this.state.divExpandAllocation==="Sukuk"?this.setState({divExpandAllocation:''}):this.setState({divExpandAllocation:'Sukuk'})}}>
                                <div className='row div-margin-no justify-content-md-between' >
                                    <p className="p-allocation"><Translator text='portfolioAllocationSukuk.1'/></p>
                                    <p className='float-right font-weight-bold'>0%</p>
                            

                                </div>
                                  <div className='progress-div'>
                                  <ProgressBar  className='progress-height' now={0} />
                                  </div>
                                  {this.state.divExpandAllocation==="Sukuk"?<div>
                                    <p className="p-gray" ><Translator text='portfolioAllocationSukuk.2'/></p>
                                   
                                  </div>:null }
                              </div>


                              <div className='div-margin-alocation cursor ' onClick={()=>{this.state.divExpandAllocation==="RealEstate"?this.setState({divExpandAllocation:''}):this.setState({divExpandAllocation:'RealEstate'})}} >
                                <div className='row div-margin-no justify-content-md-between' >
                                    <p className="p-allocation"><Translator text='portfolioAllocationRealEstate.1'/></p>
                                    <p className='float-right font-weight-bold'>10%</p>
                            

                                </div>
                                  <div className='progress-div'>
                                  <ProgressBar  className='progress-height' now={10} />
                                  </div>
                                  {this.state.divExpandAllocation==="RealEstate"? <div>
                                    <p className="p-gray" ><Translator text='portfolioAllocationRealEstate.2'/></p>
                                    <h6><Translator text='portfolioAllocationRealEstate.3'/></h6>
                                    <p className="p-gray"><Translator text='portfolioAllocationRealEstate.4'/></p>
                                    
                                  </div>:null}
                              </div>


                              <div className='div-margin-alocation cursor ' onClick={()=>{this.state.divExpandAllocation==="Gold"?this.setState({divExpandAllocation:''}):this.setState({divExpandAllocation:'Gold'})}}>
                                <div className='row div-margin-no justify-content-md-between' >
                                    <p className="p-allocation"><Translator text='portfolioAllocationGold.1'/></p>
                                    <p className='float-right font-weight-bold'>3.75%</p>
                            

                                </div>
                                  <div className='progress-div'>
                                  <ProgressBar  className='progress-height' now={3.75} />
                                  </div>
                                  {this.state.divExpandAllocation==='Gold'?  <div>
                                    <p className="p-gray" ><Translator text='portfolioAllocationGold.2'/></p>
                                    <h6><Translator text='portfolioAllocationGold.3'/></h6>
                                    <p className="p-gray"><Translator text='portfolioAllocationGold.4'/></p>
                                    
                                  </div>:null}
                              </div>

                              <div className='div-margin-alocation cursor ' onClick={()=>{this.state.divExpandAllocation==="Cash"?this.setState({divExpandAllocation:''}):this.setState({divExpandAllocation:'Cash'})}}>
                                <div className='row div-margin-no justify-content-md-between' >
                                    <p className="p-allocation"><Translator text='portfolioAllocationCash.1'/></p>
                                    <p className='float-right font-weight-bold'>1.25%</p>
                            

                                </div>
                                  <div className='progress-div'>
                                  <ProgressBar  className='progress-height' now={1.25} />
                                  </div>
                                  {this.state.divExpandAllocation==="Cash"?null:null}
                              </div>







                         </div>


                           
                      </div>

                      
                    
                 </div>
            {/*  */}
        
 
{/*  */}
  
                  <div className='row div-padding-graph tab-pane fade overflow-hidden ' id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                  <div className='col-md-3 float-left'>
                     <p>Portfolio Types</p>
                     <div className="nav flex-column nav-pills padding-zero " id="v-pills-tab" role="tablist" aria-orientation="vertical">
                     <a className="portfolio nav-link active" id="v-pills-Very-Aggressive-tab" data-toggle="pill" href="#v-pills-Very-Aggressive1" role="tab" aria-controls="v-pills-home" aria-selected="true"><Translator text="portfolioTypes.1"/></a>
                     <a className="portfolio nav-link" id="v-pills-Aggressive-tab" data-toggle="pill" href="#v-pills-Aggressive1" role="tab" aria-controls="v-pills-profile" aria-selected="false"><Translator text="portfolioTypes.2"/></a>
                     <a className="portfolio nav-link" id="v-pills-Moderately-Aggressive-tab" data-toggle="pill" href="#v-pills-Moderately-Aggressive1" role="tab" aria-controls="v-pills-messages" aria-selected="false"><Translator text="portfolioTypes.3"/></a>
                     <a className="portfolio nav-link" id="v-pills-Moderate-tab" data-toggle="pill" href="#v-pills-Moderate1" role="tab" aria-controls="v-pills-settings" aria-selected="false"><Translator text="portfolioTypes.4"/></a>
                     <a className="portfolio nav-link" id="v-pills-Moderately-Conservative-tab" data-toggle="pill" href="#v-pills-Moderately-Conservative1" role="tab" aria-controls="v-pills-settings" aria-selected="false"><Translator text="portfolioTypes.5"/></a>
                     <a className="portfolio nav-link" id="v-pills-Very-Conservative-tab" data-toggle="pill" href="#v-pills-Very-Conservative1" role="tab" aria-controls="v-pills-settings" aria-selected="false"><Translator text="portfolioTypes.6"/></a>
                    
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
