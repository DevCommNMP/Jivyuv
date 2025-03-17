"use client";
import Image from "next/image";
import Link from "next/link";

export default function BlogStandard() {
  return (
    <div className="blog-standard-page">
      {/* Page Title */}
      <section
        className="page-title centred"
        style={{ backgroundImage: "url(/assets/images/background/page-title-5.jpg)" }}
      >
        <div className="auto-container">
          <div className="content-box">
            <h1>Blog Standard</h1>
            <p>page is not found</p>
          </div>
        </div>
      </section>

      {/* Blog Standard Content */}
      <section className="sidebar-page-container">
        <div className="auto-container">
          <div className="row clearfix">
            {/* Blog Posts */}
            <div className="col-lg-8 col-md-12 col-sm-12 content-side">
              <div className="blog-standard-content">
                {/* Blog Post */}
                <div className="news-block-one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <Link href="/blog-details">
                        <Image
                          src="/assets/images/news/news-9.jpg"
                          alt="Blog Post"
                          width={800}
                          height={400}
                        />
                      </Link>
                      <span className="post-date">
                        <i className="icon-Calendar"></i>20 Oct, 2020
                      </span>
                    </figure>
                    <div className="lower-content">
                      <div className="category">
                        <Link href="/blog-details">Lifestyle</Link>
                      </div>
                      <h2>
                        <Link href="/blog-details">
                          Including animation in your design system
                        </Link>
                      </h2>
                      <ul className="post-info clearfix">
                        <li>
                          <span>By</span> <Link href="/">Eva Green</Link>
                        </li>
                        <li> - October 20, 2020</li>
                      </ul>
                      <p>
                        Lorem ipsum dolor sit amet consectur adip icing sed eiusmod tempor
                        incididunt labore dolore magna aliqua enim minim veniam quis nostrud
                        exercitation laboris nisi ut aliquip ex commodo consequat duis aute irure.
                      </p>
                      <div className="btn-box">
                        <Link href="/blog-details" className="theme-btn-two">
                          See Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ...repeat for other blog posts... */}

                {/* Pagination */}
                <div className="pagination-wrapper">
                  <ul className="pagination clearfix">
                    <li>
                      <Link href="/blog-grid" className="current">
                        1
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-grid">2</Link>
                    </li>
                    <li>
                      <Link href="/blog-grid">3</Link>
                    </li>
                    <li>
                      <Link href="/blog-grid">
                        <i className="icon-Right-Arrow"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
              <div className="blog-sidebar default-sidebar ml-20">
                {/* Search Widget */}
                <div className="sidebar-widget sidebar-search">
                  <div className="widget-title">
                    <h3>Search</h3>
                  </div>
                  <form action="/search" method="post" className="search-form">
                    <div className="form-group">
                      <input type="search" name="search-field" placeholder="Search" required />
                      <button type="submit">
                        <i className="fas fa-search"></i>
                      </button>
                    </div>
                  </form>
                </div>

                {/* Categories Widget */}
                <div className="sidebar-widget category-widget">
                  <div className="widget-title">
                    <h3>Categories</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="category-list clearfix">
                      <li>
                        <Link href="/blog-details">
                          <i className="icon-Hover-Arrow"></i>Travel Direction
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-details">
                          <i className="icon-Hover-Arrow"></i>Documentation
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-details">
                          <i className="icon-Hover-Arrow"></i>Logo & Assets
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Latest News Widget */}
                <div className="sidebar-widget post-widget">
                  <div className="widget-title">
                    <h3>Latest News</h3>
                  </div>
                  <div className="post-inner">
                    <div className="post">
                      <figure className="post-thumb">
                        <Link href="/blog-details">
                          <Image
                            src="/assets/images/news/post-1.png"
                            alt="Latest News"
                            width={100}
                            height={100}
                          />
                        </Link>
                      </figure>
                      <span className="post-date">April 18, 2020</span>
                      <h4>
                        <Link href="/blog-details">Consequntur eos magni dolore.</Link>
                      </h4>
                    </div>
                    {/* ...repeat for other latest news... */}
                  </div>
                </div>

                {/* Advice Widget */}
                <div className="advice-widget">
                  <div
                    className="inner-box"
                    style={{ backgroundImage: "url(/assets/images/resource/advice-1.jpg)" }}
                  >
                    <div className="text">
                      <h2>
                        Get <br />
                        25% Off <br />
                        On New York Tours
                      </h2>
                    </div>
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
