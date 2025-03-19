"use client";
import { checkSession } from "../app/uitls/authFunctions";
import { LucideSearch, LucideUserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import axios from "axios";

import Swal from "sweetalert2";
import Preloader from "./Preloader";
import { useRouter } from "next/navigation"

export default function Header({ categories, companyData }) {
  const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;
  const [user, setUser] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchToggle,setSearchToggle]=useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(false);
  const router=useRouter();

  useEffect(() => {
    const fetchSession = async () => {
      const sessionUser = await checkSession();
      console.log("Session User:", sessionUser);
      setUser(sessionUser);
    };

    fetchSession();
  }, []);
  function handleSearch(){
    setSearchToggle(!searchToggle);
  }

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

  const suggestionStyles = {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    backgroundColor: "white",
    border: "1px solid #ddd",
    borderRadius: "4px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    zIndex: 1000,
    maxHeight: "300px",
    overflowY: "auto",
  };


  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchQuery.trim().length > 3) {
        setIsLoadingSuggestions(true);
        try {
          const response = await axios.get(
            `${SERVER_URL}/api/trip-packages`
          );
          setSuggestions(response.data);
        } catch (error) {
          console.error("Error fetching suggestions:", error);
          setSuggestions([]);
        }
        setIsLoadingSuggestions(false);
      }
    };

    const debounceTimer = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchQuery]);

 // Handle suggestion click
 const handleSuggestionClick = (suggestion) => {
  console.log(suggestion);
  setSearchQuery("");
  setSuggestions([]);
  setSearchToggle(false);
  // Navigate to suggested item's page
  router.push(`/trip/${suggestion.titleSlug}`); // You'll need to use next/router
};


  return (
    <>
      {isLoading === true ? (
        <Preloader />
      ) : (
        <>
          {categories.length !== 0 && (
            <>
              <header className="main-header style-one">
                <div className="header-lower">
                  <div
                    className="container-fluid"
                    style={{
                      padding: "0px 30px",
                    }}
                  >
                    <div className="outer-box">
                      <div className="logo-box">
                        <figure className="logo">
                          <Link href="/">
                            <Image
                              src={
                                companyData?.logo_image
                                  ? `${SERVER_URL}/${companyData.logo_image}`
                                  : "/assets/images/logo.png"
                              }
                              alt="image not found"
                              width="200"
                              height="100"
                            />
                      </Link>
                        </figure>
                      </div>
                      <div className="menu-area clearfix">
                        <div
                          className="mobile-nav-toggler"
                          onClick={toggleMobileMenu}
                        >
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

                              {categories.map((category, index) => {
                                return (
                                  category.isVisibleOnNavbar && (
                                    <li
                                      key={`category-${index}`} // Add unique key
                                      className={`dropdown ${
                                        activeDropdown === index + 1
                                          ? "open"
                                          : ""
                                      }`}
                                    >
                                      <Link
                                       href={`/${category.slugName}`}
                                        style={{ color: "grey" }}
                                        onClick={() =>
                                          toggleDropdown(index + 1)
                                        }
                                      >
                                        {category.name}
                                      </Link>
                                      {category.subCategoryId.length > 0 && (
                                        <ul>
                                          {category.subCategoryId.map(
                                            (subCategory, subIndex) => (
                                              <li
                                                key={`subcategory-${subIndex}`} // Add unique key
                                              >
                                                <Link href={`/${category.slugName}/${subCategory.slugName}`}>
                                                  {subCategory.name}
                                                </Link>
                                              </li>
                                            )
                                          )}
                                        </ul>
                                      )}
                                    </li>
                                  )
                                );
                              })}
                              <li
                                className={`dropdown ${
                                  activeDropdown === 3 ? "open" : ""
                                }`}
                              >
                                <Link
                                  href="/about-us"
                                  style={{ color: "grey" }}
                                  onClick={() => toggleDropdown(3)}
                                >
                                 About Us
                                </Link>
                                {/* <ul>
                                  <li>
                                    <Link
                                      href="about-us"
                                      style={{ color: "grey" }}
                                    >
                                      About Us
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="booking-process">
                                      Booking Process
                                    </Link>
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
                                </ul> */}
                              </li>
                              {/* <li
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
                                          <Link href="news-block-1">
                                            News Block 01
                                          </Link>
                                        </li>
                                        <li>
                                          <Link href="news-block-2">
                                            News Block 02
                                          </Link>
                                        </li>
                                        <li>
                                          <Link href="team-block-1">
                                            Team Block 01
                                          </Link>
                                        </li>
                                        <li>
                                          <Link href="team-block-2">
                                            Team Block 02
                                          </Link>
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
                              </li> */}
                              <li className="dropdown">
                                <Link href="/blog-grid" style={{ color: "grey" }}>
                                  Blog
                                </Link>
                                {/* <ul>
                                  <li>
                                    <Link href="blog-1">Blog Grid</Link>
                                  </li>
                                  <li>
                                    <Link href="blog-2">Blog Standard</Link>
                                  </li>
                                  <li>
                                    <Link href="blog-details">Blog Details</Link>
                                  </li>
                                </ul> */}
                              </li>
                            </ul>
                          </div>
                        </nav>
                      </div>
                      <ul className="menu-right-content clearfix">
                        <li className="search-box-outer">
                          <div className={`dropdown ${searchToggle===true && "show"}`}>
                            <button
                              className="search-box-btn"
                              type="button"
                              id="dropdownMenu3"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded={`${searchToggle}`}
                             onClick={handleSearch}>
                              <LucideSearch />
                            </button>
                            <div
                              className="dropdown-menu search-panel"
                              aria-labelledby="dropdownMenu3"
                            style={
                              {width:"800px"}
                              
                            }>
                              {/* <div className="form-container" >
                                <form method="post" action="blog.html">
                                  <div className="form-group">
                                    <input
                                      type="search"
                                      name="search-field"
                                      placeholder="Search...."
                                      required=""
                                    />
                                    <button
                                      type="submit"
                                      className="search-btn"
                                    >
                                      <span className="fas fa-search"></span>
                                    </button>
                                  </div>
                                </form>
                              </div> */}
                              
                              <div className="form-container">
    <form method="post" action="/search">
      <div className="form-group" style={{ position: "relative",width:"750px" }}>
        <input
          type="search"
          name="search-field"
          placeholder="Search...."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "12px 20px", 
            fontSize: "16px",
            height:"6ch"      
          }}
        />
        <button type="submit" className="search-btn">
          <span className="fas fa-search"></span>
        </button>
        
        {/* Suggestions dropdown */}
        {searchQuery && (
          <div  style={{
            ...suggestionStyles,
            width: "100%",          
            maxHeight: "400px",     
            fontSize: "14px"       
          }}>
            {isLoadingSuggestions ? (
              <div className="p-2 text-muted">Loading suggestions...</div>
            ) : suggestions.length > 0 ? (
              suggestions.map((suggestion) => (
                <div
                  key={suggestion.id}
                  className="suggestion-item p-3 hover-bg-gray-100 cursor-pointer"
                  onClick={() => handleSuggestionClick(suggestion)}
                  style={{ borderBottom: "1px solid #eee",cursor:"pointer" }} 
                >
                  {suggestion.title}
                  


                  
                </div>
              ))
            ) : (
              <div className="p-2 text-muted">No suggestions found</div>
            )}
          </div>
        )}
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
                                src={user?.profilePicture}
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
                                    <button
                                      type="submit"
                                      className="search-btn"
                                    >
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
              companyData={companyData}
                isMobileMenuOpen={isMobileMenuOpen}
                toggleMobileMenu={toggleMobileMenu}
                categories={categories}
              />
            </>
          )}
        </>
      )}
    </>
  );
}
