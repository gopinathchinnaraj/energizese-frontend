import type { Metadata } from "next";
import Header from "@/components/layout/header/Header";
import Services from "@/components/services/Services";

export const metadata: Metadata = {
  title: "Services | Energizese",
  description:
    "We provide innovative and reliable mechanical solutions for industrial, commercial, and residential projects, ensuring efficiency, safety, and seamless integration.",
  icons: {
    icon: "/uploads/3af253d99bd04058.png",
    apple: "/uploads/3af253d99bd04058.png",
  },
};

export default function ServicesPage() {
  return (
    <div id="main-container" className="relative w-full min-h-screen">
      <Header />
      <Services />
    </div>
  );
}
