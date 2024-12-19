import Content from "./Content";
import MenuSuaTiVi from "./MenuSuaTiVi";
export const metadata = {
   title: "Sửa Ti Vi - Điện Máy Xanh",
   description: "Dịch vụ sửa ti vi uy tín với đội ngũ kỹ thuật viên chuyên nghiệp, cam kết khắc phục mọi sự cố ti vi nhanh chóng và hiệu quả.",
   keywords: "sửa ti vi, dịch vụ sửa ti vi, sửa chữa điện máy"
 };
const SuaTiVi = ()=>{
   return (
      <div className="block md:flex md:w-[1200px] md:m-auto">
         <MenuSuaTiVi/>
         <Content/>
      </div>
   )
}
export default SuaTiVi;