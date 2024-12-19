import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 p-6">
      <div className="md:w-[1200px] md:m-auto flex flex-col md:flex-row px-4 py-3 space-y-6 md:space-y-0">
        <div className="md:flex-1 flex flex-col space-y-6 md:space-y-0 md:flex-row md:justify-between">
          <div className="flex-1">
            <h3 className="text-base font-bold">Tổng đài hỗ trợ</h3>
            <ul>
              <li className="text-sm mt-3">
                Liên hệ: <a className="font-semibold text-[#3366FF]" href="tel:0862195305">0862.195.305</a> (8:00 - 21:30)
              </li>
              <li className="text-sm mt-3">
                Khiếu nại: <a className="font-semibold text-[#3366FF]" href="tel:0862195305">0862.195.305</a> (8:00 - 21:30)
              </li>
              <li className="text-sm mt-3">
                Khiếu nại: <a className="font-semibold text-[#3366FF]" href="tel:0862094102">0862.094.102</a> (8:00 - 21:30)
              </li>
            </ul>
          </div>
          <div className="flex-1 md:ml-3">
            <h3 className="text-base font-bold">Về công ty</h3>
            <ul>
              <li className="text-sm mt-3">Giới thiệu công ty (MWG.vn)</li>
              <li className="text-sm mt-3">Tuyển dụng</li>
              <li className="text-sm mt-3">Gửi góp ý, khiếu nại</li>
            </ul>
          </div>
          <div className="flex-2 md:ml-3">
            <h3 className="text-base font-bold">Địa chỉ</h3>
            <ul>
              <li className="text-sm mt-3">Trụ sở chính: Cao ốc A, Ngô Gia Tự, Phường 3, Quận 10, TP HCM</li>
              <li className="text-sm mt-3">Chi nhánh: 69B, Trần Hưng Đạo, Quận 1, TPHCM</li>
              <li className="text-sm mt-3">Chi nhánh: 369D, Phan Văn Trị, Phường 7, Bình Thạnh, TPHCM</li>
              <li className="text-sm mt-3">Chi nhánh: 309 Võ Văn Ngân, Phường Linh Chiểu, Quận Thủ Đức, TPHCM</li>
              <li className="text-sm mt-3">Chi nhánh: 68 Trần Quốc Thảo, Quận 3, TPHCM</li>
            </ul>
          </div>
        </div>
        <div className="md:w-[30%] flex flex-col md:ml-10">
          <h2 className="text-base font-bold">Website cùng tập đoàn</h2>
          <div className="flex flex-wrap mt-2.5">
            {[0, 1, 2, 3, 4, 5, 6].map((_, idx) => (
              <div
                key={idx}
                className="w-20 m-0 mr-2 mb-2 rounded-sm overflow-hidden"
                style={{ borderRadius: '5px' }}
              >
                <i
                  className="inline-block h-6 w-20 align-middle rounded-md"
                  style={{
                    backgroundImage: "url(//cdnv2.tgdd.vn/webmwg/2024/ContentMwg/images/DMX/Global/Desktop/Logo-webmoi-min.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "250px 200px",
                    backgroundPosition: `-${85 * (idx % 3)}px -${90 * Math.floor(idx / 3)}px`,
                    lineHeight: "30px",
                  }}
                ></i>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
