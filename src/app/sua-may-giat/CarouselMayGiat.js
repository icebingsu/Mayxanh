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
          src="/images/dichvusuamaygiat.jpg" // Đường dẫn ảnh
          alt="Sửa máy giặt" // Mô tả hình ảnh
          className="w-full h-full object-cover rounded-lg shadow-md" // Các lớp CSS
          width={500} // Kích thước chiều rộng
          height={300} // Kích thước chiều cao
          quality={75} // Chất lượng hình ảnh
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/dichvusuamaygiat1.jpg" // Đường dẫn ảnh
          alt="Sửa máy giặt" // Mô tả hình ảnh
          className="w-full h-full object-cover rounded-lg shadow-md" // Các lớp CSS
          width={500} // Kích thước chiều rộng
          height={300} // Kích thước chiều cao
          quality={75} // Chất lượng hình ảnh
        />
      </SwiperSlide>
       
      </Swiper>
    </div>
  );
}
