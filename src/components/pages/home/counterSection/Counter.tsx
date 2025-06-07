'use client'
import React, { useEffect, useState } from 'react'
import { CountUp } from 'use-count-up';
import { useInView } from 'react-intersection-observer';
//  AOS ANImation
import AOS from 'aos';

function Counter({count}:any) {
    useEffect(() => {
    AOS.init();
  }, [])
    const [isAnimated, setIsAnimated] = useState(false);

    // Use the useInView hook to detect when the component is in the viewport
    const [inViewRef, inView] = useInView({
      triggerOnce: false, // Trigger animation once
      threshold: 0.1, // Adjust the threshold as needed
    });
  
    // Use a useEffect to handle the animation when inView changes
    React.useEffect(() => {
      if (inView) {
        setIsAnimated(true);
      }else if(!inView){
        setIsAnimated(false)
      }
    }, [inView]);
  return (
    <div className={`d-inline ${isAnimated ? 'animate' : ''}`} ref={inViewRef}>
        {isAnimated ? <CountUp isCounting end={count} duration={2.8} /> : 0}
    </div>
  )
}

export default Counter