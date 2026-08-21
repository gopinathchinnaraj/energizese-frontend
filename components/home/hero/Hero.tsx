"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

interface SlideData {
  id: number;
  imageSrc: string;
  title: string;
  buttonLink: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    imageSrc: "/uploads/e5e5ae6bfd244ab7.jpg",
    title: "Your Trusted Partner in Every Step",
    buttonLink: "/services",
  },
  {
    id: 2,
    imageSrc: "/uploads/c628c83027401715.jpg",
    title: "Specialized Mechanical Services Firm",
    buttonLink: "/services",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const goToNext = useCallback(() => {
    setIsAnimating(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setIsAnimating(true);
    }, 50);
  }, []);

  const goToPrev = useCallback(() => {
    setIsAnimating(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      );
      setIsAnimating(true);
    }, 50);
  }, []);

  const goToSlide = (index: number) => {
    if (index === currentIndex) return;
    setIsAnimating(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(true);
    }, 50);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [goToNext]);

  const currentSlide = slides[currentIndex];

  return (
    <section className={styles.heroWrapper}>
      <div className="relative w-full">
        <div className={styles.heroSlide}>
          <figure className="relative w-full overflow-hidden m-0">
            <Image
              src={currentSlide.imageSrc}
              width={1903}
              height={939}
              alt={currentSlide.title}
              priority
              className="w-full h-auto min-h-[400px] object-cover transition-opacity duration-700"
            />
          </figure>
          <div className={styles.heroContainer}>
            <div
              className={`${styles.hexagon} ${
                isAnimating ? styles.hexagonActive : ""
              }`}
            >
              <Image
                src="/assets/images/bg-hexagon.png"
                width={527}
                height={587}
                alt="Background Hexagon"
                className={styles.bgHiddenImg}
              />
              <div className={styles.bannerContent}>
                <h1>{currentSlide.title}</h1>
                <Link className={styles.btnCommon} href={currentSlide.buttonLink}>
                  KNOW MORE
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          type="button"
          onClick={goToPrev}
          className={styles.navBtnPrev}
          aria-label="Previous Slide"
        />
        <button
          type="button"
          onClick={goToNext}
          className={styles.navBtnNext}
          aria-label="Next Slide"
        />

        {/* Indicator Dots */}
        <div className={styles.owlDots}>
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => goToSlide(idx)}
              className={idx === currentIndex ? styles.dotActive : ""}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

