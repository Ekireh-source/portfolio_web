import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

function HeroSection() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between p-8 md:p-12 lg:p-16 mx-auto max-w-6xl gap-10 md:gap-16">
      {/* Text Section */}
      <div className="text-center md:text-left flex-1 space-y-4">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">My name is</h1>
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-900">Akol Oscar Benjamin</h1>
        <div className="font-poppins text-lg sm:text-2xl text-gray-700">
          I am a Software Developer &

          <span className="inline-flex ml-2 flex-col h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] sm:h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] overflow-hidden">
            <TypeAnimation
              sequence={[
                "Freelancer", 1000,
                "Gamer", 1000,
                "Creator", 1000,
                "Student", 1000,
    
              ]}
              className="block text-left font-rubik text-lg sm:text-3xl leading-tight text-[#2f7df4]"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center md:justify-end">
        <Image
          src="/heroimage.jpeg" // Replace with your actual image path
          alt="Akol Oscar Benjamin"
          width={300}
          height={300}
          className="rounded-full object-cover w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72"
        />
      </div>
    </div>
  );
}

export default HeroSection;
