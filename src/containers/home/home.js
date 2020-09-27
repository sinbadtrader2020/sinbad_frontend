import React from "react";


import { Helmet } from "react-helmet";
import UserMainNavBar from "./user-main-nav-bar";
import Graph from "../../utils/graph/past-performance-graph";



export default class Home extends React.Component {
  constructor(){
    super();
    this.state={
      comData:null,
      hit:null,
      homeTab:'1d',
      readmore:'less',
      graphData:null,
      graphData1d:null,
    }
    this.size={
      height:300,
      width:650,
      data:null
    }
  }


  fetchGraphData1D(){
    const pointer=this;
    let fetchData=[];
    console.log("initialism")
    const API_KEY='AOYGBU6J7IN09PCE'
    let API_Symbol = 'IBM';
    let API_CALL=`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${API_Symbol}&interval=1min&apikey=${API_KEY}`
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
              for (var key in data['Time Series (1min)']) {
                   
                  t=Date.parse(key);
                  t=(t)/1000
              
                fetchData.push(
                    
                  
                   { time:parseFloat(t),
                    value:parseFloat(data['Time Series (1min)'][key]['4. close'])}
                    
                 );
               }
                  // fetchData=fetchData.slice(0,365)
                  fetchData.reverse()

                  console.log('qw',fetchData)
                  pointer.setState({
                    graphData1d:fetchData
                  })
           
            }
        )       
 
  }


  fetchGraphData(){
    const pointer=this;
    let fetchData=[];
    console.log("initialism")
    const API_KEY='AOYGBU6J7IN09PCE'
    let API_Symbol = 'IBM';
    let API_CALL=`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${API_Symbol}&outputsize=full&apikey=${API_KEY}`

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
                  // fetchData=fetchData.slice(0,365)
                  // fetchData.reverse()

                  // console.log('qw',fetchData)
                  pointer.setState({
                    graphData:fetchData
                  })
           
            }
        )       
 
  }

  fetchData(symbol,key){
    const pointer=this;
    let fetchData=[];
    
    const API_KEY='AOYGBU6J7IN09PCE'
    let API_Symbol = 'IBM';
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


 componentDidMount(){
   this.fetchData('a',"a");
   this.fetchGraphData1D();
   
  this.fetchGraphData();
   
 }
  render() {
    if(this.state.homeTab==='1d'&&this.state.graphData!==null){
      this.size.data=this.state.graphData.slice(0,30)
      // this.state.data=this.size.data.reverse();
      console.log("1d",this.size.data.reverse());
    }
    if(this.state.homeTab==='1y'&&this.state.graphData!==null){
      this.size.data=this.state.graphData.slice(0,365);
      this.size.data.reverse();
      console.log("1y",this.size.data);


    }
    if(this.state.homeTab==='3m'&&this.state.graphData!==null){
      this.size.data=this.state.graphData.slice(0,90);
      this.size.data.reverse();
      console.log("3m",this.size.data);

    }
    if(this.state.homeTab==='1m'&&this.state.graphData!==null){
      this.size.data=this.state.graphData.slice(0,30);
      this.size.data.reverse()
    }
    if(this.state.homeTab==='1w'&&this.state.graphData!==null){
      this.size.data=this.state.graphData.slice(0,7);
      this.size.data.reverse()
    }
    if(this.state.homeTab==='all'&&this.state.graphData!==null){
      this.size.data=this.state.graphData.slice(0,5000)
    
      this.size.data.reverse()
      console.log("all data",this.size.data)
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
              <div className="col-md-7 ">
                {this.state.homeTab==='1d'&&this.state.graphData!==null? <Graph {...this.size}></Graph>:null}
                {this.state.homeTab==='1w'&&this.state.graphData!==null?  <Graph {...this.size}></Graph>:null}
                {this.state.homeTab==='1m'&&this.state.graphData!==null?   <Graph {...this.size}></Graph>:null}
                {this.state.homeTab==='3m'&&this.state.graphData!==null?   <Graph {...this.size}></Graph>:null}
                {this.state.homeTab==='1y'&&this.state.graphData!==null?   <Graph {...this.size}></Graph>:null}
                {this.state.homeTab==='all'&&this.state.graphData!==null?  <Graph {...this.size}></Graph>:null}
{/* 
                  <div className='row div-margin-no div-home-tab ' >
                    <div className={this.state.homeTab==='1d'?'col-md-1 cursor div-home-tab home-tab-black':'col-md-1 cursor div-home-tab'}  onClick={()=>(this.state.homeTab==='1d'?null:this.setState({homeTab:"1d"}))}> <p>1D</p>               </div>
                    <div className={this.state.homeTab==='1w'?'col-md-1 cursor div-home-tab home-tab-black':'col-md-1 cursor div-home-tab'}    onClick={()=>(this.state.homeTab==='1w'?null:this.setState({homeTab:"1w"}))}> <p>1W</p>               </div>
                    <div className={this.state.homeTab==='1m'?'col-md-1 cursor div-home-tab home-tab-black':'col-md-1 cursor div-home-tab'}  onClick={()=>(this.state.homeTab==='1m'?null:this.setState({homeTab:"1m"}))}> <p>1M</p>               </div>
                    <div className={this.state.homeTab==='3m'?'col-md-1 cursor div-home-tab home-tab-black':'col-md-1 cursor div-home-tab'}  onClick={()=>(this.state.homeTab==='3m'?null:this.setState({homeTab:"3m"}))}> <p>3M</p>               </div>
                    <div className={this.state.homeTab==='1y'?'col-md-1 cursor div-home-tab home-tab-black':'col-md-1 cursor div-home-tab'}   onClick={()=>(this.state.homeTab==='1y'?null:this.setState({homeTab:"1y"}))}> <p>1Y</p>               </div>
                    <div className={this.state.homeTab==='all'?'col-md-1 cursor div-home-tab home-tab-black':'col-md-1 cursor div-home-tab'}   onClick={()=>(this.state.homeTab==='all'?null:this.setState({homeTab:"all"}))}> <p>All</p>               </div>
                  

                  </div> */}
                  <div className='row div-margin-no div-home-tab ' >

                    <p className='home-a cursor' onClick={()=>{this.setState({homeTab:"1d"})}}>1d</p>
                    <p className='home-a cursor' onClick={()=>{this.setState({homeTab:"1w"})}}>1w</p>
                    <p className='home-a cursor' onClick={()=>{this.setState({homeTab:"1m"})}}>1m</p>
                    <p className='home-a cursor' onClick={()=>{this.setState({homeTab:"3m"})}}>3m</p>
                    <p className='home-a cursor' onClick={()=>{this.setState({homeTab:"1y"})}}>1y</p>
                    <p className='home-a cursor' onClick={()=>{this.setState({homeTab:"all"})}}>all</p>
                  </div>







                  <div className='row home-about-margin ' >
                  
                   <p className='home-about-head'>About</p>
               
                   
                       
                     {this.state.comData===null?null:<> <p className={this.state.readmore==='less'?'text-left company-details cursor':'text-left cursor'} onClick={()=>{this.state.readmore==='less'?this.setState({readmore:"show"}):this.setState({readmore:"less"})}}> {this.state.comData.Description}</p> 
                    
                     
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
                

              
           

             
       



              <div className='float-right home-company-list'> 
                <p className='text-left'>Stocks</p>
              </div>
            </div>
            
    
        
          </div>


         

        </div>
      
        
        </>
    );
  }
}
