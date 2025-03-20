import React from "react";
import SubHeading from "./SubHeading";
import { FAQData } from "@/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const FAQ = () => {
  return (
    <div className="mt-12 flex flex-col gap-6 items-center justify-center">
      <SubHeading>Some of Our Frequently Asked Questions</SubHeading>
      <Accordion
        type="single"
        collapsible
        className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full items-start"
      >
        {FAQData.map((item, index) => (
          <AccordionItem
            key={index}
            value={item.question}
            className={`bg-lightblue border-none rounded-3xl px-8 py-4 w-full shadow-xs`}
          >
            <AccordionTrigger className="">{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
