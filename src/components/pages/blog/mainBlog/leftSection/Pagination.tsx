// Import the necessary modules

'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { useRouter, usePathname } from 'next/navigation';
import { API_HOST } from '@/utils/BaseApp';

// Define the Pagination component
function Pagination() {
  const router = useRouter()
  const [blogsLength, setBlogLength] = useState(0)
  const pathname = usePathname()
  const pathArray = pathname.split("/")

  // State for storing post data
  const [postData, setPostData] = useState({
    totalCount: blogsLength,
    pageCount: 1,
    currentPage: pathArray[2] === "page" ? 
                  pathArray[3] ? pathArray[3] : 1
                : pathArray[4] ? pathArray[4] : 1,
    perPage: 6,
    posts: [],
  });

  const [allBlog, setAllBlog] = useState([])

  useEffect(() => {
    if (allBlog.length === 0) {
      setBlogLength(0);
      axios
        .get(`${API_HOST}blog/all`)
        .then((res) => {
          setAllBlog(res.data);
  
          if (pathArray[2] === "category") {
            const activeCategoryBlogs = res.data.filter(
              (blog: any) =>
                blog.status === "Active" && blog.blog_category === pathArray[3]
            );
            setBlogLength(activeCategoryBlogs.length);
          } else {
            const activeBlogs = res.data.filter(
              (blog: any) => blog.status === "Active"
            );
            setBlogLength(activeBlogs.length);
          }
        })
        .catch((err) => {
        });
    }
  }, [allBlog, pathArray]);

  useEffect(() => {
    setPostData({...postData, pageCount: Math.ceil(blogsLength/postData.perPage) || 1})
  }, [blogsLength])

  const [defaultCheck, setDefaultCheck] = useState(false)
  // Pagination handler
  const paginationHandler = (page: any) => {
    const selectedPage = page.selected + 1;
    if(!defaultCheck){
      setDefaultCheck(true)
    }else{
      if(pathArray[2] === "category"){
        router.push(`/blog/category/${pathArray[3]}/${selectedPage}`)
      }else if(pathArray[2] === "search"){
        router.push(`/blog/search/${pathArray[3]}/${selectedPage}`)
      }else if(pathArray[2] === "tag"){
        router.push(`/blog/tag/${pathArray[3]}/${selectedPage}`)
      }else{
        router.push(`/blog/page/${selectedPage}`)
      }
    }
  };

  // Render the component
  return (
    <div className="container">
      {postData.pageCount > 1 && 
      <div className='theme-pagination text-center'>
        <ReactPaginate
          previousLabel={`<`}
          nextLabel={'>'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          activeClassName={'active'}
          containerClassName={'pagination'}
          initialPage={parseInt(postData.currentPage.toString()) - 1}
          pageCount={postData.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={paginationHandler}
        />
      </div>
      
      }
    </div>
  );
}

// Export the component
export default Pagination;
