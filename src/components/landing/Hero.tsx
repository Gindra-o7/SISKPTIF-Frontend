import React from "react";
import { Marqueee } from "../Marqueee";
import { Button } from "flowbite-react"
import TypingAnimation from "../ui/typing-animation";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <div id="home" className="pt-20 bg-neutral-lighter">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col justify-center">
            <p className="text-left mb-2">
              {/* Gunakan TypingAnimation dengan ukuran responsif */}
              <TypingAnimation 
                className="text-4xl md:text-6xl font-bold text-black dark:text-white leading-[3rem] md:leading-[5rem] tracking-[-0.02em]" // Ukuran responsif
                text="Sistem Informasi Seminar Kerja Praktik Teknik Informatika"
              />
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-8">
              Platform digital untuk mendaftar dan mengelola seminar kerja
              praktik dengan mudah, cepat, dan efisien.
            </p>
            <div className="flex space-x-4">
              <Button color="light" size="xl" outline>
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 w-full h-70 md:h-[500px] mb-8 md:mb-0 flex items-center justify-center">
            <Marqueee />
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffff"
          fillOpacity={1}
          d="M0,256L24,250.7C48,245,96,235,144,234.7C192,235,240,245,288,234.7C336,224,384,192,432,197.3C480,203,528,245,576,234.7C624,224,672,160,720,154.7C768,149,816,203,864,229.3C912,256,960,256,1008,250.7C1056,245,1104,235,1152,224C1200,213,1248,203,1296,176C1344,149,1392,107,1416,85.3L1440,64L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Hero;
