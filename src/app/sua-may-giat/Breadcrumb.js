import Link from 'next/link';
import { ChevronRight } from "lucide-react";

const Breadcrumb = () => {
   return (
      <div>
         <ul className="flex items-center px-4">
             <li className="inline-block whitespace-nowrap text-[14px] text-[#288ad6] pr-[10px]">
               <Link href="/">Trang chủ</Link>
             </li>
             <li className="text-[20px] text-[#999] pt-[2px] pr-[6px] leading-[1]">
               <ChevronRight size={16} className="block"/>
             </li>
             <li className="inline-block whitespace-nowrap text-[14px] text-[#288ad6] pr-[10px]">
               <Link href="/">Máy giặt</Link>
             </li>
             <li className="text-[20px] text-[#999] pt-[2px] pr-[6px] leading-[1]">
               <ChevronRight size={16} className="block"/>
             </li>
             <li className="inline-block whitespace-nowrap text-[14px] text-[#288ad6] pr-[10px]">
               <Link href="/sua-may-giat">Sửa máy giặt</Link>
             </li>
         </ul>
      </div>
   );
}

export default Breadcrumb;
