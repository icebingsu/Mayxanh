import React from 'react';
import CarouselTiVi from './CarouselTiVi';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const ContentMain = () => {
   const repairItems = [
      {item: "Sửa tivi tại sọc màn hình", price: "450.000 – 980.000đ" },
      {item: "Sửa tivi mất hình", price: "500.000 – 880.000đ" },
      {item: "Sửa tivi tại bị lỗi chồng ảnh", price: "550.000 – 1.280.000đ" },
      {item: "Sửa board mạch tivi", price: "400.000 – 850.000đ" },
      {item: "Sửa tivi bị mất tiếng", price: "580.000 – 980.000đ" },
      {item: "Sửa nguồn", price: "350.000đ" },
      {item: "Sửa cao áp Tivi tại", price: "300.000đ" },
      {item: "Sửa tivi bị bóng mờ", price: "500.000 – 980.000đ" },
      {item: "Sửa tivi tại bị lỗi màu", price: "500.000đ" },
      {item: "Sửa tivi không điều khiển được remote", price: "200.000 – 1.180.000đ" },
      {item: "Sửa tv bị ẩm – chập chờn", price: "400.000 – 980.000đ" },
      {item: "Thay màn hình tv", price: "1.500.000đ" },
      {item: "Sửa tivi bị treo logo", price: "580.000 – 880.000đ" },
      {item: "Sửa board mạch xử lý tv", price: "480.000 – 880.000đ" },
      {item: "Sửa nguồn cao áp Tivi", price: "780.000 – 1.480.000đ" },
      {item: "Sửa tivi tại không xem được youtube", price: "580.000 – 780.000đ" },
      {item: "Sửa tivi bị tiếng rè", price: "380.000 – 780.000đ" },
      {item: "Thay LED tivi", price: "1.380.000 – 1.780.000đ" },
      {item: "Sửa tv không hiển thị đúng màu", price: "880.000 – 1.280.000đ" },
      {item: "Thay mắt thần tivi, bo tín hiệu nhận remote", price: "580.000 – 1.180.000đ" },
      {item: "Sửa board nhận tín hiệu HDMI", price: "680.000 – 980.000đ" },
      {item: "Thay cổng truyền hình cap, kết nối loa", price: "480.000 – 780.000đ" },
      {item: "Sửa tivi bị bongo nilon màn hình", price: "550.000 – 850.000đ" },
      {item: "Thay cap kết nối board", price: "380.000 – 580.000đ" },
      {item: "Thay cap kết nối màn hình", price: "480.000 – 680.000đ" },
      {item: "Sửa tivi tại chỗ sáng chỗ tối", price: "780.000 – 1.480.000đ" },
      {item: "Thay cổng HDMI", price: "1.500.000đ" },
  ];
  

  const modelsContainingIng = [
   { size: "32 INCH", model: "32W674A", price: "1.580.000" },
   { size: "32 INCH", model: "32BX300", price: "2.080.000" },
   { size: "32 INCH", model: "32W610R", price: "2.580.000" },
   { size: "32 INCH", model: "32R600d", price: "1.780.000" },
   { size: "42 INCH", model: "42W674A", price: "2.080.000" },
   { size: "42 INCH", model: "42W700B", price: "2.580.000" },
   { size: "42 INCH", model: "42EX410", price: "3.580.000" },
   { size: "42 INCH", model: "42W804A", price: "4.580.000" },
   { size: "49 INCH", model: "49X8000E", price: "3.580.000" },
   { size: "49 INCH", model: "49X8000D", price: "4.480.000" },
   { size: "49 INCH", model: "49X7500F", price: "5.380.000" },
   { size: "49 INCH", model: "49X7500E", price: "6.580.000" },
   { size: "55 INCH", model: "55X85K", price: "5.080.000" },
   { size: "55 INCH", model: "55X80L", price: "4.580.000" },
   { size: "55 INCH", model: "55X80J", price: "5.580.000" },
   { size: "55 INCH", model: "55X8000E", price: "7.080.000" },
   { size: "65 INCH", model: "65X75K", price: "7.080.000" },
   { size: "65 INCH", model: "65X80K", price: "8.080.000" },
   { size: "65 INCH", model: "65X90K", price: "9.080.000" },
   { size: "65 INCH", model: "65X7000G", price: "12.080.000" },
   { size: "75 INCH", model: "75X90K", price: "9.080.000" },
   { size: "75 INCH", model: "75X85K", price: "10.080.000" },
   { size: "75 INCH", model: "75X800G", price: "9.880.000" },
   { size: "75 INCH", model: "7500H", price: "13.080.000" },
];

const tvs = [
   { size: "32 INCH", model: "32N4300", price: "980.000" },
   { size: "32 INCH", model: "32J4303", price: "1.980.000" },
   { size: "32 INCH", model: "32T4202", price: "1.780.000" },
   { size: "32 INCH", model: "32G55", price: "2.280.000" },
   
   { size: "42 INCH", model: "A42G", price: "1.880.000" },
   { size: "42 INCH", model: "A425G", price: "2.880.000" },
   { size: "42 INCH", model: "A424G", price: "2.580.000" },
   { size: "42 INCH", model: "A426", price: "3.280.000" },
   
   { size: "49 INCH", model: "49NU7100", price: "2.880.000" },
   { size: "49 INCH", model: "49KU6500", price: "3.580.000" },
   { size: "49 INCH", model: "49M5500", price: "2.780.000" },
   { size: "49 INCH", model: "49K5500", price: "3.580.000" },
   
   { size: "55 INCH", model: "55AU7700", price: "3.980.000" },
   { size: "55 INCH", model: "55AU8000", price: "6.580.000" },
   { size: "55 INCH", model: "55AU7002", price: "4.580.000" },
   { size: "55 INCH", model: "55Q60B", price: "5.580.000" },
   
   { size: "65 INCH", model: "65AU8000", price: "7.080.000" },
   { size: "65 INCH", model: "65AU8100", price: "6.080.000" },
   { size: "65 INCH", model: "65Q65B", price: "9.080.000" },
   { size: "65 INCH", model: "65Q70B", price: "11.080.000" },
   
   { size: "75 INCH", model: "75AU7700", price: "9.080.000" },
   { size: "75 INCH", model: "75Q70B", price: "8.080.000" },
   { size: "75 INCH", model: "75Q60B", price: "12.080.000" },
   { size: "75 INCH", model: "75AU7000", price: "10.080.000" },
];
const tiviLG = [
   { size: "32 INCH", model: "32LF582", price: "2.480.000" },
   { size: "32 INCH", model: "32LK312", price: "2.880.000" },
   { size: "32 INCH", model: "32LF510", price: "2.880.000" },
   { size: "32 INCH", model: "32UN880", price: "1.780.000" },
   { size: "42 INCH", model: "42LS4600", price: "3.480.000" },
   { size: "42 INCH", model: "42LB582T", price: "3.580.000" },
   { size: "42 INCH", model: "42LW4500", price: "3.880.000" },
   { size: "42 INCH", model: "42CS460", price: "3.880.000" },
   { size: "49 INCH", model: "49UM", price: "3.880.000" },
   { size: "49 INCH", model: "49UK6340", price: "4.880.000" },
   { size: "49 INCH", model: "49UF640T", price: "4.880.000" },
   { size: "49 INCH", model: "49UH600T", price: "4.880.000" },
   { size: "55 INCH", model: "55UQ7550", price: "7.880.000" },
   { size: "55 INCH", model: "55UQ8000", price: "8.880.000" },
   { size: "55 INCH", model: "55UH650T", price: "4.880.000" },
   { size: "55 INCH", model: "55UP7550", price: "6.880.000" },
   { size: "65 INCH", model: "65UQ7550", price: "7.880.000" },
   { size: "65 INCH", model: "65UQ8000PCS", price: "8.880.000" },
   { size: "65 INCH", model: "65QNED80SQA", price: "9.880.000" },
   { size: "65 INCH", model: "65G2", price: "10.880.000" },
   { size: "75 INCH", model: "75UQ8000", price: "11.880.000" },
   { size: "75 INCH", model: "75UP78", price: "12.880.000" },
   { size: "75 INCH", model: "75UQED80", price: "13.880.000" },
   { size: "75 INCH", model: "75UQ9100", price: "14.880.000" }
];

   return (
      <div className="px-4">
         <h1 className="text-[#00528b] font-bold leading-[1.4] text-[20px] sm:text-[24px]">
            Dịch vụ Sửa ti vi tại nhà Điện Máy Xanh
         </h1>
         
         <div className="mt-4">
            <h2 className="text-[#606060] font-bold text-[14px] leading-[1.6]">
               Sau một thời gian sử dụng, ti vi có thể gặp phải một số vấn đề như màn hình bị hỏng, âm thanh không rõ nét, hoặc lỗi bo mạch. Điện máy XANH xin giới thiệu dịch vụ sửa ti vi ngay tại nhà, 
               áp dụng trên toàn quốc. Chúng tôi cam kết mang lại dịch vụ nhanh chóng và chất lượng. Mời bạn xem chi tiết và đặt lịch ngay hôm nay để ti vi của bạn hoạt động trở lại như mới!
            </h2>
            <CarouselTiVi/>            
            <div className="mt-6">
               <h3 className="text-[#00528b] font-bold text-base text-[18px] leading-[1.4]">Các tình trạng hư hỏng ti vi cần sửa:</h3>
               <ul className="list-disc pl-5 mt-2 text-[#606060]">
                  <li className="mb-2">
                     <strong>Màn hình bị sọc:</strong> Màn hình hiển thị có sọc ngang hoặc dọc, có thể do lỗi phần cứng trong màn hình.
                  </li>
                  <li className="mb-2">
                     <strong>Màn hình tối:</strong> Màn hình không sáng, có thể do hỏng nguồn điện hoặc lỗi trong bảng mạch.
                  </li>
                  <li className="mb-2">
                     <strong>Âm thanh không rõ:</strong> Âm thanh bị rè hoặc không phát ra, có thể do loa bị hỏng hoặc vấn đề trong hệ thống âm thanh.
                  </li>
                  <li className="mb-2">
                     <strong>Ti vi tự động tắt mở:</strong> Ti vi có thể tự động tắt hoặc bật, đây có thể là dấu hiệu của lỗi trong bo mạch hoặc hiện tượng quá nhiệt.
                  </li>
                  <li className="mb-2">
                     <strong>Lỗi kết nối tín hiệu:</strong> Ti vi không nhận tín hiệu từ các cổng HDMI hoặc các cổng kết nối khác, ảnh hưởng đến khả năng xem.
                  </li>
                  <li className="mb-2">
                     <strong>Remote điều khiển không hoạt động:</strong> Remote không nhận tín hiệu từ ti vi, có thể do pin yếu hoặc lỗi trong remote.
                  </li>
               </ul>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="bg-white rounded-lg shadow-md p-1">
                     <Image
                        src="/images/bo-mach.jpg" 
                        alt="Sửa bo mạch ti vi"
                        className="w-full object-cover rounded-lg mb-2"
                        width={300} // Thay đổi chiều rộng phù hợp
                        height={160} // Thay đổi chiều cao phù hợp
                     />
                     <span className="text-sm font-semibold">Sửa bo mạch ti vi</span>
                     <p className="text-[#606060] text-sm">Khắc phục sự cố bo mạch, giúp ti vi hoạt động ổn định.</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-1">
                     <Image
                        src="/images/man-hinh-xoc.jpg"
                        alt="Màn hình bị sọc"
                        className="w-full object-cover rounded-lg mb-2"
                        width={300}
                        height={160}
                     />
                     <span className="text-sm font-semibold">Màn hình bị sọc</span>
                     <p className="text-[#606060] text-sm">Sửa chữa màn hình sọc để trải nghiệm hình ảnh rõ nét hơn.</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-1">
                     <Image
                        src="/images/man-hinh-bi-hu.jpg"
                        alt="Màn hình bị vỡ"
                        className="w-full object-cover rounded-lg mb-2"
                        width={300}
                        height={160}
                     />
                     <span className="text-sm font-semibold">Màn hình bị vỡ</span>
                     <p className="text-[#606060] text-sm">Thay thế màn hình bị vỡ để phục hồi chất lượng hiển thị.</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-1">
                     <Image
                        src="/images/thay-led-man-hinh-ti-vi.jpg"
                        alt="Thay LED ti vi"
                        className="w-full object-cover rounded-lg mb-2"
                        width={300}
                        height={160}
                     />
                     <span className="text-sm font-semibold">Thay LED ti vi</span>
                     <p className="text-[#606060] text-sm">Dịch vụ thay LED mới để đảm bảo độ sáng và chất lượng hình ảnh.</p>
                  </div>
               </div>
            <div className="my-4">
               <span
                  className="block text-center text-[18px] font-bold mx-auto py-4 px-6 rounded-lg bg-gradient-to-b from-[#f89406] to-[#f76b1c] text-white w-full md:w-auto"
               >
                  Mời bạn tham khảo dịch vụ sửa ti vi tốt nhất tại
                  Điện máy XANH
               </span>
             
               <div className="relative overflow-hidden mx-auto my-[15px] text-left inline-block bg-[#dbedf9] border border-[#c7e4f4] rounded-[4px] w-[100%] p-[1.5%]">
                  <div className="shortcode-info text-base">
                     <p className="my-3">Nếu bạn có nhu cầu sửa ti vi nhanh chóng uy tin, uy tín hãy cùng trải nghiệm dịch vụ của  Điện máy XANH nhé!</p>
                     <p><strong>Lợi ích khi đặt dịch vụ sửa ti vi ở  Điện máy XANH </strong></p>
                     <ul className="list-disc list-inside">
                     <li>
                        Hotline miễn phí: 
                        <a href="tel:0862195305" rel="noopener dofollow" className="text-[#4a90e2]">0862.195.305</a>
                     </li>
                     <li>Bảo hành 60 ngày.</li>
                     </ul>
                     <p className="my-3"><strong> Điện máy XANH cam kết</strong></p>
                     <ul className="list-disc list-inside">
                     <li>Không hài lòng - Không tính tiền.</li>
                     <li>Đúng hẹn.</li>
                     <li>Tay nghề giỏi.</li>
                     <li>Trung thực.</li>
                     <li>Thân thiện &amp; vui vẻ️.</li>
                     </ul>
                  </div>
               </div>
               <h3 className="text-[20px] font-bold mt-4 mb-2.5 leading-[155%]" id="bang-gia">
               <span className="relative text-[72px] leading-[36px] float-left p-2.5 text-[#09c] font-medium mb-2.5">1</span>
                  Bảng giá chung tại dịch vụ của điện máy xanh
               </h3>
               <h4 className="text-[16px] font-bold my-[30px] mb-[18px] mx-auto">Bảng giá sửa tivi, linh kiện điện tử tại nhà trọn gói </h4>
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
                  {repairItems.map((item, index)=>(
                  <tr key={index}>
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">{item.item}</td>
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">{item.price}</td>
                  </tr>
                  ))}
               </tbody>
               </table>
               <h4 className="text-[16px] font-bold my-[30px] mb-[18px] mx-auto">Bảng giá thay màn hình tivi Sony</h4>
               <table className="border border-[#e7e7e7] w-full">
               <tbody>
                  <tr>
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">
                     <strong>Kích thươc(INCH)</strong>
                     </td>
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">
                     <strong>Model</strong>
                     </td>
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">
                     <strong>Giá</strong>
                     </td>
                  </tr>
                  {modelsContainingIng.map((item, index)=>(
                  <tr key={index}>
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">{item.size}</td>
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">{item.model}</td>
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">{item.price} đ</td>
                  </tr>
                  ))}
               </tbody>
               </table>
               <h4 className="text-[16px] font-bold my-[30px] mb-[18px] mx-auto">Bảng giá thay màn hình tivi SamSum</h4>
               <table className="border border-[#e7e7e7] w-full">
               <tbody>
                  <tr>
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">
                     <strong>Kích thươc(INCH)</strong>
                     </td>
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">
                     <strong>Model</strong>
                     </td>
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">
                     <strong>Giá</strong>
                     </td>
                  </tr>
                  {tvs.map((item, index)=>(
                  <tr key={index}>
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">{item.size}</td>
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">{item.model}</td>
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">{item.price} đ</td>
                  </tr>
                  ))}
               </tbody>
               </table>
               <h4 className="text-[16px] font-bold my-[30px] mb-[18px] mx-auto">Bảng giá thay màn hình tivi LG</h4>
               <table className="border border-[#e7e7e7] w-full">
               <tbody>
                  <tr>
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">
                     <strong>Kích thươc(INCH)</strong>
                     </td>
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">
                     <strong>Model</strong>
                     </td>
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">
                     <strong>Giá</strong>
                     </td>
                  </tr>
                  {tiviLG.map((item,index)=>(
                  <tr key={index}>
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">{item.size}</td>
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">{item.model}</td>
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">{item.price} đ</td>
                  </tr>
                  ))}
               </tbody>
               </table>
                <h3 className="text-[20px] font-bold mt-10 b-2.5 leading-[155%]" id="chat-luong-dich-vu">
               <span className="relative text-[72px] leading-[36px] float-left p-2.5 text-[#09c] font-medium mb-2.5">2</span>
               Cam kết chất lượng dịch vụ tại Điện máy XANH
            </h3>
            <p className="text-justify text-[16px] mb-2.5 block text-[#333] leading-[155%] my-3">Cam kết chất lượng dịch vụ tại  Điện máy XANH
            Khi thực hiện dịch vụ sửa ti vi,  Điện máy XANH cam kết thực hiện đúng và đầy đủ các tiêu chí sau:</p>
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
                  src="/images/Thietkechuacoten-730x367.jpg" 
                  alt="Hình ảnh thiết kế chưa có tên" 
                  className="block mx-auto mt-2.5 max-w-full h-auto pb-2.5"
                  width={730} 
                  height={367} 
               />
            </div>
            <p className="text-[15px] text-[#777] text-center w-[calc(100%-15px)] mx-auto leading-[155%]"> Điện máy XANH cam kết đúng hẹn, tay nghề giỏi, trung thực, thân thiện và vui vẻ</p>
               <h3 className="text-[20px] font-bold mt-10 b-2.5 leading-[155%]" id="quy-trinh-dat-lich">
               <span className="relative text-[72px] leading-[36px] float-left p-2.5 text-[#09c] font-medium mb-2.5">3</span>
               Quy trình đặt lịch dịch vụ Sửa ti vi
            </h3>
            <h4 className="text-[16px] font-bold my-[30px] mb-[18px] mx-auto">Hình thức đặt dịch vụ</h4>
            <p className="text-justify text-[16px] mb-2.5 block text-[#333] leading-[155%] my-3">Bạn có thể đặt dịch vụ của Thợ Điện máy XANH thông qua 2 hình thức như sau:</p>
            <ul className="list-disc pl-5">
            <li>
               Thông qua trang web <Link href="/" className="text-[#167ac6]">Tại đây</Link>
            </li>
               <li>Hotline <a href="tel:0862195305" className="text-[#167ac6]">0862.195.305</a></li>
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
              Quy trình thanh toán sửa chữa và sửa ti vi
            </h3>
            <p className="text-justify text-[16px] mb-2.5 block text-[#333] leading-[155%] my-3">Sau khi nhân viên kỹ thuật của  Điện máy XANH thực hiện xong quy trình sửa ti vi, bạn sẽ tiến hành thanh toán theo đúng số tiền trên hóa đơn cung cấp dịch vụ. Bạn có thể lựa chọn một trong hai phương thức thanh toán như sau:</p>
            <ul className="list-disc pl-5">
               <li>Thanh toán trực tiếp bằng tiền mặt.</li>
               <li>Thanh toán online Quét mã QR tại nhân viên cung cấp dịch vụ.</li>
            </ul>
            <h3 className="text-[20px] font-bold mt-10 b-2.5 leading-[155%]" id="quy-trinh-bao-hanh">
               <span className="relative text-[72px] leading-[36px] float-left p-2.5 text-[#09c] font-medium mb-2.5">5</span>
               Quy trình Bảo hành sửa ti vi
            </h3>
            <p className="text-justify text-[16px] mb-2.5 block text-[#333] leading-[155%] my-3">Sau khi sử dụng dịch vụ sửa chữa máy lạnh, bạn sẽ được Thợ Điện máy XANH bảo hành kỹ thuật lắp đặt trong 30 ngày kể từ lúc hoàn thành đơn hàng <i className="text-[#0A94D1]">không quá 3 lần/30 ngày</i>. Bảo hành gồm các hạng mục như sau:</p>
            <ul className="list-disc pl-5">
               <li>Ti vi không hiển thị hình ảnh.</li>
               <li>Màn hình bị nhòe, mất màu hoặc sọc ngang dọc.</li>
               <li>Âm thanh không rõ, bị rè hoặc không có tiếng.</li>
               <li>Không nhận tín hiệu từ các cổng kết nối.</li>
            </ul>

            <div>
                  <Image
                     src="/images/anh-ti-vi-dep.png" 
                     alt="ảnh ti vi đẹp" 
                     className="block mx-auto mt-2.5 max-w-full h-auto pb-2.5" 
                     width={730} 
                     height={367} 
                  />
            </div>
            <div className="relative overflow-hidden mx-auto my-[15px] text-left inline-block bg-[#dbedf9] border border-[#c7e4f4] rounded-[4px] w-full md:w-[52%] p-[1.5%]">
                 <div className="flex items-center justify-center cursor-pointer" >
                 <h3 className="relative block overflow-hidden text-center cursor-pointer font-bold text-[#333] leading-[1.55] my-[12px]">Xem Thêm cac dịch vụ khác</h3>
                 <ChevronDown size={16} className="ml-3 relative block overflow-hidden text-center cursor-pointer font-bold text-[#333] leading-[1.55] my-[12px]" />
                 </div>
                 <div>
                 <div className="anchor-hd-list">
                  <ul>
                     <li><Link href="/ve-sinh-may-lanh" className="text-[#4a90e2] text-[14px] text-left mt-[5px] mb-0 leading-[1.55] font-normal cursor-pointer block"> 1. vệ sinh máy lạnh </Link></li>
                     <li><Link href="/sua-may-lanh" className="text-[#4a90e2] text-[14px] text-left mt-[5px] mb-0 leading-[1.55] font-normal cursor-pointer block"> 2. sửa máy lạnh </Link></li>
                     <li><Link href="/sua-tu-lanh" className="text-[#4a90e2] text-[14px] text-left mt-[5px] mb-0 leading-[1.55] font-normal cursor-pointer block"> 3. sửa tủ lạnh </Link></li>
                     <li><Link href="/sua-may-giat" className="text-[#4a90e2] text-[14px] text-left mt-[5px] mb-0 leading-[1.55] font-normal cursor-pointer block"> 4. sửa máy giặt </Link></li>
                     <li><Link href="/sua-bep-tu" className="text-[#4a90e2] text-[14px] text-left mt-[5px] mb-0 leading-[1.55] font-normal cursor-pointer block"> 5. sửa bếp từ & lò vi sóng </Link></li>
                  </ul>
                  </div>
                 </div>
            </div>
            </div>
         </div>
      </div>
   )
}

export default ContentMain;
