"use client";

import Image from "next/image";
import Link from "next/link";


export default function TripDetails({ params }) {
    const { slug } = params; // Access the dynamic slug parameter

    if (!slug) {
        return <p>Loading...</p>; // Handle cases where the parameter is not yet available
    }

    return (
        <div className="tour-details-page">
        {/* Page Title */}
        <section
          className="page-title style-three"
          style={{ backgroundImage: "url(/assets/images/background/page-title-3.jpg)" }}
        >
          <div className="auto-container">
            <div className="inner-box">
              <div className="rating">
                <span>
                  <i className="fas fa-star"></i>8.0 Superb
                </span>
              </div>
              <h2>Moscow Red City Land</h2>
              <h3>
                $170.00<span> / Per person</span>
              </h3>
            </div>
          </div>
        </section>
  
        {/* Tour Details */}
        <section className="tour-details">
          <div className="auto-container">
            <div className="row clearfix">
              {/* Content Side */}
              <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                <div className="tour-details-content">
                  <div className="inner-box">
                    <div className="text">
                      <h2>Overview</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                      </p>
                      <ul className="info-list clearfix">
                        <li>
                          <i className="far fa-clock"></i>5 Days
                        </li>
                        <li>
                          <i className="far fa-user"></i>Age 15+
                        </li>
                        <li>
                          <i className="far fa-map"></i>G87P, Birmingham
                        </li>
                      </ul>
                    </div>
                  </div>
  
                  {/* Tour Plan */}
                  <div className="tour-plan">
                    <div className="text">
                      <h2>Tour Plan</h2>
                      <p>
                        Aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </p>
                    </div>
                    <div className="content-box">
                      <div className="single-box">
                        <span>01</span>
                        <h4>8:00 am to 10:00 am</h4>
                        <h3>Day 1: Arrive South Africa Forest</h3>
                        <p>
                          Aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </p>
                        <ul className="list clearfix">
                          <li>Air fares</li>
                          <li>4 Nights Hotel Accomodation</li>
                          <li>Entrance Fees</li>
                        </ul>
                      </div>
                      {/* ...repeat for other days... */}
                    </div>
                  </div>
  
                  {/* Photo Gallery */}
                  <div className="photo-gallery">
                    <div className="text">
                      <h2>Photo Gallery</h2>
                      <p>
                        Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex commodo consequat.
                      </p>
                    </div>
                    <div className="image-box clearfix">
                      <figure className="image">
                        <Image
                          src="/assets/images/resource/destination-4.jpg"
                          alt="Gallery Image"
                          width={300}
                          height={200}
                        />
                      </figure>
                      {/* ...repeat for other images... */}
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Sidebar */}
              <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                <div className="default-sidebar tour-sidebar ml-20">
                  {/* Booking Form */}
                  <div className="form-widget">
                    <div className="widget-title">
                      <h3>Book This Tour</h3>
                    </div>
                    <form className="tour-form">
                      <div className="form-group">
                        <input type="text" name="name" placeholder="Your Name" required />
                      </div>
                      <div className="form-group">
                        <input type="email" name="email" placeholder="Your Email" required />
                      </div>
                      <div className="form-group">
                        <input type="text" name="phone" placeholder="Phone" required />
                      </div>
                      <div className="form-group">
                        <input type="text" name="tickets" placeholder="Tickets" required />
                      </div>
                      <div className="form-group">
                        <input type="text" name="date" placeholder="dd/mm/yy" />
                      </div>
                      <div className="form-group">
                        <textarea name="message" placeholder="Message"></textarea>
                      </div>
                      <div className="form-group message-btn">
                        <button type="submit" className="theme-btn">
                          Book Tour
                        </button>
                      </div>
                    </form>
                  </div>
  
                  {/* Downloads */}
                  <div className="sidebar-widget downloads-widget">
                    <div className="widget-title">
                      <h3>Downloads</h3>
                    </div>
                    <div className="widget-content">
                      <ul className="download-links clearfix">
                        <li>
                          <Link href="/destination-details">
                            Travel Direction<i className="fas fa-download"></i>
                          </Link>
                        </li>
                        {/* ...repeat for other downloads... */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}
