
import React from 'react'
import dynamic from "next/dynamic"

const HeroSection = dynamic(() => import('@/components/shared/heroSection/HeroSection'))
const LocationsSection = dynamic(() => import('./LocationsSection'))
const TeamSection = dynamic(() => import('@/components/shared/teamSection/TeamSection'))
const ContactInfo = dynamic(() => import('./ContactInfo'))
const RightSection = dynamic(() => import('./RightSection'))
// const ContactForm = dynamic(() => import('./ContactForm'))
const ContactForm = dynamic(() => import("@/components/shared/contactSection/ContactForm"))

function Index() {
  return (
    <>
        <HeroSection/>
        <ContactInfo/>
        <div className="contact-page-form py-5">
          <div className="container">
              <div className="row align-items-center">
              <div className="col-lg-6 align-items-center" data-aos="zoom-out" data-aos-duration="1200">
                <div className="contact-page1-inputs">
                    <div className="hadding1">
                    <h1 className="font-30 font-lg-40  line-height-lg-48 line-height-38">Let Us Help <span className="after">You reach</span> Your Financial Goals</h1>
                    </div>
                    <div className="space30"></div>
                    <ContactForm/>
                </div>
              </div>
                  <RightSection/>
              </div>
          </div>
        </div>
        <LocationsSection/>
        <TeamSection/>
    </>
  )
}

export default Index