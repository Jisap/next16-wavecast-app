"use client"

import PageHeader from '@/app/Components/PageHeader/PageHeader'
import { useParams } from 'next/navigation'
import React from 'react'
import BlogData from "@/app/JsonData/BlogsData.json"
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import EpisodeBanner from '@/app/Components/EpisodeBanner/EpisodeBanner'

const BlogDetails = () => {
  const { id } = useParams();
  const blog = BlogData.find((item) => item.id === Number(id));

  if (!blog) {
    return (
      <div className='dark-section px-[8%] lg:px-[16%] py-32 text-center min-h-[60vh] flex flex-col items-center justify-center'>
        <h2 className='text-4xl text-gray-400 font-bold mb-4'>
          Oops! Blog not found
        </h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          The article you are looking for might have been moved or deleted.
        </p>
        <Link href="/pages/Blogs" className='bg-prim text-black px-8 py-3 rounded-full font-bold hover:bg-white transition-all duration-300'>
          Back to Blogs
        </Link>
      </div>
    )
  }

  const otherBlogs = BlogData.filter(b => b.id !== blog.id).slice(0, 3);

  const platformIcons = [
    { name: 'Apple', icon: 'brand-icon-1.png' },
    { name: 'Spotify', icon: 'brand-icon-2.png' },
    { name: 'Google', icon: 'brand-icon-3.png' },
    { name: 'Soundcloud', icon: 'brand-icon-4.png' },
    { name: 'RSS', icon: 'brand-icon-5.png' },
  ];

  const fadeInUp: any = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const containerVariants: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      <div className="bg-body min-h-screen">
        <PageHeader title={<>Blog <span className="text-prim">Details</span></>} />

        <div className="dark-section py-20 px-[5%] lg:px-[8%] xl:px-[10%]">
          <div className="flex flex-col lg:flex-row items-start gap-10">

            {/* Left Column (Main Content) - 65% width to match Episodes */}
            <div className="w-full lg:w-[65%]">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={containerVariants}
                className="bg-gray p-6 rounded-3xl space-y-8"
              >

                {/* Featured Header Card */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-gray-light rounded-2xl overflow-hidden p-6 md:p-8 border border-gray/10 shadow-xl"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Blog Image */}
                    <div className="w-full aspect-video md:aspect-auto md:h-full relative rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Header text details */}
                    <div className="flex flex-col justify-center space-y-5 text-left">
                      <div className="flex items-center gap-3">
                        <span className="text-prim text-xs font-bold uppercase tracking-widest">
                          {blog.type}
                        </span>
                        <span className="text-gray-400 text-sm font-medium">
                          | {blog.date}
                        </span>
                      </div>

                      <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white leading-tight mt-0">
                        {blog.title}
                      </h1>

                      <p className="text-gray-400 text-base md:text-lg leading-relaxed border-l-2 border-prim pl-6 italic bg-prim/5 py-4 rounded-r-lg">
                        "{blog.mainDescription}"
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Detailed Content Body */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-gray-light rounded-2xl p-6 lg:p-8 space-y-10"
                >
                  {blog.content.map((section, idx) => {
                    const titleKey = `title${idx + 1}` as keyof typeof section;
                    const descKey = `description${idx + 1}` as keyof typeof section;

                    return (
                      <div key={idx} className="space-y-4">
                        <h3 className="text-2xl lg:text-3xl font-bold text-white">
                          {section[titleKey]}
                        </h3>
                        <p className="text-gray-400 tracking-wide leading-relaxed text-sm lg:text-base">
                          {section[descKey]}
                        </p>
                      </div>
                    );
                  })}

                  {/* Follow Us Section at the end of content */}
                  <div className='flex flex-col sm:flex-row items-center justify-between gap-6 p-6 bg-gray rounded-2xl border border-gray-700 mt-12'>
                    <h2 className='text-prim text-2xl font-bold flex items-center gap-2'>
                      Follow US <i className='bi bi-chevron-double-right text-sm'></i>
                    </h2>

                    <div className='flex items-center gap-3'>
                      {['instagram', 'twitter-x', 'facebook', 'youtube', 'threads'].map((social) => (
                        <i key={social} className={`bi bi-${social} w-10 h-10 text-prim rounded-full flex items-center justify-center border border-prim/30 hover:border-prim hover:bg-prim hover:text-black transition-all duration-300 cursor-pointer text-lg`}></i>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Column (Sidebar) - 35% width sticky */}
            <aside className="w-full lg:w-[35%] lg:sticky lg:top-24 space-y-6">

              {/* Related Blogs Widget */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-gray p-6 rounded-3xl border border-gray-700/50 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-8">
                  <span className="w-1.5 h-6 bg-prim rounded-full"></span>
                  <h4 className="font-bold text-white uppercase tracking-wider text-sm">Related Articles</h4>
                </div>

                <div className="space-y-6">
                  {otherBlogs.map((b) => (
                    <Link key={b.id} href={`/pages/Blogs/${b.id}`} className="group flex gap-5 items-center bg-gray-light/30 p-3 rounded-2xl hover:bg-gray-light transition-all duration-300 border border-transparent hover:border-prim/30">
                      <div className="w-20 h-20 relative rounded-xl overflow-hidden shrink-0 shadow-lg">
                        <Image
                          src={b.image}
                          alt={b.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] text-prim font-bold uppercase tracking-widest">{b.type} • {b.date}</span>
                        <h5 className="text-white text-base lg:text-lg font-bold lg:font-extrabold line-clamp-2 leading-tight group-hover:text-prim transition-colors duration-300">
                          {b.title}
                        </h5>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Audio Platforms Widget - Styled like Episodes page */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-gray p-6 rounded-3xl border border-gray-700/50 shadow-lg"
              >
                <h3 className='text-xs font-bold text-gray-400 mb-6 text-center uppercase tracking-[0.2em]'>
                  Listen on Platforms
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {platformIcons.map((platform) => (
                    <Link
                      key={platform.name}
                      href="#"
                      title={platform.name}
                      className="w-12 h-12 bg-gray-light hover:bg-prim rounded-xl flex items-center justify-center transition-all duration-300 border border-gray-700 hover:border-prim group"
                    >
                      <Image
                        src={`/Images/${platform.icon}`}
                        alt={platform.name}
                        width={24}
                        height={24}
                        className="w-6 h-6 object-contain transition-all group-hover:scale-110"
                      />
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Tags Widget */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-gray p-6 rounded-3xl border border-gray-700/50 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-1.5 h-6 bg-prim rounded-full"></span>
                  <h4 className="font-bold text-white uppercase tracking-wider text-sm">Popular Tags</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, idx) => (
                    <Link
                      key={idx}
                      href="#"
                      className='px-4 py-2 bg-gray-light hover:bg-prim text-gray-400 hover:text-black text-xs font-bold rounded-full border border-gray-700 hover:border-prim transition-all duration-300 uppercase tracking-widest'
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </motion.div>

            </aside>
          </div>
        </div>
      </div>

      <EpisodeBanner />
    </>
  )
}

export default BlogDetails