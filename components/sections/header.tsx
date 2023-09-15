"use client";

import Image from "next/image"
import logo from '@public/assets/images/sudhagar.svg'
import MenuIcon from '@public/assets/icons/menu.svg'
import CloseIcon from '@public/assets/icons/close-menu.svg'
import { useEffect, useState } from "react"


export default function Header() {

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const toggleMenu = () => isMobile && setMenuOpen((state) => !state);

  const closeMenu = () => isMobile && setMenuOpen(false);

  const handleScreenResChange = ({ matches }: { matches: boolean }) => {
    setIsMobile(matches);
  }

  useEffect(() => {
    const mqList = window.matchMedia('(max-width:1024px)');
    setIsMobile(mqList.matches);
    mqList.addEventListener('change', handleScreenResChange);
    return () => {
      mqList.removeEventListener('change', handleScreenResChange)
    }
  }, []);

  return (
    <header className="container flex items-center justify-between h-20">
      <div>
        <a href="/">

        <Image priority={true} src={logo} alt="logo" width={35} height={35} className="cursor-pointer w-14 h-14 opacity-80" />
        </a>

      </div>
      <button className="flex items-center lg:hidden" aria-label="Open Menu" onClick={() => toggleMenu()}>
        <Image src={MenuIcon} alt="menu" />
      </button>
      <nav className={`main-menu hidden lg:block ${isMobile && isMenuOpen ? 'open' : 'close'}`}
        style={{ display: (isMobile && isMenuOpen) || !isMobile ? 'flex' : 'none' }}
      >
        <button aria-label="Close Menu" className="absolute hidden top-4 right-8" onClick={() => toggleMenu()}
          style={{ display: isMobile && isMenuOpen ? 'block' : 'none' }}
        >
          <Image src={CloseIcon} alt="close" />
        </button>
        <ul className="grid grid-cols-6 gap-6 font-semibold text-white list-none font-heading">
          <li className="text-center uppercase cursor-pointer hover:text-primary">
            <a href="#" onClick={() => closeMenu()}>
              Home
            </a>
          </li>
          <li className="text-center uppercase cursor-pointer hover:text-primary">
            <a href="#projects" onClick={() => closeMenu()}>
              Projects
            </a>
          </li>
          <li className="text-center uppercase cursor-pointer hover:text-primary">
            <a href="#career" onClick={() => closeMenu()}>
              Career
            </a>
          </li>
          <li className="text-center uppercase cursor-pointer hover:text-primary">
            <a href="#about" onClick={() => closeMenu()}>
              About
            </a>
          </li>
          <li className="text-center uppercase cursor-pointer hover:text-primary">
            <a href="#blog" onClick={() => closeMenu()}>
              Blog
            </a>
          </li>
          <li className="text-center uppercase cursor-pointer hover:text-primary">
            <a href="#contact" onClick={() => closeMenu()}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}