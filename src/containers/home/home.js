import React from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import UserMainNavBar from "./user-main-nav-bar";

import { API } from "../../api/config";
import InfiniteScroll from "react-infinite-scroll-component";
import Intra1DGraph from "../../utils/graph/intrad-1day-graph";
import YearlyGraph from "../../utils/graph/yearly-graph";

import SearchField from "react-search-field";
import Footer from "../footer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator, faCheckCircle, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { FaTimesCircle } from "react-icons/fa";

export default class Home extends React.Component {
  constructor(){
    super();
    this.state={
      show:null,
      keyword:null,
      comCompliantDetails:null,
      comSymbol:null, //All company list
      itemSymbol:null, // pagination
      itemSymbolIndex:0,


      comData:null,   // one company details
      comEndData:null,
      readmore:'less',  

//graphdata means the data value send to load graph
//update is for if the api call is making data fetch 
      graphCompanySymbol:null,
      graphData1d:null,
      updateData1d:false,

      graphData1w:null,
      updateData1w:false,

      graphData1m:null,
      updateData1m:false,

      graphData3m:null,
      updateData3m:false,

      graphData1y:null,
      updateData1y:false,

      graphData5y:null,
      updateData5y:false,


    

     




      hit:null,
      homeTab:'1d',

    }
   
    this.size={
      height:300,
     
      width: window.innerWidth>600?window.innerWidth/2.1:600,
      data:null,
      companySymbol:null,
      
    }
  }


  handleChange =(value)=>{
    Object.keys(this.state.comData).map((data)=>{
      if(value===''){


      }else if(data.sf_act_symbol==(value)){
        this.setState({
          itemSymbol:data
        })
      }
    })
  
    value===""?console.log("value"):console.log(value)
  }

  handleSearch =(sym)=>{
    this.setState({
      updateData1d:true,
      updateData1w:true,
      updateData1m:true,
      updateData3m:true,
      updateData1y:true,
      updateData5y:true


    })
    this.fetchData(sym);
    this.fetchGraphData1D(sym,'compact','5min');
    //1week
    this.fetchGraphData1D(sym,'full','15min');
    //1month
    this.fetchGraphData1D(sym,'full','60min');

    this.fetchGraphData1y(sym,'full');
  }

  // for one comany details
  fetchData(symbol){
    const pointer=this;
    let fetchData=[];
    
    const API_KEY='AOYGBU6J7IN09PCE'
    let API_Symbol = symbol;
    console.log("symbol",symbol)
    let API_CALL=`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${API_Symbol}&apikey=${API_KEY}`
   
    fetch(API_CALL)
        .then(
            function(response) {
            return response.json();
            }
        )
        .then(
            function(data) {
              console.log("row",data)
              fetchData.push(data)
              pointer.setState({
                comData:data
              })
           
            }
           
        )
      
  }
  //global quota endpoint
  fetchEndpoint(symbol){
    const pointer=this;
    let fetchData=[];
    
    const API_KEY='AOYGBU6J7IN09PCE'
    let API_Symbol = symbol;
    console.log("symbol",symbol)
    let API_CALL=`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${API_Symbol}&apikey=${API_KEY}`
  
    fetch(API_CALL)
        .then(
            function(response) {
            return response.json();
            }
        )
        .then(
            function(data) {
              console.log("row",data)
              fetchData.push(data)
              pointer.setState({
                comEndData:data
              })
          
            }
          
        )
      
  }

  // for all company list 
  fetchAllCompanySymbol(){
    
      
      
      return axios
      .get(API.companyOverview)
      .then((response) => {this.setState({
        comSymbol:response.data.data,
        itemSymbol: response.data.data.slice(0,40),
        // itemSymbol: response.data.data,

        itemSymbolIndex:40
      });
      console.log('res', response.data.data)})

      
  }

  //single company complance details
  fetchCompanyCompliant(sym){
    
      
      
    return axios
    .get(`${API.companyOverview}/${sym}`)
    .then((response) => {this.setState({
      comCompliantDetails:response.data.data[0],
     
    });
    console.log('res12321321321', response.data.data[0])})

    
}


