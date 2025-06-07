import React from 'react'
import Logo from '@/services/logo/Logo'
import SocialIcons from '../socialIcons/SocialIcons'
import FooterInfo from './FooterInfo'
import Link from 'next/link';
import domainStore from '@/store/storage/domainStore';
import { fetchDataFromServer } from '@/utils/fatchApi';
import { API_HOST, STORAGE_URL } from '@/utils/BaseApp';
import Image from 'next/image';
 
async function Footer() {
  const setting:any = await fetchDataFromServer(`${API_HOST}setting/get`);
  const menu:any = await fetchDataFromServer(`${API_HOST}menu/all`);
  const page:any = await fetchDataFromServer(`${API_HOST}page/all`);

  const hostName: string = domainStore();
  const hostNameCondition = hostName.includes("nextctl.co.uk");
  let menuTypeLeftData = {
    items: [],
    status: false
  }
  let menuTypeRightData = {
    items: [],
    status: false
  }
  const showingLeftPages:any = []
  const showingRightPages:any = []

  if(menu){
    menu.map((menuType:any) => {
      if(menuType.alias === "footer-left"){
        menuTypeLeftData = menuType
      }
      if(menuType.alias === "footer-right"){
        menuTypeRightData = menuType
      }
    })
  }

  if(menuTypeLeftData && page){
    // const sortItems = menuTypeLeftData?.items.sort((a:any, b:any) => a.order - b.order);
    menuTypeLeftData?.items?.map((item:any) => {
      if(item.link_type === "internal"){
        page.map((pageData:any) => {
          if(pageData.slug === item.menu_slug){
            showingLeftPages.push(pageData)
          }
        })
      }else{
        showingLeftPages.push(item.link)
      }
    })
  }

  if(menuTypeRightData && page){
    // const sortItems = menuTypeRightData?.items.sort((a:any, b:any) => a.order - b.order);
    menuTypeRightData?.items?.map((item:any) => {
      if(item.link_type === "internal"){
        page.map((pageData:any) => {
          if(pageData.slug === item.menu_slug){
            showingRightPages.push(pageData)
          }
        })
      }else{
        showingRightPages.push(item.link)
      }
    })
  }


  return (
    <footer className="footer-area padding-top font-f-2" style={{background : "linear-gradient(45deg, #292f43ad, #292f4321)"}}>
    <div className="container">
      <div className="row" style={{padding : "50px"}}>
        <div className="col-lg-4 col-sm-6">
          <div className="single-footer mr50 hadding2">
            
           <div className="hadding3">
            {
              hostNameCondition && 
              <p style={{color: "#EC2628"}}>
                UK registerd Limited company LSN: 15106791
              </p>
            }
            <div className="site-logo home1-site-logo mt-1">
            <Link href="/">
                {setting ? <Image src={`${STORAGE_URL}${setting?.logo}`} alt="logo" width={150} height={150}/> : ""}
            </Link>
            </div>
           </div>
          </div>
          <div className="space24"></div>
          <SocialIcons/>

        </div>
        <div className="col-lg col-sm-6 hadding2">
          <div className="single-footer">
            <h3 className="font-f-1 font-20 weight-700 line-height-20">
              Discover
            </h3>
            <div>
              <ul className="font-f-2 font-16 line-height-26 pera-c-1" style={{margin:"0px"}}>
                {
                  menuTypeLeftData.status && showingLeftPages.length > 0 ? 
                  showingLeftPages.map((page:any, index:number) =>{
                    return (page.active ? 
                    <li key={index}><Link href={page.slug} target={page.slug.includes("http") ? "_blank" : ""}>{page.title}</Link></li> : "")

                  } 
                    )
                  : ""
                }
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg col-sm-6 hadding2">
          <div className="single-footer">
            <h3 className="font-f-2 font-20 weight-700 line-height-20">
              Company
            </h3>
            <div>
              <ul className="font-f-2 font-16 line-height-26 pera-c-1" style={{margin:"0px"}}>
              {
                  menuTypeRightData.status && showingRightPages.length > 0 ? 
                  showingRightPages.map((page:any, index:number) => 
                    page.active && 
                    <li key={index}><Link href={page.slug} target={page.slug.includes("http") ? "_blank" : ""}>{page.title}</Link></li>
                    )
                  : ""
                }
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 hadding2">
          <FooterInfo/>
        </div>
      </div>
      <div className="row align-items-center copyright2">
        <div className="col-lg-12 text-center">
          <p className="font-16 weight-400 font-f-2 line-height-16 pera-c-1">
            © 2023 {setting?.title}. All rights reserved
          </p>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer