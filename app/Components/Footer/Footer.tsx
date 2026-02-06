import Image from "next/image"
import Link from "next/link"
import Logo from "@/public/Images/Logo-icon.png"
import brand1 from "@/public/Images/brand-icon-1.png"
import brand2 from "@/public/Images/brand-icon-2.png"
import brand3 from "@/public/Images/brand-icon-3.png"
import brand4 from "@/public/Images/brand-icon-4.png"
import brand5 from "@/public/Images/brand-icon-5.png"


export const Footer = () => {
  return (
    <>
      <div className="dark-section">
        <div className="px-[8%] lg:px-[16%] py-20 pb-20">
          <footer>
            <div className="flex flex-col lg:flex-row md:flex-wrap justify-between items-center gap-5 border-b border-prim/30 pb-8">
              <Link href="/">
                <div className='flex items-center gap-2 overflow-hidden'>
                  <Image
                    src={Logo}
                    alt="Logo"
                    className="w-8 h-8 object-cover"
                  />

                  <h1 className='MetalMania text-4xl tracking-wider'>
                    Wave<span className='text-prim'>Cast</span>
                  </h1>
                </div>
              </Link>

              <div className="footer-waves w-full lg:w-auto lg:grow relative h-[80px] overflow-hidden flex items-center justify-center">
                <div className="music-waves2"></div>
              </div>

              <div className="flex justify-center items-center gap-3">
                <h2 className="flex items-center gap-3 text-xl">
                  Subscribe on :
                </h2>

                <div className="flex justify-center items-center gap-3 cursor-pointer">
                  <Image src={brand1} alt="brand1" />
                  <Image src={brand2} alt="brand2" />
                  <Image src={brand3} alt="brand3" />
                  <Image src={brand4} alt="brand4" />
                  <Image src={brand5} alt="brand5" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-5 py-15 pb-15">
              <div className="footer-col">
                <h2 className="text-4xl mb-5 ">
                  Pages
                </h2>

                <div className="flex flex-col gap-2">
                  <Link href="/" >
                    <h3 className="text-gray-300 text-xl hover:text-prim hover:translate-z-1 transition-all duration-300 cursor-pointer">
                      Home
                    </h3>
                  </Link>

                  <Link href="/pages/About" >
                    <h3 className="text-gray-300 text-xl hover:text-prim hover:translate-z-1 transition-all duration-300 cursor-pointer">
                      About
                    </h3>
                  </Link>

                  <Link href="/pages/Episodes" >
                    <h3 className="text-gray-300 text-xl hover:text-prim hover:translate-z-1 transition-all duration-300 cursor-pointer">
                      Episodes
                    </h3>
                  </Link>

                  <Link href="/pages/Blogs" >
                    <h3 className="text-gray-300 text-xl hover:text-prim hover:translate-z-1 transition-all duration-300 cursor-pointer">
                      Blogs
                    </h3>
                  </Link>
                </div>
              </div>

              <div className="footer-col">
                <h2 className="text-4xl mb-5">Contact</h2>

                <div className="flex flex-col gap-3">
                  <h2 className="text-lg text-gray-300 hover:text-prim transition-all duration-300 cursor-pointer">
                    <i className="bi bi-telephone-x pe-2 text-prim"></i> +91 123 456 7890
                  </h2>
                  <h2 className="text-lg text-gray-300 hover:text-prim transition-all duration-300 cursor-pointer">
                    <i className="bi bi-telephone pe-2 text-prim"></i> +91 789 456 1230
                  </h2>
                  <h2 className="text-lg text-gray-300 hover:text-prim transition-all duration-300 cursor-pointer">
                    <i className="bi bi-envelope pe-2 text-prim"></i> info@wavecast.com
                  </h2>
                </div>
              </div>

              <div className="">
                <h2 className="text-4xl mb-5">Address</h2>

                <div className="flex flex-col gap-3">
                  <h2 className="text-lg text-gray-300 hover:text-prim transition-all duration-300 cursor-pointer">
                    <i className="bi bi-geo-alt pe-2 text-prim"></i> 742 Evergreen Terrace, Springfield, IL 67204
                  </h2>
                  <h2 className="text-lg text-gray-300 hover:text-prim transition-all duration-300 cursor-pointer">
                    <i className="bi bi-geo-alt pe-2 text-prim"></i> 901 Sunset Blvd, Los Angeles, CA 90028
                  </h2>
                </div>
              </div>
            </div>

            <div className="footer-bottom border-t border-prim/30 pt-8">
              <div className="flex flex-wrap justify-center lg:justify-between items-center gap-5">
                <p className="text-gray-300">
                  © 2026 <span className="text-prim">WaveCast</span>. All rights reserved.
                </p>

                <div className="flex items-center gap-3">
                  <Link href="/" className="hover:text-prim hover:-translate-y-1 transition-all duration-300 cursor-pointer" >
                    Terms & Conditions
                  </Link>

                  <Link href="/" className="hover:text-prim hover:-translate-y-1 transition-all duration-300 cursor-pointer" >
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}
