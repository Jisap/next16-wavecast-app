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
import Button from "@/app/Components/Button/Button"
import InputPill from "@/app/Components/InputPill/InputPill"


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
      <div className="dark-section relative">
        <div className="px-[8%] lg:px-[16%] py-30 pb-0 md:pb-10">
          {/* <div className="w-full bg-gray px-5 py-3 rounded-full flex justify-between items-center gap-5 episode-search">
            <input
              type="text"
              placeholder="Search Episode..."
              className="w-[80%] py-3 outline-none ps-5 text-xl bg-transparent"
            />

            <Button variant="btn2">
              Search <i className="bi bi-arrow-right-short"></i>
            </Button>
          </div> */}

          <div className="episode-search">
            <InputPill
              placeholder="Search Episode..."
              buttonText="Search"
              primaryColor="var(--prim)"
              secondColor="var(--second)"
              buttonIcon={<span><i className="bi bi-arrow-right-short"></i></span>}
              containerClassName="bg-gray border-gray-700"
              inputClassName="bg-gray text-white placeholder:text-white-400"
              onButtonClick={() => console.log('Clicked!')}
            />

            <div className="flex justify-between items-center gap-5 p-2">
              <h2>
                Total Episodes Available ( 5 )
              </h2>

              <div className="relative">
                <select
                  //value={}
                  className="appearance-none bg-gray text-prim px-5 py-2 pr-12 rounded-full outline-none cursor-pointer font-medium hover:bg-gray-light transition-all duration-300"
                >
                  <option value="default">Sort By</option>
                  <option value="high">Episode: High to Low</option>
                  <option value="low">Episode: Low to High</option>
                  <option value="title">Title: A to Z</option>
                </select>

                <i className="bi bi-chevron-down absolute right-5 top-1/2 -translate-y-1/2 text-prim pointer-events-none"></i>

              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default page