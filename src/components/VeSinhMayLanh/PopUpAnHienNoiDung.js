'use client'
import { useState } from "react";

const { ChevronDown } = require("lucide-react")

const PopUpAnHienNoiDung = ()=>{
   const [noiDung, setNoiDung] = useState(false);

   const DescNoiDungHidden = () => {
     setNoiDung(!noiDung);
   };
   const [isVisible, setIsVisible] = useState(false); 
   const anhiennoidung = () => {
     setIsVisible(!isVisible);
   };
   return (
      <>
      <h2 className="text-[#606060] font-bold text-[14px] leading-[1.6]">
          Sau một thời gian sử dụng, máy lạnh có thể gặp tình trạng làm lạnh không hiệu quả do bụi bẩn tích tụ trong bộ lọc và các linh kiện bên trong.  
          {noiDung ? (
            <>
               Để đảm bảo hiệu suất làm lạnh tối ưu và tiết kiệm điện năng, việc vệ sinh máy lạnh định kỳ là rất quan trọng. 
              Điện máy XANH cung cấp dịch vụ vệ sinh máy lạnh ngay tại nhà, áp dụng trên toàn quốc. Hãy xem chi tiết và đặt lịch dịch vụ ngay hôm nay để máy lạnh của bạn luôn hoạt động hiệu quả nhé!
              <br />
              <span className="text-[#4a90e2]" onClick={DescNoiDungHidden}>Thu gọn!</span>
            </>
          ) : (
            <span className="text-[#4a90e2]" onClick={DescNoiDungHidden}>...Xem Thêm</span>
          )}
        </h2>
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
        </div></>
   )
}
export default PopUpAnHienNoiDung