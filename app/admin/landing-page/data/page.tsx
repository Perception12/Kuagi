"use client";

import React, { useEffect } from "react";
import { DataTable } from "@/components/admin/DataTable";
import {
  heroColumns,
  whoWeAreColumns,
  successColumns,
  partnersColumns,
  testimonialsColumns,
  faqColumns,
  hero,
  whoWeAre,
  success,
  partners,
  testimonials,
  faq,
} from "./columns";
import {
  HeroDialog
} from '@/components/admin/HeroDialog' ;

import { WhoWeAreDialog } from "@/components/admin/WhoWeAreDialog";
import { SuccessStoriesDialog } from "@/components/admin/SuccessStoriesDialog";
import { PartnersDialog } from "@/components/admin/PartnersDialog";
import { TestimonialsDialog } from "@/components/admin/TestimonialsDialog";
import { FAQDialog } from "@/components/admin/FAQDialog";
import { useApiCrud } from "@/hooks/useApiCrud";
import { useAuth } from "@/context/authcontext";
import {
  GENERAL_INFO,
  SUCCESS_STORIES,
  OUR_PARTNERS,
  FAQS,
} from "@/lib/api_routes";
import { successData, testimonial_data } from "@/data";
import { StaticImageData } from "next/image";

export default function AdminPage() {
  const { token } = useAuth();

  // 🧩 HERO + WHO WE ARE
  const {
    data: generalData,
    fetchData: fetchGeneral,
    loading: loadingGeneral,
  } = useApiCrud({ url: GENERAL_INFO.all(), token });

  // 🧩 SUCCESS STORIES
  const {
    data: successDataRaw,
    fetchData: fetchSuccess,
    loading: loadingSuccess,
  } = useApiCrud({ url: SUCCESS_STORIES.all(), token });

  // 🧩 PARTNERS
  const {
    data: partnersDataRaw,
    fetchData: fetchPartners,
    loading: loadingPartners,
  } = useApiCrud({ url: OUR_PARTNERS.all(), token });

  // 🧩 FAQ
  const {
    data: faqDataRaw,
    fetchData: fetchFaq,
    loading: loadingFaq,
  } = useApiCrud({ url: FAQS.all(), token });

  // 🧩 TESTIMONIALS (Static mock for now)
  const testimonialsData: testimonials[] = testimonial_data.map((item, idx) => ({
    id: `testimonial-${idx + 1}`,
    youtube_preview_url: item.youtube_embed_link,
    name: item.name,
    image: item.profile,
    comment: item.testimony,
  }));

  // 🌀 Fetch all data on mount
  useEffect(() => {
    fetchGeneral();
    fetchSuccess();
    fetchPartners();
    fetchFaq();
  }, [fetchGeneral, fetchSuccess, fetchPartners, fetchFaq]);

  // 🧠 Transform General Info
  const landingPageData: hero[] =
    generalData
      ?.filter((item: any) => item.page === "landing-page")
      ?.map((item: any) => ({
        id: String(item.id || item.heading),
        image: item.image_url,
        title: item.heading,
        description: item.subheading,
      })) || [];

  const whoWeAreData: whoWeAre[] =
    generalData
      ?.filter((item: any) => item.page === "who-we-are")
      ?.map((item: any) => ({
        id: String(item.id || item.heading),
        image: item.image_url,
        title: item.heading,
        description: item.subheading,
      })) || [];

  // 🧠 Transform Success Data
  const iconMap: Record<string, StaticImageData> = {
    "Job Created": successData[0].icon,
    "Project Awarded": successData[1].icon,
    "Startups & Business Empowered": successData[2].icon,
    "Hub Subscribers": successData[3].icon,
    "Access to Skill Empowerment": successData[4].icon,
    "Students Trained": successData[5].icon,
  };

  const successStoriesData: success[] =
    successDataRaw?.data?.map((item: any) => ({
      id: String(item.id || item.caption),
      image: iconMap[item.icon] || item.icon,
      title: item.caption,
      figure: item.count,
    })) || [];

  // 🧠 Transform Partners
  const partnersData: partners[] =
    partnersDataRaw?.data?.map((item: any) => ({
      id: String(item.id || item.name),
      image: item.image_url,
      description: item.name,
    })) || [];

  // 🧠 Transform FAQs
  const faqData: faq[] =
    faqDataRaw?.data?.map((item: any) => ({
      id: String(item.id || item.question),
      questions: item.question,
      answers: item.answer,
    })) || [];

  return (
    <div className="flex flex-col gap-8 p-6 bg-lightblue h-full">
      {/* HERO SECTION */}
      <SectionBlock
        title="Hero Section"
        loading={loadingGeneral}
        columns={heroColumns}
        data={landingPageData}
        Dialog={HeroDialog}
      />

      {/* WHO WE ARE */}
      <SectionBlock
        title="Who We Are"
        loading={loadingGeneral}
        columns={whoWeAreColumns}
        data={whoWeAreData}
        Dialog={WhoWeAreDialog}
      />

      {/* SUCCESS STORIES */}
      <SectionBlock
        title="Success Stories"
        loading={loadingSuccess}
        columns={successColumns}
        data={successStoriesData}
        Dialog={SuccessStoriesDialog}
      />

      {/* PARTNERS */}
      <SectionBlock
        title="Our Partners"
        loading={loadingPartners}
        columns={partnersColumns}
        data={partnersData}
        Dialog={PartnersDialog}
      />

      {/* TESTIMONIALS */}
      <SectionBlock
        title="Testimonials"
        loading={false}
        columns={testimonialsColumns}
        data={testimonialsData}
        Dialog={TestimonialsDialog}
      />

      {/* FAQ */}
      <SectionBlock
        title="FAQ"
        loading={loadingFaq}
        columns={faqColumns}
        data={faqData}
        Dialog={FAQDialog}
      />
    </div>
  );
}

// 🧩 Reusable section wrapper
function SectionBlock({ title, columns, data, Dialog, loading }: any) {
  return (
    <div className="flex flex-col gap-4 bg-white p-8 rounded-md shadow-sm">
      <h1 className="text-3xl font-bold opacity-80 mb-8">{title}</h1>
      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <DataTable columns={columns} data={data || []} />
      )}
      <Dialog />
    </div>
  );
}
