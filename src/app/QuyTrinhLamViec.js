import Head from 'next/head';
import Image from 'next/image';
import {
    BadgeCheck,
    CalendarCheck,
    CheckCheck,
    Cuboid,
    Flame,
    HandHeart,
    Headphones,
    MapPinHouse,
    Phone,
    PhoneCall,
    ShieldCheck,
    Star,
    Truck,
} from 'lucide-react';

const CommitmentItem = ({ icon: Icon, text }) => (
    <div className="col-span-1 p-4 flex items-start min-h-[100px] border border-gray-200 rounded-md shadow-md transition-shadow duration-200 ease-in-out">
        <div className="flex-shrink-0">
            <Icon size={20} strokeWidth={1.75} className="text-[#44A1FA] flex-shrink-0" />
        </div>
        <p className="ml-3 text-sm md:text-base break-words">{text}</p>
    </div>
);

const commitments = [
    { icon: Cuboid, text: "Đổi mới sản phẩm trong vòng 12 tháng nếu phát sinh lỗi kỹ thuật." },
    { icon: ShieldCheck, text: "Bảo hành linh kiện chính hãng lên đến 2 năm." },
    { icon: Truck, text: "Dịch vụ sửa chữa tận nơi, cam kết chất lượng trong vòng 1 ngày." },
    { icon: CheckCheck, text: "Đội ngũ kỹ thuật viên chuyên nghiệp, giàu kinh nghiệm." },
    { icon: CalendarCheck, text: "Chính sách đổi trả linh hoạt trong vòng 30 ngày." },
    { icon: Headphones, text: "Hỗ trợ khách hàng 24/7 qua nhiều kênh khác nhau." },
];

const benefits = [
    'Linh kiện Chính hãng',
    'Bảo hành sửa chữa 2 tháng nếu có lỗi',
    'Kỹ thuật viên có mặt sau 30 phút',
    'Nhân viên thân thiện, phục vụ nhiệt tình',
    'Chi phí sửa chữa từ 200.000đ'
];

const phoneNumbers = ['0862.195.305', '0862.094.102'];

export default function Quytrinh() {
    return (
        <div className="mx-auto md:w-[1200px]">
            <Head>
                <title>Quy trình lắp đặt sửa chữa tại Điện Máy Xanh</title>
                <meta name="description" content="Quy trình lắp đặt sửa chữa dịch vụ tại Điện Máy Xanh." />
            </Head>
            <h2 className="text-[#00528B] font-electroluxVN font-sans font-semibold mt-5 flex items-center justify-center px-4 text-lg md:text-2xl">
                Quy trình lắp đặt sửa chữa tại Điện Máy Xanh
            </h2>
            <div className="flex items-center mt-2">
                <span className="ml-3">
                    <Star size={16} strokeWidth={3} className="text-yellow-500" />
                </span>
                <span className="text-sm ml-3 text-slate-500">4.1 (707 đánh giá)</span>
                <button className="text-blue-500 ml-10 flex items-center">
                    <BadgeCheck size={14} strokeWidth={3} />
                    <span className="ml-2">Xem giá</span>
                </button>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start space-y-5 md:space-y-0 p-5">
                <div className="w-full md:w-1/2 h-auto flex flex-col">
                    <video
                        className="rounded-lg shadow-lg"
                        controls
                        src="/Video/Lắp đặt - Máy lạnh Funiki HIC09TMU.ST3 - Điện máy XANH (1080p, h264, youtube).mp4"
                        title="Funiki Installation Video"
                        loop
                        muted
                        poster="/images/posterVideo.jpg"
                        preload="none"
                        loading="lazy" // Lazy loading
                    >
                        Your browser does not support the video tag.
                    </video>
                    <hr className="mt-4" />
                    <div>
                        <h4 className="block pt-4 text-[#101828] text-lg font-bold mb-4">Điện Máy Xanh cam kết</h4>
                        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                            {commitments.map((commitment, index) => (
                                <CommitmentItem key={index} icon={commitment.icon} text={commitment.text} />
                            ))}
                        </div>
                    </div>
                </div>

                <div id="desc" className="w-full md:w-1/2 space-y-5 md:ml-10">
                    <a href="tel:0862.195.305">
                        <Image
                            src="/images/giam-gia-sua-may-lanh.png"
                            alt="Khuyến mãi sửa máy lạnh"
                            className="w-full rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
                            loading="lazy" 
                            width={600}
                            height={400} 
                        />
                    </a>

                    <div className="bg-[#f75b00] rounded-lg pb-0.5 mb-2.5 relative">
                        <div className="p-3 flex justify-between">
                            <div className="flex">
                                <Flame className="text-[#FFFBBF]" />
                                <div className="flex flex-col">
                                    <span className="text-base font-semibold text-text-desc">Lợi ích khi đặt dịch vụ tại Điện Máy Xanh</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-3 flex justify-between">
                            <div className="bg-white rounded-lg w-full h-full p-2 border border-white">
                                <button className="p-2 bg-white rounded-lg border-[1px] w-full">
                                    <span className="font-medium text-base flex">
                                        <MapPinHouse size={20} strokeWidth={1.25} />
                                        <span className="ml-3 text-[#3680ED]">chọn vị trí của bạn</span>
                                    </span>
                                </button>
                                <div className="rounded-lg border-[1px] w-full p-3 mt-3">
                                    <h2 className="text-[#101828] font-bold flex">
                                        <Flame className="text-[#e2d52a]" />
                                        <span className="ml-3">Lợi ích của khách hàng</span>
                                    </h2>
                                    <span className="text-xs leading-4 mt-1 normal-case">lợi ích có thể bị thay đổi dựa vào dịch vụ</span>
                                    <ul className="mt-3">
                                        {benefits.map((text, index) => (
                                            <li key={index} className="flex mt-5">
                                                <span className="bg-[#44a1fa] inline-block rounded-full text-white text-xs h-4 w-4 leading-4 mt-0.5 text-center float-left">{index + 1}</span>
                                                <span className="text-[#344054] leading-[1.5] text-xs ml-2 font-normal">{text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <hr className="mt-3" />
                                    <span className="mt-3 flex items-center">
                                        <Phone size={16} strokeWidth={1.75} />
                                        <p className="font-normal text-sm ml-3">Gọi ngay cho chúng tôi để được đặt lịch và nhận ưu đãi mới nhất</p>
                                    </span>
                                    <hr className="mt-3" />
                                    <div className="mt-3 flex flex-col md:justify-between ">
                                        {phoneNumbers.map((number, index) => (
                                            <a
                                                key={index}
                                                href={`tel:${number}`}
                                                className={`border-[1px] ${index === 0 ? 'border-[#2F80ED]' : 'border-[#FC7600] bg-[#FC7600]'} flex rounded-md w-48 mt-3`}
                                            >
                                                <div className={`flex justify-center items-center p-3 ${index === 1 ? 'text-[#fff]' : (index === 0 ? 'text-[#333]' : '')}`}>
                                                    <PhoneCall size={20} strokeWidth={1.75} />
                                                    <span className="ml-3">{number}</span>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
