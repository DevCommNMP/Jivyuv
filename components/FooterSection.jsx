"use client";
import { SquareX } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPinCheckInside,
  PhoneCall,
  Twitter,
} from "lucide-react";
import "./Ctaform.css";

export default function Footer() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <>
      {" "}
      <footer className="main-footer bg-color-2">
        <div className="footer-top">
          <div
            className="vector-bg"
            style={{
              backgroundImage: "url(/assets/images/shape/shape-11.png)",
            }}
          ></div>
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget logo-widget">
                  <figure className="footer-logo">
                    <Link href="index.html">
                      <Image
                        src="/assets/img/footer/footer-logo.png"
                        width={100}
                        height={30}
                        alt=""
                      />
                    </Link>
                  </figure>
                  <div className="text">
                    <p>
                      Lorem ipsum dolor amet consetetur adi pisicing elit sed
                      eiusm tempor in cididunt ut labore dolore magna aliqua
                      enim.
                    </p>
                  </div>
                  <ul className="social-links clearfix">
                    <li>
                      <Link href="index.html">
                        <Facebook />
                      </Link>
                    </li>
                    <li>
                      <Link href="index.html">
                        <Twitter />
                      </Link>
                    </li>
                    <li>
                      <Link href="index.html">
                        <Instagram />
                      </Link>
                    </li>
                    <li>
                      <Link href="index.html">
                        <Linkedin />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget">
                  <div className="widget-title">
                    <h3>Services</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li>
                        <Link href="index.html">About Us</Link>
                      </li>
                      <li>
                        <Link href="index.html">Listing</Link>
                      </li>
                      <li>
                        <Link href="index.html">How It Works</Link>
                      </li>
                      <li>
                        <Link href="index.html">Our Services</Link>
                      </li>
                      <li>
                        <Link href="index.html">Our Blog</Link>
                      </li>
                      <li>
                        <Link href="index.html">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget gallery-widget">
                  <div className="widget-title">
                    <h3>Gallery</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="image-list clearfix">
                      <li>
                        <figure className="image-box">
                          <Link href="gallery-1.html">
                            <Image
                              src="/assets/img/footer/footer-gallery-1.jpg"
                              alt=""
                              width={90}
                              height={90}
                            />
                          </Link>
                        </figure>
                      </li>
                      <li>
                        <figure className="image-box">
                          <Link href="gallery-1.html">
                            <Image
                              src="/assets/img/footer/footer-gallery-2.jpg"
                              alt=""
                              width={90}
                              height={90}
                            />
                          </Link>
                        </figure>
                      </li>
                      <li>
                        <figure className="image-box">
                          <Link href="gallery-1.html">
                            <Image
                              src="/assets/img/footer/footer-gallery-3.jpg"
                              alt=""
                              width={90}
                              height={90}
                            />
                          </Link>
                        </figure>
                      </li>
                      <li>
                        <figure className="image-box">
                          <Link href="gallery-1.html">
                            <Image
                              src="/assets/img/footer/footer-gallery-4.jpg"
                              alt=""
                              width={90}
                              height={90}
                            />
                          </Link>
                        </figure>
                      </li>
                      <li>
                        <figure className="image-box">
                          <Link href="gallery-1.html">
                            <Image
                              src="/assets/img/footer/footer-gallery-5.jpg"
                              alt=""
                              width={90}
                              height={90}
                            />
                          </Link>
                        </figure>
                      </li>
                      <li>
                        <figure className="image-box">
                          <Link href="gallery-1.html">
                            <Image
                              src="/assets/img/footer/footer-gallery-6.jpg"
                              alt=""
                              width={90}
                              height={90}
                            />
                          </Link>
                        </figure>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget contact-widget">
                  <div className="widget-title">
                    <h3>Contacts</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="info-list clearfix">
                      <li>
                        <MapPinCheckInside /> Flat 20, Reynolds Neck, North
                        Helenaville, FV77 8WS
                      </li>
                      <li>
                        <PhoneCall />
                        <Link href="tel:23055873407">+2(305) 587-3407</Link>
                      </li>
                      <li>
                        <Mail />
                        <Link href="mailto:info@example.com">
                          info@example.com
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            bottom: "55px",
            right: "35px",
            height: "4%",
            zIndex: "1000",
          }}
        >
          {showPopup && (
            <div className="popup">
              <div className="popup-content">
                <div className="popup-left">
                  <img
                    src="/assets/images/cta/ctaimage.avif"
                    alt="Description"
                  />
                </div>
                <div className="popup-right">
                  <form>
                    <h2>Call To Action</h2>
                    <label>
                      Name:
                      <input type="text" name="name" />
                    </label>
                    <label>
                      Email:
                      <input type="email" name="email" />
                    </label>
                    <label>
                      Message:
                      <textarea name="message"></textarea>
                    </label>
                    <button type="submit">Submit</button>
                  </form>
                </div>
              </div>
              <button className="close-popup" onClick={togglePopup}>
                <SquareX />
              </button>
            </div>
          )}
        </div>

        <div className="footer-bottom">
          <div className="auto-container">
            <div className="bottom-inner clearfix">
              <div className="copyright pull-left">
                <p>
                  <Link href="index.html">JivYuv</Link> &copy; 2025 All Right
                  Reserved
                </p>
              </div>
              <ul className="footer-nav pull-right">
                <li>
                  <Link href="index.html">Terms of Service</Link>
                </li>
                <li>
                  <Link href="index.html">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="btn-social">
        <button className="pop-icon" onClick={togglePopup}>
          <img src="/assets/images/cta/comment.png" alt="cta" />
        </button>
        {/* WhatsApp Button */}
        <button
          className="whatsapp-icon"
          onClick={() => window.open("https://wa.me/8368088945", "_blank")}
        >
          <img src="/assets/images/cta/whatsapp.png" alt="whatsapp" />
        </button>
        {/* Phone Button */}
        <button
          className="phone-icon"
          onClick={() => (window.location.href = "tel:8368088945")}
        >
          {/* <i className="fas fa-phone-alt"></i> */}
          <img src="/assets/images/cta/telephone.png" alt="telephone" />
        </button>
      </div>
    </>
  );
}
