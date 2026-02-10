"use client"

import PageHeader from "@/app/Components/PageHeader/PageHeader"

import HostProfilesData from "@/app/JsonData/HostProfilesData.json"
import HostCard from "@/app/Components/HostCard/HostCard"

const HostProfiles = () => {
  return (
    <>
      <PageHeader
        title={<>Podcast <span className="text-prim">Host</span></>}
      />

      <div className="dark-section pt-20">
        <div className="mt-0 md:mt-10 px-[8%] lg:px-[16%] lg:pb-20 pb-10">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {HostProfilesData.map((host, index) => (
                <HostCard
                  key={index}
                  name={host.name}
                  role={host.role}
                  img={host.img}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HostProfiles