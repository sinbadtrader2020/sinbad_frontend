import React, { Component } from 'react'

import { Helmet } from 'react-helmet';
import UserMainNavBar from './user-main-nav-bar';
import Translator from '../../utils/translator';

import Editable from '../../utils/editablelabel'
import { Link } from 'react-router-dom';
import { Auth } from '../../api/auth';
import Footer from '../footer';



import InputTranslation from '../../utils/input-translation';
import { FaTruckMonster } from 'react-icons/fa';


import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


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
            old_password:'',
            confirm_password:'',
            new_password:''
        }
    }
    handleSubmit =(event)=>{
        let userDetails={
            email:this.state.email,
            street_address:this.state.street_address,
            mobile_number:this.state.mobile_number,
            first_name:this.state.first_name,
            last_name:this.state.last_name,
        }
        event.preventDefault();
        Auth.updateUser(userDetails,this.user.id).then((response) => {
         if(response.status===200){
            alert('Your profile was successfully updated')
            Auth.updateData(this.user.id,this.props.user.token).then((res)=>{
              
                window.location.reload(false);
                   
               })
         }
        })       
    }
    
    handleChangePassword=()=>{
        if(this.state.old_password!==''){
            if(this.state.new_password.length>=10){
                if(this.state.new_password===this.state.confirm_password){
                         Auth.changePassword(this.state.email,this.state.old_password,this.state.new_password);
                }
                else {
                    alert("Password didn't match")
                  }
            }
            else{
                alert("Password need to be 10 charecter")
              }
        } 
        else {
            alert("Please enter your old password")
        }
       
    }
   
    handleReset =()=>{
        Auth.resetPassword(this.props.user.data[0].email).then((res)=>{
           alert(res.data.message)
        //    this.props.handleLogout();
          
        });
        

    }

    handleChange = (event) => {
        console.log("id---->", event.target.id, " value---->", event.target.value);
        console.log("state",this.state)
    
        this.setState({
          [event.target.id]: event.target.value,
        });
      };

   
    render() {
        console.log(this.props.user.token)
      
        return (
           
            <div className="setting">
            {console.log(this.props.user.data)}
                <Helmet>
                 <title> Setting</title>
                </Helmet>
                <UserMainNavBar props={this.props} />



                {/* setting page body */}
                        <div className="container bot-padding">
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
                                                 
                                                    <Popup
                                                        trigger={ <p className='float-right reset-btn cursor' >Change Password</p>}
                                                        modal
                                                        nested
                                                    >
                                                        {close => (
                                                        <div className="modal1">
                                                            <button className="close" onClick={close}>
                                                            &times;
                                                            </button>
                                                            <div className="header"> Change Password </div>
                                                            
                                                            <div className="content row popup justify-content-center">
                                                                <div className='col-md-7'>
                                                                <InputTranslation
                                                                        autoComplete="test"
                                                                        id="old_password"
                                                                        type="password"
                                                                        className=" form-control  "
                                                                        text="Old Password"
                                                                        required
                                                                        onchange={this.handleChange}
                                                                    />
                                                                </div>
                                                                <div className='col-md-7'>

                                                                <InputTranslation
                                                                    autoComplete="test"
                                                                    id="new_password"
                                                                    type="password"
                                                                    className="form-control  "
                                                                    text="New Password"
                                                                    required
                                                                    onchange={this.handleChange}
                                                                />
                                                                </div>
                                                                <div className='col-md-7'>

                                                                <InputTranslation
                                                                    autoComplete="test"
                                                                    id="confirm_password"
                                                                    type="password"
                                                                    className="form-control  "
                                                                    text="Confirm Password"
                                                                    required
                                                                    onchange={this.handleChange}
                                                                />
                                                                </div>
                                                                <div className='col-md-7 text-center'>

                                                                <button className='btn btn-success' type='submit1' onClick={()=>{close();this.handleChangePassword()}}> Update</button>
                                                                </div>
                                                            </div>
                                                        
                                                        </div>
                                                        )}
                                                    </Popup>
                                                                                                    
                                                  
                                                   
                                                    
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
                                                <div className='overflow-hidden '>
                                                <button style={{marginRight:"80px"}} className='btn btn-outline-danger my-2 my-sm-0 float-right' type='submit'> Save</button>
                                               
                                                </div>     
                                                
                                            </form>                                    
                                        </div>
                                       
                                               
                                      
                                           
                                    </div>
                                
                               
                                </div>
                            </div>

                            {/* <!-- social account login options --> */}
                           
                </div>
                <Footer/>
             
           
            </div>
        )
    }
}
export default Setting;
