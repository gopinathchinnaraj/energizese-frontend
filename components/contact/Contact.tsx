"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./Contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Native form submit handling or visual feedback
  };

  return (
    <>
      {/* Inner Hero Section */}
      <section className={`inner-hero-wrapper ${styles.innerHeroWrapper}`}>
        <figure>
          <Image
            src="/assets/images/img-hero-contact.jpg"
            alt="Contact Us"
            width={1920}
            height={400}
            priority
          />
        </figure>
      </section>

      <main className="w-full">
        {/* Contact Info Wrapper */}
        <section className={`contact-wrapper common-wrapper ${styles.contactWrapper}`}>
          <div className={`container ${styles.container}`}>
            <div className="bottom-in">
              <h2>Contact Us</h2>
              <p>
                We are here to assist you with cutting-edge mechanical solutions
                for your projects. We're just a call or message away. Let's create
                efficient, future-ready spaces together.
              </p>
            </div>
            <div className={`contact-box-container ${styles.contactBoxContainer}`}>
              <div className={`contact-box bottom-in ${styles.contactBox}`}>
                <figure>
                  <Image
                    src="/assets/images/contact-icon-1.png"
                    alt="Contact Address"
                    width={50}
                    height={50}
                  />
                </figure>
                <p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://maps.app.goo.gl/1CpdsBpkier77xrG6"
                  >
                    Yanbu, Saudi Arabia
                  </a>
                </p>
              </div>

              <div className={`contact-box bottom-in ${styles.contactBox}`}>
                <figure>
                  <Image
                    src="/assets/images/contact-icon-2.png"
                    alt="Contact Phone"
                    width={50}
                    height={50}
                  />
                </figure>
                <p>
                  <a target="_blank" rel="noopener noreferrer" href="tel:+966 55 096 0093">
                    +966 55 096 0093
                  </a>
                </p>
              </div>

              <div className={`contact-box bottom-in ${styles.contactBox}`}>
                <figure>
                  <Image
                    src="/assets/images/contact-icon-3.png"
                    alt="Contact Email"
                    width={50}
                    height={50}
                  />
                </figure>
                <p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="mailto:info@energizese.com"
                  >
                    info@energizese.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Wrapper */}
        <section className={`contact-form-wrapper common-wrapper ${styles.contactFormWrapper}`}>
          <div className={`container ${styles.container}`}>
            <h3 className="bottom-in">
              Let’s make something awesome together.
              <br /> Please contact us
            </h3>
            <div className={`form-area bottom-in ${styles.formArea}`}>
              <form onSubmit={handleSubmit}>
                <div className={`form-row ${styles.formRow}`}>
                  <fieldset>
                    <label htmlFor="first_name">First Name</label>
                    <input
                      type="text"
                      id="first_name"
                      name="first_name"
                      required
                      placeholder="Please enter your name here"
                      value={formData.first_name}
                      onChange={handleChange}
                    />
                  </fieldset>
                  <fieldset>
                    <label htmlFor="last_name">Last name</label>
                    <input
                      type="text"
                      id="last_name"
                      name="last_name"
                      required
                      placeholder="Please enter your name here"
                      value={formData.last_name}
                      onChange={handleChange}
                    />
                  </fieldset>
                  <fieldset>
                    <label htmlFor="email">Email address</label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      required
                      placeholder="Please Enter a valid email address"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </fieldset>
                </div>

                <div className={`form-row ${styles.formRow}`}>
                  <fieldset>
                    <label htmlFor="number">Mobile No</label>
                    <input
                      type="text"
                      id="number"
                      name="number"
                      required
                      placeholder="Please Enter your Mobile No"
                      value={formData.number}
                      onChange={handleChange}
                    />
                  </fieldset>
                  <fieldset>
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      placeholder="Enter subject here"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </fieldset>
                </div>

                <div className={`form-row message ${styles.formRow} ${styles.message}`}>
                  <fieldset>
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      cols={45}
                      rows={4}
                      placeholder="Enter Message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </fieldset>
                </div>

                <div className={`form-row ${styles.formRow}`}>
                  <fieldset>
                    <label htmlFor="attachments">If Any Attachments</label>
                    <input
                      type="file"
                      id="attachments"
                      accept=".pdf, .doc, .docx, .png, .jpeg, .jpg"
                      name="attahcments"
                    />
                  </fieldset>
                </div>

                <div className={`form-row submit ${styles.formRow} ${styles.formRowSubmit}`}>
                  <button type="submit" className={styles.submitBtn}>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Section Map */}
        <section className={`section-map bottom-in ${styles.sectionMap}`}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14570.030703532599!2d38.04807455362766!3d24.083635926766448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1765351011983!5m2!1sen!2sin"
            width="100%"
            height="650"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Location Map"
          ></iframe>
        </section>
      </main>
    </>
  );
}
