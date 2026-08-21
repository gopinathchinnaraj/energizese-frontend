"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState<"en" | "ar">("en");

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname?.startsWith(path)) return true;
    return false;
  };

  const toggleMobileNav = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMobileNav = () => {
    setIsOpen(false);
  };

  const handleLanguageChange = (newLang: "en" | "ar") => {
    setLang(newLang);
    if (newLang === "ar") {
      document.documentElement.dir = "rtl";
      document.body.dir = "rtl";
      document.body.style.textAlign = "right";
      document.body.classList.add("arabic-translated-body");
    } else {
      document.documentElement.dir = "ltr";
      document.body.dir = "ltr";
      document.body.style.textAlign = "left";
      document.body.classList.remove("arabic-translated-body");
    }
  };

  useEffect(() => {
    return () => {
      document.documentElement.dir = "ltr";
      document.body.dir = "ltr";
      document.body.style.textAlign = "left";
      document.body.classList.remove("arabic-translated-body");
    };
  }, []);

  return (
    <header className={styles.mainHeader}>
      <div className={styles.headerContainer}>
        <figure className="m-0">
          <Link href="/">
            <Image
              src="/uploads/21364457ada985f8.png"
              width={235}
              height={102}
              alt="Energizese Logo"
              priority
              className={`${styles.logoImg} w-auto h-auto`}
            />
          </Link>
        </figure>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <nav className={styles.mainNav}>
            <ul>
              <li className={isActive("/") ? styles.active : ""}>
                <Link href="/">Home</Link>
              </li>
              <li className={isActive("/about-us") ? styles.active : ""}>
                <Link href="/about-us">About Us</Link>
              </li>
              <li className={isActive("/services") ? styles.active : ""}>
                <Link href="/services">Services</Link>
              </li>
              <li className={isActive("/projects") ? styles.active : ""}>
                <Link href="/projects">Projects</Link>
              </li>
              <li className={isActive("/career") ? styles.active : ""}>
                <Link href="/career">Career</Link>
              </li>
              <li className={isActive("/media") || isActive("/news") ? styles.active : ""}>
                <Link href="/media">Media</Link>
              </li>
              <li className={isActive("/faqs") ? styles.active : ""}>
                <Link href="/faqs">FAQ’s</Link>
              </li>
              <li className={isActive("/contact-us") ? styles.active : ""}>
                <Link href="/contact-us">Contact Us</Link>
              </li>
              <li className={isActive("/vendor/registration") ? styles.active : ""}>
                <Link href="/vendor/registration">Vendor Registration</Link>
              </li>

              {/* Language Menu */}
              <ul className="notranslate ml-2 flex items-center">
                {lang === "en" ? (
                  <li>
                    <button
                      type="button"
                      onClick={() => handleLanguageChange("ar")}
                      className={`${styles.langBtn} notranslate bg-transparent border-0 font-normal`}
                    >
                      عربي
                    </button>
                  </li>
                ) : (
                  <li>
                    <button
                      type="button"
                      onClick={() => handleLanguageChange("en")}
                      className={`${styles.langBtn} notranslate bg-transparent border-0 font-normal`}
                    >
                      English
                    </button>
                  </li>
                )}
              </ul>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Nav Button */}
      <div
        className={`${styles.mobNav} ${isOpen ? styles.mobNavOpen : ""}`}
        onClick={toggleMobileNav}
        aria-label="Toggle Navigation"
        role="button"
        tabIndex={0}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <ul className={`${styles.mainNavMobile} block lg:hidden`}>
          <li className={isActive("/") ? styles.active : ""} onClick={closeMobileNav}>
            <Link href="/">Home</Link>
          </li>
          <li className={isActive("/about-us") ? styles.active : ""} onClick={closeMobileNav}>
            <Link href="/about-us">About Us</Link>
          </li>
          <li className={isActive("/services") ? styles.active : ""} onClick={closeMobileNav}>
            <Link href="/services">Services</Link>
          </li>
          <li className={isActive("/projects") ? styles.active : ""} onClick={closeMobileNav}>
            <Link href="/projects">Projects</Link>
          </li>
          <li className={isActive("/career") ? styles.active : ""} onClick={closeMobileNav}>
            <Link href="/career">Career</Link>
          </li>
          <li className={isActive("/media") || isActive("/news") ? styles.active : ""} onClick={closeMobileNav}>
            <Link href="/media">Media</Link>
          </li>
          <li className={isActive("/faqs") ? styles.active : ""} onClick={closeMobileNav}>
            <Link href="/faqs">FAQ’s</Link>
          </li>
          <li className={isActive("/contact-us") ? styles.active : ""} onClick={closeMobileNav}>
            <Link href="/contact-us">Contact Us</Link>
          </li>
          <li className={isActive("/vendor/registration") ? styles.active : ""} onClick={closeMobileNav}>
            <Link href="/vendor/registration">Vendor Registration</Link>
          </li>
          <li>
            {lang === "en" ? (
              <a
                onClick={() => {
                  handleLanguageChange("ar");
                  closeMobileNav();
                }}
                className="cursor-pointer"
              >
                عربي
              </a>
            ) : (
              <a
                onClick={() => {
                  handleLanguageChange("en");
                  closeMobileNav();
                }}
                className="cursor-pointer"
              >
                English
              </a>
            )}
          </li>
        </ul>
      )}

      {/* Overlay */}
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ""}`}
        onClick={closeMobileNav}
      ></div>
    </header>
  );
}

