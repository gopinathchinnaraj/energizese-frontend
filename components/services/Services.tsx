"use client";

import React, { useEffect } from "react";
import "./Services.css";

export default function Services() {
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
    <div className="services-page-wrapper">
      {/* 1. Inner Hero Wrapper (Banner) */}
      <section className="inner-hero-wrapper">
        <figure>
          <img
            src="/assets/images/img-hero-services.jpg"
            alt="Services"
          />
        </figure>
      </section>

      <main>
        {/* 2. Services Intro Section */}
        <section className="services-inner">
          <div className="container bottom-in">
            <span>Our Services</span>
            <p>
              We provide innovative and reliable mechanical solutions for
              industrial, commercial, and residential projects, ensuring
              efficiency, safety, and seamless integration.
            </p>
          </div>
        </section>

        {/* 3. Services List Section */}
        <section className="services-list-wrap">
          <div className="container">
            {/* Service 1: Industrial and Infrastructure Solutions */}
            <div
              className="services-list bottom-in"
              id="industrial-and-infrastructure-solutions"
            >
              <div className="service-left">
                <figure>
                  <img
                    src="/uploads/95812df013c70ad9.jpg"
                    alt="Industrial and Infrastructure Solutions"
                  />
                </figure>
              </div>
              <div className="service-right">
                <h2>Industrial and Infrastructure Solutions</h2>
                <div>
                  <ul>
                    <li>Water &amp; Power</li>
                    <li>Oil &amp; Gas</li>
                    <li>Petrochemicals Plants</li>
                    <li>Plant Shutdown Works</li>
                    <li>Annual Maintenance Contracts</li>
                    <li>Storage Terminals</li>
                    <li>Infrastructure</li>
                    <li>Marine</li>
                    <li>Construction Works</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 2: Commercial and Residential Projects */}
            <div
              className="services-list bottom-in"
              id="commercial-and-residential-projects"
            >
              <div className="service-right">
                <h2>Commercial and Residential Projects</h2>
                <div>
                  <ul>
                    <li>Machinery &amp; Equipment Installation.</li>
                    <li>Commercial Building Construction.</li>
                    <li>HVAC &amp; MEP Installations</li>
                    <li>Fire Alarm</li>
                    <li>Security Systems.</li>
                  </ul>
                </div>
              </div>
              <div className="service-left">
                <figure>
                  <img
                    src="/uploads/3946ea2441f7c9b5.jpg"
                    alt="Commercial and Residential Projects"
                  />
                </figure>
              </div>
            </div>

            {/* Service 3: Turnkey Projects */}
            <div
              className="services-list bottom-in"
              id="turnkey-projects"
            >
              <div className="service-left">
                <figure>
                  <img
                    src="/uploads/f0da0274447e8d79.jpg"
                    alt="Turnkey Projects"
                  />
                </figure>
              </div>
              <div className="service-right">
                <h2>Turnkey Projects</h2>
                <div>
                  <ul>
                    <li>Erection and commissioning.</li>
                    <li>Foundation for heavy Equipment, framed structures.</li>
                    <li>Installation and Erection.</li>
                    <li>Scaffolding.</li>
                    <li>Insulation Sand Blasting.</li>
                    <li>Painting works.</li>
                    <li>Fire Fighting Systems.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 4: Installation and Maintenance Services */}
            <div
              className="services-list bottom-in"
              id="installation-and-maintenance-services"
            >
              <div className="service-right">
                <h2>Installation and Maintenance Services</h2>
                <div>
                  <ul>
                    <li>NDT Services.</li>
                    <li>Pump Installation Services.</li>
                    <li>Water &amp; Sewer Line Works.</li>
                    <li>
                      Complete Fuel Station Installation (Mechanical &amp;
                      Electrical)
                    </li>
                    <li>Agricultural &amp; Irrigation system.</li>
                    <li>
                      Elevator &amp; Escalator Supply, Installation and
                      Maintenance.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="service-left">
                <figure>
                  <img
                    src="/uploads/39c64cbb3197c530.jpg"
                    alt="Installation and Maintenance Services"
                  />
                </figure>
              </div>
            </div>

            {/* Service 5: Civil Construction Services */}
            <div
              className="services-list bottom-in"
              id="civil-construction-services"
            >
              <div className="service-left">
                <figure>
                  <img
                    src="/uploads/ee987a1523d6cb86.jpg"
                    alt="Civil Construction Services"
                  />
                </figure>
              </div>
              <div className="service-right">
                <h2>Civil Construction Services</h2>
                <div>
                  <ul>
                    <li>Construction services</li>
                    <li>Heavy civil construction &amp; infrastructure.</li>
                    <li>General contracting.</li>
                    <li>commercial and industrial facilities construction</li>
                    <li>
                      Site improvement &amp; utilities projects and
                      rehabilitation.
                    </li>
                    <li>Railroad construction.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 6: Field Services */}
            <div
              className="services-list bottom-in"
              id="field-services"
            >
              <div className="service-right">
                <h2>Field Services</h2>
                <div>
                  <ul>
                    <li>Electrical &amp; telecommunications.</li>
                    <li>
                      Installation of control panels, power supply of
                      receptacles.
                    </li>
                    <li>Ultra-Filtration System.</li>
                    <li>MV &amp; LV Control System. </li>
                    <li>Installation of Power StationsAll panel boards.</li>
                    <li>Generator Repairs &amp; Maintenances</li>
                  </ul>
                </div>
              </div>
              <div className="service-left">
                <figure>
                  <img
                    src="/uploads/0e504da2ac67094e.jpg"
                    alt="Field Services"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
