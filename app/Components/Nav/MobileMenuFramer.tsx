"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  RiCloseLine,
  RiFacebookFill,
  RiTwitterFill,
  RiInstagramLine,
  RiYoutubeFill,
  RiArrowRightLine,
  RiMenuLine
} from "react-icons/ri";
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
  const menuRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);
  const lastFocusableRef = useRef<HTMLAnchorElement>(null);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    const trapFocus = (e: KeyboardEvent) => {
      if (e.key === "Tab" && isOpen) {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusableRef.current) {
            e.preventDefault();
            lastFocusableRef.current?.focus();
          }
        } else {
          if (document.activeElement === lastFocusableRef.current) {
            e.preventDefault();
            firstFocusableRef.current?.focus();
          }
        }
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("keydown", trapFocus);
      firstFocusableRef.current?.focus();
    } else {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("keydown", trapFocus);
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("keydown", trapFocus);
    };
  }, [isOpen, onClose]);

  const socialVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 }
  };

  const toggleExpanded = (label: string, e: React.MouseEvent) => {
    e.preventDefault();
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(label)) {
        newSet.delete(label);
      } else {
        newSet.add(label);
      }
      return newSet;
    });
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[1000] bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            ref={menuRef}
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
            className="fixed inset-y-0 right-0 z-[1001] w-full max-w-md bg-[var(--body)]/95 backdrop-blur-2xl border-l border-white/10 shadow-2xl overflow-hidden"
          >
            {/* Ambient Background Glows */}
            <div className="absolute top-[-10%] right-[-20%] w-[400px] h-[400px] rounded-full bg-prim/20 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-20%] w-[300px] h-[300px] rounded-full bg-second/10 blur-[80px] pointer-events-none" />

            <div className="h-full flex flex-col relative z-10">
              {/* Header */}
              <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="relative z-10 p-6 border-b border-white/10"
              >
                <div className="flex items-center justify-between">
                  <motion.div
                    className="flex items-center gap-3"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-white/20 to-white/5 p-0.5 flex items-center justify-center backdrop-blur-sm border border-white/10">
                      <Image
                        src={Logo}
                        alt="WaveCast Logo"
                        className="w-full h-full object-contain rounded-xl"
                      />
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-white tracking-tight MetalMania">
                        Wave<span className="text-prim">Cast</span>
                      </h2>
                      <p className="text-xs text-white/60 font-medium Kanit">Podcast with style</p>
                    </div>
                  </motion.div>

                  <motion.button
                    ref={firstFocusableRef}
                    onClick={onClose}
                    className="p-3 rounded-2xl bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all border border-white/10 group"
                    aria-label="Close navigation menu"
                  >
                    <RiCloseLine className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                  </motion.button>
                </div>
              </motion.header>

              {/* Navigation */}
              <nav className="flex-1 px-6 py-8 overflow-y-auto">
                <div className="space-y-2">
                  {navLinks.map((link, index) => {
                    const isLinkActive = isActive(link.href);
                    const isExpanded = expandedItems.has(link.label);

                    return (
                      <motion.div
                        key={link.label}
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.1 + index * 0.08,
                          duration: 0.3,
                          type: "spring",
                          stiffness: 100,
                          damping: 20
                        }}
                      >
                        <motion.div className="group">
                          <div
                            className={`
                            w-full flex items-center justify-between p-4 rounded-2xl
                            transition-all duration-200 relative overflow-hidden text-left
                            ${isLinkActive
                                ? 'text-white'
                                : isExpanded
                                  ? 'text-white bg-white/5'
                                  : 'text-white/60 hover:text-white hover:bg-white/5'
                              }
                          `}
                          >
                            {isLinkActive && (
                              <motion.div
                                layoutId="activeIndicator"
                                className="absolute inset-0 bg-linear-to-r from-second/20 to-prim/20 border border-white/10 rounded-2xl"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                              />
                            )}
                            {link.dropdown ? (
                              <>
                                {link.label === "Pages" ? (
                                  <button
                                    onClick={(e) => toggleExpanded(link.label, e)}
                                    className="relative z-10 flex-1 text-left"
                                  >
                                    <span className={`text-xl tracking-tight Kanit transition-all ${isLinkActive ? 'font-bold' : 'font-medium'}`}>
                                      {link.label}
                                    </span>
                                  </button>
                                ) : (
                                  <Link
                                    href={link.href}
                                    onClick={onClose}
                                    className="relative z-10 flex-1"
                                  >
                                    <span className={`text-xl tracking-tight Kanit transition-all ${isLinkActive ? 'font-bold' : 'font-medium'}`}>
                                      {link.label}
                                    </span>
                                  </Link>
                                )}
                                <button
                                  onClick={(e) => toggleExpanded(link.label, e)}
                                  className={`flex items-center gap-2 relative z-10 p-2 -mr-2 ${isLinkActive ? 'text-white/80' : 'text-white/60 group-hover:text-white'}`}
                                >
                                  <motion.div
                                    animate={{ rotate: isExpanded ? 90 : 0 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    <RiArrowRightLine className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-all" />
                                  </motion.div>
                                  <span className="text-xs">{link.dropdown.length}</span>
                                </button>
                              </>
                            ) : (
                              <Link
                                href={link.href}
                                onClick={onClose}
                                className="relative z-10 w-full flex items-center justify-between"
                              >
                                <span className={`text-xl tracking-tight Kanit transition-all ${isLinkActive ? 'font-bold' : 'font-medium'}`}>{link.label}</span>
                                <RiArrowRightLine className={`w-5 h-5 transition-all ${isLinkActive ? 'opacity-100 text-white' : 'opacity-0 group-hover:opacity-100 text-white/60 group-hover:text-white group-hover:translate-x-1'}`} />
                              </Link>
                            )}
                          </div>

                          {link.dropdown && (
                            <motion.div
                              initial={false}
                              animate={{
                                height: isExpanded ? "auto" : 0,
                                opacity: isExpanded ? 1 : 0
                              }}
                              transition={{
                                duration: 0.2,
                                ease: [0.76, 0, 0.24, 1]
                              }}
                              className="overflow-hidden"
                            >
                              <div className="mt-2 pl-4 space-y-1">
                                {link.dropdown.slice(0, 4).map((item, subIndex) => (
                                  <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{
                                      opacity: isExpanded ? 1 : 0,
                                      x: isExpanded ? 0 : 20
                                    }}
                                    transition={{
                                      delay: isExpanded ? subIndex * 0.05 : 0,
                                      duration: 0.2
                                    }}
                                  >
                                    <Link
                                      href={item.href}
                                      onClick={onClose}
                                      className={`
                                    flex items-center gap-2 px-4 py-2 rounded-xl text-sm
                                    transition-all Kanit
                                    ${pathname === item.href
                                          ? 'text-prim bg-white/10 font-medium'
                                          : 'text-white/60 hover:text-white hover:bg-white/5'
                                        }
                                  `}
                                    >
                                      <span className={`${pathname === item.href ? 'text-prim' : 'text-white/60 opacity-50'} transition-colors`}>#</span>
                                      {item.label}
                                    </Link>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </motion.div>
                      </motion.div>
                    )
                  })}
                </div>
              </nav>

              {/* Footer */}
              <motion.footer
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="p-6 border-t border-white/10"
              >
                <div className="flex items-center justify-between mb-4">
                  <p className="text-xs text-white/60 font-medium Kanit">Connect with us</p>
                  <div className="h-px flex-1 mx-4 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <div className="flex gap-3">
                  {[
                    { Icon: RiFacebookFill, href: "#", label: "Facebook" },
                    { Icon: RiTwitterFill, href: "#", label: "Twitter" },
                    { Icon: RiInstagramLine, href: "#", label: "Instagram" },
                    { Icon: RiYoutubeFill, href: "#", label: "YouTube" }
                  ].map((social, index) => (
                    <motion.a
                      key={social.label}
                      ref={index === 3 ? lastFocusableRef : null}
                      href={social.href}
                      variants={socialVariants}
                      initial="initial"
                      animate="animate"
                      transition={{
                        delay: 0.5 + index * 0.1,
                        type: "spring",
                        stiffness: 200,
                        damping: 20
                      }}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(255, 255, 255, 0.2)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all border border-white/10"
                      aria-label={`Follow us on ${social.label}`}
                    >
                      <social.Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.footer>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenuFramer;
