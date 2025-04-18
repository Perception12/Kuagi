import React from 'react'
import Hero from './Hero'
import Mission from './Mission'
import ImageGrid from './ImageGrid'
import Testimonial from './Testimonial'
import CTA from './CTA'


const page = () => {
  return (
    <div>
        <Hero />
        <Mission />
        <ImageGrid />
        <Testimonial />
        <CTA />
    </div>
  )
}

export default page