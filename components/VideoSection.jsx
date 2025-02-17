'use client';
import { useEffect } from 'react';

export default function VideoSection() {
  useEffect(() => {
    // Initialize lightbox here if you're using a library
  }, []);

  return (
    <>
      <section
        className="video-section centred"
        style={{ backgroundImage: "url(assets/images/background/video-1.jpg)" }}
      >
        <div className="auto-container">
          <div className="inner-box">
            <h2>Explore Your Travel</h2>
            <p>Your New Traveling Idea</p>
            <div className="video-btn">
              <a
                href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s"
                className="lightbox-image"
                data-caption=""
              >
                <i className="far fa-play"></i>
                <span className="border-animation border-1"></span>
                <span className="border-animation border-2"></span>
                <span className="border-animation border-3"></span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
