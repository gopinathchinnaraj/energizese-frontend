import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./HomeContact.module.css";

export default function HomeContact() {
  return (
    <>
      {/* Our Clients Section */}
      <section className={`${styles.clientsWrapper} common-wrapper`}>
        <div className={styles.clientsContainer}>
          <span className={styles.clientsTitle}>Our Clients</span>
          <div className={styles.clientSlider}></div>
        </div>
      </section>
      

      {/* Let Us Innovate Together CTA Section */}
      <section className={`${styles.homeContact} common-wrapper`}>
        <div className={styles.container}>
          <div className={styles.homeContactWrap}>
            <div className={styles.homeContactTitle}>
              <h2>
                Let us Innovate <br /> Together !
              </h2>
            </div>
            <div className={styles.homeContactPara}>
              <p>
                We are here to assist you with cutting-edge mechanical solutions
                for your projects. We&apos;re just a call or message away. Let&apos;s
                create efficient, future-ready spaces together.
              </p>
            </div>
            <div className={styles.homeContactLink}>
              <Link href="/contact-us">
                <figure>
                  <Image
                    src="/assets/images/bg-contact.png"
                    alt="Why work with us"
                    width={240}
                    height={240}
                    priority
                  />
                </figure>
              </Link>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
