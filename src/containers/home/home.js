import React from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import UserMainNavBar from "./user-main-nav-bar";

import { API } from "../../api/config";
import InfiniteScroll from "react-infinite-scroll-component";
import Intra1DGraph from "../../utils/graph/intrad-1day-graph";
import YearlyGraph from "../../utils/graph/yearly-graph";



export default class Home extends React.Component {
  constructor(){
    super();
    this.state={
      
      comSymbol:null, //All company list
      itemSymbol:null, // pagination
      itemSymbolIndex:0,


      comData:null,   // one company details
      readmore:'less',  

//graphdata means the data value send to load graph
//update is for if the api call is making data fetch 
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
      width:600,
      data:null
    }
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


  // for all company list 
  fetchAllCompanySymbol(){
    
      
      
      return axios
      .get(API.companyOverview)
      .then((response) => {this.setState({
        comSymbol:response.data.data,
        itemSymbol: response.data.data.slice(0,20),
        itemSymbolIndex:20
      });
      console.log('res', response.data.data)})

      
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
                      updateData1d:false
                    })
                  }
                  //1w
                  else if(API_INTERVAL==='15min'&&API_OUTPUT==='full'){
                    fetchData=fetchData.slice(0,238);
                    fetchData.reverse();

                    pointer.setState({
                       graphData1w:fetchData,
                        updateData1w:false

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
        itemSymbol: this.state.itemSymbol.concat(this.state.comSymbol.slice(this.state.itemSymbolIndex,this.state.itemSymbolIndex+20)),
        itemSymbolIndex :this.state.itemSymbolIndex+20
      });
    }, 500);
  };

   



  componentDidMount(){
    //all company list
    this.fetchAllCompanySymbol()
    // one company details
    this.fetchData('IBM');
    //1day
    this.fetchGraphData1D('IBM','compact','5min');
    //1week
    this.fetchGraphData1D('IBM','full','15min');
    //1month
    this.fetchGraphData1D('IBM','full','60min');
    //1y,5y
    this.fetchGraphData1y('IBM','full');
    
    
    
  }
  render() {
    //1d
    if(this.state.homeTab==='1d'&&this.state.graphData1d!==null){
      this.size.data=this.state.graphData1d
     
     
    }
    //1w
    if(this.state.homeTab==='1w'&&this.state.graphData1w!==null){
      this.size.data=this.state.graphData1w
   
    }
    //1m
    if(this.state.homeTab==='1m'&&this.state.graphData1m!==null){
      this.size.data=this.state.graphData1m;

    }
    //3m
    if(this.state.homeTab==='3m'&&this.state.graphData3m!==null){
      this.size.data=this.state.graphData3m;
     
    }
    //1y
    if(this.state.homeTab==='1y'&&this.state.graphData1y!==null){
      this.size.data=this.state.graphData1y;
      

    }
    //5y
    if(this.state.homeTab==='5y'&&this.state.graphData5y!==null){
      this.size.data=this.state.graphData5y
  
    }

  
    
    
    return (
      
    
        <>
          <Helmet>
            <title> Home</title>
          </Helmet>
          <UserMainNavBar props={this.props} />
          
          {/* <!-- Home page design -->
             <!-- Intro design --> */}
        <div className="home-intro user-home">
          <div className="container-fluid" >
            <div
              className="row div-top-only div-margin-no overflow-hidden"
              style={{ textAlign: "center" }}
            >
              <div className='col-md-1'></div>
              <div className="col-md-7 " > 
                <div style={{height:'300px',width:'600px'}}>
                    
                 
                    {this.state.updateData1d===false&&this.state.homeTab==='1d'&&this.state.graphData1d!==null? <Intra1DGraph {...this.size}></Intra1DGraph>:null}
                    {this.state.updateData1w===false&&this.state.homeTab==='1w'&&this.state.graphData1w!==null?  <Intra1DGraph {...this.size}></Intra1DGraph>:null}
                    {this.state.updateData1m===false&&this.state.homeTab==='1m'&&this.state.graphData1m!==null?   <Intra1DGraph {...this.size}></Intra1DGraph>:null}
                    {this.state.updateData3m===false&&this.state.homeTab==='3m'&&this.state.graphData3m!==null?  <Intra1DGraph {...this.size}></Intra1DGraph>:null}
                    {this.state.updateData1y===false&&this.state.homeTab==='1y'&&this.state.graphData1y!==null?   <YearlyGraph {...this.size}></YearlyGraph>:null}
                    {this.state.updateData5y===false&&this.state.homeTab==='5y'&&this.state.graphData5y!==null?  <YearlyGraph {...this.size}></YearlyGraph>:null}
                    
                 
                </div>

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
                  <div className='row home-about-margin ' >
                    <div className='col-md-3 text-left'>
                      <div className=' '>
                      <p className='p-pad-zero'>CEO</p>
                      <p className='f-s-13'>ceo</p>
                      </div>
                      
                    </div>
                    <div className='col-md-3 text-left'>
                      <div className=' '>
                          <p  className='p-pad-zero'>Employees</p>
                          <p className='f-s-13'>{this.state.comData===null?null:this.state.comData.FullTimeEmployees}</p>
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
                          <p  className='p-pad-zero'>Founded</p>
                          <p className='f-s-13'>CEO</p>
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
                          <p  className='p-pad-zero'>Dividend Yield</p>
                          <p className='f-s-13'>{this.state.comData===null?null:this.state.comData.DividendYield}</p>
                      </div>
                    </div>


                    <div className='col-md-3 text-left'>
                    
                      <div className=''>
                          <p  className='p-pad-zero'>Avarage Volume</p>
                          <p className='f-s-13'>{this.state.comData===null?null:this.state.comData['50DayMovingAverage']}</p>
                      </div>
                    </div>

                </div>

              </div>
                

              
           

             
       


{/* stocks showing company names */}
              {this.state.comSymbol!==null&&this.state.itemSymbol!==null?
                <div className='float-right home-company-list'> 
                  <p className='text-left'>Stocks</p>
                    <div className='div-scroll'>
                        

                            <InfiniteScroll
                                dataLength={this.state.itemSymbol.length}
                                next={this.scrollMoreData}
                                hasMore={true}
                                loader={<p>Loading...</p>}
                                height={400}
                              
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
                                  updateData5y:true


                                })
                                this.fetchData(i.sf_act_symbol);
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
                           
                    </div>
                </div>
              :null}





              
            </div>
            
    
        
          </div>


        


        </div>
      
        
        </>
    );
  }
}
