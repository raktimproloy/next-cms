import React from 'react'
import Image from 'next/image'
import Style from "../style.module.css"
import dynamic from 'next/dynamic'
const WatchVideo = dynamic(() => import('@/components/pages/home/WatchVideo'), {
    ssr: false
})
const BlackButton = dynamic(() => import('@/components/shared/blackButton/BlackButton'))

const OwlSlider = dynamic(() => import('@/components/pages/home/heroSection/OwlSlider'))
const SliderCard = dynamic(() => import('@/components/pages/home/heroSection/SliderCard'))

// Images import 
import HomeMain1 from "/public/img/image/home1-main1.png"
import HomeMain2 from "/public/img/image/home1-main2.png"
import HeaderShape1 from "/public/img/shapes/header1-shape.svg"
import H1Shape2 from "/public/img/shapes/h1-spahe2.svg"
import H1Shape1 from "/public/img/shapes/h1-spahe1.svg"
import H1Shape3 from "/public/img/shapes/h1-spahe3.svg"
import H1Shape4 from "/public/img/shapes/h1-spahe4.svg"
import H1Shape5 from "/public/img/shapes/h1-spahe5.svg"


import H4Shape1 from "/public/img/shapes/header4-shape1.svg"
import H4Shape2 from "/public/img/shapes/header4-shape2.svg"
import { fetchDataFromServer } from '@/utils/fatchApi'
import { API_HOST } from '@/utils/BaseApp'
const StaticHeroSection = dynamic(() => import('./StaticHeroSection'))

async function HeroSection() {
  const setting:any = await fetchDataFromServer(`${API_HOST}setting/get`);
  const sliders = setting?.page?.home?.sliders
  const sliderStatus = setting?.page?.home?.slider_hero_section
  const staticStatus = setting?.page?.home?.static_hero_section
  const storage_config = setting?.storage_config
  return (
    <>
    {/* home Slider */}
    {
      sliderStatus ?
        <div>
          <div className="hero-area4 hero-area-two">        
              <OwlSlider>
                {sliders.map((sliderData:any, index:any) => 
                  <SliderCard sliderdata={sliderData} storage={storage_config} key={index}/>
                )}
              </OwlSlider>
            <div className="header4-shape1 aniamtion-key-4">
              <Image src={H4Shape1} width={200} height={200} alt=""/>
            </div>     
            <div className="header4-shape2 aniamtion-key-1">
              <Image src={H4Shape2} width={200} height={200} alt=""/>
            </div>           
          </div>

        </div>
      : ""
    }
    {
      staticStatus ?
      <StaticHeroSection/>
      : ""
    }
    </>
  )
}

export default HeroSection