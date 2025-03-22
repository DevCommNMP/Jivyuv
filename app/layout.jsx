"use client"; // Mark this file as a Client Component

import Footer from "../components/FooterSection";
import Header from "../components/HeaderSection";
import "./custom.css";
import "./globals.css";
import * as Lucide from 'lucide-react';
import { fetchCategoriesAndCompanyProfile } from "../app/uitls/categoryAndCompanyprofiledata";
import { useEffect, useState } from "react"; ""
import Preloader from "../components/Preloader";

export const metadata = {
  title: "Tour & Travel",
  description: "Tour & Travel",
};

export default function RootLayout({ children }) {
  const [categories, setCategories] = useState([]);
  const [companyData, setCompanyData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchCategoriesAndCompanyProfile(setIsLoading, setCategories, setCompanyData);
  }, []);

  // Ensure Preloader does not replace the entire DOM structure
  if (isLoading) {
    return (
      <html lang="en" suppressHydrationWarning>
        <body>
          <Preloader />
        </body>
      </html>
    );
  }
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Header categories={categories} companyData={companyData} />
        {children}
        <Footer companyData={companyData} categories={categories} />
        <script src="//code.tidio.co/jle9bquxji2qq9f15iuurgscznud28e9.js" async></script>
      </body>
    </html>
  );
}
