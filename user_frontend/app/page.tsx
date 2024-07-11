import Image from "next/image";
import Appbar from "./Components/Appbar";
import Hero from "./Components/Hero";
import UploadImage from "./Components/FileUpload/UploadImage";
import Footer from "./Components/Footer/Footer";
import Banner from "./Components/Banner/Banner";
import Upload from "./Components/Upload/Upload";

export default function Home() {
  return (
    <main className=" h-screen bg-[]  ">

      <div className="w-full fixed  z-20 ">
        <Appbar />
      </div>

      <div className="h-full  w-full fixed z-5 ">
        {/* Content of the middle section */}
        {/* <Hero /> */}
        <Banner/>
      </div>

      {/* <div className="h-3/4 ">

      </div> */}

      <div className="h-screen w-screen absolute flex flex-col items-center p-4  bg-[#1B1D1E] rounded-3xl z-10 top-[80%] ">
      
      <Upload/>
      

      </div>

     
      

      {/* <div className=" h-36  bg-gray-200 ">
      <Footer/>
      </div> */}

    </main>
  );
}
