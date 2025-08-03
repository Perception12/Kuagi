import React from "react";

type SpinnerProps = {
  color?: string;
};

const Spinner = ({ color }: SpinnerProps) => {
  return (
    <span
      className={`inline-block w-8 h-8 border-4 border-${
        color ? color : "primary"
      } border-t-transparent rounded-full animate-spin mr-3`}
    />
  );
};

export default Spinner;
