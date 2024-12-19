'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function CarouselBepTu() {
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
          src="/images/anhsuabeptu.jpg" // Đường dẫn đến hình ảnh
          alt="Sửa bếp từ" 
          layout="responsive" // Tùy chọn này giúp giữ tỷ lệ khung hình
          width={500} // Độ rộng của hình ảnh
          height={300} // Chiều cao của hình ảnh
          className="rounded-lg shadow-md"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image 
          src="/images/linhkienBepTu.jpg" // Đường dẫn đến hình ảnh
          alt="Linh kiện bếp từ" 
          layout="responsive" // Tùy chọn này giúp giữ tỷ lệ khung hình
          width={500} // Độ rộng của hình ảnh
          height={300} // Chiều cao của hình ảnh
          className="rounded-lg shadow-md"
        />
      </SwiperSlide>
       
      </Swiper>
    </div>
  );
}
