'use client'

import dynamic from 'next/dynamic'
import React, { useEffect, useState } from 'react'
const BlackButton = dynamic(() => import('@/components/shared/blackButton/BlackButton'))
//  AOS ANImation
import AOS from 'aos';
import { sendMail } from '@/lib/sendMail';
import ReCAPTCHA from 'react-google-recaptcha';


function ContactForm() {
    useEffect(() => {
        AOS.init();
      }, [])
      const [showLoading, setShowLoading] = useState(false)

      const [contactData, setContactData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        interest: "",
        subject: "",
        message: ""
      })

      const handleContact = async (e:any) => {
        e.preventDefault()
        const from = "company@nextctl.com"
        const to = "avilashlasker01@gmail.com"
        const subject =  "Next CMS Contact Us"
        setShowLoading(true)
        try {
          const response = await sendMail({ from, to, subject, contactData });
          setShowLoading(false)
        } catch (error) {
          setShowLoading(false)
        }
      }


      const onCaptchaChange = (token: string | null) => {
        // Set the captcha token when the user completes the reCAPTCHA
        if (token) {
        }
      };

  return (
    <form onSubmit={(e) => handleContact(e)}>
        <div className="contact-input-all">
            <div className="contact-single-input">
                <input type="text" placeholder="First Name" onChange={(e) => setContactData({...contactData, firstName: e.target.value})} required/>
                <input type="text" placeholder="Last Name" onChange={(e) => setContactData({...contactData, lastName: e.target.value})} required/>
            </div>
            <div className="contact-single-input contact-single-input2">
                <input type="email" placeholder="Email Address" onChange={(e) => setContactData({...contactData, email: e.target.value})} required/>
            </div>

            <div className="contact-single-input">
                <input type="text" placeholder="Search You Interested In" onChange={(e) => setContactData({...contactData, interest: e.target.value})}/>
                <input type="text" placeholder="Subject" onChange={(e) => setContactData({...contactData, subject: e.target.value})} required/>
            </div>

            <div className="contact-single-input">
                <textarea cols={30} rows={4} placeholder="Tell Us About Your Projects" onChange={(e) => setContactData({...contactData, message: e.target.value})} required></textarea>
            </div>
            <div className="space20"></div>
            <ReCAPTCHA
              size="normal"
              sitekey="6LeXtGApAAAAADtgijDMhvpAuWYLI5zykc2nOSXn"
              onChange={onCaptchaChange}
              // ref={recaptcha}
            />
            <button type='submit' style={{background: "transparent", border: "none"}} className='d-flex align-items-center'>
              <BlackButton title={"Submit"} />
              {showLoading ? 
              <div className="spinner-border ms-3" role="status">
                <span className="visually-hidden">Loading...</span>
              </div> : ""
              
            }
            </button>
        </div>
    </form>
  )
}

export default ContactForm