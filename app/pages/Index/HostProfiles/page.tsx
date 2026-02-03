"use client"

import Image from "next/image"
import host1 from "@/public/Images/host-profile-1.png"
import host2 from "@/public/Images/host-profile-2.png"
import host3 from "@/public/Images/host-profile-3.png"
import host4 from "@/public/Images/host-profile-4.png"
import host5 from "@/public/Images/host-profile-5.png"
import host6 from "@/public/Images/host-profile-6.png"
import host7 from "@/public/Images/host-profile-7.png"
import host8 from "@/public/Images/host-profile-8.png"
import host9 from "@/public/Images/host-profile-9.png"
import host10 from "@/public/Images/host-profile-10.png"
import host11 from "@/public/Images/host-profile-1.png"
import host12 from "@/public/Images/host-profile-2.png"
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useRef } from "react";
import Link from "next/link";

const HostProfilesData = [
  {
    id: 1,
    name: "Liam Johnson",
    img: host1,
    role: "Developer"
  },
  {
    id: 2,
    name: "Emma Williams",
    img: host2,
    role: "Expert Host"
  },
  {
    id: 3,
    name: "Noah Brown",
    img: host3,
    role: "Singer"
  },
  {
    id: 4,
    name: "Olivia Jones",
    img: host4,
    role: "Actor"
  },
  {
    id: 5,
    name: "William Garcia",
    img: host5,
    role: "Chef"
  },
  {
    id: 6,
    name: "Ava Miller",
    img: host6,
    role: "Dancer"
  },
  {
    id: 7,
    name: "James Davis",
    img: host7,
    role: "Musician"
  },
  {
    id: 8,
    name: "Sophia Rodriguez",
    img: host8,
    role: "Model"
  },
  {
    id: 9,
    name: "Benjamin Martinez",
    img: host9,
    role: "Photographer"
  },
  {
    id: 10,
    name: "Isabella Hernandez",
    img: host10,
    role: "Writer"
  },
  {
    id: 11,
    name: "Lucas Lopez",
    img: host11,
    role: "Artist"
  },
  {
    id: 12,
    name: "Mia Gonzalez",
    img: host12,
    role: "Entrepreneur"
  },
]

const HostProfiles = () => {

  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <>
      <div className="light-section">
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
                <div className={`host-card ${index % 2 === 1 ? "offset-card" : ""}`}>
                  <div className="host-img-wrap">
                    <div className="host-img overflow-hidden rounded-2xl">
                      <Image
                        src={host.img}
                        alt={host.name}
                        width={1000}
                        height={100}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default HostProfiles