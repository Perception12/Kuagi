'use client';

import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import { Card } from "./ui/card";
import { motion, useSpring, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SuccessCardProps {
  icon: StaticImageData;
  numbers: number;
  description: string;
  className?: string;
}

const SuccessCard: React.FC<SuccessCardProps> = ({
  icon,
  numbers,
  description,
  className,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [displaySuccessNum, setDisplaySuccessNum] = useState(0)
  
  const springSuccessCount = useSpring(0, {
    bounce: 0,
    duration: 1000,
  })
springSuccessCount.on('change', (value)=>{
  setDisplaySuccessNum(Math.round(value))
})
  useEffect(()=> {
    if (inView) {
      springSuccessCount.set(numbers);
    }
  },[inView, numbers, springSuccessCount])


  return (
    

    <Card
      className={`flex flex-col items-center p-6 shadow-none ${className} w-[260px]`}
      >
      <div className="bg-secondary rounded-full w-[50px] h-[50px] flex items-center justify-center">
        <Image src={icon} alt={description} width={20} className="object-cover" />
      </div>
       <motion.div
    ref={ref}
    initial="hidden"
    animate={controls}
    variants={{
      visible: { opacity: 1, y: 0, transition: { duration: 0.6} },
    }}
    >
      <h3
      className="text-3xl font-bold mt-4">{displaySuccessNum}</h3>
       </motion.div>
      <p className="text-muted-foreground text-sm text-center">{description}</p>
    </Card>
  );
};

export default SuccessCard;
