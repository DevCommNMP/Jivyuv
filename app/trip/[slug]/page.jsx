"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Star,Clock,User,Map} from "lucide-react";


export default function TourDetails({params}) {
  let slug=params.slug;
  const [isLoading,setIsLoading]=useState(false);
 
 
  const [packageData, setPackageData] = useState(
   
);


 async function fetchPackageData() {
    setIsLoading(true);
    try {
      let response =await  axios.get(`${SERVER_URL}/api/trip-packages/slug/${slug}`);
      
      console.log(response.data);
      setPackageData(response.data);
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon:"error",
        text:error.response.data.message || "Something went wrong"
      })
    }finally{
      setIsLoading(false);
    }
  }
  useEffect(()=>{
    fetchPackageData();

  },[slug]);

  const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;
  if (!SERVER_URL) {
    console.error("SERVER_URL is not defined. Please check your environment variables.");
  }
console.log(packageData)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    totalMembers: "",
    tourName: packageData?.titleSlug || "",
    tripDate: "",
    message: "",
  });

  useEffect(() => {
    if (packageData?.titleSlug) {
      setFormData((prevData) => ({
        ...prevData,
        tourName: packageData.titleSlug,
      }));
    }
  }, [packageData]);

  const [errors, setErrors] = useState({});

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
    if (!formData.totalMembers.trim() || isNaN(formData.totalMembers))
      newErrors.totalMembers = "Valid number of members is required.";
    if (!formData.tripDate.trim()) newErrors.tripDate = "Trip date is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log(formData);
    if (!validateForm()) {
      Swal.fire("Error", "Please fix the errors in the form.", "error");
      return;
    }

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      tourName: formData.tourName,
      tourDate: formData.tripDate, // Changed key from "tripDate" to "tourDate"
      totalMembers: formData.totalMembers,
    };

    try {
      await axios.post(
        `${SERVER_URL}/api/tour-queries`,
        payload, // Send the updated payload
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      Swal.fire("Success", "Your inquiry has been submitted!", "success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        totalMembers: "",
        tourName: packageData?.titleSlug || "",
        tripDate: "", // Reset tripDate
        message: "",
      });
    } catch (error) {
      console.error("Error submitting inquiry:", error.response || error.message);
      Swal.fire("Error", error.response?.data?.message || "Failed to submit your inquiry. Please try again.", "error");
    }
  };

  return (
    <div className="tour-details-page">
      {/* Page Title */}
      <section
        className="page-title style-three"
        style={{ backgroundImage: `url(${SERVER_URL}/${packageData?.packageImage})` }}
      >
        <div className="auto-container">
          <div className="inner-box">
            <div className="rating">
              <span>
              <Star />8.0 Superb
              </span>
            </div>
            <h2>{packageData?.title}</h2>
            <h3>
              {packageData?.packagePrice}<span> / Per person</span>
            </h3>
          </div>
        </div>
      </section>

      {/* Tour Details */}
      <section className="tour-details">
        <div className="auto-container">
          <div className="row clearfix">
            {/* Content Side */}
            <div className="col-lg-8 col-md-12 col-sm-12 content-side">
              <div className="tour-details-content">
                <div className="inner-box">
                  <div className="text">
                   
                    <ul className="info-list clearfix">
                      <li>
                        <span style={{fontWeight:"bolder"}}>Pickup & Drop</span><br/>
                        {/* <i className="far fa-clock"></i> */}
                        <span>
                        <Clock/>
                        Day And Night
                        </span>
                      </li>
                      <li>
                      <span style={{fontWeight:"bolder"}}>Duration</span><br/>
                        {/* <i className="far fa-user"><span style={{fontWeight:"bold"}}>{packageData?.numberOfNights}N - {packageData?.numberOfDays}D</span></i> */}
                        <span>
                        <User />
                        9N - 10D
                        </span>
                        
                      </li>
                      <li>
                      <span style={{fontWeight:"bolder"}}>Country</span><br/>
                        {/* <i className="far fa-map"><span style={{fontWeight:"bold"}}>{packageData?.country}</span></i> */}
                        <span>
                        <Map />
                        India
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Tour Plan */}
                <div className="tour-plan">
                  <div className="text">
                    <h2>{packageData?.title}</h2>
                    <p style={{textAlign:"justify"}}>
                     {packageData?.overview}
                    </p>
                  </div>
                  
                 {packageData?.activityData?.map((activity, index) => (
                    <div className="content-box" key={`activity-${index}`}>
                      <div className="single-box">
                        <span>{activity?.activityDay}</span>
                        <h3>{activity?.activityTitle}</h3>
                        <ul className="list clearfix">
                          {activity?.activityDescription?.map((list, idx) => (
                            <li key={`description-${index}-${idx}`} style={{ textAlign: "justify" }}>
                              {list}
                            </li>
                          ))}
                        </ul>
                        <br />
                      </div>
                    </div>
                  ))}
                </div>
                

                {/* Photo Gallery */}
                <div className="photo-gallery">
                  <div className="text">
                    <h2>Photo Gallery</h2>
                   
                  </div>
                  <div className="image-box clearfix" style={{display:'flex'}}>
                 
                    {packageData?.packageSubImages?.map((img, index) => (
                      <figure className="image" key={`gallery-img-${index}`}>
                        <Image
                          src={`${SERVER_URL}/${img}`}
                          alt="Gallery Image"
                          width={400}
                          height={400}
                          className="gallary-img"
                        />
                      </figure>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
              <div className="default-sidebar tour-sidebar ml-20">
                {/* Booking Form */}
                <div className="form-widget">
                  <div className="widget-title">
                    <h3>Book This Tour</h3>
                  </div>
                  <form className="tour-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                      {errors.name && <p className="error-text" style={{color:"red"}}>{errors.name}</p>}
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                      {errors.email && <p className="error-text" style={{color:"red"}}>{errors.email}</p>}
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                      {errors.phone && <p className="error-text" style={{color:"red"}}>{errors.phone}</p>}
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="totalMembers"
                        placeholder="Total members in numbers"
                        value={formData.totalMembers}
                        onChange={handleInputChange}
                        required
                      />
                      {errors.totalMembers && <p className="error-text" style={{color:"red"}}>{errors.totalMembers}</p>}
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="tourName"
                        placeholder="Tour Name"
                        value={formData.tourName}
                        readOnly
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="date"
                        name="tripDate"
                        placeholder="dd/mm/yy"
                        value={formData.tripDate}
                        onChange={handleInputChange}
                        style={{padding:"10px",width:"100%",borderRadius:"10px", color:"grey",paddingLeft:"20px"}}
                        
                        required
                      />
                      {errors.tripDate && <p className="error-text" style={{color:"red"}}>{errors.tripDate}</p>}
                    </div>
                    <div className="form-group">
                      <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>
                    <div className="form-group message-btn">
                      <button type="submit" className="theme-btn">
                        Book Tour
                      </button>
                    </div>
                  </form>
                </div>

                {/* Downloads */}
                <div className="sidebar-widget downloads-widget">
                  <div className="widget-title">
                    <h3>Downloads</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="download-links clearfix">
                   
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    
    
  );
}
