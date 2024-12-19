import PopUpAnHienNoiDung from "@/components/VeSinhMayLanh/PopUpAnHienNoiDung";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const ContentMain = () => {
  return (
    <div className="px-4">
      <h1 className="text-[#00528b] font-bold leading-[1.4] text-[20px] sm:text-[24px]">
        Dịch vụ vệ sinh máy lạnh Điện Máy Xanh
      </h1>
      <div className="mt-4">
         <PopUpAnHienNoiDung/>
        <p className="my-4">
            <a
               href="/ve-sinh-may-lanh"
               className="block text-center text-[18px] font-bold mx-auto py-4 px-6 rounded-lg bg-gradient-to-b from-[#f89406] to-[#f76b1c] text-white w-full md:w-auto"
            >
               Mời bạn tham khảo dịch vụ vệ sinh máy lạnh tốt nhất tại
               Điện máy XANH
            </a>
         </p>
         <div className="relative overflow-hidden mx-auto my-[15px] text-left inline-block bg-[#dbedf9] border border-[#c7e4f4] rounded-[4px] w-[100%] p-[1.5%]">
            <div className="shortcode-info text-base">
               <p className="my-3">Nếu bạn có nhu cầu vệ sinh, bảo dưỡng máy lạnh tiện lợi, nhanh chóng, uy tín hãy cùng trải nghiệm dịch vụ vệ sinh máy lạnh của  Điện máy XANH nhé!</p>
               <p><strong>Lợi ích khi đặt dịch vụ vệ sinh máy lạnh ở  Điện máy XANH </strong></p>
               <ul className="list-disc list-inside">
               <li>
                  Hotline miễn phí:  
                  <a href="tel:0862195305" rel="noopener dofollow" className="text-[#4a90e2]"> 0862.195.305</a>
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
         <div className="flex flex-col md:flex-row justify-center gap-5 p-5 bg-gray-100">
            <Image 
                src="/images/cach-ve-sinh-may-lanh-9.jpg" 
                alt="Vệ sinh máy lạnh" 
                width={288}
                height={162}
                className="rounded-lg shadow-md" 
            />
            <Image 
                src="/images/ve-sinh-cuc-nong.jpg" 
                alt="Vệ sinh cục nóng máy lạnh" 
                width={288} 
                height={162} 
                className="rounded-lg shadow-md" 
            />
            </div>


         <h3 className="text-[20px] font-bold mt-4 mb-2.5 leading-[155%]" id="gioi-thieu">
            <span className="relative text-[72px] leading-[36px] float-left p-2.5 text-[#09c] font-medium mb-2.5">1</span>
            Lợi ích của việc vệ sinh máy lạnh định kỳ
         </h3>
        
         <ul className="intro-list mt-4 pl-6 space-y-3">
            <li>
               <strong>Duy trì hiệu suất và tuổi thọ:</strong> Giúp máy hoạt động hiệu quả và kéo dài tuổi thọ, tránh tích tụ bụi và vi khuẩn.
            </li>
            <li>
               <strong>Khuyến nghị từ các hãng:</strong> Các thương hiệu lớn như Daikin, Panasonic, Mitsubishi, LG khuyên vệ sinh máy từ 3-6 tháng/lần.
            </li>
            <li>
               <strong>Lợi ích của vệ sinh định kỳ:</strong> Tiết kiệm điện năng, giảm nguy cơ hỏng hóc và cải thiện chất lượng không khí.
            </li>
            <li>
               <strong>Dịch vụ chuyên nghiệp:</strong> Đội ngũ kỹ thuật viên giàu kinh nghiệm, quy trình an toàn và thiết bị chuyên dụng.
            </li>
         </ul>

         <div className="mt-6 text-center">
            <p className="text-[16px] mb-4">Bạn có nhu cầu vệ sinh máy lạnh? <br /> Liên hệ để đặt lịch!</p>
            <a href="tel:0862195305" className="bg-[#09c] text-white font-bold py-2 px-6 rounded transition duration-300 hover:bg-blue-700">
               Gọi ngay
            </a>
         </div>



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
        alt="Mô tả về thiết kế chưa có tên"
        className="block mx-auto mt-2.5 max-w-full h-auto pb-2.5"
        width={730} // Chiều rộng hình ảnh
        height={367} // Chiều cao hình ảnh
      />
            </div>
            <p className="text-[15px] text-[#777] text-center w-[calc(100%-15px)] mx-auto leading-[155%]"> Điện máy XANH cam kết đúng hẹn, tay nghề giỏi, trung thực, thân thiện và vui vẻ</p>
            <h3 className="text-[20px] font-bold mt-10 b-2.5 leading-[155%]" id="quy-trinh-dat-lich">
               <span className="relative text-[72px] leading-[36px] float-left p-2.5 text-[#09c] font-medium mb-2.5">3</span>
               Quy trình đặt lịch dịch vụ vệ sinh máy lạnh
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
                     <td className="border border-[#e7e7e7] mx-auto p-2.5">Gọi Trực tiếp tới <i className="text-[#0A94D1]">tổng đài dịch vụ</i> của điện máy xanh<a href="tel:0862195305" className="text-[#09c]"> 0862 195 305</a></td>
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
              Quy trình thanh toán vệ sinh máy lạnh
            </h3>
            <p className="text-justify text-[16px] mb-2.5 block text-[#333] leading-[155%] my-3">Sau khi nhân viên kỹ thuật của  Điện máy XANH thực hiện xong quy trình vệ sinh máy lạnh, bạn sẽ tiến hành thanh toán theo đúng số tiền trên hóa đơn cung cấp dịch vụ. Bạn có thể lựa chọn một trong hai phương thức thanh toán như sau:</p>
            <ul className="list-disc pl-5">
               <li>Thanh toán trực tiếp bằng tiền mặt.</li>
               <li>Thanh toán online Quét mã QR tại nhân viên cung cấp dịch vụ.</li>
            </ul>
            <h3 className="text-[20px] font-bold mt-10 b-2.5 leading-[155%]" id="quy-trinh-bao-hanh">
               <span className="relative text-[72px] leading-[36px] float-left p-2.5 text-[#09c] font-medium mb-2.5">5</span>
               Quy trình Bảo hành vệ sinh máy lạnh
            </h3>
            <p className="text-justify text-[16px] mb-2.5 block text-[#333] leading-[155%] my-3">Sau khi sử dụng dịch vụ  vệ sinh máy lạnh, bạn sẽ được Thợ Điện máy XANH bảo hành kỹ thuật lắp đặt trong 30 ngày kể từ lúc hoàn thành đơn hàng <i className="text-[#0A94D1]">không quá 3 lần/30 ngày</i>. Bảo hành vệ sinh máy lạnh gồm các hạng mục như sau:</p>
            <ul className="list-disc pl-5">
               <li>Bị tắc/tụt ống thoát nước.</li>
               <li>Ống thoát liên kết với máng nước gắn chưa chắc chắn.</li>
               <li>Lắp máng thoát nước chưa vào khớp.</li>
               <li>Không gắn lại rốn xả phụ của máng nước.</li>
            </ul>
          
            <div className="relative overflow-hidden mx-auto my-[15px] text-left inline-block bg-[#dbedf9] border border-[#c7e4f4] rounded-[4px] w-full md:w-[52%] p-[1.5%]">
                 <div className="flex items-center justify-center cursor-pointer" >
                 <h3 className="relative block overflow-hidden text-center cursor-pointer font-bold text-[#333] leading-[1.55] my-[12px]">Xem Thêm cac dịch vụ khác</h3>
                 <ChevronDown size={16} className="ml-3 relative block overflow-hidden text-center cursor-pointer font-bold text-[#333] leading-[1.55] my-[12px]" />
                 </div>
                 <div>
                 <div>
                 <ul>
                     <li><Link href="/sua-may-lanh"className="text-[#4a90e2] text-[14px] text-left mt-[5px] mb-0 leading-[1.55] font-normal cursor-pointer block"> 1. sửa máy lạnh</Link></li>
                     <li><Link href="/sua-ti-vi" className="text-[#4a90e2] text-[14px] text-left mt-[5px] mb-0 leading-[1.55] font-normal cursor-pointer block"> 2. sửa ti vi </Link></li>
                     <li><Link href="/sua-tu-lanh" className="text-[#4a90e2] text-[14px] text-left mt-[5px] mb-0 leading-[1.55] font-normal cursor-pointer block"> 3. sửa tủ lạnh </Link></li>
                     <li><Link href="/sua-may-giat" className="text-[#4a90e2] text-[14px] text-left mt-[5px] mb-0 leading-[1.55] font-normal cursor-pointer block"> 4. sửa máy giặt </Link></li>
                     <li><Link href="/sua-bep-tu" className="text-[#4a90e2] text-[14px] text-left mt-[5px] mb-0 leading-[1.55] font-normal cursor-pointer block"> 5. sửa bếp từ & lò vi sóng </Link></li>
                  </ul>
                  </div>
                 </div>
            </div>
            <p className="text-justify text-base mb-2.5 block text-gray-800 leading-[155%] my-3">Dưới đây là 1 số hình  ảnh về dịch vụ vệ sinh máy lạnh  điện máy xanh mong rằng bạn sẽ thích khi sử dụng dịch vụ của chúng tôi !</p>
            <div className="gallery-container mx-auto my-10 max-w-5xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="gallery-item overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <Image
            src="/images/ve-sinh-may-lanh-tu-1-hp-2-5-hp2-638647769055513960-700x467.jpg" 
            alt="vệ sinh máy lạnh từ 1-hp-2-5-hp2"
            className="w-full h-auto"
            width={700} 
            height={467} 
          />
        </div>
        <div className="gallery-item overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <Image
            src="/images/nhan-biet-may-dieu-hoa-thieu-gas-het-gas-2-730x487.jpg"
            alt="nhận biết máy điều hòa hết gas"
            className="w-full h-auto"
            width={730} // Chiều rộng hình ảnh
            height={487} // Chiều cao hình ảnh
          />
        </div>
        <div className="gallery-item overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <Image
            src="/images/nguyen-nhan-dan-nong-dieu-hoa-luc-chay-luc-khong-v-1-845x476.jpg"
            alt="Nguyên nhân dàn nóng điều hòa lúc chạy lúc không"
            className="w-full h-auto"
            width={845} // Chiều rộng hình ảnh
            height={476} // Chiều cao hình ảnh
          />
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default ContentMain;
