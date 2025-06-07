import React from 'react'
import style from "./style.module.css"
import { FaArrowRight } from '@/services/icon/Icon'


function Subscribe() {
  
  return (
    <div className={` ${style.backgroundColor} ${style.subsribeAll} ${style.subsribeAll1} sp2 bg-cover`}>
      
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7">
            <div className={`${style.allSubsribeHadding} hadding3`}>
              <h1
                className="font-w"
              >
              Subscribe to Our Newsletter
              </h1>
              <div className="space8"></div>
              <p>The benefits of using business consulting and coaching services may include increased sales, new revenue streams and improved productivity. Benefits also include an opportunity.</p>
            </div>
          </div>
          <div className="col-md-5">
            <div className={`${style.comonSubsribeAllInput}`}>
              <input type="email" placeholder="Enter your email here" />
              <div className={`${style.subsribeBtn}`}>
                <div>
                  <button className={`font-18 line-height-30 weight-700 font-f-2 font-w buttonColorTwo ${style.subsribeButton1}`}>
                    Subscribe 
                  <span>
                    <FaArrowRight/>
                  </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe