import Image from "next/image";
import HeroSec from "./Components/Hero/HeroSec";
import About from "./about/page";

export default function Home() {
  return (
    <div>
      <HeroSec />
      <div className=" my-16">
        <About />
      </div>
    </div>
  );
}
