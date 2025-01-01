"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  FaHome,
  FaListUl,
  FaEnvelope,
  FaInfoCircle,
  FaCommentDots,
} from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { CiMenuKebab } from "react-icons/ci";

function NavItem({ href, icon: Icon, label, onClick }) {
  return (
    <li className="px-4 flex text-lg items-center transition-all rounded-l-md duration-300 ease-in-out hover:bg-primary-800 hover:translate-x-1">
      <Icon className="mr-2 text-primary-100" />
      <Link
        href={href}
        onClick={onClick}
        className="py-4 w-full text-primary-100 hover:text-primary-100"
      >
        {label}
      </Link>
    </li>
  );
}

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeNav();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={navRef}>
      <button
        className="text-primary-100 hover:text-primary-100 transition duration-300 right-0"
        onClick={toggleNav}
      >
        <div className="sm:hidden block">
          <CiMenuKebab size={40} />
        </div>
        <div className="hidden sm:block">
          <TiThMenu size={30} />
        </div>
      </button>
      {isOpen && (
        <div className="absolute top-full -right-3 mt-3 w-48 rounded-l-lg shadow-lg z-50 bg-gradient-to-r from-primary-500 to-primary-900 transition-all duration-300 animate-slideInRightFast">
          <ul className="flex flex-col px-1">
            <NavItem href="/" icon={FaHome} label="Home" onClick={closeNav} />
            <NavItem
              href="/lists"
              icon={FaListUl}
              label="Lists"
              onClick={closeNav}
            />
            <NavItem
              href="/contact"
              icon={FaEnvelope}
              label="Contact Me"
              onClick={closeNav}
            />
            <NavItem
              href="/about"
              icon={FaInfoCircle}
              label="About"
              onClick={closeNav}
            />
            <NavItem
              href="/feedback"
              icon={FaCommentDots}
              label="Feedback"
              onClick={closeNav}
            />
          </ul>
        </div>
      )}
    </div>
  );
}

export default Nav;
