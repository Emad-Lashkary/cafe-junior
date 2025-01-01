"use client";
import { useEffect, useState } from "react";
import Nav from "./Nav";

function Header() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      // Header visibility when 150px from the bottom of the page
      if (scrollPosition + windowHeight >= documentHeight - 150) {
        setIsHeaderVisible(false); // Hide header
      } else {
        setIsHeaderVisible(true); // Show header
      }

      // Logo visibility based on scroll position
      setShowLogo(scrollPosition === 0); // Show logo when at the top
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`py-5 fixed w-full flex flex-row items-center justify-between px-3 z-50 text-4xl tracking-widest bg-gradient-to-br from-primary-500/95 to-primary-800/80 text-center transition-all duration-500 ${
        isHeaderVisible
          ? "top-0 opacity-100 slideInDown"
          : "-top-full opacity-0 slideOutRight"
      }`}
    >
      {/* Placeholder for centering */}
      <div className="relative hidden md:block"></div>

      {/* Logo */}
      <img
        alt="logo"
        src="logo.png"
        className={`absolute w-10 h-10 bottom-0 left-[50%] -translate-x-[50%] transition-all duration-1000 ease-in-out ${
          showLogo
            ? "translate-y-[40%] scale-[5] scale-x-[6.5] opacity-100"
            : "-translate-y-[100%] scale-[400%] scale-x-[500%] opacity-75"
        }`}
      />

      {/* Navigation */}
      <div className="ml-auto md:ml-0">
        <Nav />
      </div>
    </div>
  );
}

export default Header;
