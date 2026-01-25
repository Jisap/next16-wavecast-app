"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "@/public/Images/Logo-icon.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { RiCloseLine, RiFacebookFill, RiTwitterFill, RiInstagramLine, RiYoutubeFill } from "react-icons/ri";

gsap.registerPlugin(useGSAP);

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: {
    label: string;
    href: string;
    dropdown?: { label: string; href: string }[];
  }[];
}

const MobileMenu = ({ isOpen, onClose, navLinks }: MobileMenuProps) => {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const waveRef = useRef<SVGSVGElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  useGSAP(() => {
    // Clear any active animations
    gsap.killTweensOf([containerRef.current, ".wave-path-1", ".wave-path-2", ".wave-path-3", ".menu-content", ".nav-item", ".social-icon", closeBtnRef.current, ".logo-container"]);

    if (isOpen) {
      const tl = gsap.timeline();

      // Show container immediately
      gsap.set(containerRef.current, {
        autoAlpha: 1,
        visibility: "visible",
        display: "block"
      });

      // Reset paths to flat at bottom
      const startPath = "M 0 100 L 100 100 L 100 100 Q 50 100 0 100 Z";
      const endPath = "M 0 100 L 100 100 L 100 0 Q 50 -20 0 0 Z";

      gsap.set([".wave-path-1", ".wave-path-2", ".wave-path-3"], {
        attr: { d: startPath }
      });

      tl.to(".wave-path-1", {
        attr: { d: endPath },
        duration: 0.8,
        ease: "power3.inOut"
      })
        .to(".wave-path-2", {
          attr: { d: endPath },
          duration: 0.8,
          ease: "power3.inOut"
        }, "-=0.7")
        .to(".wave-path-3", {
          attr: { d: endPath },
          duration: 0.8,
          ease: "power3.inOut"
        }, "-=0.7")
        .fromTo(".logo-container",
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
          "-=0.4"
        )
        .fromTo(".menu-content",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(".nav-item",
          { scale: 0.9, opacity: 0, y: 20 },
          { scale: 1, opacity: 1, y: 0, duration: 0.4, stagger: 0.08, ease: "back.out(1.7)" },
          "-=0.3"
        )
        .fromTo(".social-icon",
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.4, stagger: 0.1, ease: "elastic.out(1, 0.5)" },
          "-=0.3"
        )
        .fromTo(closeBtnRef.current,
          { opacity: 0, scale: 0, rotate: -90 },
          { opacity: 1, scale: 1, rotate: 0, duration: 0.4, ease: "back.out(1.7)" },
          "-=0.5"
        );
    } else {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(containerRef.current, { autoAlpha: 0, visibility: "hidden", display: "none" });
        }
      });

      const startPath = "M 0 100 L 100 100 L 100 100 Q 50 100 0 100 Z";

      tl.to(".nav-item", {
        opacity: 0,
        y: -15,
        duration: 0.3,
        stagger: 0.03,
        ease: "power2.in"
      })
        .to([".menu-content", ".logo-container", closeBtnRef.current], {
          opacity: 0,
          y: 10,
          duration: 0.4,
          ease: "power2.in"
        }, "-=0.2")
        .to([".wave-path-3", ".wave-path-2", ".wave-path-1"], {
          attr: { d: startPath },
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.inOut"
        }, "-=0.3");
    }
  }, { dependencies: [isOpen], scope: containerRef, revertOnUpdate: true });

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-100 menu-overlay pointer-events-none ${isOpen ? 'pointer-events-auto' : ''}`}
      style={{ visibility: 'hidden', display: 'none' }}
    >
      {/* Animated Wave Backgrounds */}
      <svg
        ref={waveRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path className="wave-path-1" fill="#ffb340" d="M 0 100 L 100 100 L 100 100 Q 50 100 0 100 Z" />
        <path className="wave-path-2" fill="#ffb340" opacity="0.4" d="M 0 100 L 100 100 L 100 100 Q 50 100 0 100 Z" />
        <path className="wave-path-3" fill="#1c1d20" d="M 0 100 L 100 100 L 100 100 Q 50 100 0 100 Z" />
      </svg>

      {/* Header with Logo */}
      <div className="absolute top-8 left-8 flex items-center gap-2 z-110 logo-container opacity-0">
        <Image src={Logo} alt="Logo" className="w-10 h-10 object-cover" />
        <h2 className="MetalMania text-3xl tracking-wider text-white">
          Wave<span className="text-prim">Cast</span>
        </h2>
      </div>

      {/* Close Button */}
      <button
        ref={closeBtnRef}
        onClick={() => {
          console.log("Close button clicked");
          onClose();
        }}
        className="absolute top-6 right-8 p-2 text-white hover:text-black hover:bg-white rounded-full transition-all duration-300 z-999 opacity-0 pointer-events-auto cursor-pointer"
        aria-label="Close menu"
      >
        <RiCloseLine size={30} />
      </button>

      {/* Menu Content */}
      <div className="relative h-full flex flex-col justify-center px-10 md:px-20 z-105 menu-content pointer-events-auto">
        <nav className="flex flex-col gap-6 mb-12">
          {navLinks.map((link) => (
            <div key={link.label} className="nav-item">
              <Link
                href={link.href}
                onClick={onClose}
                className={`text-4xl md:text-7xl font-bold Kanit tracking-tight hover:text-prim transition-colors ${pathname === link.href ? "text-prim" : "text-white"
                  }`}
              >
                {link.label}
              </Link>
              {link.dropdown && (
                <div className="flex flex-wrap gap-4 mt-3 ml-1">
                  {link.dropdown.slice(0, 4).map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={onClose}
                      className="text-base md:text-lg font-medium Kanit text-white/50 hover:text-prim"
                    >
                      # {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Social Links */}
        <div className="flex gap-6 items-center social-container">
          {[RiFacebookFill, RiTwitterFill, RiInstagramLine, RiYoutubeFill].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="social-icon w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-prim hover:text-black transition-all duration-300"
            >
              <Icon size={22} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
