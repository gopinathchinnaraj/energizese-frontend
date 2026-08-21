import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./OurServices.module.css";

interface ServiceItem {
  id: string;
  title: string;
  image: string;
  width: number;
  height: number;
  link: string;
}

const servicesData: ServiceItem[] = [
  {
    id: "industrial-and-infrastructure-solutions",
    title: "Industrial and Infrastructure Solutions",
    image: "/uploads/95812df013c70ad9.jpg",
    width: 600,
    height: 400,
    link: "/services#industrial-and-infrastructure-solutions",
  },
  {
    id: "commercial-and-residential-projects",
    title: "Commercial and Residential Projects",
    image: "/uploads/3946ea2441f7c9b5.jpg",
    width: 600,
    height: 400,
    link: "/services#commercial-and-residential-projects",
  },
  {
    id: "turnkey-projects",
    title: "Turnkey Projects",
    image: "/uploads/f0da0274447e8d79.jpg",
    width: 600,
    height: 400,
    link: "/services#turnkey-projects",
  },
  {
    id: "installation-and-maintenance-services",
    title: "Installation and Maintenance Services",
    image: "/uploads/39c64cbb3197c530.jpg",
    width: 600,
    height: 400,
    link: "/services#installation-and-maintenance-services",
  },
  {
    id: "civil-construction-services",
    title: "Civil Construction Services",
    image: "/uploads/ee987a1523d6cb86.jpg",
    width: 600,
    height: 400,
    link: "/services#civil-construction-services",
  },
  {
    id: "field-services",
    title: "Field Services",
    image: "/uploads/0e504da2ac67094e.jpg",
    width: 600,
    height: 400,
    link: "/services#field-services",
  },
];

export default function OurServices() {
  return (
    <section className={`product-section common-wrapper ${styles.productSection}`}>
      <div className={`container bottom-in ${styles.container}`}>
        <h2 className={styles.heading}>Our Services</h2>
        <div className={`product-listing ${styles.productListing}`}>
          <div className={`item ${styles.item}`}>
            {servicesData.map((service) => (
              <div key={service.id} className={`cell ${styles.cell}`}>
                <Link href={service.link}>
                  <figure>
                    <Image
                      className="img-fluid"
                      src={service.image}
                      alt={service.title}
                      width={service.width}
                      height={service.height}
                    />
                  </figure>
                  <div className={`back-details ${styles.backDetails}`}>
                    <h4>{service.title}</h4>
                  </div>
                  <div className={`front-details ${styles.frontDetails}`}>
                    <figcaption>
                      <h4>{service.title}</h4>
                    </figcaption>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
