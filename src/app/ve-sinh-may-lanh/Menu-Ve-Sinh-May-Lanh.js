'use client'
import { AlignJustify } from "lucide-react";
import { useEffect, useState } from "react";

const MenuSuaTiVi = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [isMobile, setIsMobile] = useState(false);
   
   useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 768);
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
   }, []);

   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };

   const MenuVeSinhMayLanh = [
      { name: "Giới thiệu", target: "#gioi-thieu" },
      { name: "Chất lượng dịch vụ", target: "#chat-luong-dich-vu" },
      { name: "Quy trình đặt lịch", target: "#quy-trinh-dat-lich" },
      { name: "Quy trình thanh toán", target: "#quy-trinh-thanh-toan" },
      { name: "Quy trình Bảo hành", target: "#quy-trinh-bao-hanh" }
   ];

   return (
      <div className="w-full md:w-[185px] mt-5 md:mt-10 px-4">
         <div className="flex justify-between">
            <AlignJustify onClick={isMobile ? toggleMenu : null} />
            <h2 className="text-[#0f468a] text-[20px] font-bold leading-[24px] uppercase cursor-pointer"onClick={isMobile ? toggleMenu : null} >
               Vệ sinh Máy Lạnh
            </h2>
         </div>
         <ul className={`overflow-hidden transition-[max-height] duration-700 mt-3 ease-in-out ${isMobile ? (isOpen ? "max-h-[500px]" : "max-h-0") : "max-h-full"}`}>
            {MenuVeSinhMayLanh.map((item, index) => (
               <li key={index} className="mb-3">
                  <a
                     href={item.target}
                     className="bg-[#f1f1f1] rounded-lg text-[#333] block text-[16px] font-normal p-3"
                  >
                     {item.name}
                  </a>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default MenuSuaTiVi;
