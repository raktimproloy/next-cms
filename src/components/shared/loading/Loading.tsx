'use client'
import React from 'react';
import styles from './style.module.css';

function Loading({active}:any) {
  return (
    <div className={`${styles.preloader} ${active ? '' : styles.loaderHidden}`} id="preloader"> 
      <div className={`${styles.preloaderInner}`}>
      <div className={`${styles.loader}`}> 
          NextCTL
      </div>
      </div>
    </div>
  )
}

export default Loading;
