import React from 'react'
import Image from 'next/image'

import dynamic from "next/dynamic"
const ChooseUsCard = dynamic(() => import('./ChooseUsCard'))
const BlackButton = dynamic(() => import('@/components/shared/blackButton/BlackButton'))
import { FaArrowRight } from '@/services/icon/Icon'



// import images
import ChooseImg from "/public/img/image/choose1-img.png"
import ChooseProgress from "/public/img/image/choose1-progress.png"

function ChooseUsSection() {

  return (
    <div className="choose1 sp4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hadding1">
                <span className="span" data-aos="fade-right" data-aos-duration="800">Why Choose us</span>
              <h1 className="font-30 font-lg-40  line-height-lg-48 line-height-38" data-aos="fade-right" data-aos-duration="1300">How Instant VA Can Help You to Grow <span className="after">Your Business</span></h1>
              <div className="space8"></div>
              <p data-aos="fade-right" data-aos-duration="1000">That is an interesting question and we answer it all the time. We want to be trusted as your advocate when you engage in our services, and this is a perfect example of something we do differently. 
              </p>
              </div>
              <div className="border1"></div>
              <div className="choose-box-all" data-aos="fade-right" data-aos-duration="800">
                <div className="choose-box-icon choose-box-icon-span">
                  <span>
                    <FaArrowRight/>
                  </span>
                </div>
                <ChooseUsCard
                  title={"Increased Personal Efficiency"} 
                  description={"You don't want your project handled by a large consulting company stamping out identical solutions with efficient precision from one client to another."}
                 /> 
              </div>
              <div className="space24"></div>
              <div className="choose-box-all" data-aos="fade-right" data-aos-duration="1200">
                <div className="choose-box-icon choose-box-icon-span">
                  <span>
                    <FaArrowRight/>
                  </span>
                </div>
                <ChooseUsCard
                  title={"Big Ideas arise from boutique firms"} 
                  description={"Big consulting firms may struggle to gather outside innovative ideas or have trouble sharing knowledge due to departmental silos within their firms. doesn’t suffer from these obstacles."}
                 /> 
              </div>
              <div className="space40"></div>
              <div className="choose1-button" data-aos="fade-right" data-aos-duration="1400">
                <BlackButton title={"Learn More"}/>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="choose-image-all text-end">
                <div className="choose1-img border5"  data-aos="zoom-out" data-aos-duration="1000">
                  <Image src={ChooseImg} alt='choose image' />
                </div>

                <div className="progress-circle-box-all" data-aos="zoom-out" data-aos-duration="1500">
                  <div className="progress-img">
                    <Image src={ChooseProgress} alt='choose image' />
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
  )
}

export default ChooseUsSection