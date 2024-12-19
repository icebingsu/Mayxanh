'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image"; // Import Image từ Next.js
import Link from "next/link"; // Import Link từ Next.js

export default function Navigation() {
  return (
    <div className="px-4 md:px-0 md:w-[1200px] md:m-auto">
      <div className="shadow-lg md:p-4">
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          pagination={false}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            7610: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper z-0"
        >
          <SwiperSlide>
            <div className="block w-[150px]">
              <Link href="/ve-sinh-may-lanh" className="relative block w-full text-[#1d2939] text-center">
                <div className="flex flex-col items-center justify-center gap-2">
                  <Image 
                    src="/images/maylanh.jpg" 
                    alt="ảnh máy lạnh" 
                    width={48} // Đặt chiều rộng
                    height={48} // Đặt chiều cao
                    className="bg-transparent rounded-[8px] h-auto" 
                  />
                  <span className="w-auto text-[14px] h-[18px] leading-[18px] text-[blue]">Vệ sinh máy lạnh</span>
                </div>
              </Link>
            </div>
            <div className="block w-[150px]">
              <Link href="/sua-may-lanh" className="relative block w-full text-[#1d2939] text-center">
                <div className="flex flex-col items-center justify-center gap-2">
                  <Image 
                    src="/images/maylanh.jpg" 
                    alt="ảnh máy lạnh" 
                    width={48} 
                    height={48} 
                    className="bg-transparent rounded-[8px] h-auto" 
                  />
                  <span className="w-auto text-[14px] h-[18px] leading-[18px] text-[blue]">Sửa máy lạnh</span>
                </div>
              </Link>
            </div>
          </SwiperSlide>  
          <SwiperSlide>
            <div className="block w-[150px]">
              <Link href="/sua-ti-vi" className="relative block w-full text-[#1d2939] text-center">
                <div className="flex flex-col items-center justify-center gap-2">
                  <Image 
                    src="/images/tivi.png" 
                    alt="ảnh ti vi" 
                    width={48} 
                    height={48} 
                    className="bg-transparent rounded-[8px] h-auto" 
                  />
                  <span className="w-auto text-[14px] h-[18px] leading-[18px] text-[blue]">Sửa ti vi</span>
                </div>
              </Link>
            </div>
            <div className="block w-[150px]">
              <Link href="/sua-tu-lanh" className="relative block w-full text-[#1d2939] text-center">
                <div className="flex flex-col items-center justify-center gap-2">
                  <Image 
                    src="/images/tulanh.jpg" 
                    alt="ảnh tủ lạnh" 
                    width={48} 
                    height={48} 
                    className="bg-transparent rounded-[8px] h-auto" 
                  />
                  <span className="w-auto text-[14px] h-[18px] leading-[18px] text-[blue]">Sửa tủ lạnh</span>
                </div>
              </Link>
            </div>
          </SwiperSlide>  
          <SwiperSlide>
            <div className="block w-[150px]">
              <Link href="/sua-may-giat" className="relative block w-full text-[#1d2939] text-center">
                <div className="flex flex-col items-center justify-center gap-2">
                  <Image 
                    src="/images/maygiat.jpg" 
                    alt="ảnh máy giặt" 
                    width={48} 
                    height={48} 
                    className="bg-transparent rounded-[8px] h-auto" 
                  />
                  <span className="w-auto text-[14px] h-[18px] leading-[18px] text-[blue]">Máy giặt</span>
                </div>
              </Link>
            </div>
            <div className="block w-[150px]">
              <Link href="/sua-bep-tu" className="relative block w-full text-[#1d2939] text-center">
                <div className="flex flex-col items-center justify-center gap-2">
                  <Image 
                    src="/images/beptu.jpg" 
                    alt="ảnh bếp từ" 
                    width={48} 
                    height={48} 
                    className="bg-transparent rounded-[8px] h-auto" 
                  />
                  <span className="w-auto text-[14px] h-[18px] leading-[18px] text-[blue]">Bếp từ</span>
                </div>
              </Link>
            </div>
          </SwiperSlide>  
          <SwiperSlide>
            <div className="block w-[150px]">
              <Link href="/sua-may-lanh" className="relative block w-full text-[#1d2939] text-center">
                <div className="flex flex-col items-center justify-center gap-2">
                  <Image 
                    src="/images/maylocnuoc.jpg" 
                    alt="ảnh máy lọc nước" 
                    width={48} 
                    height={48} 
                    className="bg-transparent rounded-[8px] h-auto" 
                  />
                  <span className="w-auto text-[14px] h-[18px] leading-[18px] text-[blue]">Máy lọc nước</span>
                </div>
              </Link>
            </div>
            <div className="block w-[150px]">
              <Link href="/ve-sinh-may-lanh" className="relative block w-full text-[#1d2939] text-center">
                <div className="flex flex-col items-center justify-center gap-2">
                  <Image 
                    src="/images/maylockhongkhi.png" 
                    alt="ảnh máy lọc không khí" 
                    width={48} 
                    height={48} 
                    className="bg-transparent rounded-[8px] h-auto" 
                  />
                  <span className="w-auto text-[14px] h-[18px] leading-[18px] text-[blue]">Máy lọc không khí</span>
                </div>
              </Link>
            </div>
          </SwiperSlide>  
        </Swiper>
      </div>
    </div>
  );
}
