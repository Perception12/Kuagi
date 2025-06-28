"use client";
import React from "react";
import { DataTable } from "@/components/admin/DataTable";
import { courseColumn } from "./columns";
import { Course } from "./columns";
import { onlineCourseData } from "@/data";
import { useState, useEffect } from "react";

function getOnlineCourses(): Course[] {
  const data: Course[] = [];
  onlineCourseData.forEach((course, idx) =>
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

export default function OnlineCourse() {
  const [onlineCourses, setOnlineCourses] = useState<Course[]>([]);
  useEffect(() => {
    const courses = getOnlineCourses();
    setOnlineCourses(courses);
  }, []);

  return <DataTable columns={courseColumn} data={onlineCourses} />;
}
