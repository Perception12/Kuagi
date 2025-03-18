import React, { ReactNode } from 'react'

interface SubHeadingProps {
    children: ReactNode;
    className?: string;
}

const SubHeading: React.FC<SubHeadingProps> = ({children, className}) => {
  return (
    <div className={`text-primary text-3xl font-bold ${className}`}>{children}</div>
  )
}

export default SubHeading