import { CirclePlay, SquareCheckBig } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <>
      <section className="about-section">
        <div
          className="pattern-layer"
          style={{ backgroundImage: "url(assets/img/home//shape-1.png)" }}
        ></div>
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <div className="image_block_1">
                <div className="image-box">
                  <div className="shape">
                    <div
                      className="shape-1"
                      style={{
                        backgroundImage: "url(assets/images/shape/shape-1.png)",
                      }}
                    ></div>
                    <div
                      className="shape-2"
                      style={{
                        backgroundImage: "url(assets/images/shape/shape-2.png)",
                      }}
                    ></div>
                  </div>
                  <figure className="image image-1">
                    <Image
                      src="/assets/img/home/about-1.jpg"
                      alt=""
                      width={390}
                      height={390}
                    />
                    <div
                      className="shape-3"
                      style={{
                        backgroundImage: "url(assets/images/shape/shape-3.png)",
                      }}
                    ></div>
                  </figure>
                  <figure className="image image-2">
                    <Image
                      src="/assets/img/home/about-2.jpg"
                      alt=""
                      width={280}
                      height={200}
                    />
                  </figure>
                  <div className="video-content">
                    <h3>Find Your Best Destination</h3>
                    <div className="video-btn">
                      <a
                        href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s"
                        className="lightbox-image"
                        data-caption=""
                      >
                        <CirclePlay />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="content_block_1">
                <div className="content-box">
                  <div className="sec-title">
                    <p>About JivYuv</p>
                    <h2>World Best Travel Agency Company Since 2008.</h2>
                  </div>
                  <div className="text">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                      do eiu smod tempor incididunt ut labore dolore magna
                      aliqua.Quis ipsum suspen disse ultrices gravida Risus
                      commodo viverra maecenas accumsan lacus vel facilisis.
                    </p>
                  </div>
                  <ul className="list clearfix">
                    <li>
                      <SquareCheckBig /> Ratione voluptatem.sequi nesciunt.
                    </li>
                    <li>
                      <SquareCheckBig /> Ratione voluptatem.
                    </li>
                    <li>
                      <SquareCheckBig /> Ratione voluptatem sequi.
                    </li>
                  </ul>
                  <div className="btn-box">
                    <a href="tour-1.html" className="theme-btn">
                      Find Tours
                    </a>
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
