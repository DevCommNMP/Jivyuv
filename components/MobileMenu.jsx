import Image from "next/image";
import Link from "next/link";

const MobileMenu = ({ isMobileMenuOpen, toggleMobileMenu }) => {
  return (
    <>
      {/* Mobile Menu */}
      <div
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
      </div>
    </>
  );
};

export default MobileMenu;
