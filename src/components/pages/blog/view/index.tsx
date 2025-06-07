import React from 'react'
import dynamic from "next/dynamic"
const HeroSection = dynamic(() => import('@/components/shared/heroSection/HeroSection'))
const MainBlog = dynamic(() => import('./mainBlog/MainBlog'))
const MoreBlogs = dynamic(() => import('./moreBlogs/MoreBlogs'))

interface Props{
    id: String
}

function index() {
  return (
    <>
      <HeroSection/>
      <MainBlog/>
      <MoreBlogs/>
    </>
  )
}

export default index