  //1d,1m,1w,3m data for specific symbol
  fetchGraphData1D(symbol,compact,interval){
    const pointer=this;
    let fetchData=[];
    let fetchData3m=[];
    console.log("initialism")
    const API_KEY='AOYGBU6J7IN09PCE'
    let API_Symbol = symbol;
    let API_OUTPUT =compact;
    let API_INTERVAL=interval;
    let API_CALL=`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${API_Symbol}&interval=${API_INTERVAL}&outputsize=${API_OUTPUT}&apikey=${API_KEY}`
    let t;
    fetch(API_CALL)
        .then(
            function(response) {
            return response.json();
            }
        )
        .then(
            function(data) {
             
              //console.log("Graph",data['Time Series (Daily)'])
              for (var key in data[`Time Series (${API_INTERVAL})`]) {
                   
                  t=Date.parse(key);
                  t=(t/1000)
              
                fetchData.push(
                    
                  
                   { time:(t),
                    value:parseFloat(data[`Time Series (${API_INTERVAL})`][key]['4. close'])}
                    
                 );

                  //for 3 months 
                  if(API_INTERVAL==='60min'){
                    fetchData3m.push( { time:parseFloat(t),
                      value:parseFloat(data[`Time Series (${API_INTERVAL})`][key]['4. close'])}
                      
                       );
                  }
                
               }
                 
                  

                  console.log('qw1d',fetchData)
                  //1d
                  if(API_INTERVAL==='5min'&&API_OUTPUT==='compact'){
                    fetchData.reverse();
                    pointer.setState({
                      graphData1d:fetchData,
                      updateData1d:false,
                      graphCompanySymbol:symbol,

                    })
                  }
                  //1w
                  else if(API_INTERVAL==='15min'&&API_OUTPUT==='full'){
                    fetchData=fetchData.slice(0,238);
                    fetchData.reverse();

                    pointer.setState({
                       graphData1w:fetchData,
                        updateData1w:false,
                      graphCompanySymbol:symbol,


                    })

                  }
                  //1m&3m
                  else if(API_INTERVAL==='60min'&&API_OUTPUT==='full'){
             
                    fetchData3m.reverse();

                    fetchData=fetchData.slice(0,300);
                    fetchData.reverse();

                    pointer.setState({
                      graphData1m:fetchData,
                      graphData3m:fetchData3m,
                      updateData1m:false,
                      updateData3m:false,
                      graphCompanySymbol:symbol,


                    })
                   
                  }
           
            }
        )       
 
  }

// 1y 5y fetch data for specific symbol
  fetchGraphData1y(symbol,outputsize){
    const pointer=this;
    let fetchData=[];
    let fetchData1y=[];
    let fetchData5y=[];

    let API_OUTPUT =outputsize;
    
    
    const API_KEY='AOYGBU6J7IN09PCE'
    let API_Symbol = symbol;
    let API_CALL=`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${API_Symbol}&outputsize=${API_OUTPUT}&apikey=${API_KEY}`

    fetch(API_CALL)
        .then(
            function(response) {
            return response.json();
            }
        )
        .then(
            function(data) {
              
              //console.log("Graph",data['Time Series (Daily)'])
              for (var key in data['Time Series (Daily)']) {
                   
                  
              
                fetchData.push(
                    
                  
                   { time:key,
                    value:parseFloat(data['Time Series (Daily)'][key]['4. close'])}
                    
                 );
               }
               fetchData5y=fetchData.slice(0,1440);
               fetchData1y=fetchData.slice(0,288);
               fetchData5y.reverse();
               fetchData1y.reverse();
                
                  // fetchData=fetchData.slice(0,365)
                  // fetchData.reverse()

                  // console.log('qw',fetchData)
                  pointer.setState({
                     graphData1y:fetchData1y,
                     graphData5y: fetchData5y,
                     updateData1y:false,
                     updateData5y:false,
                     graphCompanySymbol:symbol,

                     
                  })
           
            }
        )       
 
  }


