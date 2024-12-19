'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function CarouselTuLanh() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper  z-0"
      >
       <SwiperSlide>
      <Image 
        src="/images/bomgatulanh1.webp" 
        alt="Sửa tủ lạnh bơm gas 1" 
        width={800} 
        height={300} 
        className="w-full h-64 object-cover rounded-lg shadow-md"
      />
    </SwiperSlide>
    <SwiperSlide>
      <Image 
        src="/images/bomgatulanh.webp" 
        alt="Sửa tủ lạnh bơm gas" 
        width={800} 
        height={300} 
        className="w-full h-64 object-cover rounded-lg shadow-md"
      />
    </SwiperSlide>
       
      </Swiper>
    </div>
  );
}
