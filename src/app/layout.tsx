import Head from 'next/head'
import {Inter} from "next/font/google"
const inter = Inter({subsets: ['latin']})

import dynamic from "next/dynamic"
const Navbar = dynamic(() => import('@/components/shared/navbar/Navbar'))
const TopButton = dynamic(() => import('@/components/shared/topButton/TopButton'))
const Footer = dynamic(() => import('@/components/shared/footer/Footer'))
const Sidebar = dynamic(() => import('@/components/shared/sidebar/Sidebar'))
const Subscribe = dynamic(() => import('@/components/shared/subscribe/Subscribe'))
const TimeLoading = dynamic(() => import('@/components/shared/loading/TimeLoading'))

import { headers } from 'next/headers';
import domainStore from '@/store/storage/domainStore'
import Popup from "@/components/shared/modal/popup"




// All Css File
import '@/styles/globals.css'
import "@/styles/bootstrap.min.css"
import "@/styles/typography.css"
import "@/styles/mobile-menu.css"
import "@/styles/header.css"
import "@/styles/footer.css"
import "@/styles/blog-page.css"
import "@/styles/modal-video.min.css"
import "@/styles/responsive.css"
import "@/styles/nice-select.css"
import "@/styles/comon.css"
import "@/styles/animation.css"
import "@/styles/advisol-unit.css"
import "@/styles/advisol-core.css"
import 'aos/dist/aos.css';
import "@/styles/modified.css"
import { Suspense } from 'react'
import { fetchDataFromServer } from '@/utils/fatchApi'
import { API_HOST } from '@/utils/BaseApp'


import GoogleAnalytics from "./GoogleAnalytics"

async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const headersList = headers();
  const setting = await fetchDataFromServer(`${API_HOST}setting/get`);
  // let showModal = setting.popup

  domainStore(headersList.get('host')?.toString());
  
  return (
    <>
    <Head>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    />
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"/>
    {/* <link rel="icon" href="/icon.png" type="image/png" /> */}
      
    </Head>
    <html lang="eng" suppressHydrationWarning={true}>
      <body className={`${inter.className} myBody`} suppressHydrationWarning={true}>
        <Suspense fallback={<TimeLoading/>}>
          <GoogleAnalytics/>
            <TimeLoading/>
            {/* <Popup activeModal={showModal}/> */}
            <TopButton/>
            <Sidebar/>
            <Navbar/>
            
            {children}
            
            {/* {setting.newslater === "active" ? <Subscribe/> : ""} */}
            <Footer/>
        </Suspense>
      </body>
      <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
    </html>
    </>
  )
}

export default RootLayout