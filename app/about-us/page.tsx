import type { Metadata } from "next";
import Header from "@/components/layout/header/Header";
import AboutUs from "@/components/About us/AboutUs";

export const metadata: Metadata = {
  title: "About Us | Energizese",
  description:
    "Energizese is a specialized mechanical services firm catering to the industrial, commercial, and residential industry. With a focus on efficiency, precision, and innovation, we provide high-quality mechanical solutions that enhance the functionality and longevity of interior spaces.",
  icons: {
    icon: "/uploads/3af253d99bd04058.png",
    apple: "/uploads/3af253d99bd04058.png",
  },
};

export default function AboutUsPage() {
  return (
    <div id="main-container" className="relative w-full min-h-screen">
      <Header />
      <AboutUs />
    </div>
  );
}
