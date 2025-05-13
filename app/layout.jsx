"use client"; 

import Footer from "../components/FooterSection";
import Header from "../components/HeaderSection";
import React from "react";
import "./custom.css";
import "./globals.css";
import * as Lucide from 'lucide-react';
import { fetchCategoriesAndCompanyProfile } from "../app/uitls/categoryAndCompanyprofiledata";
import { useEffect, useState } from "react"; ""
import Preloader from "../components/Preloader";
import Head from "next/head";
// import Head from "next/head";

// export let  metadata = {
//   title: "Tour & Travel",
//   description: "Tour & Travel",
// };
export let seoContextObj=React.createContext();



export default function RootLayout({ children }) {
  const [categories, setCategories] = useState([]);
 
  const [companyData, setCompanyData] = useState([]);
  const [packageData,setPackageData]=useState();
  const [isLoading, setIsLoading] = useState(false);
  const [allPageMetadata,setAllPageMetadata]=useState([]);


  useEffect(() => {
    fetchCategoriesAndCompanyProfile(setIsLoading, setCategories, setCompanyData,setPackageData,setAllPageMetadata);
  }, []);

  // Ensure Preloader does not replace the entire DOM structure
  if (isLoading) {
    return (
      <seoContextObj.Provider value={{categories:categories, companyData:companyData, packageData:packageData,allPageMetadata:allPageMetadata}}>


      <html lang="en" suppressHydrationWarning>
      
        <body>
          <Preloader />
        </body>
      </html>
    </seoContextObj.Provider>
    );
  }
  return (
    <seoContextObj.Provider value={{categories:categories, companyData:companyData,packageData:packageData,allPageMetadata:allPageMetadata}}>
    <html lang="en" suppressHydrationWarning>
   

      <body>

        <Header  />
        {children}
        <Footer companyData={companyData} categories={categories} />
        {/* <script src="//code.tidio.co/jle9bquxji2qq9f15iuurgscznud28e9.js" async></script> */}
      </body>
    </html>
    </seoContextObj.Provider>
  );
}

