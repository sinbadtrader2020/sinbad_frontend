import React, { Component } from 'react'
import MainNavBar from './main-nav-bar'
import { Auth } from '../api/auth'

export default class ComingSoon extends Component {
    render() {
        return (
            <>
                <MainNavBar props={this.props} />
                <div className="NotFound">
                    <h3>The feature will be coming soon</h3>
                    <button onClick={()=>{Auth.blog()
    }}>fetch</button>
                    <button onClick={()=>{console.log(Auth.blogData.data[8].blog_cover)}}>asdas</button>
                </div>
                
            </>
        )
    }
}
