import React from 'react';
import CarouselTuLanh from './CarouselMayGiat';
import { ArrowRight, PhoneCall } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ContentMain = () => {
    const repairServices = [
      { service: "Thay động cơ xả", unit: "Cái", price: "650.000đ – 1.050.000đ" },
      { service: "Thay phao cảm biến", unit: "Cái", price: "550.000đ – 950.000đ" },
      { service: "Thay motor", unit: "Cái", price: "850.000đ – 1.250.000đ" },
      { service: "Thay dây curoa", unit: "Dây", price: "450.000đ – 850.000đ" },
      { service: "Thay vòng bi / bạc đạn", unit: "Cái", price: "300.000đ – 850.000đ" },
      { service: "Thay van cấp nước đơn", unit: "Cái", price: "550.000đ – 950.000đ" },
      { service: "Thay van cấp nước đôi", unit: "Cái", price: "650.000đ – 1.050.000đ" },
      { service: "Thay hộp số", unit: "Cái", price: "650.000đ – 1.050.000đ" },
      { service: "Thay chảng ba", unit: "Cái", price: "1.100.000đ – 1.400.000đ" },
      { service: "Phục hồi ty nhúng", unit: "bộ", price: "550.000đ – 950.000đ" },
      { service: "Dây nguồn máy giặt", unit: "Cái", price: "250.000đ – 350.000đ" },
      { service: "Dây cấp nước", unit: "Cái", price: "250.000đ – 350.000đ" },
      { service: "Ống nước xả", unit: "Cái", price: "250.000đ – 350.000đ" },
      { service: "Sửa board mạch (dòng thường)", unit: "Cái", price: "850.000đ – 1.100.000đ" },
      { service: "Sửa board mạch (dòng inverter)", unit: "Cái", price: "1.100.000đ – 1.600.000đ" },
      { service: "IC nguồn", unit: "Cái", price: "550.000đ – 650.000đ" },
      { service: "Thay moto", unit: "Cái", price: "950.000đ – 1.400.000đ" },
      { service: "Làm đồng máy giặt 5-8kg", unit: "Bộ", price: "950.000đ – 1.200.000đ" },
      { service: "Làm đồng máy giặt 8.5kg -12kg", unit: "Bộ", price: "1.100.000đ – 1.400.000đ" },
      { service: "Thay moto inverter (LG)", unit: "Bộ", price: "1.800.000đ" },
      { service: "Lắp đặt máy giặt", unit: "Bộ", price: "250.000đ – 300.000đ" },
      { service: "Thi công đường ống cấp nước", unit: "Bộ", price: "250.000đ – 400.000đ" },
      { service: "Thay mâm từ", unit: "Bộ", price: "2.250.000đ" }
  ];
  const repairServicesBottom = [
      { service: "Thay động cơ xả", unit: "Cái", price: "850.000đ – 950.000đ" },
      { service: "Thay phao cảm biến", unit: "Cái", price: "750.000đ – 950.000đ" },
      { service: "Thay Motor", unit: "Cái", price: "900.000đ – 1.300.000đ" },
      { service: "Thay Motor inverter", unit: "Cái", price: "1.600.000đ – 2.250.000đ" },
      { service: "Thay dây Curoa", unit: "Dây", price: "750.000đ – 950.000đ" },
      { service: "Thay van cấp nước đôi", unit: "Cái", price: "850.000đ – 1.050.000đ" },
      { service: "Thay chảng ba", unit: "Cái", price: "1.600.000đ – 2.200.000đ" },
      { service: "Phục hồi ty nhún", unit: "Bộ", price: "950.000đ – 1.200.000đ" },
      { service: "Dây nguồn máy giặt", unit: "Cái", price: "350.000đ – 450.000đ" },
      { service: "Dây cấp nước", unit: "Cái", price: "250.000đ – 350.000đ" },
      { service: "Ống nước xả", unit: "Cái", price: "200.000đ – 350.000đ" },
      { service: "Sửa board mạch (dòng thường)", unit: "Cái", price: "1.300.000đ – 1.600.000đ" },
      { service: "Sửa board mạch (dòng inverter)", unit: "Cái", price: "1.400.000đ – 1.900.000đ" },
      { service: "IC nguồn", unit: "Cái", price: "1.300.000đ – 1.600.000đ" },
      { service: "Thay bộ nguồn (dòng inverter)", unit: "Cái", price: "1.650.000đ – 2.550.000đ" },
      { service: "Thay động cơ chuyển động trực tiếp (mâm từ)", unit: "Cái", price: "1.800.000đ – 2.200.000đ" },
      { service: "Làm đồng máy giặt 5-8kg", unit: "Bộ", price: "1.200.000đ – 1.700.000đ" },
      { service: "Làm đồng máy giặt 8.5kg -12kg", unit: "Bộ", price: "1.400.000đ – 1.800.000đ" },
      { service: "Tay nắm cánh cửa", unit: "Cái", price: "850.000đ – 950.000đ" },
      { service: "Công tắc cửa", unit: "Cái", price: "950.000đ – 1.450.000đ" },
      { service: "Thi công đường ống cấp nước", unit: "Bộ", price: "250.000đ – 400.000đ" }
   ];

    
   return (
      <div className="px-4">
         <h1 className="text-[#00528b] font-bold leading-[1.4] text-[20px] sm:text-[24px]">
            Dịch vụ Sửa máy giặt tại nhà Điện Máy Xanh
         </h1>
         
         <div className="mt-4">
            <h2 className="text-[#606060] font-bold text-[14px] leading-[1.6]">
                Tại Điện Máy Xanh, chúng tôi cung cấp dịch vụ sửa chữa máy giặt nhanh chóng, uy tín và đảm bảo chất lượng. Đội ngũ kỹ thuật viên chuyên nghiệp sẽ giúp bạn xử lý mọi vấn đề của máy giặt một cách hiệu quả nhất. Hãy liên hệ ngay để được hỗ trợ!
            </h2>
            
            <CarouselTuLanh/> 
            <div className="max-w-md mx-auto p-6 bg-gray-100 border border-gray-300 rounded-lg my-3 shadow-md text-center">
               <h2 className="text-xl font-bold text-[#00528b] mb-4">Dịch Vụ Sửa Chữa Máy Giặt Điện Máy Xanh</h2>
               <p className="text-sm text-[#606060] mb-6 leading-relaxed">
                  Điện Máy Xanh cung cấp dịch vụ sửa chữa chuyên nghiệp cho tất cả các hãng máy giặt như Samsung, LG, Panasonic, Toshiba và nhiều thương hiệu khác. Đội ngũ kỹ thuật viên tay nghề cao sẽ giúp bạn nhanh chóng khắc phục sự cố, đảm bảo máy giặt hoạt động ổn định và bền lâu.
               </p>
               <a href="tel:0862195305" className="px-4 py-2 text-sm font-bold text-white bg-[#00528b] rounded hover:bg-[#004070] transition-colors">
                  Liên Hệ Ngay
               </a>
            </div>
           
            <div className="mt-6">
               <h3 className="text-[#00528b] font-bold text-base text-[18px] leading-[1.4]" id="cac-loi">Các tình trạng hư hỏng máy giặt cần sửa:</h3>
               <ul className="list-disc pl-5 mt-2 text-[#606060]">
                  <li className="mb-2">
                        <strong>Máy giặt không hoạt động:</strong> Máy giặt không khởi động, có thể do hỏng bo mạch, dây nguồn hoặc công tắc khởi động.
                  </li>
                  <li className="mb-2">
                        <strong>Máy giặt phát ra tiếng kêu lạ:</strong> Tiếng ồn lớn phát ra khi máy hoạt động, có thể do trục hoặc động cơ bị hỏng.
                  </li>
                  <li className="mb-2">
                        <strong>Máy giặt bị rò rỉ nước:</strong> Nước rò rỉ từ máy giặt, có thể do ống thoát nước bị tắc hoặc bị hỏng.
                  </li>
                  <li className="mb-2">
                        <strong>Máy giặt không vắt:</strong> Chức năng vắt không hoạt động, nguyên nhân có thể do bơm nước hỏng hoặc lồng giặt bị mất cân bằng.
                  </li>
                  <li className="mb-2">
                        <strong>Máy giặt bị kẹt chương trình:</strong> Máy không chuyển sang các chế độ giặt khác nhau, có thể do hỏng cảm biến hoặc bảng điều khiển.
                  </li>
                  <li className="mb-2">
                        <strong>Máy giặt tự động tắt:</strong> Máy giặt có thể tự động tắt giữa chừng, có thể do vấn đề trong hệ thống điện hoặc quá tải.
                  </li>
               </ul>
            </div>


            <div className="my-4">
               <span
                  className="block text-center text-[18px] font-bold mx-auto py-4 px-6 rounded-lg bg-[#0A94D1] text-[#FFF200]  w-full md:w-auto"
               >
                  Mời bạn tham khảo dịch vụ sửa Máy giặt tốt nhất tại
                  Điện máy XANH
               </span>
               <div className="grid grid-cols-2 gap-4 mt-4">
      <div className="bg-white rounded-lg shadow-md p-1">
        <Image
          src="/images/camungbiloannut.jpg" // Đường dẫn hình ảnh bắt đầu bằng "/"
          alt="Nút ấn bị loạn"
          className="w-full object-cover rounded-lg mb-2 h-40"
          width={500} // Cung cấp width cho ảnh
          height={200} // Cung cấp height cho ảnh
          quality={75} // Chất lượng ảnh
        />
        <span className="text-sm font-semibold">Nút ấn bị loạn</span>
        <p className="text-[#606060] text-sm">
          Nút ấn không hoạt động hoặc bị kẹt, có thể do bụi bẩn hoặc hỏng bo mạch điều khiển, cần sửa chữa kịp thời.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-1">
        <Image
          src="/images/longgiatkeuto.jpg"
          alt="Lồng giặt kêu to khi vắt"
          className="w-full object-cover rounded-lg mb-2 h-40"
          width={500}
          height={200}
          quality={75}
        />
        <span className="text-sm font-semibold">Lồng giặt kêu to khi vắt</span>
        <p className="text-[#606060] text-sm">
          Tiếng ồn lớn phát ra khi máy giặt đang vắt có thể do lồng giặt mất cân bằng hoặc trục bị hỏng.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-1">
        <Image
          src="/images/bomachbiloi.jpg"
          alt="Bo mạch bị lỗi"
          className="w-full object-cover rounded-lg mb-2 h-40"
          width={500}
          height={200}
          quality={75}
        />
        <span className="text-sm font-semibold">Bo mạch bị lỗi</span>
        <p className="text-[#606060] text-sm">
          Bo mạch hỏng có thể gây ra nhiều sự cố khác nhau, ảnh hưởng đến hiệu suất và khả năng hoạt động của máy giặt.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-1">
        <Image
          src="/images/Kiemtraphancung.jpg"
          alt="Phần cứng máy giặt"
          className="w-full object-cover rounded-lg mb-2 h-40"
          width={500}
          height={200}
          quality={75}
        />
        <span className="text-sm font-semibold">Phần cứng máy giặt</span>
        <p className="text-[#606060] text-sm">
          Nếu máy giặt bị rò rỉ nước, có thể do tắc nghẽn đường ống thoát nước hoặc các linh kiện bị hỏng, cần được kiểm tra ngay.
        </p>
      </div>
    </div>
               <h3 className="text-[20px] font-bold mt-4 mb-2.5 leading-[155%]" id="bang-gia">
               <span className="relative text-[72px] leading-[36px] float-left p-2.5 text-[#09c] font-medium mb-2.5">1</span>
                  Bảng giá chung tại dịch vụ của điện máy xanh
               </h3>
               <h4 className="text-[16px] font-bold my-[30px] mb-[18px] mx-auto">Bảng giá sửa Máy giặt Cửa trên</h4>
               <table className="border border-[#e7e7e7] w-full">
               <tbody>
                  <tr>
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">
                     <strong>Dịch vụ sửa</strong>
                     </td>
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">
                     <strong>Đơn vị</strong>
                     </td>
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">
                     <strong>Giá</strong>
                     </td>
                  </tr>
                  {repairServices.map((item,index)=>(
                  <tr key={index}>
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">{item.service}</td>
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">{item.unit}</td>
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">{item.price}</td>
                  </tr>
                  ))}
               </tbody>
               </table>
               <h4 className="text-[16px] font-bold my-[30px] mb-[18px] mx-auto">Bảng giá sửa Máy giặt Cửa Dưới</h4>
               <table className="border border-[#e7e7e7] w-full">
               <tbody>
                  <tr>
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">
                     <strong>Dịch vụ sửa</strong>
                     </td>
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">
                     <strong>Đơn vị</strong>
                     </td>
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">
                     <strong>Giá</strong>
                     </td>
                  </tr>
                  {repairServicesBottom.map((item,index)=>(
                  <tr key={index}>
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">{item.service}</td>
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">{item.unit}</td>
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
               Khi thực hiện dịch vụ sửa máy giặt,  Điện máy XANH cam kết thực hiện đúng và đầy đủ các tiêu chí sau:</p>
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
               src="/images/Thietkechuacoten-730x367.jpg" // Đường dẫn ảnh bắt đầu bằng "/"
               alt="" // Cung cấp alt phù hợp
               className="block mx-auto mt-2.5 max-w-full h-auto pb-2.5" // Lớp CSS vẫn giữ nguyên
               width={730} // Cung cấp chiều rộng cho ảnh
               height={367} // Cung cấp chiều cao cho ảnh
               quality={75} // Chất lượng ảnh
               />
            </div>
            <p className="text-[15px] text-[#777] text-center w-[calc(100%-15px)] mx-auto leading-[155%]"> Điện máy XANH cam kết đúng hẹn, tay nghề giỏi, trung thực, thân thiện và vui vẻ</p>
               <h3 className="text-[20px] font-bold mt-10 b-2.5 leading-[155%]" id="quy-trinh-dat-lich">
               <span className="relative text-[72px] leading-[36px] float-left p-2.5 text-[#09c] font-medium mb-2.5">3</span>
               Quy trình đặt lịch dịch vụ Sửa máy giặt
            </h3>
            <h4 className="text-[16px] font-bold my-[30px] mb-[18px] mx-auto">Hình thức đặt dịch vụ</h4>
            <p className="text-justify text-[16px] mb-2.5 block text-[#333] leading-[155%] my-3">Bạn có thể đặt dịch vụ của Thợ Điện máy XANH thông qua 2 hình thức như sau:</p>
            <ul className="list-disc pl-5">
            <li>
               Thông qua trang web <Link href="/" className="text-[#167ac6]">Tại đây</Link>
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
              Quy trình thanh toán sửa chữa và sửa máy giặt
            </h3>
            <p className="text-justify text-[16px] mb-2.5 block text-[#333] leading-[155%] my-3">Sau khi nhân viên kỹ thuật của  Điện máy XANH thực hiện xong quy trình sửa máy giặt, bạn sẽ tiến hành thanh toán theo đúng số tiền trên hóa đơn cung cấp dịch vụ. Bạn có thể lựa chọn một trong hai phương thức thanh toán như sau:</p>
            <ul className="list-disc pl-5">
               <li>Thanh toán trực tiếp bằng tiền mặt.</li>
               <li>Thanh toán online Quét mã QR tại nhân viên cung cấp dịch vụ.</li>
            </ul>
            <h3 className="text-[20px] font-bold mt-10 b-2.5 leading-[155%]" id="quy-trinh-bao-hanh">
               <span className="relative text-[72px] leading-[36px] float-left p-2.5 text-[#09c] font-medium mb-2.5">5</span>
               Quy trình Bảo hành sửa máy giặt
            </h3>
            <p className="text-justify text-[16px] mb-2.5 block text-[#333] leading-[155%] my-3">Sau khi sử dụng dịch vụ sửa chữa và sửa máy giặt, bạn sẽ được Thợ Điện máy XANH bảo hành kỹ thuật lắp đặt trong 30 ngày kể từ lúc hoàn thành đơn hàng  <i className="text-[#0A94D1]">không quá 3 lần/30 ngày</i>. Bảo hành sửa máy giặt gồm các hạng mục như sau:</p>
            <ul className="list-disc pl-5">
               <li>Máy giặt không hoạt động hoặc hoạt động kém hiệu quả.</li>
               <li>Phát ra tiếng ồn lớn hoặc tiếng kêu lạ trong quá trình vận hành.</li>
               <li>Máy giặt bị đóng tuyết quá nhiều trong ngăn đông.</li>
               <li>Có dấu hiệu rò rỉ nước từ máy giặt.</li>
               <li>Đèn báo hiệu trên máy giặt không sáng hoặc không hoạt động.</li>
            </ul>
            <div>
               <Image
               src="/images/anhmaygiatdep.jpeg" // Đường dẫn ảnh
               alt="ảnh máy giặt đẹp" // Mô tả hình ảnh
               className="block mx-auto mt-2.5 max-w-full h-auto pb-2.5" // Các lớp CSS
               width={500} // Kích thước chiều rộng
               height={300} // Kích thước chiều cao
               quality={75} // Chất lượng hình ảnh
               />
            </div>
            </div>
         </div>
      </div>
   )
}

export default ContentMain;
