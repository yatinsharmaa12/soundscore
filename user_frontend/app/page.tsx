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

      <div className="h-full  w-full fixed z-0 ">
        {/* Content of the middle section */}
        {/* <Hero /> */}
        <Banner/>
      </div>

      {/* <div className="h-3/4 ">

      </div> */}


<div
    className="h-screen w-screen absolute flex flex-col items-center p-4 bg-cover bg-center bg-no-repeat rounded-3xl z-10 top-[80%] mt-36"
    style={{
        backgroundColor:"black", // fallback background color
    }}
    id="upload"
>
    {/* Overlay for better visibility of the Upload component */}
    <div className="bg-[#000000] bg-opacity-80 w-full max-w-3xl p-6 rounded-lg shadow-lg z-20">
        <Upload />
    </div>
</div>



     
      

      {/* <div className=" h-36  bg-gray-200 ">
      <Footer/>
      </div> */}

    </main>
  );
}
