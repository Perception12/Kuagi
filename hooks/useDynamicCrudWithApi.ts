"use client";
import { useState } from "react";
import { useApiCrud } from "@/hooks/useApiCrud"; // adjust import path as needed
import { apiRequest } from "@/lib/api";

type SectionKey =
  | "hero"
  | "whoWeAre"
  | "success"
  | "partners"
  | "testimonials"
  | "faq";

type SectionData = Record<SectionKey, any[]>;

interface SectionApiRoutes {
  [key: string]: {
    all: () => string;
    update?: (id: string) => string;
    delete?: (id: string) => string;
  };
}

export function useDynamicCrudWithApi({
  token,
  routes,
}: {
  token?: string | null;
  routes: SectionApiRoutes;
}) {
  const [sections, setSections] = useState<SectionData>({
    hero: [],
    whoWeAre: [],
    success: [],
    partners: [],
    testimonials: [],
    faq: [],
  });

  const { loading, handleDelete: apiDelete } = useApiCrud({
    url: "",
    token,
  });

  // ✅ Fetch all sections (GET)
  const fetchAll = async () => {
    try {
      const entries = await Promise.all(
        (Object.keys(routes) as SectionKey[]).map(async (key) => {
          const res = await apiRequest({ url: routes[key].all(), method: "get", token });
          return [key, res.data.data || res.data];
        })
      );
      setSections(Object.fromEntries(entries) as SectionData);
    } catch (error) {
      console.error("Failed to fetch sections", error);
    }
  };

  // ✅ Update one record (PATCH or PUT)
  const handleSave = async (section: SectionKey, updatedRow: any) => {
    setSections((prev) => ({
      ...prev,
      [section]: prev[section].map((row: any) =>
        row.id === updatedRow.id ? updatedRow : row
      ),
    }));

    const updateUrl = routes[section].update?.(updatedRow.id);
    if (!updateUrl) return;

    try {
      await apiRequest({
        url: updateUrl,
        method: "put",
        data: updatedRow,
        token,
      });
      console.log(`✅ Saved ${section}:`, updatedRow);
    } catch (error) {
      console.error(`❌ Failed to save ${section}`, error);
    }
  };

  // ✅ Delete a record (DELETE)
  const handleDelete = async (section: SectionKey, rowId: string) => {
    setSections((prev) => ({
      ...prev,
      [section]: prev[section].filter((row: any) => row.id !== rowId),
    }));

    const deleteUrl = routes[section].delete?.(rowId);
    if (!deleteUrl) return;

    try {
      await apiDelete(deleteUrl, `Deleted ${section} successfully`);
      console.log(`🗑️ Deleted ${section} record:`, rowId);
    } catch (error) {
      console.error(`❌ Failed to delete ${section}`, error);
    }
  };

  return { sections, setSections, handleSave, handleDelete, fetchAll, loading };
}
