import React from 'react'
import Image from 'next/image'
import BlackButton from '@/components/shared/blackButton/BlackButton'

// import image
import TeamImage from "/public/img/image/team1-img.png"

function TeamSection() {
  return (
    <div className="team1 sp4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hadding1">
                <span className="span" data-aos="fade-right" data-aos-duration="800">Team</span>
              <h1 data-aos="fade-right" data-aos-duration="1100">We just heard that our company hired <span className="after">an excellent</span> new employee to join our team</h1>
              <div className="space8"></div>
              <p data-aos="fade-right" data-aos-duration="1000">That is an interesting question and we answer it all the time. We want to be trusted as your advocate when you engage in our services, and this is a perfect example of something we do differently.             </p>
              </div>
              <div className="space30"></div>
              <div data-aos="fade-right" data-aos-duration="1200">
                <BlackButton title={"Our Team"} />
              </div>
            </div>
            <div className="col-lg-6 text-end">
              <div className="team1-image" data-aos="zoom-out" data-aos-duration="1200">
                {/* <img src="assets/img/image/team1-img.png" alt=""/> */}
                <Image src={TeamImage} alt='team image' />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default TeamSection