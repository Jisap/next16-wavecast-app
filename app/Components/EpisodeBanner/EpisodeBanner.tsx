"use client"

import Image from "next/image"
import Button from "@/app/Components/Button/Button"
import rocketIcon from "@/public/Images/rocket-icon.png"
import pageBanner1 from "@/public/Images/Page-banner-1.png"
import pageBanner2 from "@/public/Images/Page-banner-2.png"

const EpisodeBanner = () => {
  return (
    <div className="px-[8%] lg:px-[10%] py-20">
      <div className="page-banner p-10 lg:pb-20 flex flex-col justify-center items-center text-center rounded-2xl relative">
        <Image
          src={pageBanner1}
          alt="Page Banner"
          width={500}
          height={550}
          className="hidden lg:block absolute bottom-0 -left-30 xl:-left-40 z-0 pointer-events-none"
        />

        <Image
          src={pageBanner2}
          alt="Page Banner"
          width={500}
          height={550}
          className="hidden lg:block absolute bottom-0 -right-30 xl:-right-40 z-0 pointer-events-none"
        />

        <div className="music-waves"></div>

        <div className="my-3 mt-5">
          <span className="flex items-center gap-2 text-black px-4 py-3 rounded-full border border-black">
            <Image
              src={rocketIcon}
              alt="rocketIcon"
              width={30}
              height={30}
            />

            <h2 className="text-2xl">
              Call To Action
            </h2>
          </span>
        </div>

        <h1 className="text-5xl lg:text-6xl mb-5 font-semibold w-full lg:w-[50%] text-text z-0">
          Let's Discuss For Any Episodes
        </h1>

        <Button variant="btn2" className="bg-text text-black">
          Get In Touch <i className="bi bi-arrow-right-short"></i>
        </Button>
      </div>
    </div>
  )
}

export default EpisodeBanner
