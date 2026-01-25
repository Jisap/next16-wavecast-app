


import Image from "next/image"
import sunShape from "@/public/Images/hero-sun-shape.png"
import heroBar from "@/public/Images/hero-1.png"
import brand1 from "@/public/Images/brand-icon-1.png"
import brand2 from "@/public/Images/brand-icon-2.png"
import brand3 from "@/public/Images/brand-icon-3.png"
import brand4 from "@/public/Images/brand-icon-4.png"
import brand5 from "@/public/Images/brand-icon-5.png"
import HeroImg from "@/public/Images/Hero.png"
import roundedText from "@/public/Images/Rouded-text.webp"
import Button from "@/app/Components/Button/Button"




const Hero = () => {
  return (
    <>
      <div className="hero">
        {/* <div className="sun-shape">
          <Image 
            src={sunShape}
            alt="Sun Shape"
          />
          <Image 
            src={sunShape}
            alt="Sun Shape"
          />
          <Image 
            src={sunShape}
            alt="Sun Shape"
          />
        </div> */}

        <div className="px-[8%] lg:px-[16%] pt-25">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
            <div className="w-full lg:w-1/2">
              <div className="hero-content w-full">
                <Image
                  src={heroBar}
                  alt="heroBar"
                />

                <h1 className="text-5xl md:text-7xl my-8 font-bold">
                  Explore <span className="text-prim">Sound</span> Storytelling Magic.
                </h1>

                <p className="tracking-wider text-xl">
                  Discover the harmony of heartfelt conversations. Bringin clarity to life's complexities. Focus on what matters most
                </p>

                <div className="hero-btn flex items-center gap-5 my-5">
                  <Button variant="btn2">
                    Latest Episode <i className="bi bi-arrow-right-short"></i>
                  </Button>
                  <Button variant="btn1">
                    Subscribe <i className="bi bi-arrow-right-short"></i>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero