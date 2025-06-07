import React from 'react'
import dynamic from "next/dynamic"
const RightSection = dynamic(() => import('@/components/shared/blogPage/rightSection/RightSection'))
const LeftSection = dynamic(() => import('./leftSection/LeftSection'))

function MainBlog() {
  return (
    <div className="blog2 sp2">
      <div className="container">
        <div className="row">
            <LeftSection/>
            <RightSection/>
        </div>
      </div>
    </div>
  )
}

export default MainBlog