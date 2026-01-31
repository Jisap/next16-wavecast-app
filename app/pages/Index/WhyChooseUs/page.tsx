"use client"

import Image from "next/image"
import WhyChooseUsImg from "@/public/Images/why-choose-1.png"
import WhyChooseUsImg2 from "@/public/Images/why-choose-2.png"
import WhyChooseUsImg3 from "@/public/Images/why-choose-3.png"
import Button from "@/app/Components/Button/Button"
import Link from "next/link"




const WhyChooseUs = () => {
  return (
    <>
      <div className='light-section'>
        <div className='px-[8%] lg:px-[16%] py-30'>
          <div className='flex flex-col lg:flex-row justify-between items-center gap-20'>
            {/* izda */}
            <div className='w-full lg:w-1/2'>
              <div className="WhyChooseUs-img flex items-end gap-5">
                <Image
                  src={WhyChooseUsImg}
                  alt="Why Choose Us"
                  className="w-full h-fit border-t-2 border-prim pt-5"
                />
                <Image
                  src={WhyChooseUsImg2}
                  alt="Why Choose Us"
                  className="w-full h-fit"
                />
                <Image
                  src={WhyChooseUsImg3}
                  alt="Why Choose Us"
                />
              </div>
            </div>

            {/* dcha */}
            <div className="w-full lg:w-1/2">
              <div className="content">
                <div className="title flex flex-col gap-2">
                  <div>
                    <h2 className="inline-block px-4 py-2 rounded-full text-prim text-2xl font-normal border border-prim">
                      <i className="bi bi-rocket-takeoff pe-4"></i>
                      Why Choose Us
                    </h2>
                  </div>

                  <h1 className="text-6xl lg:text-7xl font-semibold mt-7 mb-5">
                    What Makes Us Different From Others?
                  </h1>
                </div>

                <p className="my-5 tracking-wider">
                  Explore vibrant soundscapes where stories of every kind come alive, taking you on an immersive journey and through captivating narratives.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5 border-b border-dashed border-prim-light pb-6 pt-5">
                  <h2 className="text-lg flex items-center gap-2">
                    <i className="bi bi-check2 w-8 h-8 flex justify-center items-center bg-prim rounded-full"></i>
                    More Collection Podcast
                  </h2>

                  <h2 className="text-lg flex items-center gap-2">
                    <i className="bi bi-check2 w-8 h-8 flex justify-center items-center bg-prim rounded-full"></i>
                    Create Your Channel
                  </h2>

                  <h2 className="text-lg flex items-center gap-2">
                    <i className="bi bi-check2 w-8 h-8 flex justify-center items-center bg-prim rounded-full"></i>
                    Listen To Podcast On Offline
                  </h2>

                  <h2 className="text-lg flex items-center gap-2">
                    <i className="bi bi-check2 w-8 h-8 flex justify-center items-center bg-prim rounded-full"></i>
                    Listen In Screen Off Position
                  </h2>
                </div>

                <div className="flex items-center gap-5">
                  <Button variant="btn2">
                    Get Started Free <i className="bi bi-arrow-right-short"></i>
                  </Button>

                  <Link href="/pages" className="flex items-center gap-2 group">
                    <i className="bi bi-play p-4 bg-prim rounded-full flex items-center justify-center text-black text-2xl group-hover:bg-second group-hover:text-white cursor-pointer transition-all duration-200"></i>

                    <h2 className="text-xl underline text-prim group-hover:text-second transition-all duration-200">See About Us</h2>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhyChooseUs