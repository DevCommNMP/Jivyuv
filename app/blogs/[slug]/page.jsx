"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

export default function BlogDetails({ params }) {
  const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL;
  const { slug } = params; // Get the slug from params
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!slug) return; // Wait until slug is available
    async function fetchBlog() {
      try {
        const response = await axios.get(`${BASE_URL}/api/blogs/slug/${slug}`);
        setBlog(response.data.data); // Access the blog data inside the "data" field
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchBlog();
  }, [slug]);

  if (isLoading) {
    return <div className="loader">Loading...</div>;
  }

  if (!blog) {
    return <div className="error">Blog not found.</div>;
  }

  return (
    <div className="blog-details">
      <section
        className="page-title style-two centred"
        style={{ backgroundImage: "url(/assets/images/banner/pp.avif)" ,height:'400px'}}
      >
        <div className="auto-container">
          <div className="content-box">
            <h1>{blog.blogTitle.trim()}</h1>
            <p>
              By {blog.createdBy.trim()} -{" "}
              {new Date(blog.createdAt).toLocaleDateString("en-US", {
                day: "2-digit",
                month: "short",
                year: "numeric",
            })}</p>
          </div>
        </div>
      </section>

      <section className="blog-content sec-pad">
        <div className="auto-container">
          <figure className="image-box">
            <Image
              src={`${BASE_URL}/${blog.blogImage}`}
              alt={blog.blogTitle}
              width={800}
              height={400}
            />
          </figure>
          <div className="content">
            <p>{blog.blogDescription}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
