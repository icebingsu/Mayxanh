'use client'

import { useState } from "react";

const { ChevronDown } = require("lucide-react")

const PopUpNoiDung = ()=>{
   const [isVisible, setIsVisible] = useState(true);
   const anhiennoidung = () => {
      setIsVisible(!isVisible);
   };
   return (
      <>
        <div className="relative overflow-hidden my-4 text-left bg-[#dbedf9] border border-[#c7e4f4] rounded-lg w-full md:w-1/2 p-3">
               <div
                  className="flex items-center justify-center cursor-pointer"
                  onClick={anhiennoidung}
               >
                  <p className="font-bold text-[#333] text-center">
                     Xem nhanh
                  </p>
                  <ChevronDown size={16} className="ml-3 text-[#333]" />
               </div>
               {isVisible && (
                  <div>
                     <div className="mt-4">
                        <h3 className="text-[#4a90e2] text-[14px] font-normal cursor-pointer">
                           1. Giới thiệu chung về dịch vụ vệ sinh máy lạnh
                        </h3>
                        <ul className="pl-4 list-disc text-[14px]">
                           <li>
                              Dịch vụ vệ sinh máy lạnh treo tường
                           </li>
                           <li>
                              Dịch vụ vệ sinh máy lạnh âm trần/tủ đứng
                           </li>
                        </ul>
                        <h3 className="text-[#4a90e2] mt-2 text-[14px] font-normal cursor-pointer">
                           2. Cam kết chất lượng dịch vụ tại Điện máy XANH
                        </h3>
                        <h3 className="text-[#4a90e2] mt-2 text-[14px] font-normal cursor-pointer">
                           3. Quy trình đặt lịch dịch vụ vệ sinh máy lạnh
                        </h3>
                        <ul className="pl-4 list-disc text-[14px]">
                           <li>Hình thức đặt dịch vụ</li>
                           <li>Quy trình đặt dịch vụ</li>
                        </ul>
                     </div>
                  </div>
               )}
            </div>
      </>
   )
}
export default PopUpNoiDung