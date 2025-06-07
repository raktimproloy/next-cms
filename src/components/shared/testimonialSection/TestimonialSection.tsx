
import React from 'react'
import BlackButton from '@/components/shared/blackButton/BlackButton'

import OwlCarouselComponent from './OwlCarouselComponent'
function TestimonialSection() {
  return (
    <div className="testimonial1 sp4 home1-bg">
      
        <div className="container">
          <div className="row">
            <div className="col-lg-7 m-auto text-center">
              <div className="hadding1">
                <span className="span" data-aos="fade-up" data-aos-duration="800">Testimonials</span>
              <h1 className="font-30 font-lg-40  line-height-lg-48 line-height-38" data-aos="fade-up" data-aos-duration="1100">Our Happy Clients say <span className="after">About Us</span></h1>
             
              </div>
            </div>
          </div>
          <div className="space60"></div>
          <div className="row">
            {/*  owl-carousel */}
            <div className="testimonial1-slider" data-aos="fade-up" data-aos-duration="1400">
            <OwlCarouselComponent/>
            </div>
            <div className="space70"></div>
            <div className="col-lg-12 text-center">
              <div data-aos="fade-up" data-aos-duration="1100">
                <BlackButton title={"Check All 2,124 reviews"} />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default TestimonialSection