import React from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import {BlogType} from '@/types/HomePage'
import { STORAGE_URL } from '@/utils/BaseApp'
const ViewAllButton = dynamic(() => import('@/components/shared/viewAllButton/ViewAllButton'), {
    ssr: false
})

interface BlogCardProps {
    info: BlogType;
  }

function BlogCard({info}: BlogCardProps) {
  const {id, meta_property, title, published_date, slug} = info as any
  const image = meta_property.og_image
  return (
    <div className="col-lg-4" data-aos="fade-up" 
    data-aos-duration="1000"
    >
        <div className="space30"></div>
        <div className="blog1-box-all">
            <div className="case2-img img-100" style={{height:"13rem"}}>
                <Image src={`${STORAGE_URL}${image}`} alt='blog image' style={{height:"100%"}} width={500} height={500} />
            </div>
            <div className="space20"></div>
            <div className="hadding1 blog1-hadding">
                <a href="#" className="blog-span">{published_date}</a>
                <h3><a href="#">{title}</a></h3>
                <div className="space24"></div>
                <ViewAllButton text={"View all"} slug={`/blog/details/${slug}`} />
            </div>
        </div>
    </div>
  )
}

export default BlogCard