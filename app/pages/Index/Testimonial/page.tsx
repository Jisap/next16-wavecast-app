"use client"


import React, { useRef } from 'react'
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from 'next/image';

const Testimonial = () => {

  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <>
      <div className="dark-section wave-wrapper-section2">
        <div className="px-[8%] lg:px-[16%] py-30 pb-10 lg:pb-20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="w-full flex justify-center items-center text-center">
              <div className="w-full lg:w-1/2 title flex flex-col gap-2">
                <div>
                  <h2 className="inline-block px-4 py-2 rounded-full text-prim text-2xl font-normal border border-prim">
                    <i className="bi bi-rocket-takeoff pe-4"></i>
                    Testimonials
                  </h2>
                </div>

                <h1 className="text-6xl lg:text-7xl font-semibold mt-4">
                  Listener Love, What They Say
                </h1>

                <p className='text-gray-300 tracking-wider'>
                  Explore what our listeners have to say about their experiences with our podcast. Their testimonials capture the essence of the joy, inspiration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonial