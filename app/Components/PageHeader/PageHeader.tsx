"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

// Static image imports
import pageElm1 from "@/public/Images/page-elm-1.png"
import pageElm2 from "@/public/Images/page-elm-2.png"
import pageElm3 from "@/public/Images/page-elm-3.png"
import pageElm4 from "@/public/Images/page-elm-4.png"

import brand2 from "@/public/Images/brand-icon-1.png"
import brand1 from "@/public/Images/brand-icon-2.png"
import brand3 from "@/public/Images/brand-icon-3.png"
import brand4 from "@/public/Images/brand-icon-4.png"
import brand5 from "@/public/Images/brand-icon-5.png"

interface PageHeaderProps {
  title: React.ReactNode
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  const bgElements = [
    { src: pageElm2, className: "elm2 element" },
    { src: pageElm3, className: "elm3 element" },
    { src: pageElm4, className: "elm4 element" },
  ]

  const brandImages = [brand1, brand2, brand3, brand4, brand5]

  return (
    <section className="page-section">
      {/* Background Elements */}
      {bgElements.map((elm, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.1 * index
          }}
          className={elm.className}
        >
          <Image src={elm.src} alt="Decorative element" />
        </motion.div>
      ))}

      <div className="page-content w-full md:w-1/2 flex justify-center flex-col pt-10 px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="flex justify-center"
        >
          <Image
            src={pageElm1}
            alt="Header illustration"
            className="w-full h-full max-w-[500px]"
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: "easeOut"
          }}
          className="text-6xl lg:text-8xl font-semibold justify-center my-6"
        >
          {title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex items-center justify-center gap-3 cursor-pointer mt-5"
        >
          {brandImages.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.7 + index * 0.1
              }}
              whileHover={{ y: -5 }}
            >
              <Image src={brand} alt={`Brand logo ${index + 1}`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default PageHeader
