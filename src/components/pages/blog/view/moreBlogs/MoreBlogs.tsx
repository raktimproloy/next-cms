import pathStore from '@/store/storage/pathStore';
import { API_HOST } from '@/utils/BaseApp';
import { fetchDataFromServer } from '@/utils/fatchApi';
import React from 'react'

async function MoreBlogs() {
    const currentPath: string = pathStore();
    const indexOfSlash: number = currentPath.indexOf("/");
    const slug: string = currentPath.slice(indexOfSlash + 1);
  
    const heroData = await fetchDataFromServer(`${API_HOST}blog/${slug[2]}`);
    const blogTags = heroData.blog_tags;
  
    const blogs = new Set();
  
    // Fetch data for each tag and add to the set
    for (const tag of blogTags) {
      if(tag){
        const blogDataByTag = await fetchDataFromServer(`${API_HOST}blog/tag/${tag}`);
        blogDataByTag.forEach((data: any) => {
          // Check if the blog with the same _id already exists in the set
          const isBlogAlreadyAdded = Array.from(blogs).some((blog: any) => blog._id === data._id);
    
          // If the blog is not already in the set, add it
          if (!isBlogAlreadyAdded) {
            blogs.add(data);
          }
        });
      }
    }
  
    // Convert set to an array and shuffle it
    const shuffledBlogs = Array.from(blogs).sort(() => Math.random() - 0.5);
  
    // Take the first 3 blogs
    const selectedBlogs = shuffledBlogs.slice(0, 3);
  
    return (
      <div className="blog-details-boxs sp4 home1-bg">
        <div className="container">
            {/* Rest of your JSX code */}
            <div className="row">
            {/* Render the selected blogs */}
            {selectedBlogs.map((blog: any) => (
                <div className="col-lg-4 col-md-6" key={blog._id}>
                    <div className="space30"></div>
                    <div className="blog2-box">
                        <div className="blog2-box-img img-100">
                            {/* <img src="assets/img/image/blog-page5.png" alt=""/> */}
                        </div>
                        <div className="space20"></div>
                        <div className="hadding1 blog-page-hadding">
                            <h4><a href="blog-details.html">{blog.title}</a></h4>
                            <p>{blog.published_date}</p>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
      </div>
    );
  }

export default MoreBlogs