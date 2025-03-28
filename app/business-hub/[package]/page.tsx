"use client";
import SubHeading from "@/components/SubHeading";
import React from "react";
import { useParams } from "next/navigation";
import { seminarData } from "@/data";
import { useState, useEffect } from "react";
import type { SeminarData } from "@/data";
import CheckIcon from "@/assets/icons/ic_check_fill.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Page = () => {
  const [data, setData] = useState<SeminarData | null>(null);
  const params = useParams();

  useEffect(() => {
    const getData = () => {
      const packageName = decodeURIComponent(params.package as string);
      const data = seminarData.find((data) => data.name == packageName) || null;
      setData(data);
    };

    getData();
  }, [params.package]);

  return (
    <main className="py-8 md:py-32 bg-lightblue">
      {data ? (
        <div className="flex flex-col items-center justify-center gap-8">
          <SubHeading className="text-center max-w-[850px] lg:text-5xl">
            {data.name}
          </SubHeading>
          <p className="max-w-[600px] text-center text-mediumgrey">
            The Kuagi Business Hub is to offer a sustainable solution that
            supports and empower business owners/Startups in Kwara State.
          </p>

          <div className=" container mx-auto p-8 lg:p-16 flex flex-col-reverse lg:flex-row lg:items-start gap-16 lg:text-lg">
            <div className="bg-white p-4 lg:p-12 flex-4 flex flex-col gap-6 rounded-2xl">
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl lg:text-3xl text-primary font-semibold">
                  Course Objectives:
                </h2>
                <p className="text-mediumgrey">
                  Upon the completion of this course, Participants will be able
                  to:
                </p>
                <div className="flex flex-col gap-2">
                  {data.objectives.map((objective, index) => (
                    <div key={index} className="flex gap-2 items-start">
                      <Image src={CheckIcon} alt="icon" className="shrink-0" />
                      {objective}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className=" text-2xl lg:text-3xl text-primary font-semibold">
                  Course Expectations
                </h2>
                <p className="text-mediumgrey">
                  Upon the completion of this course, Participants will be able
                  to:
                </p>

                <p>
                  <b>Attendance Policy: </b>{" "}
                  {data.expectations.attendancePolicy}
                </p>

                <p>
                  <b>Assignments: </b> {data.expectations.assignments}
                </p>

                <p>
                  <b>Projects: </b> {data.expectations.projectDescription}
                </p>

                {data.expectations.projects.map((project, index) => (
                  <span key={index}>
                    Project {index + 1} - {project}
                  </span>
                ))}

                <p>
                  <b>Course Evaluation: </b>{" "}
                  {data.expectations.courseEvaluation}
                </p>

                <p>
                  <b>Late Work: </b> {data.expectations.lateWork}
                </p>

                <p>
                  <b>Grading: </b> {data.expectations.grading}
                </p>
              </div>

              <Button className="mt-auto w-fit">Enroll for this Course</Button>
            </div>

            <div className="flex-3 flex flex-col gap-8 rounded-2xl bg-white p-8 lg:text-xl">
              <div>
                <p className=" text-mediumgrey">Course Duration:</p>
                <p className=" font-bold">{data?.duration}</p>
              </div>

              <div>
                <p className=" text-mediumgrey">Class Type:</p>
                <p className=" font-bold">{data?.classType}</p>
              </div>

              <div>
                <p className=" text-mediumgrey">Installment:</p>
                <p className=" font-bold">{data?.installment}</p>
              </div>

              <div>
                <p className=" text-mediumgrey">Tuition:</p>
                <p className="text-2xl lg:text-3xl font-bold text-primary">
                  {data?.tuition}
                </p>
              </div>

              <Button className=" w-full md:w-fit">
                Enroll for this Course
              </Button>
            </div>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </main>
  );
};

export default Page;
