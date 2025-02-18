import Image from "next/image";

export default function PlaceSection() {
  return (
    <>
      <section className="place-section sec-pad">
        <div className="anim-icon">
          <div
            className="icon anim-icon-1"
            style={{
              backgroundImage: "url(/assets/images/icons/anim-icon-1.png)",
            }}
          ></div>
          <div
            className="icon anim-icon-2"
            style={{ backgroundImage: "url(/assets/images/shape/shape-3.png)" }}
          ></div>
          <div
            className="icon anim-icon-3"
            style={{ backgroundImage: "url(/assets/images/shape/shape-3.png)" }}
          ></div>
        </div>
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 title-column">
              <div className="sec-title">
                <p>Choose Your place</p>
                <h2>Popular Destinations</h2>
              </div>
              <div className="text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiu smod tempor incididunt.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 place-block">
              <div className="place-block-one">
                <div className="inner-box">
                  <figure className="image-box">
                    <Image
                      src="/assets/img/home/place-1.jpg"
                      alt=""
                      width={340}
                      height={340}
                    />
                  </figure>
                  <div className="text">
                    <h3>
                      <a href="destination-details.html">New York City</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 place-block">
              <div className="place-block-one">
                <div className="inner-box">
                  <figure className="image-box">
                    <Image
                      src="/assets/img/home/place-2.jpg"
                      alt=""
                      width={340}
                      height={340}
                    />
                  </figure>
                  <div className="text">
                    <h3>
                      <a href="destination-details.html">Norway Lake</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 place-block">
              <div className="place-block-one">
                <div className="inner-box">
                  <figure className="image-box">
                    <Image
                      src="/assets/img/home/place-3.jpg"
                      alt=""
                      width={340}
                      height={340}
                    />
                  </figure>
                  <div className="text">
                    <h3>
                      <a href="destination-details.html">Affrican Park</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 place-block">
              <div className="place-block-one">
                <div className="inner-box">
                  <figure className="image-box">
                    <Image
                      src="/assets/img/home/place-4.jpg"
                      alt=""
                      width={340}
                      height={340}
                    />
                  </figure>
                  <div className="text">
                    <h3>
                      <a href="destination-details.html">Vietnam</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 link-column">
              <div className="link-box centred">
                <h3>
                  Find All <br />
                  Destination
                </h3>
                <a href="destination.html" className="theme-btn">
                  Find Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
