import React from 'react'
import dynamic from "next/dynamic"
const HeroSection = dynamic(() => import('@/components/shared/heroSection/HeroSection'))
const MainBlog = dynamic(() => import('./mainBlog/MainBlog'))

function index() {
  return (
    <>
      <HeroSection/>
      <MainBlog/>
    </>
  )
}

export default index