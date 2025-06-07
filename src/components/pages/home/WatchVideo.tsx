'use client'
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
const VideoPopup = dynamic(() => import('@/components/shared/modal/video/Index'), {
    ssr: false
})

function WatchVideo() {
    const [activeModal, setActiveModal] = useState(false)
    const handleWatchVedio = () => {
        setActiveModal(true)
    }
  
  return (
    <>
        <VideoPopup activeModal={activeModal} setActiveModal={setActiveModal} />
        <div className="hero-button1 vido-btn video-action-btn1" data-video-id="EPyl1LgNtoQ" onClick={() => handleWatchVedio()}>
            <div className="">
                <a id="play-video" className="video-play-button">
                    <span></span>
                    </a>
            </div>
            
            <div className="vido-btn-pera" >
                <p>Watch Video</p>
            </div>
        </div>
    </>
  )
}

export default WatchVideo