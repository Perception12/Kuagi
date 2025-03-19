import { cn } from "@/lib/utils";
// import { useState } from "react";

interface PaginationDotsProps {
  totalSteps?: number;
  currentStep: number;
  className?: string;
}

const PaginationDots: React.FC<PaginationDotsProps> = ({
  totalSteps = 5,
  currentStep,
  className,
}) => {
  return (
    <div className="flex items-center gap-3">
      {Array.from({ length: totalSteps }, (_, index) => (
        <span
          key={index}
          className={cn(
            "h-3 w-3 rounded-full transition-all",
            index + 1 === currentStep ? "bg-primary" : "bg-gray-200",
            className
          )}
        />
      ))}
    </div>
  );
};

// const : React.FC = () => {
//   const [step, setStep] = useState<number>(1);
//   const totalSteps = 5;

//   return (
//     <div className="flex flex-col items-center gap-4 mt-10">
//       <PaginationDots totalSteps={totalSteps} currentStep={step} />

//       <div className="flex gap-4">
//         <button
//           className="px-4 py-2 bg-gray-300 rounded-md"
//           onClick={() => setStep((prev) => Math.max(prev - 1, 1))}
//         >
//           Previous
//         </button>
//         <button
//           className="px-4 py-2 bg-blue-500 text-white rounded-md"
//           onClick={() => setStep((prev) => Math.min(prev + 1, totalSteps))}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Page;

export { PaginationDots };
