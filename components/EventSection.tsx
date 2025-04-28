import React from "react";
import SubHeading from "./SubHeading";
import Image from "next/image";
import { Button } from "./ui/button";
import EventImage from "@/assets/event_img.png";

const EventSection = () => {
  return (
    <section className="my-50 container mx-auto p-8 lg:px-16 flex flex-col gap-8">
      <SubHeading>Events</SubHeading>

      <div className="w-full p-4 md:px-20 flex items-center justify-around gap-8 flex-col lg:flex-row">
        <div className="flex-1 flex relative">
          <Image
            src={EventImage}
            alt="event image"
            className="object-cover rounded-3xl"
          />
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <p>
            The picture captures a vibrant moment featuring a group of women
            from the recently concluded “TECH LADIES UNITE 2.0” representing not
            just individuals but a collective force driving innovation, breaking
            barriers, and inspiring the next generation of women in technology.
          </p>

          <Button className="w-1/2 bg-white text-primary border border-primary hover:text-white">
            View more
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
