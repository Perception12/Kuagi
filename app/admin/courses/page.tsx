import React from "react";
import Courses from "./courses";


const page = () => {
  return (
    <div className="flex flex-col gap-8 p-6 bg-lightblue h-full">
      <Courses />
    </div>
  );
};

export default page;
