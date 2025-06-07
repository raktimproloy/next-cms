'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FaAngleDown, FaAngleRight } from '@/services/icon/Icon'
import Styles from "./style.module.css"

interface SubItem {
    subTitle: string;
    subLink: string;
  }
  
  interface MenuItem {
    link_type: string;
    order: number;
    menu_slug: string;
    _id: string;
    link?: Object;
    sub?: SubItem[];
  }
  
  interface Props {
    order: string;
    title: string;
    link: string;
    activeLink: string;
    design?: Number;
    items?: MenuItem[];
  }

function NavbarItems({title, link, activeLink, items, order, design}: Props) {
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
    const path = usePathname()
    

  return (
    <>
      {design === 0  ? 
        <li className="has-dropdown" style={{order: order}}>
            <Link href={
              link.length < 1 ?
              ""
              : link === "home" ? "/" : `/${link}`
          } className={`${path === activeLink ? "activeColor" : "text-white"} ${scrollPosition !== 0 && "normalColorTwo"}`} style={{fontSize:"16px", marginBottom:"0px"}}>
                {title}  
                { items && items?.length > 0  && <FaAngleDown/>}
            </Link>
            {
            items && items?.length > 0  && <ul className="sub-menu d-flex flex-column">
                {items.map((item:any, index:any) => 
                    <li  className={`has-dropdown has-dropdown1 order-${item?.order}`} key={index}>
                        <Link href={item?.isClickable ? item?.menu_slug : ""} style={{fontSize:"16px", marginBottom:"0px"}}>
                            {item?.title}
                            {item?.items !== undefined && item?.items.length > 0 && <FaAngleRight/>}
                        </Link>
                        {
                            item?.items !== undefined && item?.items.length > 0 && <ul className="sub-menu">
                                {
                                    item.items.map((subItem:any, index:any) => 
                                        <li key={index}><Link href={subItem.menu_slug}  style={{fontSize:"16px", marginBottom:"0px"}}>{subItem.title}</Link></li>
                                    )
                                }
                            </ul>
                        }
                    </li>
                )}
            </ul> 
            }
        </li>
        : 
        <li className={`nav-item dropdown dropdown-mega position-static has-dropdown ${Styles.megaMenu}`} style={{order: order}}>
        <Link href={
              link.length < 1 ?
              ""
              : link === "home" ? "/" : `/${link}`
          } className={`${path === activeLink ? "activeColor" : "text-white"} ${scrollPosition !== 0 && "normalColorTwo"}`} style={{fontSize:"16px", marginBottom:"0px"}}>
            {title}  
            { items && items?.length > 0  && <FaAngleDown/>}
            </Link>
            {items && items?.length > 0 && 
              <div className={`dropdown-menu shadow sub-menu ${Styles.megaMenuDropdown}`} style={{display:"block", borderRadius: "5px", border: "0px", padding: "0px"}}>
              <div className="mega-content">
                  <div className="container-fluid">
                  <div className={`row row-cols-${items?.length === 1 ? "1": "2"}  ${Styles.items}`}>
                    {
                    items && items?.length > 0 && items.map((item:any, index:any) =>
                    <li key={index} className={`px-0`} style={{borderRight: `${index % 2 == 0 ? "2px solid gray" : "0px solid gray"}`}}>
                    <Link className={`text-dark col has-dropdown1 d-flex align-items-center gap-2 ${Styles.svgHover}`} href={item.menu_slug}  style={{fontSize:"16px", marginBottom:"0px"}}>
                          <div dangerouslySetInnerHTML={{ __html: item.svg_icon || '' }}  style={{width: "25px", height:"25px"}}/>
                        <div>
                          <p style={{fontSize:"16px", marginBottom:"0px"}}>{item.title}</p>
                          <p style={{fontSize:"15px", color:"gray", marginBottom:"0px"}} className={`${Styles.tagLine}`}>{item.tag_line || ""}</p>
                        </div>
                      </Link>
                    </li>
                    )
                    }
                  </div>
                  </div>
              </div>
              </div>
            }
        </li>
      }
    </>
  )
}

export default NavbarItems