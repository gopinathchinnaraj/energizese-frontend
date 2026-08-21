"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import styles from "./HomeClient.module.css";

interface Client {
  id: number;
  name: string;
  logo: string;
  width: number;
  height: number;
}

const clientLogos: Client[] = [
  { id: 1, name: "Client 1", logo: "/uploads/1028b36d78e301d7.png", width: 160, height: 70 },
  { id: 2, name: "Client 2", logo: "/uploads/21364457ada985f8.png", width: 160, height: 70 },
  { id: 3, name: "Client 3", logo: "/uploads/3780ffd93829a06c.png", width: 160, height: 70 },
  { id: 4, name: "Client 4", logo: "/uploads/3f7e4530b800e3d2.png", width: 160, height: 70 },
  { id: 5, name: "Client 5", logo: "/uploads/67771f22ac538b96.png", width: 160, height: 70 },
  { id: 6, name: "Client 6", logo: "/uploads/c045faf4fdba096a.png", width: 160, height: 70 },
  { id: 7, name: "Client 7", logo: "/uploads/efdccbbf45f8128a.png", width: 160, height: 70 },
  { id: 8, name: "Client 8", logo: "/uploads/fb3cd122ff3a7aa3.png", width: 160, height: 70 },
];

export default function HomeClient() {
  const [itemsPerView, setItemsPerView] = useState(6);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isHoveredRef = useRef(false);

  const updateItemsPerView = useCallback(() => {
    if (typeof window === "undefined") return;
    const width = window.innerWidth;
    if (width < 600) {
      setItemsPerView(1);
    } else if (width < 1000) {
      setItemsPerView(3);
    } else {
      setItemsPerView(6);
    }
  }, []);

  useEffect(() => {
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, [updateItemsPerView]);

  const maxIndex = Math.max(0, clientLogos.length - itemsPerView);
  const totalPages = maxIndex + 1;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHoveredRef.current) {
        nextSlide();
      }
    }, 1500);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const itemWidthPercentage = 100 / itemsPerView;

  return (
    <section className={`${styles.clientsWrapper} common-wrapper`}>
      <div className={styles.container}>
        <span className={styles.clientsTitle}>Our Clients</span>
        <div
          className={styles.sliderContainer}
          onMouseEnter={() => (isHoveredRef.current = true)}
          onMouseLeave={() => (isHoveredRef.current = false)}
        >
          <div
            className={styles.sliderTrack}
            style={{
              transform: `translateX(-${currentIndex * itemWidthPercentage}%)`,
            }}
          >
            {clientLogos.map((client) => (
              <div
                key={client.id}
                className={styles.sliderItem}
                style={{ width: `${itemWidthPercentage}%` }}
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={client.width}
                  height={client.height}
                  className={styles.clientLogo}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Owl Dots Pagination */}
        {totalPages > 1 && (
          <div className={styles.owlDots}>
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`${styles.dot} ${idx === currentIndex ? styles.dotActive : ""
                  }`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
