import Image from "next/image";
import Appbar from "./Components/Appbar";
import Hero from "./Components/Hero";
import Wave from "./Components/Wave/Wave";
import Wave2 from "./Components/Wave/Wave2";
import UploadImage from "./Components/FileUpload/UploadImage";
import Footer from "./Components/Footer/Footer";

export default function Home() {
  return (
    <main className="flex flex-col h-screen">

      <div className="w-full h-20 ">
        <Appbar />
      </div>

      <div className="flex-1  ">
        {/* Content of the middle section */}
        <Hero />
      </div>

      <div className=" h-36 bg-gray-200 ">
      <Footer/>
      </div>

    </main>
  );
}
