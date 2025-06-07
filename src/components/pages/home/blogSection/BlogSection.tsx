
import React from 'react'
import dynamic from "next/dynamic"
const BlogCard = dynamic(() => import('./BlogCard'))
import {BlogType} from '@/types/HomePage'
import { GetJsonData } from '@/services/getJsonData/GetJsonData'
import { fetchDataFromServer } from '@/utils/fatchApi'
import { API_HOST } from '@/utils/BaseApp'

async function BlogSection() {
    // import blog data using json
    let blogData:any = []
    GetJsonData({dataName: "homeBlog"}, (data) => {
      blogData = data
    })

    const blogsData = await fetchDataFromServer(`${API_HOST}blog/all/1`)
    const sliceBlog = blogsData.slice(0, 3)
  return (
    <div className="blog1 sp2" style={{backgroundColor: "#F8FAFC"}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto text-center">
              <div className="hadding1">
                <span className="span" data-aos="fade-up" data-aos-duration="800">Blog</span>
              <h1 data-aos="fade-up" data-aos-duration="1100">Read Our <span className="after">blog post</span></h1>
            
              </div>
            </div>
          </div>
          <div className="space30"></div>
          <div className="row">
            {/* blog data mapping */}
            {
              sliceBlog.length > 0 && sliceBlog.map((data:any, index:any) => (
                  <BlogCard key={index} info={data as BlogType} />
              ))
            }
          </div>
        </div>
      </div>
  )
}

export default BlogSection