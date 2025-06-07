'use client'
import React, { useEffect, useState } from 'react';
import { TestimonialType } from '@/types/HomePage';
import { GetJsonData } from '@/services/getJsonData/GetJsonData';
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import TestimonialCard from './TestimonialCard';
import { getWindowWidthValue } from '@/utils/GetWindowWidth';

// Dynamic import of OwlCarousel
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

function OwlCarouselComponent() {
  // State to store testimonial data
  const [testimonialData, setTestimonialData] = useState<Array<Object>>([]);


  const width = getWindowWidthValue();

  // Fetch testimonial data on component mount
  useEffect(() => {
    GetJsonData({ dataName: "testimonial" }, (data) => {
      setTestimonialData(data);
    });
  }, []);


  return (
  <>
    {testimonialData.length > 0 && <OwlCarousel loop autoplay autoplayTimeout={3000} items={width < 1024 ? 1 : 3}>
      {/* Testimonial data mapping */}
      {testimonialData.map((data, index) => (
          <TestimonialCard key={index} info={data as TestimonialType} />
        ))}
    </OwlCarousel>}
  </>
  );
}

export default OwlCarouselComponent;
