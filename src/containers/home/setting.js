import React, { Component } from 'react'

import { Helmet } from 'react-helmet';
import UserMainNavBar from './user-main-nav-bar';
import Translator from '../../utils/translator';

import Editable from '../../utils/editablelabel'
import { Link } from 'react-router-dom';
import { Auth } from '../../api/auth';
class Setting extends Component {
    constructor(props){
        super(props);
        this.user={
            id:this.props.user.data[0].id
        }
        this.state={
            email:this.props.user.data[0].email,
            street_address:this.props.user.data[0].street_address,
            mobile_number:this.props.user.data[0].mobile_number,
            first_name:this.props.user.data[0].first_name,
            last_name:this.props.user.data[0].last_name,
        }
    }
    handleSubmit =(event)=>{
        console.log("called submit")
        event.preventDefault();
        Auth.updateUser(this.state,this.user.id).then((response) => {
         

        })
        Auth.updateData(this.user.id).then((res)=>{
            
        })
        
    }
 
    handleChange = (event) => {
        console.log("id---->", event.target.id, " value---->", event.target.value);
        console.log("state",this.state)
    
        this.setState({
          [event.target.id]: event.target.value,
        });
      };
    render() {
        return (
           
            <div className="setting">
            {console.log(this.props.user.data)}
                <Helmet>
                 <title> Setting</title>
                </Helmet>
                <UserMainNavBar props={this.props} />



                {/* setting page body */}
                        <div className="container">
                            <div className="row row-padding setting-page-color">
                                <div className="col-md-12">
                                    <div className="account-call-pad"  style={{paddingLeft:"60px"}}>
                                    <h2 >
                                    {this.props.user.data[0]['first_name']}
                                    </h2>
                                    <p>
                                        <Translator text="signUpBlock2R1.1" />
                                        
                                    </p>
                                  </div>

                                {/* <!-- Signup Form --> */}
                                    <div className='row div-account-padding'>
                                        <div className="col-md-4 p-menu account-call-pad">
                                           <p><Link>Account</Link></p>
                                           <p><Link>Investment Profile</Link></p>
                                            <p><Link>Investing</Link></p>

                                            <p><Link>Options Trading</Link></p>
                                            <p><Link>Security</Link></p>
                                            <p><Link>Preferences</Link></p>




                                        </div>

                                       
                                        <div className="col-md-7 social-log-pad account-call-pad">
                                            <form onSubmit={this.handleSubmit}>
                                                <div><p className='p-account'>Account</p></div>
                                                <div className='overflow-hidden account-detail'>
                                                    <p className='float-left'>Email</p>
                                                    <Editable className='from-control float-right account-bg'
                                                        id="email"
                                                        type="email"
                                                       
                                                        text={this.state.email}
                                                        
                                                        onchange={this.handleChange}
                                                        />
                                                </div>
                                                <div className='overflow-hidden account-detail'>
                                                    <p className='float-left'>First Name</p>
                                                    <Editable className='from-control float-right account-bg'
                                                        id="first_name"
                                                        type="text"
                                                       
                                                        text={this.props.user.data[0]['first_name']}
                                                        
                                                        onchange={this.handleChange}
                                                        />
                                                </div>
                                                <div className='overflow-hidden account-detail'>
                                                    <p className='float-left'>Last Name</p>
                                                    <Editable className='from-control float-right account-bg'
                                                        id="last_name"
                                                        type="text"
                                                       
                                                        text={this.state.last_name}
                                                        
                                                        onchange={this.handleChange}
                                                        />
                                                </div>
                                                <div className='overflow-hidden account-detail'>
                                                    <p className='float-left'>Password</p>
                                                    <Link className='float-right' style={{    paddingRight: '36px'}}>Reset Password</Link>
                                                </div>
                                                <div className='overflow-hidden account-detail'>
                                                    <p className='float-left'>Address</p>
                                                    <Editable className='from-control float-right account-bg'
                                                        id="street_address"
                                                        type="text"
                                                       
                                                        text={this.state.street_address}
                                                        
                                                        onchange={this.handleChange}
                                                        />
                                                </div>
                                                <div className='overflow-hidden account-detail'>
                                                    <p className='float-left'>Phone Number</p>
                                                    
                                                    <Editable className='from-control float-right account-bg'
                                                        id="mobile_number"
                                                        type="text"
                                                       
                                                        text={this.state.mobile_number}
                                                        
                                                        onchange={this.handleChange}
                                                        />
                                                </div>
                                                <div className='overflow-hidden account-detail'>
                                                <button style={{marginRight:"80px"}} className='btn btn-outline-danger my-2 my-sm-0 float-right' type='submit'> Save</button>
                                               
                                                </div>     
                                            </form>                                    
                                        </div>
                                               
                                      
                                           
                                    </div>
                                
                               
                                </div>
                            </div>

                            {/* <!-- social account login options --> */}
                            <div className="row row-padding">
                               
                            </div>
                </div>
            </div>
        )
    }
}
export default Setting;
