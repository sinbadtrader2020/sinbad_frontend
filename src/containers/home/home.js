import React from "react";


import { Helmet } from "react-helmet";
import UserMainNavBar from "./user-main-nav-bar";
import Graph from "../../utils/past-performance-graph";


export default class Home extends React.Component {
  constructor(){
    super();
    this.state={
      homeTab:'1d'
    }
  }

 
  render() {
    const size={
      height:300,
      width:650
    }
    return (
    
        <>{  console.log(this.state.homeTab)}
          <Helmet>
            <title> Home</title>
          </Helmet>
          <UserMainNavBar props={this.props} />
          
          {/* <!-- Home page design -->
             <!-- Intro design --> */}
        <div className="home-intro">
          <div className="container-fluid" >
            <div
              className="row div-top-only div-margin-no overflow-hidden"
              style={{ textAlign: "center" }}
            >
              <div className='col-md-1'></div>
              <div className="col-md-7 ">
                {this.state.homeTab==='1d'? <Graph {...size}></Graph>:null}
                {this.state.homeTab==='1w'?  <Graph {...size}></Graph>:null}
                {this.state.homeTab==='1m'?   <Graph {...size}></Graph>:null}
                {this.state.homeTab==='3m'?   <Graph {...size}></Graph>:null}
                {this.state.homeTab==='1y'?   <Graph {...size}></Graph>:null}
                {this.state.homeTab==='all'?  <Graph {...size}></Graph>:null}

                  <div className='row div-margin-no div-home-tab ' >
                    <div className={this.state.homeTab==='1d'?'col-md-1 cursor div-home-tab home-tab-black':'col-md-1 cursor div-home-tab'}  onClick={()=>(this.state.homeTab==='1d'?null:this.setState({homeTab:"1d"}))}> <p>1D</p>               </div>
                    <div className={this.state.homeTab==='1w'?'col-md-1 cursor div-home-tab home-tab-black':'col-md-1 cursor div-home-tab'}    onClick={()=>(this.state.homeTab==='1w'?null:this.setState({homeTab:"1w"}))}> <p>1W</p>               </div>
                    <div className={this.state.homeTab==='1m'?'col-md-1 cursor div-home-tab home-tab-black':'col-md-1 cursor div-home-tab'}  onClick={()=>(this.state.homeTab==='1m'?null:this.setState({homeTab:"1m"}))}> <p>1M</p>               </div>
                    <div className={this.state.homeTab==='3m'?'col-md-1 cursor div-home-tab home-tab-black':'col-md-1 cursor div-home-tab'}  onClick={()=>(this.state.homeTab==='3m'?null:this.setState({homeTab:"3m"}))}> <p>3M</p>               </div>
                    <div className={this.state.homeTab==='1y'?'col-md-1 cursor div-home-tab home-tab-black':'col-md-1 cursor div-home-tab'}   onClick={()=>(this.state.homeTab==='1y'?null:this.setState({homeTab:"1y"}))}> <p>1Y</p>               </div>
                    <div className={this.state.homeTab==='all'?'col-md-1 cursor div-home-tab home-tab-black':'col-md-1 cursor div-home-tab'}   onClick={()=>(this.state.homeTab==='all'?null:this.setState({homeTab:"all"}))}> <p>All</p>               </div>
                  

                  </div>

                  <div className='row home-about-margin ' >
                  
                   <p className='home-about-head'>About</p>
                 
                  </div>


              </div>
                

              
           

             
       



              <div className='float-right' style={{padding:'20px', height:'500px',width:'300px',right:"8%",border:"1px solid black"}}> 
                <p className='text-left'>Stocks</p>
              </div>
            </div>
            
    
        
          </div>


         

        </div>
      
        
        </>
    );
  }
}
