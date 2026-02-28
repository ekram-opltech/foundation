
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./lib/fontawesome";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';
import 'animate.css';
import "./css/01-header-section.css";
import "./css/02-banner-section.css";
import "./css/03-about-section.css";
import "./css/09-breadcrumb-section.css";
import "./css/04-fact-counter-section.css";
import "./css/07-footer-section.css";
import "./css/10-contact.css";

import "./css/style.css";
import "./css/responsive.css";

import Header from "./components/header";
import Footer from "./components/footer";
import BootstrapClient from "./components/bootstrap-client";
import WowProvider from "./wow-provider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Umeed-E-Hayat",
  description: "Umeed-E-Hayat Foundation",
};

export default async function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <html lang="en">
      <body>
        <WowProvider>
          <div className="page-wrapper boxed_wrapper">
            <BootstrapClient />
            <Header />
            {children}
            <Footer />
          </div>
        </WowProvider>
      </body>
    </html>
  );
}
