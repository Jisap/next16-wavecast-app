"use client"

import HostProfilesData from "@/app/JsonData/HostProfilesData.json"
import HostCard from "@/app/Components/HostCard/HostCard"
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useRef } from "react";

const HostProfiles = () => {

  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <>
      <div className="light-section wave-wrapper-section">
        <div className="px-[8%] lg:px-[16%] py-30 pb-10 lg:pb-20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="w-full lg:w-1/1">
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
            </div>

            <div className="w-full md:w-1/2">
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
            </div>
          </div>
        </div>

        <div className="mt-0 md:mt-10 px-[8%] lg:px-[16%] lg:pb-30 pb-10">
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
        </div>
      </div>
    </>
  )
}

export default HostProfiles