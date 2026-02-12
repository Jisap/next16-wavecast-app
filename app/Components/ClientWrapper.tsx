"use client"

import { usePathname } from 'next/navigation'
import React from 'react'
import { Navbar } from './Nav/Navbar'
import { Footer } from './Footer/Footer'
import { Toaster } from 'react-hot-toast'

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {

  const pathname = usePathname()
  const hideLayout = pathname === "/404-preview"


  return (
    <>
      {/* Si hideLayout = false -> no estamos en la página de 404 -> mostramos el Navbar y el Footer */}
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </>
  )
}

export default ClientWrapper