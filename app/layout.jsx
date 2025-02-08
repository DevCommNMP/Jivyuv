import Footer from "@/components/FooterSection";
import Header from "@/components/HeaderSection";
import { use } from "passport";
import "./custom.css";
import "./globals.css";




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
