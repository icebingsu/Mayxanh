import { Check, StarIcon } from "lucide-react";
import Image from 'next/image'; 
import Link from "next/link";

export default function DichVu() {
   return (
      <div className="text-center font-electroluxVN font-sans text-2xl px-4 font-semibold md:w-[1200px] mx-auto" style={{ marginTop: "30px" }}>
         <h1 className="text-[#00528B] text-lg md:text-2xl">Trung tâm Bảo hành và sửa chữa điện máy xanh</h1>
         <div className="flex justify-center items-center mt-2">
            <div className="border-t border-yellow-500 w-10 mr-2"></div>
            <StarIcon className="text-yellow-500 w-5 h-5" />
            <div className="border-t border-yellow-500 w-10 ml-2"></div>
         </div>        
         <p className="text-lg text-[blue] font-medium my-5 px-4">
            Dịch vụ sửa chữa và bảo hành điện máy hàng đầu tại <span className="text-[red]">Điện máy XANH</span>, cam kết chất lượng và phục vụ tận tình. Chúng tôi luôn đặt uy tín và sự hài lòng của khách hàng lên hàng đầu, với đội ngũ kỹ thuật viên chuyên nghiệp sẵn sàng phục vụ nhanh chóng và giá cả hợp lý.
         </p>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-white p-4 rounded shadow flex bg-slate-200 flex-col md:flex-row">
               <Image 
                  src="/images/Sua-dieu-hoa.jpg" 
                  alt="Dịch vụ sửa chữa máy điều hòa tại Điện Máy XANH" 
                  className="rounded-md mb-2 md:mb-0 md:w-1/3" 
                  width={500} 
                  height={300} 
               />
                <h3 className="flex items-center text-base mt-3  font-normal"><Check className="text-[#0A94D1]" size={18}/><strong className="text-[#0A94D1] ml-3"> Dịch vụ sửa máy lạnh tại nhà </strong> </h3>
               <ul className="text-gray-600 text-sm text-left ml-0 md:ml-5 list-none my-3">
                  <li className="with-dot mt-3 text-sm font-medium md:mt-0">- Chúng tôi chuyên sửa chữa máy lạnh của các hãng nổi tiếng như <strong>Daikin, LG, Samsung, Panasonic, và Mitsubishi</strong>.</li>
                  <li className="with-dot mt-3 text-sm font-medium md:mt-0">
                     - sửa máy lạnh tại nhà, bao gồm kiểm tra, phát hiện và sửa chữa các lỗi phổ biến như <strong>không mát, rò rỉ nước, thay gas, bị chảy nước, lỗi cục nóng... <Link href="/sua-may-lanh" className="text-blue-500 underline font-normal">chi tiết.</Link> </strong> 
                  </li>
                  <li className="with-dot mt-3 text-sm font-medium md:mt-0">
                     - <a href="tel:0862195305" className="text-blue-500 underline">Liên hệ ngay để được tư vấn!</a>
                  </li>
               </ul>
            </div>

              {/* ti vi */}
              <div className="text-white p-4 rounded shadow flex bg-slate-200 flex-col md:flex-row">
                  <Image 
                     src="/images/nguyen-nhan-tivi-samsung-khong-len-hinh-va-cach-khac-phuc-5.jpg" 
                     alt="Dịch vụ sửa tivi tại Điện Máy Xanh" 
                     className="rounded-md mb-2 md:mb-0 md:w-1/3" 
                     width={500}
                     height={300}
                  />
                  <h3 className="flex items-center text-base mt-3 font-normal">
                     <Check className="text-[#0A94D1]" size={18} />
                     <strong className="text-[#0A94D1] ml-3">Dịch vụ sửa tivi tại nhà</strong>
                  </h3>
                  <ul className="text-gray-600 text-sm text-left ml-0 md:ml-5 list-none my-3">
                     <li className="with-dot mt-3 text-sm font-medium md:mt-0">- Dịch vụ điện máy chuyên cung cấp bảo hành và sửa chữa tivi của các hãng như <strong>Samsung, LG, Sony, và Panasonic</strong>.</li>
                     <li className="with-dot mt-3 text-sm font-medium md:mt-0">- Kiểm tra sử lý lỗi thông số và bảo hành cho quy khách <strong>không lên hình, âm thanh kém, hoặc tivi bị nhiễu</strong> <Link href="/sua-ti-vi" className="text-blue-500 underline font-normal">chi tiết.</Link></li>
                     <li className="with-dot mt-3 text-sm font-medium md:mt-0">- <a href="tel:0862195305" className="text-blue-500 underline">Liên hệ ngay để được tư vấn!</a></li>
                  </ul>
               </div>

               {/* tủ lạnh */}
               <div className="text-white p-4 rounded shadow flex bg-slate-200 flex-col md:flex-row">
                  <Image 
                     src="/images/Sua-tu-lanh.jpg" 
                     alt="Dịch vụ sửa tủ lạnh tại Điện Máy Xanh" 
                     className="rounded-md mb-2 md:mb-0 md:w-1/3" 
                     width={500}
                     height={300}
                  />
                  <h3 className="flex items-center text-base my-3 font-normal">
                     <Check className="text-[#0A94D1]" size={18} />
                     <strong className="text-[#0A94D1] ml-3">Dịch vụ sửa tủ lạnh tại nhà</strong>
                  </h3>
                  <ul className="text-gray-600 text-sm text-left ml-0 md:ml-5 list-none my-3">
                     <li className="with-dot mt-3 text-sm font-medium md:mt-0">- Sửa chữa tủ lạnh của các hãng nổi tiếng như <strong>Samsung, LG, Electrolux, và Toshiba</strong>.</li>
                     <li className="with-dot mt-3 text-sm font-medium md:mt-0">- Khắc phục các lỗi như <strong>không lạnh, bị chảy nước, Thiếu gas, hỏng thermic, hoặc tiếng ồn lạ, đóng tuyết</strong>...<Link href="/sua-tu-lanh" className="text-blue-500 underline font-normal">chi tiết.</Link></li>
                     <li className="with-dot mt-3 text-sm font-medium md:mt-0">- <a href="tel:0862195305" className="text-blue-500 underline">Liên hệ ngay để được tư vấn!</a></li>
                  </ul>
               </div>

            { /* Máy lạnh áp trần */}
            <div className="text-white p-4 rounded shadow flex bg-slate-200 flex-col md:flex-row">
                  <Image 
                     src="/images/mua-may-lanh-tang-them-uu-dai-chi-co-tai-dien-may-xanh-2.png" 
                     alt="Dịch vụ sửa máy lạnh áp trần tại Điện Máy Xanh" 
                     className="rounded-md mb-2 md:mb-0 md:w-1/3" 
                     width={500}
                     height={300}
                  />
                  <h3 className="flex items-center text-base mt-3 font-normal">
                     <Check className="text-[#00A1E5]" size={18} />
                     <strong className="text-[#00A1E5] ml-3">Dịch vụ sửa máy lạnh áp trần tại nhà</strong>
                  </h3>
                  <ul className="text-gray-600 text-sm text-left ml-0 md:ml-5 list-none my-3">
                     <li className="with-dot mt-3 text-sm font-medium md:mt-0">- Sửa chữa máy lạnh áp trần với các sự cố nặng như không lạnh, rò rỉ gas.</li>
                     <li className="with-dot mt-3 text-sm font-medium md:mt-0">- Bảo trì định kỳ để tránh hư hỏng lớn và đảm bảo hiệu suất hoạt động tốt.</li>
                     <li className="with-dot mt-3 text-sm font-medium md:mt-0">- sẵn sàng hỗ trợ bạn mọi lúc.</li>
                     <li className="with-dot mt-3 text-sm font-medium md:mt-0">- <a href="tel:0862195305" className="text-blue-500 underline">Liên hệ ngay để được tư vấn!</a></li>
                  </ul>
               </div>

               {/* máy giặt */}
               <div className="text-white p-4 rounded shadow flex bg-slate-200 flex-col md:flex-row">
                  <Image 
                     src="/images/sua-may-giat.jpg" 
                     alt="Dịch vụ sửa máy giặt tại Điện Máy Xanh" 
                     className="rounded-md mb-2 md:mb-0 md:w-1/3" 
                     width={500}
                     height={300}
                  />
                  <h3 className="flex items-center text-base mt-3 font-normal">
                     <Check className="text-[#00A1E5]" size={18} />
                     <strong className="text-[#00A1E5] ml-3">Dịch vụ sửa máy giặt tại nhà</strong>
                  </h3>
                  <ul className="text-gray-600 text-sm text-left ml-0 md:ml-5 list-none my-3">
                     <li className="with-dot mt-3 text-sm font-medium md:mt-0">- Chúng tôi chuyên sửa chữa máy giặt với các lỗi thường gặp như lỗi <strong>bo mạch ,lồng giặt kêu to , Máy giặt không lên nguồn ,bị rung lắc ,Mát giặt bị chảy nước ...</strong><Link href="/sua-may-giat" className="text-blue-500 underline font-normal">chi tiết.</Link></li>
                     <li className="with-dot mt-3 text-sm font-medium md:mt-0">- Cung cấp linh kiện chất lượng cao, đảm bảo máy giặt hoạt động ổn định và an toàn.</li>
                     <li className="with-dot mt-3 text-sm font-medium md:mt-0">- <a href="tel:0862195305" className="text-blue-500 underline">Liên hệ ngay để được tư vấn!</a></li>
                  </ul>
               </div>

         </div>
      </div>
   );
}
