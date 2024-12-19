import Banner from "@/components/HomeFunction/Banner";
import Navigation from "@/components/HomeFunction/Navigation";
import Image from "next/image";
import Dichvu from "./DichVu";
import Quytrinh from "./QuyTrinhLamViec";
import TongdaiDichvu from "./TongDaiDichVu";
import DanhGiaDichVu from "./DanhGiaDichVu";
import ServiceMain from "./ServiceMain";
export default function Home() {
  return (
    <main>
      <Banner/>
      <Navigation/>
      <Dichvu/>
      <Quytrinh />
      <TongdaiDichvu/>
      <DanhGiaDichVu/>
      <ServiceMain/>
    </main>
  );
}
