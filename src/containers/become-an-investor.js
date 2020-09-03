import React, { Component } from 'react'
import Translator from '../utils/translator'

export default class BecomeAnInvestor extends Component {
    render() {
        return (
            <>
                           <div className="container footer-no-margin padding-extra ">
          <div className="row div-row-padding">
            {/* <div className="col-md-1"></div> */}
            <div className="col-md-7 m-auto">
              <h3 className="div-h4-blue text-start"> <Translator text="becomeAnInvestor.1" /></h3>
              <p> <Translator text="becomeAnInvestor.2" /></p>

              <div className="row  padding-zero">
                <div className="col-md-2 about-padding">
                  <input type="number" id="inputMDEx" className=" border-line" />
                </div>
                <div className="col-md-5 about-padding">
                  <input type="number" id="inputMDEx" className="border-line" />
                </div>
                <div className="col-md-3 about-padding">
                <button className='btn btn-primary'>  <Translator text="becomeAnInvestor.3" /></button>

                </div>
              </div>

              <p>
              <Translator text="becomeAnInvestor.4" />
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


            </>
        )
    }
}
