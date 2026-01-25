"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { RiCloseLine, RiFacebookFill, RiTwitterFill, RiInstagramLine, RiYoutubeFill } from "react-icons/ri";
import Logo from "@/public/Images/Logo-icon.png";

interface MobileMenuFramerProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: {
    label: string;
    href: string;
    dropdown?: { label: string; href: string }[];
  }[];
}

const MobileMenuFramer = ({ isOpen, onClose, navLinks }: MobileMenuFramerProps) => {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed inset-0 z-[100] bg-gradient-to-br from-prim to-[#1c1d20] flex flex-col pt-24 px-10 md:px-20"
        >
          {/* Header with Logo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute top-8 left-8 flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-full bg-black/20 p-1 flex items-center justify-center">
              <Image src={Logo} alt="Logo" className="w-full h-full object-cover" />
            </div>
            <h2 className="MetalMania text-3xl tracking-wider text-black">
              Wave<span className="text-white">Cast</span>
            </h2>
          </motion.div>

          {/* Close Button */}
          <motion.button
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring" }}
            onClick={onClose}
            className="absolute top-6 right-8 p-2 text-white hover:text-black hover:bg-white rounded-full transition-all duration-300"
            aria-label="Close menu"
          >
            <RiCloseLine size={35} />
          </motion.button>

          {/* Menu Items */}
          <nav className="flex flex-col gap-6 md:gap-8 grow justify-center">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.1 + i * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                className="flex flex-col gap-2"
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className={`text-4xl md:text-7xl font-bold Kanit tracking-tighter hover:text-white transition-colors ${pathname === link.href ? "text-white" : "text-black"
                    }`}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="flex flex-wrap gap-4 mt-1">
                    {link.dropdown.slice(0, 3).map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={onClose}
                        className="text-base md:text-lg font-medium Kanit text-black/60 hover:text-white"
                      >
                        # {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Footer Socials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="pb-12 flex gap-8"
          >
            {[RiFacebookFill, RiTwitterFill, RiInstagramLine, RiYoutubeFill].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7 + i * 0.1, type: "spring" }}
                className="w-12 h-12 flex items-center justify-center rounded-2xl bg-black/20 text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenuFramer;
