import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ isMobileMenuOpen, toggleMobileMenu, categories}) => {
  console.log("mobile cateogory");
  console.log(categories);
   const [activeDropdown, setActiveDropdown] = useState(null);
   const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };


   const menuItemStyle = {
    padding: "12px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#2d3748",
    textDecoration: "none",
    transition: "all 0.3s ease",
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #e2e8f0"
  };

  const dropdownIconStyle = {
    marginLeft: "15px",
    transition: "transform 0.3s ease",
    fontSize: "0.8rem"
  };

  const subMenuStyle = {
    backgroundColor: "#f7fafc",
    padding: "8px 0",
    borderLeft: "3px solid #4299e1"
  };

  const subMenuItemStyle = {
    padding: "10px 25px",
    color: "#4a5568",
    textDecoration: "none",
    display: "block",
    fontSize: "0.9rem",
    transition: "all 0.2s ease"
  };
  

  return (
    <>
      {/* Mobile Menu */}
      {/* <div
        className={`mobile-menu ${
          isMobileMenuOpen ? "mobile-menu-visible open" : ""
        }`}
      >
        <div className="menu-backdrop" onClick={toggleMobileMenu}></div>
        <div className="menu-content">
          <button className="close-btn" onClick={toggleMobileMenu}>
            <i className="fas fa-times"></i>
          </button>

          <nav className="menu-box">
            <div className="nav-logo">
              <Link href="/">
                <Image
                  src="/assets/images/logo-2.png"
                  alt="Logo"
                  width={100}
                  height={30}
                />
              </Link>
            </div>

            <div className="menu-outer">
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>

                {categories.map((category, index) => (
              category.isVisibleOnNavbar && (
                <li key={index} className={`dropdown ${activeDropdown === index ? "open" : ""}`}>
                  <Link
                    href="#"
                    onClick={() => toggleDropdown(index)}
                    style={{
                      padding: '12px 20px',
                      backgroundColor: activeDropdown === index ? '#f0f4f8' : '#ffffff',
                      borderRadius: '8px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      margin: '8px 0',
                      color: '#2d3748',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      border: '1px solid #e2e8f0',
                    }}
                  >
                    {category.name}
                    {category.subCategoryId.length > 0 && (
                      <span style={{ 
                        marginLeft: '15px', 
                        transform: activeDropdown === index ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.3s ease'
                      }}>
                        ▼
                      </span>
                    )}
                  </Link>

                  {category.subCategoryId.length > 0 && (
                    <ul style={{
                      backgroundColor: '#f7fafc',
                      borderRadius: '6px',
                      margin: '8px 15px',
                      padding: '10px 0',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      border: '1px solid #edf2f7'
                    }}>
                      {category.subCategoryId.map((subCategory, subIndex) => (
                        <li key={subIndex} style={{ 
                          padding: '10px 25px',
                          borderBottom: '1px solid #e2e8f0',
                          ':last-child': {
                            borderBottom: 'none'
                          }
                        }}>
                          <Link
                            href={`/category/${subCategory.slug}`}
                            style={{
                              color: '#4a5568',
                              textDecoration: 'none',
                              fontSize: '14px',
                              display: 'block',
                              transition: 'all 0.2s ease',
                              ':hover': {
                                color: '#4299e1',
                                transform: 'translateX(5px)'
                              }
                            }}
                          >
                            {subCategory.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            ))}




                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="contact-info">
              <h4>Contact Info</h4>
             
              <ul>
                <li>Chicago 12, Melborne City, USA</li>
                <li>
                  <Link href="tel:+8801682648101">+91 8882405049</Link>
                </li>
                <li>
                  <Link href="mailto:info@example.com">info@example.com</Link>
                </li>
              </ul>
            </div>

            <div className="social-links">
              <ul>
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
      </div> */}


<div className={`mobile-menu ${isMobileMenuOpen ? "mobile-menu-visible open" : ""}`}>
      <div className="menu-backdrop" onClick={toggleMobileMenu} />
      <div className="menu-content">
        <button className="close-btn" onClick={toggleMobileMenu}>
          <i className="fas fa-times" />
        </button>

        <nav className="menu-box">
          <div className="nav-logo">
            <Link href="/">
              <Image
                src="/assets/images/logo-2.png"
                alt="Logo"
                width={100}
                height={30}
              />
            </Link>
          </div>

          <div className="menu-outer">
            <ul>
              {/* Home Link */}
              <li>
                <Link 
                  href="/" 
                  style={{ 
                    ...menuItemStyle,
                    borderTop: "1px solid #e2e8f0"
                  }}
                >
                  Home
                </Link>
              </li>

              {/* Categories */}
              {categories.map((category, index) => (
                category.isVisibleOnNavbar && (
                  <li 
                    key={category._id}
                    style={{ position: "relative" }}
                  >
                    <Link
                      href="#"
                      style={{
                        ...menuItemStyle,
                        backgroundColor: activeDropdown === index ? "#f0f4f8" : "#ffffff"
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        toggleDropdown(index);
                      }}
                    >
                      {category.name}
                      {category.subCategoryId.length > 0 && (
                        <span style={{
                          ...dropdownIconStyle,
                          transform: activeDropdown === index ? "rotate(180deg)" : "none"
                        }}>
                          ▼
                        </span>
                      )}
                    </Link>

                    {/* Sub Categories */}
                    {activeDropdown === index && category.subCategoryId.length > 0 && (
                      <ul style={subMenuStyle}>
                        {category.subCategoryId.map((subCategory) => (
                          <li key={subCategory._id}>
                            <Link
                              href={`/category/${subCategory.slug}`}
                              style={{
                                ...subMenuItemStyle,
                                ":hover": {
                                  color: "#4299e1",
                                  paddingLeft: "30px"
                                }
                              }}
                            >
                              {subCategory.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                )
              ))}

              {/* Other Links */}
              {['About', 'Services', 'Contact'].map((item, index) => (
                <li key={index}>
                  <Link 
                    href={`/${item.toLowerCase()}`} 
                    style={menuItemStyle}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="contact-info" style={{
            padding: "20px",
            marginTop: "30px",
            borderTop: "1px solid #e2e8f0"
          }}>
            <h4 style={{ 
              color: "#2d3748", 
              marginBottom: "15px",
              fontSize: "1.1rem"
            }}>
              Contact Info
            </h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ ...subMenuItemStyle, color: "#718096" }}>Chicago 12, Melborne City, USA</li>
              <li style={{ ...subMenuItemStyle }}>
                <Link href="tel:+918882405049" style={{ color: "#4299e1" }}>
                  +91 8882405049
                </Link>
              </li>
              <li style={{ ...subMenuItemStyle }}>
                <Link href="mailto:info@example.com" style={{ color: "#4299e1" }}>
                  info@example.com
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="social-links" style={{
            padding: "20px",
            borderTop: "1px solid #e2e8f0"
          }}>
            <ul style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              padding: 0
            }}>
              {['twitter', 'facebook', 'pinterest', 'instagram', 'youtube'].map((platform) => (
                <li key={platform}>
                  <Link 
                    href="/" 
                    style={{ 
                      color: "#718096",
                      ":hover": { color: "#4299e1" },
                      transition: "color 0.3s ease"
                    }}
                  >
                    <i className={`fab fa-${platform}`} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>



    </>
  );
};

export default MobileMenu;
