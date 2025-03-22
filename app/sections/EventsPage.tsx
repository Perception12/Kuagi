import SubHeading from "@/components/SubHeading";
import React from "react";
import { eventData } from "@/data";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Reachout from "@/components/Reachout";
import ScrollReveal from "@/components/ScrollReveal";

const EventsPage = () => {
  return (
    <section className="mt-20 w-full">
      {/* Upcoming Events */}
      <div className="flex flex-col gap-6">
        <ScrollReveal>
          <SubHeading>Upcoming Events</SubHeading>
        </ScrollReveal>

        <div className="bg-lightblue flex flex-col gap-6 p-4 lg:px-24">
          {eventData.upcoming.map((item, index) => (
            <ScrollReveal key={index}>
              <div className="flex gap-4" key={index}>
                <Image
                  src={item.image}
                  alt={item.title}
                  className="object-cover max-w[700px]"
                />
                <div className="flex flex-col gap-4 p-8 py-16 items-start">
                  <SubHeading className="!text-darkergrey">
                    {item.title}
                  </SubHeading>
                  <p className="max-w-sm">{item.description}</p>
                  <Button>Book a ticket</Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Past Events */}
      <div className="flex mt-12 flex-col gap-6">
        <ScrollReveal>
          <SubHeading>Past Events</SubHeading>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid w-full md:grid-cols-2 p-4 lg:px-24 justify-center items-center gap-6">
            {eventData.past.map((item, index) => (
              <div
                className=" w-full flex items-center justify-center"
                key={index}
              >
                <Image
                  src={item.image}
                  alt="past event"
                  className="object-cover max-w[500px]"
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal>
        <Reachout />
      </ScrollReveal>
    </section>
  );
};

export default EventsPage;
