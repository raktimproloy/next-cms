import React from 'react'
import {ProgressType} from "@/types/Progress"

interface ProgressCardProps {
    info: ProgressType;
}

function ProgressCard({info}: ProgressCardProps) {
    const {id, title, percent, animationDuration} = info as ProgressType
  return (
    <div className="progress-line" data-aos="fade-left" data-aos-duration={animationDuration}>
        <h6>{title}</h6>
        <div id="progress1" data-init="true">
        <div className='percentCount'>{percent}%</div>
        <div className="progressbar" style={{width: "100%", backgroundColor: "rgb(238, 238, 238)", borderRadius: "15px"}}>
            <div className="proggress" style={{backgroundColor: "rgb(52, 152, 219)", height: "10px", borderRadius: "15px", width: `${percent}%`}}></div>
        </div>
        </div>
    </div>
  )
}

export default ProgressCard