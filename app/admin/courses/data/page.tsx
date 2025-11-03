import React from "react";
import Courses from "./courses";
import { DataTable } from "@/components/admin/DataTable";
import { testimonial_data } from "@/data";
import { CourseFAQDialog } from "@/components/admin/CourseFAQDialog";
import { about, AboutColumns, faq, faqColumns, testimonials, testimonialsColumns } from "./columns";
import { apiRequest } from "@/lib/api";
import {
  FAQS,

} from "@/lib/api_routes";
import { CourseAboutDialog } from "@/components/admin/CourseAboutDialog";
import { CourseTestimonialsDialog } from "@/components/admin/CourseTestimonialsDialog";


async function getAboutCourse(): Promise<about[]> {
  try {
    const response = await apiRequest({
      url: FAQS.all(),
      method: "get",
    });

    type FAQApiResponseItem = {
      id?: string | number;
      question: string;
      answer: string;
    };

    const data = Array.isArray(response.data.data)
      ? response.data.data.map((item: FAQApiResponseItem) => ({
          id: item.id?.toString() || item.question,
          questions: item.question,
          answers: item.answer,
        }))
      : [];

    return data;
  } catch (error) {
    console.error("Failed to fetch hero data", error);
    return [];
  }
}

async function getFAQData(): Promise<faq[]> {
  try {
    const response = await apiRequest({
      url: FAQS.all(),
      method: "get",
    });

    type FAQApiResponseItem = {
      id?: string | number;
      question: string;
      answer: string;
    };

    const data = Array.isArray(response.data.data)
      ? response.data.data.map((item: FAQApiResponseItem) => ({
          id: item.id?.toString() || item.question,
          questions: item.question,
          answers: item.answer,
        }))
      : [];

    return data;
  } catch (error) {
    console.error("Failed to fetch hero data", error);
    return [];
  }
}

async function getTestimonialsData(): Promise<testimonials[]> {
  // Simulate fetching data for "Testimonials" section
  const data: testimonials[] = [];
  testimonial_data.forEach((item, idx) =>
    data.push({
      id: `testimonial-${idx + 1}`,
      youtube_preview_url: item.youtube_embed_link,
      name: item.name,
      image: item.profile,
      comment: item.testimony,
    })
  );

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
} 

const fetchedAboutCourse = await getAboutCourse()
const fetchedFAQData = await getFAQData();
const fetchedTestimonialsData = await getTestimonialsData();


const page = () => {
  return (
    <div className="flex flex-col gap-8 p-6 bg-lightblue h-full">
      <Courses />
      <div className="flex flex-col gap-4 bg-white p-8 rounded-md shadow-sm">
        <h1 className="text-3xl font-bold opacity-80 mb-8">About The Course</h1>
      <DataTable columns={AboutColumns} data={fetchedAboutCourse}/>
      <CourseAboutDialog/>
    </div>

    <div className="flex flex-col gap-4 bg-white p-8 rounded-md shadow-sm">
        <h1 className="text-3xl font-bold opacity-80">FAQ</h1>
        <DataTable columns={faqColumns} data={fetchedFAQData} />
        <CourseFAQDialog/>
      </div>
      
      <div className="flex flex-col gap-4 bg-white p-8 rounded-md shadow-sm">
        <h1 className="text-3xl font-bold opacity-80 mb-8">Testimonials</h1>
        <DataTable
          columns={testimonialsColumns}
          data={fetchedTestimonialsData}
          />
          <CourseTestimonialsDialog/>
      </div>
    </div>
  );
};

export default page;
