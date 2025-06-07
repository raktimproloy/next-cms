import React from 'react'

import dynamic from "next/dynamic"
const CounterSection = dynamic(() => import('./counterSection/CounterSection'))
const AboutSection = dynamic(() => import('./aboutSection/AboutSection'))
const ServiceSection = dynamic(() => import('./serviceSection/ServiceSection'))
const ChooseUsSection = dynamic(() => import('@/components/shared/chooseUsSection/ChooseUsSection'))
const TestimonialSection = dynamic(() => import('@/components/shared/testimonialSection/TestimonialSection'))
const TeamSection = dynamic(() => import('@/components/shared/teamSection/TeamSection'))
const BlogSection = dynamic(() => import('./blogSection/BlogSection'))
const ContactSection = dynamic(() => import('@/components/shared/contactSection/ContactSection'))
const HeroSection = dynamic(() => import('./heroSection/HeroSection'))



function HomePage() {
  return (
    <>
      <HeroSection/>

      {/* <CounterSection/> */}
      {/* <AboutSection/> */}
      <ServiceSection/>
      <ChooseUsSection/>
      <TestimonialSection/>
      <TeamSection/>
      {/* <BlogSection/> */}
      <ContactSection/>
    </>
  )
}

export default HomePage