import SubHeading from "@/components/SubHeading";
import React from "react";
import TestimonialImage from "@/assets/women_testimonial.png";
import QuoteIcon from "@/assets/icons/ic_quotes.png";
import Image from "next/image";

const Testimonial = () => {
  return (
    <section className="w-full bg-lightblue my-16">
      <div className="container mx-auto lg:px-16 flex items-center justify-center">
        <div className="flex-1 hidden lg:flex items-center justify-center">
          <Image src={TestimonialImage} alt="testimonial" />
        </div>

        <div className="flex-1 flex flex-col gap-4 px-8 py-8 items-start">
          <SubHeading className="!text-black lg:text-[58px]">
            One of us <span className="!text-primary">says</span>
          </SubHeading>

          <p className="bricolage-grotesque-normal">
            Members of Women4Tech have shared transformative experiences through
            the initiative, especially in its support of women in tech. One key
            testimony from a member highlights how the community has provided
            invaluable resources and mentorship in my area of expertise. This
            platform facilitates connections with industry experts, fostering a
            more inclusive space for women to thrive in the tech sector.
          </p>

          <div className="flex gap-4 justify-between items-center px-4 w-full">
            <div className="flex flex-col gap-2 border-l-primary p-4 border-l-[3px]">
              <p className="text-2xl">Khadijah Mustapha</p>
              <p>Data analyst</p>
            </div>

            <div className="transform rotate-180 scale-x-[-1]">
              <Image src={QuoteIcon} alt="quote" width={150} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
