import type { Metadata } from "next";
import Header from "@/components/layout/header/Header";
import Contact from "@/components/contact/Contact";

export const metadata: Metadata = {
  title: "Contact Us | Energizese",
  description:
    "We are here to assist you with cutting-edge mechanical solutions for your projects. We're just a call or message away. Let's create efficient, future-ready spaces together.",
  icons: {
    icon: "/uploads/3af253d99bd04058.png",
    apple: "/uploads/3af253d99bd04058.png",
  },
};

export default function ContactUsPage() {
  return (
    <div id="main-container" className="relative w-full min-h-screen">
      <Header />
      <Contact />
    </div>
  );
}
