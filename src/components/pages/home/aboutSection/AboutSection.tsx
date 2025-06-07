
import React from 'react'
import Image from 'next/image'

import dynamic from "next/dynamic"
const BlackButton = dynamic(() => import('@/components/shared/blackButton/BlackButton'))
const ProgressCard = dynamic(() => import('@/components/shared/progressCard/ProgressCard'))
import {ProgressType} from '@/types/Progress'
import { GetJsonData } from '@/services/getJsonData/GetJsonData'

// image import
import AboutImg1 from "/public/img/image/about1-img1.png"
import AboutImg2 from "/public/img/image/about1-img2.png"

function AboutSection() {
      // import progress data using json
      let progressData:any = []
      GetJsonData({dataName: "homeAboutProgress"}, (data) => {
        progressData = data
      })
  return (
    <div className="about1 sp4" style={{backgroundImage: `url(/img/bg/about1-bg.png)`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "left"}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about1-images">
                <div className="about1-img1 border5" data-aos="zoom-out" data-aos-duration="900">
                  <Image src={AboutImg1} alt='about' />
                </div>
                <div className="about1-img2 border5" data-aos="zoom-out" data-aos-duration="1500">
                  <Image src={AboutImg2} alt='about' />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hadding1 about1-hadding">
                <span className="span" data-aos="fade-left" data-aos-duration="700" >About Our Firm</span>
                <h1 data-aos="fade-left" data-aos-duration="1000" >
                  Transformative  {" "}
                   <span className="after">Solutions</span>
                  Tailored to Power Your Business.  </h1>
                <div className="space8"></div>
                <p data-aos="fade-left" data-aos-duration="800">This marketing consulting presentation template is perfect for any marketing consultant who wants a sleek and elegant way to pitch their expertise. This professional and understated minimalist template features a palette of blues and whites. The slides are perfect for data-heavy presentations while remaining visually appealing and leaving room for pictures.
                </p>
                <div className="space30"></div>
              <div className="porgress-line-all">
                {/* Counter data mapping */}
                {
                    progressData.length > 0 && progressData.map((data:any, index:any) => (
                        <ProgressCard key={index} info={data as ProgressType} />
                    ))
                }
              </div>
              <div data-aos="fade-left" data-aos-duration="800">
                <BlackButton title={"Learn More"} />
              </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
  )
}

export default AboutSection