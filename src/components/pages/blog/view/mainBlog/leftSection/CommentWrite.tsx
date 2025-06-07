import React from 'react'
import dynamic from "next/dynamic"
const BlackButton = dynamic(() => import('@/components/shared/blackButton/BlackButton'))

function CommentWrite() {
  return (
    <div className="blog-details-form">
        <form action="#">
          <div className="hadding1">
            <h2>Leave a Comment</h2>
            <div className="space10"></div>
            <div className="contact-commnet-all">
              <div className="contact-commnet-single">
                <input type="text" placeholder="Name "/>
                <input type="email" placeholder="Email Address "/>
              </div>
              <div className="contact-commnet-single">
                <textarea cols={30} rows={4} placeholder="Write a Comment"></textarea>
              </div>
              <div className="space30"></div>
              <div>
                <BlackButton title={"Submit"} />
              </div>
            </div>
          </div>
        </form>
    </div>
  )
}

export default CommentWrite