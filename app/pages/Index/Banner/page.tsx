"use client"


import Image from 'next/image'
import bannerImg from "@/public/Images/banner.png"
import InputPill from '@/app/Components/InputPill/InputPill'
import { motion, Variants } from "framer-motion"

const Banner = () => {

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
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <>
      <div className="px-[8%] lg:px-[10%] py-20">
        <motion.div
          className='banner bg-[#FFCA79] px-[7%] rounded-xl'
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div>
            <div className='flex flex-col lg:flex-row items-center gap-10 lg:gap-25'>
              <div className='w-full lg:w-3/5 relative'>
                <motion.h1
                  variants={fadeInUp}
                  className='text-4xl lg:text-5xl xl:text-6xl text-text font-semibold my-10'
                >
                  Get the Latest Episode & Never Miss an Episode
                </motion.h1>

                {/* input pill */}
                {/* <div className='flex flex-row items-center gap-2 bg-black rounded-full p-2 lg:p-5 mb-8'>
                  <div className='email-input grow'>
                    <input
                      type="email"
                      placeholder='Enter your email'
                      className='text-white text-sm lg:text-base px-3 py-2 outline-none w-full bg-transparent'
                    />
                  </div>

                  <div className='sub-btn w-auto shrink-0'>
                    <Button variant='btn1'>
                      Subscribe <i className="bi bi-arrow-right-short"></i>
                    </Button>
                  </div>
                </div> */}

                <motion.div
                  variants={fadeInUp}
                  className='flex flex-row items-center gap-2 rounded-full p-2 lg:p-5 mb-8'
                >
                  <InputPill
                    placeholder="Ingresa tu email..."
                    buttonText="Suscribirse"
                    primaryColor="var(--prim)"
                    secondColor="var(--second)"
                    buttonIcon={<span><i className="bi bi-arrow-right-short"></i></span>}
                    containerClassName="bg-black border-gray-700"
                    inputClassName="bg-black text-white placeholder:text-gray-400"
                    onButtonClick={() => console.log('Clicked!')}
                  />
                </motion.div>
              </div>

              <div className='w-full lg:w-1/2'>
                <motion.div variants={fadeInUp} className='banner-img'>
                  <Image
                    src={bannerImg}
                    alt='bannerImg'
                    className='w-full h-full object-cover'
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default Banner