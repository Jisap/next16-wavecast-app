"use client"

import Experience1 from "@/public/Images/elevate-banner-1.png"
import Experience2 from "@/public/Images/elevate-banner-2.png"
import arrow1 from "@/public/Images/elevate-banner-arrow1.png"
import arrow2 from "@/public/Images/elevate-banner-arrow2.png"

import WhyChooseImg1 from "@/public/Images/why-choose-1.png"
import WhyChooseImg2 from "@/public/Images/why-choose-2.png"
import WhyChooseImg3 from "@/public/Images/why-choose-3.png"
import CountUp from "react-countup"

import PageHeader from "@/app/Components/PageHeader/PageHeader"
import Button from "@/app/Components/Button/Button"
import Image from "next/image"
import Link from "next/link"


const About = () => {
  return (
    <>
      <PageHeader
        title={<>About <span className="text-prim">Wavecast</span></>}
      />

      {/* Experience */}
      <div className="dark-section pb-20">
        <div className="px-[8%] lg:px-[16%] py-20">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-20">
            <div className="w-full lg:w-1/2">
              <div className="content">
                <div className="title flex flex-col gap-2">
                  <div>
                    <h2 className="inline-block px-4 py-2 rounded-full text-prim text-2xl font-normal border border-prim">
                      <i className="bi bi-rocket-takeoff pe-4"></i>
                      Elevate Your Experience
                    </h2>
                  </div>

                  <h1 className="text-5xl md:text-6xl font-semibold mt-7 mb-5">
                    Explore Excellence in <span className="text-prim">Podcasting</span>
                  </h1>
                </div>

                <p className="my-5 tracking-wider">
                  Explore vibrant soundscapes where stories of every kind come alive, taking you on an immersive journey and through captivating narratives.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5 border-b border-dashed border-prim-light pb-6 pt-5">
                  <div className="flex items-center gap-2">
                    <div>
                      <i className="bi bi-volume-up border-s-2 ps-2 border-[#0de27c] text-5xl text-prim"></i>
                    </div>

                    <div className="flex flex-col">
                      <h2 className="text-2xl">
                        Empower Listeners
                      </h2>

                      <p className="mt-3 text-gray-300">
                        Explore vibrant  soundscapes where stories
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div>
                      <i className="bi bi-volume-up border-s-2 ps-2 border-[#0de27c] text-5xl text-prim"></i>
                    </div>

                    <div className="flex flex-col">
                      <h2 className="text-2xl">
                        Build Community
                      </h2>

                      <p className="mt-3 text-gray-300">
                        Connect with like-minded individuals and share your passion.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <Button variant="btn2">
                    Get Started Free <i className="bi bi-arrow-right-short"></i>
                  </Button>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative">
              <div className="experience-images flex items-start gap-3">
                <Image
                  src={Experience1}
                  alt="Experience 1"
                  className="exp-img rounded-2xl"
                />
                <Image
                  src={Experience2}
                  alt="Experience 2"
                  className="exp-img hidden md:block rounded-2xl"
                />

                <Image
                  src={arrow1}
                  alt="arrow 1"
                  className="exp-arrow1"
                />

                <div className="absolute bottom-0 right-35 lg:right-0 bg-[#0de27c] p-5 rounded-2xl">
                  <div className="flex items-center justify-center gap-5 text-text">
                    <h2 className="text-6xl font-semibold">
                      <CountUp start={0} end={17} duration={5} />
                    </h2>

                    <p className="text-xl w-1/2">
                      Years of experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="light-section">
        <div className="px-[8%] lg:px-[16%] py-30 pb-50">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-20">
            <div className="w-full lg:w-1/2">
              <div className="WhyChooseUs-img flex items-end gap-5">
                <Image
                  src={WhyChooseImg1}
                  alt="Why Choose 1"
                  className="w-full h-fit border-t-2 border-prim pt-5"
                />

                <Image
                  src={WhyChooseImg2}
                  alt="Why Choose 2"
                  className="w-full h-fit"
                />

                <Image
                  src={WhyChooseImg3}
                  alt="Why Choose 3"
                  className="WhyChooseUs-img-floating"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="content">
                <div>
                  <h2 className="inline-block px-4 py-2 rounded-full text-prim text-2xl font-normal border border-prim">
                    <i className="bi bi-rocket-takeoff pe-4"></i>
                    Why Choose Us
                  </h2>
                </div>

                <h1 className="text-5xl md:text-6xl font-semibold mt-7 mb-5">
                  What Makes Us <span className="text-prim">Diferent From Other</span>
                </h1>
              </div>

              <p className="my-5 tracking-wider">
                Explore vibrant soundscapes where stories of every kind come alive, taking you on an immersive journey and through captivating narratives.
              </p>

              <div className="grid grid-cols-1 md:grid-cols2 gap-5 my-5 border-b border-dashed border-prim-light pb-6 pt-5">
                <h2 className="text-lg flex items-center gap-2">
                  <i className="bi bi-check2 w-8 h-8 flex justify-center items-center in-checked:bg-prim rounded-full"></i>
                  More Collection Podcast
                </h2>

                <h2 className="text-lg flex items-center gap-2">
                  <i className="bi bi-check2 w-8 h-8 flex justify-center items-center in-checked:bg-prim rounded-full"></i>
                  Create Your Channel
                </h2>

                <h2 className="text-lg flex items-center gap-2">
                  <i className="bi bi-check2 w-8 h-8 flex justify-center items-center in-checked:bg-prim rounded-full"></i>
                  Listen To Podcast On Offline
                </h2>

                <h2 className="text-lg flex items-center gap-2">
                  <i className="bi bi-check2 w-8 h-8 flex justify-center items-center in-checked:bg-prim rounded-full"></i>
                  Listen In Screen Off Position
                </h2>
              </div>

              <div className="flex items-center gap-5">
                <Button variant="btn2">
                  Get Started Free <i className="bi bi-arrow-right-short"></i>
                </Button>

                <Link href="/pages" className="flex items-center gap-2 group">
                  <i className="bi bi-play p-4 bg-prim rounded-full flex items-center justify-center text-black text-2xl group-hover:bg-second group-hover:text-white cursor-pointer transition-all duration-200"></i>

                  <h2 className="text-xl underline text-prim group-hover:text-second transition-all duration-200">
                    See About us
                  </h2>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>

      </div>
    </>
  )
}

export default About