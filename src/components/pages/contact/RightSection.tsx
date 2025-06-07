import React from 'react'
import GoogleMapComponent from './GoogleMapComponent';

async function RightSection() {
  return (
    <div className="col-lg-6" data-aos="zoom-right" data-aos-duration="1200">
      <div style={{ position: "relative", overflow: "hidden", paddingTop: "56.25%" }}>
        <GoogleMapComponent/>
      </div>
    </div>

  )
}

export default RightSection