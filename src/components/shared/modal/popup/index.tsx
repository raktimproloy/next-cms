"use client"
import React, { useEffect, useState } from 'react'
import styles from "./style.module.css"

function Index({
  activeModal,
}: any) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(activeModal);
  }, [activeModal]);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
    <div
    className={`modal ${styles.modalContainer} ${showModal ? styles.modalShow : styles.modalHide}`}
    // data-aos="disabled"
    >
      <div className={`${styles.video}`}>
      <div className={styles.popup_bg} onClick={() => handleClose()}></div>
        <div>
        <div className={`${activeModal ? styles.viewContent : styles.hideContent}`}>
        <div className={styles.popup}>
          <h2>Here i am</h2>
          <p className={styles.close} onClick={() => handleClose()}>&times;</p>
          <div className={styles.content}>
            Thank to pop me out of that button, but now I{'\''}m done so you can close this window.
          </div>
        </div>
        </div>
        </div>
    </div>

    </div>
    </>
  );
}

export default Index