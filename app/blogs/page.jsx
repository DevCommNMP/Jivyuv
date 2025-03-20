"use client";

import { useState, useEffect } from "react";
import BlogSection from "../../components/BlogSection";
import Link from "next/link";
import axios from "axios";

export default function BlogsPage() {
    const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL;
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchBlogs() {
            try {
                const response = await axios.get(`${BASE_URL}/api/blogs`);
                setBlogs(response.data.data); // Use response.data.data to access the blogs
            } catch (error) {
                console.error("Error fetching blogs:", error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchBlogs();
    }, []);

    if (isLoading) {
        return <div className="loader">Loading...</div>;
    }

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
            <BlogSection blogs={blogs} />
        </div>
    );
}
