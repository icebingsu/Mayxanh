import Content from "./Content";
import MenuSuaMatGiat from "./MenuSuaMayGiat";
export const metadata = {
   title: "Sửa Máy Giặt - Điện Máy Xanh",
   description: "Dịch vụ sửa máy giặt tại nhà nhanh chóng, chất lượng. Đội ngũ kỹ thuật viên dày dạn kinh nghiệm, bảo đảm máy giặt của bạn hoạt động trở lại trong thời gian ngắn nhất.",
   keywords: "sửa máy giặt, dịch vụ sửa máy giặt, sửa chữa điện máy"
 };
function SuaMayGiat (){
   return (
      <div className="block md:flex md:w-[1200px] md:m-auto">
         <MenuSuaMatGiat/>
         <Content/>
      </div>
   )
}
export default SuaMayGiat;