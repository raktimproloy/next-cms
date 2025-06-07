'use client'
import React, { useEffect, useState } from 'react'
import styles from "./style.module.css"
import Logo from '@/services/logo/Logo'
import NetworkIcon from "../networkIcon"

function Index({
  showModal= false,
  setShowModal,
  changeModal,
  setChangeModal
}:any) {

  useEffect(() =>{
    if(changeModal === "register"){
      setTimeout(() => {
        setChangeModal("")
        setShowModal(true)
      }, 300);
    }
  }, [changeModal])

  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
    confimrPassword: "" 
  })


  const handleSignup = () => {
    // axios.post(`${EMAIL_API}`, signupData)
    //   .then(res => {
    //     console.log(res)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
  }

  const handleChangeModal = () => {
    setShowModal(false)
    setChangeModal("login")
  }

  return (
    <>
    <div className={`${styles.popup_bg}  ${showModal ? styles.modalShow : styles.modalHide}`} onClick={() => setShowModal(false)}></div>
    <div
    className={`modal ${styles.modalContainer} ${showModal ? styles.modalShow : styles.modalHide}`}
    >
      <div className={`${styles.modalContent}`}>
      <div className={`${styles.popup_bg2}  ${showModal ? styles.modalShow : styles.modalHide}`} onClick={() => setShowModal(false)}></div>
        <div className={`modal-content ${styles.modalItemsContainer}`}>
          <div className={`${styles.modalBody} row p-4`}>
            <div>
              <div className='text-end p-2'>
                <svg fill="#ffffff" viewBox="0 0 32 32" className={`${styles.modalClose}`} width={22} height={22} xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"  onClick={() => setShowModal(false)}><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5 c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4 C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z"></path> </g></svg>
              </div>
              <div className='text-center mb-2'>
                <Logo/>
              </div>
              <h6 className={`mb-3 text-center ${styles.loginTitle}`}>Register</h6>
              <div>
                <div className="mb-3">
                  {/* <label htmlFor="formGroupExampleInput" className="form-label">Your Full Name*</label> */}
                  <input 
                    type="text" 
                    className={`form-control ${styles.modalInput}`} 
                    id="formGroupExampleInputSign1" 
                    placeholder="Enter your Full name" 
                    onChange={(e) => setSignupData({...signupData, fullName: e.target.value})}
                  />
                </div>
                <div className="mb-3">
                  {/* <label htmlFor="formGroupExampleInput2" className="form-label">Your Email*</label> */}
                  <input 
                    type="email" 
                    className={`form-control ${styles.modalInput}`} 
                    id="formGroupExampleInputSign2" 
                    placeholder="Enter your email"
                    onChange={(e) => setSignupData({...signupData, email: e.target.value})}
                  />
                </div>
                <div className='mb-3'>
                  {/* <label htmlFor="formGroupExampleInput" className="form-label">Password*</label> */}
                  <input 
                    type="password" 
                    className={`form-control ${styles.modalInput}`} 
                    id="formGroupExampleInputSign3" 
                    placeholder="Enter password" 
                    onChange={(e) => setSignupData({...signupData, password: e.target.value})}
                  />
                </div>
                <div className='mb-3'>
                  {/* <label htmlFor="formGroupExampleInput" className="form-label">Confirm Password*</label> */}
                  <input 
                    type="password" 
                    className={`form-control ${styles.modalInput}`} 
                    id="formGroupExampleInputSign4" 
                    placeholder="Enter confirm password" 
                    onChange={(e) => setSignupData({...signupData, confimrPassword: e.target.value})}
                  />
                </div>
              </div>
              <div className='mt-4 text-center' onClick={() => handleSignup()}>
                <div className="button pointer" style={{cursor:"pointer", width:"100%"}}>
                    <a className={`button1 buttonColor normalColorOne py-2`}>
                      Signup
                    </a>
                </div>
              </div>
              <div className='text-white text-center'>
                <p>or use a social network</p>
                <div className='d-flex justify-content-center mt-2'>
                  <NetworkIcon/>
                </div>
              </div>
              <hr className='text-white py-1 my-1' />
              <p className='text-white text-center'>Do you have an account? <span className={styles.linkButton} onClick={() => handleChangeModal()}>login</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Index