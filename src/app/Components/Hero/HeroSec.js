/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@material-tailwind/react";
const HeroSec = () => {
  const animationContainer = useRef(null);

  useEffect(() => {
    const fetchAnimationData = async () => {
      try {
        const response = await fetch("/animate.json");
        if (!response.ok) {
          console.error("Failed to load animation JSON:", response.statusText);
          return;
        }
        const animationData = await response.json();

        if (animationContainer.current) {
          const animationInstance = Lottie.loadAnimation({
            container: animationContainer.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData
          });

          return () => animationInstance.destroy();
        }
      } catch (error) {
        console.error("Error fetching animation JSON:", error);
      }
    };

    fetchAnimationData();
  }, []);

  return (
    <div className="customWidth hero overflow-hidden heroBg  items-center justify-center relative px-8 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 h-96">
      {/* Text Section */}

      <div className=" absolute top-0 left-0 w-full h-full bg-[#ffffffbb]"></div>
      <div className="w-full text-left z-[999]">
        <h1 className="animate-text bg-gradient-to-r from-[#7ecdbf] via-[#02178d] to-[#253633] bg-clip-text text-transparent  text-xl my-2 font-black">
          Hi, WELCOME TO RAYAN BD
        </h1>
        <TypeAnimation
          sequence={[
            "We build  website with PHP",
            1000,
            "We build  website with PHYTON",
            1000,
            "We build  website with LARAVEL",
            1000,
            "We build  website with Mern Stack",
            1000
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
          className="animate-text bg-gradient-to-r from-[#7ecdbf] via-[#02178d] to-[#253633] bg-clip-text text-transparent uppercase lg:text-3xl md:text-2xl text-xl my-2 font-black"
        />

        <p className="text-xl font-normal my-2">
          You're in the Right place. We are here to build <br /> your website
          with catch Eye
        </p>
        <Button className="bg-custom-gradient my-2 hover:bg-red-700 hover:text-white transition">
          Know more
        </Button>
      </div>

      {/* Lottie Animation Container */}
      <div
        ref={animationContainer}
        className="w-full lg:h-96 md:h-80 h-64"
      ></div>
    </div>
  );
};

export default HeroSec;
