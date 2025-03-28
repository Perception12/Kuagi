import React from "react";
import SubHeading from "./SubHeading";
import { Input } from "./ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectContent,
  SelectItem,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { selectData } from "@/data";
import AttachIcon from "@/assets/icons/ic_attach.png";
import Image from "next/image";
import { Button } from "./ui/button";
import { locationData } from "@/data";

const Reachout = () => {
  return (
    <section className="mt-20 flex flex-col gap-6 w-full">
      <SubHeading>Reach out to Kuagi Resources Today!</SubHeading>

      <div className=" bg-lightblue ">
        <div className="container flex flex-col lg:flex-row mx-auto gap-6 w-full p-8 lg:px-16">
          {/* Form */}
          <div className="flex-1 bg-white rounded-3xl p-4 lg:p-8 lg:py-16 flex flex-col gap-8 justify-between">
            <Input type="text" placeholder="Full Name" />
            <Input type="email" placeholder="Email" />
            <Input type="number" placeholder="Phone Number" />
            {/* Select */}
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="How did you hear about us?" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {/* <SelectLabel>Fruits</SelectLabel> */}
                  {selectData.map((item, index) => (
                    <SelectItem value={item} key={index}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Textarea placeholder="Comment or Message" className="h-32" />

            {/* File Input */}
            <div className="flex items-center gap-2 rounded-lg px-2 cursor-pointer">
              <Image alt="attach icon" src={AttachIcon} width={15} />
              <label className="text-gray-500 cursor-pointer">
                Attach files
                <input type="file" className="hidden" />
              </label>
            </div>

            <Button>Submit</Button>
          </div>
          <div className="flex-1 flex flex-col gap-6 items-center justify-stretch">
            <div className="w-full h-[180px] rounded-3xl overflow-hidden">
              <iframe
                src={locationData.maplink}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="w-full h-[50%]">
              <Image
                src={locationData.image}
                alt="location image"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reachout;
