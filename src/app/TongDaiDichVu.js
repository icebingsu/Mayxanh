import Image from 'next/image';
import Link from 'next/link';
import { SquareChevronDown } from "lucide-react";

export default function TongdaiDichvu() {
    return (
        <div className="flex flex-col p-4 bg-gray-100 rounded-lg shadow-lg md:w-[1200px] md:m-auto">
            <div className="flex flex-col md:flex-row items-start justify-between mb-4">
                <div className="flex flex-col">
                    <Image
                        src="/images/cua-hang-dmx.jpg"
                        alt="Nhân viên Điện Máy Xanh"
                        className="w-full md:w-[500px] h-auto"
                        width={500} // Cung cấp chiều rộng
                        height={300} // Cung cấp chiều cao
                    />
                    <Image
                        src="/images/nhan-vien-dmx.jpg"
                        alt="Cửa hàng Điện Máy Xanh"
                        className="w-full md:w-[500px] h-auto mt-3"
                        width={500}
                        height={300}
                    />
                </div>
                <div className="ml-0 md:ml-4 text-gray-800 text-sm flex-1 mt-4 md:mt-0">
                    <h2 className="font-electroluxVN font-sans text-2xl font-semibold text-[#3366FF]">
                        Tổng đài bảo hành và sửa chữa Điện Máy Xanh
                    </h2>
                    <div className="flex text-xl items-center py-5">
                        <SquareChevronDown size={32} strokeWidth={1.75} className="text-[#3366FF]" />
                        <p className="ml-2">Chúng tôi cam kết mang đến dịch vụ sửa chữa và bảo trì tốt nhất.</p>
                    </div>
                    <div className="my-5 border-t border-gray-300" />
                    <div className="mt-5">
                        <p className="text-base">
                        - <i className="text-[#3366FF]">Điện Máy Xanh</i> cung cấp dịch vụ sửa chữa chuyên nghiệp cho các thiết bị gia dụng như máy lạnh, tivi, tủ lạnh, máy giặt và bếp từ. Đội ngũ kỹ thuật viên giàu kinh nghiệm luôn sẵn sàng đáp ứng các yêu cầu sửa chữa, thay thế linh kiện chính hãng và bảo trì định kỳ, đảm bảo thiết bị của bạn hoạt động ổn định.
                        </p>
                    </div>
                    <div className="my-5 border-t border-gray-300" />
                    <div className="mt-5">
                        <p className="text-base">
                        - Quy trình sửa chữa tại Điện Máy Xanh được thực hiện minh bạch và nhanh chóng. Chúng tôi luôn cập nhật tình trạng thiết bị và đưa ra các giải pháp tối ưu, giúp bạn nắm rõ tiến trình sửa chữa và cảm thấy yên tâm khi gửi gắm sản phẩm.
                        </p>
                    </div>
                    <div className="my-5 border-t border-gray-300" />
                    <div className="mt-5">
                        <p className="text-base">
                        - Với cam kết chất lượng, Điện Máy Xanh không chỉ đảm bảo sửa chữa thiết bị tốt nhất mà còn kiểm tra kỹ lưỡng trước khi bàn giao. Đội ngũ kỹ thuật của chúng tôi không ngừng học hỏi và cải tiến để mang đến sự hài lòng và trải nghiệm dịch vụ tốt nhất cho khách hàng.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
