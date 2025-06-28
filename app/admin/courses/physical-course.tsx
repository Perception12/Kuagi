"use client";
import React from "react";
import { DataTable } from "@/components/admin/DataTable";
import { courseColumn } from "./columns";
import { Course } from "./columns";
import { physicalCourseData } from "@/data";
import { useState, useEffect } from "react";

function getPhysicalCourses(): Course[] {
  const data: Course[] = [];
  physicalCourseData.forEach((course, idx) =>
    data.push({
      id: `online-course-${idx + 1}`,
      title: course.topic,
      image: course.image,
      duration: course.duration,
      frequency: course.classTime,
      price: course.price,
      status: course.availability ? "available" : "unavailable",
    })
  );

  return data;
}

export default function PhysicalCourse() {
  const [physicalCourses, setPhysicalCourses] = useState<Course[]>([]);
  useEffect(() => {
    const courses = getPhysicalCourses();
    setPhysicalCourses(courses);
  }, []);

  return <DataTable columns={courseColumn} data={physicalCourses} />;
}
