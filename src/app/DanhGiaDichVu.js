import Image from 'next/image'; // Chỉ cần import nếu bạn sử dụng hình ảnh
import Link from 'next/link';
import { MessageCircle, ShieldCheck, ShowerHead, StarIcon } from "lucide-react";

export default function DanhGiaDichVu() {
    return (
        <div className="mx-auto my-8 px-4 md:w-[1200px] md:m-auto">
            <h2 className="text-center font-electroluxVN font-sans text-2xl font-semibold mt-5">
                Dịch vụ của chúng tôi như thế nào
            </h2>
            <div className="flex justify-center items-center mt-2">
                <div className="border-t border-yellow-500 w-10 mr-2"></div>
                <StarIcon className="text-yellow-500 w-5 h-5" aria-label="Star Icon" />
                <div className="border-t border-yellow-500 w-10 ml-2"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white shadow-lg rounded-lg p-4">
                    <div className="flex justify-center mb-4">
                        <MessageCircle strokeWidth={1.5} className="text-blue-500 w-12 h-12" aria-label="Message Icon" />
                    </div>
                    <h3 className="text-xl font-semibold text-center">Đánh giá dịch vụ</h3>
                    <p className="text-gray-600 text-center mt-2">&quot;Dịch vụ tuyệt vời, chuyên nghiệp!&quot;</p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-4">
                    <div className="flex justify-center mb-4">
                        <ShowerHead strokeWidth={1.5} className="text-blue-500 w-12 h-12" aria-label="Shower Icon" />
                    </div>
                    <h3 className="text-xl font-semibold text-center">Vệ sinh máy lạnh</h3>
                    <p className="text-gray-600 text-center mt-2">&quot;Máy lạnh sạch sẽ hơn, rất ưng ý!&quot;</p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-4">
                    <div className="flex justify-center mb-4">
                        <ShieldCheck strokeWidth={1.5} className="text-blue-500 w-12 h-12" aria-label="Shield Icon" />
                    </div>
                    <h3 className="text-xl font-semibold text-center">Bảo hành</h3>
                    <p className="text-gray-600 text-center mt-2">&quot;Dịch vụ bảo hành nhanh chóng, rất hài lòng!&quot;</p>
                </div>
            </div>
        </div>
    );
}

