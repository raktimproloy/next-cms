
import React from 'react'
import Image from 'next/image'

import ContactIcon1 from '/public/img/icons/contact-page-icon1.svg'
import ContactIcon2 from '/public/img/icons/contact-page-icon2.svg'
import ContactIcon3 from '/public/img/icons/contact-page-icon3.svg'
import domainStore from '@/store/storage/domainStore'
import { fetchDataFromServer } from '@/utils/fatchApi'
import { API_HOST } from '@/utils/BaseApp'


async function ContactInfo() {
    // const setting = await settingStore();
    const setting:any = await fetchDataFromServer(`${API_HOST}setting/get`);
    const hostName: string = domainStore();
    const hostNameCondition = hostName.includes("nextctl.co.uk");
  return (
    <div className='container pt-5'>
        <div className='row align-items-center'>
            <div className='col-lg-4' data-aos={"fade-right"} data-aos-duration="900">
                <div className="contact-page-box">
                    <div className="">
                        <div className="contact-box-img">
                            <Image src={ContactIcon1} alt='contact' />
                        </div>
                    </div>
                    <div className="contact-hadding">
                        <p>Call</p>
                        <a 
                            href={`tel:${hostNameCondition ? setting?.uk_phone?.replace(/-/g, '') : setting?.phone?.replace(/-/g, '')}`}
                            className="font-f-2 font-20 weight-400 line-height-30">
                                {hostNameCondition ? setting?.uk_phone : setting?.phone}
                        </a>
                    </div>
                </div>
            </div>
            <div className='col-lg-4' data-aos={"fade-up"} data-aos-duration="1300">
                <div className="contact-page-box">
                <div className="">
                    <div className="contact-box-img">
                    <Image src={ContactIcon2} alt='contact' />
                    </div>
                </div>
                <div className="contact-hadding">
                    <p>Email Us</p>
                    <a 
                        href={`mailto:${setting?.email}`} 
                        className="font-f-2 font-20 weight-400 line-height-30">
                            {setting?.email}
                    </a>
                </div>
                </div>
            </div>
            <div className='col-lg-4' data-aos={"fade-left"} data-aos-duration="900">
                <div className="contact-page-box">
                <div className="">
                    <div className="contact-box-img">
                        <Image src={ContactIcon3} alt='contact' />
                    </div>
                </div>
                <div className="contact-hadding">
                    <p>Office Address</p>
                    <a 
                        href="mailto:Maryjane38@gmail.com " 
                        className="font-f-2 font-20 weight-400 line-height-30">
                            {hostNameCondition ? setting?.uk_address : setting?.address} 
                            <br />
                            {hostNameCondition ? setting?.uk_city : setting?.city}, {" "}
                            {hostNameCondition ? setting?.uk_country : setting?.country}
                        </a>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactInfo