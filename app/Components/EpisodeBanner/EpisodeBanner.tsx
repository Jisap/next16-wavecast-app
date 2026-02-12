"use client"

import Image from "next/image"
import Button from "@/app/Components/Button/Button"
import rocketIcon from "@/public/Images/rocket-icon.png"
import pageBanner1 from "@/public/Images/Page-banner-1.png"
import pageBanner2 from "@/public/Images/Page-banner-2.png"
import SectionTitle from "@/app/Components/SectionTitle/SectionTitle"

const EpisodeBanner = () => {
  return (
    <div className="px-[5%] md:px-[8%] lg:px-[10%] pt-10 md:py-20 dark-section">
      <div className="page-banner p-8 md:p-15 flex flex-col justify-center items-center text-center rounded-2xl relative">
        <Image
          src={pageBanner1}
          alt="Page Banner"
          width={500}
          height={550}
          className="hidden lg:block absolute bottom-0 -left-32 xl:left-0 z-0 pointer-events-none transition-all duration-300"
        />

        <Image
          src={pageBanner2}
          alt="Page Banner"
          width={500}
          height={550}
          className="hidden lg:block absolute top-0 -right-32 xl:right-0 z-0 pointer-events-none transition-all duration-300"
        />

        <div className="music-waves"></div>

        <SectionTitle
          icon={rocketIcon}
          subtitle="Call To Action"
          title="Let's Discuss For Any Episodes"
        />

        <Button variant="btn2" className="bg-text text-black z-10 relative">
          Get In Touch <i className="bi bi-arrow-right-short"></i>
        </Button>
      </div>
    </div>
  )
}

export default EpisodeBanner
