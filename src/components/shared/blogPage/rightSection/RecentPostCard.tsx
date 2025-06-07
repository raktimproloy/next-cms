import React from 'react'
import Image from 'next/image'
import { FaCalendarDays } from '@/services/icon/Icon'
import RecentBlog from "/public/img/image/choose1-img.png"

function RecentPost() {
  return (
    <div className="recent-post">
        <div className="recent-post-content">
            <h6><a href="#" className="font-f-2">Leadership Burnout: What causes it & how avoid it.</a></h6>
            <div className="space6"></div>
            <div className="blog-date-time">
                <ul className="blog-date">
                    <li>
                        <FaCalendarDays/>
                        <span className='ms-2'>
                            11/02/2022
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        <div className="">
            <div className="recent-img">
            {/* <img src="assets/img/image/blog-side-bar-img1.png" alt=""/> */}
            <Image src={RecentBlog} alt='blog-image' />
            </div>
        </div>
    </div>
  )
}

export default RecentPost