  //this for scrolling comppany
  scrollMoreData = () => {
    
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      
      this.setState({
        itemSymbol: this.state.itemSymbol.concat(this.state.comSymbol.slice(this.state.itemSymbolIndex,this.state.itemSymbolIndex+40)),
        itemSymbolIndex :this.state.itemSymbolIndex+40
      });
    }, 100);
  };

   



  componentDidMount(){
    this.setState({
      updateData1d:true,
      updateData1w:true,
      updateData1m:true,
      updateData3m:true,
      updateData1y:true,
      updateData5y:true


    })
    //single company Compliant details
    this.fetchCompanyCompliant("IBM")
    //all company list
    this.fetchAllCompanySymbol()
    // one company details
    this.fetchData('IBM');
    this.fetchEndpoint("IBM");
    //1day
    this.fetchGraphData1D('IBM','compact','5min');
    //1week
    this.fetchGraphData1D('IBM','full','15min');
    //1month
    this.fetchGraphData1D('IBM','full','60min');
    //1y,5y
    this.fetchGraphData1y('IBM','full');
    this.setState({
      graphCompanySymbol:"IBM"
    });
    
    
    
  }
  render() {

    let update=true;
    if(this.state.updateData1d===false&&this.state.updateData1w===false&&this.state.updateData1m===false&&this.state.updateData3m===false&&this.state.updateData1y===false&&this.state.updateData5y===false){
        update=false;
    }
   
    let screening=this.state.comCompliantDetails;
    let messages=[];
    let message=null;
    if(this.state.comCompliantDetails!==null){
      if(this.state.comCompliantDetails.sf_aaoifi_compliant==="NON-COMPLIANT"){
      messages=this.state.comCompliantDetails.sf_nc_reason.split('-')
        if((messages[0]).trim()==='IATR'){
          message='non-compliant amount of illiquid asset';

        }
        if((messages[0]).trim()==='NIS'){
          message='non-compliant income source';
          
        }
        if((messages[0]).trim()==='LAMC'){
          message='non-compliant amount of illiquid asset';
          
        }
        if((messages[0]).trim()==='DR'){
          message='non-compliant amount of interest bearing debt';
          
        }
        if((messages[0]).trim()==='NIR'){
          message='non-compliant amount of investment in interest based income';
          
        }

      }
    }
    //1d
    console.log("=====",this.state.comSymbol)
  
    if(this.state.homeTab==='1d'&&this.state.graphData1d!==null){
      this.size.data=this.state.graphData1d;
      this.size.companySymbol=this.state.graphCompanySymbol;
     
     
    }
    //1w
    if(this.state.homeTab==='1w'&&this.state.graphData1w!==null){
      this.size.data=this.state.graphData1w;
      this.size.companySymbol=this.state.graphCompanySymbol;

   
    }
    //1m
    if(this.state.homeTab==='1m'&&this.state.graphData1m!==null){
      this.size.data=this.state.graphData1m;
      this.size.companySymbol=this.state.graphCompanySymbol;

    }
    //3m
    if(this.state.homeTab==='3m'&&this.state.graphData3m!==null){
      this.size.data=this.state.graphData3m;
      this.size.companySymbol=this.state.graphCompanySymbol;

     
    }
    //1y
    if(this.state.homeTab==='1y'&&this.state.graphData1y!==null){
      this.size.data=this.state.graphData1y;
      this.size.companySymbol=this.state.graphCompanySymbol;
      

    }
    //5y
    if(this.state.homeTab==='5y'&&this.state.graphData5y!==null){
      this.size.data=this.state.graphData5y;
      this.size.companySymbol=this.state.graphCompanySymbol;
  
    }
    

  
    
    
    return (
     this.state.comSymbol===null
      ?
      <>
      {console.log("hit________null")}


      <div className="div-center d-flex justify-content-center">
      <div className="loading spinner-border"  role="status"> 
      </div>
      <div className='loading2 loading-img'> 

      </div>
     </div> </>:

<>
          <Helmet>
            <title> Home</title>
          </Helmet>
          <UserMainNavBar props={this.props} comSymbol={this.state.comSymbol} handleSearch={this.handleSearch.bind(this)}/>
          
          {/* <!-- Home page design -->
             <!-- Intro design --> */}
        <div className="home-intro user-home">
          <div className="container" >
            <div
              className="row div-top-only div-margin-no overflow-hidden home-padding tab-view"
              style={{ textAlign: "center" }}
            >
                  {/* mobile view */}
                  <div className='float-right home-company-list1 home-stock-mobile m-auto'> 
                
                       <div className='overflow-hidden ' style={{marginBottom:'10px',paddingRight:"10px"}}>    
                          
                        {/* <p className=' float-left' style={{marginTop:'10px'}}>Stocks</p> */}
                        <SearchField 
                                placeholder="Stock Search..."
                                onChange ={(value)=> this.setState({keyword:value})}
                              
                                classNames="searchfield float-left"
                        />
                        </div>


                          <div className='div-scroll'>
                    {this.state.keyword===''||this.state.keyword===null?     

                        this.state.comSymbol!==null&&this.state.itemSymbol!==null?

                                  <InfiniteScroll
                                      dataLength={this.state.itemSymbol.length}
                                      next={this.scrollMoreData}
                                      hasMore={true}
                                      loader={<p>Loading...</p>}
                                      height={200}
                                    
                                      
                                  >
                                  {this.state.itemSymbol.map((i,index) => (
                                   
                                    <div key={index}  className=' row div-margin-no cursor' onClick={()=>{
                                      this.setState({
                                        updateData1d:true,
                                        updateData1w:true,
                                        updateData1m:true,
                                        updateData3m:true,
                                        updateData1y:true,
                                        updateData5y:true,
                                        show:null



                                      })
                                      this.fetchData(i.sf_act_symbol);
                                      this.fetchCompanyCompliant(i.sf_act_symbol)

                                      this.fetchEndpoint(i.sf_act_symbol);
                                      this.fetchGraphData1D(i.sf_act_symbol,'compact','5min');
                                      //1week
                                      this.fetchGraphData1D(i.sf_act_symbol,'full','15min');
                                      //1month
                                      this.fetchGraphData1D(i.sf_act_symbol,'full','60min');

                                      this.fetchGraphData1y(i.sf_act_symbol,'full');
                                    
                                      }}>
                                      <p className='text-left  pad-l-r' style={{width:'48px'}}>{i.sf_act_symbol}</p>
                                      <p className='text-left word-clamp' >{i.sf_company_name}</p>

                                    
                                  </div>
                                    ))}

                                  </InfiniteScroll>
                              :<p>Loading...</p>:
                              
                               this.state.comSymbol!==null&&this.state.itemSymbol!==null?

                                  <InfiniteScroll
                                      dataLength={this.state.comSymbol.length}
                                      next={this.scrollMoreData}
                                      hasMore={true}
                                      loader={<p>Loading...</p>}
                                      height={200}
                                    
                                      
                                  >
                                  {this.state.comSymbol.map((i,index) => (
                                    this.state.keyword===''||this.state.keyword===null?
                                    <div key={index}  className=' row div-margin-no cursor' onClick={()=>{
                                      this.setState({
                                        updateData1d:true,
                                        updateData1w:true,
                                        updateData1m:true,
                                        updateData3m:true,
                                        updateData1y:true,
                                        updateData5y:true,
                                        show:null



                                      })
                                      this.fetchData(i.sf_act_symbol);
                                      this.fetchCompanyCompliant(i.sf_act_symbol)

                                      this.fetchEndpoint(i.sf_act_symbol);
                                      this.fetchGraphData1D(i.sf_act_symbol,'compact','5min');
                                      //1week
                                      this.fetchGraphData1D(i.sf_act_symbol,'full','15min');
                                      //1month
                                      this.fetchGraphData1D(i.sf_act_symbol,'full','60min');

                                      this.fetchGraphData1y(i.sf_act_symbol,'full');
                                    
                                      }}>
                                      <p className='text-left  pad-l-r' style={{width:'48px'}}>{i.sf_act_symbol}</p>
                                      <p className='text-left word-clamp' >{i.sf_company_name}</p>

                                    
                                  </div>:
                                  
                                  ((
                                   
                                
                                   i.sf_act_symbol.toLowerCase().indexOf(this.state.keyword.toLowerCase())>-1)||( i.sf_company_name.toLowerCase().indexOf(this.state.keyword.toLowerCase())>-1))&&((i.sf_act_symbol.toLowerCase().search(this.state.keyword.toLowerCase())===0)||i.sf_company_name.toLowerCase().search(this.state.keyword.toLowerCase())===0)?
                                  <div key={index}  className=' row div-margin-no cursor' onClick={()=>{
                                      this.setState({
                                        updateData1d:true,
                                        updateData1w:true,
                                        updateData1m:true,
                                        updateData3m:true,
                                        updateData1y:true,
                                        updateData5y:true,
                                        show:null
                                


                                      })
                                      this.fetchData(i.sf_act_symbol);
                                      this.fetchCompanyCompliant(i.sf_act_symbol)
                                      
                                      this.fetchEndpoint(i.sf_act_symbol);
                                      this.fetchGraphData1D(i.sf_act_symbol,'compact','5min');
                                      //1week
                                      this.fetchGraphData1D(i.sf_act_symbol,'full','15min');
                                      //1month
                                      this.fetchGraphData1D(i.sf_act_symbol,'full','60min');

                                      this.fetchGraphData1y(i.sf_act_symbol,'full');
                                    
                                      }}>
                                      <p className='text-left pad-l-r' style={{width:'48px'}}>{i.sf_act_symbol}</p>
                                      <p className='text-left word-clamp' >{i.sf_company_name}</p>

                                    
                                  </div>:null
                                    ))}

                                  </InfiniteScroll>
                              :<p>Loading...</p>
                              
                              
                              }
                                
                          </div>
               
                </div>

                  {/* mobile view */}

              {/* <div className='col-md-1'></div> */}
              <div className="col-md-8 " > 


                
                

              
                {((this.state.graphData1d&&this.state.graphData5y)===null)?
                   
                  <div className='d-flex  align-items-center justify-content-center'  style={{height:'300px'}}>

                  <div className="loading-graph spinner-border"  role="status"> 
                  </div>
                  <div className='loading2 loading-img position-absolute'> 

                  </div>
                    
                  </div>
                :
                 ( update===true)?
                    <div className='d-flex  align-items-center justify-content-center'  style={{height:'300px'}}>
                
                    <div className="loading-graph spinner-border"  role="status"> 
                  </div>
                  <div className='loading2 loading-img position-absolute'> 

                  </div>
                    
                    </div>:<>
                    {console.log("ccc",this.state.comData)}
                    <p className='graph-title'>{`${this.state.comCompliantDetails.sf_company_name}`}</p><p className='graph-title'>{`(${this.state.comCompliantDetails.sf_act_symbol})`}</p>
                  <div style={{height:'300px'}}>
             
                  
                 
                    {(this.state.homeTab==='1d'&&this.state.graphData1d!==null)? <Intra1DGraph {...this.size}></Intra1DGraph>:null}
                    {(this.state.homeTab==='1w'&&this.state.graphData1w!==null)?  <Intra1DGraph {...this.size}></Intra1DGraph>:null}
                    {(this.state.homeTab==='1m'&&this.state.graphData1m!==null)?   <Intra1DGraph {...this.size}></Intra1DGraph>:null}
                    {(this.state.homeTab==='3m'&&this.state.graphData3m!==null)?  <Intra1DGraph {...this.size}></Intra1DGraph>:null}
                    {(this.state.homeTab==='1y'&&this.state.graphData1y!==null)?   <YearlyGraph {...this.size}></YearlyGraph>:null}
                    {(this.state.homeTab==='5y'&&this.state.graphData5y!==null)?  <YearlyGraph {...this.size}></YearlyGraph>:null}
                    
                 
                </div></>
                
                }

                  <div className='row div-margin-no div-home-tab ' >

                    <p className={this.state.homeTab==='1d'?'home-a cursor p-color':'home-a cursor'} onClick={()=>{this.setState({homeTab:"1d"})}}>1d</p>
                    <p className={this.state.homeTab==='1w'?'home-a cursor p-color':'home-a cursor'} onClick={()=>{this.setState({homeTab:"1w"})}}>1w</p>
                    <p className={this.state.homeTab==='1m'?'home-a cursor p-color':'home-a cursor'} onClick={()=>{this.setState({homeTab:"1m"})}}>1m</p>
                    <p className={this.state.homeTab==='3m'?'home-a cursor p-color':'home-a cursor'} onClick={()=>{this.setState({homeTab:"3m"})}}>3m</p>
                    <p className={this.state.homeTab==='1y'?'home-a cursor p-color':'home-a cursor'} onClick={()=>{this.setState({homeTab:"1y"})}}>1y</p>
                    <p className={this.state.homeTab==='5y'?'home-a cursor p-color':'home-a cursor'} onClick={()=>{this.setState({homeTab:"5y"})}}>5y</p>
                  </div>







                  <div className='row home-about-margin ' >
                  
                   <p className='home-about-head'>About</p>
               
                   
                       
                     {this.state.comData===null?null:
                     <> 
                      <p className={this.state.readmore==='less'?'text-left company-details cursor':'text-left cursor'} 
                      onClick={()=>{this.state.readmore==='less'?this.setState({readmore:"show"})
                      :this.setState({readmore:"less"})}}
                      > 
                      {this.state.comData.Description}
                      </p> 
                    
                     
                     </>}

                                
                  </div>
                  {console.log(this.state.comData)}
                  {/*  */}
                  <div className='row home-about-margin ' >
                    <div className='col-md-3 text-left'>
                      <div className=' '>
                      <p  className='p-pad-zero'>Open</p>
                      <p className='f-s-13'>{this.state.comEndData===null?null:parseFloat(this.state.comEndData['Global Quote']['02. open']).toFixed(2)}</p>
                      </div>
                      
                    </div>
                    <div className='col-md-3 text-left'>
                      <div className=' '>
                          <p  className='p-pad-zero'>Today's High</p>
                          <p className='f-s-13'>{this.state.comEndData===null?null:parseFloat(this.state.comEndData['Global Quote']['03. high']).toFixed(2)}</p>
                      </div>
                      
                    </div>
                    <div className='col-md-3 text-left'>
                      <div className=' '>
                          <p  className='p-pad-zero'>Today's Low</p>
                          <p className='f-s-13'>{this.state.comEndData===null?null:parseFloat(this.state.comEndData['Global Quote']['04. low']).toFixed(2)}</p>
                      </div>
                      
                    </div>


                    <div className='col-md-3 text-left'>
                      
                      <div className=''>
                          <p  className='p-pad-zero'>Dividend Yield</p>
                          <p className='f-s-13'>{this.state.comData===null?null:this.state.comData.DividendYield}</p>
                      </div>
                    </div>

                 
                  


                  </div>

                  {/*  */}



                  <div className='row home-about-margin ' >
                    <div className='col-md-3 text-left'>
                      <div className=' '>
                      <p  className='p-pad-zero'>52 Week High</p>
                      <p className='f-s-13'>{this.state.comData===null?null:this.state.comData['52WeekHigh']}</p>
                      </div>
                      
                    </div>
                    <div className='col-md-3 text-left'>
                      <div className=' '>
                          <p  className='p-pad-zero'>52 Week Low</p>
                          <p className='f-s-13'>{this.state.comData===null?null:this.state.comData['52WeekLow']}</p>
                      </div>
                      
                    </div>
                    <div className='col-md-3 text-left'>
                      <div className=' '>
                          <p  className='p-pad-zero'>Headquarters</p>
                          <p className='f-s-13'>{this.state.comData===null?null:this.state.comData.Address}</p>
                      </div>
                      
                    </div>


                    <div className='col-md-3 text-left'>
                      <div className=' '>
                      <p  className='p-pad-zero'>Employee</p>
                          <p className='f-s-13'>{this.state.comData===null?null:this.state.comData.FullTimeEmployees}</p>
                      </div>
                      
                    </div>

                 
                  


                  </div>
                
                  <div className='row home-about-margin ' >
                    <div className='col-md-3 text-left'>
                        <div className=' '>
                            <p  className='p-pad-zero'>Market Cap</p>
                            <p className='f-s-13'>{this.state.comData===null?null:this.state.comData.MarketCapitalization}</p>
                        </div>
                        
                      </div>


                      <div className='col-md-3 text-left'>
                        <div className=' '>
                        <p  className='p-pad-zero'>Price-Earning Ratio</p>
                            <p className='f-s-13'>{this.state.comData===null?null:this.state.comData.PERatio}</p>
                        </div>
                        
                      </div>


                    <div className='col-md-3 text-left'>
                    
                      <div className=''>
                          <p  className='p-pad-zero'>Avarage Volume</p>
                          <p className='f-s-13'>{this.state.comData===null?null:this.state.comData['50DayMovingAverage']}</p>
                      </div>
                    </div>

                 </div>

                  <div className='row home-about-margin ' >
                    <p className='home-about-head'>AAOIFI Screening Result</p>
                    <p className={this.state.show===null?'cursor ':'display-n'} onClick={()=>this.setState({
                      show:'show'
                    })}><Link className='a-green'>Click here </Link>to see the result</p>
                   

                    
                  </div>
                  <div  className={this.state.show===null?'row home-about-margin text-left display-n':'row home-about-margin text-left'} >
                  {/* non compliant */}
                 
                    {this.state.comCompliantDetails.sf_aaoifi_compliant==='NON-COMPLIANT'?<>
                    <p>
                    <FontAwesomeIcon  style={{fontSize:'20px',marginRight:'10px'}} color='#BF0A30' icon={faTimesCircle}/>
                   
                     Based on AAOIFI Standard, <a className='a-red'>{`${this.state.comCompliantDetails.sf_company_name} (${this.state.comCompliantDetails.sf_act_symbol})`}</a> is not compliant. </p>
                      <p>{`This stock is non compliant due to ${message}` }</p></>:null}

                      {/* yellow */}
                      
                    {this.state.comCompliantDetails.sf_aaoifi_compliant==="YELLOW"?<>

                    {/* https://fontawesome.com/how-to-use/on-the-web/using-with/react */}
                    <p>  <FontAwesomeIcon  style={{fontSize:'20px' ,marginRight:'10px'}} color='#ed931a' icon={faExclamationCircle}/> <a className='a-yellow'>{`${this.state.comCompliantDetails.sf_company_name} (${this.state.comCompliantDetails.sf_act_symbol})`}</a> didn’t provide enough data to decide on this stock.</p> 
                    <p>{`Based on AAOIFI Standard. It is advisable to do due diligence on this stock before trading.`}</p> 
                    </>:null}


                    {/* complaint */}
                    {this.state.comCompliantDetails.sf_aaoifi_compliant==="COMPLIANT"?<>
                      <FontAwesomeIcon  style={{fontSize:'20px' ,marginRight:'10px'}} color='green' icon={faCheckCircle}/>

                      <p>Based on AAOIFI Standard, <a className='a-green'>{`${this.state.comCompliantDetails.sf_company_name} (${this.state.comCompliantDetails.sf_act_symbol})`}</a> is compliant to trade. </p>
                      <p> </p>
                    </>:null}
                  </div>
                  {console.log("asd",this.state.comCompliantDetails)}


              </div>
                

              
           

             
       


                      {/* stocks showing company names */}
                  <div className='float-right home-company-list home-display-none '> 
                       <div className='overflow-hidden ' style={{marginBottom:'10px'}}>    
                          
                        {/* <p className=' float-left' style={{marginTop:'10px'}}>Stocks</p> */}
                        <SearchField 
                                placeholder="Stock Search..."
                                onChange ={(value)=> this.setState({keyword:value})}
                              
                                classNames="searchfield float-left"
                        />
                        </div>


                          <div className='div-scroll'>
                              
                            {this.state.keyword===''||this.state.keyword===null?
                                this.state.comSymbol!==null&&this.state.itemSymbol!==null?

                                    <InfiniteScroll
                                        dataLength={this.state.itemSymbol.length}
                                        next={this.scrollMoreData}
                                        hasMore={true}
                                        loader={<p>Loading...</p>}
                                        height={380}
                                        
                                        endMessage={
                                            <p style={{ textAlign: "center" }}>
                                            <b>Yay! You have seen it all</b>
                                            </p>
                                        }
                                    >
                                    {this.state.itemSymbol.map((i,index) => (
                                    
                                        <div key={index}  className=' row div-margin-no cursor' onClick={()=>{
                                        this.setState({
                                            updateData1d:true,
                                            updateData1w:true,
                                            updateData1m:true,
                                            updateData3m:true,
                                            updateData1y:true,
                                            updateData5y:true,
                                            show:null,


                                        })
                                        this.fetchData(i.sf_act_symbol);
                                        this.fetchCompanyCompliant(i.sf_act_symbol)
                                        
                                        this.fetchEndpoint(i.sf_act_symbol);
                                        this.fetchGraphData1D(i.sf_act_symbol,'compact','5min');
                                        //1week
                                        this.fetchGraphData1D(i.sf_act_symbol,'full','15min');
                                        //1month
                                        this.fetchGraphData1D(i.sf_act_symbol,'full','60min');

                                        this.fetchGraphData1y(i.sf_act_symbol,'full');
                                        
                                        }}>
                                        <p className='text-left col-md-3 pad-l-r' >{i.sf_act_symbol}</p>
                                        <p className='text-left word-clamp' >{i.sf_company_name}</p>

                                        
                                    </div>
                                    
                                    ))}

                                    </InfiniteScroll>
                                :<p>Loading...</p>

                              :
                              this.state.comSymbol!==null&&this.state.itemSymbol!==null?
                                      <>
                                  <InfiniteScroll
                                      dataLength={this.state.comSymbol.length}
                                     
                                      hasMore={false}
                                      loader={<p>Loading...</p>}
                                      height={380}
                                    
                                      
                                  >
                                  {this.state.comSymbol.map((i,index) => ((
                                   
                                  
                                  i.sf_act_symbol.toLowerCase().indexOf(this.state.keyword.toLowerCase())>-1)||( i.sf_company_name.toLowerCase().indexOf(this.state.keyword.toLowerCase())>-1))&&((i.sf_act_symbol.toLowerCase().search(this.state.keyword.toLowerCase())===0)||i.sf_company_name.toLowerCase().search(this.state.keyword.toLowerCase())===0)?
                                  
                                  <div key={index}  className=' row div-margin-no cursor'  onClick={()=>{
                                      this.setState({
                                        updateData1d:true,
                                        updateData1w:true,
                                        updateData1m:true,
                                        updateData3m:true,
                                        updateData1y:true,
                                        updateData5y:true,
                                        show:null


                                      })
                                      this.fetchData(i.sf_act_symbol);
                                      this.fetchCompanyCompliant(i.sf_act_symbol)
                                      
                                      this.fetchEndpoint(i.sf_act_symbol);
                                      this.fetchGraphData1D(i.sf_act_symbol,'compact','5min');
                                      //1week
                                      this.fetchGraphData1D(i.sf_act_symbol,'full','15min');
                                      //1month
                                      this.fetchGraphData1D(i.sf_act_symbol,'full','60min');

                                      this.fetchGraphData1y(i.sf_act_symbol,'full');
                                    
                                      }}>
                                      <p className='text-left col-md-3 pad-l-r' >{i.sf_act_symbol}</p>
                                      <p className='text-left word-clamp' >{i.sf_company_name}</p>

                                    
                                  </div>:null
                                    )}

                                </InfiniteScroll>
                                  </>
                              :<p>Loading...</p>
                            
                            }
                                
                          </div>
                </div>




              
              
            </div>
            
    
            
          </div>
         


        

          
        </div>
        <Footer/>
        
        </>
    );
  }
}
