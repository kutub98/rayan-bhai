/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React from "react";
import img from "@/app/Assets/khaled1.png";
import { Button } from "@material-tailwind/react";
const About = () => {
  return (
    <div className="customWidth px-8 py-8 items-center rounded shadow bg-[#02eeff33] grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1">
      <div className=" flex justify-center col-span-1">
        <Image src={img} height={375} width={375} alt="RayanBd" />
      </div>
      <div className="px-6 py-6 items-center text-left col-span-2">
        <h1 className="text-2xl font-bold my-2">About me </h1>
        <p className=" text-lg text-gray-700 font-normal my-3">
          I'm Khaled bin Ismail Outside of just being pretty awesome, Currently
          I completed my post graduation from Premier University,
          Chittagong,Bangladesh. Programming is my fashion and it's a dream to
          become a Senior Developer in Bangladesh. Within the 1.5 years I
          already learnt so many technologies with full attention and
          dedication. I already completed Web development Course
        </p>
        <Button className="bg-custom-gradient px-4 py-3 mt-3 rounded hover:bg-white hover:text-cyan-600">
          Download Resume
        </Button>
      </div>
    </div>
  );
};

export default About;
