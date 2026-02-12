"use client"


import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Logo from "@/public/Images/Logo-icon.png"
import menuDot from "@/public/Images/Menu-dot.svg"
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';
import MobileMenuFramer from './MobileMenuFramer';
import Button from '../Button/Button';

type NavLink = {
  label: string;
  href: string;
  dropdown?: {
    label: string;
    href: string
  }[]
}

const navLinks: NavLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Episodes",
    href: "/pages/Episodes",
    dropdown: [
      { label: "Latest Episodes", href: "/pages/Episodes/LatestEpisodes" },
      { label: "Favorite Episode", href: "/pages/Episodes/FavoriteEpisodes" },
      { label: "Episodes Details", href: "/pages/Episodes/2" }
    ]
  },
  {
    label: "Blogs",
    href: "/pages/Blogs",
    dropdown: [
      { label: "Blog Details", href: "/pages/Blogs/2" }
    ]
  },
  {
    label: "Pages",
    href: "/pages/About",
    dropdown: [
      { label: "About", href: "/pages/About" },
      { label: "Host Profiles", href: "/pages/HostProfiles" },
      { label: "Pricing Plan", href: "/pages/Pricing" },
      { label: "Faq's", href: "/pages/Faqs" },
      { label: "Contact Us", href: "/pages/Contact" },
      { label: "Page404", href: "/404-preview" }
    ]
  },
];

export const Navbar = () => {

  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label))
  }

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);


  return (
    <>
      <div className={`
        px-[8%] lg:px-[16%] fixed top-0 left-0 w-full z-50 navbar transition-all duration-300
        ${scrolled ? "bg-black/95 backdrop-blur-md shadow-lg" : "bg-linear-to-b from-black/60 via-black/30 to-transparent"}
      `}
      >
        <div className='flex justify-between items-center gap-5 py-3'>
          <div className='flex items-center gap-8'>
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
          </div>

          <div className='hidden lg:flex items-center gap-3'>
            <nav className='hidden lg:flex space-x-6 menu-link relative z-40'>
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div
                    key={link.label}
                    className='relative group'
                  >
                    <Link
                      href={link.href}
                      className={`
                        flex Circular-font text-lg font-medium 
                        ${pathname === link.href
                          ? "text-white underline font-semibold"
                          : "text-white"
                        } items-center gap-1 hover:text-prim
                      `}
                    >
                      {link.label}
                      <Image
                        src={menuDot}
                        alt="Menu Dot"
                        className="invert brightness-100 grayscale"
                      />
                    </Link>

                    <div className='absolute left-0 top-full hidden group-hover:block bg-gray shadow-xl p-2 rounded-lg min-w-[230px]'>
                      {link.dropdown.map((item) => (
                        <Link
                          href={item.href}
                          key={item.label}
                          className={`
                            block px-4 py-1 rounded-md font-medium text-lg 
                            ${pathname === item.href
                              ? "text-white underline font-semibold"
                              : "text-white"
                            } hover:text-prim hover:translate-x-1 transition-all duration-200 flex gap-2
                        `}
                        >
                          <Image
                            src={menuDot}
                            alt="Menu Dot"
                            className="invert brightness-100"
                          />
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`
                      flex gap-2 text-lg font-medium
                      ${pathname === link.href
                        ? "text-white font-semibold"
                        : "text-white"
                      } hover:text-prim
                    `}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* Right Section */}
          <div className='flex items-center gap-4 nav-right'>
            <Button
              onClick={() => {
                setIsLogin(true)
                setShowModal(true)
              }}
              className='px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm'
            >
              Login <i className='bi bi-arrow-right-short w-5! h-5! flex! items-center! justify-center! sm:w-[30px]! sm:h-[30px]!'></i>
            </Button>
            <Button
              className='hidden lg:flex'
              variant="btn2"
              onClick={() => {
                setIsLogin(false)
                setShowModal(true)
              }}
            >
              Register <i className='bi bi-arrow-right-short'></i>
            </Button>

            {/* Mobile hamburger */}
            <button
              className={`lg:hidden flex flex-col gap-[5px] transition-all duration-300 ${open ? "opacity-0 pointer-events-none scale-0" : "opacity-100 scale-100"}`}
              onClick={() => setOpen(!open)}
            >
              <span className="block w-6 h-[3px] bg-white transition-all"></span>
              <span className="block w-6 h-[3px] bg-white transition-all"></span>
              <span className="block w-6 h-[3px] bg-white transition-all"></span>
            </button>
          </div>

        </div>

        {/* Modal */}
        {showModal && (
          <div className='fixed inset-0 w-full h-screen z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm'>
            <div className='relative bg-[#2D333C] border border-white/10 rounded-3xl p-10 w-[450px] md:w-[500px] shadow-2xl animate-fadeIn'>
              {/* Close */}
              <button
                className='absolute top-5 right-5 text-4xl cursor-pointer text-white hover:text-prim transition-all'
                onClick={() => setShowModal(false)}
              >
                <i className='bi bi-x-lg'></i>
              </button>

              {/* title */}
              <h2 className='text-3xl font-semibold mb-8 text-white'>
                {isLogin ? "Login to your account" : "Register your account"}
              </h2>
              {/* Form */}
              <form className='flex flex-col gap-4'>
                {!isLogin && (
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-gray-800 border border-white/10 text-white px-4 py-3 rounded-xl focus:border-prim focus:outline-none transition-all"
                    required
                  />
                )}
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-gray-800 border border-white/10 text-white px-4 py-3 rounded-xl focus:border-prim focus:outline-none transition-all"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full bg-gray-800 border border-white/10 text-white px-4 py-3 rounded-xl focus:border-prim focus:outline-none transition-all"
                  required
                />

                <button
                  type="submit"
                  className='w-full mt-3 bg-prim text-black py-3 rounded-xl font-semibold hover:bg-prim/80 transition-all cursor-pointer'
                >
                  {isLogin ? "Login Now" : "Register Now"}
                </button>
              </form>

              {/* Switch Auth */}
              <p className='text-center text-sm mt-4 text-white/70 font-semibold'>
                {isLogin ? (
                  <>
                    Don't have an account?{" "}
                    <button
                      type="button"
                      className='text-prim cursor-pointer hover:underline transition-all'
                      onClick={() => {
                        setIsLogin(false)
                      }}
                    >
                      Register here
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <button
                      type="button"
                      className='text-prim cursor-pointer hover:underline transition-all'
                      onClick={() => {
                        setIsLogin(true)
                      }}
                    >
                      Login here
                    </button>
                  </>
                )}
              </p>

              {/* Footer */}
              <p className='text-center text-sm mt-6 pt-4 text-white/50 border-t border-white/10'>
                By Signing o SignUp to <strong>Wavecast</strong>, you agree to our {" "}
                <Link href="/terms" className='text-prim hover:underline transition-all'>Terms of Use</Link> and {" "}
                <Link href="/privacy" className='text-prim hover:underline transition-all'>Privacy Policy</Link>
              </p>
            </div>
          </div>
        )}
      </div>


      {/* Framer Motion Version (Active) */}
      <MobileMenuFramer
        isOpen={open}
        onClose={() => setOpen(false)}
        navLinks={navLinks}
      />
    </>
  )
}
