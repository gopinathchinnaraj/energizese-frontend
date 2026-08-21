"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./Projects.module.css";

interface ProjectReport {
  href: string;
  label: string;
  isExternal?: boolean;
}

interface ProjectCard {
  id: string;
  image: string;
  alt: string;
  title: string;
  reportLink?: ProjectReport;
}

const ongoingProjects: ProjectCard[] = [
  {
    id: "ongoing-1",
    image: "index.html",
    alt: "",
    title: "",
  },
  {
    id: "ongoing-2",
    image: "/uploads/75595fa0241f8ea2.jpg",
    alt: "Project 1",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing  tempor.",
  },
  {
    id: "ongoing-3",
    image: "/uploads/cd9b64b888233dd9.jpg",
    alt: "Project 2",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor.",
  },
  {
    id: "ongoing-4",
    image: "/uploads/941307dcbc9f1e53.jpg",
    alt: "Project 3",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor.",
  },
];

const completedProjects: ProjectCard[] = [
  {
    id: "completed-1",
    image: "#",
    alt: "",
    title: "",
  },
  {
    id: "completed-2",
    image: "#",
    alt: "",
    title: "",
  },
  {
    id: "completed-3",
    image: "/uploads/1028b36d78e301d7.png",
    alt: "DHL",
    title: "",
  },
  {
    id: "completed-4",
    image: "/uploads/02b5d79228deac71.jpg",
    alt: "Project 4",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor.",
    reportLink: {
      href: "https://testlink.com/",
      label: "Project report",
      isExternal: true,
    },
  },
  {
    id: "completed-5",
    image: "/uploads/1eabae4031e51fc5.jpg",
    alt: "Project 5",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor.",
    reportLink: {
      href: "/uploads/3f32e845b8ab5822.jpg",
      label: "Project report",
      isExternal: true,
    },
  },
  {
    id: "completed-6",
    image: "/uploads/37c3018a5923bb69.jpg",
    alt: "Project 6",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor.",
    reportLink: {
      href: "/uploads/c045faf4fdba096a.png",
      label: "Project report",
      isExternal: true,
    },
  },
  {
    id: "completed-7",
    image: "/uploads/30cb4bcf07cddd2d.jpg",
    alt: "Project 7",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor.",
    reportLink: {
      href: "https://testlnk.com/",
      label: "Project report",
      isExternal: true,
    },
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"tab-1" | "tab-2">("tab-1");

  return (
    <>
      {/* Inner Hero Section */}
      <section className={`inner-hero-wrapper ${styles.innerHeroWrapper}`}>
        <figure>
          <Image
            src="/assets/images/img-hero-project.jpg"
            alt="Services"
            width={1920}
            height={400}
            priority
          />
        </figure>
      </section>

      <main className="w-full">
        {/* Services Inner Section Heading */}
        <section className={`services-inner ${styles.servicesInner}`}>
          <div className={`container bottom-in ${styles.container}`}>
            <span>Our Projects </span>
          </div>
        </section>

        {/* Projects Listing Wrapper */}
        <section className={`project-list-wrap ${styles.projectListWrap}`}>
          <div className={`container ${styles.container}`}>
            {/* Filter Tabs */}
            <ul className={`tabs ${styles.tabs}`}>
              <li
                onClick={() => setActiveTab("tab-1")}
                className={`tab-link ${styles.tabLink} ${
                  activeTab === "tab-1" ? `current ${styles.tabLinkCurrent}` : ""
                }`}
                data-tab="tab-1"
              >
                Ongoing Projects
              </li>
              <li
                onClick={() => setActiveTab("tab-2")}
                className={`tab-link ${styles.tabLink} ${
                  activeTab === "tab-2" ? `current ${styles.tabLinkCurrent}` : ""
                }`}
                data-tab="tab-2"
              >
                Completed Projects
              </li>
            </ul>

            {/* Tab 1 Content: Ongoing Projects */}
            <div
              id="tab-1"
              className={`tab-content ${styles.tabContent} ${
                activeTab === "tab-1" ? `current ${styles.tabContentCurrent}` : ""
              }`}
            >
              <div className={`card-row ${styles.cardRow}`}>
                {ongoingProjects.map((card) => (
                  <div key={card.id} className={`card ${styles.card}`}>
                    <div className={`card-image ${styles.cardImage}`}>
                      <figure>
                        {card.image.startsWith("/") ? (
                          <Image
                            src={card.image}
                            alt={card.alt}
                            width={600}
                            height={400}
                          />
                        ) : (
                          /* Standard img tag for index.html or # */
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={card.image} alt={card.alt} />
                        )}
                      </figure>
                      <h2>{card.title}</h2>
                      {card.reportLink && (
                        <a
                          href={card.reportLink.href}
                          target={card.reportLink.isExternal ? "_blank" : undefined}
                          rel={card.reportLink.isExternal ? "noopener noreferrer" : undefined}
                          className={`report ${styles.report}`}
                        >
                          {card.reportLink.label}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tab 2 Content: Completed Projects */}
            <div
              id="tab-2"
              className={`tab-content ${styles.tabContent} ${
                activeTab === "tab-2" ? `current ${styles.tabContentCurrent}` : ""
              }`}
            >
              <div className={`card-row ${styles.cardRow}`}>
                {completedProjects.map((card) => (
                  <div key={card.id} className={`card ${styles.card}`}>
                    <div className={`card-image ${styles.cardImage}`}>
                      <figure>
                        {card.image.startsWith("/") ? (
                          <Image
                            src={card.image}
                            alt={card.alt}
                            width={600}
                            height={400}
                          />
                        ) : (
                          /* Standard img tag for index.html or # */
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={card.image} alt={card.alt} />
                        )}
                      </figure>
                      <h2>{card.title}</h2>
                      {card.reportLink && (
                        <a
                          href={card.reportLink.href}
                          target={card.reportLink.isExternal ? "_blank" : undefined}
                          rel={card.reportLink.isExternal ? "noopener noreferrer" : undefined}
                          className={`report ${styles.report}`}
                        >
                          {card.reportLink.label}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
