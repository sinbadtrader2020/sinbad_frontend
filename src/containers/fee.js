import React, { Component } from 'react'

import Footer from './footer'
import MainNavBar from './main-nav-bar'

export default class Fees extends Component {
    render() {
        return (
            <>
            <MainNavBar props={this.props}/>
            <Footer/>
                
            </>
        )
    }
}
