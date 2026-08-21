import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Media.module.css";

interface MediaItem {
  id: string;
  date: string;
  image: string;
  alt: string;
  title: string;
  link: string;
}

const mediaItems: MediaItem[] = [
  {
    id: "media-1",
    date: "14 Jan 2026",
    image: "/uploads/dc89d39543197b97.avif",
    alt: "Saudi Arabia opens theme park as kingdom pushes ahead with mega projects",
    title: "Saudi Arabia opens theme park as kingdom pushes ahead with mega projects",
    link: "/news/saudi-arabia-opens-theme-park-as-kingdom-pushes-ahead-with-mega-projects.html",
  },
  {
    id: "media-2",
    date: "19 Jan 2026",
    image: "/uploads/5f2821243f54c140.jpg",
    alt: "Saudi Arabia opens theme park as kingdom pushes ahead with mega projects",
    title: "Saudi Arabia opens  theme park as kingdom pushes ahead with mega projects",
    link: "/news/saudi-arabia-opens--theme-park-as-kingdom-pushes-ahead-with-mega-projects.html",
  },
];

export default function Media() {
  return (
    <>
      {/* Inner Hero Banner */}
      <section className={`inner-hero-wrapper ${styles.innerHeroWrapper}`}>
        <figure>
          <Image
            src="/assets/images/img-hero-project.jpg"
            alt="Media Banner"
            width={1920}
            height={400}
            priority
          />
        </figure>
      </section>

      <main className="w-full">
        {/* News Inner Section Heading & Description */}
        <section className={`news-inner ${styles.newsInner}`}>
          <div className={`container bottom-in ${styles.container}`}>
            <span>News & Events</span>
            <p>
              Stay updated with the latest from Energizese, a specialized
              mechanical services firm delivering excellence across Industrial,
              Commercial, and Residential projects.{" "}
            </p>
          </div>
        </section>

        {/* News Listing Grid Section */}
        <section className={`news-list-wrap ${styles.newsListWrap}`}>
          <div className={`container ${styles.container}`}>
            <div className={`card-row ${styles.cardRow}`}>
              {mediaItems.map((item) => (
                <div key={item.id} className={`card ${styles.card}`}>
                  <span className={`date ${styles.date}`}>{item.date}</span>
                  <div className={`card-image ${styles.cardImage}`}>
                    <figure>
                      <Image
                        src={item.image}
                        alt={item.alt}
                        width={600}
                        height={400}
                      />
                    </figure>
                    <h2>
                      <Link href={item.link}>{item.title}</Link>
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
