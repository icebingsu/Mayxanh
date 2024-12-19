import Link from 'next/link'; // Import Link từ Next.js
import { ChevronRight } from "lucide-react";

const Breadcrumb = () => {
   return (
      <div>
         <ul className="flex items-center px-4">
             <li className="inline-block whitespace-nowrap text-[14px] text-[#288ad6] pr-[10px]">
                <Link href="/">Trang chủ</Link> {/* Sử dụng Link thay vì a */}
             </li>
             <li className="text-[20px] text-[#999] pt-[2px] pr-[6px] leading-[1]">
                <ChevronRight size={16} className="block" />
             </li>
             <li className="inline-block whitespace-nowrap text-[14px] text-[#288ad6] pr-[10px]">
                <Link href="/">Bếp từ</Link> {/* Sử dụng Link thay vì a */}
             </li>
             <li className="text-[20px] text-[#999] pt-[2px] pr-[6px] leading-[1]">
                <ChevronRight size={16} className="block" />
             </li>
             <li className="inline-block whitespace-nowrap text-[14px] text-[#288ad6] pr-[10px]">
                <Link href="/sua-bep-tu">Sửa bếp từ</Link> {/* Sử dụng Link thay vì a */}
             </li>
         </ul>
      </div>
   )
}

export default Breadcrumb;
