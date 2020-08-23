import React, { Component } from 'react'
import MainNavBar from './main-nav-bar'
import Footer from './footer'

export default class Blog extends Component {
    render() {
        return (
            <>
            <MainNavBar props={this.props}/>

            <Footer/>
                
            </>
        )
    }
}
