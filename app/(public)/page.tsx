"use client";

import CoWorkingSpace from "@/app/(public)/sections/CoWorkingSpace";
import Hero from "@/app/(public)/Hero";
import { useState } from "react";
// import Women4Tech from "./sections/Women4Tech";
// import EventsPage from "./sections/EventsPage";

export default function Home() {
  const [section, setSection] = useState<number>(1);
  return (
    <div>
      <Hero section={section} setSection={setSection} />

      <CoWorkingSpace />
      {/* {section == 1 && <CoWorkingSpace />}
      {section == 2 && <Women4Tech />}
      {section == 3 && <EventsPage />} */}
    </div>
  );
}
