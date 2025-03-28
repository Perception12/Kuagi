import CurvedCarousel from '@/components/CurvedCarousel'
import SubHeading from '@/components/SubHeading'
import React from 'react'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-lightblue to-white p-8 md:py-32 flex flex-col gap-12 md:h-[calc(90vh-5rem)]">

    <div className="flex flex-col items-center justify-center gap-4 flex-2">
      <SubHeading className="text-center max-w-[850px] lg:text-5xl">
        Sustainable solution that supports and empower businesses
      </SubHeading>

      <p className="max-w-[468px] text-center text-mediumgrey">
        The Business Hub is to offer a sustainable solution that supports and
        empower business owners/Startups in Kwara State.
      </p>
    </div>
    <CurvedCarousel />
  </section>
  )
}

export default Hero