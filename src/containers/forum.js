import React, { Component } from 'react'
import MainNavBar from './main-nav-bar'
import Footer from './footer'

export default class Forum extends Component {
    render() {
        return (
          <>
            <MainNavBar props={this.props} />
            <div className="home-intro">
              <div className="container ">
                <div className="row div-row-padding">
                  <div className="col-md-12 m-auto " >
                 
                    <div className='col-md-4 justify-content-lg-center m-auto'  >
                    <h3 className='text-center font-weight-bold'  >
                      Sinbad Finance Forum
                    </h3>
                    <p className='text-center '   >
                        The place to discuss anything about Ethical investing or Sinbad Finance
                    </p></div>
                   
                  </div>
                </div>
              </div>
            </div>

            <Footer />
          </>
        );
    }
}
