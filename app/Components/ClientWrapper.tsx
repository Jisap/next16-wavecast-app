"use client"

import { usePathname } from 'next/navigation'
import React from 'react'
import { Navbar } from './Nav/Navbar'
import { Footer } from './Footer/Footer'
import { Toaster } from 'react-hot-toast'

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {

  const pathname = usePathname()

  // Define valid main routes that SHOULD show the Navbar and Footer
  const isMainRoute = pathname === "/" || pathname.startsWith("/pages/")

  // Hide layout if it's NOT a main route, OR if it's the explicit 404 preview
  const hideLayout = !isMainRoute || pathname === "/404-preview"


  return (
    <>
      {/* Si hideLayout = false -> no estamos en la página de 404 o en main route -> mostramos el Navbar y el Footer */}
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