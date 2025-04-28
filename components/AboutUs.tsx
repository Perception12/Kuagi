import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import SubHeading from "./SubHeading";
import ScrollReveal from "./ScrollReveal";
import WhoWeAre from "@/assets/who_we_are.png";

const AboutUs = ({}) => {
  return (
    <div className="w-full my-40 bg-lightgrey flex items-center justify-center">
      <div className="container flex p-8 md:p-16 gap-8 flex-col lg:flex-row items-center">
        <div className="flex-1 flex">
          <ScrollReveal>
            <Image
              src={WhoWeAre}
              alt="who we are Image"
              className="object-cover w-full rounded-2xl"
            />
          </ScrollReveal>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <ScrollReveal>
            <SubHeading className="text-start">Who We Are</SubHeading>
            We are dedicated to empowering innovation and driving
            entrepreneurial growth. Offering cutting-edge tech solutions,
            professional ICT training, and modern coworking space, Kuagi
            Resources is the ultimate launchpad for startups and business owners
            with a strong focus on building MVP solutions, fostering
            empowerment, and nurturing incubation opportunities.
          </ScrollReveal>

          <ScrollReveal>
            <Button className="w-fit">Become a Kuagite</Button>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
