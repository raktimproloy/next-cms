'use client'
import React, { useEffect, useState } from 'react'
import styles from "./style.module.css"
function Index({
  link,
  activeModal= false,
  setActiveModal
}:any) {
  // const videoLink = "https://youtube.com/embed/gQojMIhELvM?autoplay=0"
  const videoLink = link
  const [youtubeLink, setYoutubeLink] = useState("")

  useEffect(() => {
    if(activeModal){
      setYoutubeLink(videoLink)
    }else{
      setYoutubeLink("")
    }
  }, [activeModal])
  
  const handleClose = () => {
    setActiveModal(false);
    setYoutubeLink("")
  };

  return (
    <>
    <div
    className={`modal ${styles.modalContainer} ${activeModal ? styles.modalShow : styles.modalHide}`}
    // data-aos="disabled"
    >
      <div className={`${styles.video}`}>
      <div className={styles.popup_bg} onClick={() => handleClose()}></div>
        <div className={styles.popup_content}>
        <div className={`${styles.videoContainer} ${activeModal ? styles.viewContent : styles.hideContent}`}>
          <button className={styles.close_btn} onClick={() => handleClose()}>
          <svg fill="#000000" width={"25px"} height={"25px"} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5 c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4 C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z"></path> </g></svg>
          </button>
          <iframe src={youtubeLink} className={styles.video}></iframe>
        </div>
        </div>
    </div>

    </div>
    </>
  )
}

export default Index