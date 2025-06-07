
import React from 'react'

import dynamic from "next/dynamic"
const BlogCard = dynamic(() => import('./BlogCard'))
const Pagination = dynamic(() => import('./Pagination'))
import { BlogType } from '@/types/BlogPage'
import { API_HOST } from '@/utils/BaseApp'
import { fetchDataFromServer } from '@/utils/fatchApi'
import pathStore from '@/store/storage/pathStore'

async function LeftSection() {
  const currentPath: string = pathStore();
  let blogsData = []
  let blogPage: string | number = ""
  if(currentPath[1] === "category"){
    blogPage = currentPath[3]
  }else if(currentPath[1] === "search"){
    blogPage = currentPath[3]
  }else if(currentPath[1] === "tag"){
    blogPage = currentPath[3]
  }else{
    blogPage = currentPath[2] === undefined ? 1 : currentPath[2]
  }

if(currentPath.length === 1 && currentPath[0] === "blog" ){
  blogsData = await fetchDataFromServer(`${API_HOST}blog/active/${blogPage}`);
}else if(currentPath.length === 4 && currentPath[1] === "tag"){
  blogsData = await fetchDataFromServer(`${API_HOST}blog/tag/${currentPath[2]}/${blogPage}`);
}else if(currentPath.length === 4 && currentPath[1] === "category"){
  blogsData = await fetchDataFromServer(`${API_HOST}blog/category/${currentPath[2]}/${blogPage}`);
}else if(currentPath.length === 4 && currentPath[1] === "search"){
  blogsData = await fetchDataFromServer(`${API_HOST}blog/search/${currentPath[2]}/${blogPage}`);
}else{
  blogsData = await fetchDataFromServer(`${API_HOST}blog/active/${blogPage}`);
}

  return (
    <div className="col-lg-8">
      <div className="row ">
          {/* blog data mapping */}
          {
            
            blogsData.length > 0 ? blogsData.map((data:any, index:number) => (
              <BlogCard key={index} info={data as BlogType} />
            )):
            <div className='text-center py-5'>
              {/* <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div> */}
              <h5 className='mt-3'>No Blog Available</h5>
            </div>
          }
          
      </div>
      <div className="space40"></div>
      <div className="row">
        <div className="col-12 m-auto">
          {/* <Pagination setCurrentBlogData={setCurrentBlogData}/> */}
          <Pagination/>
        </div>
      </div>
    </div>
  )
}



export default LeftSection