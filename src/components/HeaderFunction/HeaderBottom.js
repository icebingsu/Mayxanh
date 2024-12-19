'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { CircleDollarSign, Cog, FileStack, Gift, House, PhoneOutgoing, Truck, Wrench } from 'lucide-react';
const HeaderBottom = ()=>{
   return (
      <div id="header-bottom ">
            <Swiper
            centeredSlides={true}
            autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper z-0"
            >
         <SwiperSlide>
            <div className="bg-[#1E73BE] flex justify-center text-text-desc p-2">
               <ul className="flex justify-center">
                  <li className="flex"><Wrench strokeWidth={2.5} /><span className="ml-3 hidden md:block">Dịch vụ sửa chữa</span></li>
                  <li className="flex ml-10 md:ml-5"><House  strokeWidth={2.5} /><span className="ml-3 hidden md:block">Lặp đặt tại nhà</span></li>
                  <li className="flex ml-10 md:ml-5"><FileStack strokeWidth={2.5} /><span className="ml-3 hidden md:block">Đăng kí miễn phí</span></li>
                  <li className="flex ml-10 md:ml-5"><PhoneOutgoing strokeWidth={2.5} /><span className="ml-3 hidden md:block">Gọi ngay : 0862.195.305</span></li>
               </ul>
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className="bg-[#1E73BE] flex justify-evenly text-text-desc p-2">
               <ul className="flex justify-center">
                  <li className="flex"><Gift strokeWidth={2.5} /><span className="ml-3 hidden md:block">Ưu đãi Giảm 10%</span></li>
                  <li className="flex ml-10 md:ml-5"><Truck strokeWidth={2.5} /><span className="ml-3 hidden md:block">Ưu đãi Giảm 10%</span></li>
                  <li className="flex ml-10 md:ml-5"><Cog  strokeWidth={2.5} /><span className="ml-3 hidden md:block">Miễn phí Lắp đặt</span></li>
                  <li className="flex ml-10 md:ml-5"><CircleDollarSign  strokeWidth={2.5} /><span className="ml-3 hidden md:block">Trả góp 0%</span></li>
               </ul>
            </div>
         </SwiperSlide>
         </Swiper>
      </div>
   )
}
export default HeaderBottom;