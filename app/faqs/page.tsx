import type { Metadata } from "next";
import Header from "@/components/layout/header/Header";
import Faqs from "@/components/faqs/Faqs";

export const metadata: Metadata = {
  title: "Faq | Energizese",
  description:
    "Find answers to frequently asked questions about Energizese's quality, commitment, and services.",
  icons: {
    icon: "/uploads/3af253d99bd04058.png",
    apple: "/uploads/3af253d99bd04058.png",
  },
};

export default function FaqsPage() {
  return (
    <div id="main-container" className="relative w-full min-h-screen">
      <Header />
      <Faqs />
    </div>
  );
}
