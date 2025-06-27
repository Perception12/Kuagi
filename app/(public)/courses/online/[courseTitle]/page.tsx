"use client";
import React from "react";
import { useParams } from "next/navigation";
import { onlineCourseData } from "@/data";
import { useState, useEffect } from "react";
import type { CourseData } from "@/data";
import SubHeading from "@/components/SubHeading";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import CheckIcon from "@/assets/icons/ic_check_blue.png";

const Page = () => {
  const [courseData, setCourseData] = useState<CourseData | null>(null);
  const params = useParams();

  useEffect(() => {
    const getData = () => {
      const courseTitle = decodeURIComponent(params.courseTitle as string);
      const data =
        onlineCourseData.find((data) => data.topic == courseTitle) || null;
      setCourseData(data);
    };

    getData();
  }, [params.courseTitle]);

  return (
    <section className="mt-6 lg:mt-12 flex flex-col gap-6 w-full">
      {courseData ? (
        <>
          <div className="flex flex-start items-center bg-lightblue justify-between p-8 md:px-16 lg:px-24">
            <div className="flex flex-col items-center lg:items-start gap-6 flex-2">
              <SubHeading className="text-start lg:text-6xl">
                About this course
              </SubHeading>

              <p className="max-w-[580px] text-mediumgrey lg:text-start">
                {courseData.description}
              </p>

              <Button>Enroll For this Course</Button>
            </div>

            <div className="flex-1 hidden lg:flex items-end justify-end">
              <Image
                src={courseData?.image}
                alt="price plans hero image"
                className="w-full"
              />
            </div>
          </div>

          <div className="flex flex-start flex-col lg:flex-row items-center justify-between p-4 md:px-16 lg:px-24">
            {/* Left */}
            <div className="flex-1 flex flex-col gap-4 p-8">
              <h3 className="text-xl font-semibold">
                Why this Course is right for you
              </h3>
              <div className="flex flex-col gap-2 text-mediumgrey">
                {courseData?.benefits.map((benefit, index) => (
                  <span key={index} className="flex gap-2 items-start w-full">
                    <Image src={CheckIcon} alt="check icon" width={18} className="shrink-0" />
                    <p>{benefit}</p>
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-semibold">What we will cover</h3>
              <ul className="grid lg:grid-cols-2 gap-2 text-mediumgrey">
                {courseData?.curriculum.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-black">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Right */}
            <div className=" lg:text-xl flex-1 flex flex-col gap-4 bg-lightblue p-8">
              <div>
                <p className=" text-mediumgrey">Course Duration:</p>
                <p className=" font-bold">{courseData?.duration}</p>
              </div>

              <div>
                <p className=" text-mediumgrey">Class Times:</p>
                <p className=" font-bold">{courseData?.classTime}</p>
              </div>

              <div>
                <p className=" text-mediumgrey">Class Type:</p>
                <p className=" font-bold">{courseData?.classType}</p>
              </div>

              <div>
                <p className=" text-mediumgrey">Installment:</p>
                <p className=" font-bold">{courseData?.installment}</p>
              </div>

              <div>
                <p className=" text-mediumgrey">Tuition:</p>
                <p className="text-2xl lg:text-3xl font-bold text-primary">
                  {courseData?.price}
                </p>
              </div>

              <Button className="mt-auto w-full md:w-fit">
                Enroll for this Course
              </Button>
            </div>
          </div>
        </>
      ) : (
        "Loading..."
      )}
    </section>
  );
};

export default Page;
