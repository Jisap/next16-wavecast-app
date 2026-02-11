"use client"

import PageHeader from '@/app/Components/PageHeader/PageHeader'
import client1 from "@/public/Images/contact-client-1.png"
import client2 from "@/public/Images/contact-client-2.png"
import client3 from "@/public/Images/contact-client-3.png"
import client4 from "@/public/Images/contact-client-4.png"
import client5 from "@/public/Images/contact-client-5.png"
import { motion, Variants } from 'framer-motion'
import Link from 'next/link'



const Contact = () => {

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  return (
    <>
      <PageHeader
        title="Contact"
      />

      <div className='dark-section'>
        <div className="px-[8%] lg:px-[16%] py-20">
          <motion.div
            className="title flex flex-col items-center justify-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="inline-block px-4 py-2 rounded-full text-prim text-2xl font-normal border border-prim">
                <i className="bi bi-rocket-takeoff pe-4"></i>
                Get In Touch
              </h2>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl text-center font-semibold mt-7 mb-5"
            >
              Let Us Help you
            </motion.h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-1.5'>
              <div className='flex gap-3 bg-gray-600/30 backdrop-blur-2xl p-5 rounded-2xl group hover:bg-prim hover:text-text transition-all duration-300'>
                <div className='mt-3 w-15 h-15 rounded-full bg-prim group-hover:bg-text transition-all duration-300 px-5 flex items-center justify-center'>
                  <i className="bi bi-geo-alt text-text group-hover:text-prim text-3xl transition-all duration-300"></i>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Contact