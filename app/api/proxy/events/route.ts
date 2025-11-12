import { NextRequest, NextResponse } from "next/server";

const TARGET_URL = "https://api.kuagi.ng/api/events";

export async function POST(req: NextRequest) {
  try {
    // Forward Authorization header if present
    const authHeader = req.headers.get("authorization") || undefined;

    // Read incoming multipart body as FormData
    const incomingForm = await req.formData();

    // Forward using fetch; do NOT set Content-Type so boundary is auto-set
    const res = await fetch(TARGET_URL, {
      method: "POST",
      headers: authHeader ? { Authorization: authHeader } : undefined,
      body: incomingForm,
    });

    // Pass through status and JSON body
    const contentType = res.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      const json = await res.json();
      return NextResponse.json(json, { status: res.status });
    }
    // Fallback: stream raw text
    const text = await res.text();
    return new NextResponse(text, {
      status: res.status,
      headers: { "content-type": contentType || "text/plain" },
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Proxy request failed", error: (error as Error).message },
      { status: 500 }
    );
  }
}


