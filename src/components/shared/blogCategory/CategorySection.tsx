import React from 'react'
import { FaAngleRight } from '@/services/icon/Icon'
import Link from 'next/link'

function CategorySection() {
  return (
    <div className="single-widget widget_categories">
        <h3>Blog Category</h3>
        <div className="space10"></div>
        <div className="blog-category-list">
        <ul>
            <li><Link className="active" href="/blog/category/management/1" >Management
            <span>
            <FaAngleRight/>
            </span></Link></li>

            <li><Link href="/blog/category/stories/1">Stories 
            <span>
              <FaAngleRight/>
            </span></Link></li>

            <li><Link href="/blog/category/development/1">Development
            <span>
            <FaAngleRight/>
            </span></Link></li>

            <li><Link href="/blog/category/updates/1" className="font-f-2">Updates
            <span>
            <FaAngleRight/>
            </span></Link></li>
        </ul>
        </div>
    </div>
  )
}

export default CategorySection