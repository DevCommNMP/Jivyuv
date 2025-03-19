"use client";

import Image from "next/image";
import Link from "next/link";

export default function BlogDetails({ params }) {
    const { slug } = params; // Access the dynamic slug parameter

    return (
        <div className="blog-details-page">
            {/* Page Title */}
            <section
                className="page-title centred"
                style={{ backgroundImage: "url(/assets/images/background/page-title-5.jpg)" }}
            >
                <div className="auto-container">
                    <div className="content-box">
                        <h1>Blog Details</h1>
                        <p>Discover your next great adventure</p>
                    </div>
                </div>
            </section>

            {/* Blog Content */}
            <section className="sidebar-page-container">
                <div className="auto-container">
                    <div className="row clearfix">
                        {/* Content Side */}
                        <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                            <div className="blog-details-content">
                                <div className="news-block-one">
                                    <div className="inner-box">
                                        <div className="lower-content">
                                            <div className="category">
                                                <Link href="#">Lifestyle</Link>
                                            </div>
                                            <h2>Including animation in your design system</h2>
                                            <ul className="post-info clearfix">
                                                <li>
                                                    <span>By</span> <Link href="#">Eva Green</Link>
                                                </li>
                                                <li>-</li>
                                                <li className="comment">
                                                    <Link href="#">0 Comment</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <figure className="image-box">
                                            <Image
                                                src="/assets/images/news/news-9.jpg"
                                                alt="Blog Image"
                                                width={800}
                                                height={400}
                                            />
                                            <span className="post-date">
                                                <i className="icon-Calendar"></i>20 Oct, 2020
                                            </span>
                                        </figure>
                                    </div>
                                </div>
                                <div className="text">
                                    <p>
                                        Lorem ipsum dolor sit amet consectur adip icing sed eiusmod tempor incididunt labore dolore magna aliqua enim minim veniam quis nostrud exercitation laboris nisi ut aliquip ex commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    </p>
                                    <p>
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                                    </p>
                                </div>
                                <div className="image-box clearfix">
                                    <figure className="image">
                                        <Image
                                            src="/assets/images/resource/destination-1.jpg"
                                            alt="Gallery Image"
                                            width={300}
                                            height={200}
                                        />
                                    </figure>
                                    <figure className="image">
                                        <Image
                                            src="/assets/images/resource/destination-2.jpg"
                                            alt="Gallery Image"
                                            width={300}
                                            height={200}
                                        />
                                    </figure>
                                    <figure className="image">
                                        <Image
                                            src="/assets/images/resource/destination-3.jpg"
                                            alt="Gallery Image"
                                            width={300}
                                            height={200}
                                        />
                                    </figure>
                                </div>
                                <div className="text">
                                    <p>
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                    </p>
                                    <ul className="list clearfix">
                                        <li>Air fares</li>
                                        <li>4 Nights Hotel Accomodation</li>
                                        <li>Entrance Fees</li>
                                    </ul>
                                    <p>
                                        Totam rem aperiam eaque ipsa quae ab illo inventore veritatis quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                    </p>
                                </div>
                                <div className="post-share-option clearfix">
                                    <div className="text pull-left">
                                        <h3>We Are Social On:</h3>
                                    </div>
                                    <ul className="social-links pull-right clearfix">
                                        <li>
                                            <Link href="#">
                                                <i className="fab fa-facebook-f"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="fab fa-google-plus-g"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="fab fa-twitter"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                            <div className="blog-sidebar default-sidebar ml-20">
                                <div className="sidebar-widget sidebar-search">
                                    <div className="widget-title">
                                        <h3>Search</h3>
                                    </div>
                                    <form className="search-form">
                                        <div className="form-group">
                                            <input
                                                type="search"
                                                name="search-field"
                                                placeholder="Search"
                                                required
                                            />
                                            <button type="submit">
                                                <i className="fas fa-search"></i>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="sidebar-widget category-widget">
                                    <div className="widget-title">
                                        <h3>Categories</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="category-list clearfix">
                                            <li>
                                                <Link href="#">
                                                    <i className="icon-Hover-Arrow"></i>Travel Direction
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="icon-Hover-Arrow"></i>Documentation
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="icon-Hover-Arrow"></i>Logo & Assets
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sidebar-widget post-widget">
                                    <div className="widget-title">
                                        <h3>Latest News</h3>
                                    </div>
                                    <div className="post-inner">
                                        <div className="post">
                                            <figure className="post-thumb">
                                                <Link href="#">
                                                    <Image
                                                        src="/assets/images/news/post-1.png"
                                                        alt="Post Image"
                                                        width={100}
                                                        height={100}
                                                    />
                                                </Link>
                                            </figure>
                                            <span className="post-date">April 18, 2020</span>
                                            <h4>
                                                <Link href="#">Consequntur eos magni dolore.</Link>
                                            </h4>
                                        </div>
                                        {/* ...repeat for other posts... */}
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
