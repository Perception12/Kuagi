"use client"  
import SubHeading from "@/components/SubHeading";
import React, { useState } from "react";
import { motion } from 'framer-motion';
import { eventData } from "@/data";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Reachout from "@/components/Reachout";
import ScrollReveal from "@/components/ScrollReveal";
import Hero from "./Hero";

const Page = () => {
  const [animateCard] = useState({ y: 0, opacity: 1 });
  return (
    <div>
      <Hero />
      <section className="my-8 w-full container mx-auto px-8 lg:px-16 flex flex-col items-center justify-center">
        {/* Upcoming Events */}
        <div className="flex flex-col gap-6">
          <ScrollReveal>
            <SubHeading>Upcoming Events</SubHeading>
          </ScrollReveal>

          <div className="flex flex-col gap-6 p-4 lg:px-24">
            {eventData.upcoming.map((item, index) => (
              <ScrollReveal key={index}>
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-16" key={index}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="object-cover max-w[700px]"
                  />
                  <div className="flex flex-col gap-4 p-8 lg:py-16 justify-center items-center text-center">
                    {/* <SubHeading className="!text-darkergrey">
                      {item.title}
                    </SubHeading> */}
                    <p className="max-w-sm text-center">
                      {item.description}
                    </p>
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
            <motion.div
            animate={animateCard}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="flex flex-col lg:flex-row justify-center items-center flex-wrap pscard-container">
              {eventData.past.map((item, index) => (
                <div key={index} className="flex flex-col lg:flex-row justify-center items-center pscard-list">
                  <div className="pscard-img-wrapper">
                  <Image
                    src={item.image}
                    alt="past event"
                    className="pscard-img"
                    />
                  <motion.div
                  whileHover={{ opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    ease: 'easeInOut',
                    staggerChildren: 0.5,
                  }}
                  className="pscard-content">
                    <p className="text-center p-4 text-white text-lg">{item.description}</p>
                  </motion.div>
                    </div>
                </div>
              ))}
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
      <ScrollReveal>
        <Reachout />
      </ScrollReveal>
    </div>
  );
};

export default Page;
