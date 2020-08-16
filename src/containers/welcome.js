import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Footer from "./footer";
import MainNavBar from "./main-nav-bar";

import Translator from "./translator";
import { Path } from "./config";
import { Link } from "react-router-dom";

const imagesPath = {
  img1: "assets/images/learn.png",
  img2: "assets/images/manage.png",
  img3: "assets/images/customize.png"
}
const featureName = {
  learn :{ 
    tittle :<Translator text='welBlock3L1R1.1'/>,
    body : <Translator text='welBlock3L1R2.1'/>
   },
   manage :{ 
    tittle :<Translator text='welBlock3L2R1.1'/>,
    body :<Translator text='welBlock3L2R2.1'/>
   },
   customize :{ 
    tittle :<Translator text='welBlock3L3R1.1'/>,
    body : <Translator text='welBlock3L3R2.1'/>
   }
}

const arrFeature=[["img1","learn"],["img2","manage"],["img3","customize"]]





class Welcome extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      imgname: imagesPath["img1"],
      featureContent: featureName["learn"],
      count:0,
      timer:5000
      
      
    

    };
  }
  imgChange= (param,param2,param3)=> e=>{
    console.log(param,param2)
    this.setState(
      {
      
        imgname:imagesPath[param],
        featureContent: featureName[param2],
        count:param3,
        timer:5000
      }
    )
  
  }
  async componentDidMount() {
    console.log(this.state.count)
    try {
      setInterval(async () => {
       
       
        if(this.state.count===2){
          this.setState( prevState => {
            return{
            count:0,
            imgname:imagesPath[arrFeature[0][0]],
            featureContent: featureName[arrFeature[0][1]]
            }
          })
        }
        else {
  
  
          this.setState( prevState => {
            return{
          
              imgname:imagesPath[arrFeature[prevState.count+1][0]],
              featureContent: featureName[arrFeature[this.state.count+1][1]],
              count:prevState.count+1,
          }
        })
      }
      }, this.state.timer);
    } catch(e) {
      console.log(e);
    }
  }


 
  

  render() {
    var style = {
      color: 'white',
      
    };
    var style1 ={
      color:'#dd7777'
    }
    return (
      <>
        <Helmet>
          <title>Sinbad Finance</title>
        </Helmet>
        

         {/* <!-- Main menu Navbar --> */}
         <MainNavBar/>

        {/* <!-- Home page design -->
             <!-- Intro design --> */}
        <div className="home-intro">
          <div className="container ">
            <div
              className="row div-row-padding"
              style={{ textAlign: "center" }}
            >
              <div className="col-md-7">
                <h1 className="mt-5"> <Translator text='welBlock1R1.1'/></h1>
                <h3 className="mt-2"> <Translator text='welBlock1R2.1'/></h3>
                <p className="mt-5">
                <Translator text='welBlock1R3.1'/>
                </p>
                <Link className="btn btn-danger"  to={Path.signup }><Translator text='welBlock1R4.1'/></Link>
              </div>
              <div className="col-md-5 intro-img">
                <img src={"assets/images/home-intro.png"} alt="logo" />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- How it Work --> */}
        <div className="container">
          <div className="row div-row-padding">
            <div className="col-md-12">
              <h2 className="div-h1-red-center"><Translator text='welBlock2R1.1'/></h2>
            </div>
          </div>
          <div className="row" style={{ paddingBottom: "50px" }}>
            <div className="col-md-1"></div>
            <div
              className="col-md-4 row-padding"
              style={{ textAlign: "center" }}
            >
              <img
                src={"assets/images/home-intro.png"}
                style={{ height: "400px" }}
                alt="logo"
              />
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6 row-padding">
              <div className="works-div">
                <div>
                  <img src={"assets/images/signup.png"} alt="logo" />
                </div>
                <div>
                  <h2><Translator text='welBlock2R2.1'/></h2>
                  <p>
                  <Translator text='welBlock2R3.1'/>
                   
                  </p>
                </div>
              </div>
              <div className="works-div">
                <div className="a">
                  <img src={"assets/images/fund.png"} alt="logo" />
                </div>
                <div>
                  <h2><Translator text='welBlock2R4.1'/></h2>
                  <p>

                  <Translator text='welBlock2R5.1'/>
                   
                  </p>
                </div>
              </div>
              <div className="works-div">
                <div className="a">
                  <img src={"assets/images/monitor.png"} alt="logo" />
                </div>
                <div>
                  <h2>  <Translator text='welBlock2R6.1'/></h2>
                  <p>  <Translator text='welBlock2R7.1'/></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Homepage feature slider --> */}
        <div className="home-intro">
          <div className="container">
            <div className="row h-100 row-padding">
              <div className="col-md-3 my-auto btn-white slider-btn">
                <div>
                  <button  className="btn" style={this.state.count===0?style:style1} onClick={this.imgChange(arrFeature[0][0],arrFeature[0][1],0)} ><Translator text='welBlock3L1R.1'/></button>
                </div>

                <div>
                  <button style={this.state.count===1?style:style1} className="btn" 
                  onClick={this.imgChange(arrFeature[1][0],arrFeature[1][1],1)}        
                
                   
                  
                  ><Translator text='welBlock3L2R.1'/></button>
                </div>
                <div>
                  <button style={this.state.count===2?style:style1} className="btn" onClick={this.imgChange(arrFeature[2][0],arrFeature[2][1],2)} ><Translator text='welBlock3L3R.1'/></button>
                </div>
              </div>
            
              <div className="col-md-9 my-auto">
                <div className="container">
                  <div className="row txt-img-mob-center">
                    <div className="col-md-5 my-auto">
                      <img src={this.state.imgname} alt="logo" />
                    </div>
                    <div className="col-md-7 my-auto">
                      <h3>{this.state.featureContent.tittle}</h3>
                      <p className="mt-4">
                        {   this.state.featureContent.body}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Homepage search feature design --> */}
        <div className="container">
          <div className="row div-row-padding">
            <div className="col-md-12">
              <h2 className="div-h1-red-center"><Translator text='welBlock4R1.1'/></h2>
            </div>
          </div>
          <div className="row txt-img-mob-center">
            <div className="col-md-1"></div>
            <div className="col-md-4 search-div">
              <h3 className="mt-5"><Translator text='welBlock4R2.1'/></h3>
              <p><Translator text='welBlock4R3.1'/></p>

              <p className="mt-4 mb-4">
              <Translator text='welBlock4R4.1'/> 
              </p>

              <h3><Translator text='welBlock4R5.1'/></h3>
              <p><Translator text='welBlock4R6.1'/></p>
            </div>
            <div
              className="col-md-6"
              style={{ maxHeight: "350px", zIndex: " -1" }}
            >
              <img
                src={"assets/images/search.png"}
                alt="logo"
                style={{ overflow: "hidden", height: "600px" }}
              />
            </div>
          </div>
        </div>



      <Footer/>
     
      </>
    );
  }
}

export default Welcome;
