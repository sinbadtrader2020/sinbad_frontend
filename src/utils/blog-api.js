import axios from "axios";
import { BlogApiConfig } from "../api/config";


class BlogApi{
    constructor(){
        this.blogData={
            data:null,
            error:null,
        };
    }
    onSetBlog(data = "", error = "") {
    
        if (data) {
          this.blogData.data = data;
          this.blogData.error = error;
  
  
          return [true, this.blogData];
        }
  
        
  
        return [false, this.blogData];
      }

    blog(){
   
        return axios
        .get(BlogApiConfig.BASE_URL,{ headers:'' })
        .then((response) => this.onSetBlog(response.data))
        .catch((error) => this.onSetBlog("", error));;
      }
    
        
}

export const blogApi = new BlogApi();