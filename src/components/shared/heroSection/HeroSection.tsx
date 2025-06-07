
import React from 'react'
import style from "./style.module.css"
import Link from 'next/link'
import { FaAngleRight } from '@/services/icon/Icon'
import pathStore from '@/store/storage/pathStore'
import { fetchDataFromServer } from "@/utils/fatchApi";
import { API_HOST } from '@/utils/BaseApp'

async function HeroSection() {
  const currentPathname = pathStore();
    let heroData:any;
    
    if(currentPathname && currentPathname[0].toLowerCase() !== "assest"){
      if(currentPathname[0] === "blog" && currentPathname[1] ===  "details"){
        heroData = await fetchDataFromServer(`${API_HOST}blog/${currentPathname[2]}`);
      }else{
        heroData = await fetchDataFromServer(`${API_HOST}page/${currentPathname[0]}`);
      }
    }

    return (
      <>
        <div className={`${style.sectionHero}`} style={{backgroundImage: `url(${ "/img/bg/section-bg.png"})`}}>
          <div className="container">
              <div className="row">
                  <div className="col-lg-10 m-auto  text-center">
                      <div className="section-hadding">
                          <h1>{heroData?.title || "Title"}</h1>
                          <div className="section-hadding-p">
                              <Link href="/">Home</Link>
                              <span>
                                  <FaAngleRight/>
                              </span>
                              <p>{heroData?.slug || "Slug"}</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </>
    );

}

export default HeroSection