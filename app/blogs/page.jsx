"use client";

import NewsSection from "../../components/NewsSection";
import Link from "next/link";

export default function BlogsPage() {
    return (
        <div className="blogs-page">
            {/* Page Title */}
            <section
                className="page-title style-two centred"
                style={{ backgroundImage: "url(/assets/images/background/page-title-2.jpg)" }}
            >
                <div className="auto-container">
                    <div className="content-box">
                        <h1>All Blogs</h1>
                        <p>Explore our latest articles and updates.</p>
                    </div>
                </div>
            </section>

            {/* Blog List */}
           <NewsSection />
        </div>
    );
}
