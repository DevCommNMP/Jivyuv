import { CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NewsSection({packageData}) {
  console.log(packageData);
  return (
    <>
      <section className="news-section sec-pad pb-220">
        <div
          className="pattern-layer"
          style={{ backgroundImage: "url(/assets/images/shape/shape-10.png)" }}
        ></div>
        <div className="auto-container">
          <div className="sec-title">
            <p>News & Articles</p>
            <h2>Stay Update with JivYuv Tips</h2>
            <Link href="/blogs" className="theme-btn-two">
              All Blog Posts
            </Link>
          </div>
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
              <div
                className="news-block-one wow fadeInUp animated animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <Link href="/blogs/interior-design-ideas" as="/blogs/animation-design-system">
                      <Image
                        src="/assets/img/home/news-1.jpg"
                        alt=""
                        width={370}
                        height={270}
                      />
                    </Link>
                    <span className="post-date">
                      <CalendarDays /> 5 Oct, 2020
                    </span>
                  </figure>
                  <div className="lower-content">
                    <div className="category">
                      <Link href="/blogs/interior-design-ideas" as="/blogs/animation-design-system">
                        Lifestyle
                      </Link>
                    </div>
                    <h3>
                      <Link href="/blogs/interior-design-ideas" as="/blogs/animation-design-system">
                        Including animation in your design system
                      </Link>
                    </h3>
                    <ul className="post-info clearfix">
                      <li>
                        <span>By</span> <a href="index.html">Eva Green</a>
                      </li>
                      <li>- October 13, 2020</li>
                    </ul>
                    <p>
                      Lorem ipsum dolor sit amet consectur adip icing sed do
                      eiusmod tempor incididunt labore dolore magna aliqua enim.
                    </p>
                    <div className="btn-box">
                      <Link href="/blogs/interior-design-ideas" as="/blogs/animation-design-system" className="theme-btn-two">
                        See Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
              <div
                className="news-block-one wow fadeInUp animated animated"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <Link href="/blogs/interior-design-ideas" as="/blogs/strategic-issues">
                      <Image
                        src="/assets/img/home/news-2.jpg"
                        alt=""
                        width={370}
                        height={270}
                      />
                    </Link>
                    <span className="post-date">
                      <CalendarDays /> 4 Oct, 2020
                    </span>
                  </figure>
                  <div className="lower-content">
                    <div className="category">
                      <Link href="/blogs/interior-design-ideas" as="/blogs/strategic-issues">
                        Lifestyle
                      </Link>
                    </div>
                    <h3>
                      <Link href="/blogs/interior-design-ideas" as="/blogs/strategic-issues">
                        Strategic & commercial with issues.
                      </Link>
                    </h3>
                    <ul className="post-info clearfix">
                      <li>
                        <span>By</span> <a href="index.html">Eva Green</a>
                      </li>
                      <li>- October 13, 2020</li>
                    </ul>
                    <p>
                      Lorem ipsum dolor sit amet consectur adip icing sed do
                      eiusmod tempor incididunt labore dolore magna aliqua enim.
                    </p>
                    <div className="btn-box">
                      <Link href="/blogs/interior-design-ideas" as="/blogs/strategic-issues" className="theme-btn-two">
                        See Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
              <div
                className="news-block-one wow fadeInUp animated animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <Link href="/blogs/interior-design-ideas" as="/blogs/interior-design-ideas">
                      <Image
                        src="/assets/img/home/news-3.jpg"
                        alt=""
                        width={370}
                        height={270}
                      />
                    </Link>
                    <span className="post-date">
                      <CalendarDays /> 3 Oct, 2020
                    </span>
                  </figure>
                  <div className="lower-content">
                    <div className="category">
                      <Link href="/blogs/interior-design-ideas" as="/blogs/interior-design-ideas">
                        Lifestyle
                      </Link>
                    </div>
                    <h3>
                      <Link href="/blogs/interior-design-ideas" as="/blogs/interior-design-ideas">
                        Best interior design idea for your home.
                      </Link>
                    </h3>
                    <ul className="post-info clearfix">
                      <li>
                        <span>By</span> <a href="index.html">Eva Green</a>
                      </li>
                      <li>- October 13, 2020</li>
                    </ul>
                    <p>
                      Lorem ipsum dolor sit amet consectur adip icing sed do
                      eiusmod tempor incididunt labore dolore magna aliqua enim.
                    </p>
                    <div className="btn-box">
                      <Link href="/blogs/interior-design-ideas" as="/blogs/interior-design-ideas" className="theme-btn-two">
                        See Details
                      </Link>
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
