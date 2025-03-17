import Image from "next/image";
import Link from "next/link";

import { Clock, Map, Star } from "lucide-react";
export default function TourSection() {
  return (
    <>
      <section className="tour-section bg-color-1 sec-pad">
        <div
          className="pattern-layer"
          style={{ backgroundImage: "url(/assets/images/shape/shape-4.png)" }}
        ></div>
        <div className="auto-container">
          <div className="sec-title text-center">
            <p>Modern & Beautiful</p>
            <h2>Our Most Popular Adventures</h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 tour-block">
              <div
                className="tour-block-one wow fadeInUp animated animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <Image
                      src="/assets/img/home/tour-1.jpg"
                      alt=""
                      width={370}
                      height={270}
                    />
                    <Link href="tour-details">
                      <i className="fas fa-link"></i>
                    </Link>
                  </figure>
                  <div className="lower-content">
                    <div className="rating">
                      <span>
                        <Star size={24} color={"gold"} /> 8.0 Superb
                      </span>
                    </div>
                    <h3>
                      <Link href="tour-details">Moscow Red City Land</Link>
                    </h3>
                    <h4>
                      $170.00<span> / Per person</span>
                    </h4>
                    <ul className="info clearfix">
                      <li>
                        <Clock size={24} /> 5 Days
                      </li>
                      <li>
                        <Map size={24} /> G87P, Birmingham
                      </li>
                    </ul>
                    <p>Lorem ipsum dolor amet consectetur adipiscing sed.</p>
                    <div className="btn-box">
                      <Link href="tour-details">See Details</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 tour-block">
              <div
                className="tour-block-one wow fadeInUp animated animated"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <Image
                      src="/assets/img/home/tour-2.jpg"
                      alt=""
                      width={370}
                      height={270}
                    />
                    <Link href="tour-details">
                      <i className="fas fa-link"></i>
                    </Link>
                  </figure>
                  <div className="lower-content">
                    <div className="rating">
                      <span>
                        <Star size={24} color={"gold"} /> 8.0 Superb
                      </span>
                    </div>
                    <h3>
                      <Link href="tour-details">Moscow Red City Land</Link>
                    </h3>
                    <h4>
                      $170.00<span> / Per person</span>
                    </h4>
                    <ul className="info clearfix">
                      <li>
                        <Clock size={24} /> 5 Days
                      </li>
                      <li>
                        <Map size={24} /> G87P, Birmingham
                      </li>
                    </ul>
                    <p>Lorem ipsum dolor amet consectetur adipiscing sed.</p>
                    <div className="btn-box">
                      <Link href="tour-details">See Details</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 tour-block">
              <div
                className="tour-block-one wow fadeInUp animated animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <Image
                      src="/assets/img/home/tour-3.jpg"
                      alt=""
                      width={370}
                      height={270}
                    />
                    <Link href="tour-details">
                      <i className="fas fa-link"></i>
                    </Link>
                  </figure>
                  <div className="lower-content">
                    <div className="rating">
                      <span>
                        <Star size={24} color={"gold"} /> 8.0 Superb
                      </span>
                    </div>
                    <h3>
                      <Link href="tour-details">Moscow Red City Land</Link>
                    </h3>
                    <h4>
                      $170.00<span> / Per person</span>
                    </h4>
                    <ul className="info clearfix">
                      <li>
                        <Clock size={24} /> 5 Days
                      </li>
                      <li>
                        <Map size={24} /> G87P, Birmingham
                      </li>
                    </ul>
                    <p>Lorem ipsum dolor amet consectetur adipiscing sed.</p>
                    <div className="btn-box">
                      <Link href="tour-details">See Details</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
