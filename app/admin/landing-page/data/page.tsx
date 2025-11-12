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
import {  HeroDialog} from '@/components/admin/HeroDialog' ;
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
import { useDynamicCrudWithApi } from "@/hooks/useDynamicCrudWithApi";

export default function AdminPage() {
  // const { token } = useAuth();
  const { sections, handleSave, handleDelete, fetchAll, loading } =
  useDynamicCrudWithApi({
    // token,
    routes: {
      hero: GENERAL_INFO,
      whoWeAre: GENERAL_INFO,
      success: SUCCESS_STORIES,
      partners: OUR_PARTNERS,
      // testimonials: FAQS, // replace if you have a testimonials route
      faq: FAQS,
    },
  });

useEffect(() => {
  fetchAll();
}, []);
  const { token } = useAuth();

  // 🧩 HERO + WHO WE ARE
  const generalApi = useApiCrud({ url: GENERAL_INFO.all(), token });

  // 🧩 SUCCESS STORIES
  const successApi = useApiCrud({ url: SUCCESS_STORIES.all(), token });

  // 🧩 PARTNERS
  const partnersApi = useApiCrud({ url: OUR_PARTNERS.all(), token });

  // 🧩 FAQ
  const faqApi = useApiCrud({ url: FAQS.all(), token });

  // 🧩 TESTIMONIALS (Static mock)
  const testimonialsData: testimonials[] = testimonial_data.map((item, idx) => ({
    id: `testimonial-${idx + 1}`,
    youtube_preview_url: item.youtube_embed_link,
    name: item.name,
    image: item.profile,
    comment: item.testimony,
  }));

  // 🌀 Fetch all data on mount
  useEffect(() => {
    generalApi.fetchData();
    successApi.fetchData();
    partnersApi.fetchData();
    faqApi.fetchData();
  }, []);

  // 🧠 Transform General Info
  const generalData = generalApi.data || [];
  const landingPageData: hero[] =
    generalData
      .filter((item: any) => item.page === "landing-page")
      .map((item: any) => ({
        id: String(item.id || item.heading),
        image: item.image_url,
        title: item.heading,
        description: item.subheading,
      })) || [];

  const whoWeAreData: whoWeAre[] =
    generalData
      .filter((item: any) => item.page === "who-we-are")
      .map((item: any) => ({
        id: String(item.id || item.heading),
        image: item.image_url,
        title: item.heading,
        description: item.subheading,
      })) || [];

  // 🧠 Transform Success Stories
  const iconMap: Record<string, StaticImageData> = {
    "Job Created": successData[0].icon,
    "Project Awarded": successData[1].icon,
    "Startups & Business Empowered": successData[2].icon,
    "Hub Subscribers": successData[3].icon,
    "Access to Skill Empowerment": successData[4].icon,
    "Students Trained": successData[5].icon,
  };

  const successStoriesData: success[] =
    successApi.data?.data?.map((item: any) => ({
      id: String(item.id || item.caption),
      image: iconMap[item.icon] || item.icon,
      title: item.caption,
      figure: item.count,
    })) || [];

  // 🧠 Transform Partners
  const partnersData: partners[] =
    partnersApi.data?.data?.map((item: any) => ({
      id: String(item.id || item.name),
      image: item.image_url,
      description: item.name,
    })) || [];

  // 🧠 Transform FAQs
  const faqData: faq[] =
    faqApi.data?.data?.map((item: any) => ({
      id: String(item.id || item.question),
      questions: item.question,
      answers: item.answer,
    })) || [];

  return (
    <div className="flex flex-col gap-8 p-6 bg-lightblue h-full">
      <SectionBlock
        title="Hero Section"
        columns={heroColumns}
        data={landingPageData}
        loading={generalApi.loading}
        Dialog={HeroDialog}
        onSuccess={generalApi.fetchData}
      />

      <SectionBlock
        title="Who We Are"
        columns={whoWeAreColumns}
        data={whoWeAreData}
        loading={generalApi.loading}
        Dialog={WhoWeAreDialog}
        onSuccess={generalApi.fetchData}
      />

      <SectionBlock
        title="Success Stories"
        columns={successColumns}
        data={successStoriesData}
        loading={successApi.loading}
        Dialog={SuccessStoriesDialog}
        onSuccess={successApi.fetchData}
      />

      <SectionBlock
        title="Our Partners"
        columns={partnersColumns}
        data={partnersData}
        loading={partnersApi.loading}
        Dialog={PartnersDialog}
        onSuccess={partnersApi.fetchData}
      />

      <SectionBlock
        title="Testimonials"
        columns={testimonialsColumns}
        data={testimonialsData}
        loading={false}
        Dialog={TestimonialsDialog}
        onSuccess={() => {}}
      />

      <SectionBlock
        title="FAQ"
        columns={faqColumns}
        data={faqData}
        loading={faqApi.loading}
        Dialog={FAQDialog}
        onSuccess={faqApi.fetchData}
      />
    </div>
  );
}

// 🧩 Section Wrapper
function SectionBlock({ title, columns, data, Dialog, onSuccess, loading }: any) {
  return (
    <div className="flex flex-col gap-4 bg-white p-8 rounded-md shadow-sm">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold opacity-80">{title}</h1>
        <Dialog onSuccess={onSuccess} />
      </div>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <DataTable columns={columns} data={data || []} />
      )}
    </div>
  );
}
