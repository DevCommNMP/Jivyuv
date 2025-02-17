import Image from "next/image";
import Link from "next/link";

export default function Footer() {
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
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="index.html">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="index.html">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="index.html">
                        <i className="fab fa-google-plus-g"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="index.html">
                        <i className="fab fa-linkedin-in"></i>
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
                        <i className="fas fa-map-marker-alt"></i>Flat 20,
                        Reynolds Neck, North Helenaville, FV77 8WS
                      </li>
                      <li>
                        <i className="fas fa-microphone"></i>
                        <Link href="tel:23055873407">+2(305) 587-3407</Link>
                      </li>
                      <li>
                        <i className="fas fa-envelope"></i>
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
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="bottom-inner clearfix">
              <div className="copyright pull-left">
                <p>
                  <Link href="index.html">JivYuv</Link> &copy; 2021 All Right
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
    </>
  );
}
