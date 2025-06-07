'use client'
import React, { useEffect, useState } from 'react'
import { FaUserPlus, FaRightToBracket } from '@/services/icon/Icon'
import styles from "./style.module.css"
import { getHostName } from '@/utils/GetHostname';
import {setting} from '@/store/storage/clientSettingStore'
import LoginModal from "../modal/login"
import SignupModal from "../modal/signup"

function TopNavbar() {
    const [showLoginModal, setShowLoginModal] = useState(false)
    const [showSignupModal, setShowSignupModal] = useState(false)
    const [changeModal, setChangeModal] = useState("")
    const hostNameCondition = getHostName().includes("nextctl.co.uk");
    const [scrollPosition, setScrollPosition] = useState(0);


    // let scrollPosition = 0
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  return (
    <div>
        <LoginModal showModal={showLoginModal} setShowModal={setShowLoginModal} changeModal={changeModal} setChangeModal={setChangeModal}/>
        <SignupModal showModal={showSignupModal} setShowModal={setShowSignupModal} changeModal={changeModal} setChangeModal={setChangeModal}/>
        {scrollPosition == 0 && 
        <div style={{background: "#292F43"}} className={styles.background}>
            <div className='container py-1'>
                <div className='d-flex justify-content-between '>
                    <div className='d-flex'>
                        <div className='text-center'>
                            <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.136374 1.06218C2.67537 3.09106 7.13051 6.66047 8.43994 7.77342C8.61572 7.92363 8.80425 8 8.99998 8C9.19531 8 9.38352 7.92435 9.55891 7.77485C10.8695 6.66081 15.3246 3.09106 17.8636 1.06218C18.0217 0.936111 18.0458 0.71451 17.9178 0.560378C17.622 0.204214 17.1809 0 16.7081 0H1.29184C0.819124 0 0.377988 0.204214 0.0821758 0.560412C-0.0458037 0.71451 -0.0217037 0.936111 0.136374 1.06218Z" fill="#FF7A7A"/>
                                <path d="M18.7704 2.03402C18.6301 1.97381 18.465 1.99482 18.3483 2.08676C15.4564 4.34642 11.7656 7.24285 10.6044 8.20734C9.95262 8.74963 9.04808 8.74963 8.39481 8.20662C7.15706 7.17868 3.01239 3.93097 0.651715 2.08673C0.534189 1.99478 0.368756 1.9745 0.229596 2.03398C0.0896934 2.09387 0 2.22286 0 2.36502V11.5406C0 12.3455 0.710088 13 1.58335 13H17.4167C18.2899 13 19 12.3455 19 11.5406V2.36502C19 2.22286 18.9103 2.09353 18.7704 2.03402Z" fill="#FF7A7A"/>
                            </svg>
                            <a className='ms-1 me-4 text-white' href={`mailto:${setting?.email}`}>
                                <span className={styles.fullText} style={{fontSize:"16px", marginBottom:"0px"}}>
                                    {setting?.email}
                                </span>
                                <span className={styles.shortText} style={{fontSize:"16px", marginBottom:"0px"}}>
                                    Email
                                </span>
                            </a>
                        </div>
                        <div className='text-center ms-2'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.7161 10.5022C13.7365 10.5022 12.7747 10.349 11.8633 10.0478C11.4166 9.89542 10.8676 10.0352 10.595 10.3151L8.79598 11.6732C6.70961 10.5595 5.42444 9.27475 4.32595 7.20404L5.64407 5.45188C5.98653 5.10988 6.10936 4.61029 5.96219 4.14154C5.65969 3.22529 5.50603 2.26392 5.50603 1.28392C5.50607 0.575958 4.93011 0 4.2222 0H1.28387C0.575957 0 0 0.575958 0 1.28387C0 9.39846 6.60157 16 14.7161 16C15.424 16 16 15.424 16 14.7161V11.786C16 11.0781 15.424 10.5022 14.7161 10.5022Z" fill="#FF7A7A"/>
                            </svg>
                            <a 
                            href={`tel:(${hostNameCondition ? setting?.uk_phone?.replace(/-/g, ''): setting?.phone?.replace(/-/g, '')})`}
                            className={`ms-1 text-white`} >
                                <span className={styles.fullText} style={{fontSize:"16px", marginBottom:"0px"}}>
                                    {hostNameCondition ? setting?.uk_phone : setting?.phone}
                                </span>
                                <span className={styles.shortText} style={{fontSize:"16px", marginBottom:"0px"}}>
                                    Phone
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className='d-flex'>
                    <div className={`${styles.topNavbarIcon} text-center me-3 pointer`} onClick={() => setShowLoginModal(true)}>
                            <FaRightToBracket/>
                            <span className={`ms-1 text-white ${styles.iconText} text-center`} style={{fontSize:"16px", marginBottom:"0px"}}>
                                Login
                            </span>
                        </div>
                        <div className={`${styles.topNavbarIcon} text-center`} onClick={() => setShowSignupModal(true)}>
                            <FaUserPlus/>
                            <span className={`ms-1 text-white ${styles.iconText} text-center`} style={{fontSize:"16px", marginBottom:"0px"}}>
                                Register
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div> }
    </div>
  )
}

export default TopNavbar