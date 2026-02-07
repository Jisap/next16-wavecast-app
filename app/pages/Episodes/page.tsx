"use client"

import Image from "next/image"
import pageElm1 from "@/public/Images/page-elm-1.png"
import pageElm2 from "@/public/Images/page-elm-2.png"
import pageElm3 from "@/public/Images/page-elm-3.png"
import pageElm4 from "@/public/Images/page-elm-4.png"

import brand2 from "@/public/Images/brand-icon-1.png"
import brand1 from "@/public/Images/brand-icon-2.png"
import brand3 from "@/public/Images/brand-icon-3.png"
import brand4 from "@/public/Images/brand-icon-4.png"
import brand5 from "@/public/Images/brand-icon-5.png"


const page = () => {
  return (
    <>
      {/* Page Section */}
      <div className="page-section">
        <Image src={pageElm2} alt="Element" className="elm2 element" />
        <Image src={pageElm3} alt="Element" className="elm3 element" />
        <Image src={pageElm4} alt="Element" className="elm4 element" />

        <div className="page-content w-full md:w-1/2 flex justify-center flex-col pt-10">
          <Image src={pageElm1} alt="Element" className="w-full h-full" />

          <h1 className="text-6xl lg:text-8xl font-semibold justify-center my-6">
            All <span className="text-prim">Episodes</span>
          </h1>

          <div className="flex items-center justify-center gap-3 cursor-pointer mt-5">
            <Image src={brand1} alt="Brand" />
            <Image src={brand2} alt="Brand" />
            <Image src={brand3} alt="Brand" />
            <Image src={brand4} alt="Brand" />
            <Image src={brand5} alt="Brand" />
          </div>
        </div>
      </div>

      {/* Episodes */}
    </>
  )
}

export default page