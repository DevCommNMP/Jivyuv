"use client";
import Image from "next/image";
import Link from "next/link";

import { Clock, Map, Star } from "lucide-react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from 'axios';
import { useRouter } from "next/navigation";


export default function TourSection() {
  const [packageData,setPackageData]=useState({popular:[],trending:[],offer:[]});
  const [loading,setIsLoading]=useState();
  const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;
      const router = useRouter();
  
  async function fetchPackageData(){
    let tagName={popular:[],trending:[],offer:[]}
    try{
   let response=await axios.get(`${SERVER_URL}/api/trip-packages`);
     let  data=response.data.reverse();
     data.forEach((item)=>{
    
      if(item.tripTagName==="popular"){

       item.tripTagName.length!==3 && tagName.popular.push(item);
        
      }else if(item.tripTagName==="trending"){
        item.tripTagName.length!==3 && tagName.trending.push(item);
      }else if(item.tripTagName==="offer"){
        item.tripTagName.length!==3 && tagName.offer.push(item);
      }

     })
   
      setPackageData(tagName);

    }catch(error){
      console.log(error);
      Swal.fire({icon:"error", title:error?.response?.message || "We’re facing some issues fetching the data.Please try again."});

    }finally{

    }
  }
  useEffect(()=>{
    fetchPackageData();

  },[])
  const handleNavigation = (slug) => {
    router.push(`/trip/${slug}`);
  };

  return (
    <>
      <section className="tour-section bg-color-1 sec-pad">
        <div
          className="pattern-layer"
          style={{ backgroundImage: "url(/assets/images/shape/shape-4.png)" }}
        ></div>
        <div className="auto-container">
          <div className="sec-title text-center">
            <p>Modern & Beautiful</p>
            <h2>Our Most Popular Adventures</h2>
          </div>
          <div className="row clearfix">
          
              {packageData?.popular?.map((trip)=>{
return    <div className="col-lg-4 col-md-6 col-sm-12 tour-block">
<div
 className="tour-block-one wow fadeInUp animated animated"
 data-wow-delay="00ms"
 data-wow-duration="1500ms"
>
 <div className="inner-box">
   <figure className="image-box">
     <Image
       src={`${SERVER_URL}/${trip?.packageImage}`}
       alt=""
       width={370}
       height={270}
     />
     <Link href={`/api/trip-packages/slug/${trip.titleSlug}`} as={`/api/trip-packages/slug/${trip.titleSlug}`} onClick={(event)=>{
        event.preventDefault();
        handleNavigation(trip.titleSlug);

       }}>
       <i className="fas fa-link"></i>
     </Link>
   </figure>
   <div className="lower-content">
     <div className="rating">
       <span>
         <Star size={24} color={"gold"} /> 8.0 Superb
       </span>
     </div>
     <div style={{height:"130px",}}>
     <h3 style={{fontSize:"16px",wordSpacing:'1px',fontWeight:"600",letterSpacing:"1px"}}>
     <Link href={`/api/trip-packages/slug/${trip.titleSlug}`} as={`/api/trip-packages/slug/${trip.titleSlug}`} onClick={(event)=>{
        event.preventDefault();
        handleNavigation(trip.titleSlug);

       }}>
         {trip.title}
       </Link>
     </h3>
     </div>
     <h4 style={{marginBottom:"4px",marginTop:"15px"}}>
     ₹ {trip.packagePrice}<span> / Per person</span>
     </h4>
     <ul className="info clearfix">
       <li>
         <Clock size={24} /> <span>{trip.numberOfNights}N - {trip.numberOfDays}D</span>
       </li>
       <li>
         <Map size={24} /> <span style={{textTransform:"uppercase"}}>{trip.country}</span>
       </li>
     </ul>
   
     <div className="btn-box">
       <Link href={`/api/trip-packages/slug/${trip.titleSlug}`} as={`/api/trip-packages/slug/${trip.titleSlug}`} onClick={(event)=>{
        event.preventDefault();
        handleNavigation(trip.titleSlug);

       }}>
         See Details
       </Link>
     </div>
   </div>
 </div>
</div>
</div>
              })
             
             }
           
            {/* <div className="col-lg-4 col-md-6 col-sm-12 tour-block">
              <div
                className="tour-block-one wow fadeInUp animated animated"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <Image
                      src="/assets/img/home/tour-2.jpg"
                      alt=""
                      width={370}
                      height={270}
                    />
                    <Link href="/trip/[slug]" as="/trip/adventure-tour">
                      <i className="fas fa-link"></i>
                    </Link>
                  </figure>
                  <div className="lower-content">
                    <div className="rating">
                      <span>
                        <Star size={24} color={"gold"} /> 8.0 Superb
                      </span>
                    </div>
                    <h3>
                      <Link href="/trip/[slug]" as="/trip/adventure-tour">
                        Adventure Tour
                      </Link>
                    </h3>
                    <h4>
                      $170.00<span> / Per person</span>
                    </h4>
                    <ul className="info clearfix">
                      <li>
                        <Clock size={24} /> 5 Days
                      </li>
                      <li>
                        <Map size={24} /> G87P, Birmingham
                      </li>
                    </ul>
                    <p>Lorem ipsum dolor amet consectetur adipiscing sed.</p>
                    <div className="btn-box">
                      <Link href="/trip/[slug]" as="/trip/adventure-tour">
                        See Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 tour-block">
              <div
                className="tour-block-one wow fadeInUp animated animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <Image
                      src="/assets/img/home/tour-3.jpg"
                      alt=""
                      width={370}
                      height={270}
                    />
                    <Link href="/trip/[slug]" as="/trip/city-tour">
                      <i className="fas fa-link"></i>
                    </Link>
                  </figure>
                  <div className="lower-content">
                    <div className="rating">
                      <span>
                        <Star size={24} color={"gold"} /> 8.0 Superb
                      </span>
                    </div>
                    <h3>
                      <Link href="/trip/[slug]" as="/trip/city-tour">
                        City Tour
                      </Link>
                    </h3>
                    <h4>
                      $170.00<span> / Per person</span>
                    </h4>
                    <ul className="info clearfix">
                      <li>
                        <Clock size={24} /> 5 Days
                      </li>
                      <li>
                        <Map size={24} /> G87P, Birmingham
                      </li>
                    </ul>
                    <p>Lorem ipsum dolor amet consectetur adipiscing sed.</p>
                    <div className="btn-box">
                      <Link href="/trip/[slug]" as="/trip/city-tour">
                        See Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
