'use client'
import React, { useEffect, useState } from 'react'
import { FaXmark} from '@/services/icon/Icon'

import Logo from '../../../services/logo/Logo'
import SocialIcons from '../socialIcons/SocialIcons'

import MobileNavItems from './shared/MobileNavItems'
import {clientSettingStore ,setting} from '@/store/storage/clientSettingStore'
import {clientMenuStore ,menu} from '@/store/storage/clientMenuStore'
import {clientPageStore ,page} from '@/store/storage/clientPageStore'

interface Props{
    openSideBar: Boolean,
    setOpenSideBar: Function
}

function SideNavbar({openSideBar, setOpenSideBar}: Props) {
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
    //  mobile-menu-active
    <div className={`mobile-sidebar d-block d-lg-none backgroundOne ${openSideBar && "mobile-menu-active"}`}>
        <div className="menu-logo">
            <Logo/>
        </div>
        <div className="menu-close" onClick={() => setOpenSideBar(false)} style={{color: "white"}}>
            <FaXmark/>
        </div>
        <div className="mobile-nav">

            <ul className="mobile-nav-list">
                {   
                    menuTypeData.status && showingPages.length > 0 ? showingPages.map((navItem:any, index) => 
                        navItem.status &&
                        <MobileNavItems
                            key={index}
                            title={navItem.title}
                            link={
                                navItem?.isClickable ? navItem.menu_slug : ""
                            }
                            activeLink={navItem.slug}
                            setOpenSideBar={setOpenSideBar}
                            items={navItem?.items}
                            order={navItem.order}
                        />
                    ) : ""
                }
            </ul>

        <div className="contact-mobile-menu-into">
            <div className="space50"></div>
            <div className="mobile-menu-contact-info-box">
            <div className="">
                <div className="contact-box-img">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_2749_3035)">
                    <path d="M30.0004 3.75C30.0004 3.41848 30.132 3.10054 30.3665 2.86612C30.6009 2.6317 30.9188 2.5 31.2504 2.5C31.5819 2.5 31.8998 2.6317 32.1342 2.86612C32.3687 3.10054 32.5004 3.41848 32.5004 3.75V10H38.7504C39.0819 10 39.3998 10.1317 39.6342 10.3661C39.8687 10.6005 40.0004 10.9185 40.0004 11.25C40.0004 11.5815 39.8687 11.8995 39.6342 12.1339C39.3998 12.3683 39.0819 12.5 38.7504 12.5H32.5004V18.75C32.5004 19.0815 32.3687 19.3995 32.1342 19.6339C31.8998 19.8683 31.5819 20 31.2504 20C30.9188 20 30.6009 19.8683 30.3665 19.6339C30.132 19.3995 30.0004 19.0815 30.0004 18.75V12.5H23.7504C23.4188 12.5 23.1009 12.3683 22.8665 12.1339C22.6321 11.8995 22.5004 11.5815 22.5004 11.25C22.5004 10.9185 22.6321 10.6005 22.8665 10.3661C23.1009 10.1317 23.4188 10 23.7504 10H30.0004V3.75ZM11.9129 6.14C8.52536 7.175 6.30786 10.005 6.78536 13.145C7.37901 17.0111 8.69708 20.7303 10.6704 24.1075C12.6277 27.4872 15.1904 30.4779 18.2304 32.93C20.7104 34.9225 24.2754 34.43 26.8679 32.01C27.324 31.5846 27.6009 31.0014 27.6422 30.379C27.6835 29.7567 27.4862 29.142 27.0904 28.66L25.1104 26.255C24.7937 25.8706 24.3694 25.5896 23.8919 25.4479C23.4144 25.3063 22.9054 25.3105 22.4304 25.46L18.2479 26.775C18.0419 26.8398 17.8226 26.8502 17.6114 26.805C17.4002 26.7599 17.2044 26.6609 17.0429 26.5175L16.9429 26.4275C16.5782 26.082 16.2279 25.7217 15.8929 25.3475C15.0622 24.4304 14.3284 23.4301 13.7029 22.3625C12.8407 20.8486 12.2008 19.2186 11.8029 17.5225L11.7729 17.3925C11.7293 17.1805 11.7414 16.9608 11.808 16.7549C11.8746 16.549 11.9934 16.3638 12.1529 16.2175L15.3829 13.255C15.7499 12.918 16.0079 12.479 16.1238 11.9944C16.2396 11.5097 16.2079 11.0015 16.0329 10.535L14.9479 7.635C14.7272 7.04639 14.2904 6.56407 13.7265 6.2863C13.1626 6.00852 12.514 5.95621 11.9129 6.14ZM17.0754 15.0975L14.3954 17.5575C14.7471 18.7958 15.2421 19.9889 15.8704 21.1125C16.5219 22.2231 17.3078 23.2492 18.2104 24.1675L21.6829 23.075C22.633 22.776 23.6509 22.7675 24.6059 23.0508C25.5608 23.3341 26.4094 23.8962 27.0429 24.665L29.0229 27.07C29.8239 28.0434 30.2236 29.2857 30.1405 30.5437C30.0573 31.8016 29.4976 32.9805 28.5754 33.84C25.3504 36.845 20.3854 37.865 16.6654 34.8775C13.3864 32.2339 10.622 29.0093 8.51036 25.365C6.37915 21.7158 4.9559 17.6971 4.31536 13.52C3.59786 8.8075 6.97536 5.035 11.1829 3.75C12.3924 3.37996 13.6976 3.48504 14.8324 4.04385C15.9672 4.60265 16.8462 5.57312 17.2904 6.7575L18.3754 9.6575C18.7255 10.5906 18.7888 11.607 18.5572 12.5763C18.3255 13.5456 17.8095 14.4236 17.0754 15.0975Z" fill="#EC2628"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_2749_3035">
                    <rect width="40" height="40" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                </div>
            </div>
            <div className="contact-hadding ms-2 sidenavText">
                <p>Call</p>
                <a 
                    href={`tel:${hostName.includes("nextctl.co.uk") ? setting?.uk_phone?.replace(/-/g, '') : setting?.phone?.replace(/-/g, '')}`} 
                    className="font-f-2 font-20 weight-400 line-height-30 text-white">
                        {hostName.includes("nextctl.co.uk") ? setting?.uk_phone : setting?.phone}
                </a>
            </div>
            </div>
            <div className="space40"></div>


            <div className="mobile-menu-contact-info-box">
            <div className="">
                <div className="contact-box-img">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36.417 6.66675H3.91699C3.22559 6.66675 2.66699 7.22534 2.66699 7.91675V32.9167C2.66699 33.6082 3.22559 34.1667 3.91699 34.1667H36.417C37.1084 34.1667 37.667 33.6082 37.667 32.9167V7.91675C37.667 7.22534 37.1084 6.66675 36.417 6.66675ZM34.8545 10.9949V31.3542H5.47949V10.9949L4.40137 10.155L5.93652 8.18237L7.6084 9.48315H32.7295L34.4014 8.18237L35.9365 10.155L34.8545 10.9949ZM32.7295 9.47925L20.167 19.2449L7.60449 9.47925L5.93262 8.17847L4.39746 10.1511L5.47559 10.991L18.8193 21.366C19.2031 21.6641 19.6752 21.8259 20.1611 21.8259C20.6471 21.8259 21.1192 21.6641 21.5029 21.366L34.8545 10.9949L35.9326 10.155L34.3975 8.18237L32.7295 9.47925Z" fill="#EC2628"/>
                </svg>

                </div>
            </div>
            <div className="contact-hadding ms-2 sidenavText">
                <p>Email Us</p>
                <a 
                    href={`mailto:${setting?.email}`} 
                    className="font-f-2 font-20 weight-400 line-height-30 text-white">
                        {setting?.email}
                </a>
            </div>
            </div>
            <div className="space40"></div>


            <div className="mobile-menu-contact-info-box">
            <div className="">
                <div className="contact-box-img">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 22.5C18.7639 22.5 17.5555 22.1334 16.5277 21.4467C15.4999 20.7599 14.6988 19.7838 14.2258 18.6418C13.7527 17.4997 13.6289 16.2431 13.8701 15.0307C14.1113 13.8183 14.7065 12.7047 15.5806 11.8306C16.4547 10.9565 17.5683 10.3613 18.7807 10.1201C19.9931 9.87894 21.2497 10.0027 22.3918 10.4758C23.5338 10.9488 24.5099 11.7499 25.1967 12.7777C25.8834 13.8055 26.25 15.0139 26.25 16.25C26.248 17.907 25.5889 19.4956 24.4172 20.6672C23.2456 21.8389 21.657 22.498 20 22.5ZM20 12.5C19.2583 12.5 18.5333 12.7199 17.9166 13.132C17.2999 13.544 16.8193 14.1297 16.5355 14.8149C16.2516 15.5002 16.1774 16.2542 16.3221 16.9816C16.4668 17.709 16.8239 18.3772 17.3484 18.9017C17.8728 19.4261 18.541 19.7833 19.2684 19.9279C19.9958 20.0726 20.7498 19.9984 21.4351 19.7146C22.1203 19.4307 22.706 18.9501 23.118 18.3334C23.5301 17.7167 23.75 16.9917 23.75 16.25C23.749 15.2557 23.3536 14.3025 22.6506 13.5994C21.9475 12.8964 20.9943 12.501 20 12.5Z" fill="#EC2628"/>
                    <path d="M20 37.5L9.45501 25.0638C9.30849 24.877 9.16349 24.6891 9.02001 24.5C7.21874 22.1272 6.24565 19.229 6.25001 16.25C6.25001 12.6033 7.69867 9.10591 10.2773 6.52728C12.8559 3.94866 16.3533 2.5 20 2.5C23.6467 2.5 27.1441 3.94866 29.7227 6.52728C32.3013 9.10591 33.75 12.6033 33.75 16.25C33.7544 19.2277 32.7817 22.1246 30.9813 24.4963L30.98 24.5C30.98 24.5 30.605 24.9925 30.5488 25.0588L20 37.5ZM11.015 22.9938C11.0175 22.9938 11.3075 23.3787 11.3738 23.4612L20 33.635L28.6375 23.4475C28.6925 23.3787 28.985 22.9913 28.9863 22.99C30.4577 21.0514 31.2529 18.6838 31.25 16.25C31.25 13.2663 30.0647 10.4048 27.955 8.29505C25.8452 6.18526 22.9837 5 20 5C17.0163 5 14.1548 6.18526 12.0451 8.29505C9.93528 10.4048 8.75001 13.2663 8.75001 16.25C8.74739 18.6853 9.54348 21.0543 11.0163 22.9938H11.015Z" fill="#EC2628"/>
                </svg>
                </div>
            </div>
            <div className="contact-hadding ms-2 sidenavText">
                <p>Office Address</p>
                <a 
                    href={`mailto:${setting?.email}`} 
                    className="font-f-2 font-20 weight-400 line-height-30 text-white">
                        {hostName.includes("nextctl.co.uk") ? setting?.uk_address: setting?.address} 
                        <br />
                        {hostName.includes("nextctl.co.uk") ? setting?.uk_city : setting?.city}, 
                        {" "}
                        {hostName.includes("nextctl.co.uk") ? setting?.uk_country : setting?.country}
                    </a>
            </div>
            </div>
            <div className="space50"></div>

            <SocialIcons color={"#ffffff"} bgColor={"#EC2628"} />

        </div>
        </div>
        </div>
  )
}

export default SideNavbar