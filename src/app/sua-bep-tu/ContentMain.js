import React from 'react';
import { PhoneCall } from 'lucide-react';
import CarouselBepTu from './CarouselBepTu';
import Image from 'next/image';
import Link from 'next/link';

const ContentMain = () => {
   const Services = [
      { category: "Sửa Bếp Từ Đơn", price: "120.000đ – 200.000đ" },
      { category: "Sửa Bếp Từ Đôi", price: "250.000đ – 600.000đ" },
      { category: "Sửa Bếp Từ Đơn (Ngoại Nhập)", price: "150.000đ – 300.000đ" },
      { category: "Sửa Bếp Từ Đôi (Ngoại Nhập)", price: "500.000đ – 750.000đ" },
      { category: "Sửa Bếp Hồng Ngoại Đơn", price: "120.000đ – 250.000đ" },
      { category: "Sửa Bếp Hồng Ngoại Đôi", price: "200.000đ – 350.000đ" },
      { category: "Sửa Bếp Hồng Ngoại (Ngoại Nhập)", price: "230.000đ – 550.000đ" },
      { category: "Vệ sinh Bếp Từ Đơn", price: "100.000đ – 150.000đ" },
      { category: "Vệ sinh Bếp Từ Đôi", price: "130.000đ – 200.000đ" },
      { category: "Sửa bếp từ nổ cầu chì", price: "200.000đ – 500.000đ" },
      { category: "Sửa bếp từ không lên nguồn", price: "150.000đ – 500.000đ" },
      { category: "Thay kính bếp từ đơn", price: "700.000 – 1.500.000đ" },
      { category: "Thay kính bếp từ đôi", price: "2.000.000 – 2.400.000đ" },
      { category: "Mạch nguồn bếp từ", price: "150.000 – 550.000đ" },
      { category: "Mâm nhiệt bếp từ", price: "100.000 – 200.000đ" },
      { category: "Quạt tản nhiệt bếp từ", price: "80.000 – 150.000đ" }
  ];
  
    
   return (
      <div className="px-4">
         <h1 className="text-[#00528b] font-bold leading-[1.4] text-[20px] sm:text-[24px]">
            Dịch vụ Sửa Bếp từ tại nhà Điện Máy Xanh
         </h1>
         
         <div className="mt-4">
            <h2 className="text-[#606060] font-bold text-[14px] leading-[1.6]">
               Tại Điện Máy Xanh, chúng tôi cung cấp dịch vụ sửa chữa bếp từ nhanh chóng, uy tín và đảm bảo chất lượng. Đội ngũ kỹ thuật viên chuyên nghiệp sẽ giúp bạn xử lý mọi vấn đề của bếp từ một cách hiệu quả nhất. Hãy liên hệ ngay để được hỗ trợ!
            </h2>
            <CarouselBepTu/> 
            <div className="max-w-md mx-auto p-6 bg-gray-100 border border-gray-300 rounded-lg my-3 shadow-md text-center">
               <h2 className="text-xl font-bold text-[#00528b] mb-4">Dịch Vụ Sửa Chữa Bếp Từ Điện Máy Xanh</h2>
               <p className="text-sm text-[#606060] mb-6 leading-relaxed">
                  Điện Máy Xanh cung cấp dịch vụ sửa chữa chuyên nghiệp cho tất cả các thương hiệu bếp từ như Bosch, Electrolux, Panasonic, và nhiều thương hiệu khác. Đội ngũ kỹ thuật viên tay nghề cao sẽ giúp bạn nhanh chóng khắc phục sự cố, đảm bảo bếp từ hoạt động ổn định và bền lâu.
               </p>
               <a href="tel:0862195305" className="px-4 py-2 text-sm font-bold text-white bg-[#00528b] rounded hover:bg-[#004070] transition-colors">
                  Liên Hệ Ngay
               </a>
            </div>

           
            <div className="mt-6">
               <h3 className="text-[#00528b] font-bold text-base text-[18px] leading-[1.4]" id="cac-loi">Các tình trạng hư hỏng bếp từ cần sửa:</h3>
               <ul className="list-disc pl-5 mt-2 text-[#606060]">
                  <li className="mb-2">
                        <strong>Bếp từ không hoạt động:</strong> Bếp từ không khởi động, có thể do hỏng bo mạch, dây nguồn hoặc công tắc khởi động.
                  </li>
                  <li className="mb-2">
                        <strong>Bếp từ không nhận nồi:</strong> Bếp không nhận diện nồi, có thể do nồi không phù hợp (không có đáy từ) hoặc cảm biến nhận diện bị hỏng.
                  </li>
                  <li className="mb-2">
                        <strong>Bếp từ nóng không đều:</strong> Một hoặc nhiều vùng nấu không nóng, có thể do lỗi cảm biến hoặc cuộn dây bị hỏng.
                  </li>
                  <li className="mb-2">
                        <strong>Bếp từ tự động tắt:</strong> Bếp có thể tự động tắt giữa chừng, nguyên nhân có thể do quá nhiệt hoặc lỗi trong hệ thống điện.
                  </li>
                  <li className="mb-2">
                        <strong>Đèn báo lỗi nhấp nháy:</strong> Đèn báo lỗi hiển thị trên bếp, có thể do lỗi hệ thống hoặc vấn đề với nguồn điện.
                  </li>
                  <li className="mb-2">
                        <strong>Bếp từ phát ra tiếng kêu lạ:</strong> Tiếng ồn lạ phát ra khi bếp hoạt động, có thể do các linh kiện bên trong bị hỏng.
                  </li>
               
               </ul>
            </div>



            <div className="my-4">
               <span
                  className="block text-center text-[18px] font-bold mx-auto py-4 px-6 rounded-lg bg-[#0A94D1] text-[#FFF200]  w-full md:w-auto"
               >
                  Mời bạn tham khảo dịch vụ sửa Bếp từ tốt nhất tại
                  Điện máy XANH
               </span>
               <div className="grid grid-cols-2 gap-4 mt-4">
         <div className="bg-white rounded-lg shadow-md p-1">
            <Image
               src="/images/cambiennhiet.jpg" // Sử dụng đường dẫn tuyệt đối hoặc bắt đầu bằng /
               alt="Cảm biến nhiệt"
               className="w-full object-cover rounded-lg mb-2 h-40"
               width={500} // Cung cấp width cho ảnh
               height={200} // Cung cấp height cho ảnh
               quality={75} // Chất lượng ảnh
            />
            <span className="text-sm font-semibold">Cảm biến nhiệt</span>
            <p className="text-[#606060] text-sm">
               Cảm biến nhiệt không hoạt động có thể dẫn đến tình trạng bếp không nấu được. Cần kiểm tra và thay thế kịp thời để đảm bảo hiệu suất.
            </p>
         </div>

         <div className="bg-white rounded-lg shadow-md p-1">
            <Image
               src="/images/mat-kinh-co-dau-hieu-nut-vo.jpg"
               alt="Mặt kính bếp từ có dấu hiệu nứt vỡ"
               className="w-full object-cover rounded-lg mb-2 h-40"
               width={500}
               height={200}
               quality={75}
            />
            <span className="text-sm font-semibold">Mặt kính có dấu hiệu nứt vỡ</span>
            <p className="text-[#606060] text-sm">
               Mặt kính bị nứt hoặc vỡ có thể gây nguy hiểm khi sử dụng. Cần thay thế ngay để tránh sự cố và đảm bảo an toàn.
            </p>
         </div>

         <div className="bg-white rounded-lg shadow-md p-1">
            <Image
               src="/images/linhkienBepTu.jpg"
               alt="Linh kiện bếp từ"
               className="w-full object-cover rounded-lg mb-2 h-40"
               width={500}
               height={200}
               quality={75}
            />
            <span className="text-sm font-semibold">Linh kiện bếp từ không hoạt động</span>
            <p className="text-[#606060] text-sm">
               Các linh kiện bên trong bếp từ bị hỏng có thể ảnh hưởng đến khả năng nấu nướng. Cần kiểm tra và sửa chữa để đảm bảo bếp hoạt động hiệu quả.
            </p>
         </div>

         <div className="bg-white rounded-lg shadow-md p-1">
            <Image
               src="/images/baoloieo.jpg"
               alt="Bếp từ báo lỗi"
               className="w-full object-cover rounded-lg mb-2 h-40"
               width={500}
               height={200}
               quality={75}
            />
            <span className="text-sm font-semibold">Bếp từ báo lỗi EO</span>
            <p className="text-[#606060] text-sm">
               Khi bếp từ báo lỗi EO, có thể là do vấn đề với nguồn điện hoặc linh kiện bên trong. Cần được kiểm tra ngay để khắc phục.
            </p>
         </div>
      </div>

               <h3 className="text-[20px] font-bold mt-4 mb-2.5 leading-[155%]" id="bang-gia">
               <span className="relative text-[72px] leading-[36px] float-left p-2.5 text-[#09c] font-medium mb-2.5">1</span>
                  Bảng giá chung tại dịch vụ của điện máy xanh
               </h3>
               <h4 className="text-[16px] font-bold my-[30px] mb-[18px] mx-auto">Bảng giá sửa Bếp từ Cửa trên</h4>
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
                  {Services.map((item, index)=>(
                  <tr key={index}>
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">{item.category}</td>
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
            Khi thực hiện dịch vụ sửa Bếp từ,  Điện máy XANH cam kết thực hiện đúng và đầy đủ các tiêu chí sau:</p>
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
            alt="Mô tả hình ảnh" 
            className="block mx-auto mt-2.5 max-w-full h-auto pb-2.5" 
            width={730}
            height={367} 
            quality={75} 
         />
            </div>
            <p className="text-[15px] text-[#777] text-center w-[calc(100%-15px)] mx-auto leading-[155%]"> Điện máy XANH cam kết đúng hẹn, tay nghề giỏi, trung thực, thân thiện và vui vẻ</p>
               <h3 className="text-[20px] font-bold mt-10 b-2.5 leading-[155%]" id="quy-trinh-dat-lich">
               <span className="relative text-[72px] leading-[36px] float-left p-2.5 text-[#09c] font-medium mb-2.5">3</span>
               Quy trình đặt lịch dịch vụ Sửa Bếp từ
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
              Quy trình thanh toán sửa chữa và sửa Bếp từ
            </h3>
            <p className="text-justify text-[16px] mb-2.5 block text-[#333] leading-[155%] my-3">Sau khi nhân viên kỹ thuật của  Điện máy XANH thực hiện xong quy trình sửa Bếp từ, bạn sẽ tiến hành thanh toán theo đúng số tiền trên hóa đơn cung cấp dịch vụ. Bạn có thể lựa chọn một trong hai phương thức thanh toán như sau:</p>
            <ul className="list-disc pl-5">
               <li>Thanh toán trực tiếp bằng tiền mặt.</li>
               <li>Thanh toán online Quét mã QR tại nhân viên cung cấp dịch vụ.</li>
            </ul>
            <h3 className="text-[20px] font-bold mt-10 b-2.5 leading-[155%]" id="quy-trinh-bao-hanh">
               <span className="relative text-[72px] leading-[36px] float-left p-2.5 text-[#09c] font-medium mb-2.5">5</span>
               Quy trình Bảo hành sửa Bếp từ
            </h3>
            <p className="text-justify text-[16px] mb-2.5 block text-[#333] leading-[155%] my-3">Sau khi sử dụng dịch vụ sửa chữa và sửa Bếp từ, bạn sẽ được Thợ Điện máy XANH bảo hành kỹ thuật lắp đặt trong 30 ngày kể từ lúc hoàn thành đơn hàng  <i className="text-[#0A94D1]">không quá 3 lần/30 ngày</i>. Bảo hành sửa Bếp từ gồm các hạng mục như sau:</p>
            <ul className="list-disc pl-5">
               <li>Bếp từ không hoạt động hoặc hoạt động kém hiệu quả.</li>
               <li>Phát ra tiếng ồn lớn hoặc tiếng kêu lạ trong quá trình nấu.</li>
               <li>Bếp từ có dấu hiệu nóng quá mức trong quá trình sử dụng.</li>
               <li>Có dấu hiệu rò rỉ điện hoặc nước từ bếp từ.</li>
               <li>Đèn báo hiệu trên bếp từ không sáng hoặc không hoạt động đúng cách.</li>
            </ul>

            <div>
            <Image
            src="/images/anhbeptudep.jpg" // Đường dẫn hình ảnh
            alt="Ảnh bếp từ đẹp" // Thêm mô tả cho hình ảnh
            className="block mx-auto mt-2.5 max-w-full h-auto pb-2.5" // Lớp CSS
            width={500} // Chiều rộng cho ảnh
            height={300} // Chiều cao cho ảnh
            quality={75} // Chất lượng ảnh
         />
            </div>
            </div>
         </div>
      </div>
   )
}

export default ContentMain;
