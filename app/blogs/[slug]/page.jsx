"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Swal from "sweetalert2";

export default function BlogDetails({ params }) {
  const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL;
  const { slug } = params; // Get the slug from params
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    tourName: "",
    tourDate: "",
    totalMembers: "",
  });
  const [errors, setErrors] = useState({});

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required.";
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Valid 10-digit phone number is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    if (!formData.tourName.trim()) newErrors.tourName = "Tour name is required.";
    if (!formData.tourDate.trim()) newErrors.tourDate = "Tour date is required.";
    if (!formData.totalMembers.trim() || isNaN(formData.totalMembers))
      newErrors.totalMembers = "Valid number of members is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      Swal.fire("Error", "Please fix the errors in the form.", "error");
      return;
    }
    try {
      await axios.post(`${BASE_URL}/api/tour-queries`, formData);
      Swal.fire("Success", "Your inquiry has been submitted!", "success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        tourName: "",
        tourDate: "",
        totalMembers: "",
      });
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      Swal.fire("Error", "Failed to submit your inquiry. Please try again.", "error");
    }
  };

  if (isLoading) {
    return <div className="loader">Loading...</div>;
  }

  if (!blog) {
    return <div className="error">Blog not found.</div>;
  }

  return (
    <div className="blog-details">
      {/* Blog Details Section */}
      <section
        className="page-title style-two centred"
        style={{ backgroundImage: "url(/assets/images/background/page-title-2.jpg)" }}
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
              })}
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
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

      {/* Inquiry Form Section */}
      <section className="inquiry-form sec-pad">
        <div className="auto-container">
          <h2>Send Your Inquiry</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              {errors.name && <p className="error-text">{errors.name}</p>}
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              {errors.phone && <p className="error-text">{errors.phone}</p>}
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
              {errors.message && <p className="error-text">{errors.message}</p>}
            </div>
            <div className="form-group">
              <label>Tour Name</label>
              <input
                type="text"
                name="tourName"
                value={formData.tourName}
                onChange={handleInputChange}
                required
              />
              {errors.tourName && <p className="error-text">{errors.tourName}</p>}
            </div>
            <div className="form-group">
              <label>Tour Date</label>
              <input
                type="date"
                name="tourDate"
                value={formData.tourDate}
                onChange={handleInputChange}
                required
              />
              {errors.tourDate && <p className="error-text">{errors.tourDate}</p>}
            </div>
            <div className="form-group">
              <label>Total Members</label>
              <input
                type="number"
                name="totalMembers"
                value={formData.totalMembers}
                onChange={handleInputChange}
                required
              />
              {errors.totalMembers && <p className="error-text">{errors.totalMembers}</p>}
            </div>
            <button className="theme-btn-two" type="submit">
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
