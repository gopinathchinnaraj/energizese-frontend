"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./WhyChooseUs.module.css";

interface TabItem {
  id: number;
  title: string;
  content: string;
}

const tabsData: TabItem[] = [
  {
    id: 1,
    title: "Industry Focused Expertise",
    content:
      "We strive to provide excellent quality products and services to our customers. Our stringent quality check practices help us provide the best standards of goods and services.",
  },
  {
    id: 2,
    title: "Industrial and Infrastructure Solutions",
    content: "Industrial and Infrastructure Solutions",
  },
  {
    id: 3,
    title: "Custom Tailored Solutions",
    content:
      "We strive to provide excellent quality products and services to our customers. Our stringent quality check practices help us provide the best standards of goods and services.",
  },
  {
    id: 4,
    title: "Commitment to Quality & Safety",
    content:
      "We nurture the talent of our people as well as our stakeholders to achieve greater heights in the industry at the same time focusing sustainable development, our efforts help us uplift the local economy, talent and culture.",
  },
];

export default function WhyChooseUs() {
  const [activeTabId, setActiveTabId] = useState<number | null>(1);
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleTab = (id: number) => {
    setActiveTabId((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth <= 768) return;
      const { innerWidth, innerHeight } = window;
      const x = ((e.clientX - innerWidth / 2) / (innerWidth / 2)) * 15;
      const y = ((e.clientY - innerHeight / 2) / (innerHeight / 2)) * 15;
      setParallaxOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className={`${styles.pillarsExcellenceWrapper} common-wrapper`}>
      <div className={styles.container} ref={containerRef}>
        <div className={styles.pillarsExcellenceLeft}>
          <div className={styles.imgHolder}>
            <figure className="m-0">
              <Image
                src="/uploads/9da78afe28956f8d.jpg"
                width={525}
                height={585}
                alt="Core Value"
                className={styles.mainImg}
                priority
              />
            </figure>
            <div className={styles.frameAnimo}>
              <figure
                className={styles.img1}
                style={{
                  transform: `translate(${parallaxOffset.x}px, ${parallaxOffset.y}px)`,
                }}
              >
                <Image
                  width={170}
                  height={188}
                  src="/assets/images/img-hexagon.png"
                  alt="Core Value"
                />
              </figure>
            </div>
            <figure className={styles.img2}>
              <Image
                src="/assets/images/icon-why-us.png"
                width={170}
                height={194}
                alt="Core Value"
              />
            </figure>
          </div>
        </div>

        <div className={`${styles.pillarsExcellenceRight} bottom-in`}>
          <h2>
            Why <br /> Choose Us?
          </h2>
          <p></p>
          <div className={styles.tabWrapper}>
            {tabsData.map((tab) => {
              const isActive = activeTabId === tab.id;
              return (
                <div key={tab.id}>
                  <div
                    className={`${styles.btnTab} ${isActive ? styles.active : ""}`}
                    onClick={() => toggleTab(tab.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        toggleTab(tab.id);
                      }
                    }}
                  >
                    {tab.title}
                  </div>
                  <div
                    className={styles.tabContent}
                    style={{
                      display: isActive ? "block" : "none",
                    }}
                  >
                    <p>{tab.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
