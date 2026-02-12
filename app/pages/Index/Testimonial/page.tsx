"use client"


import React, { useRef } from 'react'
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from 'next/image';
import test1 from "@/public/Images/testimonial-card-1.png"
import test2 from "@/public/Images/testimonial-card-2.png"
import test3 from "@/public/Images/testimonial-card-3.png"
import test4 from "@/public/Images/testimonial-card-4.png"
import test5 from "@/public/Images/testimonial-card-5.png"
import quote from "@/public/Images/quote.png"
import quoteBg from "@/public/Images/testimonial-card-qoute-bg.png"
import { motion, Variants } from "framer-motion"


const TestimonialData = [
  {
    id: 1,
    image: test1,
    pere: "I stubled upon this a month ago",
    name: "Jenifer",
    role: "Developer"
  },
  {
    id: 2,
    image: test2,
    pere: "Awesome podcast for music lovers",
    name: "Mark",
    role: "Singer"
  },
  {
    id: 3,
    image: test3,
    pere: "Great podcast, great host, great content!",
    name: "Sofia",
    role: "Designer"
  },
  {
    id: 4,
    image: test4,
    pere: "The best podcast I've ever heard!",
    name: "Kevin",
    role: "Photographer"
  },
  {
    id: 5,
    image: test5,
    pere: "Highly recommended for great podcasts!",
    name: "Ashadul",
    role: "YouTuber"
  },
]

const Testimonial = () => {

  const swiperRef = useRef<SwiperType | null>(null);

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
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  return (
    <>
      <div className="dark-section wave-wrapper-section2">
        <div className="px-[8%] lg:px-[16%] py-30 pb-10 lg:pb-20">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <div className="w-full flex justify-center items-center text-center">
              <div className="w-full lg:w-1/2 title flex flex-col gap-2">
                <motion.div variants={fadeInUp}>
                  <h2 className="inline-block px-4 py-2 rounded-full text-prim text-2xl font-normal border border-prim">
                    <i className="bi bi-rocket-takeoff pe-4"></i>
                    Testimonials
                  </h2>
                </motion.div>

                <motion.h1 className="text-6xl lg:text-7xl font-semibold mt-4" variants={fadeInUp}>
                  Listener Love, What They Say
                </motion.h1>

                <motion.p className='text-gray-300 tracking-wider' variants={fadeInUp}>
                  Explore what our listeners have to say about their experiences with our podcast. Their testimonials capture the essence of the joy, inspiration.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className='mt-0 md:mt-10 px-[8%] lg:px-[16%] lg:pb-30 pb-10'
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <Swiper
            onSwiper={(swiper) => { swiperRef.current = swiper }}
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            speed={1500}
            className="testimonial-wrapper-swiper"
          >
            {TestimonialData.map((test, index) => (
              <SwiperSlide key={index}>
                <div className='flex flex-col md:flex-row justify-between items-center gap-10'>
                  <div className='w-full lg:w-2/5'>
                    <div className='test-img relative'>
                      <Image
                        src={test.image}
                        alt={test.name}
                        className="w-full h-full object-cover rounded-2xl"
                      />

                      <div className='quote-img'>
                        <Image
                          src={quoteBg}
                          alt="quote"
                          className="absolute top-0 right-0 object-contain"
                        />

                        <Image
                          src={quote}
                          alt="quote"
                          className="absolute top-0 right-0 object-contain p-5 rounded-full bg-prim"
                        />
                      </div>
                    </div>
                  </div>

                  <div className='w-full lg:w-1/2 text-content-wrap'>
                    <div className='test-content'>
                      <div className='test-stars flex items-center gap-3'>
                        <i className="bi bi-star-fill text-prim"></i>
                        <i className="bi bi-star-fill text-prim"></i>
                        <i className="bi bi-star-fill text-prim"></i>
                        <i className="bi bi-star-half text-prim"></i>
                        <i className="bi bi-star text-prim"></i>
                      </div>

                      <p className='text-xl text-gray-300 tracking-wide my-5'>
                        {test.pere}
                      </p>

                      <div className='test-border border-t border-dashed border-prim-light opacity-50 pt-5'>
                        <div className='test-info'>
                          <h2 className='text-3xl'> {test.name}</h2>
                          <h2 className='text-xl mt-2 text-gray-400'> {test.role}</h2>
                        </div>
                      </div>

                      <div className='text-btns flex justify-start gap-4 mt-6'>
                        <button
                          onClick={() => swiperRef.current?.slidePrev()}
                          className="w-12 h-12 flex items-center justify-center rounded-full border border-prim text-prim hover:bg-prim hover:text-black transition-all duration-200 hover:-translate-x-1 cursor-pointer"
                        >
                          <i className="bi bi-chevron-double-left"></i>
                        </button>

                        <button
                          onClick={() => swiperRef.current?.slideNext()}
                          className="w-12 h-12 flex items-center justify-center rounded-full border border-prim text-prim hover:bg-prim hover:text-black transition-all duration-200 hover:-translate-x-1 cursor-pointer"
                        >
                          <i className="bi bi-chevron-double-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </>
  )
}

export default Testimonial