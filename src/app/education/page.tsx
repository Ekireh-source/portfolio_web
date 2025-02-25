import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/badge";
import { Briefcase } from "lucide-react";

const educationPage = () => {
  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 md:px-8">
        <Badge variant="secondary" className="gap-1.5 py-1 ">
          <Briefcase className="h-4 w-4" />
          Education
        </Badge>
        <div className="flex flex-col gap-3">
          <Heading>My Education</Heading>
        </div>
        <div className="w-full h-fit flex flex-col">
          <div className="w-full h-fit flex">
            <FramerWrapper
              y={0}
              x={-100}
              delay={0.35}
              className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base "
            >
              July 2021 - 2025
            </FramerWrapper>
            <FramerWrapper
              y={0}
              x={100}
              delay={0.35}
              className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point"
            >
              <div className="text-2xl font-rubik max-sm:text-xl">
                Bachelor of Electronics and Computer Engineering, <br /> Soroti University
              </div>
              <p className="font-poppins text-base w-full text-primary max-sm:text-xs">
                I hold a Bachelor&apos;s degree in Electronics and Computer Engineering from Soroti University, a reputable institution in Uganda. Throughout my academic journey, I gained a strong foundation in both the theoretical principles and practical applications of computer science and engineering, equipping me with the skills to tackle complex technical challenges and drive innovation in the field.
              </p>
            </FramerWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default educationPage;
