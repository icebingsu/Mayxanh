import Content from "./Content";
import MenuSuaMayLanh from "./Menu";

export const metadata = {
   title: "Sửa Máy Lạnh - Điện Máy Xanh",
   description: "Dịch vụ sửa máy lạnh tại nhà chuyên nghiệp với đội ngũ kỹ thuật viên lành nghề.",
   keywords: "sửa máy lạnh, dịch vụ sửa máy lạnh, sửa chữa điện máy"
 };
 
const SuaMayLanh = ()=>{
   return(
      <div className="block md:flex md:w-[1200px] md:m-auto">
         <MenuSuaMayLanh/>
         <Content/>
      </div>
   )
}
export default SuaMayLanh;