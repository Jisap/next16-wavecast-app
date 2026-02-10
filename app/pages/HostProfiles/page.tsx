"use client"

import PageHeader from "@/app/Components/PageHeader/PageHeader"

import HostProfilesData from "@/app/JsonData/HostProfilesData.json"
import HostCard from "@/app/Components/HostCard/HostCard"
import { motion, Variants } from "framer-motion"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const HostProfiles = () => {
  return (
    <>
      <PageHeader
        title={<>Podcast <span className="text-prim">Host</span></>}
      />

      <div className="dark-section pt-20">
        <div className="mt-0 md:mt-10 px-[8%] lg:px-[16%] lg:pb-20 pb-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {HostProfilesData.map((host, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <HostCard
                    name={host.name}
                    role={host.role}
                    img={host.img}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default HostProfiles