import React, { Component } from 'react'
import MainNavBar from './main-nav-bar'
import UserMainNavBar from './home/user-main-nav-bar'


export default class ComingSoon extends Component {
    render() {
        return (
            <>
            {this.props.isAuthenticated === false ||this.props.isAuthenticated === undefined?<MainNavBar props={this.props} />:<UserMainNavBar props={this.props}/>}

                <div className="NotFound">
                    <h3>The feature will be coming soon</h3>
                
                   
                </div>
                
            </>
        )
    }
}
