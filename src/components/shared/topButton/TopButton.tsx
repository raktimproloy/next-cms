'use client'
import React, { useEffect, useState } from 'react';
import styles from "./style.module.css";
import { FaArrowUp } from '@/services/icon/Icon';
import { handleGoTop } from '@/utils/HandleGoTop';

function TopButton() {
  const [scrollTop, setScrollTop] = useState(0);
  const [result, setResult] = useState(307);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const originalValue = 307;
    const percentage = scrollTop / 100;
    setResult(originalValue - (originalValue * percentage));
  }, [scrollTop]);

  return (
    <div className={styles.paginacontainer} onClick={handleGoTop}> 
      <div className={`${styles.progressWrap} ${result !== 307 && styles.activeProgress}`}>
        <svg className={`${styles.progressCircle}`} width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style={{ transition: "stroke-dashoffset 10ms linear 0s", strokeDasharray: "307.919, 307.919", strokeDashoffset: `${result}` }} />
        </svg>
        <div className={`${styles.upArrow}`} >
          <FaArrowUp />
        </div>
      </div>
    </div> 
  );
}

export default TopButton;
