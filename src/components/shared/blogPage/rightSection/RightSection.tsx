import React from 'react'
import Image from 'next/image'

import dynamic from "next/dynamic"
const SearchSection = dynamic(() => import('./SearchSection'))
const CategorySection = dynamic(() => import('../../blogCategory/CategorySection'))
const TagsSection = dynamic(() => import('../../tagSection/TagsSection'))



function RightSection() {
  return (
    <div className="col-lg-4">
        <div className="blog-sidebar-all">
          <div className="space30"></div>
            <SearchSection/>
            <CategorySection/>
            {/* <TagsSection/> */}
        </div>
    </div>
  )
}

export default RightSection