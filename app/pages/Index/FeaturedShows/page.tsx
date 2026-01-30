"use client"

import Image from "next/image";
import topListens1 from "@/public/Images/top-listens-1.png";
import topListens2 from "@/public/Images/top-listens-2.png";
import topListens3 from "@/public/Images/top-listens-3.png";

import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useRef } from "react";
import Link from "next/link";

const TopListensData = [
  {
    id: 1,
    title: "Behind the Mic: Podscasting Exp...",
    img: topListens1,
    episode: "Episode 06",
    hostName: "Devon Lane"
  },
  {
    id: 2,
    title: "Behind the Mic: Podscasting Exp...",
    img: topListens2,
    episode: "Episode 06",
    hostName: "Devon Lane"
  },
  {
    id: 3,
    title: "Behind the Mic: Podscasting Exp...",
    img: topListens3,
    episode: "Episode 06",
    hostName: "Devon Lane"
  },
  {
    id: 4,
    title: "Behind the Mic: Podscasting Exp...",
    img: topListens1,
    episode: "Episode 06",
    hostName: "Devon Lane"
  },
  {
    id: 5,
    title: "Behind the Mic: Podscasting Exp...",
    img: topListens2,
    episode: "Episode 06",
    hostName: "Devon Lane"
  },
  {
    id: 6,
    title: "Behind the Mic: Podscasting Exp...",
    img: topListens3,
    episode: "Episode 06",
    hostName: "Devon Lane"
  },
]

const FeaturedShows = () => {

  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <>
      <div className="dark-section">
        <div className="px-[8%] lg:px-[10%] py-30 pb-10 lg:pb-20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="w-full lg:w-1/2">
              <div className="title flex flex-col gap-2">
                <div>
                  <h2 className="inline-block px-4 py-2 rounded-full text-prim text-2xl font-normal border border-prim">
                    <i className="bi bi-rocket-takeoff pe-4"></i>
                    Featured Shows
                  </h2>
                </div>

                <h1 className="text-6xl lg:text-7xl font-semibold mt-4">
                  Top Listens Now
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

        <div className="mt-10 px-5 pb-30">
          <Swiper
            onSwiper={(swiper) => { swiperRef.current = swiper }}
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              1200: { slidesPerView: 3 },
              991: { slidesPerView: 2 },
              757: { slidesPerView: 1 },
              0: { slidesPerView: 1 },
            }}
          >
            {TopListensData.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="w-full">
                  <div className="flex w-full justify-between bg-gray-light rounded-lg overflow-hidden">
                    <div className="w-full lg:w-1/2">
                      <Image
                        src={item.img}
                        alt="Top Listens"
                        width={1000}
                        height={1000}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="w-full lg:w-1/2">
                      <div className="p-5">
                        <div className="flex flex-col 2xl:flex-row 2xl:justify-between items-start  2xl:items-center">
                          <span className="bg-gray px-5 py-2 text-xs  rounded-full text-prim font-semibold tracking-wide">
                            {item.episode}
                          </span>

                          <Link href="/app/pages">
                            <p className="py-2 font-light text-xs  text-gray-200 hover:text-prim tracking-wider transition-all duration-200">
                              <i className="bi bi-mic text-prim"></i>
                              {item.hostName}
                            </p>
                          </Link>
                        </div>

                        <h2 className="my-5 text-2xl lg:text-3xl font-semibold">
                          {item.title}
                        </h2>

                        <div className="flex items-center gap-3">
                          <i className="bi bi-play p-4 bg-prim rounded-full flex items-center justify-center text-black text-2xl hover:bg-second hover:text-white cursor-pointer transition-all duration-200"></i>

                          <div className="w-full flex flex-col gap-2">
                            <div className="w-full h-1 bg-gray"></div>
                            <span className="text-gray-200">0:00</span>
                          </div>
                        </div>

                        <div className="mt-7">
                          <Link href="/" className="text-prim underline hover:text-white transition-all duration-300 tracking-wider">
                            Listen Now
                          </Link>
                        </div>
                      </div>
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

export default FeaturedShows