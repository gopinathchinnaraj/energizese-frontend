import type { Metadata } from "next";
import Header from "@/components/layout/header/Header";
import Careers from "@/components/careers/Careers";

export const metadata: Metadata = {
  title: "Career | Energizese",
  description:
    "Join our team. We deliver high-quality solutions across Industrial, Commercial, and Residential projects. Advance your career in a supportive, growth-focused environment.",
  icons: {
    icon: "/uploads/3af253d99bd04058.png",
    apple: "/uploads/3af253d99bd04058.png",
  },
};

export default function CareersPage() {
  return (
    <div id="main-container" className="relative w-full min-h-screen">
      <Header />
      <Careers />
    </div>
  );
}
