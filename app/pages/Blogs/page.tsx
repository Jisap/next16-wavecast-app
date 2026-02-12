"use client"

import PageHeader from "@/app/Components/PageHeader/PageHeader"
import BlogData from "@/app/JsonData/BlogsData.json"
import Image from "next/image"
import Link from "next/link"



const Blogs = () => {
  return (
    <>
      <PageHeader
        title="Blogs"
      />

      <div className="px-[8%] lg:px-[16%] py-30 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {BlogData.map((blog, index) => (
            <Link
              href={`/pages/Blogs/${blog.id}`}
              key={index}
              className="flex flex-col md:flex-row items-center gap-10"
            >
              <div className="bg-gray-light w-full p-5 rounded-2xl">
                <div className="blog-img">
                  <Image src={blog.image} alt="blog-image" width={500} height={500} className="object-cover rounded-xl" />
                </div>

                <div className="blog-content mt-6">
                  <div className="flex items-center gap-3">
                    <span className="px-5 py-2 text-xl rounded-full bg-second hover:bg-prim transition-all duration-200 cursor-pointer">
                      {blog.type}
                    </span>

                    <span className="px-5 py-2 text-xl rounded-full bg-gray text-prim cursor-pointer">
                      {blog.date}
                    </span>
                  </div>

                  <h2 className="text-4xl my-5">
                    {blog.title}
                  </h2>

                  <div className="flex items-center gap-3">
                    <span className="text-prim text-xl border-b">Read More</span>

                    <div className="music-waves2"></div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>


    </>
  )
}

export default Blogs