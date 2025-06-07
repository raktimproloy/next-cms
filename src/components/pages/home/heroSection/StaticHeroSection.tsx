import React from 'react'
import Image from 'next/image'
import Style from "../style.module.css"
import dynamic from 'next/dynamic'
const WatchVideo = dynamic(() => import('@/components/pages/home/WatchVideo'), {
    ssr: false
  })
  const BlackButton = dynamic(() => import('@/components/shared/blackButton/BlackButton'), {
    ssr: false
  })


// Images import 
import HomeMain1 from "/public/img/image/home1-main1.png"
import HomeMain2 from "/public/img/image/home1-main2.png"
import HeaderShape1 from "/public/img/shapes/header1-shape.svg"
import H1Shape2 from "/public/img/shapes/h1-spahe2.svg"
import H1Shape1 from "/public/img/shapes/h1-spahe1.svg"
import H1Shape3 from "/public/img/shapes/h1-spahe3.svg"
import H1Shape4 from "/public/img/shapes/h1-spahe4.svg"
import H1Shape5 from "/public/img/shapes/h1-spahe5.svg"


function StaticHeroSection() {
  return (
    <div className={Style.mainHero}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="hadding1 main-hadding">
                <h1 data-aos="fade-right" data-aos-duration="800">Discover <span className="after before">the Perfect</span> App Solution with NextCTL</h1> 
                <div className="space8"></div>
                <p data-aos="fade-right" data-aos-duration="1100">Unlock Your Business{`'`}s Full Potential in the Post-COVID Digital Landscape With Us.</p>
                <div className="space40"></div>
                <div className="brand-buttons1">
                    <BlackButton title={"Schedule A Consultation"}/>
                    <WatchVideo/>
                  </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 text-center">
              <div className="home1-header-images">
                <div className="home1-header-img1">
                    <Image src={HomeMain1} alt='image' />
                </div>
                <div className="home1-header-img2 aniamtion-key-5">
                    <Image src={HomeMain2} alt='image' />
                  </div>
                  <div className="home1-header-img3 aniamtion-key-1">
                    <Image src={HeaderShape1} alt='image' />
                  </div>
                  <div className="home1-header-img4 aniamtion-key-2">
                    <Image src={H1Shape2} alt='image' />
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h1-shape1 aniamtion-key-3">
          <Image src={H1Shape1} alt='image' />
        </div>
        <div className="h1-shape2 aniamtion-key-2">
          <Image src={H1Shape3} alt='image' />
        </div>
        <div className="h1-shape3 aniamtion-key-3">
          <Image src={H1Shape4} alt='image' />
        </div>
        <div className="h1-shape4 aniamtion-key-4">
          <Image src={H1Shape5} alt='image' />
        </div>
    </div>
  )
}

export default StaticHeroSection