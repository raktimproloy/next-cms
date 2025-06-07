'use client'
import React, { useEffect, useState } from 'react'
import styles from "./style.module.css"
import BlackButton from '../blackButton/BlackButton'
import { sendMail } from '@/lib/sendMail'
import {clientSettingStore ,setting} from '@/store/storage/clientSettingStore'

function Index({
  showModal= false,
  title,
  body,
  setShowModal,
  downButton
}:any) {
  const [showLoading, setShowLoading] = useState(false)
  const [contactData, setContactData] = useState({
    name: "",
    phone: "",
    email: ""
  })
  const [settingData, setSettingData] = useState<any>(null)

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

  const handleSendEmail = async (e:any) => {
    e.preventDefault()
    const from = settingData?.email_config?.from
    const to = settingData?.email_config?.to
    const subject = `${contactData.name} is Get In Touch`
    setShowLoading(true)
    try {
      const response = await sendMail({ from, to, subject, contactData });
      setShowLoading(false)
    } catch (error) {
      setShowLoading(false)
    }
  }

  return (
    <>
    <div
    className={`modal ${styles.modalContainer} ${showModal ? styles.modalShow : styles.modalHide}`}
    >
      <div className={`${styles.modalContent}`}>
      <div className={styles.popup_bg} onClick={() => setShowModal(false)}></div>
        <div className="modal-content">
          <div className={`${styles.modalBody} row`}>
            <div className='col-md-6'>
              <img src="https://source.unsplash.com/400x450/?clothes" className={`${styles.modalImage}`} />
            </div>
            <div className='col-md-6'>
              <div className='text-end p-2'>
                <button type="button" className={`btn-close ${styles.modalClose}`} onClick={() => setShowModal(false)}></button>
              </div>
              <form onSubmit={(e) => handleSendEmail(e)}>
                <h6 className='mb-3'>Get In Touch</h6>
                <div className='pe-3'>
                  <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Your Name*</label>
                    <input 
                      type="text" 
                      className={`form-control ${styles.modalInput}`} 
                      id="formGroupExampleInputget1" 
                      placeholder="Enter your name" 
                      required
                      onChange={(e) => setContactData({...contactData, name: e.target.value})}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Your Phone</label>
                    <input 
                      type="number" 
                      className={`form-control ${styles.modalInput}`} id="formGroupExampleInputget3" 
                      placeholder="Enter your number (optional)"
                      onChange={(e) => setContactData({...contactData, phone: e.target.value})}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="formGroupExampleInputget2" className="form-label">Your Email*</label>
                    <input 
                      type="email" 
                      className={`form-control ${styles.modalInput}`} 
                      id="formGroupExampleInput2" 
                      placeholder="Enter your email"
                      required
                      onChange={(e) => setContactData({...contactData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className='mt-4'>
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
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Index