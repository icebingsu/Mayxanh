import React from 'react';
import CarouselTuLanh from './CarouselTuLanh';
import { ArrowRight, PhoneCall } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ContentMain = () => {
   const services = [
      { name: "Sò lạnh", price: "250,000 đ – 350,000 đ" },
      { name: "Sò nóng", price: "250,000 đ – 350,000 đ" },
      { name: "Điện trở", price: "350,000 đ – 450,000 đ" },
      { name: "Timer", price: "450,000 đ – 550,000 đ" },
      { name: "Sửa board tủ lạnh < 220 lít", price: "550,000 đ – 850,000 đ" },
      { name: "Sửa board tủ lạnh > 220 lít", price: "850,000 đ – 1,200,000 đ" },
      { name: "Sửa board tủ lạnh Inverter hoặc side by side", price: "950,000 đ – 1,800,000 đ" },
      { name: "Hàn ống đồng + nạp gas tủ 120 – 140 lít", price: "700,000 đ" },
      { name: "Hàn ống đồng + nạp gas tủ > 140 lít", price: "1,200,000 đ" },
      { name: "Hàn ống đồng + nạp gas tủ > 140 lít (Gas 600A)", price: "1,600,000 đ" },
      { name: "Bộ khởi động block (rơ le + themic + tụ…)", price: "350,000 đ – 550,000 đ" },
      { name: "Thermostat (cảm biến nhiệt độ)", price: "550,000 đ" },
      { name: "Thay ron tủ lạnh (trắng)", price: "270,000 đ/m" },
      { name: "Quạt tủ lạnh cơ", price: "450,000 đ – 650,000 đ" },
      { name: "Quạt tủ lạnh board", price: "900,000 đ – 1,200,000 đ" },
      { name: "Quạt tủ side by side", price: "900,000 đ – 1,200,000 đ" },
      { name: "Hàn dàn + nạp gas tủ mini", price: "700,000 đ" },
      { name: "Thay dàn + nạp gas tủ mini", price: "850,000 đ" },
      { name: "Thay block tủ lạnh < 350 lít", price: "1,200,000 đ – 2,200,000 đ" },
      { name: "Thay block tủ lạnh > 350 lít", price: "2,500,000 đ – 3,500,000 đ" },
      { name: "Thay block tủ lạnh > 550 lít", price: "2,800,000 đ – 4,200,000 đ" },
      { name: "Sơn 2 cánh tủ lạnh thường", price: "600,000 đ – 1,000,000 đ" },
      { name: "Sơn cánh tủ lạnh side by side", price: "1,000,000 đ – 1,500,000 đ" },
      { name: "Vệ sinh tủ lạnh thường", price: "250,000 đ" },
      { name: "Vệ sinh tủ lạnh side by side", price: "450,000 đ" }
    ];

   return (
      <div className="px-4">
         <h1 className="text-[#00528b] font-bold leading-[1.4] text-[20px] sm:text-[24px]">
            Dịch vụ Sửa tủ lạnh tại nhà Điện Máy Xanh
         </h1>
         
         <div className="mt-4">
            <h2 className="text-[#606060] font-bold text-[14px] leading-[1.6]">
                Tại Điện Máy Xanh, chúng tôi cung cấp dịch vụ sửa chữa tủ lạnh nhanh chóng, uy tín và đảm bảo chất lượng. Đội ngũ kỹ thuật viên chuyên nghiệp sẽ giúp bạn xử lý mọi vấn đề của tủ lạnh một cách hiệu quả nhất. Hãy liên hệ ngay để được hỗ trợ!
            </h2>
            
            <CarouselTuLanh/> 
            <div className="max-w-md mx-auto p-6 bg-gray-100 border border-gray-300 rounded-lg my-3 shadow-md text-center">
                  <h2 className="text-xl font-bold text-[#00528b] mb-4">Dịch Vụ Sửa Chữa Tủ Lạnh Điện Máy Xanh</h2>
                  <p className="text-sm text-[#606060] mb-6 leading-relaxed">
                     Điện Máy Xanh cung cấp dịch vụ sửa chữa chuyên nghiệp cho tất cả các hãng tủ lạnh như Samsung, LG, Panasonic, Toshiba và nhiều thương hiệu khác. Đội ngũ kỹ thuật viên tay nghề cao sẽ giúp bạn nhanh chóng khắc phục sự cố, đảm bảo thiết bị hoạt động ổn định và bền lâu.
                  </p>
                  <a href="tel:0862195305" className="px-4 py-2 text-sm font-bold text-white bg-[#00528b] rounded hover:bg-[#004070] transition-colors">
                     Liên Hệ Ngay
                  </a>
               </div>           
            <div className="mt-6">
               <h3 className="text-[#00528b] font-bold text-base text-[18px] leading-[1.4]">Các tình trạng hư hỏng tủ lạnh cần sửa:</h3>
               <ul className="list-disc pl-5 mt-2 text-[#606060]">
                  <li className="mb-2">
                        <strong>Tủ lạnh không lạnh:</strong> Tủ lạnh không làm mát, có thể do hỏng hệ thống làm lạnh, quạt, hoặc rò rỉ gas.
                  </li>
                  <li className="mb-2">
                        <strong>Tủ lạnh kêu to bất thường:</strong> Tiếng ồn lớn phát ra từ tủ lạnh, có thể do vấn đề với quạt gió, máy nén hoặc chân đế bị lệch.
                  </li>
                  <li className="mb-2">
                        <strong>Tủ lạnh bị chảy nước:</strong> Nước rò rỉ từ bên trong hoặc bên ngoài, có thể do tắc nghẽn đường thoát nước hoặc ngăn đông bị đóng đá quá mức.
                  </li>
                  <li className="mb-2">
                        <strong>Tủ lạnh không làm đá:</strong> Chức năng làm đá không hoạt động, nguyên nhân có thể do bộ phận làm đá hoặc van cấp nước gặp sự cố.
                  </li>
                  <li className="mb-2">
                        <strong>Tủ lạnh bị đóng tuyết:</strong> Lớp tuyết dày tích tụ trong ngăn đông, thường là do hỏng bộ phận xả tuyết hoặc rò rỉ khí lạnh.
                  </li>
                  <li className="mb-2">
                        <strong>Tủ lạnh tự động bật tắt:</strong> Tủ lạnh có thể tự động tắt hoặc bật lại, có thể do vấn đề trong hệ thống điện hoặc máy nén quá tải.
                  </li>
               
               </ul>
            </div>

            <div className="my-4">
               <span
                  className="block text-center text-[18px] font-bold mx-auto py-4 px-6 rounded-lg bg-[#0A94D1] text-[#FFF200]  w-full md:w-auto"
               >
                  Mời bạn tham khảo dịch vụ sửa Tủ lạnh tốt nhất tại
                  Điện máy XANH
               </span>
               <div className="grid grid-cols-2 gap-4 mt-4">
               <div key={1} className="bg-white rounded-lg shadow-md p-1">
               <Image
                  src="/images/Quattulanhbikeuto.jpeg"
                  alt="Tủ lạnh không làm đá"
                  className="w-full object-cover rounded-lg mb-2"
                  width={500}
                  height={200}
                  quality={75}
               />
               <span className="text-sm font-semibold">Tủ lạnh không làm đá</span>
               <p className="text-[#606060] text-sm">
                  Chức năng làm đá không hoạt động, nguyên nhân có thể do bộ phận làm đá hoặc van cấp nước gặp sự cố.
               </p>
               </div>

               <div key={2} className="bg-white rounded-lg shadow-md p-1">
               <Image
                  src="/images/tulanhbihu.png"
                  alt="Tủ lạnh kêu to bất thường"
                  className="w-full object-cover rounded-lg mb-2"
                  width={500}
                  height={200}
                  quality={75}
               />
               <span className="text-sm font-semibold">Tủ lạnh kêu to bất thường</span>
               <p className="text-[#606060] text-sm">
                  Tiếng ồn lớn có thể do quạt gió, máy nén hoặc bộ phận khác bị hỏng, ảnh hưởng đến sự thoải mái khi sử dụng.
               </p>
               </div>

               <div key={3} className="bg-white rounded-lg shadow-md p-1">
               <Image
                  src="/images/lam-gi-khi-tu-lanh-bi-dong-nuoc-tuyet-tren-ngan-da-14.jpg"
                  alt="Tủ lạnh bị đóng tuyết"
                  className="w-full object-cover rounded-lg mb-2"
                  width={500}
                  height={200}
                  quality={75}
               />
               <span className="text-sm font-semibold">Tủ lạnh bị đóng tuyết</span>
               <p className="text-[#606060] text-sm">
                  Tuyết đóng dày ở ngăn đông có thể do bộ phận xả tuyết gặp vấn đề, gây hao phí năng lượng và giảm hiệu suất làm lạnh.
               </p>
               </div>

               <div key={4} className="bg-white rounded-lg shadow-md p-1">
               <Image
                  src="/images/tu-lanh-chay-nuoc.jpg"
                  alt="Tủ lạnh chảy nước"
                  className="w-full object-cover rounded-lg mb-2"
                  width={500}
                  height={200}
                  quality={75}
               />
               <span className="text-sm font-semibold">Tủ lạnh chảy nước</span>
               <p className="text-[#606060] text-sm">
                  Tủ lạnh bị chảy nước thường do tắc đường thoát nước hoặc ngăn đông quá lạnh, cần xử lý để tránh hỏng hóc thêm.
               </p>
               </div>
            </div>
              


               <h3 className="text-[20px] font-bold mt-4 mb-2.5 leading-[155%]" id="bang-gia">
               <span className="relative text-[72px] leading-[36px] float-left p-2.5 text-[#09c] font-medium mb-2.5">1</span>
                  Bảng giá chung tại dịch vụ của điện máy xanh
               </h3>
               <h4 className="text-[16px] font-bold my-[30px] mb-[18px] mx-auto">Bảng giá sửa Tủ lạnh, linh kiện điện tử tại nhà trọn gói </h4>
               <table className="border border-[#e7e7e7] w-full">
               <tbody>
                  <tr>
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">
                     <strong>Dịch vụ sửa</strong>
                     </td>
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">
                     <strong>Giá</strong>
                     </td>
                  </tr>
                  {services.map((item, index)=>(
                  <tr key={index}>
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">{item.name}</td>
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">{item.price}</td>
                  </tr>
                  ))}
               </tbody>
               </table>
                <h3 className="text-[20px] font-bold mt-10 b-2.5 leading-[155%]" id="chat-luong-dich-vu">
               <span className="relative text-[72px] leading-[36px] float-left p-2.5 text-[#09c] font-medium mb-2.5">2</span>
               Cam kết chất lượng dịch vụ tại Điện máy XANH
            </h3>
            <p className="text-justify text-[16px] mb-2.5 block text-[#333] leading-[155%] my-3">Cam kết chất lượng dịch vụ tại  Điện máy XANH
            Khi thực hiện dịch vụ sửa tủ lạnh,  Điện máy XANH cam kết thực hiện đúng và đầy đủ các tiêu chí sau:</p>
            <ul className="list-disc pl-5">
               <li>
                  <strong>Đúng hẹn:</strong>  Điện máy XANH cam kết kỹ thuật viên sẽ đến nhà quý khách trước thời gian hẹn. Nếu đến trễ, chúng tôi sẽ hoàn tiền cho quý khách hàng 50% chi phí nhân công (tối đa 500.000 đồng).
               </li>
               <li>
                  <strong>Tay nghề giỏi:</strong>  Điện máy XANH đảm bảo chuyên viên kỹ thuật có trình độ chuyên môn cao mang đến chất lượng tốt nhất cho quý khách hàng. Trong trường hợp quý khách không hài lòng về dịch vụ,  Điện máy XANH sẽ gửi quản lý kỹ thuật viên đến làm lại hoàn toàn miễn phí.
               </li>
               <li>
                  <strong>Trung thực:</strong> Trong quá trình thực hiện dịch vụ, nếu như kỹ thuật viên có bất kỳ hành vi gian lận nào thì  Điện máy XANH xin bồi thường 2 lần giá trị gian lận cho quý khách hàng.
               </li>
               <li>
                  <strong>Thân thiện và vui vẻ:</strong> Quý khách chỉ cần thanh toán đúng số tiền trên hóa đơn mà không có nghĩa vụ phải chi trả bất kỳ khoản phí nào thêm cho nhân viên  Điện máy XANH. Nếu quý khách cảm thấy không hài lòng về thái độ và hành vi xin tiền bồi dưỡng của nhân viên, hãy phản ánh ngay cho  Điện máy XANH để chúng tôi kịp thời điều chỉnh.
               </li>
            </ul>
            <div>
            <Image
               src="/images/Thietkechuacoten-730x367.jpg" // Đường dẫn hình ảnh
               alt="" // Nội dung mô tả cho hình ảnh
               className="block mx-auto mt-2.5 max-w-full h-auto pb-2.5"
               width={730} // Cung cấp width cho ảnh
               height={367} // Cung cấp height cho ảnh
               quality={75} // Chất lượng ảnh
               />
            </div>
            <p className="text-[15px] text-[#777] text-center w-[calc(100%-15px)] mx-auto leading-[155%]"> Điện máy XANH cam kết đúng hẹn, tay nghề giỏi, trung thực, thân thiện và vui vẻ</p>
               <h3 className="text-[20px] font-bold mt-10 b-2.5 leading-[155%]" id="quy-trinh-dat-lich">
               <span className="relative text-[72px] leading-[36px] float-left p-2.5 text-[#09c] font-medium mb-2.5">3</span>
               Quy trình đặt lịch dịch vụ Sửa tủ lạnh
            </h3>
            <h4 className="text-[16px] font-bold my-[30px] mb-[18px] mx-auto">Hình thức đặt dịch vụ</h4>
            <p className="text-justify text-[16px] mb-2.5 block text-[#333] leading-[155%] my-3">Bạn có thể đặt dịch vụ của Thợ Điện máy XANH thông qua 2 hình thức như sau:</p>
            <ul className="list-disc pl-5">
            <li>
            <Link href="/" className="text-[#167ac6]">
                Thông qua trang web Tại đây
            </Link>
               </li>
               <li>Hotline <a href="tel:0862.195.305" className="text-[#167ac6]">0862.195.305</a></li>
            </ul>
            <div className="mx-auto my-2.5 p-2 border-2 border-[#c3e5f8] rounded-[5px] bg-[#dbedf9] leading-[155%] clear-both text-[16px]">
               <strong>Đặc biệt</strong>: Điện máy XANH chỉ tính thời gian và chi phí lúc đến nhà bạn. Do đó, bạn không cần thanh toán trước và hủy lịch miễn phí nếu chưa có nhu cầu.
            </div>
            <h4 className="text-[16px] font-bold my-[30px] mb-[18px] mx-auto">Quy trình đặt dịch vụ</h4>
            <table className="border border-[#e7e7e7] w-full">
               <tbody>
                  <tr>
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">
                     <strong>Các bước</strong>
                     </td>
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">
                     <strong>Đặt dịch vụ trực tiếp tại Website</strong>
                     </td>                   
                  </tr>
                  <tr>
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">Bước 1</td>
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">Truy cập vào website và chọn dịch vụ muốn sử dụng.</td>
                  </tr>
                  <tr>
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">Bước 2</td>
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">Gọi Trực tiếp tới <i className="text-[#0A94D1]">tổng đài sửa chữa</i> của điện máy xanh<a href="tel:0862195305" className="text-[#09c]"> 0862 195 305</a></td>
                  </tr>
                  <tr>
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">Bước 3</td>
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">chúng tôi xác nhận đơn đặt và gọi lại để xác nhận</td>
                  </tr>
                  <tr>
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">Bước 4</td>
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">Hoàn tất quá trình đặt dịch vụ Nhân viên Điện máy xanh sẽ có mặt sau 30p</td>
                  </tr>
               </tbody>
            </table>
            <h3 className="text-[20px] font-bold mt-4 mb-2.5 leading-[155%]" id="quy-trinh-thanh-toan">
               <span className="relative text-[72px] leading-[36px] float-left p-2.5 text-[#09c] font-medium mb-2.5">4</span>
              Quy trình thanh toán sửa chữa và sửa tủ lạnh
            </h3>
            <p className="text-justify text-[16px] mb-2.5 block text-[#333] leading-[155%] my-3">Sau khi nhân viên kỹ thuật của  Điện máy XANH thực hiện xong quy trình sửa tủ lạnh, bạn sẽ tiến hành thanh toán theo đúng số tiền trên hóa đơn cung cấp dịch vụ. Bạn có thể lựa chọn một trong hai phương thức thanh toán như sau:</p>
            <ul className="list-disc pl-5">
               <li>Thanh toán trực tiếp bằng tiền mặt.</li>
               <li>Thanh toán online Quét mã QR tại nhân viên cung cấp dịch vụ.</li>
            </ul>
            <h3 className="text-[20px] font-bold mt-10 b-2.5 leading-[155%]" id="quy-trinh-bao-hanh">
               <span className="relative text-[72px] leading-[36px] float-left p-2.5 text-[#09c] font-medium mb-2.5">5</span>
               Quy trình Bảo hành sửa tủ lạnh
            </h3>
            <p className="text-justify text-[16px] mb-2.5 block text-[#333] leading-[155%] my-3">Sau khi sử dụng dịch vụ sửa chữa và sửa tủ lạnh, bạn sẽ được Thợ Điện máy XANH bảo hành kỹ thuật lắp đặt trong 30 ngày kể từ lúc hoàn thành đơn hàng  <i className="text-[#0A94D1]">không quá 3 lần/30 ngày</i>. Bảo hành sửa tủ lạnh gồm các hạng mục như sau:</p>
            <ul className="list-disc pl-5">
               <li>Tủ lạnh không làm lạnh hoặc làm lạnh yếu.</li>
               <li>Tiếng ồn lớn bất thường khi tủ lạnh hoạt động.</li>
               <li>Đóng tuyết quá nhiều trong ngăn đá.</li>
               <li>Tủ lạnh bị rò rỉ nước.</li>
               <li>Đèn tủ lạnh không sáng.</li>
            </ul>
            <div>
            <Image
               src="/images/anhtulanhdep.jpg" 
               alt="Ảnh tủ lạnh đẹp" 
               className="block mx-auto mt-2.5 pb-2.5" 
               layout="responsive" 
               width={700} 
               height={467} 
               />
            </div>
            </div>
         </div>
      </div>
   )
}

export default ContentMain;
