import React from "react";
import { successData, testimonial_data } from "@/data";
import {
  hero,
  heroColumns,
  partners,
  partnersColumns,
  success,
  successColumns,
  testimonials,
  testimonialsColumns,
  whoWeAre,
  whoWeAreColumns,
  faq,
  faqColumns,
} from "./columns";
import { DataTable } from "@/components/admin/DataTable";
// import whoWeAreImage from "@/assets/who_we_are.png";
import { SuccessStoriesDialog } from "@/components/admin/SuccessStoriesDialog";
import { PartnersDialog } from "@/components/admin/PartnersDialog";
import { TestimonialsDialog } from "@/components/admin/TestimonialsDialog";
import { FAQDialog } from "@/components/admin/FAQDialog";
import { HeroDialog } from "@/components/admin/HeroDialog";
import { WhoWeAreDialog } from "@/components/admin/WhoWeAreDialog";

import { apiRequest } from "@/lib/api";
import {
  FAQS,
  GENERAL_INFO,
  OUR_PARTNERS,
  SUCCESS_STORIES,
} from "@/lib/api_routes";
import { StaticImageData } from "next/image";

async function getGeneralInfo(): Promise<[hero[], whoWeAre[]]> {
  try {
    const response = await apiRequest({
      url: GENERAL_INFO.all(),
      method: "get",
    });
    // Define the expected API response item type
    type HeroApiResponseItem = {
      id?: string | number;
      image_url: string;
      heading: string;
      subheading: string;
      page: string;
    };

    if (!Array.isArray(response.data)) {
      return [[], []];
    }

    const landingPageFilter: HeroApiResponseItem[] = response.data.filter((item: HeroApiResponseItem) => item.page === "landing-page");
    const whoWeAreFilter: HeroApiResponseItem[] = response.data.filter((item: HeroApiResponseItem) => item.page === "who-we-are");

    const landingPageData: hero[] =  landingPageFilter.map((item: HeroApiResponseItem) => ({
          id: item.id !== undefined ? String(item.id) : item.heading,
          image: item.image_url,
          title: item.heading,
          description: item.subheading,
        }))

    const whoWeAreData: whoWeAre[] =  whoWeAreFilter.map((item: HeroApiResponseItem) => ({
          id: item.id !== undefined ? String(item.id) : item.heading,
          image: item.image_url,
          title: item.heading,
          description: item.subheading,
        }))
 
    return [landingPageData, whoWeAreData];
  } catch (error) {
    console.error("Failed to fetch hero data", error);
    return [[], []];
  }
}

async function getSuccessData(): Promise<success[]> {
  try {
    const response = await apiRequest({
      url: SUCCESS_STORIES.all(),
      method: "get",
    });

    type SuccessApiResponseItem = {
      id?: string | number;
      icon: string;
      caption: string;
      count: string;
    };

    // Map icon string to actual icon component
    const iconMap: Record<string, StaticImageData> = {
      "Job Created": successData[0].icon,
      "Project Awarded": successData[1].icon,
      "Startups & Business Empowered": successData[2].icon,
      "Hub Subscribers": successData[3].icon,
      "Access to Skill Empowerment": successData[4].icon,
      "Students Trained": successData[5].icon,
    };

    const data = Array.isArray(response.data.data)
      ? response.data.data.map((item: SuccessApiResponseItem) => ({
          id: item.id?.toString() || item.caption,
          image: iconMap[item.icon] || item.icon, // fallback to string if not found
          title: item.caption,
          figure: item.count,
        }))
      : [];

    return data;
  } catch (error) {
    console.error("Failed to fetch hero data", error);
    return [];
  }
}

async function getPartnersData(): Promise<partners[]> {
  try {
    const response = await apiRequest({
      url: OUR_PARTNERS.all(),
      method: "get",
    });

    type PartnersApiResponseItem = {
      id?: string | number;
      image_url: string;
      name: string;
    };


    const data = Array.isArray(response.data.data)
      ? response.data.data.map((item: PartnersApiResponseItem) => ({
          id: item.id?.toString() || item.name,
          image: item.image_url,
          description: item.name,
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

// const maxDescriptionLength = 60;

// async function getWhoWeAreData(): Promise<whoWeAre[]> {
//   // Simulate fetching data for "Who We Are" section
//   const fullDescription =
//     "We are dedicated to empowering innovation and driving entrepreneurial growth. Offering cutting-edge tech solutions, professional ICT training, and modern coworking space, Kuagi Resources is the ultimate launchpad for startups and business owners with a strong focus on building MVP solutions, fostering empowerment, and nurturing incubation opportunities.";

//   const clippedDescription =
//     fullDescription.length > maxDescriptionLength
//       ? fullDescription.slice(0, maxDescriptionLength) + "..."
//       : fullDescription;

//   const data: whoWeAre[] = [
//     {
//       id: "1",
//       image: whoWeAreImage,
//       title: "Who We Are",
//       description: clippedDescription,
//     },
//   ];

//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(data);
//     }, 1000);
//   });
// }

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

export default async function page() {
  const [fetchedHeroData, whoWeAreData] = await getGeneralInfo();

  const fetchedSuccessData = await getSuccessData();
  const fetchedPartnersData = await getPartnersData();
  const fetchedTestimonialsData = await getTestimonialsData();
  const fetchedFAQData = await getFAQData();

  return (
    <div className="flex flex-col gap-8 p-6 bg-lightblue h-full">
      <div className="flex flex-col gap-4 bg-white p-8 rounded-md shadow-sm">
        <h1 className="text-2xl font-bold">Hero Section</h1>
        <DataTable columns={heroColumns} data={fetchedHeroData} />
        <HeroDialog />
      </div>

      <div className="flex flex-col gap-4 bg-white p-8 rounded-md shadow-sm">
        <h1 className="text-2xl font-bold">Who We Are</h1>
        <DataTable columns={whoWeAreColumns} data={whoWeAreData} />
        <WhoWeAreDialog />
      </div>

      <div className="flex flex-col gap-4 bg-white p-8 rounded-md shadow-sm">
        <h1 className="text-2xl font-bold">Success Stories</h1>
        <DataTable columns={successColumns} data={fetchedSuccessData} />

        <SuccessStoriesDialog />
      </div>

      <div className="flex flex-col gap-4 bg-white p-8 rounded-md shadow-sm">
        <h1 className="text-2xl font-bold">Our Partners</h1>
        <DataTable columns={partnersColumns} data={fetchedPartnersData} />
        <PartnersDialog />
      </div>

      <div className="flex flex-col gap-4 bg-white p-8 rounded-md shadow-sm">
        <h1 className="text-2xl font-bold">Testimonials</h1>
        <DataTable
          columns={testimonialsColumns}
          data={fetchedTestimonialsData}
        />

        <TestimonialsDialog />
      </div>

      <div className="flex flex-col gap-4 bg-white p-8 rounded-md shadow-sm">
        <h1 className="text-2xl font-bold">FAQ</h1>
        <DataTable columns={faqColumns} data={fetchedFAQData} />
        <FAQDialog />
      </div>
    </div>
  );
}
