import Image from "next/image";

export default function Feature() {
  return (
    <>
      <section className="feature-section centred bg-color-1 sec-pad">
        <div className="auto-container">
          <div className="sec-title text-center">
            <p>JivYuv Specials</p>
            <h2>Why Travel with Tutive?</h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
              <div
                className="feature-block-one wow fadeInUp animated animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <Image
                      src="/assets/images/resource/feature-1.jpg"
                      alt=""
                      width={270}
                      height={170}
                    />
                  </figure>
                  <div className="lower-content">
                    <div className="icon-box">
                      <i className="icon-1"></i>
                    </div>
                    <h4>2000+ Our Worldwide Guides</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
              <div
                className="feature-block-one wow fadeInUp animated animated"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <Image
                      src="/assets/images/resource/feature-2.jpg"
                      alt=""
                      width={270}
                      height={170}
                    />
                  </figure>
                  <div className="lower-content">
                    <div className="icon-box">
                      <i className="icon-2"></i>
                    </div>
                    <h4>100% Trusted Tour Agency</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
              <div
                className="feature-block-one wow fadeInUp animated animated"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <Image
                      src="/assets/images/resource/feature-3.jpg"
                      alt=""
                      width={270}
                      height={170}
                    />
                  </figure>
                  <div className="lower-content">
                    <div className="icon-box">
                      <i className="icon-3"></i>
                    </div>
                    <h4>12+ Years of Travel Experience</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
              <div
                className="feature-block-one wow fadeInUp animated animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <Image
                      src="/assets/images/resource/feature-4.jpg"
                      alt=""
                      width={270}
                      height={170}
                    />
                  </figure>
                  <div className="lower-content">
                    <div className="icon-box">
                      <i className="icon-4"></i>
                    </div>
                    <h4>98% of Our Travelers are Happy</h4>
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
