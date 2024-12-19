'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function CarouselSuaMayLanh() {
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
          src="/images/kinh-nghiem-lap-dat-may-lanh-khi-moi-mua-39.jpg" 
          alt="Sửa máy giặt" 
          className="w-full h-full object-cover rounded-lg shadow-md"
          width={500} 
          height={300} 
          quality={75} 
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/mua-may-lanh-tang-them-uu-dai-chi-co-tai-dien-may-xanh.jpg" 
          alt="Sửa máy giặt"
          className="w-full h-full object-cover rounded-lg shadow-md" 
          width={500} 
          height={300}
          quality={75}
        />
      </SwiperSlide>
       
      </Swiper>
    </div>
  );
}
