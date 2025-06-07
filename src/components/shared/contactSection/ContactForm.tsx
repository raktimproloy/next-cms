'use client'
import React, { useEffect, useRef, useState } from 'react'
import BlackButton from '@/components/shared/blackButton/BlackButton'
import ReCAPTCHA from 'react-google-recaptcha';
import { sendMail } from '@/lib/sendMail'
import {clientSettingStore ,setting} from '@/store/storage/clientSettingStore'
import AOS from 'aos';
function ContactForm() {
    useEffect(() => {
        AOS.init();
      }, [])
    const RECAPTCHA_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
    const [selectionOpen, setSelectionOpen] = useState(false)
    const [showLoading, setShowLoading] = useState(false)
    const captchaRef = useRef<any>(null);
    const [settingData, setSettingData] = useState<any>(null)

    const [contactData, setContactData] = useState({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: ""
    })
    const [selectionOption, setSelectionOption] = useState("Select Services")
    const initializeData = async () => {
        const settingPromise = clientSettingStore();

        // Wait for all promises to resolve
        await Promise.all([settingPromise]);

        // Update state variables
        setSettingData(setting);
    };

    useEffect(() => {
        // Check if any of the values is still null and trigger the initialization again
        if (settingData === null) {
            initializeData();
        }
    }, [settingData]);

    const handleContact = async (e:any) => {
        e.preventDefault()
        const token = captchaRef.current?.getValue();
        if(token){
            const from = settingData?.email_config?.from
            const to = settingData?.email_config?.to
            const subject = "Next CMS Contact Us"
            setShowLoading(true)
            try {
              const response = await sendMail({ from, to, subject, contactData });
              setShowLoading(false)
            } catch (error) {
              setShowLoading(false)
            }
        }
        captchaRef.current.reset();

    }

    const onCaptchaChange = (token: string | null) => {
        // Set the captcha token when the user completes the reCAPTCHA
        if (token) {
          console.log(token)
        }
      };

  return (
    <form onSubmit={(e) => handleContact(e)}>
            <div className="contact3-form">
            <div className="contact-from-input">
                <input type="text" placeholder="Your Name" onChange={(e) => setContactData({...contactData, name: e.target.value})} required/>
                <input type="number" placeholder="Your Phone " onChange={(e) => setContactData({...contactData, phone: e.target.value})} required/>
            </div>
                <div className="contact-from-input contact-from-input2">
                <input type="text" placeholder="Your Email" onChange={(e) => setContactData({...contactData, email: e.target.value})} required/>
                </div>
                <div className="contact-from-input">
                <select className="wide" style={{display: "none"}}>
                    <option value="">Select Services</option>
                    <option value="">Genarel</option>
                    <option value="">Support</option>
                </select>
                <div className={`nice-select wide ${selectionOpen && "open"}`} onClick={() => setSelectionOpen(!selectionOpen)}>
                    <span className="current">{selectionOption}</span>
                    <ul className="list">
                        <li 
                            data-value="" 
                            className={`option ${selectionOption === "Select Services" && "selected focus"}`} onClick={() => {
                                setSelectionOption("Select Services")
                                setSelectionOpen(false)
                                }}>
                                Select Services
                        </li>
                        <li 
                            data-value="" 
                            className={`option ${selectionOption === "Genarel" && "selected focus"}`} 
                            onClick={() => {
                                setSelectionOption("Genarel")
                                setSelectionOpen(false)
                                }}>
                                Genarel
                        </li>
                        <li 
                            data-value="" 
                            className={`option ${selectionOption === "Support" && "selected focus"}`} 
                            onClick={() => {
                                setSelectionOption("Support")
                                setSelectionOpen(false)
                                }}>
                                Support
                        </li>
                    </ul>
                </div>
                </div>
                <div className="contact-from-input">
                <textarea cols={30} rows={3} placeholder="Additional Details" onChange={(e) => setContactData({...contactData, message: e.target.value})} required></textarea>
                </div>
                <div className="space20"></div>
                <div>
                <ReCAPTCHA
                    size="normal"
                    sitekey={`${settingData?.email_config?.cms_recaptcha_site_key}`}
                    ref={captchaRef}
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
                </div>
        </form>
  )
}

export default ContactForm