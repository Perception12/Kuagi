import React from 'react'
import SubHeading from './SubHeading'
import { FAQData } from '@/data'
import FAQItem from './FAQItem'


const FAQ = () => {
  return (
    <div className="mt-12 flex flex-col gap-6 items-center justify-center">
      <SubHeading>Some of Our Frequently Asked Questions</SubHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {FAQData.map((item, index) => (
          <FAQItem question={item.question} key={index}>
            {item.answer}
          </FAQItem>
        ))}
      </div>
    </div>
  )
}

export default FAQ