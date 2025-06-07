'use client'
import React from 'react'
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});
const SliderCard = dynamic(() => import("./SliderCard"), {
    ssr: false,
});

function OwlSlider({ children }: any) {
  return (
    <>
    {/* loop autoplay */}
        <OwlCarousel loop autoplay autoplayTimeout={8000} items={1} dots={true} className='owl-theme dotsClass'>
            {children}
        </OwlCarousel>
    </>
  )
}

export default OwlSlider
