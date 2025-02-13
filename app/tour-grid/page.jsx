export default function tourGrid() {
    return (
        <>
            {/* <!-- Page Title --> */}
            <section className="page-title style-two centred" style={{ backgroundImage: 'url(assets/images/background/page-title-2.jpg);' }}>
                <div className="auto-container">
                    <div className="content-box">
                        <h1>Tours Grid</h1>
                        <p>Discover your next great adventure</p>
                    </div>
                    <div className="form-inner">
                        <form action="index.html" method="post" className="booking-form clearfix">
                            <div className="form-group">
                                <input type="text" name="service" placeholder="Where to?" required="" />
                            </div>
                            <div className="form-group input-date">
                                <i className="far fa-angle-down"></i>
                                <input type="text" name="date" placeholder="When?" id="datepicker" />
                            </div>
                            <div className="form-group">
                                <div className="select-box">
                                    <select className="wide">
                                        <option data-display="Travel Type">Travel Type</option>
                                        <option value="1">Adventure Tours</option>
                                        <option value="2">City Tours</option>
                                        <option value="3">Couple Tours</option>
                                        <option value="4">Group Tours</option>
                                    </select>
                                </div>
                            </div>
                            <div className="message-btn">
                                <button type="submit" className="theme-btn"><i className="far fa-search"></i>Find Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            {/* <!-- End Page Title --> */}


            {/* <!-- tours-page-section --> */}
            <section className="tours-page-section">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                            <div className="item-shorting clearfix">
                                <div className="left-column pull-left">
                                    <h3>Showing 1-6 of 20 Results</h3>
                                </div>
                                <div className="right-column pull-right clearfix">
                                    <div className="short-box clearfix">
                                        <div className="select-box">
                                            <select className="wide">
                                                <option data-display="Sort by">Sort by</option>
                                                <option value="1">Sort 01</option>
                                                <option value="2">Sort 02</option>
                                                <option value="3">Sort 03</option>
                                                <option value="3">Sort 04</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="menu-box">
                                        <button className="list-view"><i className="icon-List"></i></button>
                                        <button className="grid-view on"><i className="icon-Grid"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div className="wrapper grid">
                                <div className="tour-grid-content">
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 tour-block">
                                            <div className="tour-block-one">
                                                <div className="inner-box">
                                                    <figure className="image-box">
                                                        <img src="assets/images/tour/tour-1.jpg" alt="" />
                                                        <a href="tour-details.html"><i className="fas fa-link"></i></a>
                                                    </figure>
                                                    <div className="lower-content">
                                                        <div className="rating"><span><i className="fas fa-star"></i>8.0 Superb</span></div>
                                                        <h3><a href="tour-details.html">Moscow Red City Land</a></h3>
                                                        <h4>$160.00<span> / Per person</span></h4>
                                                        <ul className="info clearfix">
                                                            <li><i className="far fa-clock"></i>5 Days</li>
                                                            <li><i className="far fa-map"></i>G87P, Birmingham</li>
                                                        </ul>
                                                        <p>Lorem ipsum dolor amet consectetur adipiscing sed.</p>
                                                        <div className="btn-box">
                                                            <a href="tour-details.html">See Details</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 tour-block">
                                            <div className="tour-block-one">
                                                <div className="inner-box">
                                                    <figure className="image-box">
                                                        <img src="assets/images/tour/tour-2.jpg" alt="" />
                                                        <a href="tour-details.html"><i className="fas fa-link"></i></a>
                                                    </figure>
                                                    <div className="lower-content">
                                                        <div className="rating"><span><i className="fas fa-star"></i>8.0 Superb</span></div>
                                                        <h3><a href="tour-details.html">Moscow Red City Land</a></h3>
                                                        <h4>$170.00<span> / Per person</span></h4>
                                                        <ul className="info clearfix">
                                                            <li><i className="far fa-clock"></i>5 Days</li>
                                                            <li><i className="far fa-map"></i>G87P, Birmingham</li>
                                                        </ul>
                                                        <p>Lorem ipsum dolor amet consectetur adipiscing sed.</p>
                                                        <div className="btn-box">
                                                            <a href="tour-details.html">See Details</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 tour-block">
                                            <div className="tour-block-one">
                                                <div className="inner-box">
                                                    <figure className="image-box">
                                                        <img src="assets/images/tour/tour-3.jpg" alt="" />
                                                        <a href="tour-details.html"><i className="fas fa-link"></i></a>
                                                    </figure>
                                                    <div className="lower-content">
                                                        <div className="rating"><span><i className="fas fa-star"></i>8.0 Superb</span></div>
                                                        <h3><a href="tour-details.html">Moscow Red City Land</a></h3>
                                                        <h4>$170.00<span> / Per person</span></h4>
                                                        <ul className="info clearfix">
                                                            <li><i className="far fa-clock"></i>5 Days</li>
                                                            <li><i className="far fa-map"></i>G87P, Birmingham</li>
                                                        </ul>
                                                        <p>Lorem ipsum dolor amet consectetur adipiscing sed.</p>
                                                        <div className="btn-box">
                                                            <a href="tour-details.html">See Details</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 tour-block">
                                            <div className="tour-block-one">
                                                <div className="inner-box">
                                                    <figure className="image-box">
                                                        <img src="assets/images/tour/tour-8.jpg" alt="" />
                                                        <a href="tour-details.html"><i className="fas fa-link"></i></a>
                                                    </figure>
                                                    <div className="lower-content">
                                                        <div className="rating"><span><i className="fas fa-star"></i>8.0 Superb</span></div>
                                                        <h3><a href="tour-details.html">Moscow Red City Land</a></h3>
                                                        <h4>$190.00<span> / Per person</span></h4>
                                                        <ul className="info clearfix">
                                                            <li><i className="far fa-clock"></i>5 Days</li>
                                                            <li><i className="far fa-map"></i>G87P, Birmingham</li>
                                                        </ul>
                                                        <p>Lorem ipsum dolor amet consectetur adipiscing sed.</p>
                                                        <div className="btn-box">
                                                            <a href="tour-details.html">See Details</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 tour-block">
                                            <div className="tour-block-one">
                                                <div className="inner-box">
                                                    <figure className="image-box">
                                                        <img src="assets/images/tour/tour-9.jpg" alt="" />
                                                        <a href="tour-details.html"><i className="fas fa-link"></i></a>
                                                    </figure>
                                                    <div className="lower-content">
                                                        <div className="rating"><span><i className="fas fa-star"></i>8.0 Superb</span></div>
                                                        <h3><a href="tour-details.html">Moscow Red City Land</a></h3>
                                                        <h4>$150.00<span> / Per person</span></h4>
                                                        <ul className="info clearfix">
                                                            <li><i className="far fa-clock"></i>5 Days</li>
                                                            <li><i className="far fa-map"></i>G87P, Birmingham</li>
                                                        </ul>
                                                        <p>Lorem ipsum dolor amet consectetur adipiscing sed.</p>
                                                        <div className="btn-box">
                                                            <a href="tour-details.html">See Details</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 tour-block">
                                            <div className="tour-block-one">
                                                <div className="inner-box">
                                                    <figure className="image-box">
                                                        <img src="assets/images/tour/tour-10.jpg" alt="" />
                                                        <a href="tour-details.html"><i className="fas fa-link"></i></a>
                                                    </figure>
                                                    <div className="lower-content">
                                                        <div className="rating"><span><i className="fas fa-star"></i>8.0 Superb</span></div>
                                                        <h3><a href="tour-details.html">Moscow Red City Land</a></h3>
                                                        <h4>$180.00<span> / Per person</span></h4>
                                                        <ul className="info clearfix">
                                                            <li><i className="far fa-clock"></i>5 Days</li>
                                                            <li><i className="far fa-map"></i>G87P, Birmingham</li>
                                                        </ul>
                                                        <p>Lorem ipsum dolor amet consectetur adipiscing sed.</p>
                                                        <div className="btn-box">
                                                            <a href="tour-details.html">See Details</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 tour-block">
                                            <div className="tour-block-one">
                                                <div className="inner-box">
                                                    <figure className="image-box">
                                                        <img src="assets/images/tour/tour-11.jpg" alt="" />
                                                        <a href="tour-details.html"><i className="fas fa-link"></i></a>
                                                    </figure>
                                                    <div className="lower-content">
                                                        <div className="rating"><span><i className="fas fa-star"></i>8.0 Superb</span></div>
                                                        <h3><a href="tour-details.html">Moscow Red City Land</a></h3>
                                                        <h4>$145.00<span> / Per person</span></h4>
                                                        <ul className="info clearfix">
                                                            <li><i className="far fa-clock"></i>5 Days</li>
                                                            <li><i className="far fa-map"></i>G87P, Birmingham</li>
                                                        </ul>
                                                        <p>Lorem ipsum dolor amet consectetur adipiscing sed.</p>
                                                        <div className="btn-box">
                                                            <a href="tour-details.html">See Details</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 tour-block">
                                            <div className="tour-block-one">
                                                <div className="inner-box">
                                                    <figure className="image-box">
                                                        <img src="assets/images/tour/tour-12.jpg" alt="" />
                                                        <a href="tour-details.html"><i className="fas fa-link"></i></a>
                                                    </figure>
                                                    <div className="lower-content">
                                                        <div className="rating"><span><i className="fas fa-star"></i>8.0 Superb</span></div>
                                                        <h3><a href="tour-details.html">Moscow Red City Land</a></h3>
                                                        <h4>$160.00<span> / Per person</span></h4>
                                                        <ul className="info clearfix">
                                                            <li><i className="far fa-clock"></i>5 Days</li>
                                                            <li><i className="far fa-map"></i>G87P, Birmingham</li>
                                                        </ul>
                                                        <p>Lorem ipsum dolor amet consectetur adipiscing sed.</p>
                                                        <div className="btn-box">
                                                            <a href="tour-details.html">See Details</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tour-list-content list-item">
                                    <div className="tour-block-two">
                                        <div className="inner-box">
                                            <figure className="image-box">
                                                <img src="assets/images/tour/tour-4.jpg" alt="" />
                                                <a href="tour-details.html"><i className="fas fa-link"></i></a>
                                            </figure>
                                            <div className="content-box">
                                                <div className="rating"><span><i className="fas fa-star"></i>8.0 Superb</span></div>
                                                <h3><a href="tour-details.html">Moscow Red City Land</a></h3>
                                                <h4>$170.00<span> / Per person</span></h4>
                                                <p>Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod tempor incididunt.</p>
                                                <div className="btn-box">
                                                    <a href="tour-details.html">See Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tour-block-two">
                                        <div className="inner-box">
                                            <figure className="image-box">
                                                <img src="assets/images/tour/tour-5.jpg" alt="" />
                                                <a href="tour-details.html"><i className="fas fa-link"></i></a>
                                            </figure>
                                            <div className="content-box">
                                                <div className="rating"><span><i className="fas fa-star"></i>8.0 Superb</span></div>
                                                <h3><a href="tour-details.html">Moscow Red City Land</a></h3>
                                                <h4>$180.00<span> / Per person</span></h4>
                                                <p>Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod tempor incididunt.</p>
                                                <div className="btn-box">
                                                    <a href="tour-details.html">See Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tour-block-two">
                                        <div className="inner-box">
                                            <figure className="image-box">
                                                <img src="assets/images/tour/tour-6.jpg" alt="" />
                                                <a href="tour-details.html"><i className="fas fa-link"></i></a>
                                            </figure>
                                            <div className="content-box">
                                                <div className="rating"><span><i className="fas fa-star"></i>8.0 Superb</span></div>
                                                <h3><a href="tour-details.html">Moscow Red City Land</a></h3>
                                                <h4>$155.00<span> / Per person</span></h4>
                                                <p>Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod tempor incididunt.</p>
                                                <div className="btn-box">
                                                    <a href="tour-details.html">See Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tour-block-two">
                                        <div className="inner-box">
                                            <figure className="image-box">
                                                <img src="assets/images/tour/tour-7.jpg" alt="" />
                                                <a href="tour-details.html"><i className="fas fa-link"></i></a>
                                            </figure>
                                            <div className="content-box">
                                                <div className="rating"><span><i className="fas fa-star"></i>8.0 Superb</span></div>
                                                <h3><a href="tour-details.html">Moscow Red City Land</a></h3>
                                                <h4>$130.00<span> / Per person</span></h4>
                                                <p>Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod tempor incididunt.</p>
                                                <div className="btn-box">
                                                    <a href="tour-details.html">See Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tour-block-two">
                                        <div className="inner-box">
                                            <figure className="image-box">
                                                <img src="assets/images/tour/tour-13.jpg" alt="" />
                                                <a href="tour-details.html"><i className="fas fa-link"></i></a>
                                            </figure>
                                            <div className="content-box">
                                                <div className="rating"><span><i className="fas fa-star"></i>8.0 Superb</span></div>
                                                <h3><a href="tour-details.html">Moscow Red City Land</a></h3>
                                                <h4>$160.00<span> / Per person</span></h4>
                                                <p>Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod tempor incididunt.</p>
                                                <div className="btn-box">
                                                    <a href="tour-details.html">See Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tour-block-two">
                                        <div className="inner-box">
                                            <figure className="image-box">
                                                <img src="assets/images/tour/tour-14.jpg" alt="" />
                                                <a href="tour-details.html"><i className="fas fa-link"></i></a>
                                            </figure>
                                            <div className="content-box">
                                                <div className="rating"><span><i className="fas fa-star"></i>8.0 Superb</span></div>
                                                <h3><a href="tour-details.html">Moscow Red City Land</a></h3>
                                                <h4>$190.00<span> / Per person</span></h4>
                                                <p>Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod tempor incididunt.</p>
                                                <div className="btn-box">
                                                    <a href="tour-details.html">See Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tour-block-two">
                                        <div className="inner-box">
                                            <figure className="image-box">
                                                <img src="assets/images/tour/tour-15.jpg" alt="" />
                                                <a href="tour-details.html"><i className="fas fa-link"></i></a>
                                            </figure>
                                            <div className="content-box">
                                                <div className="rating"><span><i className="fas fa-star"></i>8.0 Superb</span></div>
                                                <h3><a href="tour-details.html">Moscow Red City Land</a></h3>
                                                <h4>$150.00<span> / Per person</span></h4>
                                                <p>Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod tempor incididunt.</p>
                                                <div className="btn-box">
                                                    <a href="tour-details.html">See Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tour-block-two">
                                        <div className="inner-box">
                                            <figure className="image-box">
                                                <img src="assets/images/tour/tour-16.jpg" alt="" />
                                                <a href="tour-details.html"><i className="fas fa-link"></i></a>
                                            </figure>
                                            <div className="content-box">
                                                <div className="rating"><span><i className="fas fa-star"></i>8.0 Superb</span></div>
                                                <h3><a href="tour-details.html">Moscow Red City Land</a></h3>
                                                <h4>$170.00<span> / Per person</span></h4>
                                                <p>Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod tempor incididunt.</p>
                                                <div className="btn-box">
                                                    <a href="tour-details.html">See Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pagination-wrapper">
                                <ul className="pagination clearfix">
                                    <li><a href="tour-1.html" className="current">1</a></li>
                                    <li><a href="tour-1.html">2</a></li>
                                    <li><a href="tour-1.html">3</a></li>
                                    <li><a href="tour-1.html"><i className="icon-Right-Arrow"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                            <div className="default-sidebar tour-sidebar ml-20">
                                <div className="sidebar-widget sidebar-search">
                                    <div className="widget-title">
                                        <h3>Search</h3>
                                    </div>
                                    <form action="destination-details.html" method="post" className="search-form">
                                        <div className="form-group">
                                            <input type="search" name="search-field" placeholder="Search" required="" />
                                            <button type="submit"><i className="fas fa-search"></i></button>
                                        </div>
                                    </form>
                                </div>
                                <div className="sidebar-widget category-widget">
                                    <div className="widget-title">
                                        <h3>Category</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="category-list clearfix">
                                            <li className="custom-check-box">
                                                <div className="custom-controls-stacked">
                                                    <label className="custom-control material-checkbox">
                                                        <input type="checkbox" className="material-control-input" />
                                                        <span className="material-control-indicator"></span>
                                                        <span className="description">Adventure Tours</span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="custom-check-box">
                                                <div className="custom-controls-stacked">
                                                    <label className="custom-control material-checkbox">
                                                        <input type="checkbox" className="material-control-input" checked="checked" />
                                                        <span className="material-control-indicator"></span>
                                                        <span className="description">City Tours</span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="custom-check-box">
                                                <div className="custom-controls-stacked">
                                                    <label className="custom-control material-checkbox">
                                                        <input type="checkbox" className="material-control-input" />
                                                        <span className="material-control-indicator"></span>
                                                        <span className="description">Couple Tours</span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="custom-check-box">
                                                <div className="custom-controls-stacked">
                                                    <label className="custom-control material-checkbox">
                                                        <input type="checkbox" className="material-control-input" />
                                                        <span className="material-control-indicator"></span>
                                                        <span className="description">Group Tours</span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="custom-check-box">
                                                <div className="custom-controls-stacked">
                                                    <label className="custom-control material-checkbox">
                                                        <input type="checkbox" className="material-control-input" />
                                                        <span className="material-control-indicator"></span>
                                                        <span className="description">Hosted Tours</span>
                                                    </label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sidebar-widget price-filter">
                                    <div className="widget-title">
                                        <h3>Price Range</h3>
                                    </div>
                                    <div className="range-slider clearfix">
                                        <div className="value-box clearfix">
                                            <div className="min-value pull-left">
                                                <p>$50.00</p>
                                            </div>
                                            <div className="max-value pull-right">
                                                <p>$100.00</p>
                                            </div>
                                        </div>
                                        <div className="price-range-slider"></div>
                                    </div>
                                </div>
                                <div className="sidebar-widget duration-widget">
                                    <div className="widget-title">
                                        <h3>Durations</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="category-list clearfix">
                                            <li className="custom-check-box">
                                                <div className="custom-controls-stacked">
                                                    <label className="custom-control material-checkbox">
                                                        <input type="checkbox" className="material-control-input" />
                                                        <span className="material-control-indicator"></span>
                                                        <span className="description">0 - 24 hours</span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="custom-check-box">
                                                <div className="custom-controls-stacked">
                                                    <label className="custom-control material-checkbox">
                                                        <input type="checkbox" className="material-control-input" />
                                                        <span className="material-control-indicator"></span>
                                                        <span className="description">1 - 2 days</span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="custom-check-box">
                                                <div className="custom-controls-stacked">
                                                    <label className="custom-control material-checkbox">
                                                        <input type="checkbox" className="material-control-input" />
                                                        <span className="material-control-indicator"></span>
                                                        <span className="description">2 - 3 days</span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="custom-check-box">
                                                <div className="custom-controls-stacked">
                                                    <label className="custom-control material-checkbox">
                                                        <input type="checkbox" className="material-control-input" />
                                                        <span className="material-control-indicator"></span>
                                                        <span className="description">3 - 4 days</span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="custom-check-box">
                                                <div className="custom-controls-stacked">
                                                    <label className="custom-control material-checkbox">
                                                        <input type="checkbox" className="material-control-input" />
                                                        <span className="material-control-indicator"></span>
                                                        <span className="description">4 - 5 days</span>
                                                    </label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sidebar-widget review-widget">
                                    <div className="widget-title">
                                        <h3>Review Score</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="category-list clearfix">
                                            <li className="custom-check-box">
                                                <div className="custom-controls-stacked">
                                                    <label className="custom-control material-checkbox">
                                                        <input type="checkbox" className="material-control-input" />
                                                        <span className="material-control-indicator"></span>
                                                        <span className="description">
                                                            <i className="icon-Star"></i>
                                                            <i className="icon-Star"></i>
                                                            <i className="icon-Star"></i>
                                                            <i className="icon-Star"></i>
                                                            <i className="icon-Star"></i>
                                                        </span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="custom-check-box">
                                                <div className="custom-controls-stacked">
                                                    <label className="custom-control material-checkbox">
                                                        <input type="checkbox" className="material-control-input" />
                                                        <span className="material-control-indicator"></span>
                                                        <span className="description">
                                                            <i className="icon-Star"></i>
                                                            <i className="icon-Star"></i>
                                                            <i className="icon-Star"></i>
                                                            <i className="icon-Star"></i>
                                                            <i className="icon-Star light"></i>
                                                        </span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="custom-check-box">
                                                <div className="custom-controls-stacked">
                                                    <label className="custom-control material-checkbox">
                                                        <input type="checkbox" className="material-control-input" />
                                                        <span className="material-control-indicator"></span>
                                                        <span className="description">
                                                            <i className="icon-Star"></i>
                                                            <i className="icon-Star"></i>
                                                            <i className="icon-Star"></i>
                                                            <i className="icon-Star light"></i>
                                                            <i className="icon-Star light"></i>
                                                        </span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="custom-check-box">
                                                <div className="custom-controls-stacked">
                                                    <label className="custom-control material-checkbox">
                                                        <input type="checkbox" className="material-control-input" />
                                                        <span className="material-control-indicator"></span>
                                                        <span className="description">
                                                            <i className="icon-Star"></i>
                                                            <i className="icon-Star"></i>
                                                            <i className="icon-Star light"></i>
                                                            <i className="icon-Star light"></i>
                                                            <i className="icon-Star light"></i>
                                                        </span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="custom-check-box">
                                                <div className="custom-controls-stacked">
                                                    <label className="custom-control material-checkbox">
                                                        <input type="checkbox" className="material-control-input" />
                                                        <span className="material-control-indicator"></span>
                                                        <span className="description">
                                                            <i className="icon-Star"></i>
                                                            <i className="icon-Star light"></i>
                                                            <i className="icon-Star light"></i>
                                                            <i className="icon-Star light"></i>
                                                            <i className="icon-Star light"></i>
                                                        </span>
                                                    </label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="advice-widget">
                                    <div className="inner-box" style={{ backgroundImage: 'url(assets/images/resource/advice-1.jpg);' }}>
                                        <div className="text">
                                            <h2>Get <br />25% Off <br />On New York Tours</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- tours-page-section end --> */}
        </>
    )
}