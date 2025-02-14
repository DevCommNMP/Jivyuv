
const TestimonialSection = () => {
    return (
        <>
            {/* Page Title */}
            <section
                className="page-title centred"
                style={{ backgroundImage: "url(assets/images/background/page-title-5.jpg)" }}
            >
                <div className="auto-container">
                    <div className="content-box">
                        <h1>Elements</h1>
                        <p>Testimonial Block</p>
                    </div>
                </div>
            </section>
            {/* End Page Title */}

            {/* Testimonial Section */}
            <section className="testimonial-section sec-pad centred">
                <div className="auto-container">
                    <div className="three-item-carousel owl-carousel owl-theme owl-nav-none owl-dots-none">
                        {[...Array(6)].map((_, index) => (
                            <div className="testimonial-block-one" key={index}>
                                <div className="inner-box">
                                    <ul className="rating-box clearfix">
                                        {Array(5)
                                            .fill(null)
                                            .map((_, starIndex) => (
                                                <li key={starIndex}>
                                                    <i className="icon-Star"></i>
                                                </li>
                                            ))}
                                    </ul>
                                    <div className="text">
                                        <div
                                            className="icon"
                                            style={{ backgroundImage: "url(assets/images/icons/quote-1.png)" }}
                                        ></div>
                                        <p>
                                            Lorem ipsum dolor amet consectet adipiscing sed do eiusmod tempor incididunt labore et
                                            dolore magna aliqua ipsum suspen disse ultrices gravida Risus
                                        </p>
                                    </div>
                                    <div className="author-box">
                                        <h4>{index % 2 === 0 ? "Mike Hardson" : "Amy Johnson"}</h4>
                                        <span className="designation">Traveler</span>
                                        <figure className="thumb-box">
                                            <img
                                                src={`assets/images/resource/testimonial-${(index % 3) + 1}.png`}
                                                alt=""
                                            />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* End Testimonial Section */}
        </>
    );
};

export default TestimonialSection;