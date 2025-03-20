import React, { ReactNode } from 'react'

interface SubHeadingProps {
    children: ReactNode;
    className?: string;
}

const SubHeading: React.FC<SubHeadingProps> = ({children, className}) => {
  return (
    <div className={`text-primary text-center text-xl md:text-3xl bricolage-grotesque font-bold ${className}`}>{children}</div>
  )
}

export default SubHeading