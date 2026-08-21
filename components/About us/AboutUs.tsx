"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import "./AboutUs.css";

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

export default function AboutUs() {
  const [activeTabId, setActiveTabId] = useState<number | null>(1);
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleTab = (id: number) => {
    setActiveTabId((prev) => (prev === id ? null : id));
  };

  // Parallax effect for hexagon in Why Choose Us section
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

  // Scroll reveal animation for .bottom-in elements
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("from-bottom");
          entry.target.classList.remove("bottom-in-hide");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.15,
    });

    const elements = document.querySelectorAll(".bottom-in");
    elements.forEach((el) => {
      el.classList.add("bottom-in-hide");
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="about-page-wrapper">
      {/* 1. Inner Hero Wrapper (Banner) */}
      <section className="inner-hero-wrapper">
        <figure>
          <img
            src="/assets/images/about-banner.jpg"
            width={1903}
            height={604}
            alt="About Us"
          />
        </figure>
      </section>

      <main>
        {/* 2. About Us Text Section */}
        <section className="about-us-wrapper common-wrapper">
          <div className="container bottom-in">
            <h2>About Us</h2>
            <p>
              Energizese is a specialized mechanical services firm catering to
              the industrial, commercial, and residential industry. With a focus
              on efficiency, precision, and innovation, we provide high- quality
              mechanical solutions that enhance the functionality and longevity
              of interior spaces.
              <br />
              <br />
              Despite being a newly established firm, our team consists of
              experienced professionals dedicated to delivering top-notch
              solutions. We aim to bridge the gap between mechanical excellence
              and interior aesthetics, ensuring every project is executed with
              precision.
            </p>
          </div>
        </section>

        {/* 3. Skill Badges Section */}
        <section className="skill-wrapper">
          <div className="container bottom-in">
            <ul>
              <li>
                <figure>
                  <img
                    src="/uploads/efdccbbf45f8128a.png"
                    width={132}
                    height={149}
                    alt="Respect"
                  />
                </figure>
                <h3>Respect</h3>
              </li>
              <li>
                <figure>
                  <img
                    src="/uploads/67771f22ac538b96.png"
                    width={132}
                    height={149}
                    alt="Accountability"
                  />
                </figure>
                <h3>Accountability</h3>
              </li>
              <li>
                <figure>
                  <img
                    src="/uploads/3780ffd93829a06c.png"
                    width={132}
                    height={149}
                    alt="Diversity"
                  />
                </figure>
                <h3>Diversity</h3>
              </li>
            </ul>
          </div>
        </section>

        {/* 4. Our Mission Section */}
        <section className="our-vision-wrapper common-wrapper">
          <div className="container">
            <div className="vision-left">
              <figure
                style={{
                  backgroundImage: "url(/uploads/685fb6b1f2f30242.jpg)",
                }}
              >
                <img
                  src="/uploads/685fb6b1f2f30242.jpg"
                  width={740}
                  height={888}
                  alt="Our Vision"
                />
              </figure>
            </div>
            <div className="vision-right">
              <div className="content-area bottom-in">
                <h2>Our Mission</h2>
                <p>
                  To provide cutting-edge mechanical services that enhance
                  industrial, commercial, and residential industry ensuring
                  durability, efficiency, and seamless integrations.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Our Vision Section */}
        <section className="about-core-value-wrapper common-wrapper">
          <div className="container">
            <div className="about-core-left">
              <div className="outer-area bottom-in">
                <h2>Our Vision</h2>
                <div className="content-area">
                  <p>
                    To become a trusted name in mechanical solutions for the
                    industrial, commercial, and residential industry, known for
                    reliability, quality, and innovation.
                  </p>
                </div>
              </div>
            </div>
            <div className="about-core-right">
              <figure
                style={{
                  backgroundImage: "url(/uploads/e2fe2a04f2a44182.jpg)",
                }}
              >
                <img
                  src="/uploads/e2fe2a04f2a44182.jpg"
                  width={740}
                  height={888}
                  alt="Our Vision"
                />
              </figure>
            </div>
          </div>
        </section>

        {/* 6. Awards and Certificates Section */}
        <section className="awards-wrapper common-wrapper">
          <div className="container bottom-in">
            <h2>Awards and Certificates</h2>
            <div className="certificate-wrap">
              <div className="card-row">
                <div className="card">
                  <div className="card-image">
                    <figure>
                      <img
                        src="/uploads/c97e5a1e64b91fac.jpg"
                        alt="ISO 14001:2015 CERTIFICATE"
                      />
                    </figure>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image">
                    <figure>
                      <img
                        src="/uploads/322606800044e4ff.jpg"
                        alt="ISO 45001:2018 CERTIFICATE"
                      />
                    </figure>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image">
                    <figure>
                      <img
                        src="/uploads/29742848ca831c4e.jpg"
                        alt="ISO 9001:2015 CERTIFICATE"
                      />
                    </figure>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image">
                    <figure>
                      <img
                        src="/uploads/27bf759901727b18.jpg"
                        alt="ISO 21500:2021 CERTIFICATE"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        

        {/* 7. Why Choose Us Section */}
        <section className="pillars-excellence-wrapper common-wrapper">
          <div className="container" ref={containerRef}>
            <div className="pillars-excellence-left">
              <div className="img-holder">
                <figure>
                  <img
                    src="/uploads/9da78afe28956f8d.jpg"
                    width={525}
                    height={585}
                    alt="Core Value"
                    className="main-img"
                  />
                </figure>
                <div className="frame-animo scene">
                  <figure
                    className="img1"
                    style={{
                      transform: `translate(${parallaxOffset.x}px, ${parallaxOffset.y}px)`,
                    }}
                  >
                    <img
                      width={170}
                      height={188}
                      src="/assets/images/img-hexagon.png"
                      alt="Core Value"
                    />
                  </figure>
                </div>
                <figure className="img2">
                  <img
                    src="/assets/images/icon-why-us.png"
                    width={170}
                    height={194}
                    alt="Core Value"
                  />
                </figure>
              </div>
            </div>
            <div className="pillars-excellence-right bottom-in">
              <h2>
                Why <br /> Choose Us?
              </h2>
              <p></p>
              <div className="tab-wrapper">
                {tabsData.map((tab) => {
                  const isActive = activeTabId === tab.id;
                  return (
                    <div key={tab.id}>
                      <div
                        className={`btn-tab ${isActive ? "active" : ""}`}
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
                      {isActive && (
                        <div className="tab-content" style={{ display: "block" }}>
                          <p>{tab.content}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 8. Home Contact CTA Section */}
        <section className="home-contact common-wrapper">
          <div className="container">
            <div className="home-contact-wrap">
              <div className="home-contact-title">
                <h2>
                  Let us Innovate <br /> Together !
                </h2>
              </div>
              <div className="home-contact-para">
                <p>
                  We are here to assist you with cutting-edge mechanical
                  solutions for your projects. We&apos;re just a call or
                  message away. Let&apos;s create efficient, future-ready
                  spaces together.
                </p>
              </div>
              <div className="home-contact-link">
                <Link href="/contact-us">
                  <figure>
                    <img
                      src="/assets/images/bg-contact.png"
                      alt="Why work with us"
                    />
                  </figure>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
