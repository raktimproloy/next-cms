'use client'
import React, { useEffect, useState } from 'react'

import BlackButton from '../blackButton/BlackButton'
import MobileNavbar from './MobileNavbar'
import Logo from '../../../services/logo/Logo'
import TopNavbar from './TopNavbar'

import NavbarItems from './shared/NavbarItems'
import Modal from "@/components/shared/modal"
import {clientSettingStore ,setting} from '@/store/storage/clientSettingStore'
import {clientMenuStore ,menu} from '@/store/storage/clientMenuStore'
import {clientPageStore ,page} from '@/store/storage/clientPageStore'
import Loading from '@/components/shared/loading/Loading'
import CookieConsent from '../cookiesConsent/CookieConsent'

function Navbar() {
    const [hostName, setHostName] = useState("")
    const [active, setActive] = useState(true)
    const [scrollPosition, setScrollPosition] = useState(0);
    const [pageData, setPageData] = useState([])
    const [settingData, setSettingData] = useState(null)
    const [menuData, setMenuData] = useState(null)
    const [showingPages, setShowingPages] = useState([])
    const [menuTypeData, setMenuTypeData] = useState({
        items:[],
        status: false
    })
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        if (typeof window !== 'undefined') {
        // Your code that uses the `window` object goes here
        setHostName(window.location.host)
        }
    }, []);

    
    const initializeData = async () => {
        const settingPromise = clientSettingStore();
        const menuPromise = clientMenuStore();
        const pagePromise = clientPageStore();

        // Wait for all promises to resolve
        await Promise.all([settingPromise, menuPromise, pagePromise]);

        // Update state variables
        setSettingData(setting);
        setMenuData(menu);
        setPageData(page);
    };

    // Initial setup
    useEffect(() => {
        initializeData();
    }, []);

    useEffect(() => {
        // Check if any of the values is still null and trigger the initialization again
        if (settingData === null || menuData === null || pageData === null) {
            initializeData();
        } else {
            setActive(false);
        }
    }, [settingData, menuData, pageData]);


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

    // Selete Menu Type
    useEffect(() => {
        if(menu){
            menu.map((menuType:any) => {
                if(menuType.alias === "top-menu"){
                    setMenuTypeData(menuType)
                }
            })
        }
    }, [menu])

    // Sort Page using menu type order
    useEffect(() => {
        setShowingPages([])
        const pagesData:any = []
        if(menuTypeData && pageData){
            const sortItems = menuTypeData?.items.sort((a:any, b:any) => a.order - b.order);
            menuTypeData?.items?.map((item:any) => {
                // console.log(item)
                pagesData.push(item)
                // if(item.link_type === "internal"){
                //     pageData.map((pageData:any) => {
                //         if(pageData?.slug === item?.menu_slug && pageData?.children_info && pageData?.children_info?.status){
                //             menu.map((menuItem:any) => {
                //                 if(pageData.children_info.id === menuItem._id){
                //                     pagesData.push({...pageData, items:menuItem.items, parent_slug: menuItem.parent_slug})
                //                 }
                //             })
                //         }else if(pageData.slug === item.menu_slug){
                //             pagesData.push(pageData)
                //         }
                //     })
                // }else{
                //     pagesData.push(item.link)
                // }
            })
        }
        setShowingPages(pagesData)
    }, [menuTypeData, pageData])

  return (
    <>
    <Loading active={active}/>
    <CookieConsent/>
        <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            title={"This is title"}
            body={`
                <h1>This is title</h1>
            `}
            downButton={"Ok"}
        />
        <TopNavbar/>
        <header>
            <div 
            className={`header-area header-area-all d-none d-lg-block ${scrollPosition !== 0 ? "sticky backgroundOne" : "backgroundOneDefault"}`} 
            id="header" style={{borderRadius: "0px 0px 5px 5px"}}>
            <div className="container">
                <div className="row">
                <div className="col-12">
                    <div className="header-elements">
                    <div className="site-logo home1-site-logo">
                        <Logo />
                    </div>

                    <div className="main-menu-ex main-menu-ex1">
                        <ul className="font-f-2 d-flex" style={{margin:"0px"}}>
                            {/* Mega Menu */}
                        
                            {   
                                menuTypeData?.status && showingPages?.length > 0 ? showingPages.map((navItem:any, index) => 
                                    // navItem?.active &&
                                    <NavbarItems
                                        key={index}
                                        title={navItem.title}
                                        link={navItem.isClickable ? navItem.menu_slug : ""}
                                        activeLink={navItem.slug}
                                        items={navItem?.items}
                                        order={navItem.order}
                                        design={navItem.menu_design}
                                    />
                                ) : ""
                            }
                        </ul>
                    </div>

                    <div className="home2-header-buttons">
                        <div className="header1-buttons">
                        <div className="header1-btn-icon">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" 
                            stroke="#ffffff"
                            strokeWidth="2" strokeMiterlimit="10"/>

                            <path d="M4.68359 12H27.3167" 
                            stroke="#ffffff" 
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>

                            <path d="M4.68359 20H27.3166" 
                            stroke="#ffffff" 
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>

                            <path d="M16 27.6778C18.7614 27.6778 21 22.4494 21 15.9999C21 9.55038 18.7614 4.32202 16 4.32202C13.2386 4.32202 11 9.55038 11 15.9999C11 22.4494 13.2386 27.6778 16 27.6778Z" 
                            stroke="#ffffff" 
                            strokeWidth="2" strokeMiterlimit="10"/>
                        </svg>
                        </div>
                        
                        <div className="header1-iocn-hadding">
                            <span className={"text-white"}>Lets Talk’s</span> <br/>
                            <a 
                            href={`tel:(${hostName.includes("nextctl.co.uk") ? setting?.uk_phone?.replace(/-/g, '') : setting?.phone?.replace(/-/g, '')})`}
                            className={"text-white"}>
                                ({hostName.includes("nextctl.co.uk") ? setting?.uk_phone : setting?.phone})
                            </a>
                        </div>
                        </div>
                        <div onClick={() => setShowModal(true)}>
                        <BlackButton title={"Get in touch "}/>
                        </div>
                    </div>
                    <div className="mobile-menu-bar d-lg-none">
                        <i className="fas fa-bars"></i>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </header>

        <MobileNavbar/>



        {/* Full navbar items */}
     {/* <NavbarItems
        title='Blog'
        link='/blog'
        activeLink='/blog'
        items={[
            {
                title: "Our Blog",
                link: '/blog-details'
            },
            {
                title: "Our Blog",
                link: '/blog-details',
                sub: [
                    {
                        subTitle: "Blog1",
                        subLink: "/blo1"
                    },
                    {
                        subTitle: "Blog1",
                        subLink: "/blo1"
                    }
                ] 
            }
        ]}
    /> */}
    </>
  )
}

export default Navbar