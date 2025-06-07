import React from 'react'
import dynamic from "next/dynamic"
const TagsSection = dynamic(() => import('./TagsSection'))
import { fetchDataFromServer } from '@/utils/fatchApi'
import { API_HOST } from '@/utils/BaseApp'
import pathStore from '@/store/storage/pathStore'
import Designer from './Designer/Designer'



async function LeftSection() {
  const currentPath: string = pathStore();
  const indexOfSlash: number = currentPath.indexOf("/");
  const slug: string = currentPath.slice(indexOfSlash + 1);

  const heroData = await fetchDataFromServer(`${API_HOST}blog/${slug[2]}`);
  return (
    <div className="col-lg-8">
      <div className="blog-details-page-all">
        <article>
          {/* <div className="img100 border5">
              <Image src={image} alt='Blog-Image' width={500} height={500} />
          </div> */}
          <div className="space30"></div>
          <div className="">
              <h2>{heroData?.title}</h2>
              <div className="space10"></div>
              <p>{heroData?.published_date}</p>
              <div className="space10"></div>
              {
                heroData?.design_type !== 0 ?
                <Designer htmlData={heroData.content}/>
                : <div dangerouslySetInnerHTML={{__html: heroData?.blog_details || ""}}></div>
              }


          </div>
        </article>
        <div className="space30"></div>
        <div className="border-details">
      </div>

      <TagsSection tags={heroData.blog_tags} />
      {/* <div className="hadding2">
        <h4 className="font-f-2 font-22 line--height-22 weight-500"> <a href="blog-details.html">3 Comments</a></h4>
      </div>

      <div className="comment-box-all">
        <CommentCard/>
        <CommentCard/>
        <CommentCard/>
      </div>

      <div className="space40"></div>
      <CommentWrite/> */}


      </div>
    </div>
  )
}

export default LeftSection