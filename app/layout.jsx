import Footer from "@/components/FooterSection";
import Header from "@/components/HeaderSection";
import "./custom.css";
import "./globals.css";
import * as Lucide from 'lucide-react';


export const metadata = {
  title: "Tour & Travel",
  description: "Tour & Travel",
};




export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Header />
        {children}
        <Footer />
      </body> 
    </html>
  );
}
