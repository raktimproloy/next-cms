'use client'
import React, { useEffect, useState } from 'react'

import SideNavbar from './SideNavbar'
import Logo from '../../../services/logo/Logo'
import styles from "./style.module.css"

function MobileNavbar() {
    const [openSideBar, setOpenSideBar] = useState(false)
    const [scrollPosition, setScrollPosition] = useState(0);
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
    <>
        <div className={`mobile-header mobile-header-4 d-block d-lg-none ${scrollPosition !== 0 ? `backgroundOne ${styles.setTop}` : "backgroundOneDefault"}`} style={{transition: "all .3s easy-in-out"}}>
            <div className="container-fluid">
            <div className="col-12">
                <div className="mobile-header-elements">
                <div className="mobile-logo">
                    <Logo/>
                </div>
                <div className="mobile-nav-icon" onClick={() => setOpenSideBar(true)} style={{color: "white"}}>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" className="svg-inline--fa fa-bars " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{marginLeft:"2px"}} height="16" width="16">
                        <path fill="#ffffff" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path></svg>
                </div>
                </div>
            </div>
            </div>
            </div>

        <SideNavbar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
    </>
  )
}

export default MobileNavbar














