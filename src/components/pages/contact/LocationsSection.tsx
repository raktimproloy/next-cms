import React from 'react'
import Image from 'next/image';
import { settingStore } from '@/store/storage/serverSettingStore'
import LocationImage from "/public/img/icons/contact-page-box-icon1.svg"
import { fetchDataFromServer } from '@/utils/fatchApi';
import { API_HOST } from '@/utils/BaseApp';

async function LocationsSection() {
    const setting:any = await fetchDataFromServer(`${API_HOST}setting/get`);
  return (
    <div className="contact-page-boxs sp2 home1-bg">
        <div className="container">
            <div className="row">
                <div className="col-lg-7 m-auto text-center">
                    <div className="hadding1">
                        <h1>Our Offices Around the world</h1>
                    </div>
                </div>
            </div>
            <div className="space30"></div>
            <div className="row d-flex justify-content-center">

                <div className="col-lg-4">
                    <div className="contact-page-box-all">
                        <div className="contact-page-box-icon">
                            <Image src={LocationImage} alt='location' />
                        </div>
                        <div className="space20"></div>
                        <div className="hadding1">
                            <h2>NextCTL</h2>
                            <div className="space16"></div>
                            <div className="contact-page-p">
                                <a href="#">{setting?.address}</a>
                                <a href="#">{setting?.city}</a>
                                <a href="#">{setting?.country}</a>
                            </div>
                            <div className="learn-more-btn2 service-read">
                                <a href={`${setting?.map_share}`} target='_blank'>get Direction <span><i className="fa-solid fa-arrow-right"></i></span></a>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="contact-page-box-all">
                        <div className="contact-page-box-icon">
                            <Image src={LocationImage} alt='location' />
                        </div>
                        <div className="space20"></div>
                        <div className="hadding1">
                            <h2>NextCTL LTD</h2>
                            <div className="space16"></div>
                            <div className="contact-page-p">
                                <a href="#">{setting?.uk_address}</a>
                                <a href="#">{setting?.uk_city}</a>
                                <a href="#">{setting?.uk_country}</a>
                            </div>
                            <div className="learn-more-btn2 service-read">
                                <a href={`${setting?.uk_map_share}`} target='_blank'>get Direction <span><i className="fa-solid fa-arrow-right"></i></span></a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
  )
}

export default LocationsSection