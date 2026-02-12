"use client"

import Button from '@/app/Components/Button/Button'
import PageHeader from '@/app/Components/PageHeader/PageHeader'
import client1 from "@/public/Images/contact-client-1.png"
import client2 from "@/public/Images/contact-client-2.png"
import client3 from "@/public/Images/contact-client-3.png"
import client4 from "@/public/Images/contact-client-4.png"
import client5 from "@/public/Images/contact-client-5.png"
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Banner from '../Index/Banner/page'



const Contact = () => {

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
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  return (
    <>
      <PageHeader
        title={<>Contact<span className="text-prim"> Us</span></>}
      />

      <div className='dark-section'>
        <div className="px-[8%] lg:px-[16%] py-20">
          <motion.div
            className="title flex flex-col items-center justify-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="inline-block px-4 py-2 rounded-full text-prim text-2xl font-normal border border-prim">
                <i className="bi bi-rocket-takeoff pe-4"></i>
                Get In Touch
              </h2>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl text-center font-semibold mt-7 mb-5"
            >
              Let Us Help you
            </motion.h1>

            <motion.div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-1.5' variants={containerVariants}>
              {/* Main Office */}
              <motion.div className='flex gap-3 bg-gray-600/30 backdrop-blur-2xl p-5 rounded-2xl group hover:bg-prim hover:text-text transition-all duration-300' variants={fadeInUp}>
                <div className='mt-3 w-15 h-15 rounded-full bg-prim group-hover:bg-text transition-all duration-300 px-5 flex items-center justify-center'>
                  <i className="bi bi-geo-alt text-text group-hover:text-prim text-3xl transition-all duration-300"></i>
                </div>

                <div >
                  <h2 className="text-4xl group-hover:text-text transition-all duration-300">
                    Main Office
                  </h2>

                  <p className='text-gray-300 my-2 group-hover:text-text transition-all duration-300'>
                    123 Podcast Avenue, Suite 456
                    <br />
                    New York, NY 10001
                  </p>

                  <Link href="#" className='text-prim border-b border-prim group-hover:border-text font-semibold group-hover:text-text transition-all duration-300'>
                    Find Location
                  </Link>
                </div>
              </motion.div>

              <motion.div className='flex gap-3 bg-gray-600/30 backdrop-blur-2xl p-5 rounded-2xl group hover:bg-prim hover:text-text transition-all duration-300' variants={fadeInUp}>
                <div className='mt-3 w-15 h-15 rounded-full bg-prim group-hover:bg-text transition-all duration-300 px-5 flex items-center justify-center'>
                  <i className="bi bi-envelope text-text group-hover:text-prim text-3xl transition-all duration-300"></i>
                </div>

                <div >
                  <h2 className="text-4xl group-hover:text-text transition-all duration-300">
                    Email Address
                  </h2>

                  <p className='text-gray-300 my-2 group-hover:text-text transition-all duration-300'>
                    wavecast@gmail.com
                  </p>

                  <p className='text-gray-300 my-2 group-hover:text-text transition-all duration-300'>
                    wavecast@info.com
                  </p>

                  <Link href="#" className='text-prim border-b border-prim group-hover:border-text font-semibold group-hover:text-text transition-all duration-300'>
                    Get in Touch
                  </Link>
                </div>
              </motion.div>

              <motion.div className='flex gap-3 bg-gray-600/30 backdrop-blur-2xl p-5 rounded-2xl group hover:bg-prim hover:text-text transition-all duration-300' variants={fadeInUp}>
                <div className='mt-3 w-15 h-15 rounded-full bg-prim group-hover:bg-text transition-all duration-300 px-5 flex items-center justify-center'>
                  <i className="bi bi-telephone-inbound text-text group-hover:text-prim text-3xl transition-all duration-300"></i>
                </div>

                <div >
                  <h2 className="text-4xl group-hover:text-text transition-all duration-300">
                    Phone Number
                  </h2>

                  <p className='text-gray-300 my-2 group-hover:text-text transition-all duration-300'>
                    +91 9876543210
                  </p>

                  <p className='text-gray-300 my-2 group-hover:text-text transition-all duration-300'>
                    +91 9876543210
                  </p>

                  <Link href="#" className='text-prim border-b border-prim group-hover:border-text font-semibold group-hover:text-text transition-all duration-300'>
                    Contact Us Today!
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className='light-section wave-wrapper-section'>
        <div className="px-[8%] lg:px-[16%] py-20 pt-40">
          <motion.div
            className='flex flex-col lg:flex-row mask-l-from-tocurrent justify-between items-center gap-10 lg:gap-5'
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            <motion.div className='w-full lg:w-1/2' variants={containerVariants}>
              <div className='title'>
                <motion.div variants={fadeInUp}>
                  <h2 className='inline-block px-4 py-2 rounded-full text-prim text-2xl font-normal border border-prim'>
                    <i className="bi bi-rocket-takeoff pe-4"></i>
                    Contact Us
                  </h2>
                </motion.div>

                <motion.h2 className='text-5xl md:text-6xl font-semibold mt-7 mb-5' variants={fadeInUp}>
                  Have questions? don't hesitate to contact us.
                </motion.h2>

                <motion.p variants={fadeInUp}>
                  Purpose of an introduction is to grab the audience's attention, their interest, provide a preview of the value or insights.
                </motion.p>

                <motion.div className='my-5 mt-10 flex items-center gap-3' variants={fadeInUp}>
                  <div className='flex items-center'>
                    <Image
                      src={client1}
                      alt="client1"
                      className="rounded-full -me-3"
                    />
                    <Image
                      src={client2}
                      alt="client2"
                      className="rounded-full -me-3"
                    />
                    <Image
                      src={client3}
                      alt="client3"
                      className="rounded-full -me-3"
                    />
                    <Image
                      src={client4}
                      alt="client4"
                      className="rounded-full -me-3"
                    />
                    <Image
                      src={client5}
                      alt="client5"
                      className="rounded-full -me-3"
                    />
                  </div>

                  <div className='flex flex-col gap-2 ms-6'>
                    <div className='flex items-center gap-1'>
                      <i className='bi bi-star-fill text-prim'></i>
                      <i className='bi bi-star-fill text-prim'></i>
                      <i className='bi bi-star-fill text-prim'></i>
                      <i className='bi bi-star-fill text-prim'></i>
                      <i className='bi bi-star-fill text-prim'></i>
                    </div>

                    <h2>
                      2.5k+ reviews (4.95 of 5)
                    </h2>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div className='w-full lg:w-1/2' variants={fadeInUp}>
              <div className='bg-gray p-6 md:p-8 rounded-3xl shadow-2xl'>
                <h2 className='text-2xl md:text-3xl font-bold mb-2'>
                  Get In Touch
                </h2>
                <p className="text-sm md:text-base text-gray-400 mb-6">
                  We are here for you! How can we help?
                </p>

                <div className='border-b border-dashed border-gray-600 mb-8'></div>

                <form className='flex flex-col gap-5'>
                  <div className='flex flex-col gap-2'>
                    <label className="text-sm font-medium text-gray-300 ml-1">Name</label>
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      className='w-full outline-none bg-gray-light/50 px-4 py-3 md:px-5 md:py-4 rounded-xl border border-gray-600 focus:border-prim focus:bg-gray-light transition-all duration-300 placeholder:text-gray-500'
                    />
                  </div>

                  <div className='flex flex-col gap-2'>
                    <label className="text-sm font-medium text-gray-300 ml-1">Email</label>
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      className='w-full outline-none bg-gray-light/50 px-4 py-3 md:px-5 md:py-4 rounded-xl border border-gray-600 focus:border-prim focus:bg-gray-light transition-all duration-300 placeholder:text-gray-500'
                    />
                  </div>

                  <div className='flex flex-col gap-2'>
                    <label className="text-sm font-medium text-gray-300 ml-1">Message</label>
                    <textarea
                      placeholder="Write Your Message"
                      rows={4}
                      className='w-full outline-none bg-gray-light/50 px-4 py-3 md:px-5 md:py-4 rounded-xl border border-gray-600 focus:border-prim focus:bg-gray-light transition-all duration-300 resize-none placeholder:text-gray-500'
                    />
                  </div>

                  <div className="mt-2">
                    <Button
                      variant="btn2"
                      className='w-full py-3 text-base md:text-lg'
                    >
                      Send Message <i className='bi bi-arrow-right ml-2'></i>
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className='light-section'>
        <Banner />
      </div>
    </>
  )
}

export default Contact