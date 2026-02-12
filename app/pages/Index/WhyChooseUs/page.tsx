"use client"

import Image from "next/image"
import WhyChooseUsImg from "@/public/Images/why-choose-1.png"
import WhyChooseUsImg2 from "@/public/Images/why-choose-2.png"
import WhyChooseUsImg3 from "@/public/Images/why-choose-3.png"
import Button from "@/app/Components/Button/Button"
import Link from "next/link"
import { motion, Variants } from "framer-motion"



const WhyChooseUs = () => {

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  return (
    <>
      <div className='light-section'>
        <div className='max-w-[1400px] mx-auto px-[5%] py-30'>
          <div className='flex flex-col lg:flex-row justify-between items-center gap-20'>
            {/* izda */}
            <motion.div className='w-full lg:w-1/2' initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp}>
              <div className="WhyChooseUs-img flex items-end gap-5">
                <Image
                  src={WhyChooseUsImg}
                  alt="Why Choose Us"
                  className="w-1/2 h-auto border-t-2 border-prim pt-5"
                />
                <Image
                  src={WhyChooseUsImg2}
                  alt="Why Choose Us"
                  className="w-1/2 h-auto"
                />
                <Image
                  src={WhyChooseUsImg3}
                  alt="Why Choose Us"
                  className="WhyChooseUs-img-floating"
                />
              </div>
            </motion.div>

            {/* dcha */}
            <motion.div
              className="w-full lg:w-1/2"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              <div className="content">
                <div className="title flex flex-col gap-2">
                  <motion.div variants={fadeInUp}>
                    <h2 className="inline-block px-4 py-2 rounded-full text-prim text-2xl font-normal border border-prim">
                      <i className="bi bi-rocket-takeoff pe-4"></i>
                      Why Choose Us
                    </h2>
                  </motion.div>

                  <motion.h1 className="text-6xl lg:text-7xl font-semibold mt-7 mb-5" variants={fadeInUp}>
                    What Makes Us Different From Others?
                  </motion.h1>
                </div>

                <motion.p className="my-5 tracking-wider" variants={fadeInUp}>
                  Explore vibrant soundscapes where stories of every kind come alive, taking you on an immersive journey and through captivating narratives.
                </motion.p>

                <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5 border-b border-dashed border-prim-light pb-6 pt-5" variants={fadeInUp}>
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
                </motion.div>

                <motion.div className="flex items-center gap-5" variants={fadeInUp}>
                  <Button variant="btn2">
                    Get Started Free <i className="bi bi-arrow-right-short"></i>
                  </Button>

                  <Link href="/pages" className="flex items-center gap-2 group">
                    <i className="bi bi-play p-4 bg-prim rounded-full flex items-center justify-center text-black text-2xl group-hover:bg-second group-hover:text-white cursor-pointer transition-all duration-200"></i>

                    <h2 className="text-xl underline text-prim group-hover:text-second transition-all duration-200">See About Us</h2>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhyChooseUs