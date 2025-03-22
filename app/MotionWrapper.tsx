"use client";
import { motion } from "framer-motion";

import React from "react";

import { ReactNode } from "react";

const MotionWrapper = ({ children }: { children: ReactNode }) => {
    const myAnimation = {
        initial: { opacity: 0, y: 50 },
        inView: { opacity: 1, y: 0, transition: { delay: 0.5 } },
    };

  return (
    <motion.div
      initial="initial"
      whileInView="inView"
      viewport={{ once: true }}
      variants={myAnimation}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
