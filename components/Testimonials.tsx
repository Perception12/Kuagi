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
    <section className=" container mx-auto mt-20 flex flex-col items-center justify-center gap-6 p-8 lg:px-16">
      <SubHeading>Testimonials</SubHeading>

      <div className="flex flex-col gap-8 md:hidden">
        {testimonial_data.map((item, index) => (
          <TestimonialCard
            profile={item.profile}
            name={item.name}
            testimony={item.testimony}
            key={index}
          />
        ))}
      </div>

      <div className="bg-lightblue rounded-3xl relative hidden md:block">
        <Carousel
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 4000,
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
                  key={index}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-primary" />
          <CarouselNext className="text-primary" />
        </Carousel>
      </div>
      <PaginationDots className="hidden md:block" totalSteps={count} currentStep={current} />
    </section>
  );
};

interface TestimonialCardProps {
  profile: StaticImageData | string;
  name: string;
  testimony: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  profile,
  name,
  testimony,
}) => {
  return (
    <div className="flex gap-4 md:p-8 md:px-16 items-center justify-center">
      <div className="rounded-3xl">
        <Image src={profile} alt={name} />
      </div>
      <div className="flex flex-col gap-4 justify-around max-w-[500px]">
        <p className="text-sm md:text-base">{testimony}</p>
        <h2 className="text-base md:text-2xl text-primary font-semibold">{name}</h2>
      </div>
    </div>
  );
};

export default Testimonials;
