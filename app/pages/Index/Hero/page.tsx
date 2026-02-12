"use client"


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
import { motion, Variants } from "framer-motion"


const Hero = () => {

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 100 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.2, ease: "easeOut", delay: 0.5 }
    }
  };

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4
      }
    }
  };

  return (
    <>
      <div className="hero">
        <div className="sun-shape">
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
        </div>

        <div className="px-[8%] lg:px-[16%] pt-25">
          <motion.div
            className="flex flex-col lg:flex-row justify-between items-center gap-10"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div
              className="w-full lg:w-1/2"
              variants={containerVariants}
            >
              <div className="hero-content w-full">
                <motion.div variants={fadeInUp}>
                  <Image
                    src={heroBar}
                    alt="heroBar"
                  />
                </motion.div>

                <motion.h1 className="text-5xl md:text-7xl my-8 font-bold" variants={fadeInUp}>
                  Explore <span className="text-prim">Sound</span> Storytelling Magic.
                </motion.h1>

                <motion.p className="tracking-wider text-xl" variants={fadeInUp}>
                  Discover the harmony of heartfelt conversations. Bringin clarity to life's complexities. Focus on what matters most
                </motion.p>

                <motion.div className="hero-btn flex items-center gap-5 my-5" variants={fadeInUp}>
                  <Button variant="btn2">
                    Latest Episode <i className="bi bi-arrow-right-short"></i>
                  </Button>
                  <Button variant="btn1">
                    Subscribe <i className="bi bi-arrow-right-short"></i>
                  </Button>
                </motion.div>

                <motion.div className="mt-10" variants={fadeInUp}>
                  <p className="tracking-wider text-xl">
                    Listen to podcaster through
                  </p>

                  <div className="flex items-center gap-3 cursor-pointer mt-5">
                    <Image src={brand1} alt="brand1" />
                    <Image src={brand2} alt="brand2" />
                    <Image src={brand3} alt="brand3" />
                    <Image src={brand4} alt="brand4" />
                    <Image src={brand5} alt="brand5" />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div className="hero-img" variants={fadeInRight}>
              <Image src={HeroImg} alt="HeroImg" priority />
              <div className="rounded-text">
                <Image src={roundedText} alt="roundedText" />
                <i className="bi bi-arrow-right-short"></i>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Hero