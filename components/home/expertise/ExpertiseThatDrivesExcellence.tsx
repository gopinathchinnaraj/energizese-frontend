"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ExpertiseThatDrivesExcellence.module.css";

export default function ExpertiseThatDrivesExcellence() {
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

  return (
    <section
      ref={sectionRef}
      className={`partner-wrapper common-wrapper ${styles.partnerWrapper}`}
    >
      <div className={`container ${styles.container}`}>
        <div className={`partner-left bottom-in ${styles.partnerLeft}`}>
          <h2 className={styles.heading}>Expertise That Drives Excellence</h2>
          <p className={styles.paragraph}>
            With a team of experienced professionals, we bring precision, technical expertise, and industry knowledge to every project we undertake.
          </p>
          <Link className={`btn-common ${styles.btnCommon}`} href="/contact-us">
            More Details
          </Link>
        </div>

        <div className={`partner-right ${styles.partnerRight}`}>
          <div className={`img-holder ${styles.imgHolder}`}>
            <figure style={{ margin: 0, padding: 0 }}>
              <Image
                src="/uploads/fb3cd122ff3a7aa3.png"
                width={525}
                height={585}
                alt="Partner With Us"
                priority
              />
            </figure>

            <div className={`frame-animo scene1 ${styles.frameAnimo}`}>
              <figure
                className={`img1 ${styles.img1}`}
                style={{
                  transform: `translate3d(${parallaxOffset.x}px, ${parallaxOffset.y}px, 0)`,
                  margin: 0,
                  padding: 0,
                }}
              >
                <Image
                  src="/assets/images/img-hexagon.png"
                  width={170}
                  height={188}
                  alt="Partner With Us"
                />
              </figure>
            </div>

            <figure className={`img2 ${styles.img2}`} style={{ margin: 0, padding: 0 }}>
              <Image
                src="/assets/images/icon-partner.png"
                width={170}
                height={194}
                alt="Partner With Us"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
