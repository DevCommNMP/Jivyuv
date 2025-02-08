
import Footer from "@/components/FooterSection";
import Header from "@/components/HeaderSection";
import "./globals.css";
import { use } from "passport";




export default function RootLayout({ children }) {
 

  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body> 
    </html>
  );
}
