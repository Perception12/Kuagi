"use client";

import { useState, useEffect, useCallback } from "react";
import { toast } from "sonner";
import { apiRequest } from "@/lib/api";

interface UseApiCrudProps {
  /** API endpoint (e.g. /api/proxy/api/events) */
  url: string;
  /** Bearer token (optional) */
  token?: string | null;
  /** Called after a successful operation */
  onSuccess?: (data?: any) => void;
  /** Called when an error occurs */
  onError?: (error: any) => void;
  /** Max image/file size (default 2MB) */
  maxFileSize?: number;
}

/**
 * 🔥 Universal CRUD Hook for APIs
 * Supports:
 *  - GET (fetch)
 *  - POST (create)
 *  - PUT (update)
 *  - DELETE (remove)
 * With: validation, FormData, toasts, and file checks
 */
export function useApiCrud({
  url,
  token,
  onSuccess,
  onError,
  maxFileSize = 2 * 1024 * 1024,
}: UseApiCrudProps) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  // 🟢 GET - Fetch data from API
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const res = await apiRequest({
        url,
        method: "get",
        token,
      });
      setData(res.data);
      onSuccess?.(res.data);
    } catch (error: any) {
      console.error("GET failed:", error);
      handleError(error);
      onError?.(error);
    } finally {
      setLoading(false);
    }
  }, [url, token, onSuccess, onError]);

  // 🟠 POST / PUT - Submit form
  const handleSubmit = async (
    formRef: React.RefObject<HTMLFormElement>,
    e?: React.FormEvent,
    method: "POST" | "PUT" = "POST",
    successMessage?: string
  ) => {
    e?.preventDefault();
    const formEl = formRef.current;
    if (!formEl) return;

    // Validate required fields
    if (!formEl.reportValidity()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const formData = new FormData(formEl);

    // Validate image file size
    const image = formData.get("image");
    if (image instanceof File && image.size > maxFileSize) {
      toast.error("Image too large. Please select a file ≤ 2MB.");
      return;
    }

    try {
      setLoading(true);
      const res = await apiRequest({
        url,
        method: method.toLowerCase() as "post" | "put" | "delete" | "get",
        data: formData,
        token,
        isFormData: true,
      });
      toast.success(successMessage || `${method} successful ✅`);
      onSuccess?.(res.data);
    } catch (error: any) {
      console.error(`${method} failed:`, error);
      handleError(error);
      onError?.(error);
    } finally {
      setLoading(false);
    }
  };

  // 🔴 DELETE
  const handleDelete = async (deleteUrl?: string, successMessage?: string) => {
    try {
      setLoading(true);
      await apiRequest({
        url: deleteUrl || url,
        method: "delete",
        token,
      });
      toast.success(successMessage || "Deleted successfully 🗑️");
      onSuccess?.();
    } catch (error: any) {
      console.error("DELETE failed:", error);
      handleError(error);
      onError?.(error);
    } finally {
      setLoading(false);
    }
  };

  // 🧠 Error handler
  const handleError = (error: any) => {
    const status = error?.response?.status;
    const data = error?.response?.data;

    if (status === 422 && data?.errors) {
      const firstField = Object.keys(data.errors)[0];
      const firstMessage = data.errors[firstField]?.[0];
      toast.error(firstMessage || "Validation failed.");
    } else if (data?.message) {
      toast.error(data.message);
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  };

  // Auto-fetch once on mount (optional)
  // useEffect(() => {
  //   fetchData();
  // }, [fetchData]);

  return { data, loading, fetchData, handleSubmit, handleDelete };
}
