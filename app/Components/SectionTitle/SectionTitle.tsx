"use client"

import Image, { StaticImageData } from "next/image"

interface SectionTitleProps {
  icon: string | StaticImageData
  subtitle: string
  title: string
  className?: string
}

const SectionTitle = ({ icon, subtitle, title, className = "" }: SectionTitleProps) => {
  return (
    <div className={`flex flex-col items-center justify-center text-center ${className}`}>
      <div className="my-3 mt-5">
        <span className="flex items-center gap-2 text-black px-4 py-3 rounded-full border border-black">
          <Image
            src={icon}
            alt={subtitle}
            width={30}
            height={30}
          />
          <h2 className="text-xl">{subtitle}</h2>
        </span>
      </div>

      <h1 className="text-3xl md:text-5xl lg:text-6xl mb-5 font-semibold w-full lg:w-[60%] text-text z-10 relative drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
        {title}
      </h1>
    </div>
  )
}

export default SectionTitle
