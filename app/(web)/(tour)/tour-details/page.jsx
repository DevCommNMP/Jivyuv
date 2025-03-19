"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function TourDetails() {
  
  const [packageData,setPackageData]=useState(
    {
    _id: "67d91e71afd46c2b7fdb53f1",
    title: "Kashmir Spring",
    titleSlug: "kashmir-spring",
    pickupLocation: "Srinagar",
    dropLocation: "Srinagar",
    numberOfDays: "10",
    numberOfNights: "9",
    overview: "Kashmir is & will always be the heaven on earth & for all the right reasons because, Travelling across this place is what dreams our made off! Srinagar the capital city of Kashmir is also known as the 'mini Switzerland of India' and that is because of the blooming vibrant plantation found here, especially the Tulips. The best part? You will be able to witness these plantations in person in this Kashmir tour.\n\nThis is a trip that is the perfect balance between leisure & adventure. From enjoying shikara rides and houseboat accommodation on Nigeen lake in Srinagar to exploring off beat places.\n\nOn this journey, we also set out to traverse across South Kashmir. The list definitely includes Saffron fields of Pampore along with meadows of Aru & Betab Valley in Pahalgam and something no backpacker can forget to explore- Gulmarg. All year round, Gulmarg is in its full glory. A Gandola ride & visit to Affarwat Peak is a must!\n\nJoin us on the adventure to backpack in this heaven on earth to enjoy the warm hospitality of people and the astonishing gems of nature.",
    packagePrice: "24999",
    packagePromotional: "29999",
    isVisaFree: true,
    country: "india",
    categoryId: "67d91c18afd46c2b7fdb5368",
    subCategoryId: "67d91c67afd46c2b7fdb5378",
    tripTagName: "popular",
    startingDate: "Sat Mar 29 2025 16:47:00 GMT+0530 (India Standard Time)",
    isPickupAndDropAvailable: true,
    packageImage: "uploads/packageImages/1742282353402/packageImage/1742282353403-packageImage_resized.jpeg",
    packageSubImages: [],
    activityData: [
        {
            activityDay: "01",
            activityTitle: "Srinagar Arrival | Local Sightseeing of Srinagar",
            activityDescription: [
                "Arrive at the Srinagar airport after a scenic flight over the snow-capped mountains.",
                "From Srinagar airport you will have to reach your houseboat and check in.",
                "Have some rest and have your lunch."
            ],
            _id: "67d91e71afd46c2b7fdb53f2"
        },
        {
            activityDay: "2",
            activityTitle: "Srinagar To Gulmarg. Enjoy Asia’s Highest Gandola Ride",
            activityDescription: [
                "Wake up in the morning, have your breakfast and get ready for the day.",
                "We will then take you to Gulmarg - that appears straight out of painting."
            ],
            _id: "67d91e71afd46c2b7fdb53f3"
        },
        {
            activityDay: "3",
            activityTitle: "Transfer to Pahalgam I Overnight Stay in Pahalgam",
            activityDescription: [
                "After breakfast in the morning, get ready to begin your day.",
                "Board your vehicle as we will take you to Pahalgam which will be a 4-hour scenic drive via Pampore and Avantipura"
            ],
            _id: "67d91e71afd46c2b7fdb53f4"
        }
    ],
    createdAt: "2025-03-18T07:19:13.490Z",
    __v: 0
}
);
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;
  return (
    <div className="tour-details-page">
      {/* Page Title */}
      <section
        className="page-title style-three"
        style={{ backgroundImage: `url(${SERVER_URL}/${packageData.packageImage})` }}
      >
        <div className="auto-container">
          <div className="inner-box">
            <div className="rating">
              <span>
                <i className="fas fa-star"></i>8.0 Superb
              </span>
            </div>
            <h2>Moscow Red City Land</h2>
            <h3>
              {packageData.packagePrice}<span> / Per person</span>
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
                        <i className="far fa-clock">{packageData.isPickupAndDropAvailable==true?<span style={{fontWeight:"bold"}}>{packageData.pickupLocation}-{packageData.dropLocation}</span>:"Any Time"}</i>
                      </li>
                      <li>
                      <span style={{fontWeight:"bolder"}}>Duration</span><br/>
                        <i className="far fa-user"><span style={{fontWeight:"bold"}}>{packageData.numberOfNights}N - {packageData.numberOfDays}D</span></i>
                      </li>
                      <li>
                      <span style={{fontWeight:"bolder"}}>Country</span><br/>
                        <i className="far fa-map"><span style={{fontWeight:"bold"}}>{packageData.country}</span></i>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Tour Plan */}
                <div className="tour-plan">
                  <div className="text">
                    <h2>{packageData.title}</h2>
                    <p>
                     {packageData.overview}
                    </p>
                  </div>
                  
                 {packageData.activityData.map((activity)=>{

                    return <div className="content-box">
                    <div className="single-box">
                      <span>{activity.activityDay}</span>
                      {/* <h4>8:00 am to 10:00 am</h4> */}
                      <h3>{activity.activityTitle}</h3>
                      {/* <p>
                        Aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </p> */}
                      <ul className="list clearfix">
                        {activity.activityDescription.map((list)=>{
                          return  <li>{list}</li>

                        })
                       
                      }
                      
                      </ul>
                    </div>
                    </div>

                 })
                
                   
                  
                   }
                </div>
                

                {/* Photo Gallery */}
                <div className="photo-gallery">
                  <div className="text">
                    <h2>Photo Gallery</h2>
                    <p>
                      Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex commodo consequat.
                    </p>
                  </div>
                  <div className="image-box clearfix">
                    <figure className="image">
                      
                      <Image
                        src="/assets/images/resource/destination-4.jpg"
                        alt="Gallery Image"
                        width={300}
                        height={200}
                      />
                    
                    </figure>
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
                        <Link href="/destination-details">
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
