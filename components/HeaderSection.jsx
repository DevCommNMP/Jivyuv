"use client";
import { checkSession } from "@/app/uitls/authFunctions";
import { LucideSearch, LucideUserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import axios from "axios";

import Swal from "sweetalert2";
import Preloader from "./Preloader";


export default function Header({}) {
  const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;
  const [user, setUser] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  

  useEffect(() => { 
    const fetchSession = async () => {
      const sessionUser = await checkSession();
      setUser(sessionUser);
    };

    fetchSession();
  }, []);
 
    async function fetchCategories() {
      setIsLoading(true);
    
      try{
      let response=await axios.get(`${SERVER_URL}/api/categories`);
      setCategories(response.data);
      
      console.log(response.data);

      }catch(error){
        console.log(error);
        Swal.fire({title: "Error", text: "Error fetching categories", icon: "error"});

      }finally{
        setIsLoading(false);
      }

    }
    useEffect(() => {
      fetchCategories();
    },[]);
  const handleLogout = () => {
    try {
      localStorage.removeItem("token");
      window.location.href = `${SERVER_URL}/api/auth/logout`; // Redirect to logout
    } catch (error) {
      console.log("Something went wrong:", error);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <>
    {isLoading===true ?<Preloader/>:<>
      {categories.length!==0 &&
      <>
      <header className="main-header style-one">
        <div className="header-lower">
          <div className="auto-container">
            <div className="outer-box">
              <div className="logo-box">
                <figure className="logo">
                  <Link href="/">
                    <Image
                      src="/assets/images/logo/jivyuv-logo.png"
                      alt="image not found"
                      width="200"
                      height="100"
                    />
                  </Link>
                </figure>
              </div>
              <div className="menu-area clearfix">
                <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
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
                        <Link href="/" style={{ color: "grey" }}>
                          Home
                        </Link>
                      </li>

                     {categories.map((category,index) =>{
                         
                        return category.isVisibleOnNavbar==true &&<li
                        className={`dropdown ${
                          activeDropdown === index+1 ? "open" : ""
                        }`}
                      >
                        <Link
                          href="#"
                          style={{ color: "grey" }}
                          onClick={() => toggleDropdown(index+1)}
                        >
                         {category.name}
                     </Link>
                       
                          {category.subCategoryId.length>0 && category.subCategoryId.map((subCategory,index) =>{
                            
                            return <ul><li><Link href="destination-1">{subCategory.name}</Link></li> </ul>
                          // <li>
                          //   <Link href="destination-2">Destinations 02</Link>
                          // </li>
                          // <li>
                          //   <Link href="destination-details">
                          //     Destination Details
                          //   </Link>
                          // </li>

                          })
                          
                        }
                       
                      </li>


                     } )}

                      
                      {/* <li
                        className={`dropdown ${
                          activeDropdown === 1 ? "open" : ""
                        }`}
                      >
                        <Link
                          href="#"
                          style={{ color: "grey" }}
                          onClick={() => toggleDropdown(1)}
                        >
                          Destinations
                        </Link>
                        <ul>
                          <li>
                            <Link href="destination-1">Destinations 01</Link>
                          </li>
                          <li>
                            <Link href="destination-2">Destinations 02</Link>
                          </li>
                          <li>
                            <Link href="destination-details">
                              Destination Details
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className={`dropdown ${
                          activeDropdown === 2 ? "open" : ""
                        }`}
                      >
                        <Link
                          href="#"
                          style={{ color: "grey" }}
                          onClick={() => toggleDropdown(2)}
                        >
                          Tours
                        </Link>
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
                      </li> */}
                      <li
                        className={`dropdown ${
                          activeDropdown === 3 ? "open" : ""
                        }`}
                      >
                        <Link
                          href="#"
                          style={{ color: "grey" }}
                          onClick={() => toggleDropdown(3)}
                        >
                          Pages
                        </Link>
                        <ul>
                          <li>
                            <Link href="about-us" style={{ color: "grey" }}>
                              About Us
                            </Link>
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
                      <li
                        className={`dropdown ${
                          activeDropdown === 4 ? "open" : ""
                        }`}
                      >
                        <Link
                          href="#"
                          style={{ color: "grey" }}
                          onClick={() => toggleDropdown(4)}
                        >
                          Elements
                        </Link>
                        <div className="megamenu">
                          <div className="row clearfix">
                            <div className="col-xl-6 column">
                              <ul>
                                <li>
                                  <h4>Elements 1</h4>
                                </li>
                                <li>
                                  <Link href="about-element-1">
                                    About Block 01
                                  </Link>
                                </li>
                                <li>
                                  <Link href="about-element-2">
                                    About Block 02
                                  </Link>
                                </li>
                                <li>
                                  <Link href="about-element-3">
                                    About Block 03
                                  </Link>
                                </li>
                                <li>
                                  <Link href="feature-element-1">
                                    Feature Block 01
                                  </Link>
                                </li>
                                <li>
                                  <Link href="feature-element-2">
                                    Feature Block 02
                                  </Link>
                                </li>
                                <li>
                                  <Link href="tour-element-1">
                                    Tour Block 01
                                  </Link>
                                </li>
                                <li>
                                  <Link href="tour-element-2">
                                    Tour Block 02
                                  </Link>
                                </li>
                                <li>
                                  <Link href="place-block-1">
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
                                  <Link href="place-block-2">
                                    Place Block 02
                                  </Link>
                                </li>
                                <li>
                                  <Link href="news-block-1">News Block 01</Link>
                                </li>
                                <li>
                                  <Link href="news-block-2">News Block 02</Link>
                                </li>
                                <li>
                                  <Link href="team-block-1">Team Block 01</Link>
                                </li>
                                <li>
                                  <Link href="team-block-2">Team Block 02</Link>
                                </li>

                                <li>
                                  <Link href="testimonial">
                                    Testimonial Block
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="dropdown">
                        <Link href="/" style={{ color: "grey" }}>
                          Blog
                        </Link>
                        <ul>
                          <li>
                            <Link href="blog-1">Blog Grid</Link>
                          </li>
                          <li>
                            <Link href="blog-2">Blog Standard</Link>
                          </li>
                          <li>
                            <Link href="blog-details">Blog Details</Link>
                          </li>
                        </ul>
                      </li>
                      {/* <li>
                        <Link href="contact" style={{ color: "grey" }}>
                          Contact
                        </Link>
                      </li>

                      <li>
                        <Link href="forgot-password" style={{ color: "grey" }}>
                          Forgot-Password
                        </Link>
                      </li> */}
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
                      <img
                        src={user?.profilePicture|| user.sessionData.profilePicture}
                        alt=""
                        style={{
                          borderRadius: "50%",
                          backgroundColor: "transparent",
                        }}
                      />
                    </Link>
                  ) : (
                    <Link href="/sign-in">
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
                  <Link href="/">
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

      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
      </>
          }
      </>
      }
    </>
  );
}
