import React from 'react'
import Image from 'next/image'

import ContactForm from './ContactForm'
// image import
import ContactIcon1 from "/public/img/icons/contact1-icon1.svg"
import ContactIcon2 from "/public/img/icons/contact1-icon2.svg"
import domainStore from '@/store/storage/domainStore'
import { fetchDataFromServer } from '@/utils/fatchApi'
import { API_HOST } from '@/utils/BaseApp'

async function ContactSection() {
  const setting:any = await fetchDataFromServer(`${API_HOST}setting/get`);
  const hostName: string = domainStore();
  const hostNameCondition = hostName.includes("nextctl.co.uk");
  return (
    <div className="contact2 sp2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hadding1 choose2-hadding">
                <span className="span" data-aos="fade-right" data-aos-duration="700">Contact us</span>
                <h1 data-aos="fade-right" data-aos-duration="1100">Let Us Help <span className="after">You reach</span> Your Financial Goals</h1>
                <div className="space8"></div>
                <p data-aos="fade-right" data-aos-duration="1400">We help you to better understand your competition-their strengths and weaknesses. We help you to create compelling sales presentations and marketing messages to better communicate your brand value.</p>
              </div>
              <div className="contact3-icon-box" data-aos="fade-right" data-aos-duration="1400">
                <div className="contact3-icon contact3-icon1">
                  <Image src={ContactIcon1} alt='contact icon' />
                </div>
                <div className="contact3-box-hadding">
                  <p>Send An Email</p>
                  <a href="mailto:Advisoltaxconsulting@gmail.com">{setting?.email}</a>
                </div>
              </div>

              <div className="contact3-icon-box" data-aos="fade-right" data-aos-duration="900">
                <div className="contact3-icon contact3-icon1">
                  <Image src={ContactIcon2} alt='contact icon' />
                </div>
                <div className="contact3-box-hadding">
                  <p>Office Address</p>
                  <a href="#">
                    {hostNameCondition ? setting?.uk_address : setting?.address}
                  </a> 
                  <br/>
                  <a href="#">
                    {hostNameCondition ? setting?.uk_city : setting?.city}, 
                    {hostNameCondition ? setting?.uk_country : setting?.country}
                  </a>
                </div>
              </div>

            </div>
            <div className="col-lg-6">
              {/* Contact */}
              <div className="contact3-form-all" data-aos="zoom-out" data-aos-duration="1200">
                <div className="hadding3">
                    <h1 className="font-30 font-lg-40  line-height-lg-48 line-height-38">Contact Us</h1>
                </div>
                <ContactForm/>
            </div>
            </div>

          </div>
        </div>
      </div>
  )
}

export default ContactSection