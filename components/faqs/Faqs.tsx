"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./Faqs.module.css";

interface FaqItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

const faqItems: FaqItem[] = [
  {
    id: "faq-1",
    title: "Quality",
    content: (
      <p>
        We strive to provide excellent quality products and services to our
        customers. Our stringent quality check practices help us provide the
        best standards of goods and services.
      </p>
    ),
  },
  {
    id: "faq-2",
    title: "Commitment",
    content: (
      <>
        <p>We are committed to:</p>
        <ul>
          <li>
            Growing our business to higher level with ultimate aim of
            safeguarding our planet for future generations.
          </li>
          <li>
            Winning through creativity, research, commitment and innovation.
          </li>
          <li>
            Providing unmatched customer service throughout the relationship.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "faq-3",
    title: "Quality",
    content: (
      <p>
        We strive to provide excellent quality products and services to our
        customers. Our stringent quality check practices help us provide the
        best standards of goods and services.
      </p>
    ),
  },
  {
    id: "faq-4",
    title: "Nurture",
    content: (
      <p>
        We nurture the talent of our people as well as our stakeholders to
        achieve greater heights in the industry at the same time focusing
        sustainable development, our efforts help us uplift the local economy,
        talent and culture.
      </p>
    ),
  },
];

export default function Faqs() {
  // First item open by default matching custom-scripts.js eq(0)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleTab = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      {/* Inner Hero Section */}
      <section className={`inner-hero-wrapper ${styles.innerHeroWrapper}`}>
        <figure>
          <Image
            src="/assets/images/faq-banner.jpg"
            alt="Services"
            width={1920}
            height={400}
            priority
          />
        </figure>
      </section>

      <main className="w-full">
        {/* FAQ Wrapper */}
        <section className={`faq-wrapper common-wrapper ${styles.faqWrapper}`}>
          <div className={`container ${styles.container}`}>
            <span>FAQ's</span>
            <div className={`tab-wrapper ${styles.tabWrapper}`}>
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <React.Fragment key={item.id}>
                    <div
                      onClick={() => toggleTab(index)}
                      className={`btn-tab ${styles.btnTab} ${
                        isOpen ? `active ${styles.btnTabActive}` : ""
                      }`}
                    >
                      {item.title}
                    </div>
                    {isOpen && (
                      <div className={`tab-content ${styles.tabContent}`}>
                        {item.content}
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
