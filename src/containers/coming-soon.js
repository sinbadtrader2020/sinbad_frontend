import React, { Component } from 'react'
import MainNavBar from './main-nav-bar'


export default class ComingSoon extends Component {
    render() {
        return (
            <>
                <MainNavBar props={this.props} />
                <div className="NotFound">
                    <h3>The feature will be coming soon</h3>
                
                   
                </div>
                
            </>
        )
    }
}
