import React from 'react'
import Image from 'next/image'
import SocialIcons from '@/components/shared/socialIcons/SocialIcons'

// import image
import BlogDetailsImage2 from "/public/img/image/home1-main1.png"

function ProfileSection() {
  return (
    <div className="sidebar-img-box-all text-center">
        <div className="sidebar-img border50">
        <Image src={BlogDetailsImage2} alt='blog-image' />
        </div>
        <div className="sidebar-box-hadding hadding1-w">
        <div className="space20"></div>
        <h3><a href="#">William lee.</a></h3>
        <div className="space24"></div>
        <p>When it comes to business, listen to Henry David Thoreau: things usually don’t happen overnight – instead, to find success takes a lot of time, effort, and courage. Opus includes everything you need to build a beautiful website.</p>
        </div>
        <div className="space16"></div>
        <SocialIcons/>
    </div>
  )
}

export default ProfileSection