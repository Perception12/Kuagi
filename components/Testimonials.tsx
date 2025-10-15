"use client";
import React from "react";
import SubHeading from "./SubHeading";
import Image, { StaticImageData } from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { type CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { PaginationDots } from "./ui/pagination-dots";
import { testimonial_data } from "@/data";

const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className=" container mx-auto my-16 flex flex-col items-center justify-center gap-6 p-8 lg:px-16">
      <SubHeading>Testimonials</SubHeading>

      <div className="flex flex-col gap-8 md:hidden">
        {testimonial_data.map((item, index) => (
          <TestimonialCard
            profile={item.profile}
            name={item.name}
            link={item.youtube_embed_link}
            testimony={item.testimony}
            role={item.role}
            key={index}
          />
        ))}
      </div>

      <div className="bg-lightblue rounded-3xl relative hidden md:block">
        <Carousel
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 9000,
            }),
          ]}
        >
          <CarouselContent>
            {testimonial_data.map((item, index) => (
              <CarouselItem key={index}>
                <TestimonialCard
                  profile={item.profile}
                  name={item.name}
                  testimony={item.testimony}
                  link={item.youtube_embed_link}
                  role={item.role}
                  key={index}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-primary" />
          <CarouselNext className="text-primary" />
        </Carousel>
      </div>
      <PaginationDots
        className="hidden md:block"
        totalSteps={count}
        currentStep={current}
      />
    </section>
  );
};

interface TestimonialCardProps {
  profile: StaticImageData | string;
  name: string;
  link: string;
  role: string;
  testimony: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  profile,
  name,
  link,
  role,
  testimony,
}) => {
  return (
    <>
      {/* Desktop view */}
      <div className="hidden md:flex overflow-x-hidden items-center justify-center gap-2 w-full p-8">
        <div className="relative flex-1 w-full aspect-video">
          <iframe
            src={link}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-lg"
          ></iframe>
        </div>

        <div className="  flex-1 flex flex-col lg:flex-row gap-4 md:p-8 md:px-16 items-center justify-center">
          <div className="rounded-3xl">
            <Image
              src={profile}
              alt={name}
              className="w-24 rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-4 justify-around items-center lg:items-start max-w-[500px]">
            <p className="text-sm md:text-base text-center lg:text-start">
              {testimony}
            </p>

            <h2 className="text-base md:text-2xl font-semibold">{name}</h2>

            <p>{role}</p>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="flex md:hidden overflow-x-hidden items-center justify-center gap-2 w-full p-8">
        <div className="flex flex-col lg:flex-row gap-4 md:p-8 md:px-16 items-center justify-center">
          <div className="rounded-3xl">
            <Image
              src={profile}
              alt={name}
              className="w-24 rounded-full object-cover"
            />
          </div>
          {link && (
            <div className="relative flex-1 w-full aspect-video">
              <iframe
                src={link}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg"
              ></iframe>
            </div>
          )}

          <div className="flex flex-col gap-4 justify-around items-center lg:items-start max-w-[500px]">
            <p className="text-sm md:text-base text-center lg:text-start">
              {testimony}
            </p>

            <h2 className="text-base md:text-2xl font-semibold">{name}</h2>

            <p>{role}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
