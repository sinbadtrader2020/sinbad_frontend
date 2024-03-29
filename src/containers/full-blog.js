import React, { Component } from "react";
import MainNavBar from "./main-nav-bar";
import { Helmet } from "react-helmet";


import { Route } from "react-router";
import notFound from "./not-found";
import { blogApi } from "../utils/blog-api";
import UserMainNavBar from "./home/user-main-nav-bar";




//  'id',
// 'blog_tittle',
// 'blog_description',
// 'author_name',
// 'blog_content',
// 'blog_date',
// 'blog_cover',
// 'post'

export default class fullBlog extends Component {
  constructor(props) {
    super(props);
   // console.log(this.render.blog_tittle)
   console.log("pare               asdsa aad",this.props.location.search)

    this.state = {
      hit1: null,
      index: null,
      adressPath:  this.props.location.search.split('='),
      data:null
     
    };
  }
 

 componentDidMount() {
  const pointer=this;
   console.log("dd"+this.state.adressPath)
    this.setState({
      index: this.state.adressPath[this.state.adressPath.length - 1]-1 ,
    });
    blogApi.blog()
    .then((response) => {
      console.log("update");

      this.setState({
        hit1: true,
      })
    })
  //   fetch(`http://127.0.0.1:8000/admin/api/blogs/${this.state.adressPath[this.state.adressPath.length - 1]}/`)
    
  //   .then(
  //     function(response) {
  //     return response.json();
  //     }
  // ).then(function(data){
      
  //     console.log(data)
  //     pointer.setState({
  //       data:data
  //     })
  //   })
   
  }
  render() {
    return(this.state.hit1 === null ? 
      <>
     
        <div className="div-center d-flex justify-content-center" >
          <div className="loading spinner-border" role="status"></div>
          <div className="loading2 loading-img"></div>
        </div>
      </>
     : 
     (blogApi.blogData.data[this.state.index]===undefined? <Route component={notFound} />:
      
      <>
    
      
      <Helmet>
       <title>Sinbad Forum</title>
     </Helmet>
     {this.props.isAuthenticated === false ||this.props.isAuthenticated === undefined?<MainNavBar props={this.props} />:<UserMainNavBar props={this.props}/>}

     <div className="row div-margin-no full-blog-padding justify-content-lg-center">
       <div className=" full-blog-padding-content">
         <h1>{blogApi.blogData.data[this.state.index].blog_tittle}</h1>
         <p className="fullblogfont-p">
           {" "}
           Author name:  {
             " "+blogApi.blogData.data[this.state.index].author_name
           }{" "}
         </p>
          
         <div 
           dangerouslySetInnerHTML={{
             __html: blogApi.blogData.data[this.state.index].blog_content,
            
           }}
         />
       </div>
     </div> 
  
   </>
      )
      
    );
  }
}
