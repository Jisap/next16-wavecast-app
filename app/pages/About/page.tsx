import React from 'react'
import PageHeader from "@/app/Components/PageHeader/PageHeader"

const page = () => {
  return (
    <>
      <PageHeader
        title={<>About <span className="text-prim">Us</span></>}
      />
      <div className="dark-section p-20 text-center">
        <h2 className="text-4xl">Coming Soon...</h2>
      </div>
    </>
  )
}

export default page