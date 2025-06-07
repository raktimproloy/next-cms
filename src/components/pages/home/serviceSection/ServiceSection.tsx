import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from '@/services/icon/Icon';


function ServiceSection() {
  return (
    <div className="service1 home1-bg sp4" style={{ padding: '20px' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto text-center">
            <div className="hadding1">
              {/* <span className="span" data-aos="fade-up" data-aos-duration="800">Services</span> */}
            <h1 data-aos="fade-up" data-aos-duration="1100" >Get Our Best <span className="after">Services</span></h1>
            </div>
          </div>
        </div>
        <div className="space30"></div>
        <div className="row">

          {/* card 1 */}
          <div className="col-lg-4 col-md-6 text-center">
            <div className="service1-single-box" data-aos="fade-up" data-aos-duration={"800"}>
              <div className="service1-box-icon">
                {/* Image Here */}
                <Image src={`/img/icons/s1.svg`} alt='service' width={50} height={50} style={{width:"50px", height:"50px"}} />
              </div>
              <div className="service1-hadding hadding1">
                {/* Link Here */}
                <h4><Link href="/cloud">Managed Cloud</Link></h4>
                <p>Comprehensive solutions tailored to your business needs, managed wordpress,nodejs,api server </p>
              </div>
              <div className="space24"></div>
              <div className="learn-more1">
                {/* Link Here */}
                <Link href="/cloud">See details 
                    <FaArrowRight/>
                </Link>
              </div>
              <div className="after-box"></div>
            </div>
          </div>

          {/* card 2 */}
          <div className="col-lg-4 col-md-6 text-center">
            <div className="service1-single-box" data-aos="fade-up" data-aos-duration={"1100"}>
              <div className="service1-box-icon">
                {/* Image Here */}
                <Image src={`/img/icons/s2.svg`} alt='service' width={50} height={50} style={{width:"50px", height:"50px"}} />
              </div>
              <div className="service1-hadding hadding1">
                {/* Link Here */}
                <h4><Link href="/devops-service">DevOps & Infra Solutions</Link></h4>
                <p>Experienced DevOps Engineers who provide integration with core Mobile App Development Process.</p>
              </div>
              <div className="space24"></div>
              <div className="learn-more1">
                {/* Link Here */}
                <Link href="/devops-service">See details 
                    <FaArrowRight/>
                </Link>
              </div>
              <div className="after-box"></div>
            </div>
          </div>

          {/* card 3 */}
          <div className="col-lg-4 col-md-6 text-center">
            <div className="service1-single-box" data-aos="fade-up" data-aos-duration={"800"}>
              <div className="service1-box-icon">
                {/* Image Here */}
                <Image src={`/img/icons/service1-icon1.svg`} alt='service' width={50} height={50} style={{width:"50px", height:"50px"}} />
              </div>
              <div className="service1-hadding hadding1">
                {/* Link Here */}
                <h4><Link href="/software-development">Software Development</Link></h4>
                <p>Create custom software solutions to navigate the rapidly changing technology landscape and secure a competitive advantage.</p>
              </div>
              <div className="space24"></div>
              <div className="learn-more1">
                {/* Link Here */}
                <Link href="/software-development">See details 
                    <FaArrowRight/>
                </Link>
              </div>
              <div className="after-box"></div>
            </div>
          </div>
          
          {/* card 4 */}
          <div className="col-lg-4 col-md-6 text-center">
            <div className="service1-single-box" data-aos="fade-up" data-aos-duration={"1400"}>
              <div className="service1-box-icon">
                {/* Image Here */}
                <Image src={`/img/icons/service1-icon4.svg`} alt='service' width={50} height={50} style={{width:"50px", height:"50px"}} />
              </div>
              <div className="service1-hadding hadding1">
                {/* Link Here */}
                <h4><Link href="">Comprehensive IT Consulting</Link></h4>
                <p>Leverage our extensive industry experience to formulate an IT strategy that propels your business to the next level.</p>
              </div>
              <div className="space24"></div>
              <div className="learn-more1">
                {/* Link Here */}
                <Link href="">See details 
                    <FaArrowRight/>
                </Link>
              </div>
              <div className="after-box"></div>
            </div>
          </div>

          {/* card 5 */}
          <div className="col-lg-4 col-md-6 text-center">
            <div className="service1-single-box" data-aos="fade-up" data-aos-duration={"900"}>
              <div className="service1-box-icon">
                {/* Image Here */}
                <Image src={`/img/icons/service1-icon5.svg`} alt='service' width={50} height={50} style={{width:"50px", height:"50px"}} />
              </div>
              <div className="service1-hadding hadding1">
                {/* Link Here */}
                <h4><Link href="">Audit And Evolution</Link></h4>
                <p>We are a full solutions Strategy-led Media, Creative & Tech company, that employs senior strategic minds that not only think but do.</p>
              </div>
              <div className="space24"></div>
              <div className="learn-more1">
                {/* Link Here */}
                <Link href="">See details 
                    <FaArrowRight/>
                </Link>
              </div>
              <div className="after-box"></div>
            </div>
          </div>

          {/* card 6 */}
          <div className="col-lg-4 col-md-6 text-center">
            <div className="service1-single-box" data-aos="fade-up" data-aos-duration={"1300"}>
              <div className="service1-box-icon">
                {/* Image Here */}
                <Image src={`/img/icons/service1-icon6.svg`} alt='service' width={50} height={50} style={{width:"50px", height:"50px"}} />
              </div>
              <div className="service1-hadding hadding1">
                {/* Link Here */}
                <h4><Link href="">Human Resources</Link></h4>
                <p>We are a full solutions Strategy-led Media, Creative & Tech company, that employs senior strategic minds that not only think but do.</p>
              </div>
              <div className="space24"></div>
              <div className="learn-more1">
                {/* Link Here */}
                <Link href="/cloud">See details 
                    <FaArrowRight/>
                </Link>
              </div>
              <div className="after-box"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceSection