import Image from 'next/image';
import { StarIcon } from "lucide-react";

export default function ServiceMain() {
    return (
        <div id="service-main" className="mt-5 px-4 md:w-[1200px] md:m-auto">
            <h1 className="text-center font-electroluxVN font-sans text-2xl font-semibold mt-5">
                Ưu đãi Cho khách hàng Điện máy xanh
            </h1>
            <div className="flex justify-center items-center mt-2">
                <div className="border-t border-yellow-500 w-10 mr-2"></div>
                <StarIcon className="text-yellow-500 w-5 h-5" aria-label="Star Icon" />
                <div className="border-t border-yellow-500 w-10 ml-2"></div>
            </div>
            <div className="mx-auto my-8 md:w-[1200px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
                    <ServiceCard 
                        imageSrc="/images/ve-sinh-may-lanh.jpg"
                        imageAlt="Vệ sinh máy lạnh"
                        text="Sạch dàn lạnh - Sạch dàn nóng - Sạch không khí - Giá sốc chỉ 150K, giảm thêm 10% từ 2 máy"
                    />
                    <ServiceCard 
                        imageSrc="/images/sansellcuoituan.jpg"
                        imageAlt="Săn sale cuối tuần"
                        text="Săn sale cuối tuần nhận ưu đãi cuối tuần deal đến 45%"
                    />
                </div>
            </div>
        </div>
    );
}

function ServiceCard({ imageSrc, imageAlt, text }) {
    return (
        <div className="shadow-lg rounded-lg p-4 bg-slate-200 hover:shadow-xl transition-shadow duration-300 w-full">
            <div className="flex justify-center mb-4">
                <Image 
                    src={imageSrc} 
                    alt={imageAlt} 
                    className="rounded-xl" 
                    layout="responsive" 
                    width={500}  
                    height={300} 
                    priority 
                />
            </div>
            <span className="block my-1 text-black px-2 pb-0 font-bold max-h-32 overflow-hidden">
                {text}
            </span>
        </div>
    );
}
