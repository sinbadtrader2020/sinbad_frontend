import React, { Component } from "react";
import MainNavBar from "./main-nav-bar";
import Footer from "./footer";
import Translator from "../utils/translator";
import InputTranslation from "../utils/input-translation";
import { Helmet } from "react-helmet";


import { Path } from "./config";
import { blogApi } from "../utils/blog-api";


//  'id',
// 'blog_tittle',
// 'blog_description',
// 'author_name', 
// 'blog_content',
// 'blog_date',
// 'blog_cover',
// 'post'

export default class Blog extends Component {
  constructor(porps){
    super(porps);
    this.state = {
      hit: null,
    };
    
  }

  
  


  componentDidMount(){
    blogApi.blog().then(response => {
      console.log('update');
      
      this.setState({
        hit:true
      })
    }
      
    )  
  
  }

  routeChange=(data,i)=> {
    let index=i+1
    this.props.history.push({pathname:Path.fullBlog, search:"blog="+index.toString() , render: data});
 
  }

  render() {

  
   
    return (
      this.state.hit===null?
      <>
      {console.log("hit________null")}


      <div className="div-center d-flex justify-content-center">
      <div className="loading spinner-border"  role="status"> 
      </div>
      <div className='loading2 loading-img'> 

      </div>
     </div> </>:
     (blogApi.blogData.data===null?
     <>
      {console.log("blogdata___________null")}
      <Helmet>
        <title>Sinbad Blog</title>
      </Helmet>
      <MainNavBar props={this.props} />

      <div className="row-padding text-center"><h1>Unknown Error. Please contact with admin</h1></div>
     </>
     
      :
      <>
      {console.log("data___________________has",blogApi.blogData.data)}
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
      <div className=''>
        <div className="row div-margin-no justify-content-md-center div-row-padding div-row-padding-only">
           <div className='col-md-10'>
           <div className="row  div-h4-blu row-marging-cancel div-margin-no">
          
           {blogApi.blogData.data.map((data,i)=>(

          /* "  mostPopular
            recentPost" */

            (data.post==='mostPopular'? <div className="col-md-4 cursor " onClick={()=>this.routeChange(data,i)}>
              <img
                className="img-inherit-blog imgwidth img-blog-padding"
                src={blogApi.blogData.data===null?"assets/images/blog-demo.png":data.blog_cover}
                alt="headline"
              />
              <h6 className="h6-blog-padding  ">
                {blogApi.blogData.data===null?"assets/images/blog-demo.png":data.blog_tittle}
              </h6>
              <p className="p-gray line-break">
                {" "}
                {blogApi.blogData.data===null?"assets/images/blog-demo.png":data.blog_description}
              </p>
            </div>:null)
           

            
           ))}
          
          
           

            
          </div>
           </div>
        </div>
      </div>

      {/* most recent */}
      {/* most popular */}

      <div className="row-padding">
        <p className="div-h4-blue h2 mb-4 pb-1 text-center">
          <Translator text="blogRecent.1" />
        </p>
      </div>
      <div className=''>
        <div className="row div-margin-no justify-content-md-center div-row-padding div-row-padding-only">
           <div className='col-md-10'>
           <div className="row  div-h4-blu row-marging-cancel div-margin-no">
          
           {blogApi.blogData.data.map((data,i)=>(

          /* "  mostPopular
            recentPost" */

            (data.post==='recentPost'? <div className="col-md-4 cursor " onClick={()=>this.routeChange(data,i)}>
              <img
                className="img-inherit-blog imgwidth img-blog-padding"
                src={blogApi.blogData.data===null?"assets/images/blog-demo.png":data.blog_cover}
                alt="logo"
              />
              <h6 className="h6-blog-padding  ">
                {blogApi.blogData.data===null?"assets/images/blog-demo.png":data.blog_tittle}
              </h6>
              <p className="p-gray line-break">
                {" "}
                {blogApi.blogData.data===null?"assets/images/blog-demo.png":data.blog_description}
              </p>
            </div>:null)
           

            
           ))}
          
          
           

            
          </div>
           </div>
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
    </>)


  
 
     
      
     
    );
  }
}
