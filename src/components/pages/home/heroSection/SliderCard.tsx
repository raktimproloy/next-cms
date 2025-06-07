import React from 'react'
import VideoButton from './VideoButton'


function SliderCard({ sliderdata, storage }: any) {
    const storage_url = process.env.NEXT_PUBLIC_STORAGE_URL
  return (
    <>
        <div className="single-slide-item">
            <div className="slider-bg  bg-cover" style={{backgroundImage: `url(${storage_url}${sliderdata?.background_image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left"}}>                                                            
                <div className="overlay-2"></div>
                <div className="container">
                    <div className="row align-items-center" style={{display: "flex"}}>
                        <div className="col-lg-8 col-md-12">
                            <div className="hadding4 main-hadding4 main-hadding5">
                            <h1 className="line-height-lg-80 font-lg-72 font-40 line-height-48 font-w">{sliderdata?.title}</h1>
                            <div className="space16"></div>
                            <p >{sliderdata?.description}</p>
                            <div className="space30"></div>
                            <div className="brand-buttons1 brand-buttons4 mt-1">
                                <div>
                                    <a href={`${sliderdata?.button_link}`} target='_blank' className="home4-button1 home4-button5">
                                        {sliderdata?.button_title}</a>
                                </div>
                                {/* <VideoButton link={sliderdata?.video}/> */}
                                {/* <div className="hero-button1 hero-button5 vido-btn video-action-btn1 video-action-btn5" data-video-id="EPyl1LgNtoQ">
                                    <div className="">
                                        <a id="play-video" className="video-play-button" href="#">
                                            <span></span>
                                            </a>
                                    </div>
                                    <div className="vido-btn-pera">
                                        <p>Watch Video</p>
                                    </div>
                                </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    </>
    
  )
}

export default SliderCard