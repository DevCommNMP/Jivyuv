import AboutSection from "@/components/AboutSection";
import VideoSection from "@/components/VideoSection";
import { Play } from "lucide-react";
export default function about() {
    return (
        <>

            {/* -- Page Title --> */}
            <section className="page-title centred" style={{ backgroundImage: 'url(/assets/img/destination-2page-title.jpg)' }}>
                <div className="auto-container">
                    <div className="content-box">
                        <h1>About Us</h1>
                        <p>Discover your next great adventure</p>
                    </div>
                </div>
            </section>
            {/* -- End Page Title --> */}


            {/* -- about-style-two --> */}
            {/* <section className="about-style-two">
                <div className="pattern-layer" style={{ backgroundImage: 'url(assets/img/about-us/page-title.jpg)' }}></div>
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content_block_1">
                                <div className="content-box">
                                    <div className="sec-title">
                                        <p>About Travio</p>
                                        <h2>World Best Travel Agency Company Since 2008.</h2>
                                    </div>
                                    <div className="text">
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiu smod tempor incididunt ut labore  eiu dolore magna aliqua.Quis ipsum suspen disse ultrices gravida Risus commodo.</p>
                                    </div>
                                    <div className="btn-box">
                                        <a href="#" className="theme-btn">Find Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="image_block_2">
                                <div className="image-box">
                                    <div className="shape">
                                        <div className="shape-1" style={{ backgroundImage: 'url(assets/images/background/page-title.jpg)' }}></div>
                                        <div className="shape-2" style={{ backgroundImage: 'url(assets/images/background/page-title.jpg)' }}></div>
                                        <div className="shape-3" style={{ backgroundImage: 'url(assets/images/background/page-title.jpg)' }}></div>
                                    </div>
                                    <figure className="image"><img src="assets/images/resource/about-3.jpg" alt="" /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <AboutSection/>
            {/* -- about-style-two end --> */}


            {/* -- place-style-three --> */}
            {/* <section className="place-style-three bg-color-1 sec-pad">
                <div className="anim-icon">
                    <div className="icon anim-icon-1" style={{ backgroundImage: 'url(assets/img/home/page-title.jpg)' }}></div>
                    <div className="icon anim-icon-2" style={{ backgroundImage: 'url(assets/img/home/page-title.jpg)' }}></div>
                </div>
                <div className="auto-container">
                    <div className="sec-title centred">
                        <p>Choose Your place</p>
                        <h2>Popular Destinations</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="three-item-carousel owl-carousel owl-theme owl-nav-none dots-style-one">
                            <div className="place-block-two">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/img/home/place-6.jpg" alt="" /></figure>
                                    <div className="text">
                                        <h3>New York City</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="place-block-two">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/img/home/place-7.jpg" alt="" /></figure>
                                    <div className="text">
                                        <h3>Mont Blanc</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="place-block-two">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/resource/place-8.jpg" alt="" /></figure>
                                    <div className="text">
                                        <h3>Norway Lake</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="place-block-two">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/resource/place-6.jpg" alt="" /></figure>
                                    <div className="text">
                                        <h3>New York City</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="place-block-two">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/resource/place-7.jpg" alt="" /></figure>
                                    <div className="text">
                                        <h3>Mont Blanc</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="place-block-two">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/resource/place-8.jpg" alt="" /></figure>
                                    <div className="text">
                                        <h3>Norway Lake</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="place-block-two">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/resource/place-6.jpg" alt="" /></figure>
                                    <div className="text">
                                        <h3>New York City</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="place-block-two">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/resource/place-7.jpg" alt="" /></figure>
                                    <div className="text">
                                        <h3>Mont Blanc</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="place-block-two">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/resource/place-8.jpg" alt="" /></figure>
                                    <div className="text">
                                        <h3>Norway Lake</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* -- place-style-three end --> */}


            {/* -- video-section --> */}
            {/* <section className="video-section centred" style={{ backgroundImage: 'url(assets/images/background/page-title.jpg)' }}>
                <div className="auto-container">
                    <div className="inner-box">
                        <h2>Explore Your Travel</h2>
                        <p>Your New Traveling Idea</p>
                        <div className="video-btn">
                            <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" className="lightbox-image" data-caption="">

                                <Play />
                                <span className="border-animation border-1"></span>
                                <span className="border-animation border-2"></span>
                                <span className="border-animation border-3"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </section> */}
            <VideoSection/>
            {/* -- video-section end --> */}


            {/* -- testimonial-section --> */}
            {/* <section className="testimonial-section sec-pad centred">
                <div className="auto-container">
                    <div className="sec-title centred">
                        <p>Review & Testimonials</p>
                        <h2>Top Reviews for Travio</h2>
                    </div>
                    <div className="three-item-carousel owl-carousel owl-theme owl-nav-none">
                        <div className="testimonial-block-one">
                            <div className="inner-box">
                                <ul className="rating-box clearfix">
                                    <li><i className="icon-Star"></i></li>
                                    <li><i className="icon-Star"></i></li>
                                    <li><i className="icon-Star"></i></li>
                                    <li><i className="icon-Star"></i></li>
                                    <li><i className="icon-Star"></i></li>
                                </ul>
                                <div className="text">
                                    <div className="icon" style={{ backgroundImage: 'url(assets/images/background/page-title.jpg)' }}></div>
                                    <p>Lorem ipsum dolor amet consectet adipiscing sed do eiusmod tempor incididunt labore et dolore magna aliqua ipsum suspen disse ultrices gravida Risus</p>
                                </div>
                                <div className="author-box">
                                    <h4>Mike Hardson</h4>
                                    <span className="designation">Traveler</span>
                                    <figure className="thumb-box"><img src="assets/images/resource/testimonial-1.png" alt="" /></figure>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-block-one">
                            <div className="inner-box">
                                <ul className="rating-box clearfix">
                                    <li><i className="icon-Star"></i></li>
                                    <li><i className="icon-Star"></i></li>
                                    <li><i className="icon-Star"></i></li>
                                    <li><i className="icon-Star"></i></li>
                                    <li><i className="icon-Star"></i></li>
                                </ul>
                                <div className="text">
                                    <div className="icon" style={{ backgroundImage: 'url(assets/images/background/page-title.jpg)' }}></div>
                                    <p>Lorem ipsum dolor amet consectet adipiscing sed do eiusmod tempor incididunt labore et dolore magna aliqua ipsum suspen disse ultrices gravida Risus</p>
                                </div>
                                <div className="author-box">
                                    <h4>Amy Johnson</h4>
                                    <span className="designation">Traveler</span>
                                    <figure className="thumb-box"><img src="assets/images/resource/testimonial-2.png" alt="" /></figure>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-block-one">
                            <div className="inner-box">
                                <ul className="rating-box clearfix">
                                    <li><i className="icon-Star"></i></li>
                                    <li><i className="icon-Star"></i></li>
                                    <li><i className="icon-Star"></i></li>
                                    <li><i className="icon-Star"></i></li>
                                    <li><i className="icon-Star"></i></li>
                                </ul>
                                <div className="text">
                                    <div className="icon" style={{ backgroundImage: 'url(assets/images/background/page-title.jpg)' }}></div>
                                    <p>Lorem ipsum dolor amet consectet adipiscing sed do eiusmod tempor incididunt labore et dolore magna aliqua ipsum suspen disse ultrices gravida Risus</p>
                                </div>
                                <div className="author-box">
                                    <h4>Luaka Smith</h4>
                                    <span className="designation">Traveler</span>
                                    <figure className="thumb-box"><img src="assets/images/resource/testimonial-3.png" alt="" /></figure>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-block-one">
                            <div className="inner-box">
                                <ul className="rating-box clearfix">
                                    <li><i className="icon-Star"></i></li>
                                    <li><i className="icon-Star"></i></li>
                                    <li><i className="icon-Star"></i></li>
                                    <li><i className="icon-Star"></i></li>
                                    <li><i className="icon-Star"></i></li>
                                </ul>
                                <div className="text">
                                    <div className="icon" style={{ backgroundImage: 'url(assets/images/background/page-title.jpg)' }}></div>
                                    <p>Lorem ipsum dolor amet consectet adipiscing sed do eiusmod tempor incididunt labore et dolore magna aliqua ipsum suspen disse ultrices gravida Risus</p>
                                </div>
                                <div className="author-box">
                                    <h4>Mike Hardson</h4>
                                    <span className="designation">Traveler</span>
                                    <figure className="thumb-box"><img src="assets/images/resource/testimonial-1.png" alt="" /></figure>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-block-one">
                            <div className="inner-box">
                                <ul className="rating-box clearfix">
                                    <li><i className="icon-Star"></i></li>
                                    <li><i className="icon-Star"></i></li>
                                    <li><i className="icon-Star"></i></li>
                                    <li><i className="icon-Star"></i></li>
                                    <li><i className="icon-Star"></i></li>
                                </ul>
                                <div className="text">
                                    <div className="icon" style={{ backgroundImage: 'url(assets/images/background/page-title.jpg)' }}></div>
                                    <p>Lorem ipsum dolor amet consectet adipiscing sed do eiusmod tempor incididunt labore et dolore magna aliqua ipsum suspen disse ultrices gravida Risus</p>
                                </div>
                                <div className="author-box">
                                    <h4>Amy Johnson</h4>
                                    <span className="designation">Traveler</span>
                                    <figure className="thumb-box"><img src="assets/images/resource/testimonial-2.png" alt="" /></figure>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-block-one">
                            <div className="inner-box">
                                <ul className="rating-box clearfix">
                                    <li><i className="icon-Star"></i></li>
                                    <li><i className="icon-Star"></i></li>
                                    <li><i className="icon-Star"></i></li>
                                    <li><i className="icon-Star"></i></li>
                                    <li><i className="icon-Star"></i></li>
                                </ul>
                                <div className="text">
                                    <div className="icon" style={{ backgroundImage: 'url(assets/images/background/page-title.jpg)' }}></div>
                                    <p>Lorem ipsum dolor amet consectet adipiscing sed do eiusmod tempor incididunt labore et dolore magna aliqua ipsum suspen disse ultrices gravida Risus</p>
                                </div>
                                <div className="author-box">
                                    <h4>Luaka Smith</h4>
                                    <span className="designation">Traveler</span>
                                    <figure className="thumb-box"><img src="assets/images/resource/testimonial-3.png" alt="" /></figure>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-block-one">
                            <div className="inner-box">
                                <ul className="rating-box clearfix">
                                    <li><i className="icon-Star"></i></li>
                                    <li><i className="icon-Star"></i></li>
                                    <li><i className="icon-Star"></i></li>
                                    <li><i className="icon-Star"></i></li>
                                    <li><i className="icon-Star"></i></li>
                                </ul>
                                <div className="text">
                                    <div className="icon" style={{ backgroundImage: 'url(assets/images/background/page-title.jpg)' }}></div>
                                    <p>Lorem ipsum dolor amet consectet adipiscing sed do eiusmod tempor incididunt labore et dolore magna aliqua ipsum suspen disse ultrices gravida Risus</p>
                                </div>
                                <div className="author-box">
                                    <h4>Mike Hardson</h4>
                                    <span className="designation">Traveler</span>
                                    <figure className="thumb-box"><img src="assets/images/resource/testimonial-1.png" alt="" /></figure>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-block-one">
                            <div className="inner-box">
                                <ul className="rating-box clearfix">
                                    <li><i className="icon-Star"></i></li>
                                    <li><i className="icon-Star"></i></li>
                                    <li><i className="icon-Star"></i></li>
                                    <li><i className="icon-Star"></i></li>
                                    <li><i className="icon-Star"></i></li>
                                </ul>
                                <div className="text">
                                    <div className="icon" style={{ backgroundImage: 'url(assets/images/background/page-title.jpg)' }}></div>
                                    <p>Lorem ipsum dolor amet consectet adipiscing sed do eiusmod tempor incididunt labore et dolore magna aliqua ipsum suspen disse ultrices gravida Risus</p>
                                </div>
                                <div className="author-box">
                                    <h4>Amy Johnson</h4>
                                    <span className="designation">Traveler</span>
                                    <figure className="thumb-box"><img src="assets/images/resource/testimonial-2.png" alt="" /></figure>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-block-one">
                            <div className="inner-box">
                                <ul className="rating-box clearfix">
                                    <li><i className="icon-Star"></i></li>
                                    <li><i className="icon-Star"></i></li>
                                    <li><i className="icon-Star"></i></li>
                                    <li><i className="icon-Star"></i></li>
                                    <li><i className="icon-Star"></i></li>
                                </ul>
                                <div className="text">
                                    <div className="icon" style={{ backgroundImage: 'url(assets/images/icons/quote-1.png);' }}></div>
                                    <p>Lorem ipsum dolor amet consectet adipiscing sed do eiusmod tempor incididunt labore et dolore magna aliqua ipsum suspen disse ultrices gravida Risus</p>
                                </div>
                                <div className="author-box">
                                    <h4>Luaka Smith</h4>
                                    <span className="designation">Traveler</span>
                                    <figure className="thumb-box"><img src="assets/images/resource/testimonial-3.png" alt="" /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            



            <section className="team-section sec-pad bg-color-1 centred">
                <div className="anim-icon">
                    <div className="icon anim-icon-1" style={{ backgroundImage: 'url(assets/images/shape/shape-3.png)' }}></div>
                    <div className="icon anim-icon-2" style={{ backgroundImage: 'url(assets/images/shape/shape-3.png)' }}></div>
                </div>
                <div className="auto-container">
                    <div className="sec-title">
                        <p>Tour Guide</p>
                        <h2>Expert Tour Guides</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                            <div className="team-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/team/team-1.jpg" alt="" /></figure>
                                    <div className="lower-content">
                                        <h3><a href="#">Merrie Lewis</a></h3>
                                        <span className="designation">Tour Guide</span>
                                        <ul className="social-links clearfix">
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                            <div className="team-block-one wow fadeInUp animated animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/team/team-2.jpg" alt="" /></figure>
                                    <div className="lower-content">
                                        <h3><a href="#">Parks Missie</a></h3>
                                        <span className="designation">Tour Guide</span>
                                        <ul className="social-links clearfix">
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                            <div className="team-block-one wow fadeInUp animated animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/team/team-3.jpg" alt="" /></figure>
                                    <div className="lower-content">
                                        <h3><a href="#">Mariana Buenos</a></h3>
                                        <span className="designation">Tour Guide</span>
                                        <ul className="social-links clearfix">
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}