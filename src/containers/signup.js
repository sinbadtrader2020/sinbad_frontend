import React from "react";

export default class Signup extends React.Component {

    render() {

        return (
            <div className="Signup">
                <div className="container">
                    <div className="row main-row">
                        <div className="col-md-12">
                            <h2>Make Your Money Move</h2>
                            <p>Sinbad Finance lets you invest in companies you love, commission-free.</p>

                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input type="text" className="form-control" placeholder="First Name"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="text" className="form-control" placeholder="Last Name"/>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <input type="email" className="form-control" placeholder="E-mail"/>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <select id="" className="form-control">
                                            <option selected>Country</option>
                                            <option>Argentina</option>
                                            <option>Brazil</option>
                                            <option>Bangladesh</option>
                                            <option>Denmark</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control" placeholder="City"/>
                                    </div>
                                    <div className="form-group col-md-2">
                                        <input type="text" className="form-control" placeholder="ZIP"/>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-6 col-sm-3">
                                        <input type="text" className="form-control" placeholder="Mobile Number"/>
                                    </div>
                                    <div className="form-group col-md-6 col-sm-3">
                                        <select id="" className="form-control">
                                            <option selected>Language</option>
                                            <option>Bengali</option>
                                            <option>Chinese</option>
                                            <option>English</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-6 col-sm-3">
                                        <input type="password" className="form-control"
                                               placeholder="Password (min,10 characters)"/>
                                    </div>
                                    <div className="form-group col-md-6 col-sm-3">
                                        <input type="password" className="form-control"
                                               placeholder="Confirm Password (min,10 characters)"/>
                                    </div>
                                </div>

                                <div className="form row">
                                    <div className="col-sm-10">
                                        <button type="submit" className="btn btn-success">Sign Up</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="row main-row">
                        <div className="col-md-3"></div>
                        <div className="col-md-3 share-pad">
                            <a href="/#" className="btn btn-primary btn-lg btn-block" style={{'font-size': '15px',}}><i
                                className="fa fa-facebook"></i>Continue with facebook</a>
                            <a href="/#" className="btn btn-success btn-lg btn-block" style={{'font-size': '15px',}}><i
                                className="fa fa-google-plus"></i>Continue with Google</a>
                        </div>
                        <div className="col-md-3 share-pad">
                            <a href="/#" className="btn btn-primary btn-lg btn-block" style={{'font-size': '15px',}}><i
                                className="fa fa-linkedin"></i>Continue with LinkedIn</a>
                            <a href="/#" className="btn btn-success btn-lg btn-block" style={{'font-size': '15px',}}><i
                                className="fa fa-instagram"></i>Continue with Instagram</a>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div>
        );
    }
}
