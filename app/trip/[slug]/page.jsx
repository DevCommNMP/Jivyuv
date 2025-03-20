"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";


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
                <i className="fas fa-star"></i>8.0 Superb
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
                    {/* <h2>Overview</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.
                    </p> */}
                    <ul className="info-list clearfix">
                      <li>
                        <span style={{fontWeight:"bolder"}}>Pickup & Drop</span><br/>
                        <i className="far fa-clock">{packageData?.isPickupAndDropAvailable==true?<span style={{fontWeight:"bold"}}>{packageData?.pickupLocation}-{packageData?.dropLocation}</span>:"Any Time"}</i>
                      </li>
                      <li>
                      <span style={{fontWeight:"bolder"}}>Duration</span><br/>
                        <i className="far fa-user"><span style={{fontWeight:"bold"}}>{packageData?.numberOfNights}N - {packageData?.numberOfDays}D</span></i>
                      </li>
                      <li>
                      <span style={{fontWeight:"bolder"}}>Country</span><br/>
                        <i className="far fa-map"><span style={{fontWeight:"bold"}}>{packageData?.country}</span></i>
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
                  
                 {packageData?.activityData?.map((activity)=>{

                    return <div className="content-box">
                    <div className="single-box">
                      <span>{activity?.activityDay}</span>
                      {/* <h4>8:00 am to 10:00 am</h4> */}
                      <h3>{activity?.activityTitle}</h3>
                      {/* <p>
                        Aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </p> */}
                      <ul className="list clearfix">
                        {activity?.activityDescription?.map((list)=>{
                          return  <li style={{textAlign:"justify"}}>{list}</li>

                        })
                       
                      }
                      
                      </ul>
                      <br/>
                    </div>
                    </div>

                 })
                
                   
                  
                   }
                </div>
                

                {/* Photo Gallery */}
                <div className="photo-gallery">
                  <div className="text">
                    <h2>Photo Gallery</h2>
                   
                  </div>
                  <div className="image-box clearfix">
                 
                    {packageData?.packageSubImages?.map((img)=>{
                      return  <figure className="image"> <Image
                        src={`${SERVER_URL}/${img}`}
                        alt="Gallery Image"
                        width={300}
                        height={200}
                      />
                   
                   </figure>
                   

                    })
                  
                    // <figure className="image">
                      
                      
                    //   <Image
                    //     src="/assets/images/resource/destination-4.jpg"
                    //     alt="Gallery Image"
                    //     width={300}
                    //     height={200}
                    //   />
                   
                    
                    // </figure>
                   }
                    {/* ...repeat for other images... */}
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
                  <form className="tour-form">
                    <div className="form-group">
                      <input type="text" name="name" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                      <input type="email" name="email" placeholder="Your Email" required />
                    </div>
                    <div className="form-group">
                      <input type="text" name="phone" placeholder="Phone" required />
                    </div>
                    <div className="form-group">
                      <input type="text" name="tickets" placeholder="Tickets" required />
                    </div>
                    <div className="form-group">
                      <input type="text" name="date" placeholder="dd/mm/yy" />
                    </div>
                    <div className="form-group">
                      <textarea name="message" placeholder="Message"></textarea>
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
                      <li>
                        <Link href={`/trip/${slug}/details`}>
                          Travel Direction<i className="fas fa-download"></i>
                        </Link>
                      </li>
                      {/* ...repeat for other downloads... */}
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
