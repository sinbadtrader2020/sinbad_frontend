import React, { Component } from "react";
import MainNavBar from "./main-nav-bar";
import Footer from "./footer";

export default class Blog extends Component {
  render() {
    return (
      <>
        <MainNavBar props={this.props} />

        {/* FAQ Page Into Search bar */}
        <div className="home-intro padding-zero">
          <div className="container ">
            <div className="row div-row-padding">
              <div className="container">
                <p className="pb-head-1">
                  Good knowledge is the key of success.
                </p>
                <p className="pb-subhead">
                  Become a smarter investor by gathering knowledge how to invest
                  in best place.
                </p>
              </div>

              <div className="col-md-2 blog-search-padd"></div>
              <div className="col-sm-7 blog-search-padd">
                <input
                  type="search"
                  placeholder="Find Anything?"
                  aria-label="Search"
                  className="faq-search  h5 font-weight-normal mb-4 pb-1"
                ></input>
              </div>
              <div className="col-md-1 blog-search-padd">
                <button className="faq-search-btn font-weight-bold">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* end of header */}
        {/* most popular */}

        <div className="row-padding">
          <p className="div-h4-blue h2 mb-4 pb-1 text-center">Most popular</p>
        </div>
        <div className="div-row-padding div-row-padding-only">
          <div className="row justify-content-md-around div-h4-blu row-marging-cancel">
            <div className="col-md-1"></div>

            <div className="col-md-3 ">
              <img
                className="img-inherit imgwidth img-blog-padding"
                src={"assets/images/blog-demo.png"}
                alt="logo"
              />
              <h6 className="h6-blog-padding  ">
                4 Reason why millennails are carzy about it..
              </h6>
              <p className="p-gray">
                {" "}
                it's about time people started using advanced technology to
                manage their investment in the past few years, we have se..
              </p>
            </div>

            <div className="col-md-3">
              <img
                className="img-inherit imgwidth img-blog-padding"
                src={"assets/images/blog-demo.png"}
                alt="logo"
              />
              <h6 className="h6-blog-padding">
                4 Reason why millennails are carzy about it..
              </h6>
              <p className="p-gray">
                {" "}
                it's about time people started using advanced technology to
                manage their investment in the past few years, we have se..
              </p>
            </div>

            <div className="col-md-3">
              <img
                className="img-inherit  imgwidth img-blog-padding"
                src={"assets/images/blog-demo.png"}
                alt="logo"
              />
              <h6 className="h6-blog-padding">
                4 Reason why millennails are carzy about it..
              </h6>
              <p className="p-gray">
                {" "}
                it's about time people started using advanced technology to
                manage their investment in the past few years, we have se..
              </p>
            </div>

            <div className="col-md-1"></div>
          </div>
        </div>

        {/* most recent */}
         {/* most popular */}

         <div className="row-padding">
          <p className="div-h4-blue h2 mb-4 pb-1 text-center">Recent Post</p>
        </div>
        <div className="div-row-padding div-row-padding-only">
          <div className="row justify-content-md-around div-h4-blu row-marging-cancel">
            <div className="col-md-1"></div>

            <div className="col-md-3 ">
              <img
                className="img-inherit imgwidth img-blog-padding"
                src={"assets/images/blog-demo.png"}
                alt="logo"
              />
              <h6 className="h6-blog-padding  ">
                4 Reason why millennails are carzy about it..
              </h6>
              <p className="p-gray">
                {" "}
                it's about time people started using advanced technology to
                manage their investment in the past few years, we have se..
              </p>
            </div>

            <div className="col-md-3">
              <img
                className="img-inherit imgwidth img-blog-padding"
                src={"assets/images/blog-demo.png"}
                alt="logo"
              />
              <h6 className="h6-blog-padding">
                4 Reason why millennails are carzy about it..
              </h6>
              <p className="p-gray">
                {" "}
                it's about time people started using advanced technology to
                manage their investment in the past few years, we have se..
              </p>
            </div>

            <div className="col-md-3">
              <img
                className="img-inherit  imgwidth img-blog-padding"
                src={"assets/images/blog-demo.png"}
                alt="logo"
              />
              <h6 className="h6-blog-padding">
                4 Reason why millennails are carzy about it..
              </h6>
              <p className="p-gray">
                {" "}
                it's about time people started using advanced technology to
                manage their investment in the past few years, we have se..
              </p>
            </div>

            <div className="col-md-1"></div>
          </div>
        </div>

        <div className="div-row-padding div-row-padding-only">
          <div className="row justify-content-md-around div-h4-blu row-marging-cancel">
            <div className="col-md-1"></div>

            <div className="col-md-3 ">
              <img
                className="img-inherit imgwidth img-blog-padding"
                src={"assets/images/blog-demo.png"}
                alt="logo"
              />
              <h6 className="h6-blog-padding  ">
                4 Reason why millennails are carzy about it..
              </h6>
              <p className="p-gray">
                {" "}
                it's about time people started using advanced technology to
                manage their investment in the past few years, we have se..
              </p>
            </div>

            <div className="col-md-3">
              <img
                className="img-inherit imgwidth img-blog-padding"
                src={"assets/images/blog-demo.png"}
                alt="logo"
              />
              <h6 className="h6-blog-padding">
                4 Reason why millennails are carzy about it..
              </h6>
              <p className="p-gray">
                {" "}
                it's about time people started using advanced technology to
                manage their investment in the past few years, we have se..
              </p>
            </div>

            <div className="col-md-3">
              <img
                className="img-inherit  imgwidth img-blog-padding"
                src={"assets/images/blog-demo.png"}
                alt="logo"
              />
              <h6 className="h6-blog-padding">
                4 Reason why millennails are carzy about it..
              </h6>
              <p className="p-gray">
                {" "}
                it's about time people started using advanced technology to
                manage their investment in the past few years, we have se..
              </p>
            </div>

            <div className="col-md-1"></div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}
