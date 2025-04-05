import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import SubHeading from "./SubHeading";
import ScrollReveal from "./ScrollReveal";
import WhoWeAre from "@/assets/img_who_we_are.png";


const AboutUs = ({

}) => {
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
            <p>
              Kuagi Resources is a tech community that offers IT Solutions, Tech
              Community Services, Hub and Co-working space and IT Trainings.
            </p>
            <p>
              We are building a vibrant community where people can become better
              at innovation, learn new technologies, meet new people, find
              support, and pursue their passion together.
            </p>
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
