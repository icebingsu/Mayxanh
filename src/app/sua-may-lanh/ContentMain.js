import PopUpNoiDung from "@/components/SuaMayLanh/PopUpNoiDung";
import { ChevronDown } from "lucide-react"
import Image from "next/image";
import Link from 'next/link';
import CarouselSuaMayLanh from "./CarouselSuaMayLanh";
const ContentMain = ()=>{
   const services = [
      { service: "Xử lý chảy nước", capacity: "", unit: " tùy hãng", price: "100.000 – 250.000đ" },
      { service: "Sửa board (Mono)", capacity: "", unit: " tùy hãng", price: "750.000 – 1.350.000đ" },
      { service: "Sửa board (Inverter)", capacity: "", unit: " tùy hãng", price: "1.500.000 – 2.200.000đ" },
      { service: "Sửa nguồn bị hư", capacity: "", unit: " tùy hãng", price: "300.000 – 450.000đ" },
      { service: "Thay terminal nối 3 chân", capacity: "", unit: " tùy hãng", price: "200.000 – 300.000đ" },
      { service: "Thay bộ dây nối 3 chân", capacity: "", unit: " tùy hãng", price: "350.000 – 400.000đ" },
      { service: "Thay tự quạt dàn lạnh", capacity: "", unit: " tùy hãng", price: "400.000 – 520.000đ" },
      { service: "Thay mắt thần", capacity: "", unit: " tùy hãng", price: "350.000 – 650.000đ" },
      { service: "Hút chân không", capacity: "", unit: " tùy hãng", price: "100.000 – 250.000đ" },
      { service: "Nén ni tơ", capacity: "", unit: " tùy hãng", price: "150.000 – 350.000đ" },
      { service: "Thay tụ đề block máy lạnh", capacity: "", unit: " tùy hãng", price: "450.000 – 800.000đ" },
      { service: "Thay remote", capacity: "", unit: " tùy hãng", price: "150.000 – 250.000đ" },
      { service: "Thay động cơ lá đảo", capacity: "", unit: " tùy hãng", price: "450.000 – 800.000đ" },
      { service: "Thay cảm biến", capacity: "", unit: " tùy hãng", price: "450.000 – 750.000đ" },
      { service: "Thay block (mono)", capacity: "", unit: " tùy hãng", price: "1.600.000 – 3.700.000đ" },
      { service: "Thay block (Inverter)", capacity: "", unit: " tùy hãng", price: "2.000.000 – 4.000.000đ" },
      { service: "Thay motor quạt dàn nóng/dàn lạnh (mono)", capacity: "", unit: " tùy hãng", price: "750.000 – 1.700.000đ" },
      { service: "Thay motor quạt dàn nóng/dàn lạnh (inverter)", capacity: "", unit: " tùy hãng", price: "1.000.000 – 2.500.000đ" },
  ];

   return (
      <div className="px-4">
      <h1 className="text-[#00528b] font-bold leading-[1.4] text-[20px] sm:text-[24px]">
        Dịch vụ sửa chữa máy lạnh Điện máy XANH
      </h1>
      <div className="mt-4">
        <p className="text-[#606060] font-bold text-[14px] leading-[1.6]">
          Sau một thời gian sử dụng, máy lạnh có thể làm lạnh kém do bám nhiều
          bụi bẩn. vì vậy  <b className="font-bold text-[#3366FF]">Điện máy XANH</b> giới thiệu đến bạn dịch vụ vệ sinh máy lạnh ngay tại nhà, 
           áp dụng trên toàn quốc <br/> và dưới đây là một số tình trạng mà máy lạnh mà nhiều gia đình gặp phải.
        </p>
        <CarouselSuaMayLanh/>   
        <div className="mt-6">
            <h3 className="text-[#00528b] font-bold text-base text-[18px] leading-[1.4]">Các tình trạng hư hỏng máy lạnh cần sửa:</h3>
            <ul className="list-disc pl-5 mt-2 text-[#606060]">
            <li className="mb-2">
               <strong>Máy lạnh không làm lạnh:</strong> Máy lạnh có thể không làm lạnh do <i className="text-[#0A94D1]">hỏng máy nén</i>, <i className="text-[#0A94D1]">cháy tụ điện</i>, hoặc <i className="text-[#0A94D1]">hỏng bo mạch</i>. Khi gặp tình trạng này, cần kiểm tra và sửa chữa ngay để máy hoạt động ổn định và tránh tái diễn sự cố.
            </li>
            <li className="mb-2">
               <strong>Máy lạnh bị hư bo mạch:</strong> Bo mạch hỏng có thể khiến máy không hoạt động, không nhận tín hiệu từ remote, hoặc không điều chỉnh được nhiệt độ. Nguyên nhân thường là do <i className="text-[#0A94D1]">lỗi linh kiện</i> hoặc <i className="text-[#0A94D1]">sự cố điện</i>.
            </li>

            <li className="mb-2">
            <strong>Máy lạnh bị rò rỉ nước:</strong> Máy lạnh bị rò rỉ nước có thể do <i className="text-[#0A94D1]">tắc nghẽn ống dẫn nước</i>, <i className="text-[#0A94D1]">hỏng gioăng cao su</i> hoặc <i className="text-[#0A94D1]">nước ngưng tụ không thoát ra ngoài</i>. Điều này có thể gây ẩm ướt và ảnh hưởng đến hiệu suất của máy lạnh, cần kiểm tra và sửa chữa kịp thời để khắc phục tình trạng này.    
            </li>
            <li className="mb-2">
               <strong>Máy lạnh bị đóng tuyết:</strong> Băng tuyết trên dàn lạnh có thể do <i className="text-[#0A94D1]">thiếu gas</i>, <i className="text-[#0A94D1]">vấn đề lưu thông gió</i>, hoặc <i className="text-[#0A94D1]">lọc gió bẩn</i>. Tình trạng này làm giảm hiệu suất làm lạnh và có thể gây hư hỏng. Cần kiểm tra gas, vệ sinh lọc gió và kiểm tra đường ống dẫn khí để khắc phục.
            </li>
            <li className="mb-2">
    <strong>Máy lạnh tiêu thụ điện cao:</strong> Nếu máy lạnh tiêu thụ điện vượt mức bình thường, nguyên nhân có thể do <i className="text-[#0A94D1]">máy cũ</i> hoặc <i className="text-[#0A94D1]">hỏng block</i>, dẫn đến hiệu suất giảm. Kiểm tra và bảo trì định kỳ để cải thiện hiệu suất sử dụng điện.
</li>

            </ul>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="bg-white rounded-lg shadow-md p-4">
                  <Image
                     src="/images/nguyen-nhan-dan-nong-dieu-hoa-luc-chay-luc-khong-v-1-845x476.jpg"
                     alt="Nguyên nhân dàn nóng không chạy"
                     className="w-full object-cover rounded-lg mb-2"
                     width={300}
                     height={160}
                  />
                  <span className="text-sm font-semibold">Máy lạnh không lạnh</span>
                  <p className="text-[#606060] text-sm">Khắc phục tình trạng máy lạnh không làm mát, giúp duy trì nhiệt độ thoải mái và tiết kiệm năng lượng.</p>
                  </div>

                  <div className="bg-white rounded-lg shadow-md p-4">
                     <Image
                        src="/images/điều-hòa-không-khí-bị-đóng-tuyết-cần-được-làm-sạch..jpg"
                        alt="máy điều hòa bị đóng tuyết"
                        className="w-full object-cover rounded-lg mb-2"
                        width={300} 
                        height={160}
                     />
                     <span className="text-sm font-semibold">Máy lạnh bị đóng tuyết</span>
                     <p className="text-[#606060] text-sm">Khắc phục sự cố bo mạch, giúp ti vi hoạt động ổn định.</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4">
                     <Image
                        src="/images/may-lanh-dieu-hoa-chay-ri-nuoc.jpg"
                        alt="Máy lạnh bị rò rỉ nước"
                        className="w-full object-cover rounded-lg mb-2"
                        width={300}
                        height={160}
                     />
                     <span className="text-sm font-semibold">Máy lạnh bị chảy nước</span>
                     <p className="text-[#606060] text-sm">Sửa chữa màn hình sọc để trải nghiệm hình ảnh rõ nét hơn.</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4">
                     <Image
                        src="/images/sua_board_may_lanh_inverter.jpg"
                        alt="hỉnh ảnh sửa board máy lạnh tại điện máy xanh"
                        className="w-full object-cover rounded-lg mb-2"
                        width={300}
                        height={160}
                     />
                     <span className="text-sm font-semibold">Sủa board Máy lạnh</span>
                     <p className="text-[#606060] text-sm">Thay thế màn hình bị vỡ để phục hồi chất lượng hiển thị.</p>
                  </div>
             
               </div>
       
            <div className="my-4">
            <span href="" className="block text-center text-[18px] font-bold mx-auto py-4 px-6 rounded-lg bg-gradient-to-b from-[#f89406] to-[#f76b1c] text-white w-full md:w-auto">
               Mời bạn tham khảo dịch vụ sửa chữa và vệ sinh máy lạnh tốt nhất tại Điện máy XANH
            </span>
               
               <PopUpNoiDung/>
           
            
         </div>
           
            <h3 className="text-[20px] font-bold mt-4 mb-2.5 leading-[155%]" id="gioi-thieu">
               <span className="relative text-[72px] leading-[36px] float-left p-2.5 text-[#09c] font-medium mb-2.5">1</span>
               Giới thiệu chung về dịch vụ Sửa máy lạnh
            </h3>
           
            <h4 className="text-[16px] font-bold my-[30px] mb-[18px] mx-auto">Dịch vụ sửa máy lạnh</h4>
            <table className="border border-[#e7e7e7] w-full">
               <tbody>
                  <tr>
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">
                     <strong>Phụ tùng thay thế</strong>
                     </td>
                  
                    
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">
                     <strong>Giá</strong>
                     </td>
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">
                     <strong>Ghi chú</strong>
                     </td>
                  </tr>
                  {services.map((item, index) => (
                    <tr key={index}>
                        <td className="border border-[#e7e7e7] mx-auto p-2.5">{item.service}</td>
                        <td className="border border-[#e7e7e7] mx-auto p-2.5">{item.price}</td>
                        <td className="border border-[#e7e7e7] mx-auto p-2.5">{item.unit}</td>
                    </tr>
                ))}
               </tbody>
            </table>
            <h3 className="text-[20px] font-bold mt-10 b-2.5 leading-[155%]" id="chat-luong-dich-vu">
               <span className="relative text-[72px] leading-[36px] float-left p-2.5 text-[#09c] font-medium mb-2.5">2</span>
               Cam kết chất lượng dịch vụ tại Điện máy XANH
            </h3>
            <p className="text-justify text-[16px] mb-2.5 block text-[#333] leading-[155%] my-3">Cam kết chất lượng dịch vụ tại  Điện máy XANH
            Khi thực hiện dịch vụ vệ sinh máy lạnh,  Điện máy XANH cam kết thực hiện đúng và đầy đủ các tiêu chí sau:</p>
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
                  alt="Thợ điện máy xanh chuyên sửa chữa các dịch vụ điện lạnh"
                  className="block mx-auto mt-2.5 max-w-full h-auto pb-2.5"
                  width={730} 
                  height={367} 
                  priority 
               />
            </div>
            <p className="text-[15px] text-[#777] text-center w-[calc(100%-15px)] mx-auto leading-[155%]"> Điện máy XANH cam kết đúng hẹn, tay nghề giỏi, trung thực, thân thiện và vui vẻ</p>
            <h3 className="text-[20px] font-bold mt-10 b-2.5 leading-[155%]" id="quy-trinh-dat-lich">
               <span className="relative text-[72px] leading-[36px] float-left p-2.5 text-[#09c] font-medium mb-2.5">3</span>
               Quy trình đặt lịch dịch vụ sửa máy lạnh
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
              Quy trình thanh toán dịch vụ sửa máy lạnh
            </h3>
            <p className="text-justify text-[16px] mb-2.5 block text-[#333] leading-[155%] my-3">Sau khi nhân viên kỹ thuật của  Điện máy XANH thực hiện xong quy trình sửa máy lạnh, bạn sẽ tiến hành thanh toán theo đúng số tiền trên hóa đơn cung cấp dịch vụ. Bạn có thể lựa chọn một trong hai phương thức thanh toán như sau:</p>
            <ul className="list-disc pl-5">
               <li>Thanh toán trực tiếp bằng tiền mặt.</li>
               <li>Thanh toán online Quét mã QR tại nhân viên cung cấp dịch vụ.</li>
            </ul>
            <h3 className="text-[20px] font-bold mt-10 b-2.5 leading-[155%]" id="quy-trinh-bao-hanh">
               <span className="relative text-[72px] leading-[36px] float-left p-2.5 text-[#09c] font-medium mb-2.5">5</span>
               Quy trình Bảo hành sửa máy lạnh
            </h3>
            <p className="text-justify text-[16px] mb-2.5 block text-[#333] leading-[155%] my-3">Sau khi sử dụng dịch vụ sửa chữa máy lạnh, bạn sẽ được Thợ Điện máy XANH bảo hành kỹ thuật lắp đặt trong 30 ngày kể từ lúc hoàn thành đơn hàng <i className="text-[#0A94D1]">không quá 3 lần/30 ngày</i>. Bảo hành gồm các hạng mục như sau:</p>
            <ul className="list-disc pl-5">
               <li>Bị tắc/tụt ống thoát nước.</li>
               <li>Ống thoát liên kết với máng nước gắn chưa chắc chắn.</li>
               <li>Lắp máng thoát nước chưa vào khớp.</li>
               <li>Không gắn lại rốn xả phụ của máng nước.</li>
            </ul>
            <div>
            <Image
               src="/images/sua-chua-may-lanh(1)-845x633.jpg"
               alt="Hình ảnh sửa chữa máy lạnh"
               className="block mx-auto mt-2.5 max-w-full h-auto pb-2.5"
               width={845} 
               height={633} 
               priority
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
                     <li><Link href="/sua-ti-vi" className="text-[#4a90e2] text-[14px] text-left mt-[5px] mb-0 leading-[1.55] font-normal cursor-pointer block"> 2. sửa ti vi </Link></li>
                     <li><Link href="/sua-tu-lanh" className="text-[#4a90e2] text-[14px] text-left mt-[5px] mb-0 leading-[1.55] font-normal cursor-pointer block"> 3. sửa tủ lạnh </Link></li>
                     <li><Link href="/sua-may-giat" className="text-[#4a90e2] text-[14px] text-left mt-[5px] mb-0 leading-[1.55] font-normal cursor-pointer block"> 4. sửa máy giặt </Link></li>
                     <li><Link href="/sua-bep-tu" className="text-[#4a90e2] text-[14px] text-left mt-[5px] mb-0 leading-[1.55] font-normal cursor-pointer block"> 5. sửa bếp từ & lò vi sóng </Link></li>
                  </ul>
                  </div>
                 </div>
            </div>
            <h3 className="text-justify text-base mb-2.5 block text-gray-800 leading-[155%] my-3">Dưới đây là 1 số hinhg ảnh về dịch vụ sửa chữa điện máy xanh mong rằng bạn sẽ thích khi sử dụng dịch vụ của chúng tôi !</h3>
          
            <div className="gallery-container mx-auto my-10 max-w-5xl">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               <div className="gallery-item overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
                  <Image
                     src="/images/sua-lo-vi-song-limosa.jpg"
                     alt="sửa máy lạnh dàn nóng"
                     className="w-full h-auto"
                     width={845} 
                     height={476} 
                  />
               </div>
               <div className="gallery-item overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
                  <Image
                     src="/images/sua-chua-may-lanh(1)-845x633.jpg"
                     alt="sửa máy lạnh bị tắc nghẽn ống đường thoát"
                     className="w-full h-auto"
                     width={700} 
                     height={467} 
                  />
               </div>
               <div className="gallery-item overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
                  <Image
                     src="/images/sua_board_may_lanh_inverter.jpg"
                     alt="Sửa board máy lạnh"
                     className="w-full h-auto"
                     width={730} 
                     height={487} 
                  />
               </div>
               </div>
            </div>
        </div>
      </div>
   )
}
export default ContentMain