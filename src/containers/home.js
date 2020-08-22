import React from "react";
import MainNavBar from "./main-nav-bar";
import { Helmet } from "react-helmet";

export default class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Helmet>
          <title> Home</title>
        </Helmet>
        <MainNavBar props={this.props} />
      </div>
    );
  }
}
