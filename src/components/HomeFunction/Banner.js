'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image'; // Import Image từ next/image

const Carousel = () => {
  return (
    <>
      <div className="my-1 px-4 md:my-3">
        <Swiper
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper bg-white shadow-2xl z-0 w-full md:w-[1200px]"
        >
          <SwiperSlide>
            <div className="relative h-[130px] md:h-[400px]">
              <Image 
                src="/images/banner-Sua-Chua1.jpeg" 
                alt="Banner 1" 
                layout="fill" 
                objectFit="cover" 
                className="rounded-md object-cover object-left" 
                unoptimized={true}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-[130px] md:h-[400px]">
              <Image 
                src="/images/banner-Sua-Chua2.jpg" 
                alt="Banner 2" 
                layout="fill" // Để hình ảnh chiếm toàn bộ chiều rộng và chiều cao
                objectFit="cover" // Để giữ tỷ lệ khung hình của hình ảnh
                className="rounded-md object-cover object-left" 
                unoptimized={true}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Carousel;
