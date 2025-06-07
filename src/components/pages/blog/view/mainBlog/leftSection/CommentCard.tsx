import React from 'react'

function CommentCard() {
  return (
    <div className="commet-single-box">
        <div className="">
        <div className="single-commet-img border50">
            {/* <img src="assets/img/image/details-commnet-1.png" alt=""/> */}
        </div>
        </div>

        <div className="">
        <div className="hadding1">
            <h4 className="font-f-2 font-22 line--height-22 weight-500"> <a href="blog-details.html">Alyssa Breitenberg</a></h4>
            <p className="font-f-2 weight-500 line-height-28 font-16">When it comes to business, listen to Henry David Thoreau: things usually don’t happen overnight – instead, to find success takes a lot of time, effort, and courage. Opus includes everything you need to build a beautiful website. </p>
        </div>
        <div className="replly-btn">
        <a href="#" className="font-f-2">Reply</a>
        </div>
        </div>
    </div>
  )
}

export default CommentCard