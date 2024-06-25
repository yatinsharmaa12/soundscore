import Image from "next/image";
import Appbar from "./Components/Appbar";
import Hero from "./Components/Hero";
import Wave from "./Components/Wave/Wave";
import Wave2 from "./Components/Wave/Wave2";

export default function Home() {
  return (
    <main >
      <Appbar/>
      <Hero/>
      <div className="absolute z-10 bottom-0 w-full h-2/5">
      <Wave2/>
      </div>
     

    </main>
  );
}
