'use client'
import React, { useEffect } from 'react'
import { FaStar } from '@/services/icon/Icon';
import {TestimonialType} from '@/types/HomePage';
import Image from 'next/image';
import Aos from 'aos';

interface TestimonialCardProps {
    info: TestimonialType;
}

function TestimonialCard({info}: TestimonialCardProps) {
    const {id, rating, review, name, position, image} = info as TestimonialType
    useEffect(() => {
        Aos.init();
      }, [])
  return (
    <div className="testimonial-solider-single">
        <div className="testiminial1-review-icons">
            <ul>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
            </ul>
        </div>
        <div className="testimonial1-pera">
            <p>“{review}”</p>
        </div>
        <div className="testimonial1-bottom-hadding">
            <div className="testimonial1-bottom-img border50 border50-img">
            <Image src={`/img/image/${image}`} alt='service' width={45} height={45} style={{width:"45px", height:"45px"}} />
            </div>
            <div className="tes1-hadding">
            <h6><a href="#">{name}</a></h6>
            <p>{position}</p>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard