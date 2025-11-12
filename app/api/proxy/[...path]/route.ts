import { NextRequest, NextResponse } from "next/server";

const BASE_URL = "https://api.kuagi.ng";

function buildTargetUrl(req: NextRequest) {
  const path = req.nextUrl.pathname.replace(/^\/api\/proxy/, "");
  const query = req.nextUrl.search; // includes leading ? or empty
  return `${BASE_URL}${path}${query}`;
}

async function forward(req: NextRequest, method: string) {
  const targetUrl = buildTargetUrl(req);
  try {
    const authHeader = req.headers.get("authorization") || undefined;
    const init: RequestInit = { method };

    // For POST/PUT/PATCH, handle possible multipart bodies
    if (["POST", "PUT", "PATCH", "DELETE"].includes(method)) {
      // Try reading as formData; if fails, fallback to raw body
      const contentType = req.headers.get("content-type") || "";
      if (contentType.includes("multipart/form-data")) {
        const form = await req.formData();
        init.body = form as unknown as BodyInit;
      } else {
        const buf = await req.arrayBuffer();
        init.body = buf as unknown as BodyInit;
      }
    }

    init.headers = {
      // Do not set Content-Type for multipart; fetch will set boundary automatically when FormData
      ...(authHeader ? { Authorization: authHeader } : {}),
    } as HeadersInit;

    const res = await fetch(targetUrl, init);
    const resContentType = res.headers.get("content-type") || "";
    if (resContentType.includes("application/json")) {
      const json = await res.json();
      return NextResponse.json(json, { status: res.status });
    }
    const blob = await res.arrayBuffer();
    return new NextResponse(blob, {
      status: res.status,
      headers: { "content-type": resContentType || "application/octet-stream" },
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Proxy request failed", error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  return forward(req, "GET");
}
export async function POST(req: NextRequest) {
  return forward(req, "POST");
}
export async function PUT(req: NextRequest) {
  return forward(req, "PUT");
}
export async function PATCH(req: NextRequest) {
  return forward(req, "PATCH");
}
export async function DELETE(req: NextRequest) {
  return forward(req, "DELETE");
}


