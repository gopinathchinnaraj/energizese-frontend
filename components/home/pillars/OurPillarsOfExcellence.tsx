"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./OurPillarsOfExcellence.module.css";

interface PillarItem {
  id: string;
  title: string;
  content: string;
}

const pillars: PillarItem[] = [
  {
    id: "precision",
    title: "Precision",
    content:
      "We execute every project with meticulous attention to detail and strict adherence to standards. Our disciplined approach ensures accuracy, consistency, and superior results.",
  },
  {
    id: "innovation",
    title: "Innovation",
    content:
      "We embrace forward-thinking solutions and advanced technologies. By continuously evolving, we deliver smarter, more efficient outcomes for our clients.",
  },
  {
    id: "quality",
    title: "Quality",
    content:
      "Excellence is embedded in everything we do. From planning to delivery, we ensure durability, reliability, and outstanding performance.",
  },
  {
    id: "integrity",
    title: "Integrity",
    content:
      "Trust is the foundation of our partnerships. We operate with transparency, accountability, and unwavering ethical principles.",
  },
];

export default function OurPillarsOfExcellence() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      if (window.innerWidth <= 768) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const moveX = (e.clientX - centerX) * 0.04;
        const moveY = (e.clientY - centerY) * 0.04;
        setParallaxOffset({ x: moveX, y: moveY });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const toggleTab = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      ref={sectionRef}
      className={`pillars-excellence-wrapper common-wrapper ${styles.pillarsExcellenceWrapper}`}
    >
      <div className={`container ${styles.container}`}>
        <div className={`pillars-excellence-left ${styles.pillarsExcellenceLeft}`}>
          <div className={`img-holder ${styles.imgHolder}`}>
            <figure style={{ margin: 0, padding: 0 }}>
              <Image
                src="/uploads/3f7e4530b800e3d2.png"
                width={525}
                height={585}
                alt="Core Value"
                priority
              />
            </figure>
            <div className={`frame-animo scene ${styles.frameAnimo}`}>
              <figure
                className={`img1 ${styles.img1}`}
                style={{
                  transform: `translate3d(${parallaxOffset.x}px, ${parallaxOffset.y}px, 0)`,
                  margin: 0,
                  padding: 0,
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
            <figure className={`img2 ${styles.img2}`} style={{ margin: 0, padding: 0 }}>
              <Image
                src="/assets/images/icon-core-value-sub2.png"
                width={170}
                height={194}
                alt="Core Value"
              />
            </figure>
          </div>
        </div>

        <div className={`pillars-excellence-right bottom-in ${styles.pillarsExcellenceRight}`}>
          <h2 className={styles.heading}>
            Our Pillars of <br /> Excellence
          </h2>
          <span className={styles.description}>
            Our values are the bedrock of our company and the reason our clients trust us.
            They shape our approach to every project and inspire us to exceed expectations with professionalism and accountability.
          </span>

          <div className={`tab-wrapper ${styles.tabWrapper}`}>
            {pillars.map((pillar, index) => {
              const isActive = activeIndex === index;
              return (
                <React.Fragment key={pillar.id}>
                  <div
                    onClick={() => toggleTab(index)}
                    className={`btn-tab ${styles.btnTab} ${
                      isActive ? `active ${styles.btnTabActive}` : ""
                    }`}
                  >
                    {pillar.title}
                  </div>
                  <div
                    className={`tab-content ${styles.tabContent} ${
                      isActive ? "block" : "hidden"
                    }`}
                  >
                    <p>{pillar.content}</p>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
