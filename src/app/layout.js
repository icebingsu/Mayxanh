import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PhoneNumbers from "./CallButtons";
import DisableActions from "./DisableActions";
export const metadata = {
  title: "Sửa Điện Máy Xanh - Dịch Vụ Sửa Chữa Tại Nhà",
  description: "Chúng tôi cung cấp dịch vụ sửa chữa điện máy tại nhà uy tín và chất lượng, bao gồm sửa điều hòa, sửa máy giặt, sửa bếp từ và nhiều hơn nữa.",
  keywords: "sửa điện máy, sửa điều hòa, sửa máy giặt, sửa bếp từ, dịch vụ sửa chữa tại nhà"
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        <meta httpEquiv="content-type" content="text/html;charset=UTF-8" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="description" content={metadata.description} />
        <meta name="robots" content="index, follow"/>
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </head>
      <body>
        <Header />
        <DisableActions />
        <PhoneNumbers />
        {children}
        <Footer />
      </body>
    </html>
  );
}

