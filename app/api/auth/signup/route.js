export async function POST(req) {
  const formData = await req.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const password_confirmation = formData.get("password_confirmation");

  // Prepare form data for backend
  const backendForm = new FormData();
  backendForm.append("name", name);
  backendForm.append("email", email);
  backendForm.append("password", password);
  backendForm.append("password_confirmation", password_confirmation);

  await fetch("https://api.kuagi.ng/sanctum/csrf-cookie", {
    method: "GET",
    headers: { Accept: "application/json" },
    credentials: "include", // Important for cookies
  });

  const res = await fetch("https://api.kuagi.ng/register", {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: backendForm,
    credentials: "include", // Important for cookies
  });

  const data = await res.json();
  return new Response(JSON.stringify(data), {
    status: res.status,
    headers: { "Content-Type": "application/json" },
  });
}