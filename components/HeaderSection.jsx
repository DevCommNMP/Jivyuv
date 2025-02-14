"use client";
import { checkSession } from "@/app/uitls/authFunctions";
import { LucideSearch, LucideUserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header({ }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const sessionUser = await checkSession();
      setUser(sessionUser);
    };

    fetchSession();
  }, []);

  console.log(user)
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/api/auth/google";
  };

  const handleLogout = () => {
    window.location.href = "http://localhost:5000/api/auth/logout"; // Redirect to logout
  };

  return (
    <>
      <header className="main-header style-one">
        <div className="header-lower">
          <div className="auto-container">
            <div className="outer-box">
              <div className="logo-box">
                <figure className="logo">
                  <Link href="/">
                    <Image
                      src="/assets/images/logo.png"
                      alt=""
                      width={100}
                      height={30}
                    />
                  </Link>
                </figure>
              </div>
              <div className="menu-area clearfix">
                <div className="mobile-nav-toggler">
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                </div>
                <nav className="main-menu navbar-expand-md navbar-light">
                  <div
                    className="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    <ul className="navigation clearfix">
                      <li className="current dropdown">
                        <Link href="/">Home</Link>
                      </li>
                      <li className="dropdown">
                        <Link href="#">Destinations</Link>
                        <ul>
                          <li>
                            <Link href="destination-1">Destinations 01</Link>
                          </li>
                          <li>
                            <Link href="destination-2">
                              Destinations 02
                            </Link>
                          </li>
                          <li>
                            <Link href="destination-details">
                              Destination Details
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <Link href="#">Tours</Link>
                        <ul>
                          <li>
                            <Link href="tour-grid">Tours Grid</Link>
                          </li>
                          <li>
                            <Link href="tour-list">Tours List</Link>
                          </li>
                          <li>
                            <Link href="tour-details">Tour Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <Link href="#">Pages</Link>
                        <ul>
                          <li>
                            <Link href="about-us">About Us</Link>
                          </li>
                          <li>
                            <Link href="booking-process">Booking Process</Link>
                          </li>
                          <li>
                            <Link href="tour-deals">Tour Deals</Link>
                          </li>
                          <li>
                            <Link href="tour-guide">Tour Guide</Link>
                          </li>
                          <li>
                            <Link href="gallery-1">Gallery 01</Link>
                          </li>
                          <li>
                            <Link href="gallery-2">Gallery 02</Link>
                          </li>
                          <li>
                            <Link href="faq">Faq&aps;s</Link>
                          </li>
                          <li>
                            <Link href="sign-up">Sign Up</Link>
                          </li>
                          <li>
                            <Link href="sign-in">Sign In</Link>
                          </li>
                          <li>
                            <Link href="error">404</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <Link href="index.html">Elements</Link>
                        <div className="megamenu">
                          <div className="row clearfix">
                            <div className="col-xl-6 column">
                              <ul>
                                <li>
                                  <h4>Elements 1</h4>
                                </li>
                                <li>
                                  <Link href="about-element-1.html">
                                    About Block 01
                                  </Link>
                                </li>
                                <li>
                                  <Link href="about-element-2.html">
                                    About Block 02
                                  </Link>
                                </li>
                                <li>
                                  <Link href="about-element-3.html">
                                    About Block 03
                                  </Link>
                                </li>
                                <li>
                                  <Link href="feature-element-1.html">
                                    Feature Block 01
                                  </Link>
                                </li>
                                <li>
                                  <Link href="feature-element-2.html">
                                    Feature Block 02
                                  </Link>
                                </li>
                                <li>
                                  <Link href="tour-element-1.html">
                                    Tour Block 01
                                  </Link>
                                </li>
                                <li>
                                  <Link href="tour-element-2.html">
                                    Tour Block 02
                                  </Link>
                                </li>
                                <li>
                                  <Link href="place-element-1.html">
                                    Place Block 01
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-xl-6 column">
                              <ul>
                                <li>
                                  <h4>Elements 2</h4>
                                </li>
                                <li>
                                  <Link href="place-element-2.html">
                                    Place Block 02
                                  </Link>
                                </li>
                                <li>
                                  <Link href="news-element-1.html">
                                    News Block 01
                                  </Link>
                                </li>
                                <li>
                                  <Link href="news-element-2.html">
                                    News Block 02
                                  </Link>
                                </li>
                                <li>
                                  <Link href="team-element-1.html">
                                    Team Block 01
                                  </Link>
                                </li>
                                <li>
                                  <Link href="team-element-2.html">
                                    Team Block 02
                                  </Link>
                                </li>
                                <li>
                                  <Link href="video-element.html">
                                    Video Block
                                  </Link>
                                </li>
                                <li>
                                  <Link href="funfact-element.html">
                                    Funfact Block
                                  </Link>
                                </li>
                                <li>
                                  <Link href="testimonial-element.html">
                                    Testimonial Block
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="dropdown">
                        <Link href="index.html">Blog</Link>
                        <ul>
                          <li>
                            <Link href="blog.html">Blog Grid</Link>
                          </li>
                          <li>
                            <Link href="blog-2.html">Blog Standard</Link>
                          </li>
                          <li>
                            <Link href="blog-details.html">Blog Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="contact.html">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <ul className="menu-right-content clearfix">
                <li className="search-box-outer">
                  <div className="dropdown">
                    <button
                      className="search-box-btn"
                      type="button"
                      id="dropdownMenu3"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <LucideSearch />
                    </button>
                    <div
                      className="dropdown-menu search-panel"
                      aria-labelledby="dropdownMenu3"
                    >
                      <div className="form-container">
                        <form method="post" action="blog.html">
                          <div className="form-group">
                            <input
                              type="search"
                              name="search-field"
                              placeholder="Search...."
                              required=""
                            />
                            <button type="submit" className="search-btn">
                              <span className="fas fa-search"></span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="user-link">
                  {user ? (
                    <Link href="" onClick={handleLogout}>

                      <img src={user.profilePicture} alt="profile photo" style={{ borderRadius: "50%", backgroundColor: "transparent" }} />

                    </Link>
                  ) : (
                    <Link href="" onClick={handleGoogleLogin}>

                      <LucideUserRound />

                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="sticky-header">
          <div className="auto-container">
            <div className="outer-box">
              <div className="logo-box">
                <figure className="logo">
                  <Link href="index.html">
                    <Image
                      src="/assets/images/logo.png"
                      alt=""
                      height={30}
                      width={100}
                    />
                  </Link>
                </figure>
              </div>
              <div className="menu-area">
                <nav className="main-menu clearfix"></nav>
              </div>
              <ul className="menu-right-content clearfix">
                <li className="search-box-outer">
                  <div className="dropdown">
                    <button
                      className="search-box-btn"
                      type="button"
                      id="dropdownMenu4"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <LucideSearch />
                    </button>
                    <div
                      className="dropdown-menu search-panel"
                      aria-labelledby="dropdownMenu4"
                    >
                      <div className="form-container">
                        <form method="post" action="blog.html">
                          <div className="form-group">
                            <input
                              type="search"
                              name="search-field"
                              placeholder="Search...."
                              required=""
                            />
                            <button type="submit" className="search-btn">
                              {/* <span className="fas fa-search"></span> */}
                              <LucideSearch />
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="user-link">
                  <Link href="signup.html">
                    <i className="icon-Profile"></i>
                    <LucideUserRound />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <div className="mobile-menu">
        <div className="menu-backdrop"></div>
        <div className="close-btn">
          <i className="fas fa-times"></i>
        </div>

        <nav className="menu-box">
          <div className="nav-logo">
            <Link href="/">
              <Image
                src="/assets/images/logo-2.png"
                alt=""
                width={100}
                height={30}
              />
            </Link>
          </div>
          <div className="menu-outer"></div>
          <div className="contact-info">
            <h4>Contact Info</h4>
            <ul>
              <li>Chicago 12, Melborne City, USA</li>
              <li>
                <Link href="tel:+8801682648101">+88 01682648101</Link>
              </li>
              <li>
                <Link href="mailto:info@example.com">info@example.com</Link>
              </li>
            </ul>
          </div>
          <div className="social-links">
            <ul className="clearfix">
              <li>
                <Link href="/">
                  <span className="fab fa-twitter"></span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="fab fa-facebook-square"></span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="fab fa-pinterest-p"></span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="fab fa-instagram"></span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="fab fa-youtube"></span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
