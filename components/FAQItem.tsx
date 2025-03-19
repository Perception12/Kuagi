import React from "react";

interface FAQItemProps {
  children: React.ReactNode;
  question: string;
  className?: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ children, question, className }) => {
  return (
    <div
      className={`block select-none space-y-8 bg-lightblue rounded-3xl p-8 leading-none no-underline outline-none transition-colors ${className}`}
    >
      <div className="md:text-xl font-medium leading-none">{question}</div>
      <p className="line-clamp-2 text-sm md:text-base leading-snug text-muted-foreground">
        {children}
      </p>
    </div>
  );
};

export default FAQItem;
