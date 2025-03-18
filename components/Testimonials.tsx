import React from "react";
import SubHeading from "./SubHeading";
import Profile from "@/assets/profile.png";
import Image, { StaticImageData } from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonial_data = [
  {
    profile: Profile,
    name: "Ryan Olaonipekun",
    testimony:
      "My time using the kuagi resources Co-working space has been nothing but productive, from the level\
             of hospitality to a very conducive atmosphere. \
             This is a recommended spot for your remote jobs. Keep it up Kuagi Resources ✊🏽",
  },
  {
    profile: Profile,
    name: "Jane Doe",
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const Testimonials = () => {
  return (
    <section className="mt-12 flex flex-col items-center justify-center gap-6 md:p-8 md:px-16">
      <SubHeading>Testimonials</SubHeading>

      <div className="bg-lightblue rounded-3xl">
        <Carousel>
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
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
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
    <div className="flex gap-4 p-8 px-16 items-center justify-center">
      <div className="rounded-3xl">
        <Image src={profile} alt={name} />
      </div>
      <div className="flex flex-col gap-4 justify-around max-w-[500px]">
        <p>{testimony}</p>
        <SubHeading>{name}</SubHeading>
      </div>
    </div>
  );
};

export default Testimonials;
