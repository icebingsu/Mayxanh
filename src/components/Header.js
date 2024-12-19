import Link from 'next/link';
import { CircleDollarSign, Cog, FileStack, Gift, House, MapPin, PhoneOutgoing, Search, Truck, Wrench } from "lucide-react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image'; 
import SlidingLeft from './HeaderFunction/slidingleft';
import HeaderBottom from './HeaderFunction/HeaderBottom';
export default function Header() {
   return (
      <header>
         <div id="header-top" className="bg-bg-active ">
            <div className="text-white text-[14px] leading-[26px] m-0 items-center hover:text-teal-50 px-4 md:w-[1200px] ">
               <div className="marquee">
                  <div className="marquee-content">
                     Chào mừng bạn đến với Trung tâm bảo hành sửa chữa điện máy xanh
                  </div>
               </div>
            </div>
         </div>
         <div id="header-main" className="flex items-center bg-bg-mayxanh mx-auto overflow-visible static text-left transform-none transition-none w-full px-[8px] py-[18px] md:px-[40px]">
            <div id="content" className="flex items-center container">
               <div id="logo" className="flex w-full justify-between items-center md:w-5/6">
                  <div className="flex justify-start md:hidden">
                     <SlidingLeft />
                  </div>
                  <Link href="/">
                     <div className="overflow-hidden h-[60px] relative w-72"> 
                     <Image 
                           src="/images/logo_bao_hanh_may_lanh.png" 
                           alt="" 
                           className="ml-[20px] object-cover mt-[-47px] mb-[-43px]" 
                           width={290} 
                           height={150} 
                           style={{ marginLeft: '20px', marginTop: '-47px', marginBottom: '-43px' }} 
                     />
                     </div>
                  </Link>


                  <div className="flex justify-start md:hidden">
                     <Link href="tel:0862195305" className="flex bg-[#3275CC] justify-center items-center rounded-full">
                        <span className="px-2 py-2 text-white text-xs font-bold">Liên hệ</span>
                     </Link>
                  </div>
                  <ul className="ml-5 hidden justify-between w-full items-center md:flex">
                     <li className="text-text-desc text-base font-semibold rounded-3xl p-3 hover:bg-[#2871D5]">
                        <Link href="/sua-may-lanh">Sửa máy lạnh</Link>
                     </li>
                     <li className="text-text-desc text-base font-semibold rounded-3xl p-3 hover:bg-[#2871D5]">
                        <Link href="/ve-sinh-may-lanh">Vệ sinh máy lạnh</Link>
                     </li>
                     <li className="text-text-desc text-base font-semibold rounded-3xl p-3 hover:bg-[#2871D5]">
                        <Link href="/sua-ti-vi">Sửa ti vi</Link>
                     </li>
                     <li className="text-text-desc text-base font-semibold rounded-3xl p-3 hover:bg-[#2871D5]">
                        <Link href="/sua-tu-lanh">Sửa tủ lạnh</Link>
                     </li>
                     <li className="text-text-desc text-base font-semibold rounded-3xl p-3 hover:bg-[#2871D5]">
                        <Link href="/sua-may-giat">Sửa máy giặt</Link>
                     </li>
                     <li className="text-text-desc text-base font-semibold rounded-3xl p-3 hover:bg-[#2871D5]">
                        <Link href="/sua-bep-tu">Sửa Bếp từ</Link>
                     </li>
                  </ul>
               </div>
               <div className="w-1/5 hidden justify-end md:flex">
                  <form className="header__search w-[200px] rounded-[32px] bg-white relative">
                     <button type="submit" aria-label="button suggest search" className="ml-3 text-stone-400 absolute left-0 w-[30px] h-[40px] top-0 bg-transparent border-0">
                        <Search size={16} strokeWidth={2.5} />
                     </button>
                     <input
                        id="skw"
                        type="text"
                        className="rounded-[32px] p-2 ml-[30px] bg-white border-0 text-[12px] leading-[14px] h-[40px] py-2 pl-[13px] focus:outline-none focus:bg-transparent"
                        placeholder="Bạn tìm gì..."
                        name="key"
                        autoComplete="off"
                        maxLength="100"
                     />
                     <div id="search-result"></div>
                  </form>
               </div>
            </div>
         </div>
         <HeaderBottom
         />
      </header>
   );
}
