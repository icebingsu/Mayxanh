import Content from "./Content";
import MenuSuaBepTu from "./MenuSuaMayGiat";
export const metadata = {
   title: "Sửa Bếp Từ - Điện Máy Xanh",
   description: "Chúng tôi cung cấp dịch vụ sửa bếp từ tại nhà, khắc phục nhanh chóng mọi sự cố và đảm bảo an toàn cho người sử dụng.",
   keywords: "sửa bếp từ, dịch vụ sửa bếp từ, sửa chữa điện máy"
 };
 
const SuaBepTu = ()=>{
   return (
      <div className="block md:flex md:w-[1200px] md:m-auto">
         <MenuSuaBepTu/>
         <Content/>
      </div>
   )
}
export default SuaBepTu;