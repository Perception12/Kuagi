import axios from "axios";

export async function apiRequest({
  url,
  method = "post",
  data,
  token,
  isFormData = false,
}: {
  url: string;
  method?: "get" | "post" | "put" | "delete";
  data?: unknown;
  token?: string | null;
  isFormData?: boolean;
}) {
  const headers: Record<string, string> = {};
  if (token) headers["Authorization"] = `Bearer ${token}`;
  if (isFormData) {
    // Let axios set the correct Content-Type for FormData
  } else {
    headers["Content-Type"] = "application/json";
  }

  return axios({
    url,
    method,
    data,
    headers,
  });
}