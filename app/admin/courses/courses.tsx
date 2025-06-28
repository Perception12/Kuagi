"use client";
import React from "react";
import { Combobox } from "@/components/admin/Combobox";
import { useState } from "react";
import OnlineCourse from "./online-course";
import PhysicalCourse from "./physical-course";

const courseType = [
  {
    value: "online course",
    label: "Online Course",
  },
  {
    value: "physical course",
    label: "Physical Course",
  },
];

const Courses = () => {
  const [selectedCourseType, setSelectedCourseType] = useState("");
  return (
    <div className="flex flex-col gap-4 bg-white p-8 rounded-md shadow-sm">
      <Combobox
        options={courseType}
        setOption={setSelectedCourseType}
        placeholder="Select course type..."
      />

      {selectedCourseType === "online course" ? <OnlineCourse /> : <PhysicalCourse />}
    </div>
  );
};

export default Courses;
