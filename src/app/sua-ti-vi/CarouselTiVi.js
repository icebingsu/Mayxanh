'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function CarouselTiVi() {
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
        className="mySwiper z-0"
      >
        <SwiperSlide>
                <Image 
                    src="/images/sua-ti-vi-bo-mach.jpg" // Đường dẫn bắt đầu bằng '/'
                    alt="Sửa ti vi bo mạch" 
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                    width={640} // Chiều rộng hình ảnh (thay đổi theo kích thước thực tế)
                    height={256} // Chiều cao hình ảnh (thay đổi theo kích thước thực tế)
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image 
                    src="/images/suativi1.jpg" 
                    alt="Sửa ti vi màn hình LED" 
                    className="w-full h-64 object-cover rounded-lg shadow-md" 
                    width={640} // Chiều rộng hình ảnh (thay đổi theo kích thước thực tế)
                    height={256} // Chiều cao hình ảnh (thay đổi theo kích thước thực tế)
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image 
                    src="/images/suativi2.jpg" 
                    alt="Sửa ti vi màn hình LED" 
                    className="w-full h-64 object-cover rounded-lg shadow-md" 
                    width={640} // Chiều rộng hình ảnh (thay đổi theo kích thước thực tế)
                    height={256} // Chiều cao hình ảnh (thay đổi theo kích thước thực tế)
                />
            </SwiperSlide>
      </Swiper>
    </div>
  );
}
