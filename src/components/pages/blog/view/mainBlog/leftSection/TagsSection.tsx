import React from 'react'
import dynamic from "next/dynamic"
const SocialIcons = dynamic(() => import('@/components/shared/socialIcons/SocialIcons'))
import Link from 'next/link'

function TagsSection({tags}:any) {
  return (
    <div className="blog-details-tags">
        <div className="blog-details-tag">
          <div className="hadding2">
            <h4 className="font-f-2 font-16 weight-700 line-height-16">Tags :</h4>
          </div>
          <div className="details-tag-list">
            <ul>
              {tags.map((data:string, index:number) => 
                <li key={index}><Link href={`/blog/tag/${data}/1`} className="font-f-2">{data}</Link></li>

              )}
            </ul>
          </div>
        </div>

        <div className="blog-details-icons">
          <div className="hadding2 me-2">
            <h4 className="font-f-2 font-16 weight-700 line-height-16">Share :</h4>
          </div>
          <SocialIcons/>
        </div>
    </div>
  )
}

export default TagsSection