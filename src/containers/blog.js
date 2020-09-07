import React, { Component } from "react";
import MainNavBar from "./main-nav-bar";
import Footer from "./footer";
import Translator from "../utils/translator";
import InputTranslation from "../utils/input-translation";
import { Helmet } from "react-helmet";

export default class Blog extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Sinbad Blog</title>
        </Helmet>
        <MainNavBar props={this.props} />

        {/* FAQ Page Into Search bar */}
        <div className="home-intro padding-zero">
          <div className="container ">
            <div className="row div-row-padding">
              <div className="container">
                <p className="pb-head-1">
                  <Translator text="blogIntro.1" />
                </p>
                <p className="pb-subhead">
                  <Translator text="blogIntro.2" />
                </p>
              </div>

              <div className="col-md-2 blog-search-padd"></div>
              <div className="col-sm-7 blog-search-padd">
                <InputTranslation
                  type="search"
                  placeholder="Find Anything?"
                  aria-label="Search"
                  className="faq-search  h5 font-weight-normal mb-4 pb-1"
                />
              </div>
              <div className="col-md-1 blog-search-padd">
                <button className="faq-search-btn font-weight-bold">
                  <Translator text="blogIntro.4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* end of header */}
        {/* most popular */}

        <div className="row-padding">
          <p className="div-h4-blue h2 mb-4 pb-1 text-center">
            <Translator text="blogMost.1" />
          </p>
        </div>
        <div className="div-row-padding div-row-padding-only">
          <div className="row justify-content-md-around div-h4-blu row-marging-cancel div-margin-no">
            <div className="col-md-1"></div>

            <div className="col-md-3 ">
              <img
                className="img-inherit imgwidth img-blog-padding"
                src={"assets/images/blog-demo.png"}
                alt="logo"
              />
              <h6 className="h6-blog-padding  ">
                <Translator text="blogMostCard.1" />
              </h6>
              <p className="p-gray">
                {" "}
                <Translator text="blogMostCard.2" />
              </p>
            </div>

            <div className="col-md-3">
              <img
                className="img-inherit imgwidth img-blog-padding"
                src={"assets/images/blog-demo.png"}
                alt="logo"
              />
              <h6 className="h6-blog-padding">
                <Translator text="blogMostCard.1" />
              </h6>
              <p className="p-gray">
                {" "}
                <Translator text="blogMostCard.2" />
              </p>
            </div>

            <div className="col-md-3">
              <img
                className="img-inherit  imgwidth img-blog-padding"
                src={"assets/images/blog-demo.png"}
                alt="logo"
              />
              <h6 className="h6-blog-padding">
                <Translator text="blogMostCard.1" />
              </h6>
              <p className="p-gray">
                {" "}
                <Translator text="blogMostCard.2" />
              </p>
            </div>

            <div className="col-md-1"></div>
          </div>
        </div>

        {/* most recent */}
        {/* most popular */}

        <div className="row-padding">
          <p className="div-h4-blue h2 mb-4 pb-1 text-center">
            <Translator text="blogRecent.1" />
          </p>
        </div>
        <div className="div-row-padding div-row-padding-only">
          <div className="row justify-content-md-around div-h4-blu row-marging-cancel div-margin-no">
            <div className="col-md-1"></div>

            <div className="col-md-3 ">
              <img
                className="img-inherit imgwidth img-blog-padding"
                src={"assets/images/blog-demo.png"}
                alt="logo"
              />
              <h6 className="h6-blog-padding  ">
                <Translator text="blogRecentCard.1" />
              </h6>
              <p className="p-gray">
                {" "}
                <Translator text="blogRecentCard.2" />
              </p>
            </div>

            <div className="col-md-3">
              <img
                className="img-inherit imgwidth img-blog-padding"
                src={"assets/images/blog-demo.png"}
                alt="logo"
              />
              <h6 className="h6-blog-padding">
                <Translator text="blogRecentCard.1" />
              </h6>
              <p className="p-gray">
                {" "}
                <Translator text="blogRecentCard.2" />
              </p>
            </div>

            <div className="col-md-3">
              <img
                className="img-inherit  imgwidth img-blog-padding"
                src={"assets/images/blog-demo.png"}
                alt="logo"
              />
              <h6 className="h6-blog-padding">
                <Translator text="blogRecentCard.1" />
              </h6>
              <p className="p-gray">
                {" "}
                <Translator text="blogRecentCard.2" />
              </p>
            </div>

            <div className="col-md-1"></div>
          </div>
        </div>

        <div className="div-row-padding div-row-padding-only">
          <div className="row justify-content-md-around div-h4-blu  row-marging-cancel div-margin-no">
            <div className="col-md-1"></div>

            <div className="col-md-3 ">
              <img
                className="img-inherit imgwidth img-blog-padding"
                src={"assets/images/blog-demo.png"}
                alt="logo"
              />
              <h6 className="h6-blog-padding  ">
                <Translator text="blogRecentCard.1" />
              </h6>
              <p className="p-gray">
                {" "}
                <Translator text="blogRecentCard.2" />
              </p>
            </div>

            <div className="col-md-3">
              <img
                className="img-inherit imgwidth img-blog-padding"
                src={"assets/images/blog-demo.png"}
                alt="logo"
              />
              <h6 className="h6-blog-padding">
                <Translator text="blogRecentCard.1" />
              </h6>
              <p className="p-gray">
                {" "}
                <Translator text="blogRecentCard.2" />
              </p>
            </div>

            <div className="col-md-3">
              <img
                className="img-inherit  imgwidth img-blog-padding"
                src={"assets/images/blog-demo.png"}
                alt="logo"
              />
              <h6 className="h6-blog-padding">
                <Translator text="blogRecentCard.1" />
              </h6>
              <p className="p-gray">
                {" "}
                <Translator text="blogRecentCard.2" />
              </p>
            </div>

            <div className="col-md-1"></div>
          </div>
        </div>

        <div className="row div-padding-top-only">
          <div className="col-md-2"></div>
          <div className="col-md-8 ">
            <div className=" div-margin-only text-center color-bg">
              <p className="p-blog">
                {" "}
                <Translator text="blogSearch.1" />
              </p>
              <div className="row div-blog-padding justify-content-lg-center">
                <div className="col-md-5 ">
                  <InputTranslation
                    className="form-control form-control-blog"
                    text="blogSearch.2"
                  />
                </div>
                <div className="col-md-5">
                  {" "}
                  <InputTranslation
                    className="form-control form-control-blog"
                    text="blogSearch.3"
                  />
                </div>
                <div className="col-md-2">
                  <button className="btn btn-primary">
                    {" "}
                    <Translator text="blogSearch.4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-2"></div>
        </div>

        <Footer />
      </>
    );
  }
}
