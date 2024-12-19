import Content from "./content";
import MenuVeSinhMayLanh from "./Menu-Ve-Sinh-May-Lanh";
export const metadata = {
   title: "Vệ Sinh Máy Lạnh - Điện Máy Xanh",
   description: "Dịch vụ vệ sinh máy lạnh chuyên nghiệp, giúp cải thiện hiệu suất hoạt động và tiết kiệm điện năng cho máy lạnh của bạn.",
   keywords: "vệ sinh máy lạnh, dịch vụ vệ sinh máy lạnh, bảo trì máy lạnh"
 };
const VesinhMayLanh = ()=>{
   return (
      <div className="block md:flex md:w-[1200px] md:m-auto">
         <MenuVeSinhMayLanh/>
         <Content/>
      </div>
   )
}
export default VesinhMayLanh;
