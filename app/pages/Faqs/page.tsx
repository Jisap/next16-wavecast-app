"use client"

import PageHeader from '@/app/Components/PageHeader/PageHeader'
import { faqData } from '@/app/constants'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import { useState } from 'react'
import Banner from '../Index/Banner/page'




const FAQ = () => {

  const [activeIndex, setActiveIndex] = useState<number | null>(0); // Opcional: El primero abierto por defecto

  const toggleAccordion = (index: number) => {
    setActiveIndex(prev => prev === index ? null : index);
  };

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
        title={<>FAQ'<span className="text-prim">s</span></>}
      />

      <div className="dark-section">
        <div className="relative z-10 px-[8%] lg:px-[16%] py-40 pt-30 pb-20">
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
                FAQs
              </h2>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl text-center font-semibold mt-7 mb-5"
            >
              Frequently Asked Questions
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="tracking-wider text-center lg:w-[70%] mx-auto"
            >
              FAQs are widely used on websites, in product manuals, and in various instructional documents to address frequently asked question by users or customers.
            </motion.p>
          </motion.div>

          <div className='bg-gray p-5 rounded-2xl mt-15'>
            <div className="flex flex-col gap-5">
              <div className="w-full">
                <motion.div
                  className="space-y-4 w-full py-10"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={containerVariants}
                >
                  {faqData.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className={`
                        overflow-hidden rounded-xl py-4 px-4 lg:px-8 transition-all duration-300 
                        ${activeIndex === index ? "bg-prim text-text border border-[#222e48] shadow-lg shadow-prim/20" : "bg-gray-light border border-gray/30"}
                      `}
                    >
                      <button
                        type="button"
                        onClick={() => toggleAccordion(index)}
                        className={`
                          w-full flex justify-between items-center cursor-pointer transition-all duration-300
                          ${activeIndex === index ? "pb-4 border-b border-dashed border-[#222348]" : ""}
                        `}
                      >
                        <span className="text-xl text-left font-medium">{item.question}</span>

                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${activeIndex === index ? "bg-black/10 rotate-180" : "bg-prim/10"}`}>
                          <i className={`bi bi-chevron-down text-xl ${activeIndex === index ? "text-gray" : "text-prim"}`}></i>
                        </div>
                      </button>

                      <AnimatePresence>
                        {activeIndex === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <p className="text-sm pt-4 leading-relaxed">
                              {item.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Banner />
    </>
  )
}

export default FAQ