import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BlogType } from '@/types/BlogPage'
import style from "./style.module.css"
import { FaArrowLeft, FaArrowRight } from '@/services/icon/Icon'
import { STORAGE_URL } from '@/utils/BaseApp'

interface BlogCardProps {
  info: BlogType;
}
function BlogCard({info}: BlogCardProps) {
  const {id, meta_property, title, published_date, slug} = info as any
  const image = meta_property.og_image
  const description = meta_property.main_description
  const truncatedDescription = description.slice(0, 60);
  return (
    <div className="col-lg-6 col-md-6" data-aos-duration="900">
        <div className="space30"></div>
        <div className="blog2-box">
            <div className="blog2-box-img img-100">
            <Image src={`${STORAGE_URL}${image}` || ""} alt='blog-image' width={500} height={500} className={`${style.blogImage}`} />
            </div>
            <div className="space20"></div>
            <div className="hadding1 blog-page-hadding">
            <a href="#" className="date2">{published_date || ""}</a>
            <h4><Link href={`/blog/details/${slug}` || ""}>{title || ""}</Link></h4>
            <p>{truncatedDescription || ""}</p>
            <div className='text-right mt-2'>
            <Link className="learn-more-btn1" href={`/blog/details/${slug}` || ""}>
              <FaArrowLeft/>
            READ MORE 
            </Link>
            </div>
            </div>
        </div>
    </div>
  )
}

export default BlogCard