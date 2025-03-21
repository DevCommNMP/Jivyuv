"use client";

import { useState, useEffect } from "react";
import AboutSection from "../../../../components/AboutSection";
import VideoSection from "../../../../components/VideoSection";
import axios from "axios";
import Swal from "sweetalert2";

export default function about() {
  const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;
  const [contactInfo, setContactInfo] = useState({
    address: {},
    email_id: "",
    phone_number: "",
    social_media_links: {},
    company_description: "",
  });

  useEffect(() => {
    async function fetchContactInfo() {
      try {
        const response = await axios.get(`${SERVER_URL}/api/company-profile/67d7e08b75c754b93314d410`);
        setContactInfo(response.data);
      } catch (error) {
        console.error("Error fetching contact info:", error);
        Swal.fire("Error", "Failed to load contact information.", "error");
      }
    }
    fetchContactInfo();
  }, []);

  return (
    <>
      <section className="page-title centred" style={{ backgroundImage: 'url(/assets/img/destination-2page-title.jpg)' }}>
        <div className="auto-container">
          <div className="content-box">
            <h1>About Us</h1>
            <p>Discover your next great adventure</p>
          </div>
        </div>
      </section>

  

      <AboutSection contactInfo={contactInfo} />

      <VideoSection />

      <section className="team-section sec-pad bg-color-1 centred">
        <div className="auto-container">
          <div className="sec-title">
            <p>Tour Guide</p>
            <h2>Expert Tour Guides</h2>
          </div>
          <div className="row clearfix">
            {/* Example static data for guides */}
            <div className="col-lg-4 col-md-6 col-sm-12 team-block">
              <div className="team-block-one">
                <div className="inner-box">
                  <figure className="image-box">
                    <img src="/assets/images/team/team-1.jpg" alt="Guide 1" />
                  </figure>
                  <div className="lower-content">
                    <h3>Merrie Lewis</h3>
                    <span className="designation">Tour Guide</span>
                    <ul className="social-links clearfix">
                      {Object.entries(contactInfo.social_media_links).map(([platform, link]) => (
                        <li key={platform}>
                          <a href={link} target="_blank" rel="noopener noreferrer">
                            <i className={`fab fa-${platform}`}></i>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Repeat for other guides */}
            <div className="col-lg-4 col-md-6 col-sm-12 team-block">
              <div className="team-block-one">
                <div className="inner-box">
                  <figure className="image-box">
                    <img src="/assets/images/team/team-1.jpg" alt="Guide 1" />
                  </figure>
                  <div className="lower-content">
                    <h3>Merrie Lewis</h3>
                    <span className="designation">Tour Guide</span>
                    <ul className="social-links clearfix">
                      {Object.entries(contactInfo.social_media_links).map(([platform, link]) => (
                        <li key={platform}>
                          <a href={link} target="_blank" rel="noopener noreferrer">
                            <i className={`fab fa-${platform}`}></i>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* next one  */}
               <div className="col-lg-4 col-md-6 col-sm-12 team-block">
              <div className="team-block-one">
                <div className="inner-box">
                  <figure className="image-box">
                    <img src="/assets/images/team/team-1.jpg" alt="Guide 1" />
                  </figure>
                  <div className="lower-content">
                    <h3>Merrie Lewis</h3>
                    <span className="designation">Tour Guide</span>
                    <ul className="social-links clearfix">
                      {Object.entries(contactInfo.social_media_links).map(([platform, link]) => (
                        <li key={platform}>
                          <a href={link} target="_blank" rel="noopener noreferrer">
                            <i className={`fab fa-${platform}`}></i>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}