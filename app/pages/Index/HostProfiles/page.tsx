"use client"

import HostProfilesData from "@/app/JsonData/HostProfilesData.json"
import HostCard from "@/app/Components/HostCard/HostCard"
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useRef } from "react";
import { motion, Variants } from "framer-motion";

const HostProfiles = () => {

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
      <div className="light-section wave-wrapper-section">
        <div className="px-[8%] lg:px-[16%] py-30 pb-10 lg:pb-20">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div className="w-full lg:w-1/2" variants={fadeInUp}>
              <div className="title flex flex-col gap-2">
                <div>
                  <h2 className="inline-block px-4 py-2 rounded-full text-prim text-2xl font-normal border border-prim">
                    <i className="bi bi-rocket-takeoff pe-4"></i>
                    Host Profiles
                  </h2>
                </div>

                <h1 className="text-6xl lg:text-7xl font-semibold mt-4">
                  Meet the Voices Behind
                </h1>
              </div>
            </motion.div>

            <motion.div className="w-full md:w-1/2" variants={fadeInUp}>
              {/* Custom navigation Button */}
              <div className="flex justify-start md:justify-end gap-4 mt-6 lg:mt-0">
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
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="mt-0 md:mt-10 px-[8%] lg:px-[16%] lg:pb-30 pb-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <Swiper
            onSwiper={(swiper) => { swiperRef.current = swiper }}
            slidesPerView={4}
            spaceBetween={20}
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              1200: { slidesPerView: 4 },
              991: { slidesPerView: 2 },
              757: { slidesPerView: 1 },
              0: { slidesPerView: 1 },
            }}
            className="host-wrapper-swiper"
          >
            {HostProfilesData.map((host, index) => (
              <SwiperSlide key={index}>
                <HostCard
                  name={host.name}
                  role={host.role}
                  img={host.img}
                  className={index % 2 === 1 ? "offset-card" : ""}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </>
  )
}

export default HostProfiles