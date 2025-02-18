import Image from "next/image";

export default function MapSection() {
  return (
    <>
      <section className="map-section bg-color-1">
        <div
          className="pattern-layer"
          style={{ backgroundImage: "url(assets/images/shape/shape-9.png)" }}
        ></div>
        <div className="outer-container">
          <div className="sec-title centred">
            <p>Modern & Beautiful</p>
            <h2>Explore the World for Travel</h2>
          </div>
          <div
            className="map-inner"
            style={{ backgroundImage: "url(assets/images/shape/map-1.png)" }}
          >
            <div className="map-content clearfix">
              <div className="single-location-box">
                <figure className="map-marker">
                  <Image
                    src="/assets/images/icons/marker-1.png"
                    alt=""
                    width={60}
                    height={72}
                  />
                  <span>1</span>
                </figure>
                <div className="address-box">
                  <h3>Moscow City</h3>
                  <p>
                    Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod
                    tempor incididunt.
                  </p>
                </div>
              </div>
              <div className="single-location-box">
                <figure className="map-marker">
                  <Image
                    src="/assets/images/icons/marker-1.png"
                    alt=""
                    width={60}
                    height={72}
                  />
                  <span>2</span>
                </figure>
                <div className="address-box">
                  <h3>Affrican Park</h3>
                  <p>
                    Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod
                    tempor incididunt.
                  </p>
                </div>
              </div>
              <div className="single-location-box current">
                <figure className="map-marker">
                  <Image
                    src="/assets/images/icons/marker-1.png"
                    alt=""
                    width={60}
                    height={72}
                  />
                  <span>3</span>
                </figure>
                <div className="address-box">
                  <h3>India</h3>
                  <p>
                    Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod
                    tempor incididunt.
                  </p>
                </div>
              </div>
              <div className="single-location-box">
                <figure className="map-marker">
                  <Image
                    src="/assets/images/icons/marker-1.png"
                    alt=""
                    width={60}
                    height={72}
                  />
                  <span>4</span>
                </figure>
                <div className="address-box">
                  <h3>New York City</h3>
                  <p>
                    Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod
                    tempor incididunt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
