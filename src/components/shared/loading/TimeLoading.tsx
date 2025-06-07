'use client'
import React, { useEffect, useState } from 'react';
import styles from './style.module.css';

function TimeLoading() {
  const [active, setActive] = useState(true); // Initialize as true to show the loader initially

  useEffect(() => {
    // When the path changes, set active to true to show the loader
    setActive(true);

    // Schedule a timeout to set active to false after 1 second
    const timeoutId = setTimeout(() => {
      setActive(false);
    }, 1000);

    // Clear the timeout if the component unmounts or the path changes again
    return () => clearTimeout(timeoutId);

  }, []);



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

export default TimeLoading;
