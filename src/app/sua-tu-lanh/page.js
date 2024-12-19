import Content from "./Content";
import MenuSuaTuLanh from "./MenuSuaTuLanh";
export const metadata = {
   title: "Sửa Tủ Lạnh - Điện Máy Xanh",
   description: "Chúng tôi cung cấp dịch vụ sửa tủ lạnh tại nhà với chất lượng tốt nhất. Đội ngũ kỹ thuật viên sẽ giúp tủ lạnh của bạn hoạt động trở lại như mới.",
   keywords: "sửa tủ lạnh, dịch vụ sửa tủ lạnh, sửa chữa điện máy"
 };
const SuaTuLanh = ()=>{
   return (
      <div className="block md:flex md:w-[1200px] md:m-auto">
         <MenuSuaTuLanh/>
         <Content/>
      </div>
   )
}
export default SuaTuLanh;