"use client"
import React, { useState } from 'react'
import VideoModal from "@/components/shared/modal/video/Index"

function VideoButton({link}:any) {
    const [activeModal, setActiveModal] = useState(false)
    const handleVideoModal = () => {
        setActiveModal(true)
    }
  return (
    <>
        <VideoModal link={link} activeModal={activeModal} setActiveModal={setActiveModal} />
        <div className="hero-button1 hero-button5 vido-btn video-action-btn1 video-action-btn5" data-video-id="EPyl1LgNtoQ" onClick={() => handleVideoModal()}>
            <div className="">
                <p id="play-video" className="video-play-button">
                    <span></span>
                </p>
            </div>
            <div className="vido-btn-pera">
                <p>Watch Video</p>
            </div>
        </div>
    </>
  )
}

export default VideoButton