import React from "react";
import {
  heroData,
  successData,
  partners_data,
  testimonial_data,
  FAQData,
} from "@/data";
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
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import whoWeAreImage from "@/assets/who_we_are.png";

async function getHeroData(): Promise<hero[]> {
  // Simulate fetching data from an API or database
  const data: hero[] = [];
  heroData.forEach((item, idx) =>
    data.push({
      id: `hero-${idx + 1}`,
      image: item.image,
      title: item.heading,
      description: item.subheading,
    })
  );

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

async function getSuccessData(): Promise<success[]> {
  // Simulate fetching data for "Success Stories" section
  const data: success[] = [];
  successData.forEach((item, idx) =>
    data.push({
      id: `success-${idx + 1}`,
      image: item.icon,
      title: item.description,
      figure: item.numbers,
    })
  );

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

async function getPartnersData(): Promise<partners[]> {
  // Simulate fetching data for "Partners" section
  const data: partners[] = [];
  partners_data.forEach((item, idx) =>
    data.push({
      id: `partner-${idx + 1}`,
      image: item.img,
      description: item.alt,
    })
  );

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
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

const maxDescriptionLength = 60;

async function getWhoWeAreData(): Promise<whoWeAre[]> {
  // Simulate fetching data for "Who We Are" section
  const fullDescription =
    "We are dedicated to empowering innovation and driving entrepreneurial growth. Offering cutting-edge tech solutions, professional ICT training, and modern coworking space, Kuagi Resources is the ultimate launchpad for startups and business owners with a strong focus on building MVP solutions, fostering empowerment, and nurturing incubation opportunities.";

  const clippedDescription =
    fullDescription.length > maxDescriptionLength
      ? fullDescription.slice(0, maxDescriptionLength) + "..."
      : fullDescription;

  const data: whoWeAre[] = [
    {
      id: "1",
      image: whoWeAreImage,
      title: "Who We Are",
      description: clippedDescription,
    },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

async function getFAQData(): Promise<faq[]> {
  // Simulate fetching data for "FAQ" section
  const data: faq[] = FAQData.map((item, idx) => ({
    id: `faq-${idx + 1}`,
    questions: item.question,
    answers: item.answer,
  }));

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

export default async function page() {
  const fetchedHeroData = await getHeroData();
  const whoWeAreData = await getWhoWeAreData();
  const fetchedSuccessData = await getSuccessData();
  const fetchedPartnersData = await getPartnersData();
  const fetchedTestimonialsData = await getTestimonialsData();
  const fetchedFAQData = await getFAQData();

  return (
    <div className="flex flex-col gap-8 p-6 bg-lightblue h-full">
      <div className="flex flex-col gap-4 bg-white p-8 rounded-md shadow-sm">
        <h1 className="text-2xl font-bold">Hero Section</h1>
        <DataTable columns={heroColumns} data={fetchedHeroData} />
        <Button className="w-fit ml-auto px-4 rounded-md" size={"sm"}>
          {" "}
          <Plus className="text-white inline" /> Add
        </Button>
      </div>

      <div className="flex flex-col gap-4 bg-white p-8 rounded-md shadow-sm">
        <h1 className="text-2xl font-bold">Who We Are</h1>
        <DataTable columns={whoWeAreColumns} data={whoWeAreData} />
        <Button className="w-fit ml-auto px-4 rounded-md" size={"sm"}>
          {" "}
          <Plus className="text-white inline" /> Add
        </Button>
      </div>

      <div className="flex flex-col gap-4 bg-white p-8 rounded-md shadow-sm">
        <h1 className="text-2xl font-bold">Success Stories</h1>
        <DataTable columns={successColumns} data={fetchedSuccessData} />
        <Button className="w-fit ml-auto px-4 rounded-md" size={"sm"}>
          {" "}
          <Plus className="text-white inline" /> Add
        </Button>
      </div>

      <div className="flex flex-col gap-4 bg-white p-8 rounded-md shadow-sm">
        <h1 className="text-2xl font-bold">Our Partners</h1>
        <DataTable columns={partnersColumns} data={fetchedPartnersData} />
        <Button className="w-fit ml-auto px-4 rounded-md" size={"sm"}>
          {" "}
          <Plus className="text-white inline" /> Add
        </Button>
      </div>

      <div className="flex flex-col gap-4 bg-white p-8 rounded-md shadow-sm">
        <h1 className="text-2xl font-bold">Testimonials</h1>
        <DataTable
          columns={testimonialsColumns}
          data={fetchedTestimonialsData}
        />
        <Button className="w-fit ml-auto px-4 rounded-md" size={"sm"}>
          {" "}
          <Plus className="text-white inline" /> Add
        </Button>
      </div>

      <div className="flex flex-col gap-4 bg-white p-8 rounded-md shadow-sm">
        <h1 className="text-2xl font-bold">FAQ</h1>
        <DataTable columns={faqColumns} data={fetchedFAQData} />
        <Button className="w-fit ml-auto px-4 rounded-md" size={"sm"}>
          {" "}
          <Plus className="text-white inline" /> Add
        </Button>
      </div>
    </div>
  );
}
