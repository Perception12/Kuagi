import Image from "next/image";
import HeroOptions from "../../components/HeroOptions";
import { heroOptionsData, heroData } from "@/data";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  const handleSlideClick = () => {
    const currentOption = heroOptionsData[currentSlide];
    if (currentOption?.link) {
      router.push(`/${currentOption.link}`);
    }
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    dotsClass: "slick-dots custom-dots",
    // arrows: true,
    customPaging: function (i: number) {
      return (
        <div className="focus:outline-none">
          <HeroOptions
            key={i}
            icon={heroOptionsData[i].icon}
            title={heroOptionsData[i].title}
            link={heroOptionsData[i]?.link}
            icon_width={heroOptionsData[i].icon_width}
            isActive={currentSlide === i}
          />
        </div>
      );
    },
    appendDots: (dots: React.ReactNode) => (
      <div className="">
        <ul className="flex items-center justify-center bg-white rounded-3xl shadow-sm py-6 px-4 lg:px-20 gap-1 md:gap-4  list-none m-0 p-0">
          {dots}
        </ul>
      </div>
    ),
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
  };

  return (
    <section className="px-8 h-[calc(90vh-5rem)] w-full">
      <Slider {...settings} className="relative w-full h-full inset-0">
        {heroData.map((data, index) => (
          <div key={index} className="w-full h-[calc(90vh-8rem)] min-h-full flex relative flex-col items-center justify-center ">
            {/* Background Image and Overlay */}
            <div className="absolute inset-0 w-full ">
              <Image
                alt="background"
                src={data.image}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-primary opacity-75"></div>
            </div>

            {/* Content */}
            <div 
              className="absolute inset-0 z-10 container w-full slider-content cursor-pointer"
              onClick={handleSlideClick}
            >
              <div className="mx-auto flex max-w-5xl flex-col items-center">
                <div className="flex flex-col items-center gap-6 text-center">
                  <p className="text-white lg:text-xl">
                    {data.subheading}
                  </p>

                  <h1 className="mb-6 text-3xl font-bold text-white lg:text-6xl bricolage-grotesque-bold">
                    {data.heading}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Page Options - Positioned to Overlap Image and Background */}
      {/* This section is now handled by customPaging in react-slick */}
    </section>
  );
};

export default Hero;
