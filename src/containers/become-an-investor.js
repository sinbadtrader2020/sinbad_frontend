import React, { Component } from 'react'
import Translator from '../utils/translator'

export default class BecomeAnInvestor extends Component {
    render() {
        return (
            <>
               <div className="container  padding-extra ">
          <div className="row div-row-padding">
            {/* <div className="col-md-1"></div> */}
            <div className="col-md-7 m-auto">
              <h3 className="div-h4-blue text-start"> <Translator text="becomeAnInvestor.1" /></h3>
              <p> <Translator text="becomeAnInvestor.2" /></p>

              <div className="overflow-hidden  padding-zero ">
                <div className="float-left about-padding pad-zero" >
                  <input type="number" id="inputMDEx" className=" border-line1" />
                </div>
                <div className="float-left  about-padding pad-zero">
                  <input type="number" id="inputMDEx" className="border-line" />
                </div>
                <div className="float-left  about-padding pad-zero">
                <button className='btn btn-primary'>  <Translator text="becomeAnInvestor.3" /></button>

                </div>
              </div>

              <p>
              <Translator text="becomeAnInvestor.4" />
              </p>
            </div>
           <div className='col-md-1'>
        
           </div>
            <div className="col-md-3 text-center"
            
            >
              <img
              className='img-responsive'
                src={"assets/images/become-an-investor.png"}
                alt="logo"
               
              />
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>


            </>
        )
    }
}
