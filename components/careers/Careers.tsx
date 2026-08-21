"use client";

import React, { useState, useEffect, useRef } from "react";
import "./Careers.css";

interface JobItem {
  id: number;
  title: string;
  applyKey: string;
  content: React.ReactNode;
}

const jobsData: JobItem[] = [
  {
    id: 1,
    title: "Technical Support Engineer",
    applyKey: "technical-support-engineer",
    content: (
      <p>
        We strive to provide excellent quality products and services to our
        customers. Our stringent quality check practices help us provide the
        best standards of goods and services.
      </p>
    ),
  },
  {
    id: 2,
    title: "Civil Engineer",
    applyKey: "civil-engineer",
    content: <p><br /></p>,
  },
  {
    id: 3,
    title: "Senior Planning Engineer",
    applyKey: "senior-planning-engineer",
    content: (
      <ul>
        <li>Bachelor s degree in Civil Engineering.</li>
        <li>10 15 years of proven experience in infrastructure projects.</li>
        <li>Strong ability to develop and manage baseline programmes.</li>
        <li>
          Skilled in preparing and updating daily, weekly, and monthly progress
          reports.
        </li>
        <li>
          Proficiency in creating professional presentations for management and
          stakeholders.
        </li>
        <li>
          Extensive experience in preparing Extension of Time (EOT) claims.
        </li>
        <li>
          Excellent communication, coordination, and organizational skills.
        </li>
      </ul>
    ),
  },
];

const countriesList = [
  "Saudi Arabia",
  "United Arab Emirates",
  "Qatar",
  "Kuwait",
  "Bahrain",
  "Oman",
  "Afghanistan",
  "Albania",
  "Algeria",
  "Argentina",
  "Australia",
  "Austria",
  "Bangladesh",
  "Belgium",
  "Brazil",
  "Canada",
  "China",
  "Egypt",
  "France",
  "Germany",
  "India",
  "Indonesia",
  "Italy",
  "Japan",
  "Jordan",
  "Lebanon",
  "Malaysia",
  "Morocco",
  "Netherlands",
  "Pakistan",
  "Philippines",
  "Singapore",
  "South Africa",
  "Spain",
  "Turkey",
  "United Kingdom",
  "United States",
];

export default function Careers() {
  const [activeJobId, setActiveJobId] = useState<number | null>(1);
  const [showApplyForm, setShowApplyForm] = useState<boolean>(false);
  const [selectedJobTitle, setSelectedJobTitle] = useState<string>("");
  const formRef = useRef<HTMLElement>(null);

  const toggleJob = (id: number) => {
    setActiveJobId((prev) => (prev === id ? null : id));
  };

  const handleApplyClick = (jobTitle: string) => {
    setSelectedJobTitle(jobTitle);
    setShowApplyForm(true);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

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
  }, [showApplyForm]);

  return (
    <div className="careers-page-wrapper">
      {/* 1. Inner Hero Wrapper (Banner) */}
      <section className="inner-hero-wrapper">
        <figure>
          <img
            src="/assets/images/career-banner.jpg"
            alt="Careers Banner"
          />
        </figure>
      </section>

      <main>
        {/* 2. Career Intro Section */}
        <section className="career-inner">
          <div className="container bottom-in">
            <span>Join Our Team</span>
            <p>
              We deliver high-quality solutions across Industrial, Commercial,
              and Residential projects. We are looking skilled and dedicated
              professionals who are committed to excellence and innovation. Join
              us to contribute to challenging projects and advance your career
              in a supportive, growth-focused environment.
            </p>
          </div>
        </section>

        {/* 3. Careers Accordion & Image */}
        <section className="careers-wrapper">
          <div className="container">
            <div className="career-img">
              <div className="img-holder">
                <figure>
                  <img
                    src="/uploads/07cb076f8aff197b.jpg"
                    width={525}
                    height={585}
                    alt="Careers at Energizese"
                  />
                </figure>
              </div>
            </div>
            <div className="career-box bottom-in">
              <div className="tab-wrapper">
                {jobsData.map((job) => {
                  const isActive = activeJobId === job.id;
                  return (
                    <div key={job.id}>
                      <div
                        className={`btn-tab ${isActive ? "active" : ""}`}
                        onClick={() => toggleJob(job.id)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            toggleJob(job.id);
                          }
                        }}
                      >
                        {job.title}
                      </div>
                      {isActive && (
                        <div className="tab-content" style={{ display: "block" }}>
                          {job.content}
                          <div className="apply-btn-wrap">
                            <button
                              type="button"
                              onClick={() => handleApplyClick(job.title)}
                            >
                              Apply Now
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Career Application Form Section */}
        <section
          ref={formRef}
          className="career-form-wrapper common-wrapper"
          style={{ display: showApplyForm ? "block" : "none" }}
        >
          <div className="container">
            <h2>Apply Now</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-area bottom-in">
                <div className="form-row">
                  <fieldset>
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="Please enter your name here"
                    />
                  </fieldset>

                  <fieldset>
                    <label htmlFor="phone">Mobile number</label>
                    <input
                      id="phone"
                      type="text"
                      name="phone"
                      required
                      placeholder="Please Enter your moble number"
                    />
                  </fieldset>

                  <fieldset>
                    <label htmlFor="email">Email address</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="Please Enter a valid email address "
                    />
                  </fieldset>
                </div>

                <div className="form-row">
                  <fieldset>
                    <label htmlFor="country">Country</label>
                    <select
                      id="country"
                      name="country"
                      required
                      defaultValue="Saudi Arabia"
                    >
                      <option value="">Select Country</option>
                      {countriesList.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </fieldset>
                  <fieldset>
                    <label htmlFor="city">City</label>
                    <input
                      id="city"
                      type="text"
                      name="city"
                      required
                      placeholder="Please enter city here"
                    />
                  </fieldset>
                  <fieldset>
                    <label htmlFor="areaofwork">Area of work</label>
                    <input
                      id="areaofwork"
                      type="text"
                      name="areaofwork"
                      required
                      value={selectedJobTitle}
                      onChange={(e) => setSelectedJobTitle(e.target.value)}
                      placeholder="Area of work"
                    />
                  </fieldset>
                </div>

                <div className="form-row message">
                  <fieldset>
                    <label htmlFor="message">Your Message here</label>
                    <textarea
                      id="message"
                      name="message"
                      cols={45}
                      rows={10}
                      placeholder="Enter Message"
                    ></textarea>
                  </fieldset>
                </div>

                <div className="form-btn-row submit">
                  <input
                    name="file"
                    accept="application/pdf"
                    type="file"
                    required
                    className="uploadcv"
                  />
                  <button className="submit" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
