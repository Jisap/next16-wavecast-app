"use client"

import PageHeader from "@/app/Components/PageHeader/PageHeader"
import { motion, Variants } from "framer-motion"
import BlogData from "@/app/JsonData/BlogsData.json"
import Image from "next/image"
import Link from "next/link"
import EpisodeBanner from "@/app/Components/EpisodeBanner/EpisodeBanner"



const Blogs = () => {

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
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  return (
    <>
      <PageHeader
        title="Blogs"
      />

      <div className="px-[8%] lg:px-[16%] py-30 pb-20 dark-section">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {BlogData.map((blog, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Link
                href={`/pages/Blogs/${blog.id}`}
                className="group h-full block"
              >
                <div className="bg-gray-light w-full p-4 md:p-5 rounded-2xl h-full flex flex-col">
                  <div className="blog-img overflow-hidden rounded-xl">
                    <Image src={blog.image} alt="blog-image" width={500} height={500} className="object-cover w-full h-auto rounded-xl transition-transform duration-300 group-hover:scale-105" />
                  </div>

                  <div className="blog-content mt-4 md:mt-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 md:gap-3 flex-wrap">
                      <span className="px-3 py-1 md:px-5 md:py-2 text-xs md:text-sm font-medium rounded-full bg-second hover:bg-prim transition-all duration-200 cursor-pointer">
                        {blog.type}
                      </span>

                      <span className="px-3 py-1 md:px-5 md:py-2 text-xs md:text-sm font-medium rounded-full bg-gray text-prim cursor-pointer">
                        {blog.date}
                      </span>
                    </div>

                    <h2 className="text-xl md:text-2xl font-bold my-3 md:my-5 line-clamp-2">
                      {blog.title}
                    </h2>

                    <div className="flex items-center gap-3 mt-auto">
                      <span className="text-prim text-sm md:text-base border-b border-prim/50 whitespace-nowrap">Read More</span>

                      <div className="music-waves2 flex-1"></div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInUp}
      >
        <EpisodeBanner />
      </motion.div>
    </>
  )
}

export default Blogs