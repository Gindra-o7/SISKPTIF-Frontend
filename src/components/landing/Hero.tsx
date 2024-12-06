import React from "react";
import { Button } from "flowbite-react";
import PicHero from "../../assets/hero.svg";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
    return (
        <div
            id="home"
            className="pt-52 bg-neutral-lighter"
        >
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Sistem Informasi Seminar Kerja Praktik Teknik Informatika
                        </h1>
                        <p className="text-lg text-gray-600 mb-8">
                            Platform digital untuk mendaftar dan mengelola seminar kerja
                            praktik dengan mudah, cepat, dan efisien.
                        </p>
                        <div className="flex space-x-4">
                            <Button size="xl" color="dark" pill>
                                Pelajari Lebih Lanjut
                            </Button>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex items-center justify-center">
                        <img src={PicHero} alt="Hero" className="w-full"/>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#ffff" fillOpacity={1}
                      d="M0,256L24,250.7C48,245,96,235,144,234.7C192,235,240,245,288,234.7C336,224,384,192,432,197.3C480,203,528,245,576,234.7C624,224,672,160,720,154.7C768,149,816,203,864,229.3C912,256,960,256,1008,250.7C1056,245,1104,235,1152,224C1200,213,1248,203,1296,176C1344,149,1392,107,1416,85.3L1440,64L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
            </svg>
        </div>
    );
};

export default Hero;